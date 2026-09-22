"use client";

import Image from "next/image";
import type { TeamMemberItem } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TeamMomentsSecProps {
  member?: TeamMemberItem;
}

export default function TeamMomentsSec({ member }: TeamMomentsSecProps) {
  if (!member || !member.details) return null;

  const { details } = member;
  const firstName = member.name.split(" ")[0];

  const defaultMoments = [
    "/blog1.jpg",
    "/blog2.jpg",
    "/blog3.jpg",
    "/about1.jpg",
  ];

  const momentsList = details.moments || defaultMoments;

  return (
    <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm mt-8 sm:mt-10">
      {/* Header */}
      <FadeIn direction="up">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12161f] tracking-tight mb-2">
          <span>{details.momentsTitlePrefix || "Moments from"} </span>
          <span className="text-[#ff2e63]">
            {details.momentsTitleName || `${firstName}'s Journeys`}
          </span>
        </h3>
        {/* Red Accent Underline */}
        <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mb-6" />
      </FadeIn>

      {/* 4 Image Gallery Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {momentsList.map((imgSrc, idx) => (
          <StaggerItem
            key={idx}
            className="group relative h-48 sm:h-52 md:h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image
              src={imgSrc || "/blog1.jpg"}
              alt={`${member.name} Moment ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
