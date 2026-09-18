"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelBannerData as BannerData } from "@/data/index";

export default function Banner() {
    const data: BannerData = travelData.banner;
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className="relative w-full h-[480px] sm:h-[520px] lg:h-[580px] overflow-hidden bg-[#070b12]">
            {/* Background Image (Full-bleed) */}
            <Image
                src={data.backgroundImage || "/bannerimg.png"}
                alt="Travel Beyond Borders Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Skewed Red/Orange Gradient Accent Line Attached to Dark Overlay Edge (Screenshot 2) */}
            <svg
                aria-hidden="true"
                className="absolute top-0 left-0 z-15 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[51%] h-[34%] sm:h-[36%] lg:h-[38%] pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="redOrangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff2e63" />
                        <stop offset="50%" stopColor="#ff6b00" />
                        <stop offset="100%" stopColor="#e0124a" />
                    </linearGradient>
                </defs>
                <path
                    d="M 77 0 L 80.8 0 L 85.5 65 C 87.2 82, 86 100, 84.6 100 Z"
                    fill="url(#redOrangeGradient)"
                />
            </svg>

            {/* Translucent Dark Overlay on Left with Skewed Right Edge */}
            <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 z-10 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[51%] pointer-events-none"
                style={{
                    clipPath: "polygon(0 0, 77% 0, 97% 100%, 0 100%)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#05080e]/92 via-[#070c16]/90 to-[#070c16]/65" />
            </div>

            {/* Top-Right Corner Skewed Accent */}
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 z-10 h-full w-12 sm:w-16 md:w-20 pointer-events-none bg-gradient-to-b from-[#ff2e63] via-[#ff6b00] to-[#e0124a]"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 35%)" }}
            />

            {/* Main Content Container */}
            <div className="relative z-20 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-[480px]">
                    {/* Subtitle Script Font */}
                    <span className="block font-[family-name:var(--font-script)] text-3xl font-normal text-[#ff6b00] mb-1">
                        {data.subtitle}
                    </span>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.08]">
                        <div>{data.headingLine1}</div>
                        <div className="bg-gradient-to-r from-[#ff2e63] via-[#ff5a5f] to-[#ff6b00] bg-clip-text text-transparent">
                            {data.headingLine2}
                        </div>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 max-w-[420px] text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                        {data.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                        href={data.cta.href}
                        className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 mt-6 sm:mt-8 w-fit"
                    >
                        <span>{data.cta.text}</span>
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    {/* Slide Dots */}
                    <div className="mt-8 sm:mt-10 flex items-center gap-2.5">
                        {Array.from({ length: data.slidesCount || 3 }).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={() => setActiveSlide(idx)}
                                className={`block rounded-full transition-all duration-300 cursor-pointer ${idx === activeSlide
                                    ? "h-3 w-3 bg-[#ff2e63]"
                                    : "h-3 w-3 bg-white/90 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
