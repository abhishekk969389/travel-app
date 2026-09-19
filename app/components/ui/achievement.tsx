"use client";

import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import {
  FaTrophy,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobe,
  FaAward,
  FaMapPin,
  FaPlane
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelAchievementsData as AchievementsData, AchievementItem } from "@/data/index";

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTrophy,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobe,
  FaAward,
  FaMapPin,
};

export default function Achievement() {
  const data: AchievementsData = travelData.achievements;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-[#08121e] shadow-2xl py-8 px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Background Image */}
          <Image
            src={data.image}
            alt={data.headingPrefix}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 filter contrast-105"
          />

          {/* Gradient Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#040810]/85 via-[#050e1a]/60 to-[#040810]/75 pointer-events-none"
          />

          {/* Left Side: Title & Description */}
          <div className="relative z-10 max-w-[280px] shrink-0 w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[3px] bg-[#f59e0b] rounded-full inline-block" />
              <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-3">
              {data.headingPrefix}{" "}
              <span className="text-[#f59e0b]">{data.headingHighlight}</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </div>

          {/* Middle & Right: 4 Stat Items + Flight Path Doodle */}
          <div className="relative z-10 flex-1 w-full flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* 4 Stat Columns with Reduced Height Centered Vertical Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 w-full">
              {data.items.map((item: AchievementItem, index: number) => {
                const IconComp = iconMap[item.icon] || FaTrophy;
                return (
                  <div key={item.id} className="relative flex flex-col items-center text-center px-2 py-4 sm:py-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-dashed border-white/40 bg-slate-900/50 backdrop-blur-md flex items-center justify-center text-[#f59e0b] mb-3 shadow-md">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                      {item.number}
                    </div>

                    <div className="text-xs font-medium text-slate-200 leading-snug">
                      {item.label}
                    </div>

                    {/* Reduced Height Centered Vertical Divider Line */}
                    {index < data.items.length - 1 && (
                      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-slate-300 pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Far Right Flight Path Airplane & Script Tagline Doodle (Screenshot match) */}
            <div className="hidden xl:flex items-center gap-1 shrink-0 pointer-events-none select-none ml-4 self-center mb-22">
              {/* Airplane & Looping Dashed Flight Trail SVG */}
              <div className="relative w-40 h-20">
                <svg className="w-full h-full text-white/90" viewBox="0 0 160 80" fill="none">
                  {/* Flight Loop Path */}
                  <path
                    d="M 25 30 C 50 10, 75 70, 95 35 C 110 10, 135 30, 155 45"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  {/* Airplane Icon at start of path pointing top-left */}
                  <g transform="translate(25, 30) rotate(-45) scale(1.15)">
                    <path
                      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                      fill="currentColor"
                      transform="translate(-12, -12)"
                    />
                  </g>
                </svg>
              </div>

              {/* Handwritten 3-Line Tagline: Explore / More / Worry Less */}
              <div className={`text-white text-right leading-tight rotate-[-12deg] ${scriptFont.className} -ml-6`}>
                <div className="text-xl sm:text-xl  tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  Explore
                </div>
                <div className="text-xl sm:text-xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pr-2 -mt-1">
                  More
                </div>
                <div className="text-xl sm:text-xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pr-4 -mt-1 relative inline-block">
                  Worry Less
                  {/* Yellow underline brush stroke */}
                  <div className="w-24 h-[3px] bg-[#f59e0b] mt-1 rounded-full transform -rotate-3 shadow-sm" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}