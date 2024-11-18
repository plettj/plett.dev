"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

export default function BackButton({
  variant = "default",
}: {
  variant?: ButtonProps["variant"];
}) {
  const router = useRouter();

  const hasHistory =
    typeof window !== "undefined" &&
    window.history?.length &&
    window.history.length > 1;

  // TODO: This component gives a "classname doesn't match" warning whenever there is history.
  //       Unsure how to solve at the moment.
  return (
    <Button
      onClick={router.back}
      variant={variant}
      className={cn(hasHistory && "hidden")}
    >
      Go back
    </Button>
  );
}
