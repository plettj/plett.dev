export type Post = {
  /** Post url slug. It is the name of the post file, minus .md */
  slug: string;
  /** Full post title */
  title: string;
  /** Subtitle for display on the post's page */
  subtitle?: string;
  /** Short excerpt of the article to display before opening */
  preview: string;
  /** Keywords of the post, used in OpenGraph metadata */
  tags: string[];
  /** UNSURE WHAT THIS IS FOR! */
  toPreview?: boolean;
  /** Original publish date of the post, in UTC format */
  date: string;
  /** Full markdown-formatted content of the post */
  content: string;
  /** File location of an image for display on the post's page */
  coverImage?: string;
  /** File location of an image for OpenGraph previews */
  ogImage?: string;
};

export type Author = {
  name: string;
  url?: string | URL;
};
