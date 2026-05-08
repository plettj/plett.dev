import { BookData } from "./bookTypes";
import Chapter from "./Chapter";
import TableOfContents from "./TableOfContents";

export default function BookContainer({ book }: { book: BookData }) {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_min(80ch,100%)_1fr] xl:gap-x-2 sm:mx-[-2.5rem] flex flex-col">
      {/* <div> tag with main styling wraps the <article> tag so that font size doesn't affect container size, ie. 80ch width */}
      <article className="contents text-base px-8 xl:px-0">
        <TableOfContents intro={book.intro} chapters={book.chapters} />
        <Chapter data={book.intro} />
        {book.chapters.map((data, i) => {
          return <Chapter key={data.hash} prefix={`${i + 1}.`} data={data} />;
        })}
      </article>
    </div>
  );
}
