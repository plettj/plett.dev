import {
  BASE_URL,
  PATH_ABOUT,
  PATH_CV,
  PATH_MAZE,
  PATH_NOTES,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
} from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";
import { formatDateAbbr } from "@/lib/utils";
import { MetadataRoute } from "next";
import { csItems, mathItems } from "./(home)/notes/content";

/**
 * The sitemap tells web scrapers, like Google's, about the routes within our application.
 * Importantly, this includes:
 *   - their *relative* priority (putting them all at 1 makes crawlers unhappy), and
 *   - their update frequency.
 *
 * More information: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: "2025-06-05",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}${PATH_ABOUT}`,
      lastModified: "2025-06-05",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}${PATH_WRITING}`,
      lastModified: "2025-05-12",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${PATH_NOTES}`,
      lastModified: "2024-11-19",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}${PATH_PHOTOGRAPHY}`,
      lastModified: "2025-03-20",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}${PATH_CV}`,
      lastModified: "2025-06-03",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}${PATH_MAZE}`,
      lastModified: "2024-11-28",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogs = getAllPosts();

  blogs.forEach((post) => {
    routes.push({
      url: `${BASE_URL}${PATH_WRITING}/${post.slug}`,
      lastModified: formatDateAbbr(new Date(post.date)),
      changeFrequency: "yearly",
      priority: 0.2,
    });
  });

  [...csItems, ...mathItems].forEach((item) => {
    routes.push({
      url: `${BASE_URL}${item.href}`,
      lastModified: "2024-11-26",
      changeFrequency: "yearly",
      priority: 0.1,
    });
  });

  return routes;
}
