"use client";

import Image from "next/image";
import { FaQuoteLeft, FaCheck } from "react-icons/fa";
import type { BlogDetailsData, BlogPostItem } from "@/data/index";
import { ImQuotesLeft } from "react-icons/im";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

interface BlogDetailContentProps {
  post?: BlogPostItem;
  details?: BlogDetailsData;
}

export default function BlogDetailContent({ post, details: propDetails }: BlogDetailContentProps) {
  const details = propDetails || post?.details;

  if (!details) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* SECTION 1 */}
      {details.section1 && (
        <FadeIn direction="up" className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
              {details.section1.title}
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base md:text-[1.02rem] leading-relaxed font-normal">
            {details.section1.content}
          </p>
        </FadeIn>
      )}

      {/* SECTION 2: Top Places to Explore */}
      {details.section2 && details.section2.places && details.section2.places.length > 0 && (
        <div className="space-y-6">
          <FadeIn direction="up" className="flex items-center gap-3">
            <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
              {details.section2.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {details.section2.places.map((place, idx) => (
              <StaggerItem
                key={place.id || idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-slate-100">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-start">
                  <h3 className=" text-sm sm:text-sm md:text-[18px] font-extrabold text-[#0d1724] group-hover:text-[#ff2e63] transition-colors leading-snug mb-1">
                    {place.name}
                  </h3>
                  <p className=" text-sm sm:text-sm md:text-base text-slate-500 font-normal leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}

      {/* QUOTE CARD BANNER */}
      {details.quote?.text && (
        <ScaleIn className="bg-[#fff0f3] rounded-[24px] p-6 sm:p-8 border border-[#ffe0e6]/60 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
          {/* Left Circle Quote Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ffe0e8] text-[#ff2e63] flex items-center justify-center shrink-0 shadow-xs">
            <ImQuotesLeft className="w-7 h-7 sm:w-9 sm:h-9" />
          </div>

          {/* Center Quote Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-[1.125rem] font-bold text-[#0d1724] italic leading-relaxed">
              &ldquo;{details.quote.text}&rdquo;
            </p>
          </div>

          {/* Right Script Accent Text */}
          <div className="shrink-0 text-center md:text-right rotate-[-6deg] pt-1">
            <div className="font-[family-name:var(--font-script)] text-xl sm:text-2xl md:text-3xl text-[#ff2e63] font-semibold leading-tight">
              {(details.quote.brushText || "Travel More\nWorry Less")
                .split("\n")
                .map((line, idx, arr) => (
                  <span
                    key={idx}
                    className={`block ${
                      idx === arr.length - 1
                        ? "border-b-2 border-[#ff2e63] pb-0.5 inline-block"
                        : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
            </div>
          </div>
        </ScaleIn>
      )}

      {/* SECTION 3: Travel Tips */}
      {details.section3 && (
        <FadeIn direction="up" className="space-y-5 pt-2">
          {details.section3.title && (
            <div className="flex items-center gap-3">
              <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
                {details.section3.title}
              </h2>
            </div>
          )}

          {details.section3.tips && details.section3.tips.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-4.5 gap-x-8 lg:gap-x-12 pt-1">
              {details.section3.tips.map((tip, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff2e63] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FaCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className=" text-sm sm:text-sm md:text-[16px] font-medium text-[#52647c] leading-snug">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          )}

          {details.section3.conclusion && (
            <p className="text-[#52647c]  text-sm sm:text-sm md:text-[18px] leading-relaxed font-normal pt-4">
              {details.section3.conclusion}
            </p>
          )}
        </FadeIn>
      )}
    </div>
  );
}
