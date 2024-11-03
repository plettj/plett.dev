import { BASE_URL, PATH_PHOTOGRAPHY, URL_MY_OLD_SITE } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import PhotographyContent from "@/components/layouts/PhotographyContent";

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
      <PhotographyContent />
    </div>
  );
}
