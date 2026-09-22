"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site as travelData } from "@/data/index";
import type { TravelDestinationsData as DestinationsData } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

export default function Destinations() {
    const data: DestinationsData = travelData.destinations;
    const [activeDot, setActiveDot] = useState(0);

    const itemsPerPage = 5;
    const totalPages = Math.max(1, Math.ceil(data.items.length / itemsPerPage));
    const currentPage = activeDot % totalPages;

    // Slice visible items for current slide page
    const visibleItems = data.items.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12">
            {/* Background Subtle Travel Doodles & Radial Grid */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#0284c7_1.2px,transparent_1.2px)] [background-size:22px_22px]"
            />

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <FadeIn direction="up">
                    <div className="text-center mb-8">
                        {/* Subtitle with Script Font & 3 Yellow Rays */}
                        <div className="inline-flex items-center justify-center gap-1.5 mb-1">
                            <span className="font-[family-name:var(--font-script)] text-3xl  text-[#1e3a8a] font-normal">
                                {data.subtitle}
                            </span>
                            {/* 3 Yellow Sunburst Ray Lines */}
                            <svg
                                className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffb800] -mt-3 sm:-mt-5 pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                            >
                                <path d="M6 13L9 6" />
                                <path d="M12 13L17 7" />
                                <path d="M14 17L21 16" />
                            </svg>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0c2340] tracking-tight">
                            <span>{data.titlePrefix}</span>
                            <span className="bg-gradient-to-r from-[#ff2e63] via-[#ff4d6d] to-[#ff5a5f] bg-clip-text text-transparent">
                                {data.titleHighlight}
                            </span>
                        </h2>
                    </div>
                </FadeIn>

                {/* 5 Fan-Tilted Destination Cards Grid (Slides per page) */}
                <StaggerContainer
                    key={currentPage}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 sm:gap-6 lg:gap-5 items-end justify-center pt-2 transition-all duration-500"
                >
                    {visibleItems.map((item) => (
                        <StaggerItem key={item.id} className="w-full">
                            <Link
                                href={item.href}
                                className={`group flex flex-col items-center transition-all duration-300 hover:scale-[1.05] hover:rotate-0 hover:-translate-y-2 ${item.tilt || ""
                                    }`}
                            >
                            {/* Card Image Container with Rounded Corners & Soft Shadow */}
                            <div className="relative w-full h-[230px] sm:h-[250px] lg:h-[270px] rounded-[28px] overflow-hidden shadow-[0_14px_30px_rgba(0,0,0,0.12)] group-hover:shadow-[0_22px_45px_rgba(255,46,99,0.2)] transition-all duration-300 bg-slate-100">
                                <Image
                                    src={item.image || "/home-bg.jpg"}
                                    alt={item.name}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Title, Subtitle, & Accent Line */}
                            <div className="pt-3.5 pb-1 text-center flex flex-col items-center">
                                <h3 className="text-xl font-bold text-[#0c2340] group-hover:text-[#ff2e63] transition-colors duration-300">
                                    {item.name}
                                </h3>
                                <p className="text-xs font-semibold text-[#8fa7c4] mt-0.5 tracking-wide">
                                    {item.subtitle}
                                </p>
                                {/* Accent Color Line Under Subtitle */}
                                <span
                                    className="block w-8 h-[3px] rounded-full mt-1.5 transition-all duration-300 group-hover:w-12"
                                    style={{ backgroundColor: item.accentColor || "#ff2e63" }}
                                />
                            </div>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>

                {/* Bottom Pagination Dots */}
                <div className="mt-8 flex items-center justify-center gap-2.5">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => setActiveDot(idx)}
                            className={`block rounded-full transition-all duration-300 cursor-pointer ${idx === currentPage
                                ? "h-3 w-3 bg-[#ff2e63] shadow-[0_0_8px_#ff2e63]"
                                : "h-3 w-3 border-2 border-slate-300 hover:border-[#ff2e63]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
