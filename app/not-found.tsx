"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { URL_HOME } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full py-8 flex items-center justify-center text-center">
      <div>
        <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
          404
        </span>
        <p className="mt-4 mb-8">
          The page you&apos;re looking for either doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <BackButton variant="ghost" />
          <Button variant="outline" asChild>
            <Link href={`https://old.plett.dev${pathname}`}>
              Try my old site
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={URL_HOME}>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
