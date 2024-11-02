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
          {(inView || hasLoaded) && (
            <Image
              src={image.src}
              alt={image.alt}
              title={image.description}
              width={image.size[0]}
              height={image.size[1]}
              priority={priority}
              onLoadingComplete={() => setHasLoaded(true)}
            />
          )}
          <div className="absolute bottom-0 right-0 text-white text-right font-semibold text-sm p-1.5 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {image.description}
          </div>
        </div>
      )}
    </InView>
  );
}
