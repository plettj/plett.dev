"use client";

import { useMemo } from "react";
import { useMeasure } from "react-use";
import Photo, { LoadMethod } from "../Photo";

export type MasonryImage = {
  src: string;
  alt: string;
  location: string;
  year: string;
  /** Image's original size in pixels. [width, height] */
  size: [number, number];
  /** See `[root]/scripts/generateBlurData/README.md` for more information. */
  blurDataURL?: string;
};

type MasonryLayoutProps = {
  images: MasonryImage[];
  loadMethod?: LoadMethod;
};

/**
 * My custom dynamic, animated Masonry layout component.
 */
export default function MasonryLayout({
  images,
  loadMethod = "border",
}: MasonryLayoutProps) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const w = width ? width : 608;
  const columns = w > 600 ? 3 : w > 320 ? 2 : 1;

  const columnImages = useMemo(() => {
    const cols = Array(columns)
      .fill(0)
      .map(() => [] as MasonryImage[]);
    const columnHeights: number[] = Array(columns)
      .fill(0)
      .map((_, index) => {
        return Math.abs(index * 2 + 1 - columns) * 0.75;
      });

    images.forEach((image) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      cols[shortestColumn].push(image);
      columnHeights[shortestColumn] += image.size[1] / image.size[0];
    });

    return cols;
  }, [images, columns]);

  return (
    <div ref={ref} className="w-full flex gap-3 sm:gap-4">
      {columnImages.map((column, i) => {
        return (
          <div key={i} className="flex flex-col gap-3 sm:gap-4 w-full">
            {column.map((image, j) => {
              return (
                <Photo
                  key={image.src}
                  image={image}
                  priority={j === 0}
                  loadMethod={loadMethod}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
