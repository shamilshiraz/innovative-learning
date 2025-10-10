// components/WhyChooseUs.jsx
"use client";

import { motion } from 'framer-motion';
// Import specific icons from lucide-react
import { Users, RefreshCw, Zap, ThumbsUp } from 'lucide-react'; // Changed icons to fit the categories better

// Define the statistics data
const stats = [
  {
    id: 1,
    value: "500+",
    label: "Course Participants",
    icon: Users, // Using Lucide's Users icon
  },
  {
    id: 2,
    value: "95%",
    label: "Success Rate",
    icon: RefreshCw, // Using Lucide's RefreshCw icon (represents continuous improvement/success)
  },
  {
    id: 3,
    value: "1500+",
    label: "Training Hours",
    icon: Zap, // Using Lucide's Zap icon (represents energy, knowledge transfer)
  },
  {
    id: 4,
    value: "20+",
    label: "Years in Operation",
    icon: ThumbsUp, // Using Lucide's ThumbsUp icon (represents excellence, approval)
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-200 py-20 px-8">
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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 rounded-lg"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 mb-6 border-2 border-[#a0855c]">
                {/* Render the Lucide icon component */}
                <stat.icon className="w-10 h-10 text-[#213742]" /> 
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