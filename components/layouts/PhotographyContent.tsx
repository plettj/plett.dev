"use client";

import { photos } from "@/app/(photography)/photography/content";
import { useState } from "react";
import InlineLink from "../common/links/InlineLink";
import MasonryLayout from "../common/photos/MasonryLayout";
import { LoadMethod } from "../common/photos/Photo";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export default function PhotographyContent() {
  const [loadMethod, setLoadMethod] = useState<LoadMethod>("border");

  return (
    <>
      <div className="w-full max-w-[140ch] mx-auto pb-8">
        <MasonryLayout images={photos} loadMethod={loadMethod} />
      </div>
      <div className="w-full max-w-[72ch] mx-auto">
        <p>
          A nice custom masonry layout, built by me.{" "}
          <InlineLink href="https://github.com/plettj/plett.dev">
            Code
          </InlineLink>
          .
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="cursor-pointer flex items-center gap-4">
            <Switch
              id="loading-mode"
              defaultChecked={loadMethod === "border"}
              onCheckedChange={() => {
                // Slight delay to allow the switch to animate before reloading images.
                setTimeout(() => {
                  setLoadMethod(loadMethod === "border" ? "blur" : "border");
                }, 150);
              }}
            />
            <Label htmlFor="loading-mode" className="cursor-pointer">
              Modern-style lazy loading
            </Label>
          </div>
          {loadMethod === "border" && (
            <span className="text-muted-foreground font-thin cursor-text hidden sm:block">
              (scroll to see)
            </span>
          )}
        </div>
      </div>
    </>
  );
}
