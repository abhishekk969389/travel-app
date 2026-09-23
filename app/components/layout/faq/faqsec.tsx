"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlane, FaPlus, FaMinus } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
    TravelFaqData as FaqData,
    FaqItem,
} from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface FaqSectionProps {
    data?: FaqData;
}

export default function FaqSection({
    data: propData,
}: FaqSectionProps = {}) {
    const data: FaqData = propData || travelData.faq;

    // Default first item "faq-1" open as shown in screenshot
    const [openId, setOpenId] = useState<string>("faq-1");

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? "" : id));
    };

    return (
        <section className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 bg-white overflow-hidden">
      <div
  aria-hidden="true"
  className="absolute inset-x-0 top-0 h-[190px] sm:h-[230px] md:h-[360px] pointer-events-none select-none flex items-start justify-start overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
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
                <FadeIn direction="up">
                    <div className="relative text-center max-w-2xl mx-auto mb-6">
                        <div className="flex items-center justify-center gap-3 mb-2.5">
                            <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                                {data.header.badge}
                            </span>
                            <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
                            {data.header.headingPrefix}
                            <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                            {data.header.description}
                        </p>
                        <div className="hidden lg:flex items-center absolute -right-48 xl:-right-64 -top-4 pointer-events-none select-none">
                            <div className="relative w-36 h-28">
                                <svg
                                    viewBox="0 0 140 100"
                                    fill="none"
                                    className="w-full h-full text-[#ff2e63]/70"
                                >
                                    <path
                                        d="M 20 70 C 0 50, 0 15, 35 15 C 55 15, 65 35, 70 45 C 75 35, 85 15, 105 15 C 140 15, 140 50, 100 80 C 85 90, 75 95, 70 98"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 100 80 C 120 70, 130 50, 135 30"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute right-0 top-3 text-[#ff2e63] transform rotate-45 scale-110">
                                    <FaPlane className="w-5 h-5 drop-shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <StaggerContainer className="w-full flex flex-col gap-3.5 sm:gap-4">
                    {data.items.map((item: FaqItem) => {
                        const isOpen = openId === item.id;

                        return (
                            <StaggerItem key={item.id}>
                                <div
                                    className={`rounded-2xl transition-all duration-300 ${isOpen
                                            ? "bg-[#fff1f5] border border-[#ff2e63]/30 shadow-xs p-4 sm:p-5"
                                            : "bg-white border border-slate-200/80 hover:border-slate-300 p-4 sm:p-5"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(item.id)}
                                        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer select-none group focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                            <div
                                                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 transition-all duration-300 ${isOpen
                                                        ? "bg-[#ff2e63] text-white shadow-xs"
                                                        : "bg-slate-100 text-[#0f2942]"
                                                    }`}
                                            >
                                                {item.number}
                                            </div>
                                            <h3 className="font-extrabold text-[#0f2942] text-sm sm:text-base md:text-[16.5px] leading-snug truncate sm:whitespace-normal">
                                                {item.question}
                                            </h3>
                                        </div>
                                        <div
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                                                    ? "bg-[#ff2e63]/15 text-[#ff2e63] rotate-180"
                                                    : "bg-slate-100/90 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800 rotate-0"
                                                }`}
                                        >
                                            {isOpen ? (
                                                <FaMinus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            ) : (
                                                <FaPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            )}
                                        </div>
                                    </button>
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                                            isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pt-3.5 sm:pt-4 pl-11 sm:pl-13 pr-2 sm:pr-4 text-[#334155] text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-normal">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
