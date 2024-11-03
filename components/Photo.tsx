"use client";

import Image from "next/image";
import { InView } from "react-intersection-observer";
import { MasonryImage } from "./layouts/MasonryLayout";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type LoadMethod = "border" | "blur";

export default function Photo({
  image,
  loadMethod,
  priority = false,
}: {
  image: MasonryImage;
  loadMethod: LoadMethod;
  priority: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  switch (loadMethod) {
    case "border":
      return (
        <InView rootMargin="35%" threshold={0.1} fallbackInView>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={cn(
                "border-[1px] w-full -m-[1px] relative transition-colors duration-700",
                inView && isLoaded && "border-transparent"
              )}
              style={{
                aspectRatio: `${image.size[0]}/${image.size[1]}`, // Tailwind `aspect-[${num}]` fails.
              }}
            >
              <div
                className={cn(
                  "group transition-opacity duration-700",
                  inView && isLoaded ? "opacity-100" : "opacity-0"
                )}
              >
                <PhotoContent
                  image={image}
                  priority={priority}
                  inView={inView}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </div>
          )}
        </InView>
      );
    case "blur":
      return (
        <div
          className="border-[1px] border-transparent w-full -m-[1px]"
          style={{
            aspectRatio: `${image.size[0]}/${image.size[1]}`, // To prevent layout shift between this and "border" load methods.
          }}
        >
          <PhotoContent image={image} priority={priority} inView blur />
        </div>
      );
  }
}

/**
 * Supporter component for `Photo` that holds the actual image and its overlaid text.
 */
function PhotoContent({
  image,
  priority,
  inView,
  onLoad,
  blur,
}: {
  image: MasonryImage;
  priority: boolean;
  inView: boolean;
  onLoad?: () => void;
  blur?: boolean;
}) {
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        title={`${image.location} | ${image.year}`}
        width={image.size[0]}
        height={image.size[1]}
        priority={priority}
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        className="pointer-events-none" // Prevent tooltips on hover.
        {...(blur && {
          placeholder: "blur", // Never visible; see `root/scripts/generateBlurData/README.md`.
          blurDataURL: image.blurDataURL, // Never visible; see `root/scripts/generateBlurData/README.md`.
        })}
        onLoad={onLoad}
      />
      <div
        className={cn(
          "absolute left-0 bottom-0 right-0 flex justify-between text-white font-semibold p-1.5 pr-2 transform transition-all duration-200 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0",
          !inView && "hidden"
        )}
      >
        <p className="font-thin">{image.year}</p>
        <p>{image.location}</p>
      </div>
    </>
  );
}
