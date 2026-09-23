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
import type { TourPackageCardItem, TourPackageDetailsLabels } from "@/data/index";
import { site } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TourDetailOverviewProps {
  pkg?: TourPackageCardItem;
  labels?: TourPackageDetailsLabels;
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

export default function TourDetailOverview({ pkg, labels: propLabels }: TourDetailOverviewProps) {
  if (!pkg) return null;

  const labels = propLabels || (site.tourPackagesPage as any).detailLabels;
  const details = pkg.details;

  const quickStats = details?.quickStats || [];
  const highlights = details?.highlights || [];
  const whatsIncluded = details?.whatsIncluded || [];
  const whatsNotIncluded = details?.whatsNotIncluded || [];

  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-8">
        <FadeIn direction="up">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f] tracking-tight mb-2">
            {labels?.overviewTitle || "Overview"}
          </h3>
          <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-4" />
          <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {details?.overview ||
              `${pkg.title} is a dream destination that offers something for every traveler — from pristine landscapes to ancient heritage and vibrant local culture. Whether you're seeking adventure, spiritual experiences, or simply a relaxing getaway, this tour package takes you to the best of ${pkg.title} with comfortable stays, guided tours, and unforgettable experiences.`}
          </p>
        </FadeIn>
        <div>
          <FadeIn direction="up">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f] tracking-tight mb-2">
              {labels?.highlightsTitle || "Highlights"}
            </h3>
            <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-6" />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <StaggerItem key={idx} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#ffe8ed] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {renderHighlightIcon(item.icon)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item.title}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn direction="up" className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#12161f] tracking-tight mb-2">
            {labels?.whatsIncludedTitle || "What's Included"}
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
        </FadeIn>
        <FadeIn direction="up" className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#12161f] tracking-tight mb-2">
            {labels?.whatsNotIncludedTitle || "What's Not Included"}
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
        </FadeIn>
      </div>
    </div>
  );
}
