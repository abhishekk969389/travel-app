"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaPlane } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelTestimonialsData as TestimonialsData,
  TestimonialItem,
} from "@/data/index";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Pagination from "@/app/components/ui/pagination";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export default function TestimonialsSection({
  data: propData,
}: TestimonialsSectionProps = {}) {
  const data: TestimonialsData = propData || travelData.testimonials;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = data.pagination?.itemsPerPage || 6;
  const totalPages = Math.max(1, Math.ceil(data.items.length / itemsPerPage));

  // Current page items
  const currentItems: TestimonialItem[] = data.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white ">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
      />

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

            {/* Decorative Flight Trail with Heart and Plane Icon (Screenshot Match) */}
            <div className="hidden lg:flex items-center absolute -right-32 xl:-right-48 -top-16 pointer-events-none select-none">
              <div className="relative w-64 h-64">
                <svg
                  viewBox="0 0 240 240"
                  fill="none"
                  className="w-full h-full text-[#ff2e63] overflow-visible"
                >
                  {/* 
              Single continuous trail matching the screenshot:
              Bottom-left swoop -> Loops right -> Forms tilted heart -> Curves up to the plane
            */}
                  <path
                    d="M 35 185 
                   C 75 185, 95 170, 115 145 
                   C 135 110, 118 70, 95 72 
                   C 82 73, 76 83, 75 92 
                   C 68 85, 56 83, 49 97 
                   C 40 115, 60 140, 115 145 
                   C 135 147, 160 120, 172 65"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Aeroplane at the top-right end pointing up-right */}
                <div className="absolute left-[67%] top-[12%] text-[#ff2e63] transform -rotate-[50deg] scale-125">
                  <FaPlane className="w-6 h-6 drop-shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <StaggerContainer key={currentPage} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6.5">
          {currentItems.map((item: TestimonialItem) => (
            <StaggerItem key={item.id} className="h-full">
              <div
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex gap-4.5 sm:gap-5 items-stretch relative group h-full"
              >
                <div className="relative w-[48%] sm:w-[46%] shrink-0">
                  <div className="relative w-full h-full min-h-[210px] sm:min-h-[235px] rounded-[20px] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.author.name}
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -right-4 sm:-right-5 top-2.5 sm:top-3 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ff2e63] border-[3.5px] border-white shadow-md flex items-center justify-center text-white">
                    <BiSolidQuoteAltLeft className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1 pl-2.5 sm:pl-3 min-w-0">
                  <div>
                    <div className="flex items-center gap-1 text-[#f59e0b] mb-2 sm:mb-2.5">
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-[#334155] text-xs sm:text-[13px] md:text-[15px] leading-[1.65] font-normal line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-3.5 mt-3 pt-3 border-t border-slate-100">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-2xs">
                      <Image
                        src={item.author.avatar || "/team.jpg"}
                        alt={item.author.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-[#0f2942] leading-tight truncate">
                        {item.author.name}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#64748b] font-medium mt-0.5 truncate">
                        {item.author.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      </div>
    </section>
  );
}
