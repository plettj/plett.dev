import InlineLink from "@/components/InlineLink";
import { PATH_CV_STATIC } from "@/lib/constants";

export const metadata = {
  title: "Resume",
};

export default async function Resume() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Click <InlineLink href={PATH_CV_STATIC}>here</InlineLink> to open my CV
        in a separate tab.
      </p>
      <iframe
        className="h-[126vw] max-h-[835px] mt-8 mb-2"
        src={PATH_CV_STATIC}
      />
    </div>
  );
}
