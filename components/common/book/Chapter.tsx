import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";
import Photo from "../photos/Photo";
import { ChapterData } from "./bookTypes";

const fontBook = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-posts",
});

export default function Chapter({ data }: { data: ChapterData }) {
  return (
    <div className="contents">
      <section className="xl:col-start-2 col-auto px-0 xl:px-8 pb-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold border-b pb-0.5 mb-6 w-full">
          {data.title}
        </h2>
        <div className={cn("w-full", fontBook.className)}>{data.content}</div>
        {/* On thinner devices, render images inline. */}
        <div className="flex xl:hidden flex-col gap-2 mt-4 max-w-[40ch]">
          {data.images &&
            data.images.map((image) => {
              return (
                <Photo key={image.location} image={image} loadMethod="border" />
              );
            })}
        </div>
      </section>
      {/* On wider devices, render images in the right-side gutter. */}
      <aside className="hidden xl:flex col-start-3 flex-col max-w-[40ch] gap-2 pb-4">
        {data.images &&
          data.images.map((image) => {
            return (
              <Photo key={image.location} image={image} loadMethod="border" />
            );
          })}
      </aside>
    </div>
  );
}
