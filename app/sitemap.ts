import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://plett.dev",
      lastModified: "2024-10-27",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://plett.dev/about",
      lastModified: "2024-10-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://plett.dev/writing",
      lastModified: "2024-10-27",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://plett.dev/photography",
      lastModified: "2024-10-20",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://plett.dev/cv",
      lastModified: "2024-10-20",
      changeFrequency: "yearly",
      priority: 0.01,
    },
  ];
}
