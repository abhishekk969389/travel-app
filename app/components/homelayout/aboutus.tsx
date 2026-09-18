"use client";

import Image from "next/image";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import { FaArrowRight, FaRoute, FaMapMarkedAlt } from "react-icons/fa";
import travelData from "../../data/travel-data.json";
import type { AboutUsData } from "../../types/travel";
import { IoIosPeople } from "react-icons/io";

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutSection() {
  const data: AboutUsData = travelData.aboutUs;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white overflow-hidden">
      {/* Background Dotted Map Pattern */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(#12161f_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Side: Images & Floating Badges */}
        <div className="lg:col-span-6 relative w-full max-w-[560px] mx-auto min-h-[460px] sm:min-h-[510px] flex items-center justify-center">

          {/* Bottom-Right L-Shaped Corner Frame Accent */}
          <div className="absolute bottom-[5px] right-[0px] sm:right-[5px] w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] border-b-[10px] border-r-[10px] border-[#ff2e63] rounded-br-[10px] pointer-events-none z-0" />

          {/* Vertical Dark Ribbon Badge on Left */}
          <div className="absolute top-[10px] left-[0px] sm:left-[10px] z-30 flex flex-col items-start pointer-events-none">


            {/* Main Ribbon Body */}
            <div className="bg-gradient-to-b from-[#0d1424] via-[#161f33] to-[#d90452] text-white py-8 sm:py-14 px-3.5 sm:px-4 rounded-l-xl shadow-2xl flex flex-col items-center justify-between min-h-[330px] sm:min-h-[370px] border-r border-gray-800">
              <div className="rotate-180 [writing-mode:vertical-lr] font-bold tracking-wider text-xs sm:text-sm whitespace-nowrap flex items-center gap-2">
                <span className="text-[#ff2e63] font-black text-sm sm:text-base tracking-widest">{data.badgeRibbon.count}</span>
                <span className="text-white opacity-95">{data.badgeRibbon.label}</span>
              </div>

              {/* Bottom Paw Icon Accent */}
              <div className="flex flex-col items-center">
                <div className="text-[#ff4d6d] text-base sm:text-lg animate-pulse">
                  <IoIosPeople className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Photo (Sunset & Hiker) */}
          <div className="absolute top-[10px] left-[35px] sm:left-[55px] w-[50%] sm:w-[52%] h-[370px] sm:h-[410px] rounded-xl overflow-hidden border-[4px] border-white shadow-2xl z-10 bg-gray-100">
            <Image
              src={data.images.main}
              alt="Traveler exploring sunset mountain"
              fill
              priority
              className="object-cover"
            />
            {/* Top-Right Red Accent Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#ff2e63] z-20" />
          </div>

          {/* Secondary Photo (Tropical Islands & Woman in Hat - Offset Down) */}
          <div className="absolute top-[85px] sm:top-[105px] right-[10px] sm:right-[20px] w-[50%] sm:w-[52%] h-[350px] sm:h-[390px] rounded-xl overflow-hidden border-[4px] border-white shadow-2xl z-10 bg-gray-100">
            <Image
              src={data.images.secondary}
              alt="Traveler enjoying tropical view"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating White Experience Card Overlay */}
          <div className="absolute bottom-[15px] sm:bottom-[20px] left-[40%] sm:left-[42%] -translate-x-1/2 z-30 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6 flex flex-col items-center justify-center text-center min-w-[145px] sm:min-w-[165px]">
            <span className="text-4xl sm:text-5xl font-extrabold text-[#ff2e63] leading-none mb-1.5">
              {data.experienceCard.years}
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0d1424] max-w-[100px] leading-tight">
              {data.experienceCard.label}
            </span>
            <div className="w-10 h-[3.5px] bg-gradient-to-r from-[#ff2e63] to-[#ff6b00] rounded-full mt-3" />
          </div>

        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">

          {/* Subtitle in Script Font */}
          <span className={`${scriptFont.className} italic text-2xl sm:text-3xl text-[#ff2e63] font-normal mb-1`}>
            {data.subtitle}
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold  text-[#12161f] tracking-tight leading-[1.15] mb-4">
            {data.titlePrefix} <br />
            <span className="text-[#ff2e63]">{data.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[540px]">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
            {data.features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex items-start gap-3.5 ${
                  index === 0 ? "sm:border-r sm:border-gray-200 sm:pr-5" : "sm:pl-1"
                }`}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#ffeef2] flex items-center justify-center shrink-0 text-[#ff2e63]">
                  {feature.icon === "FaRoute" ? (
                    <FaRoute className="w-8 h-8" />
                  ) : (
                    <FaMapMarkedAlt className="w-8 h-8" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#12161f] text-base sm:text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions & Founder Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pt-5 border-t border-gray-100">

            {/* CTA Button */}
            <Link
              href={data.cta.href}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ff2e63] via-[#ff4d4d] to-[#ff6b00] hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>{data.cta.text}</span>
              <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Founder Signature & Avatar */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff2e63] shadow-md">
                <Image
                  src={data.founder.avatar}
                  alt={data.founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className={`${scriptFont.className} text-xl text-[#12161f] font-bold leading-none mb-1`}>
                  {data.founder.name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-[#ff2e63] font-bold">
                  {data.founder.role}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
