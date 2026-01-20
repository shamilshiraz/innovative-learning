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
            About Innovative Learning Horizons
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Empowering professionals with world-class certifications and practical training across Saudi Arabia.
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
              Innovative Learning Horizons (ILH) is a <strong>leading professional training institute in Saudi Arabia</strong>, 
founded by industry experts passionate about bridging the gap between education and employability. 
We specialize in delivering globally recognized certifications like <strong>PMP, LEED GA & AP, Revit Architecture, Primavera P6,</strong> 
and more — helping professionals achieve their career goals through practical, results-driven learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             Our programs are designed for engineers, architects, managers, and executives looking to upskill in fields like 
<strong>Construction, Project Management, Sustainability, and Quality</strong>. 
 At ILH, we combine theoretical depth with hands-on experience, ensuring every learner is ready for real-world success.
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
           Our mission is to <strong>empower learners with practical, industry-ready skills</strong> that align with the demands 
of modern industries. We strive to bridge the gap between traditional education and evolving global standards, 
creating learning experiences that are engaging, flexible, and impactful.  
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
                text: "Each course blends theoretical understanding with real-world applications for practical mastery.",
              },
              {
                icon: <Handshake className="w-8 h-8 text-[#b1976b]" />,
                title: "Industry Collaboration",
                text: "Partnered with leading organizations to ensure globally recognized certification quality.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#b1976b]" />,
                title: "Career-Driven Programs",
                text: "Focused on professional growth with courses like PMP, LEED, Primavera, and Revit Architecture.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#b1976b]" />,
                title: "Certified & Recognized",
                text: "Our programs meet global standards and are recognized by major international bodies.",
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
            Located in Al Khobar, Saudi Arabia (Postal Code: 34627).
          </p>
        
        </motion.section>

      </div>
    </motion.div>
  );
}
