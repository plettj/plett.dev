"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";

export default function BackButton({
  variant = "default",
}: {
  variant?: ButtonProps["variant"];
}) {
  const router = useRouter();

  const hasHistory =
    (typeof window !== "undefined" &&
      window.history?.length &&
      window.history.length > 1) ||
    typeof window === "undefined";

  if (!hasHistory) {
    return null;
  }

  return (
    <Button onClick={router.back} variant={variant}>
      Go back
    </Button>
  );
}
