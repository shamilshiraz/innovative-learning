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
  <strong>Welcome to Innovative Learning Horizons (ILH)</strong> — Saudi Arabia’s leading professional training institute where ambition meets opportunity and international certifications drive success.</p>


<p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10">
  At ILH, we specialize in globally recognized programs such as <strong><Link href="/courses/pmp" className="text-[#b1976b] hover:underline">
PMP</Link></strong>, <strong><Link href="/courses/leed-ga-ap" className="text-[#b1976b] hover:underline">LEED GA & AP</Link></strong>, <strong><Link href="/courses/primavera" className="text-[#b1976b] hover:underline">
Primavera P6</Link></strong>, <strong><Link href="/courses/revit" className="text-[#b1976b] hover:underline">Revit Architecture</Link></strong>, <strong><Link href="/courses/fidic" className="text-[#b1976b] hover:underline">
FIDIC Red Book</Link></strong>, <strong><Link href="/courses/cpp" className="text-[#b1976b] hover:underline">AACEI CCP</Link><Link href="/courses/psp" className="text-[#b1976b] hover:underline">& PSP</Link></strong>, <strong><Link href="courses/cfps" className="text-[#b1976b] hover:underline">
CFPS (NFPA)</Link></strong>,<strong><Link href="/courses/cfm" className="text-[#b1976b] hover:underline"> and CFM (IFMA)</Link></strong>.</p>

    
    <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10">
      Our mission is to help professionals gain industry-relevant skills and international credibility
       through quality training and expert mentorship. Join our community of achievers
        — learn, lead, and excel worldwide with <Link href="/courses/cpp" className="text-[#b1976b] hover:underline"> Innovative Learning Horizon.</Link></p>




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
            alt="Two students collaborating on a laptop during a professional training session at Innovative Learning Horizons Saudi Arabia"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}