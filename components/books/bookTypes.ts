import { MasonryImage } from "../common/photos/MasonryLayout";

export type ChapterData = {
  title: string;
  hash: string;
  readingTime: number;
  content: React.ReactNode;
  // Image display borrows from my masonry layout setup.
  images?: MasonryImage[];
  children?: ChapterData[];
  // Allows styling to set the intro chapter apart from normal chapters.
  isIntro?: boolean;
};

export type BookMeta = {
  title: string;
  preview: string;
  date: string;
  tags: string[];
  coverImage?: string;
  ogImage?: string;
};

export type BookData = {
  meta: BookMeta;
  intro: ChapterData;
  chapters: ChapterData[];
};
