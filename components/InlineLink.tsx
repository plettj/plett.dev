import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function InlineLink({
  children,
  href,
  external = false,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}>) {
  return (
    <Button
      asChild
      className={cn(
        "p-0 h-6 -my-1 text-muted-foreground font-semibold",
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
