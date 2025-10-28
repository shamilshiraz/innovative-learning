// components/AboutPage.jsx or pages/about.jsx
import Image from "next/image";
import Link from "next/link";
import { Target, Lightbulb, Handshake, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <motion.div
      className="py-6 px-6 sm:px-10 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section (Plain Background) */}
        <motion.section
          variants={itemVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#213742] mb-6">
            About Innovative Learning Horizon
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our vision is to empower individuals worldwide by providing globally
            recognized certifications and practical training that transforms
            careers and organizations.
          </p>

          <div className="mt-10 relative w-full h-80 sm:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/landing.jpg"
              alt="Innovative Learning Horizon Team"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.section>

        {/* Who We Are */}
        <motion.section
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#213742] border-l-4 border-[#b1976b] pl-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Innovative Learning Horizon was established by professionals from
              diverse industries, aiming to deliver holistic competency
              development programs for students and professionals alike.
              Learn more about our{" "}
    <Link href="/about" className="text-[#b1976b] hover:underline">
      mission and values
    </Link>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We enhance knowledge and skills to empower learners to advance in
              their chosen career paths. Explore our{" "}
    <Link href="/courses" className="text-[#b1976b] hover:underline">
      certification courses
    </Link>{" "} certifications span Quality, Human
              Resources, Supply Chain, Finance, and more.
            </p>

          </div>
          <div className="relative order-1 md:order-2 w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/students.jpg"
              alt="Professionals collaborating in a course"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          variants={itemVariants}
          className="bg-[#213742] text-white p-10 sm:p-16 rounded-2xl shadow-2xl text-center"
        >
          <Target className="w-12 h-12 text-[#b1976b] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Core Mission
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed font-light max-w-4xl mx-auto">
            To empower learners with practical, industry-ready skills that
            bridge the gap between traditional education and real-world
            demands—creating engaging, flexible, and impactful learning
            experiences.
          </p>
        </motion.section>

        {/* Approach Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213742] mb-12 text-center border-b-2 border-[#b1976b] pb-4">
            Our Approach to Learning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-[#b1976b]" />,
                title: "Holistic Learning",
                text: "We combine academic principles with hands-on experience, ensuring learners gain both knowledge and practical skills.",
              },
              {
                icon: <Handshake className="w-8 h-8 text-[#b1976b]" />,
                title: "Industry Collaboration",
                text: "Our programs are developed with industry experts to align with evolving market demands and trends.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#b1976b]" />,
                title: "Career-Driven Programs",
                text: "We focus on competencies that boost employability and support long-term professional growth.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#b1976b]" />,
                title: "Certified & Recognized",
                text: "Our certifications are globally recognized, providing credibility and real career value.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-[#213742] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gray-100 p-12 sm:p-16 rounded-2xl shadow-inner text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213742] mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
  Check our{" "}
  <Link href="/courses" className="text-[#b1976b] hover:underline">
    industry-focused courses
  </Link>{" "}
  or{" "}
  <Link href="/contact" className="text-[#b1976b] hover:underline">
    contact us
  </Link>{" "}
  to enroll today.
</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            <p className="text-lg sm:text-xl font-semibold text-[#b1976b]">
              Email:{" "}
              <a
                href="mailto:info@innovativelh.com"
                className="hover:underline"
              >
                info@innovativelh.com
              </a>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#b1976b]">
              Phone: +966 51 174 2526
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Located in Al Khobar, Saudi Arabia (Postal Code: 34627)
          </p>
        
        </motion.section>

      </div>
    </motion.div>
  );
}
