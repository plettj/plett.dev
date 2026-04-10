import { ChapterData, TOCData } from "./bookTypes";
import Chapter from "./Chapter";
import TableOfContents from "./TableOfContents";

export default function BookContainer({
  toc,
  content,
}: {
  toc: TOCData[];
  content: ChapterData[];
}) {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_min(80ch,100%)_1fr] xl:gap-x-2 sm:mx-[-2.5rem] flex flex-col">
      {/* <article> tag inside <div> so that font size doesn't affect container size, ie. 80ch width */}
      <article className="contents text-base px-8 xl:px-0">
        <TableOfContents toc={toc} />
        {content.map((data) => {
          return <Chapter key={data.hash} data={data} />;
        })}
      </article>
    </div>
  );
}
