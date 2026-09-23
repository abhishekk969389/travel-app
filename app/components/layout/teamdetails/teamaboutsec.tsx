"use client";

import Image from "next/image";
import {
  FaQuoteRight,
  FaUsers,
  FaShieldAlt,
  FaCompass,
  FaHeart,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";
import type { TeamMemberItem, TeamDestinationItem, TeamWhyTravelFeature } from "@/data/index";
import { ImQuotesRight } from "react-icons/im";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

interface TeamAboutSecProps {
  member?: TeamMemberItem;
}

const renderFeatureIcon = (iconName?: string) => {
  switch (iconName) {
    case "FaUsers":
      return <FaUsers className="w-8 h-8 text-[#ff2e63]" />;
    case "FaShieldAlt":
      return <FaShieldAlt className="w-8 h-8  text-[#ff2e63]" />;
    case "FaCompass":
    case "FaMapMarkedAlt":
      return <FaCompass className="w-8 h-8 text-[#ff2e63]" />;
    case "FaHeart":
      return <FaHeart className="w-8 h-8  text-[#ff2e63]" />;
    default:
      return <FaCheckCircle className="w-8 h-8  text-[#ff2e63]" />;
  }
};

export default function TeamAboutSec({ member }: TeamAboutSecProps) {
  if (!member || !member.details) return null;

  const { details } = member;
  const firstName = member.name.split(" ")[0];

  const destinationsList = details.destinations || [];

  const featuresList = details.whyTravelFeatures || [];

  return (
    <div className="space-y-8 sm:space-y-10 flex flex-col justify-between">
      <FadeIn direction="up" className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12161f] tracking-tight mb-2">
                <span>{details.aboutTitlePrefix || "About"} </span>
                <span className="text-[#ff2e63]">{details.aboutName || firstName}</span>
              </h3>
              <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-4" />
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                {details.aboutBio1 ||
                  `${member.name} is a passionate and deep experienced travel guide who loves introducing travelers and creating authentic travel experiences with total care. With over 5 years of rich experience in the travel industry, ${firstName} has guided tours across India, Europe, and other exotic destinations.`}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {details.aboutBio2 ||
                  `For ${firstName}, tour is not just visiting places, but about experiencing new cultures, meeting local people, and creating stories that last a lifetime.`}
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 bg-[#fff4f6] rounded-2xl p-5 sm:p-6 border border-[#ffe0e6] relative flex flex-col justify-between shadow-sm">
            <BiSolidQuoteAltLeft className="text-[#ff2e63] text-3xl sm:text-4xl absolute top-1" />
            <p className="italic text-slate-700  mt-4 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-4 relative z-10">
              {details.aboutQuote ||
                `"I believe travel brings people closer, creates understanding, and makes the world a kinder place. Let's explore it together!"`}
            </p>
            <div className="text-right">
              <span className="font-[family-name:var(--font-script)] text-3xl text-gray-400 font-normal tracking-wide">
                {details.aboutQuoteAuthor || `- ${member.name}`}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
        <FadeIn direction="up">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12161f] tracking-tight mb-2">
            <span>{details.destinationsTitlePrefix || "Destinations"} </span>
            <span className="text-[#ff2e63]">
              {details.destinationsTitleHighlight || "Expertise"}
            </span>
          </h3>
          <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-6" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {destinationsList.map((dest, idx) => (
            <StaggerItem
              key={dest.name + idx}
              className="group bg-[#f8fafc] rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-24 sm:h-28 md:h-36 overflow-hidden bg-slate-200">
                <Image
                  src={dest.image || "/blog1.jpg"}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="py-2.5 px-2 text-center bg-white border-t border-slate-100">
                <span className="text-sm sm:text-sm md:text-base font-bold text-slate-800 truncate block">
                  {dest.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <FadeIn direction="up">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12161f] tracking-tight mb-2">
                <span>{details.whyTravelTitlePrefix || "Why Travel with"} </span>
                <span className="text-[#ff2e63]">
                  {details.whyTravelName || `${firstName}?`}
                </span>
              </h3>
              <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-6" />
              <div className="space-y-4">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 group">
                    <div className="w-14 h-14 rounded-full bg-[#ffe8ed] group-hover:bg-[#ffffff] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                      {renderFeatureIcon(feat.icon)}
                    </div>
                    <span className="text-sm sm:text-sm md:text-base font-semibold text-slate-800">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <ScaleIn className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[240px] flex flex-col justify-center p-6 shadow-md border border-slate-100 bg-slate-900 group">
            <Image
              src={details.whyTravelImage || "/whychoose_fjord.jpg"}
              alt="Good People Great Journeys"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="relative z-10 max-w-[200px]">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                {details.whyTravelCardTitle || "Good People Great Journeys"}
              </h4>
              <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mt-2" />
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
