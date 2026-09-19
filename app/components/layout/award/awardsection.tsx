"use client";

import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import { site as travelData } from "@/data/index";
import type { TravelAwardsData as AwardsData } from "@/data/index";

const scriptFont = Kaushan_Script({
    subsets: ["latin"],
    weight: "400",
});

interface AwardSectionProps {
    data?: AwardsData;
}

export default function AwardSection({ data: propData }: AwardSectionProps = {}) {
    const data: AwardsData = propData || travelData.awards;

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white overflow-hidden">
            {/* Top Left World Map & Airplane Trail Doodle */}
            <div className="absolute top-2 left-2 sm:left-6 lg:left-12 hidden md:flex items-center gap-3 pointer-events-none select-none opacity-45">
                {/* World Map Sketch & Flight Path */}
                <svg
                    className="w-28 sm:w-36 h-20 text-slate-300 overflow-visible"
                    viewBox="0 0 140 80"
                    fill="none"
                >
                    {/* Faint map continent contours */}
                    <path
                        d="M 10 25 C 20 20, 35 25, 45 20 C 55 15, 60 25, 70 20"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M 15 50 C 25 45, 40 55, 50 45 C 60 50, 75 40, 85 48"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                    />
                    {/* Dashed trail with looped heart */}
                    <path
                        d="M 8 58 C 20 40, 45 65, 75 35"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                    />
                    {/* Small flying airplane */}
                    <g transform="translate(75, 35) rotate(-35) scale(0.9)">
                        <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                            fill="#94a3b8"
                            transform="translate(-12, -12)"
                        />
                    </g>
                </svg>

                {/* Handwritten Tagline Doodle */}
                <div
                    className={`${scriptFont.className} text-xl sm:text-2xl text-slate-400 rotate-[-8deg] leading-tight shrink-0`}
                >
                    {Array.isArray(data.header.doodleText) ? (
                        data.header.doodleText.map((line, idx) => (
                            <span key={line + idx} className={`block ${idx > 0 ? "pl-2" : ""}`}>
                                {line}
                            </span>
                        ))
                    ) : (
                        <span>{data.header.doodleText}</span>
                    )}
                </div>
            </div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Top Header */}
                <div className="text-center max-w-2xl mx-auto mb-6">
                    <div className="flex items-center justify-center gap-2.5 mb-2.5">
                        <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                            {data.header.subtitle}
                        </span>
                        <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
                        {data.header.headingLine1}
                        <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
                    </h2>

                    <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </div>

                {/* Awards Cards Grid - 5 Columns Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
                    {data.items.map((item, idx) => {
                        const isPink = idx % 2 === 0;
                        const themeClasses = isPink
                            ? "bg-[#fdf2f4] border-[#fce2e7] hover:border-[#ffccd5]"
                            : "bg-[#edf7fc] border-[#d8effa] hover:border-[#bae6fd]";

                        return (
                            <div
                                key={item.id || idx}
                                className={`group relative flex flex-col items-center ${themeClasses} rounded-2xl sm:rounded-[24px] p-3 border shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5`}
                            >
                                {/* Photo Frame Container - Taller Image Height */}
                                <div className="relative w-full aspect-[4/4.8] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/5 mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Year with pink underline bar */}
                                <div className="flex flex-col items-center mb-2.5">
                                    <span className="text-sm sm:text-[15px] font-semibold text-slate-600 tracking-wider">
                                        {item.year}
                                    </span>
                                    <div className="w-6 h-[2.5px] bg-[#ff2e63] rounded-full mt-1.5" />
                                </div>

                                {/* Award Title - Larger Font Size */}
                                <h3 className="text-base sm:text-lg font-bold text-[#12161f] text-center leading-snug mb-2.5 group-hover:text-[#ff2e63] transition-colors duration-200">
                                    {item.title}
                                </h3>

                                {/* Award Description - Larger Font Size */}
                                <p className="text-xs sm:text-sm text-gray-400 text-center leading-relaxed mt-auto">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
