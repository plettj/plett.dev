import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";
import Photo from "../photos/Photo";
import { ChapterData } from "./bookTypes";

const fontBook = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-posts",
});

export default function Chapter({
  data,
  prefix,
  isSubChapter = false,
}: {
  data: ChapterData;
  prefix: string;
  isSubChapter?: boolean;
}) {
  return (
    <div className="contents">
      <section className="xl:col-start-2 col-auto px-0 sm:px-8 pb-4 flex flex-col items-center">
        <div className="w-full border-b pb-0.5 mb-4 flex justify-between items-baseline">
          {isSubChapter ? (
            <h4 id={data.hash} className="text-lg font-bold">
              {prefix} {data.title}
            </h4>
          ) : (
            <h2 id={data.hash} className="text-2xl font-bold">
              {prefix} {data.title}
            </h2>
          )}
          {!isSubChapter && (
            <span className="text-muted-foreground opacity-60 font-light">
              7 min
            </span>
          )}
        </div>
        {/* Mini-TOC only on top-level chapters with children */}
        {!isSubChapter && data.children && (
          <ChapterTOC chapters={data.children} prefix={prefix} />
        )}
        <div className={cn("w-full mt-0", fontBook.className)}>
          {data.content}
        </div>
        {/* On thinner devices, render images inline. */}
        <div className="flex xl:hidden flex-col gap-2 mt-4 max-w-[40ch]">
          {data.images?.map((image) => (
            <Photo key={image.location} image={image} loadMethod="border" />
          ))}
        </div>
      </section>
      {/* On wider devices, render images in the right-side gutter. */}
      <aside className="hidden xl:flex col-start-3 flex-col max-w-[40ch] gap-2 mt-8 pb-4">
        {data.images?.map((image) => (
          <Photo key={image.location} image={image} loadMethod="border" />
        ))}
      </aside>

      {data.children?.map((child, i) => (
        <Chapter
          key={child.hash}
          data={child}
          prefix={`${prefix}${i + 1}.`}
          isSubChapter
        />
      ))}
    </div>
  );
}

function ChapterTOC({
  chapters,
  prefix,
}: {
  chapters: ChapterData[];
  prefix: string;
}) {
  return (
    <nav className="w-full flex flex-col border-b pb-4 mb-4">
      {chapters.map((child, i) => (
        <a
          key={child.hash}
          href={`#${child.hash}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
        >
          {prefix}
          {i + 1}. {child.title}
        </a>
      ))}
    </nav>
  );
}
