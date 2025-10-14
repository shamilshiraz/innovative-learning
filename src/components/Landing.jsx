"use client"; // If you're using Next.js 13+ app directory

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <motion.div
      className="relative w-[100vw] h-[600px] flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Image */}
      <Image
        src="/landing.jpg" // **IMPORTANT: Replace with your actual image path**
        alt="Students learning together"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content (Text) */}
      <div className="relative z-10 text-white p-4 max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          What would you like to learn today?
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Innovative Learning Horizons, where professionals unlock their full potential
        </motion.p>
      </div>
    </motion.div>
  );
}