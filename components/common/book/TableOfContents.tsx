import { TOCData } from "./bookTypes";

export default function TableOfContents({ toc }: { toc: TOCData[] }) {
  return (
    <section className="w-full flex flex-col sticky">
      <div className="xl:w-full xl:max-w-[40ch] xl:self-end">
        {toc.map((content) => {
          return (
            <div key={content.hash} className="w-full">
              {content.title}
            </div>
          );
        })}
      </div>
    </section>
  );
}
