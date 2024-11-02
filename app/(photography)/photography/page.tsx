import InlineLink from "@/components/InlineLink";
import MasonryLayout from "@/components/layouts/MasonryLayout";
import { BASE_URL, PATH_PHOTOGRAPHY, URL_MY_OLD_SITE } from "@/lib/constants";
import { photos } from "./content";
import PhotographyContainer from "@/components/layouts/PhotographyContainer";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Photography",
  description: "My amateur photography portfolio.",
  openGraph: getOGData({
    title: "Photography",
    description: "My amateur photography portfolio.",
    url: `${BASE_URL}${PATH_PHOTOGRAPHY}`,
  }),
};

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <PhotographyContainer>
        <MasonryLayout images={photos} />
      </PhotographyContainer>
      <p className="w-full max-w-[80ch] mx-auto">
        My old photography portfolio can still be found{" "}
        <InlineLink href={`${URL_MY_OLD_SITE}/More/photography`} external>
          here
        </InlineLink>
        .
      </p>
    </div>
  );
}
