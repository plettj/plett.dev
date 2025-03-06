import { BASE_URL, COPYRIGHT_STRING, PATH_WRITING } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";
import { AUTHOR } from "@/lib/posts/constants";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Josiah's Writing",
    description: "Reflective writing, with a bit of programming on the side.",
    generator: "rss for Node",
    feed_url: `${BASE_URL}/feed.xml`,
    site_url: BASE_URL,
    managingEditor: AUTHOR.name,
    webMaster: AUTHOR.name,
    copyright: COPYRIGHT_STRING,
    language: "en-CA",
    pubDate: new Date().toUTCString(),
    ttl: 60 * 24,
  });

  const allPosts = getAllPosts();

  if (allPosts) {
    allPosts.map((post) => {
      feed.item({
        title: post.title,
        description: post.preview,
        url: `${BASE_URL}${PATH_WRITING}/${post.slug}`,
        categories: post.tags,
        author: AUTHOR.name,
        date: post.date,
        lat: post.lat ?? undefined,
        long: post.long ?? undefined,
      });
    });
  }

  return new Response(feed.xml({ indent: "\t" }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
