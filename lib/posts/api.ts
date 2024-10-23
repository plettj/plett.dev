import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "./types";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Throws if the slug is not valid; otherwise, returns the post object.
 *
 * @param slug URL slug of the post to find
 * @returns Post object corresponding to the given slug
 */
export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    throw new Error(`No post corresponds to the given slug: ${slug}.`);
  }

  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Post;
}

export function getPostBySlugSafely(slug: string): Post | null {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date).getTime() > new Date(post2.date).getTime() ? -1 : 1
    );
  return posts;
}
