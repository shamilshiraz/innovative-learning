"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <motion.div
      className="relative w-full h-[700px] flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Image */}
      <Image
        src="/landing.jpg"
        alt="Innovative Learning Horizons - Professional training institute in Saudi Arabia"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hidden SEO Title */}
      <h1 className="sr-only">
        Professional Training Institute in Saudi Arabia – Innovative Learning Horizons (ILH)
      </h1>

      {/* Text Section */}
      <div className="relative z-10 text-white px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <span className="block">Innovative Learning Horizon</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto"
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
