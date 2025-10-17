"use client";

import { useState } from "react";

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

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b1976b]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b1976b]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b1976b]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#213742] text-white font-semibold py-3 rounded-lg hover:bg-[#b1976b] transition-colors"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center text-sm text-gray-600 mt-3">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
}
