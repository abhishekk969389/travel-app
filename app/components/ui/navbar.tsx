"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaChevronDown,
  FaPlane,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelNavbarData as NavbarData, LinkItem } from "@/data/index";

export default function Navbar() {
  const data: NavbarData = travelData.navbar;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 relative z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-5 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width}
            height={data.logo.height}
            priority
            className="h-auto w-[200px] sm:w-[240px] object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {data.navLinks.map((link: LinkItem) => {
            const hasSubmenu = Boolean(
              link.hasDropdown && link.dropdownItems && link.dropdownItems.length > 0
            );
            const isCurrentPage =
              pathname === link.href ||
              (hasSubmenu &&
                link.dropdownItems?.some((sub) => pathname === sub.href));

            return (
              <div key={link.name} className="relative py-6 flex items-center group/nav">
                <div className="relative inline-flex items-center">
                  {hasSubmenu ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 font-semibold text-[12px] lg:text-[15px] xl:text-[17px] transition-colors duration-200 cursor-pointer ${
                        isCurrentPage
                          ? "text-[#ff2e63]"
                          : "text-[#1a2b49] hover:text-[#ff2e63]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className="w-3 h-3 text-gray-500 transition-transform duration-200 group-hover/nav:rotate-180 group-hover/nav:text-[#ff2e63]" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 font-semibold text-[12px] lg:text-[15px] xl:text-[17px] transition-colors duration-200 ${
                        isCurrentPage
                          ? "text-[#ff2e63]"
                          : "text-[#1a2b49] hover:text-[#ff2e63]"
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  )}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[3px] bg-[#ff2e63] rounded-full transition-all duration-200 ${
                      isCurrentPage
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover/nav:w-full group-hover/nav:opacity-100"
                    }`}
                  />
                </div>
                {hasSubmenu && (
                  <div className="absolute top-full left-0 pt-0.5 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 z-50 pointer-events-none group-hover/nav:pointer-events-auto">
                    <div className="w-64 bg-white rounded-b-2xl py-3 px-2.5 shadow-2xl border border-gray-100 shadow-slate-900/10">
                      {link.dropdownItems?.map((subItem) => {
                        const isSubActive = pathname === subItem.href;

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2.5 rounded-xl text-[16px] font-semibold transition-all duration-150 ${
                              isSubActive
                                ? "bg-pink-50/80 text-[#ff2e63]"
                                : "text-[#1a2b49] hover:text-[#ff2e63] hover:bg-pink-50/50"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={data.cta.href}
            className="hidden sm:flex group items-center space-x-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300 text-base sm:text-[17px]"
          >
            <FaPlane className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-45" />
            <span>{data.cta.text}</span>
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-xl text-[#1a2b49] hover:text-[#ff2e63] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto bg-white border-t border-gray-100 px-4 pt-3 pb-8 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200 overscroll-contain">
          <div className="flex flex-col space-y-1">
            {data.navLinks.map((link: LinkItem) => {
              const hasSubmenu = Boolean(
                link.hasDropdown && link.dropdownItems && link.dropdownItems.length > 0
              );
              const isCurrentPage =
                pathname === link.href ||
                (hasSubmenu &&
                  link.dropdownItems?.some((sub) => pathname === sub.href));
              const isDropdownOpen = openMobileDropdown === link.name;

              return (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.name)}
                        className={`flex-1 flex items-center justify-between py-3 px-3 rounded-xl font-bold text-[18px] transition-colors text-left ${
                          isCurrentPage
                            ? "text-[#ff2e63] bg-pink-50/60"
                            : "text-[#1a2b49] hover:text-[#ff2e63]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <FaChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180 text-[#ff2e63]" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 py-3 px-3 rounded-xl font-bold text-[18px] transition-colors ${
                          isCurrentPage
                            ? "text-[#ff2e63] bg-pink-50/60"
                            : "text-[#1a2b49] hover:text-[#ff2e63]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                  {hasSubmenu && isDropdownOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/60 rounded-xl mb-1">
                      {link.dropdownItems?.map((subItem) => {
                        const isSubActive = pathname === subItem.href;

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block py-2.5 px-3 rounded-lg text-[16px] font-semibold transition-colors ${
                              isSubActive
                                ? "text-[#ff2e63] bg-pink-50 font-bold"
                                : "text-gray-700 hover:text-[#ff2e63]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href={data.cta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-bold w-full py-3 rounded-xl shadow-md text-[17px]"
            >
              <FaPlane className="w-4 h-4 transform -rotate-45" />
              <span>{data.cta.text}</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}