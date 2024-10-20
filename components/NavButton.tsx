import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function NavButton({
  children,
  href,
  active = false,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  active?: boolean;
}>) {
  return (
    <Button
      asChild
      className={cn(
        "px-2 text-foreground",
        !active && "text-stone-500 dark:text-stone-400"
      )}
      variant="link"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
