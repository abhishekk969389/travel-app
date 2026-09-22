"use client";

import Image from "next/image";
import Link from "next/link";
import { site as travelData, createSlug } from "@/data/index";
import type { TravelTeamData as TeamData } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TeamSecProps {
  data?: TeamData;
}

export default function TeamSec({ data: propData }: TeamSecProps = {}) {
  const data: TeamData = propData || travelData.team;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-6">
            {/* Top Badge with Horizontal Accent Lines */}
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                {data.header.badge}
              </span>
              <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
              {data.header.headingPrefix}
              <span className="text-[#ff2e63]">
                {data.header.headingHighlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              {data.header.description}
            </p>
          </div>
        </FadeIn>

        {/* Team Members Grid: 2 rows of 4 columns */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {data.members.map((member) => (
            <StaggerItem key={member.id} className="h-full">
              <Link
                href={`/teamdetails?name=${createSlug(member.name)}`}
                className="group relative bg-[#edf7fc] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
              >
                {/* Top Landscape / Scenic Background Image */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={member.bgImage || "/blog1.jpg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Card Content */}
                <div className="relative pt-16 pb-6 px-4 text-center flex flex-col items-center flex-1">
                  {/* Circular Portrait Image Overlapping Scenic Background */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                    <Image
                      src={member.image || "/team.jpg"}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Member Name */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0f172a] group-hover:text-[#ff2e63] transition-colors duration-200">
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  <p className="text-sm font-medium text-[#00b4d8] mt-1">
                    {member.role}
                  </p>

                  {/* Yellow / Golden Accent Underline */}
                  <div className="w-10 h-[2.5px] bg-[#f59e0b] rounded-full mt-2.5 mx-auto" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
