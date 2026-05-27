import PostPreview from "@/components/posts/PostPreview";
import H1 from "@/components/ui/typography";
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
  // const books = getAllBooks();

  // TODO: Add a filtering option ("Main posts", "Quick posts"), and only show main posts by default.

  let currentYear = new Date().getFullYear() + 1;

  return (
    <section className="flex flex-col gap-4">
      <H1>Books</H1>
      <H1>Posts</H1>
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
    </section>
  );
}
