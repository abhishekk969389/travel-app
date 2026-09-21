"use client";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaTag,
  FaCheckCircle,
  FaTimesCircle,
  FaTree,
  FaMountain,
  FaLandmark,
  FaHandshake,
  FaCamera,
  FaShoppingBag,
} from "react-icons/fa";
import type { TourPackageCardItem } from "@/data/index";

interface TourDetailOverviewProps {
  pkg?: TourPackageCardItem;
}

const renderHighlightIcon = (iconName?: string) => {
  switch (iconName) {
    case "FaTree":
      return <FaTree className="w-5 h-5 text-[#ff2e63]" />;
    case "FaMountain":
      return <FaMountain className="w-5 h-5 text-[#ff2e63]" />;
    case "FaLandmark":
      return <FaLandmark className="w-5 h-5 text-[#ff2e63]" />;
    case "FaHandshake":
      return <FaHandshake className="w-5 h-5 text-[#ff2e63]" />;
    case "FaCamera":
      return <FaCamera className="w-5 h-5 text-[#ff2e63]" />;
    case "FaShoppingBag":
      return <FaShoppingBag className="w-5 h-5 text-[#ff2e63]" />;
    default:
      return <FaTree className="w-5 h-5 text-[#ff2e63]" />;
  }
};

export default function TourDetailOverview({ pkg }: TourDetailOverviewProps) {
  if (!pkg) return null;

  const details = pkg.details;

  const defaultStats = [
    { label: "Destination", value: details?.location || pkg.title, icon: "FaMapMarkerAlt" },
    { label: "Duration", value: details?.durationBadge || pkg.duration || "5 Days 4 Nights", icon: "FaCalendarAlt" },
    { label: "Tour Type", value: "Leisure / Family", icon: "FaUsers" },
    { label: "Best Time to Visit", value: "Apr - Oct", icon: "FaTag" },
  ];

  const quickStats = details?.quickStats || defaultStats;

  const defaultHighlights = [
    { title: "Visit stunning beaches like Kuta, Seminyak & Nusa Dua", icon: "FaTree" },
    { title: "Discover lush rice terraces and natural landscapes", icon: "FaMountain" },
    { title: "Explore iconic temples such as Uluwatu & Tanah Lot", icon: "FaLandmark" },
    { title: "Experience Balinese culture and local traditions", icon: "FaHandshake" },
    { title: "Capture breathtaking sunsets and scenic views", icon: "FaCamera" },
    { title: "Enjoy shopping, local markets and delicious Balinese cuisine", icon: "FaShoppingBag" },
  ];

  const highlights = details?.highlights || defaultHighlights;

  const defaultWhatsIncluded = [
    "Return flights (Economy Class)",
    "4 nights hotel accommodation",
    "Daily breakfast at hotel",
    "Airport transfers (pickup & drop)",
    "Sightseeing tours as per itinerary",
    "Professional tour guide",
    "All applicable taxes",
  ];

  const whatsIncluded = details?.whatsIncluded || defaultWhatsIncluded;

  const defaultWhatsNotIncluded = [
    "Visa fees (if applicable)",
    "Travel insurance",
    "Lunch and dinner (unless specified)",
    "Personal expenses (shopping, etc.)",
    "Optional activities and excursions",
    "Tips and gratuities",
    "Anything not mentioned in inclusions",
  ];

  const whatsNotIncluded = details?.whatsNotIncluded || defaultWhatsNotIncluded;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Combined Overview & Highlights Section Card */}
      <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-8">
        {/* Overview Sub-Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f] tracking-tight mb-2">
            Overview
          </h3>
          <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-4" />
          <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {details?.overview ||
              `${pkg.title} is a dream destination that offers something for every traveler — from pristine landscapes to ancient heritage and vibrant local culture. Whether you're seeking adventure, spiritual experiences, or simply a relaxing getaway, this tour package takes you to the best of ${pkg.title} with comfortable stays, guided tours, and unforgettable experiences.`}
          </p>
        </div>

        {/* Highlights Sub-Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f] tracking-tight mb-2">
            Highlights
          </h3>
          <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#ffe8ed] group-hover:bg-[#ff2e63] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {renderHighlightIcon(item.icon)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. What's Included & What's Not Included Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What's Included */}
        <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#12161f] tracking-tight mb-2">
            What's Included
          </h3>
          <div className="w-10 h-[3px] bg-[#22c55e] rounded-full mb-5" />

          <ul className="space-y-3">
            {whatsIncluded.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FaCheckCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's Not Included */}
        <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#12161f] tracking-tight mb-2">
            What's Not Included
          </h3>
          <div className="w-10 h-[3px] bg-[#ef4444] rounded-full mb-5" />

          <ul className="space-y-3">
            {whatsNotIncluded.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FaTimesCircle className="w-4 h-4 text-[#ef4444] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
