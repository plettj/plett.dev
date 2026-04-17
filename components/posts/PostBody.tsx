import "./posts/markdown-styles.css";

import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";

const fontPosts = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-posts",
});

export default function PostBody({ content }: { content: string }) {
  return (
    <div className={cn("w-full", fontPosts.className)}>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
