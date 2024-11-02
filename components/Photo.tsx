"use client";
import Image from "next/image";
import { MasonryImage } from "./layouts/MasonryLayout";

export default function Photo({
  image,
  priority = false,
}: {
  image: MasonryImage;
  priority: boolean;
}) {
  return (
    <div className="relative group">
      <Image
        src={image.src}
        alt={image.alt}
        title={image.description}
        width={image.size[0]}
        height={image.size[1]}
        priority={priority}
      />
      <div className="absolute bottom-0 right-0 text-white text-right font-semibold text-sm p-1.5 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {image.description}
      </div>
    </div>
  );
}
