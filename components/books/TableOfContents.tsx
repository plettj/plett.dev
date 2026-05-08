"use client";

import { useActiveHash } from "@/hooks/useActiveHash";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { ChapterData } from "./bookTypes";

export default function TableOfContents({
  intro,
  chapters,
}: {
  intro: ChapterData;
  chapters: ChapterData[];
}) {
  const hashes = useMemo(
    () => [intro.hash, ...chapters.map((c) => c.hash)],
    [intro, chapters],
  );
  const activeHash = useActiveHash(hashes);

  return (
    <nav className="w-full flex flex-col pb-6 xl:sticky xl:top-12 xl:pt-2 xl:pb-0">
      <div className="xl:w-full xl:max-w-[40ch] xl:self-end px-0 sm:px-8 xl:px-0 flex flex-col gap-1">
        {[intro, ...chapters].map((chapter, i) => {
          const isActive = activeHash == chapter.hash;

          return (
            <a
              key={chapter.hash}
              href={`#${chapter.hash}`}
              className={cn(
                "flex justify-between text-sm text-muted-foreground hover:text-foreground leading-relaxed",
                isActive && "text-foreground",
              )}
            >
              <span
                className={cn(
                  chapter.isIntro ? "font-thin italic" : "font-medium",
                  "text-balance",
                )}
              >
                {/* The title chapter is first, and shouldn't contribute to chapter indexing. */}
                {i > 0 ? `${i}. ` : ""}
                {chapter.title}
              </span>
              <span className="text-muted-foreground opacity-60 font-light whitespace-nowrap">
                {chapter.readingTime} min
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
