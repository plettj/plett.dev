"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { URL_HOME } from "@/lib/constants";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full p-8 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <p className="my-4">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <BackButton variant="outline" />
        <Button variant="ghost" asChild>
          <Link href={URL_HOME}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
