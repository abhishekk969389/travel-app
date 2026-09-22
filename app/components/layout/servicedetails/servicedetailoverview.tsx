'use client';

import React from 'react';
import Image from 'next/image';
import { ServiceDetailsData } from '@/data/index';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';
import { FadeIn, ScaleIn } from '@/app/components/ui/animations';

interface ServiceDetailOverviewProps {
  data: ServiceDetailsData;
}

export default function ServiceDetailOverview({ data }: ServiceDetailOverviewProps) {
  const renderIcon = (iconName?: string, className: string = 'w-5 h-5') => {
    if (!iconName) return <FaIcons.FaCheck className={className} />;

    const FaIcon = FaIcons[iconName as keyof typeof FaIcons];
    if (FaIcon) return <FaIcon className={className} />;

    const HiIcon = HiIcons[iconName as keyof typeof HiIcons];
    if (HiIcon) return <HiIcon className={className} />;

    const IoIcon = IoIcons[iconName as keyof typeof IoIcons];
    if (IoIcon) return <IoIcon className={className} />;

    return <FaIcons.FaCheck className={className} />;
  };

  const overview = data.overview || {
    subtitle: 'OVERVIEW',
    title: 'Travel the World with Ease',
    description: 'At TripNexa, we bring you a seamless booking experience with access to top providers, flexible schedules, and best available fares.',
    features: []
  };

  const whyChoose = data.whyChoose || {
    title: 'Why Book with TripNexa?',
    reasons: []
  };

  const rightCard = data.rightCard || {
    image: '/about2.jpg',
    handwritingText: 'New Journeys Await'
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14  bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Left Column: Overview Details */}
          <FadeIn direction="right" className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#ff3b65] uppercase block mb-2">
                {overview.subtitle || 'OVERVIEW'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0b1b28] mb-4 leading-tight tracking-tight">
                {overview.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-sm md:text-base leading-relaxed mb-8">
                {overview.description}
              </p>

              {/* Overview 3 Feature Horizontal Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {overview.features?.map((feat, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#fde8ec] text-[#ff0055] flex items-center justify-center mb-3 shadow-sm shrink-0">
                      {renderIcon(feat.icon, 'w-6 h-6 sm:w-7 sm:h-7 text-[#ff0055]')}
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0b1b28] leading-tight">
                      {feat.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Middle Column: Why Book Flights / Why Choose Card */}
          <FadeIn direction="up" delay={0.1} className="lg:col-span-4 bg-[#fdf3f4] border border-pink-100/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1b28] mb-6 leading-tight">
                {whyChoose.title}
              </h3>

              <div className="space-y-5">
                {whyChoose.reasons?.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-pink-200/70 text-pink-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {renderIcon(reason.icon, 'w-4 h-4 sm:h-6 sm:w-6  text-[#ff0055]')}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-sm md:text-base font-bold text-gray-900 leading-tight mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm sm:text-sm md:text-[14px] text-gray-600 leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Luggage Image with Handwriting Script Overlay */}
          <ScaleIn delay={0.2} className="lg:col-span-4 relative min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src={rightCard.image || '/about2.jpg'}
              alt="New Journeys Await"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* Script Text Overlay at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="font-[family-name:var(--font-script)] text-4xl sm:text-5xl text-white font-normal block tracking-wide select-none drop-shadow-lg">
                {rightCard.handwritingText || 'New Journeys Await'}
              </span>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
