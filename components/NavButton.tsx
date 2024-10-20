import Link from "next/link";
import { Button } from "./ui/button";

export default function NavButton({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Button asChild className="px-2" variant="link">
      <Link href={href}>{children}</Link>
    </Button>
  );
}
