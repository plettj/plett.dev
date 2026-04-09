import Photo from "../photos/Photo";
import { ChapterData } from "./bookTypes";

export default function Chapter({ data }: { data: ChapterData }) {
  return (
    <div className="display-contents xl:contents-none">
      <section className="xl:col-start-2 col-auto py-4 bg-blue-300">
        <h2>{data.title}</h2>
        {data.content}
        {/* On thinner devices, render images inline. */}
        <div className="hidden xl:flex flex-col gap-2 mt-4">
          {data.images &&
            data.images.map((image) => {
              return <Photo image={image} loadMethod="border" />;
            })}
        </div>
      </section>
      {/* On wider devices, render images in the right-side gutter. */}
      <aside className="col-start-3 sticky top-4 flex flex-col gap-2 py-4 xl:hidden">
        {data.images &&
          data.images.map((image) => {
            return <Photo image={image} loadMethod="border" />;
          })}
      </aside>
    </div>
  );
}
