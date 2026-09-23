"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site as travelData } from "@/data/index";
import type { TravelPackagesData as PackagesData } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

export default function Packages() {
    const data: PackagesData = travelData.packages;
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const toggleFavorite = (id: string) => {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#141d38_1.2px,transparent_1.2px)] [background-size:20px_20px]"
            />
            {data.leftDoodle && (
                <div
                    aria-hidden="true"
                    className="absolute top-12 left-4 lg:left-10 pointer-events-none hidden md:block opacity-60 rotate-[-12deg]"
                >
                    <span className="font-[family-name:var(--font-script)] text-2xl lg:text-3xl text-slate-400 block leading-tight">
                        {data.leftDoodle.line1}
                    </span>
                    <span className="font-[family-name:var(--font-script)] text-2xl lg:text-3xl text-slate-400 block leading-tight ml-3">
                        {data.leftDoodle.line2}
                    </span>
                    <svg className="w-16 h-8 text-slate-400 mt-1" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 10 Q 50 35 90 15" strokeDasharray="3 3" />
                        <path d="M82 10 L 92 15 L 85 24" />
                    </svg>
                </div>
            )}

            {data.rightDoodle && (
                <div
                    aria-hidden="true"
                    className="absolute top-2 right-2 lg:right-6 pointer-events-none hidden md:block z-0"
                >
                    <div className="relative flex items-start gap-2">
                        <svg
                            className="w-56 h-48 text-[#141d38] shrink-0"
                            viewBox="0 0 220 180"
                            fill="none"
                        >
                            <path
                                d="M 36 40 C 70 75, 110 115, 150 170"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeDasharray="5 5"
                                strokeLinecap="round"
                                className="opacity-60"
                            />
                            <g transform="translate(36, 40) rotate(-45) scale(1.15)">
                                <path
                                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                                    fill="currentColor"
                                    transform="translate(-12, -12)"
                                />
                            </g>
                        </svg>
                        <div className="flex flex-col text-slate-400 rotate-[-14deg] text-[#141d38]/90 font-[family-name:var(--font-script)] text-2xl lg:text-[2rem] leading-[1.1] pt-6 -ml-12">
                            <span>{data.rightDoodle.line1}</span>
                            <span className="ml-3">{data.rightDoodle.line2}</span>
                            {data.rightDoodle.line3 && (
                                <span className="ml-5 whitespace-nowrap">{data.rightDoodle.line3}</span>
                            )}
                            <div className="w-24 h-[2px] bg-[#141d38]/70 mt-1 ml-5 rounded-full" />
                        </div>
                    </div>
                </div>
            )}

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center gap-3 mb-1.5">
                            <span className="w-8 sm:w-12 h-[2px] bg-[#ff2e63] rounded-full" />
                            <span className="font-[family-name:var(--font-script)] text-2xl sm:text-3xl text-[#ff2e63] font-normal">
                                {data.subtitle}
                            </span>
                            <span className="w-8 sm:w-12 h-[2px] bg-[#ff2e63] rounded-full" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black font-bold text-[#12161f] tracking-tight leading-tight mb-3">
                            <span>{data.titlePrefix}</span>
                            <span className="bg-gradient-to-r from-[#ff2e63] via-[#ff4d6d] to-[#ff6b00] bg-clip-text text-transparent">
                                {data.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
                    {data.items.map((pkg) => {
                        const isFav = !!favorites[pkg.id];

                        return (
                            <StaggerItem key={pkg.id} className="h-full">
                                <div
                                    className="group relative bg-white rounded-xl border border-slate-100/80 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                                >
                                    <div className="relative w-full h-[220px] sm:h-[235px] overflow-hidden bg-slate-100">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10 pointer-events-none" />

                                        <div className="absolute top-3.5 left-3.5 bg-[#0f172a]/80 backdrop-blur-md text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 flex items-center gap-1.5">
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleFavorite(pkg.id)}
                                            aria-label="Add to wishlist"
                                            className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 z-10 ${isFav
                                                ? "bg-white text-[#ff2e63] shadow-md scale-110"
                                                : "bg-white/30 text-white hover:bg-white hover:text-[#ff2e63]"
                                                }`}
                                        >
                                            <svg className="w-5 h-5" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#12161f] group-hover:text-[#ff2e63] transition-colors duration-200 mb-0.5 tracking-tight">
                                                {pkg.title}
                                            </h3>
                                            <p className="text-xs font-semibold text-slate-400 mb-4">
                                                {pkg.subtitle}
                                            </p>
                                            {pkg.includes && pkg.includes.length > 0 && (
                                                <div className="flex items-center justify-between text-xs font-medium text-slate-500 bg-slate-50 rounded-xl px-3 py-2 mb-5 border border-slate-100">
                                                    {pkg.includes.map((inc: string, idx: number) => {
                                                        let IconPath = (
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        );
                                                        const lower = inc.toLowerCase();
                                                        if (lower.includes("flight") || lower.includes("plane")) {
                                                            IconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />;
                                                        } else if (lower.includes("hotel") || lower.includes("stay")) {
                                                            IconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4" />;
                                                        } else if (lower.includes("sight") || lower.includes("tour")) {
                                                            IconPath = (
                                                                <>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                </>
                                                            );
                                                        }

                                                        return (
                                                            <React.Fragment key={idx}>
                                                                {idx > 0 && <span className="w-[1px] h-3 bg-slate-200" />}
                                                                <div className="flex items-center gap-1.5">
                                                                    <svg className="w-3.5 h-3.5 text-[#ff2e63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                                        {IconPath}
                                                                    </svg>
                                                                    <span>{inc}</span>
                                                                </div>
                                                            </React.Fragment>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center gap-1 text-xs text-slate-500 mb-0.5">
                                                    <svg className="w-4 h-4 text-[#ff2e63] fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="font-bold text-[#12161f] text-sm">{pkg.rating}</span>
                                                    <span className="text-slate-400 font-normal">({pkg.reviewsCount} Reviews)</span>
                                                </div>
                                                <div className="flex items-baseline">
                                                    <span className="text-2xl font-black text-[#ff2e63]">${pkg.price}</span>
                                                    <span className="text-xs font-bold text-slate-400 ml-1">{pkg.priceUnit}</span>
                                                </div>
                                            </div>
                                            <Link
                                                href={pkg.href}
                                                aria-label={`View package details for ${pkg.title}`}
                                                className="w-10 h-10 rounded-full bg-[#ff2e63] hover:bg-[#ff1e56] text-white flex items-center justify-center shadow-md shadow-[#ff2e63]/25 group-hover:scale-110 transition-all duration-300 shrink-0"
                                            >
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
                <FadeIn direction="up">
                    <div className="text-center mt-6">
                        <Link
                            href={data.cta.href}
                            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#ff2e63] via-[#ff4d6d] to-[#ff6b00] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#ff2e63]/30 hover:shadow-xl hover:shadow-[#ff2e63]/40 hover:scale-[1.03] transition-all duration-300"
                        >
                            <span>{data.cta.text}</span>
                            <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
