"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AUTHOR } from "@/lib/posts/constants";
import { useTheme } from "next-themes";

type ProfilePhotoProps = {
  /** Either one image, or an array of images for different themes, [light, dark]. */
  src: string | [string, string];
  /** Image's original size in pixels. Must be square. */
  size: number | [number, number];
};

export default function ProfilePhoto({ src, size }: ProfilePhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  const imgSrc = Array.isArray(src) ? src[theme === "dark" ? 1 : 0] : src;
  const imgAlt = `${
    Array.isArray(src) ? (theme === "dark" ? "Dark " : "Light ") : ""
  }Profile Photo | ${AUTHOR.name}`;

  return (
    <div
      className={cn(
        "h-32 sm:h-full transition-opacity duration-300 aspect-square",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={imgSrc}
        title={AUTHOR.name}
        alt={imgAlt}
        width={
          Array.isArray(size) ? (theme === "dark" ? size[1] : size[0]) : size
        }
        height={
          Array.isArray(size) ? (theme === "dark" ? size[1] : size[0]) : size
        }
        priority
        draggable={false}
        className="border rounded-full pointer-events-none"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
