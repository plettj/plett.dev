"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AUTHOR } from "@/lib/posts/constants";
import { useTheme } from "next-themes";

type ProfilePhotoProps = {
  /** Either one image, or an array of images for different themes: [light, dark]. */
  src: string | [string, string];
  /** Image's original size in pixels. Must be square. */
  size: number | [number, number];
};

export default function ProfilePhoto({ src, size }: ProfilePhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(theme === "dark" ? 1 : 0);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const images = Array.isArray(src) ? src : [src, src];
  const sizes = Array.isArray(size) ? size : [size, size];

  return (
    <div
      className="relative border rounded-full overflow-hidden size-36 sm:size-32 aspect-square flex-grow-0 flex-shrink-0"
      onClick={handleClick}
    >
      {images.map((imageSrc, index) => (
        <Image
          key={index}
          src={imageSrc}
          aria-label={`${index === 1 ? "Dark" : "Light"} Profile Photo | ${
            AUTHOR.name
          }`} // aria-label instead of title to prevent tooltip on hover.
          alt={`${index === 1 ? "Dark" : "Light"} Profile Photo | ${
            AUTHOR.name
          }`}
          width={sizes[index]}
          height={sizes[index]}
          priority
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 transition-all duration-200 rounded-full cursor-pointer",
            isLoaded && activeImage === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
