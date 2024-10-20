"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";

export default function BackButton({
  variant = "default",
}: {
  variant?: ButtonProps["variant"];
}) {
  const router = useRouter();
  return (
    <Button onClick={router.back} variant={variant}>
      Go back
    </Button>
  );
}
