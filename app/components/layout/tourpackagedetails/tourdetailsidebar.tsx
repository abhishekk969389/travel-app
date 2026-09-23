"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaHeart,
  FaRegHeart,
  FaArrowRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import type { TourPackageCardItem, TourPackageDetailsLabels } from "@/data/index";
import { site } from "@/data/index";
import { FadeIn, StaggerContainer, MotionCard, ScaleIn } from "@/app/components/ui/animations";

interface TourDetailSidebarProps {
  pkg?: TourPackageCardItem;
  labels?: TourPackageDetailsLabels;
}

export default function TourDetailSidebar({ pkg, labels: propLabels }: TourDetailSidebarProps) {
  if (!pkg) return null;

  const labels = propLabels || (site.tourPackagesPage as any).detailLabels;
  const details = pkg.details;
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const galleryImages = details?.sidebarGallery || details?.galleryImages || (pkg.image ? [pkg.image] : []);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalPrev = () => {
    setModalImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleModalNext = () => {
    setModalImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const relatedPackages = details?.relatedPackages || [];

  return (
    <div className="space-y-8">
      {/* 1. Discover Banner Graphic Card */}
      <ScaleIn className="relative rounded-[24px] overflow-hidden h-[240px] sm:h-[280px] flex flex-col justify-end p-6 shadow-md border border-slate-100 bg-slate-900 group">
        <Image
          src={details?.sidebarBanner?.image || "/whychoose_fjord.jpg"}
          alt={details?.sidebarBanner?.title || "Discover Bali"}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10">
          <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight italic font-serif">
            {details?.sidebarBanner?.title || `Discover ${pkg.title.split(",")[0]}`}
          </h3>
          <div className="w-10 h-[3px] bg-[#ff2e63] rounded-full mt-2" />
        </div>
      </ScaleIn>

      {/* 2. Photo Gallery Widget */}
      <FadeIn direction="up" className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-extrabold text-[#12161f] tracking-tight">
              {labels?.galleryTitle || "Gallery"}
            </h4>
            <div className="w-8 h-[2.5px] bg-[#ff2e63] rounded-full mt-1" />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openModal(0)}
              className="text-xs font-bold text-slate-500 hover:text-[#ff2e63] transition-colors mr-1 cursor-pointer"
            >
              {labels?.viewAll || "View All"}
            </button>
            <button
              type="button"
              onClick={() => openModal(modalImageIndex === 0 ? galleryImages.length - 1 : modalImageIndex - 1)}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#ff2e63] hover:text-white flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => openModal(modalImageIndex === galleryImages.length - 1 ? 0 : modalImageIndex + 1)}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#ff2e63] hover:text-white flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 4 Photo Grid (Clicking opens Lightbox Gallery Modal) */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.slice(0, 4).map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="relative h-28 rounded-xl overflow-hidden bg-slate-100 group border border-slate-100 shadow-xs cursor-pointer"
            >
              <Image
                src={imgSrc}
                alt={`Sidebar Gallery ${idx + 1}`}
                fill
                sizes="160px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <FaExpand className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 3. Related Tour Packages Widget */}
      <FadeIn direction="up" className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-extrabold text-[#12161f] tracking-tight">
              {labels?.relatedPackagesTitle || "Related Tour Packages"}
            </h4>
            <div className="w-8 h-[2.5px] bg-[#ff2e63] rounded-full mt-1" />
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/tourpackage"
              className="text-xs font-bold text-slate-500 hover:text-[#ff2e63] transition-colors mr-1"
            >
              {labels?.viewAll || "View All"}
            </Link>
            <button
              type="button"
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <button
              type="button"
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 2 Related Package Cards Side-by-Side */}
        <StaggerContainer className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {relatedPackages.map((relPkg) => {
            const isWishlisted = wishlist.includes(relPkg.id);

            return (
              <MotionCard
                key={relPkg.id}
                className="bg-white rounded-2xl overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-slate-100">
                  <Image
                    src={relPkg.image}
                    alt={relPkg.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Duration Pill */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded-full bg-[#0b1724]/85 backdrop-blur-md text-white font-bold text-[9px] sm:text-[10px]">
                      {relPkg.duration}
                    </span>
                  </div>
                  {/* Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(relPkg.id)}
                    className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    {isWishlisted ? (
                      <FaHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff2e63]" />
                    ) : (
                      <FaRegHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    )}
                  </button>
                </div>

                {/* Content */}
                <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1">
                  <div>
                    <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#ff2e63] transition-colors leading-snug truncate">
                      {relPkg.title}
                    </h5>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mb-1.5 truncate">
                      {relPkg.subtitle}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-600 font-bold mb-2">
                      <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff2e63]" />
                      <span>{relPkg.rating}</span>
                      <span className="text-slate-400 font-normal">
                        ({relPkg.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Price & Arrow Link Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="flex items-baseline gap-0.5 min-w-0">
                      <span className="text-xs sm:text-sm font-black text-[#ff2e63] truncate">
                        {relPkg.priceFormatted}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold truncate">
                        {relPkg.priceUnit}
                      </span>
                    </div>

                    <Link
                      href={relPkg.href || "/tourpackagedetails"}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ff2e63] hover:bg-[#e02454] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105 shrink-0 ml-1"
                    >
                      <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </Link>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </StaggerContainer>
      </FadeIn>

      {/* Lightbox Gallery Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#030c14]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between text-white max-w-7xl w-full mx-auto pb-4 border-b border-white/10">
            <div>
              <h3 className="text-base sm:text-xl font-bold tracking-tight">
                {pkg.title} — Photo Gallery
              </h3>
              <p className="text-xs text-slate-400">
                Image {modalImageIndex + 1} of {galleryImages.length}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
              aria-label="Close Lightbox"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Main Image Viewer */}
          <div className="relative max-w-5xl w-full h-[55vh] sm:h-[65vh] mx-auto my-auto flex items-center justify-center">
            <Image
              src={galleryImages[modalImageIndex] || pkg.image}
              alt={`${pkg.title} Gallery Image ${modalImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />

            {/* Modal Left/Right Controls */}
            <button
              type="button"
              onClick={handleModalPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-[#ff2e63] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg z-10"
              aria-label="Previous Modal Image"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleModalNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-[#ff2e63] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg z-10"
              aria-label="Next Modal Image"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Bottom Thumbnails Strip */}
          <div className="max-w-7xl w-full mx-auto pt-4 border-t border-white/10">
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20">
              {galleryImages.map((imgSrc, idx) => {
                const isActive = modalImageIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setModalImageIndex(idx)}
                    className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#ff2e63] scale-105 shadow-md"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
