import { MasonryImage } from "../photos/MasonryLayout";

export type ChapterData = {
  title: string;
  hash: string;
  content: React.ReactNode;
  // Image display borrows from my masonry layout setup.
  images: MasonryImage[];
};

export type TOCData = {
  title: string;
  hash: string;
  children?: TOCData[];
};
