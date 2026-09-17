"use client";

import Image from "next/image";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import {
    ArrowRight,
    UserCheck,
    ShieldCheck,
    MapPin,
    Headphones,
    Mountain
} from "lucide-react";
import travelData from "./data/travel-data.json";
import type { WhyChooseData, WhyChooseFeature } from "./types/travel";

const scriptFont = Kaushan_Script({
    subsets: ["latin"],
    weight: "400",
});

export default function WhyChoose() {
    const data: WhyChooseData = travelData.whyChoose;
    const { hero, features } = data;

    // Helper to render lucide icon dynamically based on json icon name and optional badge text
    const renderIcon = (iconName: string, iconBadgeText?: string) => {
        switch (iconName) {
            case "UserCheck":
                return <UserCheck className="w-6 h-6 stroke-[2.2] text-slate-900" />;
            case "ShieldCheck":
                return <ShieldCheck className="w-6 h-6 stroke-[2.2] text-slate-900" />;
            case "MapPin":
                return <MapPin className="w-6 h-6 stroke-[2.2] text-slate-900" />;
            case "Headphones":
                return (
                    <div className="relative flex flex-col items-center justify-center">
                        <Headphones className="w-5 h-5 stroke-[2.2] text-slate-900" />
                        {iconBadgeText && (
                            <span className="text-[9px] font-extrabold text-[#ff2a5f] leading-none mt-0.5">{iconBadgeText}</span>
                        )}
                    </div>
                );
            default:
                return <Mountain className="w-6 h-6 stroke-[2.2] text-slate-900" />;
        }
    };

    return (
        <section className="w-full max-w-[1320px] mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-4 sm:px-6 lg:px-8">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6">

                    {/* Main Left Hero Banner Box */}
                    <div className="lg:col-span-6 relative overflow-hidden rounded-xl bg-[#09101d] shadow-2xl min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-8 md:p-10 group">
                        {/* Background Image */}
                        <Image
                            src={hero.image}
                            alt={hero.headingPrefix}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Gradient Overlay ONLY behind top text for readability while keeping mountain image bright */}
                        <div
                            aria-hidden="true"
                            className="absolute top-0 inset-x-0 h-[58%] bg-gradient-to-b from-[#070c17]/90 via-[#070c17]/60 to-transparent pointer-events-none"
                        />

                        {/* Top Watermark Stamp Badge */}
                        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/20 backdrop-blur-md bg-slate-900/30 flex items-center justify-center pointer-events-none p-1 z-10 shadow-lg">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white/50 animate-[spin_20s_linear_infinite]">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                <text className="text-[9px] font-bold uppercase tracking-[0.24em] fill-white/80">
                                    <textPath href="#circlePath" startOffset="0%">
                                        {hero.watermarkText}
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <Mountain className="w-7 h-7 stroke-[1.8] text-slate-200" />
                                <div className="flex gap-1 text-[7px] mt-0.5 text-amber-400">★ ★ ★</div>
                            </div>
                        </div>

                        {/* Top Content */}
                        <div className="relative z-10 max-w-xl">
                            {/* Category Subtitle */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-1.5 h-5 bg-gradient-to-b from-[#ff2a5f] to-[#ff6b3d] rounded-full inline-block" />
                                <span className="text-white/90 font-medium text-sm sm:text-base tracking-wide">
                                    {hero.subtitle}
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] mb-5 tracking-tight">
                                {hero.headingPrefix}{" "}
                                <br className="hidden sm:inline" />
                                {hero.headingMiddle}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a5f] via-[#ff4d4d] to-[#ff6b3d]">
                                    {hero.headingHighlight}
                                </span>{" "}
                                {hero.headingSuffix}
                            </h2>

                            {/* Paragraph */}
                            <p className="text-slate-50 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                                {hero.description}
                            </p>

                            {/* CTA Button */}
                            <Link
                                href={hero.cta.href}
                                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff2a5f] via-[#ff4848] to-[#ff6b3d] text-white font-semibold text-sm sm:text-base shadow-xl shadow-[#ff2a5f]/25 hover:shadow-2xl hover:shadow-[#ff2a5f]/40 hover:scale-[1.03] transition-all duration-300"
                            >
                                <span>{hero.cta.text}</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Bottom Graphic Annotations */}
                        <div className="relative z-10 pt-16 sm:pt-20 flex justify-between items-end">
                            {/* Left handwritten tagline from JSON */}
                            <div className={`text-white select-none -rotate-12 ${scriptFont.className}`}>
                                {hero.badgeLeftLines.map((line: string, index: number) => (
                                    <div
                                        key={index}
                                        className={`text-xl font-semibold tracking-wide leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] ${
                                            index === hero.badgeLeftLines.length - 1 ? 'relative inline-block' : ''
                                        }`}
                                    >
                                        {line}
                                        {index === hero.badgeLeftLines.length - 1 && (
                                            <svg className="absolute left-0 w-full h-3 text-[#ff2a5f] filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" viewBox="0 0 100 20" fill="none">
                                                <path d="M2 12 Q 50 18, 98 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right brush stroke image badge with text from JSON */}
                            <div className="relative w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-44 -mr-6 -mb-6 sm:-mr-8 sm:-mb-8 pointer-events-none select-none flex items-center justify-center">
                                {/* Brush Image (using hero.brushImage from JSON) */}
                                <div className="absolute inset-0 w-full h-full transform scale-110">
                                    <Image
                                        src={hero.brushImage}
                                        alt="Brush stroke"
                                        fill
                                        sizes="(max-width: 768px) 200px, 300px"
                                        className="object-contain object-right-bottom filter drop-shadow-xl saturate-150 brightness-105"
                                    />
                                </div>

                                {/* Text on top of brush image from JSON */}
                                <div className={`relative z-10 text-white text-right leading-tight font-normal transform -rotate-12 ml-10 pt-1 ${scriptFont.className}`}>
                                    {hero.badgeRightLines.map((line: string, index: number) => (
                                        <div
                                            key={index}
                                            className={`text-xl drop-shadow-md ${index > 0 ? '-mt-1 sm:-mt-2' : ''}`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right 4 Feature Cards (2x2 Grid) */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {features.map((feature: WhyChooseFeature) => (
                            <div
                                key={feature.id}
                                className="relative overflow-hidden rounded-xl bg-[#091120] shadow-xl min-h-[270px] sm:min-h-[290px] p-6 sm:p-7 flex flex-col justify-end gap-2.5 sm:gap-3 group transition-all duration-300"
                            >
                                {/* Background Image - Bright, clear & sharp */}
                                <Image
                                    src={feature.image}
                                    alt={feature.titlePrefix}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100"
                                />

                                {/* Gradient Shadow ONLY behind text at the bottom */}
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-0 inset-x-0 h-[75%] bg-gradient-to-t from-[#050912]/95 via-[#050912]/75 to-transparent pointer-events-none"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute top-0 inset-x-0 h-[35%] bg-gradient-to-b from-[#050912]/50 to-transparent pointer-events-none"
                                />

                                {/* Circular Icon Badge - Placed right above content */}
                                <div className="relative z-10 self-start w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white p-0.5 flex items-center justify-center shadow-sm ring-4 ring-rose-500/20 border-1 border-[#ff2a5f] mb-1">
                                    <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center">
                                        {renderIcon(feature.icon, feature.iconBadgeText)}
                                    </div>
                                </div>

                                {/* Content at Bottom - Sate hue text */}
                                <div className="relative z-10 pt-0 pr-10">
                                    <h3 className="text-lg sm:text-xl font-extrabold text-[#ffffff] mb-1.5 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                        {feature.titlePrefix}{" "}
                                        <span className="text-[#ff2a5f] block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                            {feature.titleHighlight}
                                        </span>
                                    </h3>
                                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom Right Arrow Button */}
                                <Link
                                    href={feature.href}
                                    aria-label={`Learn more about ${feature.titlePrefix} ${feature.titleHighlight}`}
                                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#ff6b3d] text-[#ffffff] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff2a5f]/40 transition-all duration-300 z-20"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
