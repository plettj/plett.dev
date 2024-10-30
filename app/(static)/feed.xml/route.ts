import { BASE_URL, COPYRIGHT_STRING, PATH_WRITING } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";
import { author } from "@/lib/posts/constants";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Josiah Plett's Writing",
    description: "An RSS feed for Josiah Plett's writing.",
    generator: "RSS for Node and Next.js",
    feed_url: `${BASE_URL}/feed.xml`,
    site_url: BASE_URL,
    managingEditor: "Josiah Plett",
    webMaster: "Josiah Plett",
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
        author: author.name,
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
