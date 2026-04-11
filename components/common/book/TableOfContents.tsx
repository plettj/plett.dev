"use client";

import { useActiveHash } from "@/hooks/useActiveHash";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { ChapterData } from "./bookTypes";

export default function TableOfContents({
  chapters,
}: {
  chapters: ChapterData[];
}) {
  const hashes = useMemo(() => chapters.map((c) => c.hash), [chapters]);
  const activeHash = useActiveHash(hashes);

  return (
    <nav className="w-full flex flex-col pb-6 xl:sticky xl:top-12 xl:pt-2 xl:pb-0">
      <div className="xl:w-full xl:max-w-[40ch] xl:self-end px-0 sm:px-8 xl:px-0 flex flex-col gap-1">
        {chapters.map((chapter, i) => {
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
              <span className="font-medium">
                {i + 1}. {chapter.title}
              </span>
              <span className="text-muted-foreground opacity-60 font-light">
                7 min
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
