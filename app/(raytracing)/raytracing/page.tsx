import BookContainer from "@/components/common/book/BookContainer";
import {
  BASE_URL,
  META_DESCRIPTION_RAYTRACING,
  PATH_RAYTRACING,
} from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import { raytracingBook } from "./content";

export const metadata: Metadata = {
  title: "Raytracing",
  description: META_DESCRIPTION_RAYTRACING,
  openGraph: getOGData({
    title: "Raytracing",
    description: META_DESCRIPTION_RAYTRACING,
    url: `${BASE_URL}${PATH_RAYTRACING}`,
  }),
};

export default async function Raytracing() {
  return <BookContainer toc={raytracingBook} content={raytracingBook} />;
}
