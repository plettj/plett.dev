import InlineLink from "@/components/InlineLink";

export const metadata = {
  title: "Photography | Josiah Plett",
};

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p>
        See my{" "}
        <InlineLink href="https://old.plett.dev/More/photography" external>
          old portfolio
        </InlineLink>
        . This new portfolio is coming soon.
      </p>
    </div>
  );
}