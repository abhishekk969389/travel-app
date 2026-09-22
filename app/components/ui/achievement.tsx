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
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelAchievementsData as AchievementsData, AchievementItem } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

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
        <div className="relative overflow-hidden rounded-xl bg-[#08121e] shadow-2xl py-8 sm:py-10 lg:py-8 px-5 sm:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 xl:gap-8">

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
          <FadeIn direction="left" className="relative z-10 w-full max-w-full sm:max-w-xl lg:max-w-[240px] xl:max-w-[280px] shrink-0 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-6 h-[3px] bg-[#f59e0b] rounded-full inline-block" />
                <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                  {data.subtitle}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-white leading-tight tracking-tight mb-2.5 sm:mb-3">
                {data.headingPrefix}{" "}
                <span className="text-[#f59e0b]">{data.headingHighlight}</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm font-normal leading-relaxed whitespace-pre-line max-w-lg mx-auto lg:mx-0">
                {data.description}
              </p>
            </div>
          </FadeIn>

          {/* Middle & Right: 4 Stat Items + Flight Path Doodle */}
          <div className="relative z-10 flex-1 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 xl:gap-8">

            {/* 4 Stat Columns with Reduced Height Centered Vertical Dividers */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0 w-full">
              {data.items.map((item: AchievementItem, index: number) => {
                const IconComp = iconMap[item.icon] || FaTrophy;
                return (
                  <StaggerItem key={item.id} className="relative flex flex-col items-center text-center px-2 lg:px-2 py-1 md:py-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full border border-dashed border-white/40 bg-slate-900/50 backdrop-blur-md flex items-center justify-center text-[#f59e0b] mb-2 sm:mb-2.5 lg:mb-3 shadow-md">
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                    </div>

                    <div className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-tight mb-1">
                      {item.number}
                    </div>

                    <div className="text-xs sm:text-sm md:text-xs font-medium text-slate-200 leading-snug">
                      {item.label}
                    </div>

                    {/* Reduced Height Centered Vertical Divider Line */}
                    {index < data.items.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 lg:h-14 bg-slate-300/80 pointer-events-none" />
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Far Right Flight Path Airplane & Script Tagline Doodle (Visible on lg+ 1024px and xl) */}
            <ScaleIn className="hidden lg:flex items-center gap-1 shrink-0 pointer-events-none select-none ml-2 lg:ml-3 xl:ml-4 self-center mb-12 lg:mb-16 xl:mb-22">
              <div className="flex items-center gap-1">
                {/* Airplane & Looping Dashed Flight Trail SVG */}
                <div className="relative w-28 h-14 lg:w-32 lg:h-16 xl:w-40 xl:h-20">
                  <svg className="w-full h-full text-white/90" viewBox="0 0 160 80" fill="none">
                    {/* Flight Loop Path */}
                    <path
                      d="M 25 30 C 50 10, 75 70, 95 35 C 110 10, 135 30, 155 45"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />
                    {/* Airplane Icon */}
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
                <div className={`text-white text-right leading-tight rotate-[-12deg] ${scriptFont.className} -ml-4 lg:-ml-5 xl:-ml-6`}>
                  <div className="text-lg lg:text-lg xl:text-xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    Explore
                  </div>
                  <div className="text-lg lg:text-lg xl:text-xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pr-2 -mt-1">
                    More
                  </div>
                  <div className="text-lg lg:text-lg xl:text-xl tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pr-4 -mt-1 relative inline-block">
                    Worry Less
                    {/* Yellow underline brush stroke */}
                    <div className="w-18 lg:w-20 xl:w-24 h-[3px] bg-[#f59e0b] mt-1 rounded-full transform -rotate-3 shadow-sm" />
                  </div>
                </div>
              </div>
            </ScaleIn>

          </div>

        </div>
      </div>
    </section>
  );
}