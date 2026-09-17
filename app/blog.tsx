"use client";

import Image from "next/image";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import { FaRegClock, FaRegFolder, FaArrowRight, FaPlane } from "react-icons/fa";
import travelData from "./data/travel-data.json";
import type { BlogData, BlogPostItem } from "./types/travel";

const scriptFont = Kaushan_Script({
    subsets: ["latin"],
    weight: "400",
});

export default function Blog() {
    const data: BlogData = travelData.blog;

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 overflow-hidden">
            {/* Decorative Flight Trail & Airplane at Top Right */}
            <div className="absolute top-6 right-8 md:right-16 opacity-30 pointer-events-none hidden sm:block">
                <div className="relative">
                    <svg
                        className="w-48 h-24 text-pink-400 stroke-current fill-none"
                        viewBox="0 0 200 100"
                    >
                        <path
                            d="M 10 80 Q 70 10 160 30"
                            strokeDasharray="4 4"
                            strokeWidth="1.5"
                        />
                    </svg>
                    <FaPlane className="absolute top-4 right-6 text-pink-500 text-lg transform rotate-[25deg]" />
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <span
                        className={`${scriptFont.className} text-[#ff3560] text-2xl sm:text-3xl block mb-1`}
                    >
                        {data.subtitle}
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1b2534] tracking-tight">
                        {data.headingPrefix}
                        <span className="text-[#ff3560]">{data.headingHighlight}</span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                        {data.description}
                    </p>

                    {/* Accent Line */}
                    <div className="h-[4px] w-14 bg-gradient-to-r from-[#ff3560] to-[#ff8c42] mx-auto mt-4 rounded-full" />
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.posts.map((post: BlogPostItem) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
                        >
                            {/* Card Image Container */}
                            <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden bg-slate-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />

                                {/* Date Badge */}
                                <div
                                    className={`absolute top-3 left-3 bg-gradient-to-b ${post.dateBadgeGradient} text-white px-3.5 py-2 rounded-xl text-center shadow-lg backdrop-blur-xs`}
                                >
                                    <span className="block text-xl sm:text-2xl font-black leading-none tracking-tight">
                                        {post.day}
                                    </span>
                                    <span className="block text-[10px] font-semibold uppercase tracking-wider mt-0.5 opacity-90">
                                        {post.monthYear}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    {/* Meta (Read time & Category) */}
                                    <div className="flex items-center text-sm sm:text-base font-medium text-slate-500 gap-2.5 sm:gap-3 mb-3">
                                        <span className="flex items-center gap-1.5">
                                            <FaRegClock className="text-slate-400 text-sm sm:text-base" />
                                            {post.readTime}
                                        </span>
                                        <span className="text-slate-300">|</span>
                                        <span className="flex items-center gap-1.5">
                                            <FaRegFolder className="text-slate-400 text-sm sm:text-base" />
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-[#1b2534] leading-snug group-hover:text-[#ff3560] transition-colors duration-200 line-clamp-2 mb-6">
                                        <Link href={post.href}>{post.title}</Link>
                                    </h3>
                                </div>

                                {/* Read More Button */}
                                <div>
                                    <Link
                                        href={post.href}
                                        className="inline-flex items-center gap-2 rounded-full border border-pink-300 px-5 py-2 text-xs sm:text-sm font-bold text-[#ff3560] hover:bg-[#ff3560] hover:text-white transition-all duration-300 group/btn"
                                    >
                                        <span>Read More</span>
                                        <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Blog Button */}
                <div className="text-center mt-8">
                    <Link
                        href={data.cta.href}
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ff2a5f] via-[#ff4850] to-[#ff843d] text-white px-16 py-4 rounded-xl font-bold shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
                    >
                        <span>{data.cta.text}</span>
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
