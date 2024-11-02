import InlineLink from "@/components/InlineLink";
import MasonryLayout from "@/components/layouts/MasonryLayout";
import { URL_MY_OLD_SITE } from "@/lib/constants";
import { photos } from "./content";
import PhotographyContainer from "@/components/layouts/PhotographyContainer";

export const metadata = {
  title: "Photography",
};

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <PhotographyContainer>
        <MasonryLayout images={photos} />
      </PhotographyContainer>
      <p>
        My old photography portfolio can still be found{" "}
        <InlineLink href={`${URL_MY_OLD_SITE}/More/photography`} external>
          here
        </InlineLink>{" "}
        on my old site.
      </p>
    </div>
  );
}
