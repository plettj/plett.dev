import InlineLink from "@/components/InlineLink";
import { URL_MY_OLD_SITE } from "@/lib/constants";

export const metadata = {
  title: "Photography",
};

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        See my{" "}
        <InlineLink href={`${URL_MY_OLD_SITE}/More/photography`} external>
          old portfolio
        </InlineLink>
        . This new portfolio is coming soon.
      </p>
    </div>
  );
}
