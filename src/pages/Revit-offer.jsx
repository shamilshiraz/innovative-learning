import Head from "next/head";
import { BookOpen, Layers, Briefcase, Building, FileText, Hammer, HardHat, CheckCircle } from "lucide-react";

export default function RevitOffer() {
  // ✅ Track WhatsApp Click as a Meta Pixel Lead Event
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Revit Offer Page - WhatsApp Lead",
      });
      console.log("Meta Pixel Lead event fired");
    }
  };

  return (
    <>
      <Head>
        <title>Revit & BIM Certification | Innovative Learning Horizons</title>
        <meta
          name="description"
          content="Master Autodesk Revit & BIM with ILH. Learn Architecture, Structure & MEP design — flexible online and classroom training in Al Khobar, Saudi Arabia."
        />
        <link rel="canonical" href="https://www.innovativelh.com/revit-offer" />
      </Head>

      <main className="bg-gray-50 text-gray-800">
        {/* HERO SECTION */}
        <section
          className="relative text-center py-24 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          }}
        >
          <div className="max-w-3xl mx-auto text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Become a Certified <span className="text-red-500">Revit & BIM Professional</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              Master Autodesk Revit for Architecture, Structure & MEP — guided by industry experts with real-world projects.
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
              <div>✅ 95% Student Satisfaction</div>
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
                desc: "Work on practical Revit & BIM projects with Autodesk tools like Navisworks & BIM 360.",
              },
              {
                icon: Briefcase,
                title: "Career Support",
                desc: "We provide referral support to reputed designing companies to help you kickstart your career.",
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
              { icon: CheckCircle, text: "4D & 5D BIM (Time & Cost)" },
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
                  "ILH helped me strengthen my Revit skills and connect with professional design companies in the Gulf.",
                name: "Ahmed R.",
                role: "Structural Engineer",
              },
              {
                quote:
                  "The training was completely practical — now I can confidently manage BIM coordination tasks in my firm.",
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

        {/* FEES SECTION */}
        <section className="py-20 text-center bg-gray-50">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Learning</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-3">Duration</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">35 – 40 Hours</td>
                  <td className="p-3">Classroom (Al Khobar) / Online</td>
                  <td className="p-3 font-semibold">2300 SAR / $615</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 text-gray-600 space-y-1 text-sm">
              <p>✅ Globally Recognized Certification</p>
              <p>✅ Best Fees Structure</p>
              <p>✅ Referral Support to Designing Companies</p>
            </div>
          </div>
        </section>

        {/* REGISTRATION CTA */}
        <section id="register" className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">Get Course Details on WhatsApp</h2>
          <a
            href="https://wa.me/966511742526?text=Hi%20ILH%20Team,%20I%20want%20to%20enroll%20for%20the%20Revit%20BIM%20course."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick} // ✅ Fire Meta Pixel event on click
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg shadow-md font-semibold transition"
          >
            🚀 Chat with Course Advisor
          </a>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
          <p>📍 ILH, Al Khobar, Saudi Arabia | 📞 +966 51 174 2526 | ✉️ info@innovativelh.com</p>
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
