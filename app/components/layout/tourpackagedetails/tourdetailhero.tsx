"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPlane,
  FaHotel,
  FaBinoculars,
  FaUtensils,
  FaCar,
  FaStar,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
  FaCommentDots,
  FaArrowRight,
  FaTag,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import type { TourPackageCardItem, TourPackageDetailsLabels } from "@/data/index";
import { site } from "@/data/index";
import { FadeIn, ScaleIn } from "@/app/components/ui/animations";

interface TourDetailHeroProps {
  pkg?: TourPackageCardItem;
  labels?: TourPackageDetailsLabels;
}

const renderInclusionIcon = (iconName: string) => {
  switch (iconName) {
    case "FaPlane":
      return <FaPlane className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
    case "FaHotel":
      return <FaHotel className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
    case "FaBinoculars":
      return <FaBinoculars className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
    case "FaUtensils":
      return <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
    case "FaCar":
      return <FaCar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
    default:
      return <FaPlane className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2e63]" />;
  }
};

export default function TourDetailHero({ pkg, labels: propLabels }: TourDetailHeroProps) {
  if (!pkg) return null;

  const labels = propLabels || (site.tourPackagesPage as any).detailLabels;

  const details = pkg.details;
  const defaultImages = [
    pkg.image || "/whychoose_packages.jpg",
    "/whychoose_fjord.jpg",
    "/about2.jpg",
    "/blog1.jpg",
    "/blog2.jpg",
    "/blog3.jpg",
    "/about1.jpg",
    "/whychoose_packages.jpg",
    "/whychoose_fjord.jpg",
    "/about2.jpg",
    "/blog1.jpg",
    "/blog2.jpg",
  ];

  const galleryImages = details?.galleryImages || defaultImages;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lightbox Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalPrev = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleModalNext = () => {
    setModalImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${labels?.enquiryAlertText || "Thank you for inquiring about"} ${pkg.title}!`);
  };

  const countryBadge =
    details?.countryBadge ||
    (pkg.title.includes(",")
      ? pkg.title.split(",")[1].trim().toUpperCase()
      : pkg.title.toUpperCase());

  const location = details?.location || pkg.title;

  const defaultStats = [
    { label: "Destination", value: location, icon: "FaMapMarkerAlt" },
    { label: "Duration", value: details?.durationBadge || pkg.duration || "5 Days 4 Nights", icon: "FaCalendarAlt" },
    { label: "Tour Type", value: "Leisure / Family", icon: "FaUsers" },
    { label: "Best Time to Visit", value: "Apr - Oct", icon: "FaTag" },
  ];

  const quickStats = details?.quickStats || defaultStats;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <ScaleIn className="lg:col-span-4 flex flex-col justify-between">
          <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[460px] rounded-[24px] overflow-hidden bg-slate-900 border border-slate-100 shadow-md group">
            <Image
              src={galleryImages[activeImageIndex] || pkg.image}
              alt={pkg.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
              onClick={() => openModal(activeImageIndex)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-[#0b1724]/85 backdrop-blur-md text-white font-bold text-xs shadow-sm border border-white/15">
                {details?.durationBadge || pkg.duration || "5 Days | 4 Nights"}
              </span>
            </div>
            <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => openModal(activeImageIndex)}
                className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/70 text-slate-800 flex items-center justify-center transition-all cursor-pointer border border-white/30"
                aria-label="Expand Gallery"
              >
                <FaExpand className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={handlePrevImage}
                className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/70 text-slate-800 flex items-center justify-center transition-all cursor-pointer border border-white/30"
                aria-label="Previous Image"
              >
                <FaChevronLeft className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/70 text-slate-800 flex items-center justify-center transition-all cursor-pointer border border-white/30"
                aria-label="Next Image"
              >
                <FaChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="absolute bottom-3 left-3 right-3 z-10 grid grid-cols-6 gap-1.5 sm:gap-2">
              {galleryImages.slice(0, 6).map((imgSrc, idx) => {
                const isLast = idx === 5;
                const isActive = activeImageIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (isLast) {
                        openModal(idx);
                      } else {
                        setActiveImageIndex(idx);
                      }
                    }}
                    className={`relative h-12 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#ff2e63] shadow-md scale-105"
                        : "border-white/80 hover:border-white opacity-90 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    {isLast && (
                      <div className="absolute inset-0 bg-[#071524]/90 backdrop-blur-xs flex flex-col items-center justify-center text-white border-2 border-white/90 rounded-lg shadow-inner">
                        <span className="font-black text-xs sm:text-sm tracking-tight drop-shadow-xs">
                          +12
                        </span>
                        <span className="font-bold text-[10px] text-white/90 tracking-wide">
                          {labels?.moreText || "More"}
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </ScaleIn>
        <FadeIn direction="up" className="lg:col-span-4 flex flex-col justify-between h-auto lg:h-[460px]">
          <div className="overflow-y-auto pr-1 space-y-3.5 scrollbar-thin">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-[2.5px] bg-[#ff2e63] rounded-full" />
              <span className="text-sm sm:text-sm md:text-base font-extrabold text-[#ff2e63] uppercase tracking-wider">
                {countryBadge}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] font-extrabold text-[#091724] tracking-tight leading-tight">
              {pkg.title}
            </h1>
            <p className="text-sm sm:text-sm md:text-base font-semibold text-slate-500 mb-2">
              {pkg.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 mb-2.5">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-[#ff2e63] w-5 h-5" />
                <span className=" text-slate-800 text-sm sm:text-sm ">{pkg.rating}</span>
                <span className=" text-slate-800 text-sm sm:text-sm ">({pkg.reviewsCount} Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <FaMapMarkerAlt className="text-[#ff2e63] w-5 h-5" />
                <span className=" text-slate-800 text-sm sm:text-sm">{location}</span>
              </div>
            </div>
            <p className="text-sm sm:text-sm md:text-md text-slate-600 leading-relaxed mb-3">
              {details?.description ||
                `Experience the magic of ${pkg.title}, ${pkg.subtitle.toLowerCase()}. This ${pkg.duration} tour package is designed to give you the perfect blend of relaxation, adventure, and cultural exploration.`}
            </p>
            <div className="grid grid-cols-5 gap-2 pt-1 mb-2">
              {(details?.quickInclusions || [
                { label: "Flights Included", icon: "FaPlane" },
                { label: "Hotel Stay", icon: "FaHotel" },
                { label: "Sightseeing Tours", icon: "FaBinoculars" },
                { label: "Daily Breakfast", icon: "FaUtensils" },
                { label: "Airport Transfers", icon: "FaCar" },
              ]).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-1.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ffe8ed] group-hover:bg-[#ffffff] transition-colors duration-300 flex items-center justify-center shadow-xs">
                    {renderInclusionIcon(item.icon)}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 group-hover:text-[#ff2e63] transition-colors leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 mt-4 lg:mt-0">
            <div>
              <span className="block text-sm font-semibold text-slate-400">
                {labels?.startingFrom || "Starting From"}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-[#ff2e63] leading-none">
                  {pkg.priceFormatted}
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  {pkg.priceUnit || "/Person"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const formEl = document.getElementById("enquiry-form");
                formEl?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto py-2.5 sm:py-3 px-6 rounded-full bg-gradient-to-r from-[#ff1d58] via-[#ff3b5c] to-[#ff7244] hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-[#ff2e63]/25 transition-all cursor-pointer"
            >
              <span>{labels?.bookNow || "Book Now"}</span>
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        </FadeIn>
        <ScaleIn className="lg:col-span-4 h-auto lg:h-[460px]" id="enquiry-form">
          <div className="bg-white rounded-[24px] p-4.5 sm:p-5.5 border border-slate-100 shadow-md flex flex-col justify-between h-full">
            <div>
              <div className="mb-2.5">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-6 h-[2.5px] bg-[#ff2e63] rounded-full" />
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#091724] tracking-tight">
                    {labels?.enquireNowTitle || "Enquire Now"}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  {labels?.enquireNowSubtitle || "Get a free quote for this tour package"}
                </p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-2 sm:space-y-2.5">
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="text"
                    required
                    placeholder={labels?.namePlaceholder || "Full Name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="email"
                    required
                    placeholder={labels?.emailPlaceholder || "Email Address"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder={labels?.phonePlaceholder || "Phone Number"}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaUsers className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="number"
                    min="1"
                    placeholder={labels?.guestsPlaceholder || "Number of Travelers"}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaCommentDots className="absolute left-3.5 top-2.5 text-slate-400 w-3.5 h-3.5" />
                  <textarea
                    rows={2}
                    placeholder={labels?.messagePlaceholder || "Your Message (Optional)"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 px-6 rounded-full bg-gradient-to-r from-[#ff1d58] via-[#ff3b5c] to-[#ff7244] hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#ff2e63]/25 transition-all cursor-pointer mt-1"
                >
                  <span>{labels?.sendEnquiry || "Send Enquiry"}</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </ScaleIn>
      </div>
      <FadeIn direction="up" className="bg-white rounded-[24px] px-6 sm:px-8 md:px-10 py-6 sm:py-7 border border-slate-200/90 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
          {quickStats.map((stat, idx) => {
            const isLast = idx === quickStats.length - 1;

            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx === 0
                    ? "lg:pr-8"
                    : isLast
                    ? "lg:pl-8"
                    : "lg:px-8"
                } ${!isLast ? "lg:border-r lg:border-slate-200" : ""}`}
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ffe8ed] flex items-center justify-center shrink-0 shadow-xs">
                  {idx === 0 && <FaMapMarkerAlt className="w-6 h-6 text-[#ff2e63]" />}
                  {idx === 1 && <FaCalendarAlt className="w-6 h-6 text-[#ff2e63]" />}
                  {idx === 2 && <FaUsers className="w-6 h-6 text-[#ff2e63]" />}
                  {idx === 3 && <FaTag className="w-6 h-6 text-[#ff2e63]" />}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#091724] leading-snug">
                    {stat.label}
                  </h4>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    {stat.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#030c14]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">

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
          <div className="relative max-w-5xl w-full h-[55vh] sm:h-[65vh] mx-auto my-auto flex items-center justify-center">
            <Image
              src={galleryImages[modalImageIndex] || pkg.image}
              alt={`${pkg.title} Gallery Image ${modalImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
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
