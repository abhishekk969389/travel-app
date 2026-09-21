"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaMap, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import type { TeamMemberItem } from "@/data/index";
import { RiDoubleQuotesL } from "react-icons/ri";

interface TeamProfileCardProps {
  member?: TeamMemberItem;
}

export default function TeamProfileCard({ member }: TeamProfileCardProps) {
  if (!member || !member.details) return null;

  const { details } = member;
  const stats = details.stats || { yearsOfExperience: "5+", toursCompleted: "200+" };

  return (
    <div className="bg-[#0b1824] rounded-[22px] overflow-hidden shadow-2xl text-white flex flex-col h-full border">
      {/* Top Main Image Container */}
      <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[540px] overflow-hidden bg-slate-800">
        <Image
          src={member.image || "/team.jpg"}
          alt={member.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top hover:scale-105 transition-transform duration-700"
          priority
        />
        {/* Subtle Dark Gradient Overlay at bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1824] via-transparent to-transparent opacity-60" />

        {/* Floating Quote Box Overlay at Bottom Left */}
        {details.quote && (
          <div className="absolute bottom-5 left-5 max-w-[170px] sm:max-w-[180px] bg-[#091724]/95 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl z-10">
            <RiDoubleQuotesL className="text-white h-8 w-8 text-base mb-2 opacity-90" />
            <p className="text-xs sm:text-base text-slate-200 font-normal leading-snug tracking-tight">
              {details.quote}
            </p>
            {/* Red Underline in Quote Box */}
            <div className="w-7 h-[2px] bg-gradient-to-r from-[#ff2e63] to-[#ff5a5f] rounded-full mt-2.5" />
          </div>
        )}
      </div>

      {/* Member Details Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Member Name */}
          <h2 className="text-2xl sm:text-[28px] md:text-[30px] lg:text-[34px] font-extrabold text-white tracking-tight leading-none mb-1.5">
            {member.name}
          </h2>

          {/* Member Role / Title */}
          <p className="text-sm sm:text-base md:text-[22px] font-normal text-slate-300">
            {member.role}
          </p>

          {/* Red Underline Accent */}
          <div className="w-11 h-[3px] bg-gradient-to-r from-[#ff2e63] to-[#ff5a5f] rounded-full mt-3 mb-6" />

          {/* Info List */}
          <div className="space-y-4 text-xs sm:text-[13px] text-slate-200">
            {/* Location */}
            {details.location && (
              <div className="flex items-center gap-3.5">
                <FaMapMarkerAlt className="text-[#ff2e63] h-8 w-8 text-lg shrink-0" />
                <span className="font-normal text-slate-200 truncate text-sm sm:text-base md:text-[18px] ">{details.location}</span>
              </div>
            )}

            {/* Email */}
            {details.email && (
              <div className="flex items-center gap-3.5">
                <FaEnvelope className="text-[#ff2e63] h-8 w-8 text-base shrink-0" />
                <a
                  href={`mailto:${details.email}`}
                  className="font-normal text-slate-200 truncate text-sm sm:text-base md:text-[18px]"
                >
                  {details.email}
                </a>
              </div>
            )}

            {/* Specialization */}
            {details.specialization && (
              <div className="flex items-center gap-3.5">
                <FaMap className="text-[#ff2e63] h-8 w-8 text-base shrink-0" />
                <span className="font-normal text-slate-200 text-sm sm:text-base md:text-[18px]">
                  Specialization: {details.specialization}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* Horizontal Line Divider */}
          <div className="w-full h-[1px] bg-slate-800/80 my-5" />

          {/* Experience & Tours Stats */}
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="border-r border-slate-800/80 pr-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#ff2e63] tracking-tight">
                {stats.yearsOfExperience}
              </span>
              <span className="block text-[11px] sm:text-xs font-normal text-slate-300 mt-0.5">
                Years of Experience
              </span>
            </div>
            <div className="pl-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#ff2e63] tracking-tight">
                {stats.toursCompleted}
              </span>
              <span className="block text-[11px] sm:text-xs font-normal text-slate-300 mt-0.5">
                Tours Completed
              </span>
            </div>
          </div>

          {/* Plan Your Trip Button */}
          <Link
            href="/enquiry"
            className="w-full mt-6 bg-gradient-to-r from-[#ff1d58] via-[#ff3b5c] to-[#ff7244] hover:opacity-95 text-white font-semibold py-4 px-6 rounded-[20px] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#ff2e63]/20 group text-xs sm:text-sm tracking-wide"
          >
            <span>{details.buttonText || `Plan Your Trip with ${member.name.split(" ")[0]}`}</span>
            <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
