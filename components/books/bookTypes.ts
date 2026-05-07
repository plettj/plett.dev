import { MasonryImage } from "../common/photos/MasonryLayout";

export type ChapterData = {
  title: string;
  hash: string;
  readingTime: number;
  content: React.ReactNode;
  // Image display borrows from my masonry layout setup.
  images?: MasonryImage[];
  children?: ChapterData[];
};
