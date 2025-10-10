// components/WhyChooseUs.jsx
"use client";

import { motion } from 'framer-motion';

// Define the statistics data
const stats = [
  {
    id: 1,
    value: "500+", // Added a '+' for realistic numbers
    label: "Course Participants",
    // Placeholder SVG for User icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#213742]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 2,
    value: "95%", // Assuming "Success Rate" is a percentage
    label: "Success Rate",
    // Placeholder SVG for Refresh/Recycle icon (could mean continuous improvement)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#213742]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348A12.912 12.912 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632M16.023 9.348iC17.465 8.357 18 6.649 18 5.25c0-1.04-.475-2.006-1.321-2.684m-4.664 6.784L9.876 4.341M4.755 9.348A12.952 12.952 0 0112 4.75c2.676 0 5.216.584 7.499 1.632M4.755 9.348L3.265 6.438m11.163 12.793c.857.653 1.666 1.245 2.501 1.76M4.755 9.348H3.265zm11.163 12.793a8.956 8.956 0 01-5.895 2.27c-1.503 0-2.97-.375-4.286-1.047M17.49 13.918L18.773 21m-2.585-11.662C14.777 6.89 12.723 5.25 10.5 5.25S6.223 6.89 4.815 9.348M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    value: "1500+",
    label: "Training Hours",
    // Placeholder SVG for Battery icon (could mean energized learning)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#213742]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 4,
    value: "20+", // Assuming "Company Operations" refers to years or projects
    label: "Years in Operation", // Adjusted label for clarity
    // Placeholder SVG for Thumbs Up icon (could mean satisfaction/excellence)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#213742]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.894-1.106 2.228-1.953 3.813-2.428a11.235 11.235 0 014.462-1.253 10.523 10.523 0 015.681 1.766M4.501 18.75c0-1.414.67-2.73 1.887-3.565A4.487 4.487 0 019 14.25h6c1.087 0 2.126.234 3.031.67C19.837 15.864 20.501 17.18 20.501 18.75c0 3.109-3.328 6.75-9.25 6.75S4.501 21.859 4.501 18.75z" />
      </svg>
    ),
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyChooseUs() {
  return (
    <div className=" py-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Why Choose Us - Content Section */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-[#213742] mb-6">
            Why Choose Our Academy?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Innovative Learning Horizons, we are dedicated to providing an unparalleled educational experience.
            Our commitment to excellence, cutting-edge curriculum, and supportive community ensure that every professional
            can achieve their highest potential. We focus on practical skills, industry relevance, and fostering a passion for lifelong learning.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of the section is visible
          transition={{ staggerChildren: 0.2 }} // Stagger animation for each stat
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 rounded-lg"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 mb-6 border-2 border-[#a0855c]">
                {stat.icon} {/* Render the SVG icon */}
              </div>
              <p className="text-5xl font-bold text-[#213742] mb-3 leading-tight">
                {stat.value}
              </p>
              <p className="text-lg text-gray-700 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}