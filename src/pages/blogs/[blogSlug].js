"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailPage() {
  const router = useRouter();
  const { blogSlug } = router.query; // dynamic slug from URL

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogSlug) return; // wait until router is ready

    async function fetchBlog() {
      try {
        const res = await fetch(
          `https://competent-dinosaurs-c6df949cc3.strapiapp.com/api/blogs?filters[slug][$eq]=${blogSlug}&populate=*`
        );

        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        const item = data?.data?.[0]; // get the first match

        if (!item) {
          setBlog(null);
          return;
        }

        const imageUrl =
          item.image?.formats?.medium?.url ||
          item.image?.formats?.small?.url ||
          item.image?.url ||
          null;

        const fullImageUrl =
          imageUrl && imageUrl.startsWith("http")
            ? imageUrl
            : imageUrl
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${imageUrl}`
            : null;

        setBlog({
          id: item.id,
          head: item.head || "Untitled",
          description: item.description || "",
          date: item.date || "",
          image: fullImageUrl,
          content: item.content || "",
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [blogSlug]);

  if (loading)
    return <div className="p-20 text-center">Loading article...</div>;

  if (!blog)
    return (
      <div className="p-20 text-center min-h-screen">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Article Not Found
        </h1>
        <Link
          href="/blogs"
          className="text-lg text-[#b1976b] hover:underline mt-8 inline-block"
        >
          &larr; Back to all Articles
        </Link>
      </div>
    );

  return (
    <div className="py-20 px-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="text-lg text-[#b1976b] hover:underline mb-6 inline-block"
        >
          &larr; Back to Blog Index
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#213742] mb-4 leading-tight">
          {blog.head}
        </h1>
        <p className="text-gray-500 mb-10 text-lg">Published: {blog.date}</p>

        {blog.image && (
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src={blog.image}
              alt={blog.head}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none text-xl leading-relaxed text-gray-700">
          <p>{blog.description}</p>

          {blog.content && (
            <div
              className="mt-8 prose-lg"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )}

          <p className="mt-8 italic text-gray-500">
            [This section can be expanded with more article content from
            Strapi.]
          </p>
        </div>
      </div>
    </div>
  );
}
