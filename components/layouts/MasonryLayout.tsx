"use client";

import { useMemo } from "react";
import { useMeasure } from "react-use";
import Photo from "../Photo";

export type MasonryImage = {
  src: string;
  alt: string;
  description: string;
  size: [number, number];
};

type MasonryLayoutProps = {
  images: MasonryImage[];
  maxColumns?: number;
};

/**
 * My custom dynamic, animated Masonry layout component.
 */
export default function MasonryLayout({
  images,
  maxColumns = 3,
}: MasonryLayoutProps) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const w = width ? width : 608;
  const columns = w > 600 ? maxColumns : w > 400 ? 2 : 1;

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
    <div ref={ref} className="w-full flex gap-3">
      {columnImages.map((column, index) => {
        return (
          <div key={index} className="flex flex-col gap-3 w-full">
            {column.map((image) => {
              return (
                <Photo key={image.src} image={image} priority={index === 0} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}