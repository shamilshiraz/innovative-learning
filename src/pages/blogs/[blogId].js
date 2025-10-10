// pages/blogs/[blogId].jsx (or pages/blogs/[blogId].js)

import { useRouter } from 'next/router';
import blogsData from '../../../blogs.json'; // 👈 Adjust the path to your blogs.json
import Image from 'next/image';
import Link from 'next/link';

// Helper function to find blog data
const getBlogData = (id) => {
    return blogsData.find(blog => blog.id === id);
};

export default function BlogDetailPage() {
    const router = useRouter();
    
    // Get the dynamic ID from the URL query
    // NOTE: This must match your file name: [blogId] -> router.query.blogId
    // If your file is named [coursename].js, use router.query.coursename
    const { blogId } = router.query; 

    // Handle initial render where query is not yet populated
    if (!blogId) {
        return <div className="p-20 text-center">Loading article...</div>;
    }

    const blog = getBlogData(blogId);

    if (!blog) {
        // Simple 404 handling
        return (
            <div className="p-20 text-center min-h-screen">
                <h1 className="text-4xl font-bold text-red-600">404 - Article Not Found</h1>
                <Link href="/blogs" className="text-lg text-[#b1976b] hover:underline mt-8 inline-block">
                    &larr; Back to all Articles
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 px-8 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* Back Link */}
                <Link href="/blogs" className="text-lg text-[#b1976b] hover:underline mb-6 inline-block">
                    &larr; Back to Blog Index
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#213742] mb-4 leading-tight">
                    {blog.head}
                </h1>
                <p className="text-gray-500 mb-10 text-lg">
                    Published: {blog.date}
                </p>

                {/* Main Image */}
                <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
                    <Image
                        src={blog.image}
                        alt={blog.head}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                
                {/* Article Content (Using the 'description' as the main content for simplicity) */}
                <div className="prose max-w-none text-xl leading-relaxed text-gray-700">
                    <p>{blog.description}</p>
                    
                    {/* Placeholder for full article content, which you would expand later */}
                    <p className="mt-8 italic text-gray-500">
                        [This is a placeholder for the full article content. You would typically use a `longContent` field from your JSON or markdown files here.]
                    </p>
                    <p className="mt-4">
                        For more in-depth analysis on {blog.head}, consider joining our related courses.
                    </p>
                </div>
            </div>
        </div>
    );
}