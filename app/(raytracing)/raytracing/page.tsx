import BookContainer from "@/components/books/BookContainer";
import { parseBook } from "@/lib/book/parseBook";
import {
  BASE_URL,
  META_DESCRIPTION_RAYTRACING,
  PATH_RAYTRACING,
} from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import path from "path";

export const metadata: Metadata = {
  title: "Relativistic Raytracing",
  description: META_DESCRIPTION_RAYTRACING,
  openGraph: getOGData({
    title: "Relativistic Raytracing",
    description: META_DESCRIPTION_RAYTRACING,
    url: `${BASE_URL}${PATH_RAYTRACING}`,
  }),
};

export default async function Raytracing() {
  const chapters = await parseBook(
    path.join(process.cwd(), "books", "raytracing.md"),
  );

  return <BookContainer content={chapters} />;
}
