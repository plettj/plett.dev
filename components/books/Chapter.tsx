import "../posts/markdown-styles.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";
import Photo from "../common/photos/Photo";
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
  prefix?: string;
  isSubChapter?: boolean;
}) {
  const title = prefix ? `${prefix} ${data.title}` : data.title;

  return (
    <div className="contents">
      <section className="xl:col-start-2 col-auto px-0 sm:px-8 pb-4 flex flex-col items-center">
        <div
          id={data.hash}
          className="w-full pt-2 border-b pb-0.5 flex justify-between items-baseline"
        >
          <SectionHeading
            hash={data.hash}
            title={title}
            isSubChapter={isSubChapter}
          />
          {!isSubChapter && (
            <span className="text-muted-foreground opacity-60 font-light whitespace-nowrap">
              {data.readingTime} min
            </span>
          )}
        </div>
        {/* Mini-TOC only on top-level chapters with children */}
        {!isSubChapter && !!data.children?.length && (
          <ChapterTOC chapters={data.children} prefix={prefix} />
        )}
        <div className={cn("markdown w-full mt-0", fontBook.className)}>
          {data.content}
        </div>
        {!!data.notes?.length && (
          <Accordion
            type="single"
            collapsible
            className="w-full xl:hidden -mt-1"
          >
            <AccordionItem value="notes">
              <AccordionTrigger className="group py-2 w-full cursor-pointer decoration-1 decoration-dotted underline sm:decoration-solid sm:no-underline">
                <p className="font-semibold">Notes</p>
                <p className="font-light text-muted-foreground text-right text-balance decoration-muted-foreground sm:group-hover:underline">
                  {data.notes.length} note{data.notes.length == 1 ? "" : "s"}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="flex flex-col gap-3 text-muted-foreground py-2">
                  {data.notes.map((note) => (
                    <li key={note.number} className="flex gap-1">
                      <span className="font-semibold shrink-0">
                        {note.number}.
                      </span>
                      <div
                        className={cn(
                          "note-markdown w-full mt-0",
                          fontBook.className,
                        )}
                      >
                        {note.content}
                      </div>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        <div className="flex flex-col gap-2 mt-4 max-w-[40ch]">
          {data.images?.map((image) => (
            <Photo key={image.location} image={image} loadMethod="border" />
          ))}
        </div>
      </section>

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
  prefix?: string;
}) {
  return (
    <nav className="w-full flex flex-col border-b py-4">
      {chapters.map((child, i) => (
        <a
          key={child.hash}
          href={`#${child.hash}`}
          className="text-sm text-muted-foreground hover:text-foreground leading-relaxed"
        >
          {prefix ? prefix : ""}
          {i + 1}. {child.title}
        </a>
      ))}
    </nav>
  );
}

function SectionHeading({
  hash,
  title,
  isSubChapter,
}: {
  hash: string;
  title: string;
  isSubChapter: boolean;
}) {
  const Heading = isSubChapter ? "h4" : "h2";

  return (
    <a href={`#${hash}`} className="group relative">
      <span className="hidden sm:block absolute -left-5 top-1/2 -translate-y-1/2 text-muted-foreground opacity-0 group-hover:opacity-60 transition-opacity select-none">
        #
      </span>
      <Heading
        className={cn(
          "font-bold text-balance",
          isSubChapter ? "text-lg" : "text-2xl",
        )}
      >
        {title}
      </Heading>
    </a>
  );
}
