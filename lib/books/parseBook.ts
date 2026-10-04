import type {
  BookData,
  ChapterData,
  InlineNote,
} from "@/components/books/bookTypes";
import BookImage from "@/components/books/BookImage";
import fs from "fs";
import matter from "gray-matter";
import type { Heading, PhrasingContent, Root, RootContent } from "mdast";
import { compileMDX } from "next-mdx-remote/rsc";
import { remark } from "remark";
import { READING_SPEED_WPM } from "./constants";

export async function parseBook(filePath: string): Promise<BookData> {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content: markdown } = matter(raw);
  const tree = remark().parse(markdown);

  // Split top-level nodes into intro (before first ##) and chapter nodes.
  const firstChapter = tree.children.findIndex(
    (n) => n.type === "heading" && n.depth === 2,
  );
  const introNodes =
    firstChapter === -1 ? tree.children : tree.children.slice(0, firstChapter);
  const chapterNodes =
    firstChapter === -1 ? [] : tree.children.slice(firstChapter);

  const chapters = await Promise.all(
    splitByHeading(chapterNodes, 2).map(async ({ heading, body }) => {
      const title = headingText(heading);
      const subSections = splitByHeading(body, 3);
      // Per-chapter <aside> citation counter. It's an object so it can be passed by reference.
      const citationCounter = { value: 0 };
      const notes: InlineNote[] = [];

      // Nodes before the first "### Heading 3" belong to the chapter's own content.
      const chapterBodyEnd =
        subSections.length > 0
          ? body.indexOf(subSections[0].heading)
          : body.length;
      const chapterBody = body.slice(0, chapterBodyEnd);

      // Compile chapter prose first so its asides are processed first.
      const firstContent = await compileSection(chapterBody, citationCounter, notes);

      const children =
        subSections.length > 0
          ? await Promise.all(
              subSections.map(async ({ heading: sub, body: subBody }) => {
                const subTitle = headingText(sub);
                const subTotalWords = countWords(subBody);
                const subNotes: InlineNote[] = [];
                const subContent = await compileSection(
                  subBody,
                  citationCounter,
                  subNotes,
                );

                return {
                  title: subTitle,
                  hash: textToSlug(subTitle),
                  readingTime: Math.max(
                    1,
                    Math.round(subTotalWords / READING_SPEED_WPM),
                  ),
                  content: subContent,
                  notes: subNotes,
                } satisfies ChapterData;
              }),
            )
          : undefined;

      const totalWords =
        countWords(chapterBody) +
        subSections.reduce((sum, { body }) => sum + countWords(body), 0);

      return {
        title,
        hash: textToSlug(title),
        readingTime: Math.max(1, Math.round(totalWords / READING_SPEED_WPM)),
        content: firstContent,
        notes,
        ...(children && { children }),
      } satisfies ChapterData;
    }),
  );

  // The intro's reading time represents the whole book.
  const totalWords = countWords(introNodes) + countWords(chapterNodes);

  const introNotes: InlineNote[] = [];
  const introCounter = { value: 0 };
  const introContent = await compileSection(
    introNodes,
    introCounter,
    introNotes,
  );
  const intro: ChapterData = {
    title: frontmatter.title,
    hash: textToSlug(frontmatter.title),
    readingTime: Math.max(1, Math.round(totalWords / READING_SPEED_WPM)),
    content: introContent,
    notes: introNotes,
    isIntro: true,
  };

  return {
    meta: {
      title: frontmatter.title,
      preview: frontmatter.preview,
      date: frontmatter.date,
      tags: frontmatter.tags ?? [],
      coverImage: frontmatter.coverImage,
      ogImage: frontmatter.ogImage,
    },
    intro,
    chapters,
  };
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

async function compileSection(
  nodes: RootContent[],
  citationCounter: { value: number },
  notes: InlineNote[],
): Promise<React.ReactNode> {
  const markdown = await processAsides(
    nodesToMarkdown(nodes),
    citationCounter,
    notes,
  );
  const { content } = await compileMDX({
    source: markdown,
    components: { BookImage },
    options: { mdxOptions: { rehypePlugins: [] } },
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

// Replace <aside>...</aside> markdown with auto-numbered marker + note HTML.
async function processAsides(
  markdown: string,
  citationCounter: { value: number },
  notes: InlineNote[],
): Promise<string> {
  const capturedNotes: { number: number; rawHtml: string }[] = [];

  const newMarkdown = markdown.replace(
    /<aside>([\s\S]*?)<\/aside>/g,
    (_, content) => {
      // This operation intentionally modifies the passed value.
      citationCounter.value += 1;

      const n = citationCounter.value;
      const trimmed = content.trim();
      capturedNotes.push({ number: n, rawHtml: trimmed });
      return (
        `<sup className="note-marker">${n}</sup>` +
        `<aside className="note">` +
        `<span className="note-number">${n}.</span>` +
        `<span className="note-body">${content.trim()}</span>` +
        `</aside>`
      );
    },
  );

  // Compile each notes' markdown separately, for accordion display on mobile
  const compiledNotes = await Promise.all(
    capturedNotes.map(async ({ number, rawHtml }) => {
      const { content } = await compileMDX({
        source: rawHtml,
        options: { mdxOptions: { rehypePlugins: [] } },
      });
      return { number, content };
    }),
  );
  notes.push(...compiledNotes);

  return newMarkdown;
}

// Count words in a node tree by serializing back into markdown.
function countWords(nodes: RootContent[]): number {
  return nodesToMarkdown(nodes).trim().split(/\s+/).filter(Boolean).length;
}
