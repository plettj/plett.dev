import InlineLink from "@/components/InlineLink";
import Photo from "@/components/Photo";
import { BASE_URL, PATH_MAZE } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import { photo, templateImages } from "./content";

export const metadata: Metadata = {
  title: "4D Maze",
  description:
    "Josiah's 4-dimensional maze, an original design that you can download and build yourself.",
  openGraph: getOGData({
    title: "4D MAZE",
    description:
      "Josiah's 4-dimensional maze, an original design that you can download and build yourself.",
    url: `${BASE_URL}${PATH_MAZE}`,
  }),
};

export default async function Maze() {
  return (
    <div className="flex flex-col gap-4">
      <p>This 4-dimensional physical maze was designed from scratch by me.</p>
      <p>
        Each of the 4 template pages represents a pair of cubes, attached on 2
        surfaces, which are in turn attached to 2 other pairs of cubes, forming
        a 3D{" "}
        <InlineLink
          href="https://en.wikipedia.org/wiki/M%C3%B6bius_strip"
          external
        >
          Möbius Strip
        </InlineLink>{" "}
        commonly known as an{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Infinity_cube" external>
          Infinity Cube
        </InlineLink>
        .
      </p>
      <section className="grid grid-cols-2 gap-3 sm:gap-4 my-8">
        {templateImages.map((image, i) => {
          // NOTE: Borrowed from my photography page. Should likely be more generalized.
          return (
            <Photo
              key={image.src}
              image={image}
              priority={i === 0}
              light={false}
              loadMethod="border"
            />
          );
        })}
      </section>
      <p>If you&apos;d like to assemble it yourself:</p>
      <ol className="ml-6 list-disc [&>li]:mt-2">
        <li>
          <InlineLink href={`/assets/4d-maze-template.zip`}>
            Download the 4 files
          </InlineLink>
          .
        </li>
        <li>Print them, preferably on cardstock for strength.</li>
        <li>Cut them out, according to the mini diagrams on the page.</li>
        <li>Fold and tape the 4D maze together by matching labelled edges.</li>
      </ol>
      <section className="flex justify-center items-center mt-8 mb-4">
        <div className="w-1/2 sm:w-1/3">
          <Photo image={photo} light={false} loadMethod="border" />
        </div>
      </section>
    </div>
  );
}
