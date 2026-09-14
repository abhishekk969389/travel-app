"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaPlane, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destination", href: "/destination", hasDropdown: true },
    { name: "Service", href: "/services", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: true },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TripNexa - Travel Beyond Borders"
            width={180}
            height={50}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;

            return (
              <div key={link.name} className="relative py-2">
                <Link
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-1.5 font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#ff2e63]" : "text-[#1a2b49] hover:text-[#ff2e63]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <FaChevronDown className="w-2.5 h-2.5 text-gray-700 mt-0.5" />
                  )}
                </Link>

                {/* Red Underline Indicator for Active Link */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2e63] rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Enquire Now Button */}
        <div>
          <Link
            href="/enquire"
            className="group flex items-center space-x-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300"
          >
            <FaPlane className="w-5 h-5 transform -rotate-45" />
            <span>Enquire Now</span>
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </nav>
  );
}