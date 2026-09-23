"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelBannerData as BannerData, BannerSlideItem } from "@/data/index";

export default function Banner() {
    const data: BannerData = travelData.banner;
    const [virtualIndex, setVirtualIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    if (!data) return null;

    const slides: BannerSlideItem[] =
        data.slides && data.slides.length > 0
            ? (data.slides as BannerSlideItem[])
            : [
                {
                    id: "1",
                    subtitle: data.subtitle,
                    headingLine1: data.headingLine1,
                    headingLine2: data.headingLine2,
                    description: data.description,
                    cta: data.cta,
                    backgroundImage: data.backgroundImage || "/bannerimg.png",
                },
            ];

    const totalSlides = slides.length;
    const displaySlides = Array.from({ length: 20 }).flatMap(() => slides);

    const goToSlide = (dotIndex: number) => {
        setIsTransitioning(true);
        setVirtualIndex((prev) => {
            const currentModulo = prev % totalSlides;
            const diff = (dotIndex - currentModulo + totalSlides) % totalSlides;
            return prev + (diff === 0 ? 0 : diff);
        });
    };

    useEffect(() => {
        if (totalSlides <= 1) return;
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setVirtualIndex((prev) => prev + 1);
        }, 6500);
        return () => clearInterval(interval);
    }, [totalSlides]);

    useEffect(() => {
        if (virtualIndex >= totalSlides * 12) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setVirtualIndex(virtualIndex % totalSlides);
            }, 1450);
            return () => clearTimeout(timer);
        }
    }, [virtualIndex, totalSlides]);

    const activeDotIndex = virtualIndex % totalSlides;

    return (
        <section className="relative w-full h-[480px] sm:h-[520px] lg:h-[580px] overflow-hidden bg-[#070b12]">
            <div
                style={{
                    transform: `translateX(-${virtualIndex * 100}%)`,
                    transition: isTransitioning
                        ? "transform 1.4s cubic-bezier(0.25, 1, 0.35, 1)"
                        : "none",
                    willChange: "transform",
                }}
                className="w-full h-full flex shrink-0"
            >
                {displaySlides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full shrink-0 flex flex-col justify-center overflow-hidden"
                    >
                        <Image
                            src={slide.backgroundImage || "/bannerimg.png"}
                            alt={slide.headingLine1 || "Travel Banner"}
                            fill
                            priority={index < totalSlides}
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 z-10 bg-black/70 pointer-events-none block sm:hidden"
                        />
                        <svg
                            aria-hidden="true"
                            className="hidden sm:block absolute top-0 left-0 z-15 sm:w-[75%] md:w-[65%] lg:w-[58%] xl:w-[54%] h-[34%] sm:h-[36%] lg:h-[38%] pointer-events-none"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id={`redOrangeGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff2e63" />
                                    <stop offset="50%" stopColor="#ff6b00" />
                                    <stop offset="100%" stopColor="#e0124a" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 77 0 L 80.8 0 L 85.5 65 C 87.2 82, 86 100, 84.6 100 Z"
                                fill={`url(#redOrangeGradient-${index})`}
                            />
                        </svg>
                        <div
                            aria-hidden="true"
                            className="hidden sm:block absolute inset-y-0 left-0 z-10 sm:w-[75%] md:w-[65%] lg:w-[58%] xl:w-[54%] pointer-events-none"
                            style={{
                                clipPath: "polygon(0 0, 77% 0, 97% 100%, 0 100%)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#05080e]/95 via-[#070c16]/92 to-[#070c16]/75" />
                        </div>
                        <div
                            aria-hidden="true"
                            className="hidden sm:block absolute top-0 right-0 z-10 h-full w-12 sm:w-16 md:w-20 pointer-events-none bg-gradient-to-b from-[#ff2e63] via-[#ff6b00] to-[#e0124a]"
                            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 35%)" }}
                        />
                        <div className="relative z-20 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
                            <div className="max-w-[440px] lg:max-w-[480px] xl:max-w-[520px]">
                                <span className="block font-[family-name:var(--font-script)] text-3xl sm:text-3xl font-normal text-[#ff6b00] mb-1">
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-[2.65rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-white tracking-tight leading-[1.08]">
                                    <div>{slide.headingLine1}</div>
                                    <div className="bg-gradient-to-r from-[#ff2e63] via-[#ff5a5f] to-[#ff6b00] bg-clip-text text-transparent">
                                        {slide.headingLine2}
                                    </div>
                                </h1>
                                <p className="mt-3.5 sm:mt-4 max-w-[390px] sm:max-w-[420px] text-sm sm:text-sm md:text-base text-white/85 leading-relaxed font-normal drop-shadow-sm">
                                    {slide.description}
                                </p>
                                <Link
                                    href={slide.cta?.href || "/destinations"}
                                    className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#c40050] via-[#ff2e63] to-[#ff6b00] text-white font-semibold text-sm sm:text-sm md:text-base px-7 sm:px-7 py-3.5 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 mt-5 sm:mt-8 w-fit"
                                >
                                    <span>{slide.cta?.text || "Let's Get Started"}</span>
                                    <FaArrowRight className="w-4 h-4 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-0 right-0 z-30 pointer-events-auto">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2.5">
                        {Array.from({ length: totalSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                aria-label={`Go to slide ${idx + 1}`}
                                aria-current={idx === activeDotIndex}
                                onClick={() => goToSlide(idx)}
                                className={`block rounded-full transition-all duration-300 cursor-pointer ${idx === activeDotIndex
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
