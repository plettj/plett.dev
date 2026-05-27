export type Book = {
  /** Book url slug. It is the name of the book file, minus .md */
  slug: string;
  /** Full book title */
  title: string;
  /** Subtitle for display on the book's page */
  subtitle?: string;
  /** OpenGraph description */
  preview: string;
  /** Keywords of the book, used in OpenGraph metadata */
  tags: string[];
  /** Original publish date of the book, in Date and Time UTC format */
  date: string;
  /** Reading time of the book, in minutes */
  readingTime: number;
  /** Full markdown-formatted content of the book */
  content: string;
  /** File location of an image for display on the book's page and/or the main writing page */
  coverImage: string;
  /** File location of an image for OpenGraph previews, if different from coverImage */
  ogImage?: string;
  /** Latitude of location for GeoRSS */
  lat?: number;
  /** Longitude of location for GeoRSS */
  long?: number;
};
