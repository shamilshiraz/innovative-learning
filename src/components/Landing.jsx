"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <motion.div
      className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Image */}
      <Image
        src="/landing.jpg" // ✅ replace with your image
        alt="Innovative Learning Horizons - Professional training institute in Saudi Arabia"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* ✅ Hidden SEO Heading */}
      <h1
  className="hidden-h1"
>
  Professional Training Institute in Saudi Arabia – Innovative Learning Horizons (ILH)
</h1>



      {/* Content (Text) */}
      <div className="relative z-10 text-white p-4 max-w-3xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          Your Career Starts Here with ILH
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          ILH is a <strong>professional training institute in Saudi Arabia</strong> helping
          professionals build practical, job-ready skills through globally certified programs.
        </motion.p>
      </div>
    </motion.div>
  );
}
