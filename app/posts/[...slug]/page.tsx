import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import { author } from "@/lib/posts/constants";
import PostHeader from "@/components/posts/PostHeader";
import { PostBody } from "@/components/posts/PostBody";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <main>
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Josiah Plett`;

  return {
    title,
    description: post.preview,
    authors: author,
    openGraph: {
      type: "article",
      title,
      description: post.preview,
      siteName: "Josiah Plett's Writing",
      // images: [{ url: post.ogImage.url }],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}
