"use client";

import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import { FaBullseye, FaEye, FaCrosshairs, FaCompass, FaLightbulb } from "react-icons/fa";
import { LuTarget, LuEye } from "react-icons/lu";
import { site as travelData } from "@/data/index";
import type { TravelMissionData as MissionData } from "@/data/index";

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

const renderMissionIcon = (iconName?: string) => {
  switch (iconName?.toLowerCase()) {
    case "target":
    case "mission":
    case "lutarget":
      return <LuTarget className="w-6 h-6 sm:w-8 sm:h-8" />;
    case "eye":
    case "vision":
    case "lueye":
      return <LuEye className="w-6 h-6 sm:w-8 sm:h-8" />;
    default:
      return <LuTarget className="w-6 h-6 sm:w-7 sm:h-7" />;
  }
};

interface MissionSecProps {
  data?: MissionData;
}

export default function MissionSec({ data: propData }: MissionSecProps = {}) {
  const data: MissionData = propData || travelData.mission;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-4 bg-white overflow-hidden">
      {/* Top watermark background doodle */}
      <div className="absolute top-6 right-8 lg:right-24 hidden md:flex items-center gap-2 pointer-events-none select-none opacity-35 rotate-[-6deg]">
        <div className={`${scriptFont.className} text-2xl lg:text-3xl text-slate-400 leading-tight`}>
          {Array.isArray(data.header.watermarkText) ? (
            data.header.watermarkText.map((line, idx) => (
              <span key={idx} className={`block ${idx > 0 ? "pl-2.5" : ""}`}>
                {line}
              </span>
            ))
          ) : (
            <>
              <span className="block">Explore</span>
              <span className="block pl-2.5">The World</span>
            </>
          )}
        </div>
        <svg
          className="w-12 h-8 text-slate-400"
          viewBox="0 0 48 32"
          fill="none"
        >
          <path
            d="M2 28 C 15 28, 25 15, 42 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d="M42 6 L 46 4 L 45 8 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
              {data.header.subtitle}
            </span>
            <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-4">
            {data.header.headingLine1}
            <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
            {data.header.description}
          </p>
        </div>

        {/* Row 1: OUR MISSION (Left Text, Right Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-28">
          {/* Mission Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex items-center gap-3.5 mb-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#ffecef] text-[#ff2e63] shrink-0 shadow-sm">
                {renderMissionIcon(data.mission.icon)}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-5 rounded-full bg-[#ff2e63]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#ff2e63] uppercase">
                  {data.mission.badge}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12161f] tracking-tight leading-tight my-4">
              {data.mission.headingPrefix} <br />
              <span>{data.mission.headingHighlightPrefix}</span>
              <span className="text-[#ff2e63]">{data.mission.headingHighlight}</span>
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {data.mission.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Mission Image Column with Tilted Pink Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px]">
              {/* Pink Tilted Accent Card */}
              <div
                className="absolute -inset-2.5 sm:-inset-3.5 bg-[#ff6b8b]/40 rounded-[32px] sm:rounded-[40px] -rotate-3 sm:-rotate-4 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[26px] sm:rounded-[34px] overflow-hidden border-4 border-white bg-slate-900 z-10 group">
                <Image
                  src={data.mission.image}
                  alt={data.mission.headingPrefix}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Handwritten Tagline on Image */}
                <div className="absolute top-6 left-6 z-20 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  <span
                    className={`${scriptFont.className} text-2xl sm:text-3xl lg:text-4xl text-white font-normal block leading-[1.05] rotate-[-4deg]`}
                  >
                    {data.mission.imageTagline.map((line, idx) => (
                      <span key={line + idx} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                  <svg
                    width="85"
                    height="12"
                    viewBox="0 0 85 12"
                    fill="none"
                    className="mt-1 text-[#ff2e63] rotate-[-4deg]"
                  >
                    <path
                      d="M2 9 C30 3, 58 3, 83 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: OUR VISION (Left Image, Right Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Vision Image Column with Tilted Teal Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1 p-2 sm:p-4">
            <div className="relative w-full max-w-[560px]">
              {/* Teal Tilted Accent Card */}
              <div
                className="absolute -inset-2.5 sm:-inset-3.5 bg-[#2dd4bf]/40 rounded-[32px] sm:rounded-[40px] rotate-3 sm:rotate-4 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[26px] sm:rounded-[34px] overflow-hidden border-4 border-white bg-slate-900 z-10 group">
                <Image
                  src={data.vision.image}
                  alt={data.vision.headingPrefix}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Handwritten Tagline on Image */}
                <div className="absolute top-6 left-6 z-20 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  <span
                    className={`${scriptFont.className} text-2xl sm:text-3xl lg:text-4xl text-white font-normal block leading-[1.05] rotate-[-4deg]`}
                  >
                    {data.vision.imageTagline.map((line, idx) => (
                      <span key={line + idx} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                  <svg
                    width="85"
                    height="12"
                    viewBox="0 0 85 12"
                    fill="none"
                    className="mt-1 text-[#ff2e63] rotate-[-4deg]"
                  >
                    <path
                      d="M2 9 C30 3, 58 3, 83 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Text Column with Watermark Background */}
          <div className="lg:col-span-6 relative flex flex-col justify-center order-1 lg:order-2">
            {/* Faint watermark globe & airplane trail */}
            <div className="absolute -right-8 -bottom-12 w-64 h-64 opacity-15 pointer-events-none select-none hidden sm:block">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-slate-400"
                fill="none"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M50 120h140 M120 50c25 25 40 45 40 70s-15 45-40 70c-25-25-40-45-40-70s15-45 40-70z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 60 C 40 40, 70 80, 90 60 C 110 40, 140 30, 170 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M170 10 L 175 6 L 176 13 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3.5 mb-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#e0f7f6] text-[#0d9488] shrink-0 shadow-sm">
                {renderMissionIcon(data.vision.icon)}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-5 rounded-full bg-[#0d9488]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0d9488] uppercase">
                  {data.vision.badge}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12161f] tracking-tight leading-tight my-4">
              {data.vision.headingPrefix} <br />
              <span>{data.vision.headingHighlightPrefix}</span>
              <span className="text-[#ff2e63]">{data.vision.headingHighlight}</span>
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed relative z-10">
              {data.vision.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
