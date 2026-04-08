import TableOfContents from "./TableOfContents";

export default function BookContainer() {
  return (
    <div className="flex gap-4">
      <section className="bg-blue-300">
        <TableOfContents />
      </section>
      <section className="flex flex-col text-sm px-6 w-full max-w-[80ch] sm:px-8 bg-red-300">
        <h1>... put TOC here</h1>
      </section>
    </div>
  );
}
