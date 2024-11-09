import { IBM_Plex_Sans } from "next/font/google";
import markdownStyles from "./markdown-styles.module.css";
import { cn } from "@/lib/utils";

const fontPosts = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-posts",
});

export default function PostBody({ content }: { content: string }) {
  return (
    <div className={cn("w-full", fontPosts.className)}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
