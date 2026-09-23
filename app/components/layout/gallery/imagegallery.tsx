"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelGalleryData as GalleryData,
  GalleryItem,
} from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface ImageGalleryProps {
  data?: GalleryData;
}

export default function ImageGallery({ data: propData }: ImageGalleryProps = {}) {
  const data: GalleryData = propData || travelData.gallery;
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  // Items to display based on activeTab and isExpanded
  const displayedItems: GalleryItem[] =
    activeTab === "all"
      ? isExpanded
        ? data.items
        : data.items.slice(0, 11)
      : data.items.filter((item) => item.category === activeTab);

  const handleToggleViewAll = () => {
    if (activeTab !== "all") {
      setActiveTab("all");
      setIsExpanded(true);
    } else {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleOpenAll = () => {
    setActiveTab("all");
    setIsExpanded(true);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPreviewIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewIndex === null) return;
      if (e.key === "Escape") setPreviewIndex(null);
      if (e.key === "ArrowLeft") {
        setPreviewIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : displayedItems.length - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setPreviewIndex((prev) =>
          prev !== null ? (prev < displayedItems.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, displayedItems.length]);

  const openLightbox = (index: number) => {
    setPreviewIndex(index);
  };

  const closeLightbox = () => {
    setPreviewIndex(null);
  };

  const prevImage = () => {
    setPreviewIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : displayedItems.length - 1) : null
    );
  };

  const nextImage = () => {
    setPreviewIndex((prev) =>
      prev !== null ? (prev < displayedItems.length - 1 ? prev + 1 : 0) : null
    );
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                {data.header.badge}
              </span>
              <span className="h-[2px] w-6 rounded-full bg-[#ff2e63]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
              {data.header.headingPrefix}
              <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {data.header.description}
            </p>
          </div>
        </FadeIn>
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-nowrap overflow-x-auto no-scrollbar py-2 mb-8 sm:mb-10">
          {data.tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#ff2e63] text-white shadow-sm scale-105"
                    : "bg-[#edf7fc] text-[#12161f] hover:bg-slate-100 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-10 sm:mt-12 mb-5 sm:mb-6">
          <div className="flex items-center">
            <span className="w-7 sm:w-8 h-1 bg-[#ff2e63] rounded-full mr-2.5 sm:mr-3" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#12161f]">
              {data.subHeader.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleToggleViewAll}
            className="text-[#ff2e63] hover:text-[#e02656] font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors group cursor-pointer bg-transparent border-0 outline-none"
          >
            <span>
              {activeTab === "all" && isExpanded
                ? data.subHeader.viewLessText || "Show Less"
                : data.subHeader.viewAllText}
            </span>
            <FaArrowRight
              className={`w-3 h-3 transition-transform duration-200 ${
                activeTab === "all" && isExpanded
                  ? "-rotate-90"
                  : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>
        <StaggerContainer key={activeTab + isExpanded} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {displayedItems.map((item: GalleryItem, idx: number) => (
            <StaggerItem key={item.id || idx}>
              <div
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-100 h-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-2.5">
                  <p className="text-white text-[11px] sm:text-xs font-semibold line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}

          {activeTab === "all" && !isExpanded && (
            <StaggerItem>
              <div
                onClick={handleOpenAll}
                className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-900 h-full"
                role="button"
                tabIndex={0}
                aria-label={data.subHeader.viewAllText}
              >
                <Image
                  src={data.morePhotosCard?.image || "/footer-bg.jpg"}
                  alt={data.morePhotosCard?.label || "More Photos"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                />

                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-2 group-hover:bg-black/45 transition-colors">
                  <FaSearch className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-1.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-extrabold text-lg sm:text-xl md:text-2xl leading-tight">
                    {data.morePhotosCard?.count || "+10"}
                  </span>
                  <span className="text-white/90 text-[11px] sm:text-xs font-medium mt-0.5">
                    {data.morePhotosCard?.label || "More Photos"}
                  </span>
                </div>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>

      {previewIndex !== null && displayedItems[previewIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={displayedItems[previewIndex].image}
                alt={displayedItems[previewIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base font-medium mt-3 text-center drop-shadow-md">
              {displayedItems[previewIndex].title}
            </p>
          </div>
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
