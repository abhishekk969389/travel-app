"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import type { TourPackageCardItem, TourPackageItineraryItem, TourPackageDetailsLabels } from "@/data/index";
import { site } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TourDetailItineraryProps {
  pkg?: TourPackageCardItem;
  labels?: TourPackageDetailsLabels;
}

export default function TourDetailItinerary({ pkg, labels: propLabels }: TourDetailItineraryProps) {
  if (!pkg) return null;

  const labels = propLabels || (site.tourPackagesPage as any).detailLabels;
  const details = pkg.details;
  const itinerary = details?.itinerary || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleDay = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-white rounded-[20px] sm:rounded-[24px] p-3.5 sm:p-8 border border-slate-100 shadow-sm mt-8 sm:mt-10 overflow-hidden">
      <FadeIn direction="up" className="flex items-center gap-3 mb-6 sm:mb-8">
        <span className="w-7 h-[3px] bg-[#ff2e63] rounded-full" />
        <h3 className="text-xl sm:text-2xl font-black text-[#0b1724] tracking-tight">
          {labels?.itineraryTitle || "Tour Itinerary"}
        </h3>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-[67px] sm:left-[132px] top-[-10px] bottom-6 w-[1.5px] -translate-x-1/2 bg-[#ff2e63]/60 z-0 pointer-events-none" />

        <StaggerContainer className="space-y-4 sm:space-y-6">
          {itinerary.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <StaggerItem
                key={idx}
                className="relative flex items-start gap-1.5 sm:gap-5 group"
              >
                <div className="shrink-0 w-[54px] sm:w-24 flex justify-center">
                  <button
                    type="button"
                    onClick={() => toggleDay(idx)}
                    className={`w-full h-8 sm:h-12 rounded-full font-bold text-[10px] sm:text-sm flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs ${
                      isOpen
                        ? "bg-[#ff2e63] text-white shadow-md shadow-[#ff2e63]/30"
                        : "bg-[#061426] text-white hover:bg-[#0d2138]"
                    }`}
                  >
                    {item.day}
                  </button>
                </div>
                <div className="shrink-0 w-3.5 sm:w-8 h-8 sm:h-12 flex items-center justify-center relative">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff2e63] z-10 relative shadow-2xs" />
                </div>
                <div
                  className={`flex-1 bg-[#f4f7fa] hover:bg-[#edf2f7] transition-all duration-300 rounded-2xl overflow-hidden border ${
                    isOpen ? "border-[#ff2e63]/30 shadow-xs" : "border-slate-100/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleDay(idx)}
                    className="w-full p-3 sm:p-5 flex items-start justify-between gap-2.5 sm:gap-4 text-left cursor-pointer"
                  >
                    <div className="flex-1 min-w-0 pr-1 sm:pr-2">
                      <h4
                        className={`text-xs sm:text-base font-extrabold transition-colors duration-300 leading-snug ${
                          isOpen
                            ? "text-[#ff2e63]"
                            : "text-[#0b1724] group-hover:text-[#ff2e63]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <div
                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-1.5 sm:mt-2"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {!isOpen && (
                        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 leading-relaxed line-clamp-1 transition-opacity duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? "bg-[#ff2e63] text-white shadow-xs"
                          : "bg-[#dbe3eb]/70 text-slate-600 hover:bg-[#ff2e63] hover:text-white"
                      }`}
                    >
                      <FaChevronRight
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ${
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
