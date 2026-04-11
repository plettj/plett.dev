import { ChapterData } from "./bookTypes";

export default function TableOfContents({
  chapters,
}: {
  chapters: ChapterData[];
}) {
  return (
    <nav className="w-full flex flex-col sticky top-12 pt-2">
      <div className="xl:w-full xl:max-w-[40ch] xl:self-end px-0 sm:px-8 xl:px-0 flex flex-col gap-1">
        {chapters.map((chapter, i) => (
          <a
            key={chapter.hash}
            href={`#${chapter.hash}`}
            className="flex justify-between text-sm text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
          >
            <span className="font-medium">
              {i + 1}. {chapter.title}
            </span>
            <span className="text-muted-foreground opacity-60 font-light">
              7 min
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
