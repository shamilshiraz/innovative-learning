"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import DOMPurify from "dompurify";

export default function BlogDetailPage() {
  const router = useRouter();
  const { blogSlug } = router.query;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogSlug) return;

    const slug = blogSlug.toLowerCase();

    async function fetchBlog() {
      try {
        const res = await fetch(
          `https://competent-dinosaurs-c6df949cc3.strapiapp.com/api/blogs?filters[slug][$eq]=${encodeURIComponent(
            slug
          )}&populate=*`
        );

        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        const item = data?.data?.[0];

        if (!item || !item.attributes) {
          setBlog(null);
          return;
        }

        const attrs = item.attributes;

        const imageData = attrs.image?.data?.attributes;

        const imageUrl =
          imageData?.formats?.medium?.url ||
          imageData?.formats?.small?.url ||
          imageData?.url ||
          null;

        const fullImageUrl =
          imageUrl && imageUrl.startsWith("http")
            ? imageUrl
            : imageUrl
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`
            : null;

        setBlog({
          id: item.id,
          head: attrs.head || "Untitled",
          description: attrs.description || "",
          date: attrs.date || "",
          image: fullImageUrl,
          content: attrs.content || "",
          slug,
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

  if (loading) {
    return <div className="p-20 text-center">Loading article...</div>;
  }

  if (!blog) {
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
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{`${blog.head} | ILH Blog`}</title>
        <meta
          name="description"
          content={blog.description.slice(0, 160)}
        />
        <meta
          name="keywords"
          content={`${blog.head}, ILH Blog, Training Insights, Saudi Arabia`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={`${blog.head} | ILH Blog`} />
        <meta
          property="og:description"
          content={blog.description.slice(0, 160)}
        />
        {blog.image && <meta property="og:image" content={blog.image} />}
        <meta
          property="og:url"
          content={`https://www.innovativelh.com/blogs/${blog.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.head} | ILH Blog`} />
        <meta
          name="twitter:description"
          content={blog.description.slice(0, 160)}
        />
        {blog.image && <meta name="twitter:image" content={blog.image} />}

        {/* Canonical */}
        <link
          rel="canonical"
          href={`https://www.innovativelh.com/blogs/${blog.slug}`}
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.head,
              image: blog.image ? [blog.image] : [],
              datePublished: blog.date,
              author: {
                "@type": "Organization",
                name: "Innovative Learning Horizons (ILH)",
              },
              publisher: {
                "@type": "Organization",
                name: "Innovative Learning Horizons (ILH)",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.innovativelh.com/innovativelogo.png",
                },
              },
              description: blog.description,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.innovativelh.com/blogs/${blog.slug}`,
              },
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <main className="py-20 px-8 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="text-lg text-[#b1976b] hover:underline mb-6 inline-block"
          >
            &larr; Back to Blog Index
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#213742] mb-4">
            {blog.head}
          </h1>

          <p className="text-gray-500 mb-10 text-lg">
            Published: {blog.date || "Date not available"}
          </p>

          {blog.image && (
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
              <Image
                src={blog.image}
                alt={blog.head}
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <article className="prose max-w-none text-xl leading-relaxed text-gray-700">
            <p>{blog.description}</p>

            {blog.content && (
              <div
                className="mt-8 prose-lg"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content),
                }}
              />
            )}
          </article>
        </div>
      </main>
    </>
  );
}
