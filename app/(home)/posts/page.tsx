import PostPreview from "@/components/posts/PostPreview";
import { BASE_URL, PATH_WRITING } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";
import { cn, getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "My published writing, which currently includes technical and opinion pieces.",
  openGraph: getOGData({
    title: "Writing",
    description:
      "My published writing, which currently includes technical and opinion pieces.",
    url: `${BASE_URL}${PATH_WRITING}`,
  }),
};

export default async function Writing() {
  const posts = getAllPosts();

  // TODO: Add a filtering option ("Main posts", "Quick posts"), and only show main posts by default.

  let currentYear = new Date().getFullYear() + 1;

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        const postYear = new Date(post.date).getFullYear();
        const showYear = postYear !== currentYear;
        currentYear = postYear;

        return (
          <div
            key={post.slug}
            className={cn("flex justify-center", showYear && "border-t pt-4")}
          >
            <div className="w-[16%] min-w-12">
              {showYear && (
                <h2 className="font-semibold text-muted-foreground">
                  {postYear}
                </h2>
              )}
            </div>
            <div className={cn("w-[84%]", !showYear && "border-t pt-4")}>
              <PostPreview post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
