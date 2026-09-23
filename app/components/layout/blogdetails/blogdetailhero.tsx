"use client";

import Image from "next/image";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import type { BlogDetailsData, BlogPostItem } from "@/data/index";
import { FadeIn, ScaleIn } from "@/app/components/ui/animations";

interface BlogDetailHeroProps {
  post?: BlogPostItem;
  details?: BlogDetailsData;
}

export default function BlogDetailHero({ post, details: propDetails }: BlogDetailHeroProps) {
  const details = propDetails || post?.details;

  const category = post?.category || "Travel";
  const title = post?.title || "";
  const subtitle = details?.subtitle || "";
  const date = post?.monthYear ? `${post.day} ${post.monthYear}` : "";
  const author = details?.author || "By Travel Team";
  const featuredImage = details?.featuredImage || post?.image || "/blog1.jpg";
  const brushImage = details?.brushImage || "/brush.png";
  const brushText = details?.brushText || "Good Places\nBrighter Memories";
  const locationTag = details?.locationTag;
  const introParagraph = details?.introParagraph;

  if (!title) return null;

  return (
    <div className="space-y-4">
      <FadeIn direction="up" className="space-y-4">
        {category && (
          <div>
            <span className="inline-block px-6 py-2 rounded-full bg-[#ff2e63] text-white font-semibold text-xs sm:text-sm shadow-sm tracking-wide">
              {category}
            </span>
          </div>
        )}
        <h1 className="max-w-180 text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-black text-[#0d1724] tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-500 max-w-200 text-sm sm:text-sm md:text-[18px] leading-relaxed font-normal max-w-4xl">
            {subtitle}
          </p>
        )}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-100 pb-4">
          {date && (
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#ff2e63] w-5 h-5" />
              <span className="text-sm sm:text-sm md:text-base">{date}</span>
            </div>
          )}
          {author && (
            <div className="flex items-center gap-2">
              <FaUser className="text-[#ff2e63] w-5 h-5" />
              <span className="text-sm sm:text-sm md:text-base">{author}</span>
            </div>
          )}
        </div>
      </FadeIn>
      <ScaleIn className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-[24px] group">
        <Image
          src={featuredImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none rounded-[24px]" />

        <div className="absolute top-4 right-4 sm:-top-12 sm:-right-18 z-20 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] h-[75px] sm:h-[100px] md:h-[125px] lg:h-[200px] pointer-events-none drop-shadow-sm">
          <Image
            src={brushImage}
            alt="Brush Accent"
            fill
            className="object-fill"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 py-2 text-center rotate-[-3deg]">
            <span className="font-[family-name:var(--font-script)] text-xs text-white sm:text-sm md:text-2xl whitespace-pre-line">
              {brushText}
            </span>
          </div>
        </div>
        {locationTag?.title && (
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto z-20 bg-black/65 backdrop-blur-md border border-white/20 px-3.5 py-2.5 sm:px-5 sm:py-3.5 md:px-6 md:py-6 rounded-xl sm:rounded-2xl text-white max-w-full sm:max-w-sm flex items-center sm:items-start gap-2.5 sm:gap-3 shadow-lg">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff2e63] flex items-center justify-center shrink-0 shadow-sm">
              <FaMapMarkerAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight truncate sm:whitespace-normal">
                {locationTag.title}
              </h4>
              {locationTag.subtitle && (
                <p className="text-[11px] sm:text-sm text-slate-300 font-normal mt-0.5 line-clamp-2 sm:line-clamp-none leading-snug">
                  {locationTag.subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </ScaleIn>
      {introParagraph && (
        <FadeIn direction="up">
          <p className="text-slate-600 text-sm sm:text-sm md:text-[18px] leading-relaxed font-normal pt-2">
            {introParagraph}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
