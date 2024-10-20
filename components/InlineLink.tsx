import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function InlineLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Button
      asChild
      className={cn(
        "p-0 h-6 -my-1 text-foreground font-semibold text-stone-500 dark:text-stone-400"
      )}
      variant="link"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
