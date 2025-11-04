import Head from "next/head";
import { CheckCircle, BookOpen, Layers, HardHat, Briefcase, Building, FileText, Hammer } from "lucide-react";

export default function RevitOffer() {
  return (
    <>
      <Head>
        <title>Revit & BIM Certification | Innovative Learning Horizons</title>
        <meta
          name="description"
          content="Master Autodesk Revit & BIM with ILH. Learn Architecture, Structure & MEP design — hands-on projects and job assistance in India, Oman & Saudi Arabia."
        />
        <link rel="canonical" href="https://www.innovativelh.com/revit-offer" />
      </Head>

      <main className="bg-gray-50 text-gray-800">
        {/* HERO SECTION */}
        <section
          className="relative text-center py-24 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          }}
        >
          <div className="max-w-3xl mx-auto text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Become a Certified <span className="text-red-500">Revit & BIM Professional</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              Master Autodesk Revit for Architecture, Structure & MEP — and step into global AEC careers.
            </p>
            <a
              href="#register"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg shadow-md font-semibold transition"
            >
              Start Learning Today
            </a>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm md:text-base text-gray-200">
              <div>✅ 1000+ Students Trained</div>
              <div>✅ 95% Placement Rate</div>
              <div>✅ Globally Recognized Certification</div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE ILH */}
        <section className="py-20 text-center bg-white">
          <h2 className="text-3xl font-bold mb-12">Why Professionals Choose ILH</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {[
              {
                icon: BookOpen,
                title: "Industry-Ready Curriculum",
                desc: "Learn Architecture, Structure, and MEP modeling — from conceptual design to detailed BIM coordination.",
              },
              {
                icon: Layers,
                title: "Hands-On Learning",
                desc: "Work on real-world projects using Autodesk Revit, Navisworks & BIM 360.",
              },
              {
                icon: Briefcase,
                title: "Placement Support",
                desc: "Guaranteed job assistance in India, Oman & Saudi Arabia.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <item.icon className="mx-auto mb-4 text-red-500 w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU’LL MASTER */}
        <section className="py-20 text-center bg-gray-50">
          <h2 className="text-3xl font-bold mb-10">What You’ll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
            {[
              { icon: Building, text: "Revit Architecture" },
              { icon: Hammer, text: "Revit Structure" },
              { icon: HardHat, text: "Revit MEP" },
              { icon: Layers, text: "BIM Coordination" },
              { icon: FileText, text: "Clash Detection (Navisworks)" },
              { icon: CheckCircle, text: "4D & 5D BIM" },
              { icon: FileText, text: "Construction Documentation" },
              { icon: Building, text: "Rendering & Visualization" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl py-6 px-3 shadow hover:bg-red-500 hover:text-white transition flex flex-col items-center"
              >
                <Icon className="mb-3 w-6 h-6" />
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold mb-12">Real Success Stories</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            {[
              {
                quote:
                  "ILH helped me land my first job as a BIM Modeler in Dubai within 2 months of completing the course!",
                name: "Ahmed R.",
                role: "Structural Engineer",
              },
              {
                quote:
                  "The Revit course was 100% practical. I now handle MEP projects confidently using BIM workflows.",
                name: "Fatima K.",
                role: "MEP Designer",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <p className="italic mb-3">“{t.quote}”</p>
                <p className="font-semibold">
                  — {t.name}, <span className="text-gray-600">{t.role}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER PATH */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-8">Step into High-Growth AEC Careers</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            <div className="text-left space-y-2">
              <p>🏗 Revit Modeler</p>
              <p>👷‍♂️ BIM Coordinator / Manager</p>
              <p>💡 MEP Engineer</p>
              <p>🎨 Interior Designer</p>
            </div>
            <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Average Salary (INR)</th>
                  <th className="p-3 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">Revit Modeler</td>
                  <td className="p-3">₹25,000 – ₹45,000</td>
                  <td className="p-3">India</td>
                </tr>
                <tr>
                  <td className="p-3">BIM Coordinator</td>
                  <td className="p-3">₹60,000 – ₹1,20,000</td>
                  <td className="p-3">Gulf Countries</td>
                </tr>
                <tr>
                  <td className="p-3">MEP Engineer</td>
                  <td className="p-3">₹40,000 – ₹90,000</td>
                  <td className="p-3">Global</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FEES SECTION */}
        <section className="py-20 text-center bg-white">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Learning</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-3">Duration</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Fee (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">4 Months</td>
                  <td className="p-3">Classroom / Online</td>
                  <td className="p-3 font-semibold">₹45,000</td>
                </tr>
                <tr>
                  <td className="p-3">6 Months</td>
                  <td className="p-3">Advanced BIM</td>
                  <td className="p-3 font-semibold">₹65,000</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 text-gray-600 space-y-1 text-sm">
              <p>✅ Free Accommodation (for outstation students)</p>
              <p>✅ EMI Options Available</p>
              <p>✅ Certification Included</p>
            </div>
          </div>
        </section>

        {/* REGISTRATION FORM */}
        <section id="register" className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Course Details on WhatsApp</h2>
          <a
            href="https://wa.me/966511742526?text=Hi%20ILH%20Team,%20I%20want%20to%20enroll%20for%20the%20Revit%20BIM%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg shadow-md font-semibold transition"
          >
            🚀 Chat with Course Advisor
          </a>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
          <p>📍 ILH, Calicut | 📞 +966 51 174 2526 | ✉️ info@innovativelh.com</p>
          <p className="mt-3">
            <a href="https://www.innovativelh.com" className="text-red-400 hover:text-red-500">
              www.innovativelh.com
            </a>
          </p>
          <p className="mt-6 text-gray-500">© 2025 Innovative Learning Horizons. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
