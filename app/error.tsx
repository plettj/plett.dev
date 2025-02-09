"use client";

import BackButton from "@/components/common/links/BackButton";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="items-center justify-center text-center">
        <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem]/none font-extrabold text-transparent">
          :(
        </span>
        <p className="mt-8 mb-8">Something went wrong in your browser.</p>
        <div className="flex justify-center gap-2">
          <BackButton variant="ghost" />
          <Button variant="ghost" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </Container>
  );
}
