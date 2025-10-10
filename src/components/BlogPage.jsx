// components/Blogs.jsx
"use client";

import blogsData from '../../blogs.json'; // Adjust the relative path to your blogs.json file
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPage() {
  return (
    <div className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#213742] mb-12 text-center">
          Latest Insights & News
        </h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {blogsData.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <Link href={`/blogs/${blog.id}`} className="block">
                {/* Blog Image Area */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.head}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>

                {/* Blog Details */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h2 className="text-xl font-bold text-[#213742] mb-3 line-clamp-2">
                    {blog.head}
                  </h2>
                  <p className="text-gray-600 mb-4 h-12 line-clamp-2 text-sm">
                    {blog.description}
                  </p>
                  <span className="text-[#b1976b] font-semibold flex items-center group">
                    Read Article
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}