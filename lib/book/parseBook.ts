import type { ChapterData } from "@/components/books/bookTypes";
import { MasonryImage } from "@/components/common/photos/MasonryLayout";
import fs from "fs";
import type { Heading, Html, PhrasingContent, Root, RootContent } from "mdast";
import { compileMDX } from "next-mdx-remote/rsc";
import { remark } from "remark";

export async function parseBook(filePath: string): Promise<ChapterData[]> {
  const raw = fs.readFileSync(filePath, "utf8");
  const tree = remark().parse(raw);

  return Promise.all(
    splitByHeading(tree.children, 2).map(async ({ heading, body }) => {
      const title = headingText(heading);
      const subSections = splitByHeading(body, 3);

      // Nodes before the first "### Heading 3" belong to the chapter's own content.
      const chapterBodyEnd =
        subSections.length > 0
          ? body.indexOf(subSections[0].heading)
          : body.length;
      const { prose, images } = extractImages(body.slice(0, chapterBodyEnd));

      const children =
        subSections.length > 0
          ? await Promise.all(
              subSections.map(async ({ heading: sub, body: subBody }) => {
                const subTitle = headingText(sub);
                const { prose: subProse, images: subImages } =
                  extractImages(subBody);
                return {
                  title: subTitle,
                  hash: textToSlug(subTitle),
                  content: await compileSection(subProse),
                  images: subImages,
                } satisfies ChapterData;
              }),
            )
          : undefined;

      return {
        title,
        hash: textToSlug(title),
        content: await compileSection(prose),
        images,
        ...(children && { children }),
      } satisfies ChapterData;
    }),
  );
}

type HeadedSection = { heading: Heading; body: RootContent[] };

// Partition a node list into sections based on headings (## and ###).
function splitByHeading(nodes: RootContent[], depth: 2 | 3): HeadedSection[] {
  const sections: HeadedSection[] = [];
  let current: HeadedSection | null = null;

  for (const node of nodes) {
    if (node.type === "heading" && node.depth === depth) {
      if (current) sections.push(current);
      current = { heading: node, body: [] };
    } else {
      current?.body.push(node);
    }
  }

  if (current) sections.push(current);
  return sections;
}

// Used to serialize a subset of the MDAST back to a markdown string.
function nodesToMarkdown(nodes: RootContent[]): string {
  return remark().stringify({ type: "root", children: nodes } as Root);
}

async function compileSection(nodes: RootContent[]): Promise<React.ReactNode> {
  const { content } = await compileMDX({
    source: nodesToMarkdown(nodes),
    options: {
      mdxOptions: {
        // TODO: Add rehype-pretty-code for syntax highlighting.
        // TODO: Add support for citations.
        rehypePlugins: [],
      },
    },
  });
  return content;
}

function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

function headingText(node: Heading): string {
  return node.children
    .filter(
      (child): child is Extract<PhrasingContent, { type: "text" }> =>
        child.type === "text",
    )
    .map((child) => child.value)
    .join("");
}

// Parse a raw <img> attribute string.
function parseImgTag(html: string): MasonryImage | null {
  const attr = (name: string): string =>
    new RegExp(`${name}="([^"]*)"`, "i").exec(html)?.[1] ?? "";

  const src = attr("src");
  if (!src) return null;

  return {
    src,
    alt: attr("alt"),
    location: attr("data-location"),
    year: attr("data-year"),
    size: [parseInt(attr("width"), 10) || 0, parseInt(attr("height"), 10) || 0],
  };
}

// Separate <img> html nodes from prose; all other nodes pass through untouched
function extractImages(nodes: RootContent[]): {
  prose: RootContent[];
  images: MasonryImage[];
} {
  const prose: RootContent[] = [];
  const images: MasonryImage[] = [];

  for (const node of nodes) {
    if (node.type === "html") {
      const image = parseImgTag((node as Html).value);
      if (image) {
        images.push(image);
        continue;
      }
    }
    prose.push(node);
  }

  return { prose, images };
}
