"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton({
  variant = "default",
}: {
  variant?: ButtonProps["variant"];
}) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const hasHistory =
    typeof window !== "undefined" &&
    window.history?.length &&
    window.history.length > 1;

  return (
    <Button
      onClick={router.back}
      variant={variant}
      className={cn(!hasHistory && "hidden")}
    >
      Go back
    </Button>
  );
}
