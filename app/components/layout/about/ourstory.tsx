"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import { FaPlay, FaTimes } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelOurStoryData as OurStoryData } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

const renderFeatureIcon = (icon: string) => {
  switch (icon.toLowerCase()) {
    case "plane":
    case "fapaperplane":
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    case "users":
    case "fausers":
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "heart":
    case "faheart":
    default:
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
  }
};

interface OurStoryProps {
  data?: OurStoryData;
}

export default function OurStory({ data: propData }: OurStoryProps = {}) {
  const data: OurStoryData = propData || travelData.ourStory;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white overflow-hidden">
      <div
        className="absolute top-2 left-1/4 w-40 h-28 opacity-25 pointer-events-none bg-[radial-gradient(#64748b_1.5px,transparent_1.5px)] [background-size:12px_12px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <FadeIn direction="left">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2.5px] w-7 rounded-full bg-[#ff2e63]" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                    {data.subtitle}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#12161f] tracking-tight leading-[1.15] mb-5">
                  {data.headingLine1} <br />
                  <span>{data.headingLine2Prefix}</span>
                  <span className="text-[#ff2e63]">
                    {data.headingLine2Highlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed mb-6 max-w-[540px]">
                  {data.description}
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 pt-1">
              {data.features.map((feature) => (
                <StaggerItem key={feature.id}>
                  <div className="flex items-center gap-3">
                    <div className="text-[#ff2e63] shrink-0">
                      {renderFeatureIcon(feature.icon)}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#12161f] leading-tight">
                      <p>{feature.titleLine1}</p>
                      <p>{feature.titleLine2}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <FadeIn direction="up">
              <div className="flex items-center">
                <Link
                  href={data.cta.href}
                  className="group inline-flex items-center gap-3 rounded-2xl sm:rounded-[20px] bg-gradient-to-r from-[#ff0f55] via-[#ff3b50] to-[#ff7922] px-8 sm:px-9 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-medium text-white shadow-lg shadow-[#ff1a53]/25 hover:shadow-xl hover:opacity-95 transition-all duration-300"
                >
                  <span>{data.cta.text}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="relative flex items-end justify-between w-full max-w-[530px]">
            <div
              className={`text-slate-400 text-left leading-tight rotate-[-10deg] ${scriptFont.className} shrink-0 select-none pb-2`}
            >
              {data.doodleTextLines.map((line, idx) => {
                const isLast = idx === data.doodleTextLines.length - 1;
                const indentClass =
                  idx === 0 ? "" : idx === 1 ? "pl-3 -mt-1" : "pl-5 -mt-1";

                return (
                  <div
                    key={line + idx}
                    className={`text-xl text-slate-400 font-normal ${indentClass} ${
                      isLast ? "relative inline-block" : ""
                    }`}
                  >
                    {line}
                    {isLast && (
                      <div className="w-24 sm:w-28 h-[2px] bg-[#ff2e63] mt-1 rounded-full transform -rotate-2 shadow-sm" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="relative w-56 sm:w-72 md:w-80 h-28 sm:h-34 md:h-38 -ml-6 pointer-events-none select-none">
              <svg
                viewBox="0 0 260 120"
                className="w-full h-full text-slate-300 overflow-visible"
                fill="none"
              >
                <path
                  d="M 10 95 C 45 95, 75 95, 105 95 C 130 95, 150 85, 155 70 C 158 55, 142 45, 128 55 C 115 65, 122 88, 145 95 C 175 105, 210 80, 245 20"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />
                <g transform="translate(245, 20) rotate(-35) scale(1.2)">
                  <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                    fill="#94a3b8"
                    transform="translate(-12, -12)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <FadeIn direction="right" className="lg:col-span-6 relative flex flex-col h-full min-h-[420px] lg:min-h-full">
          <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-full rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl group bg-slate-900">
            <Image
              src={data.videoCard.image}
              alt={data.headingLine1}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 ml-18 flex items-center justify-center gap-3.5 sm:gap-5 z-10">
              <button
                onClick={() => setIsVideoOpen(true)}
                type="button"
                aria-label="Play video"
                className="group/play relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/25 backdrop-blur-xs p-2.5 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping pointer-events-none" />
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white text-[#ff2e63] shadow-2xl transition-transform duration-300 group-hover/play:scale-105">
                  <FaPlay className="h-5 w-5 sm:h-6 sm:w-6 ml-1 fill-current" />
                </div>
              </button>

              <div className="relative text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] select-none">
                <span
                  className={`${scriptFont.className} text-2xl text-white font-normal block leading-[0.95]`}
                >
                  {data.videoCard.playTextLines.map((line, idx) => (
                    <span key={line + idx} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                <svg
                  width="78"
                  height="12"
                  viewBox="0 0 78 12"
                  fill="none"
                  className="mt-1 text-[#ff2e63]"
                >
                  <path
                    d="M2 9 C26 3, 52 3, 76 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 flex items-center gap-3.5 rounded-2xl bg-[#081827]/85 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-3.5 border border-white/10 shadow-2xl">
              <div className="text-white/90 shrink-0">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {data.videoCard.badge.title}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight mt-0.5">
                  {data.videoCard.badge.subtitle}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#ff2e63] transition-colors"
              aria-label="Close video"
            >
              <FaTimes className="h-5 w-5" />
            </button>
            <iframe
              src={data.videoCard.videoUrl}
              title={data.headingLine1}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
