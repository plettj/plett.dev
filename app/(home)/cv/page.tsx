import InlineLink from "@/components/InlineLink";
import { BASE_URL, PATH_CV, PATH_CV_STATIC } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "CV",
  description: "Josiah Plett's general technical resume - 2024",
  openGraph: getOGData({
    title: "CV",
    description: "Josiah Plett's general technical resume - 2024",
    url: `${BASE_URL}${PATH_CV}`,
  }),
};

export default async function CV() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Click{" "}
        <InlineLink href={PATH_CV_STATIC} external>
          here
        </InlineLink>{" "}
        to open my CV as a PDF.
      </p>
      <iframe
        className="h-[126vw] max-h-[835px] mt-8 mb-2"
        src={PATH_CV_STATIC}
      />
    </div>
  );
}
