import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#a8a29e"
      height={2}
      showSpinner={false}
      showAtBottom
      shadow="none"
      speed={300}
    />
  );
}
