"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import type { TourPackageCardItem, TourPackageItineraryItem } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TourDetailItineraryProps {
  pkg?: TourPackageCardItem;
}

export default function TourDetailItinerary({ pkg }: TourDetailItineraryProps) {
  if (!pkg) return null;

  const details = pkg.details;
  const destName = pkg.title.split(",")[0].trim();

  const defaultItinerary: TourPackageItineraryItem[] = [
    {
      day: "Day 1",
      title: `Arrival in ${destName}`,
      description:
        `Welcome to ${destName}! Our representative will pick you up from the airport and transfer you to the hotel. Check in and spend the rest of the day at leisure.`,
    },
    {
      day: "Day 2",
      title: "Uluwatu Temple & Kecak Dance",
      description:
        "After breakfast, visit the iconic Uluwatu Temple, enjoy stunning cliff views and witness the famous Kecak Dance performance at sunset.",
    },
    {
      day: "Day 3",
      title: "Nusa Penida Island Tour",
      description:
        "Explore the breathtaking beauty of Nusa Penida, including Kelingking Beach, Angel's Billabong, Broken Beach, and Crystal Bay.",
    },
    {
      day: "Day 4",
      title: "Tanah Lot & Local Sightseeing",
      description:
        "Visit the famous Tanah Lot Temple, explore local traditional markets, and enjoy Balinese culture, spa treatments, and cuisine.",
    },
    {
      day: "Day 5",
      title: "Departure",
      description:
        "After breakfast, check out from the hotel and transfer to the airport for your onward journey with wonderful memories.",
    },
  ];

  const itinerary = details?.itinerary || defaultItinerary;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleDay = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm mt-8 sm:mt-10 overflow-hidden">
      {/* Header with Pink/Red Accent Horizontal Bar */}
      <FadeIn direction="up" className="flex items-center gap-3 mb-8">
        <span className="w-7 h-[3px] bg-[#ff2e63] rounded-full" />
        <h3 className="text-xl sm:text-2xl font-black text-[#0b1724] tracking-tight">
          Tour Itinerary
        </h3>
      </FadeIn>

      {/* Vertical Timeline & Cards Container */}
      <div className="relative">
        {/* Single Continuous Unbroken Vertical Pink Line (0 gaps/breaks, aligned perfectly through dot centers) */}
        <div className="absolute left-[104px] sm:left-[132px] top-[-10px] bottom-6 w-[1.5px] -translate-x-1/2 bg-[#ff2e63]/60 z-0 pointer-events-none" />

        <StaggerContainer className="space-y-5 sm:space-y-6">
          {itinerary.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <StaggerItem
                key={idx}
                className="relative flex items-start gap-3 sm:gap-5 group"
              >
                {/* 1. Day Oval Capsule Badge */}
                <div className="shrink-0 w-20 sm:w-24 flex justify-center">
                  <button
                    type="button"
                    onClick={() => toggleDay(idx)}
                    className={`w-full h-11 sm:h-12 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs ${
                      isOpen
                        ? "bg-[#ff2e63] text-white shadow-md shadow-[#ff2e63]/30"
                        : "bg-[#061426] text-white hover:bg-[#0d2138]"
                    }`}
                  >
                    {item.day}
                  </button>
                </div>

                {/* 2. Solid Red Circle Dot (Centered on line) */}
                <div className="shrink-0 w-6 sm:w-8 h-11 sm:h-12 flex items-center justify-center relative">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff2e63] z-10 relative shadow-2xs" />
                </div>

                {/* 3. Card Box with Smooth Expanding Accordion Animation */}
                <div
                  className={`flex-1 bg-[#f4f7fa] hover:bg-[#edf2f7] transition-all duration-300 rounded-2xl overflow-hidden border ${
                    isOpen ? "border-[#ff2e63]/30 shadow-xs" : "border-slate-100/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleDay(idx)}
                    className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <h4
                        className={`text-sm sm:text-base font-extrabold transition-colors duration-300 leading-snug ${
                          isOpen
                            ? "text-[#ff2e63]"
                            : "text-[#0b1724] group-hover:text-[#ff2e63]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      {/* Smooth height transition accordion panel */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-2"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Collapsed 1-line preview when closed */}
                      {!isOpen && (
                        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 leading-relaxed line-clamp-1 transition-opacity duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Right Circle Arrow Button */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? "bg-[#ff2e63] text-white shadow-xs"
                          : "bg-[#dbe3eb]/70 text-slate-600 hover:bg-[#ff2e63] hover:text-white"
                      }`}
                    >
                      <FaChevronRight
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
