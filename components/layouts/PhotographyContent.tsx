"use client";

import { photos } from "@/app/(photography)/photography/content";
import MasonryLayout from "./MasonryLayout";
import { LoadMethod } from "../Photo";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import InlineLink from "../InlineLink";
import { useState } from "react";

export default function PhotographyContent() {
  const [loadMethod, setLoadMethod] = useState<LoadMethod>("border");

  return (
    <>
      <div className="w-full max-w-[140ch] mx-auto pb-8">
        <MasonryLayout images={photos} loadMethod={loadMethod} />
      </div>
      <div className="w-full max-w-[80ch] mx-auto">
        <p>
          A nice custom masonry layout, built by me.
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
                setLoadMethod(loadMethod === "border" ? "blur" : "border");
              }}
            />
            <Label htmlFor="loading-mode" className="cursor-pointer">
              Modern-style lazy loading
            </Label>
          </div>
          {loadMethod === "border" && (
            <span className="text-muted-foreground font-thin cursor-text">
              (scroll to see)
            </span>
          )}
        </div>
      </div>
    </>
  );
}