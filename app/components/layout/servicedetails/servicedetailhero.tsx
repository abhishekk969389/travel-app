"use client";

import React from 'react';
import Image from 'next/image';
import { ServiceDetailsData } from '@/data/index';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';
import { FadeIn, ScaleIn } from '@/app/components/ui/animations';

interface ServiceDetailHeroProps {
  data: ServiceDetailsData;
}

export default function ServiceDetailHero({ data }: ServiceDetailHeroProps) {
  const renderIcon = (iconName: string, className: string = 'w-5 h-5') => {
    const FaIcon = FaIcons[iconName as keyof typeof FaIcons];
    if (FaIcon) return <FaIcon className={className} />;

    const HiIcon = HiIcons[iconName as keyof typeof HiIcons];
    if (HiIcon) return <HiIcon className={className} />;

    const IoIcon = IoIcons[iconName as keyof typeof IoIcons];
    if (IoIcon) return <IoIcon className={className} />;

    return <FaIcons.FaPlane className={className} />;
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14  bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center relative min-h-[510px]">

          <FadeIn direction="up" className="relative w-full lg:w-[52%] max-w-[644px] z-20 bg-[#081521] border border-slate-800/80 rounded-[2rem] p-7 text-white flex flex-col justify-between mb-8 lg:mb-0">

            <svg
              className="absolute right-6 bottom-14 w-48 h-48 text-white/10 pointer-events-none z-0"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M 20 160 C 60 160, 140 150, 140 100 C 140 50, 80 50, 90 100 C 100 145, 160 90, 165 65"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M 165 65 L 160 75 M 165 65 L 155 65"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            {/* Small Airplane Icon Watermark (Matching screenshot) */}
            <div className="absolute top-8 right-9 text-white/15 pointer-events-none z-0">
              <FaIcons.FaPlane className="w-12 h-12 transform -rotate-45" />
            </div>

            <div className="relative z-10">
              {/* Top Red Square Icon & Subtitle Badge */}
              <div className="flex items-center gap-3.5 mb-4 font-sans">
                <div className="w-11.5 h-11.5 rounded-xl bg-gradient-to-tr from-pink-600 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-500/30">
                  {renderIcon('FaPlane', 'w-6 h-6')}
                </div>
                <div>
                  <span className="text-[11px] font-extrabold tracking-widest text-[#ff4b6e] uppercase block">
                    {data.serviceBadge || 'OUR SERVICE'}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-none mb-3">
                {data.titlePart1}
                <span className="text-[#ff0055]"> {data.titleHighlight}</span>
              </h1>

              <h2 className="text-base sm:text-lg font-bold text-gray-100 mb-4">
                {data.tagline}
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-7 max-w-lg font-normal">
                {data.description}
              </p>
            </div>

            <div className="relative z-10 pt-5 border-t border-white/10 grid grid-cols-3 gap-3">
              {data.heroFeatures?.map((feat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2c0d19] text-[#ff0055] border border-red-500/20 flex items-center justify-center shrink-0 shadow-md">
                    {renderIcon(feat.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-100 leading-snug">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <ScaleIn className="relative w-full lg:w-[57%] lg:-ml-[9%] z-10">

            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-tr from-[#ff0055] to-[#ff3b00] rounded-[2rem] -z-10 shadow-lg"></div>

            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[510px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src={data.featuredImage || '/blog1.jpg'}
                alt={data.titlePart1}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white text-gray-900 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl flex items-center gap-3 border border-gray-100 z-20">
                <div className="w-9 h-9 rounded-xl border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <FaIcons.FaPlane className="w-4 h-4 text-slate-700 transform -rotate-45" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                    {data.badgeOverlay?.title || 'Fly Higher'}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">
                    {data.badgeOverlay?.subtitle || 'Discover More'}
                  </p>
                  <div className="w-6 h-[2px] bg-red-500 mt-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </ScaleIn>

        </div>
      </div>
    </section>
  );
}
