"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaPlay,
  FaTimes,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelVideoGalleryData as VideoGalleryData,
  VideoGalleryItem,
} from "@/data/index";

interface VideosGalleryProps {
  data?: VideoGalleryData;
}

export default function VideosGallery({ data: propData }: VideosGalleryProps = {}) {
  const data: VideoGalleryData = propData || travelData.videoGallery;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Show 6 videos initially, or all 12 when expanded
  const displayedItems: VideoGalleryItem[] = isExpanded
    ? data.items
    : data.items.slice(0, 6);

  // Toggle view all / show less
  const handleToggleViewAll = () => {
    setIsExpanded((prev) => !prev);
  };

  // Keyboard navigation for video lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : displayedItems.length - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev !== null ? (prev < displayedItems.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeIndex, displayedItems.length]);

  const openVideo = (index: number) => {
    setActiveIndex(index);
  };

  const closeVideo = () => {
    setActiveIndex(null);
  };

  const prevVideo = () => {
    setActiveIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : displayedItems.length - 1) : null
    );
  };

  const nextVideo = () => {
    setActiveIndex((prev) =>
      prev !== null ? (prev < displayedItems.length - 1 ? prev + 1 : 0) : null
    );
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Video Gallery & View All Videos Button */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <div className="flex items-center">
            <span className="w-7 sm:w-8 h-1 bg-[#ff2e63] rounded-full mr-2.5 sm:mr-3" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f]">
              {data.header.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleToggleViewAll}
            className="text-[#ff2e63] hover:text-[#e02656] font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors group cursor-pointer bg-transparent border-0 outline-none"
          >
            <span>
              {isExpanded
                ? data.header.viewLessText || "Show Less"
                : data.header.viewAllText}
            </span>
            <FaArrowRight
              className={`w-3 h-3 transition-transform duration-200 ${
                isExpanded ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* 6-Columns Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4.5">
          {displayedItems.map((item: VideoGalleryItem, idx: number) => (
            <div
              key={item.id || idx}
              onClick={() => openVideo(idx)}
              className="group flex flex-col cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openVideo(idx);
                }
              }}
              aria-label={`Play ${item.title}`}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-slate-900">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Center Circular Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/90 bg-black/45 backdrop-blur-xs flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-[#ff2e63] group-hover:border-[#ff2e63] transition-all duration-300">
                    <FaPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Duration Badge: Bottom-Left Corner */}
                <div className="absolute bottom-2 left-2 px-1.5 sm:px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-semibold font-mono tracking-tight shadow-xs">
                  {item.duration}
                </div>
              </div>

              {/* Title & Subtitle Below Thumbnail */}
              <div className="mt-2.5 sm:mt-3 text-center px-1">
                <h4 className="text-xs sm:text-[14px] md:text-[16px] font-bold text-[#12161f] group-hover:text-[#ff2e63] transition-colors line-clamp-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-sm sm:text-[14px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Video Modal (Matching exact ImageGallery Lightbox UI) */}
      {activeIndex !== null && displayedItems[activeIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
          onClick={closeVideo}
        >
          {/* Close Button - Top Right of Screen */}
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Previous Button - Left Center of Screen */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevVideo();
            }}
            aria-label="Previous Video"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Center Video Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <iframe
                key={displayedItems[activeIndex].id || activeIndex}
                src={`${displayedItems[activeIndex].videoUrl}?autoplay=1&rel=0`}
                title={displayedItems[activeIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Video Caption Below Media */}
            <p className="text-white text-sm sm:text-base font-medium mt-3 text-center drop-shadow-md">
              {displayedItems[activeIndex].title}
            </p>
          </div>

          {/* Next Button - Right Center of Screen */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextVideo();
            }}
            aria-label="Next Video"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
