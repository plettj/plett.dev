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
    <div className="xl:grid xl:grid-cols-[auto_min(80ch,100%)_auto] xl:gap-x-4 flex flex-col">
      <TableOfContents toc={toc} />
      {content.map((data) => {
        return <Chapter data={data} />;
      })}
    </div>
  );
}
