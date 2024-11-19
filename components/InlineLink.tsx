import Link from "next/link";
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
    <Link
      href={href}
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      className={cn(
        "p-0 h-6 -my-1 text-muted-foreground font-semibold decoration-dotted underline sm:decoration-solid sm:no-underline hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
