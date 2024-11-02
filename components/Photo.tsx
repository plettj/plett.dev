"use client";

import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { MasonryImage } from "./layouts/MasonryLayout";

export default function Photo({
  image,
  priority = false,
}: {
  image: MasonryImage;
  priority: boolean;
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <InView rootMargin="100px" threshold={0}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`relative group transition-opacity duration-500 ${
            inView && hasLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            title={`${image.location} | ${image.year}`}
            width={image.size[0]}
            height={image.size[1]}
            priority={priority}
            draggable={false}
            blurDataURL={image.blurDataURL}
            placeholder="blur"
            onLoad={() => setHasLoaded(true)}
          />
          <div className="absolute left-0 bottom-0 right-0 flex justify-between text-white font-semibold p-1.5 pr-2 transform transition-all duration-200 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="font-thin">{image.year}</p>
            <p>{image.location}</p>
          </div>
        </div>
      )}
    </InView>
  );
}
