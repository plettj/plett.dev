import Navigation from "@/components/layouts/Navigation";
import PostBody from "@/components/posts/PostBody";
import PostFooter from "@/components/posts/PostFooter";
import PostHeader from "@/components/posts/PostHeader";
import { Code } from "@/components/ui/code";
import { BASE_URL, PATH_WRITING } from "@/lib/constants";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import { AUTHOR } from "@/lib/posts/constants";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return (
      <div className="w-full">
        <Navigation />
        <p className="mb-6">
          Post <Code>{params.slug[0]}</Code> not found.
        </p>
        <PostFooter />
      </div>
    );
  }

  const content = await markdownToHtml(post.content);

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;

  return (
    <article className="mt-8 sm:mt-10">
      <PostHeader
        title={post.title}
        subtitle={post.subtitle}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={content} />
      <PostFooter nextPost={nextPost} />
    </article>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return {
      title: "Post 404",
      description: "Oops, this link doesn't point to any of my posts. :-]",
      openGraph: getOGData({
        title: "Post 404",
        description: "Oops, this link doesn't point to any of my posts. :-]",
        url: `${BASE_URL}${PATH_WRITING}/${params.slug[0]}`,
      }),
    };
  }

  const title = `${post.title}`;

  return {
    title,
    description: post.preview,
    keywords: post.tags,
    alternates: {
      canonical: `${PATH_WRITING}/${post.slug}`,
    },
    authors: AUTHOR,
    creator: "Josiah Plett",
    openGraph: getOGData({
      type: "article",
      title,
      description: post.preview,
      url: `${BASE_URL}${PATH_WRITING}/${post.slug}`,
      ...(post.ogImage && {
        previewImage: {
          url: post.ogImage,
          alt: post.subtitle ?? "Post display image",
        },
      }),
    }),
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
