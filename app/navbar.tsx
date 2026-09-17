"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown as FaChevronDownIcon, FaPlane as FaPlaneIcon, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";
import travelData from "./data/travel-data.json";
import type { NavbarData } from "./types/travel";

export default function Navbar() {
  const data: NavbarData = travelData.navbar;
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center -ml-[20px]">
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width}
            height={data.logo.height}
            priority
            className="h-auto w-[250px] object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {data.navLinks.map((link) => {
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
                    <FaChevronDownIcon className="w-2.5 h-2.5 text-gray-700 mt-0.5" />
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
            href={data.cta.href}
            className="group flex items-center space-x-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300"
          >
            <FaPlaneIcon className="w-5 h-5 transform -rotate-45" />
            <span>{data.cta.text}</span>
            <FaArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </nav>
  );
}