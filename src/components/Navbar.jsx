"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define the common menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Schedule", href: "/schedule" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="sticky top-0 left-0 z-50">
      {/* Top welcome bar */}
      <div className="  w-full bg-[#b1976b] text-center py-2 text-black text-base">
        welcome to our site
      </div>
      <nav className="w-full bg-white items-center px-8 py-4 flex justify-between relative">
        {/* Left Logo */}
        <div className="flex items-center">
          <Image
            src="/innovativelogo.png"
            alt="Logo"
            width={60}
            height={60}
            className="mr-3"
          />
        </div>

        {/* --- DESKTOP MENU (visible on screens >= md) --- */}
        <div className="hidden md:flex items-center gap-8 text-xl font-medium">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {/* Contact Button - Desktop only */}
          <Link href="/contact">
            <button className="bg-[#213742] text-white px-8 py-2 rounded-full text-lg font-normal whitespace-nowrap hover:bg-[#102532] transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON (visible on screens < md) --- */}
        <button
          className="md:hidden block text-2xl z-30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {!menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* --- MOBILE MENU OVERLAY (visible only when menuOpen is true and on screens < md) --- */}
        <ul
          className={`md:hidden ${
            menuOpen
              ? "fixed inset-0 bg-[#102532] text-white flex justify-center items-center flex-col gap-10 z-20 text-2xl"
              : "hidden"
          } transition-all duration-300`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          {/* Contact Button in Mobile Menu */}
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#b1976b] text-black px-8 py-2 mt-4 rounded-full text-xl font-normal hover:bg-[#e0c79f] transition">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}