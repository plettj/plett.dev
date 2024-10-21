export type Post = {
  /** Post url slug. It is the name of the post file, minus .md */
  slug: string;
  /** Full post title */
  title: string;
  /** Subtitle for display on the post's page */
  subtitle?: string;
  /** Short excerpt of the article to display before opening */
  preview: string;
  /** UNSURE WHAT THIS IS FOR! */
  toPreview?: boolean;
  /** Original publish date of the post */
  date: string;
  /** Full markdown-formatted content of the post */
  content: string;
  /** File location of an image for display on the post's page */
  coverImage?: string;
  /** File location of an image at*/
  ogImage?: string;
};

export type Author = {
  name: string;
  url?: string | URL;
};
