// components/Courses.jsx
"use client";

import coursesData from '/courses.json'; // Adjust the path as needed
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Courses() {
  return (
    <div className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-[#213742] mb-12 text-center">
          Explore Our Courses
        </h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {coursesData.slice(0, 3).map((course) => (  // 👈 Only first 3
            <motion.div
              key={course.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <Link href={`/courses/${course.id}`} className="block">
                {/* Course Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#b1976b] mb-3">
                    {course.name}
                  </h2>
                  <p className="text-gray-600 mb-4 h-16 line-clamp-3">
                    {course.desc}
                  </p>
                  <span className="text-[#213742] font-semibold flex items-center group">
                    View Details
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
            
          ))}
        </motion.div>
        <div className="flex justify-center mt-10 mb-6">
  <a
    href="/courses"
    className="bg-[#1E293B] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#0F172A] transition"
  >
    View More Courses →
  </a>
</div>
      </div>
    </div>
  );
}
