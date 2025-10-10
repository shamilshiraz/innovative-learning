"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    // Removed the outer bg-gray-100 wrapper and min-h-screen
    <div className="flex justify-center items-center py-20 px-8"> 
      
      <motion.div
        // Changed styling to be a flat, full-width section within the max-width container
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center" 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Text Content */}
        <motion.div className="text-gray-800" variants={textVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 text-[#213742]">
            What would you like to learn today?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10">
            A warm and enthusiastic welcome to each and every one of you who has chosen to
            embark on a transformative educational journey with us at Innovative Learning
            Horizons. We are absolutely thrilled to have you join our vibrant community, a place
            where curiosity is celebrated, knowledge is power, and the future is shaped by the
            innovative minds we cultivate.
          </p>
          <Link href="/about">
            <motion.button
              className="bg-[#213742] text-white px-10 py-4 rounded-lg text-xl font-medium hover:bg-[#102532] transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know more
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          // Removed rounded-xl and shadow-xl for the flat look
          className="relative w-full h-[400px] md:h-[500px] overflow-hidden" 
          variants={imageVariants}
        >
          {/* Note: If you want the image to have sharp corners, you must remove rounded-xl from this container */}
          <Image
            src="/students.jpg" // **IMPORTANT: Replace with your actual image path**
            alt="Two students collaborating on a laptop"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}