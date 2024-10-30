import {
  BASE_URL,
  PATH_ABOUT,
  PATH_CV,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
} from "@/lib/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: "2024-10-27",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}${PATH_ABOUT}`,
      lastModified: "2024-10-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}${PATH_WRITING}`,
      lastModified: "2024-10-27",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${PATH_PHOTOGRAPHY}`,
      lastModified: "2024-10-20",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}${PATH_CV}`,
      lastModified: "2024-10-20",
      changeFrequency: "yearly",
      priority: 0.01,
    },
  ];
}
