import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function NavButton({
  children,
  href,
  active = false,
  external = false,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  active?: boolean;
  external?: boolean;
  className?: string;
}>) {
  return (
    <Button
      asChild
      className={cn(
        "px-2 text-foreground font-semibold",
        !active && "text-muted-foreground",
        className
      )}
      variant="link"
    >
      <Link
        href={href}
        {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {children}
      </Link>
    </Button>
  );
}
