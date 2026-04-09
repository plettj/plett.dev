import { TOCData } from "./bookTypes";

export default function TableOfContents({ toc }: { toc: TOCData[] }) {
  return (
    <section className="sticky bg-blue-300">
      {toc.map((content) => {
        return <div className="bg-green-300">{content.title}</div>;
      })}
    </section>
  );
}
