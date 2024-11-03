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
  // TODO: This entire component does not need to be a button. Simplify.
  return (
    <Button
      asChild
      className={cn(
        "p-0 h-6 -my-1 text-muted-foreground font-semibold decoration-dotted underline sm:decoration-solid sm:no-underline hover:underline",
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
