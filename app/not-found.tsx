"use client";

import BackButton from "@/components/common/links/BackButton";
import InlineLink from "@/components/common/links/InlineLink";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { PATH_HOME, URL_MY_OLD_SITE } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <Container>
      <div className="items-center justify-center text-center">
        <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem]/none font-extrabold text-transparent">
          404
        </span>
        <p className="mt-4 mb-8">
          The page you&apos;re looking for either doesn&apos;t exist, was moved,
          or is from{" "}
          <InlineLink href={`${URL_MY_OLD_SITE}${pathname}`}>
            my old site
          </InlineLink>
          .
        </p>
        <div className="flex justify-center gap-2">
          <BackButton variant="ghost" />
          <Button variant="ghost" asChild>
            <Link href={PATH_HOME}>Back to Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
