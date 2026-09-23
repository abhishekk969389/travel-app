"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaHome,
    FaCog,
    FaSuitcase,
    FaMapMarkerAlt,
    FaUsers,
    FaRegNewspaper,
    FaImage,
    FaCommentDots,
    FaHandshake,
    FaQuestion,
    FaEnvelope,
    FaLock,
    FaUserTie,
    FaExclamationTriangle,
    FaChevronRight,
    FaPlane,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelSitemapData, SitemapCategoryItem, SitemapLinkItem } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

interface SitemapSecProps {
    data?: TravelSitemapData;
}

const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
        case "FaHome":
            return <FaHome className={className} />;
        case "FaCog":
        case "FaCogs":
            return <FaCog className={className} />;
        case "FaSuitcase":
        case "FaBriefcase":
            return <FaSuitcase className={className} />;
        case "FaMapMarkerAlt":
            return <FaMapMarkerAlt className={className} />;
        case "FaUsers":
            return <FaUsers className={className} />;
        case "FaRegNewspaper":
        case "FaFileAlt":
        case "FaNewspaper":
            return <FaRegNewspaper className={className} />;
        case "FaImage":
        case "FaImages":
            return <FaImage className={className} />;
        case "FaCommentDots":
        case "FaCommentAlt":
            return <FaCommentDots className={className} />;
        case "FaHandshake":
            return <FaHandshake className={className} />;
        case "FaQuestion":
        case "FaQuestionCircle":
            return <FaQuestion className={className} />;
        case "FaEnvelope":
            return <FaEnvelope className={className} />;
        case "FaLock":
        case "FaShieldAlt":
            return <FaLock className={className} />;
        case "FaUserTie":
            return <FaUserTie className={className} />;
        case "FaExclamationTriangle":
            return <FaExclamationTriangle className={className} />;
        default:
            return <FaHome className={className} />;
    }
};

export default function SitemapSec({ data: propData }: SitemapSecProps = {}) {
    const data: TravelSitemapData = propData || travelData.sitemap;
    const { header, categories, promoCard } = data;

    return (
        <section className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 bg-white overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[190px] sm:h-[230px] md:h-[300px] pointer-events-none select-none flex items-start justify-start overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
            >
                <div className="relative w-full max-w-[1280px] h-full opacity-8 sm:opacity-10">
                    <Image
                        src="/world.jpg"
                        alt="World Map Background"
                        fill
                        unoptimized
                        className="object-contain object-left-top filter blur-[0.6px]"
                        priority
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

                <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-6">
                    <div className="inline-flex items-center justify-center gap-3 mb-2.5">
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff2e63] uppercase">
                            {header.badge}
                        </span>
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
                        <span>{header.headingPrefix} </span>
                        <span className="text-[#ff2e63]">{header.headingHighlight}</span>
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-base leading-relaxed max-w-xl mx-auto">
                        {header.description}
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
                    {categories.map((category: SitemapCategoryItem) => {
                        const isYellowTheme = category.theme === "yellow";

                        return (
                            <StaggerItem
                                key={category.id}
                                className="bg-white rounded-[20px] p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
                            >
                                <div className="flex items-center gap-3.5 mb-5 pb-1">
                                    <div
                                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${isYellowTheme
                                            ? "bg-[#F59E0B] text-slate-900 ring-4 ring-[#FEF3C7]"
                                            : "bg-[#ff2e63] text-white ring-4 ring-[#ffe8ed]"
                                            }`}
                                    >
                                        {renderIcon(category.icon, "w-5 h-5")}
                                    </div>
                                    <h2 className="text-base sm:text-[17px] font-bold text-[#101828] tracking-tight">
                                        {category.title}
                                    </h2>
                                </div>
                                <ul className="space-y-2.5">
                                    {category.links.map((link: SitemapLinkItem, index: number) => (
                                        <li key={`${category.id}-link-${index}`}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-2 text-[13px] sm:text-[14px] text-slate-600 font-medium hover:text-[#ff2e63] transition-colors"
                                            >
                                                <FaChevronRight className="w-2.5 h-2.5 text-slate-800 shrink-0 group-hover:text-[#ff2e63] group-hover:translate-x-0.5 transition-all" />
                                                <span className="truncate">{link.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </StaggerItem>
                        );
                    })}

                  
                    <ScaleIn className="relative bg-gradient-to-b from-[#062433] via-[#083042] to-[#0A3D54] rounded-[20px] p-6 text-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] select-none">
                        {/* Top Stars & Flight Path SVG */}
                        <svg
                            viewBox="0 0 200 120"
                            className="absolute top-0 right-0 left-0 w-full h-auto pointer-events-none overflow-visible"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 10 90 C 40 40, 110 50, 155 20"
                                stroke="#FFFFFF"
                                strokeWidth="1.6"
                                strokeDasharray="4 4"
                                strokeLinecap="round"
                                opacity="0.75"
                            />
                            <g transform="translate(155, 18) rotate(15)">
                                <path
                                    d="M 12 1 C 13 1, 14 1.8, 14 2.8 L 14 9.5 L 25 16.5 L 25 19 L 14 15.5 L 14 23 L 17 25.2 L 17 27.5 L 12 26 L 7 27.5 L 7 25.2 L 10 23 L 10 15.5 L -1 19 L -1 16.5 L 10 9.5 L 10 2.8 C 10 1.8, 11 1, 12 1 Z"
                                    fill="#FFFFFF"
                                    transform="scale(0.8)"
                                />
                            </g>
                        </svg>
                        <div className="relative z-20 flex flex-col items-end justify-center pt-10 pr-6 select-none">
                            <div className="flex flex-col items-start -rotate-[22deg] space-y-0.5">
                                <span className="font-[family-name:var(--font-script)] text-3xl font-medium text-white drop-shadow-md tracking-wide pl-2">
                                    {promoCard?.tag1 || "Plan"}
                                </span>
                                <span className="font-[family-name:var(--font-script)] text-3xl font-medium text-white drop-shadow-md tracking-wide pl-6">
                                    {promoCard?.tag2 || "Explore"}
                                </span>
                                <div className="relative pl-10">
                                    <span className="font-[family-name:var(--font-script)] text-3xl font-medium text-white drop-shadow-md tracking-wide">
                                        {promoCard?.tag3 || "Discover"}
                                    </span>
                                    {/* Yellow Accent Underline */}
                                    <div className="absolute -bottom-1 left-8 w-24 h-[3px] bg-[#EAB308] rounded-full transform rotate-1" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Layered Mountain & Tree Silhouettes */}
                        <svg
                            viewBox="0 0 200 100"
                            className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-10"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 0 100 L 0 75 L 25 55 L 45 70 L 75 40 L 105 75 L 140 50 L 175 70 L 200 58 L 200 100 Z"
                                fill="#00607A"
                                opacity="0.5"
                            />
                            <path
                                d="M 0 100 L 0 82 L 15 72 L 35 88 L 60 62 L 85 85 L 120 68 L 155 88 L 185 75 L 200 82 L 200 100 Z"
                                fill="#004D63"
                                opacity="0.9"
                            />
                            <path
                                d="M 5 100 L 5 88 L 8 83 L 11 88 L 11 100 
                                 M 18 100 L 18 85 L 22 78 L 26 85 L 26 100 
                                 M 42 100 L 42 90 L 45 84 L 48 90 L 48 100 
                                 M 90 100 L 90 89 L 93 82 L 96 89 L 96 100"
                                fill="#003847"
                            />
                        </svg>
                    </ScaleIn>
                </StaggerContainer>
            </div>
        </section>
    );
}
