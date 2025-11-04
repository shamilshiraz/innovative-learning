"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "abbeae78-b228-4354-aeeb-6b106d6cb4e8"); // Replace with your key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-[#213742] mb-6">
          Contact Us
        </h1>

        <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }}
  className="space-y-4"
>
  <div>
    <label className="block text-sm font-medium mb-1">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      required
      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
    />
  </div>

  {/* ✅ New Phone Number Field */}
  <div>
    <label className="block text-sm font-medium mb-1">Phone Number</label>
    <input
      type="tel"
      name="phone"
      placeholder="Your Phone Number"
      required
      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Message</label>
    <textarea
      name="message"
      placeholder="Write your message..."
      rows="4"
      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
  >
    Send Message
  </button>

</form>
      </div>
      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/966511742526?text=Hi%20ILH%20Team,%20I%20want%20to%20know%20more%20about%20your%20training%20programs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
      
      <p className="text-lg mt-4">
  Want to know who we are?{" "}
  <Link href="/about" className="text-[#b1976b] hover:underline">
    Learn about Innovative Learning Horizons.
  </Link>
</p>



    </div>
  );
}
