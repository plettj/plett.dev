import PhotographyContent from "@/components/layouts/PhotographyContent";
import {
  BASE_URL,
  META_DESCRIPTION_PHOTOGRAPHY,
  PATH_PHOTOGRAPHY,
} from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Photography",
  description: META_DESCRIPTION_PHOTOGRAPHY,
  openGraph: getOGData({
    title: "Photography",
    description: META_DESCRIPTION_PHOTOGRAPHY,
    url: `${BASE_URL}${PATH_PHOTOGRAPHY}`,
  }),
};

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <PhotographyContent />
    </div>
  );
}
