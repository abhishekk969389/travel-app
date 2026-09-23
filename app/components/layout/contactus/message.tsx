"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaLock,
  FaPlay,
  FaPlane,
  FaUsers,
  FaShieldAlt,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { BiGridAlt, BiMessageDetail } from "react-icons/bi";
import { site as travelData } from "@/data/index";
import type {
  TravelContactMessageData as ContactMessageData,
  ContactMessageFeatureItem,
} from "@/data/index";
import { FadeIn, ScaleIn } from "@/app/components/ui/animations";

interface ContactMessageProps {
  data?: ContactMessageData;
}

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case "FaPlane":
      return <FaPlane className="w-5 h-5 sm:w-6 sm:h-6" />;
    case "FaUsers":
      return <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />;
    case "FaShieldAlt":
      return <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />;
    default:
      return <FaPlane className="w-5 h-5 sm:w-6 sm:h-6" />;
  }
};

export default function ContactMessage({
  data: propData,
}: ContactMessageProps = {}) {
  const data: ContactMessageData = propData || travelData.contactMessage;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    destination: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVideoOpen) return;
      if (e.key === "Escape") setIsVideoOpen(false);
    };

    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        destination: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 800);
  };

  return (
    <section
        className="relative isolate w-full min-h-[720px] lg:min-h-[820px] mt-8 sm:mt-10 md:mt-12 lg:mt-14 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${data.backgroundImage || "/contact.jpg"})`,
        }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src={data.backgroundImage || "/contact.jpg"}
            alt="Tropical Travel Destination"
            fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <FadeIn direction="up" className="lg:col-span-7 xl:col-span-6">
            <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100/80">

              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
                  {data.header.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight mb-2.5">
                {data.header.headingPrefix}
                <span className="text-[#ff2e63]">
                  {data.header.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-7">
                {data.header.description}
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-between animate-fadeIn">
                  <span>{data.form.successMessage}</span>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-emerald-600 hover:text-emerald-800 ml-2 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                    <FaUser className="w-4 h-4 text-gray-500 shrink-0" />
                    <input
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none"
                    />
                  </div>

                  <div className="relative flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                    <FaEnvelope className="w-4 h-4 text-gray-500 shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder={data.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                    <FaPhoneAlt className="w-4 h-4 text-gray-500 shrink-0" />
                    <input
                      type="tel"
                      required
                      placeholder={data.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none"
                    />
                  </div>

                  <div className="relative flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                    <BiGridAlt className="w-4 h-4 text-gray-500 shrink-0" />
                    <select
                      required
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full bg-transparent pl-3 pr-6 text-sm text-gray-800 font-medium focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-500">
                        {data.form.inquiryPlaceholder}
                      </option>
                      {data.form.inquiryOptions.map((opt: string, idx: number) => (
                        <option key={idx} value={opt} className="text-gray-800">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="w-3 h-3 text-gray-500 absolute right-4 pointer-events-none" />
                  </div>
                </div>
                <div className="relative flex items-center border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-500 shrink-0" />
                  <input
                    type="text"
                    placeholder={data.form.destinationPlaceholder}
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none"
                  />
                </div>
                <div className="relative flex items-start border border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                  <BiMessageDetail className="w-4 h-4 text-gray-500 shrink-0 mt-1" />
                  <textarea
                    rows={4}
                    required
                    placeholder={data.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-500 font-medium focus:outline-none resize-none"
                  />
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff0d55] via-[#ff2e63] to-[#ff6644] text-white font-bold text-sm sm:text-base shadow-[0_8px_24px_rgba(255,46,99,0.35)] hover:shadow-[0_12px_28px_rgba(255,46,99,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FaPaperPlane className="w-3.5 h-3.5 transform -rotate-12" />
                    <span>
                      {isSubmitting ? "Sending..." : data.form.submitButtonText}
                    </span>
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-[13px] font-medium">
                    <FaLock className="w-4 h-4 text-[#334155] shrink-0" />
                    <span className="leading-snug max-w-[150px]">
                      {data.form.privacyText}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </FadeIn>
          <ScaleIn className="lg:col-span-5 xl:col-span-6 flex flex-col justify-between h-full min-h-[460px] lg:min-h-[580px] pt-4 lg:pt-0">
            <div className="flex justify-center lg:justify-end lg:pr-20 xl:pr-40">
              <div className="inline-flex flex-col items-center rotate-[-4deg]">
                <div className="font-hand italic text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl text-white font-normal drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] tracking-wide space-y-0 text-center select-none">
                  {data.storySection.taglines.map((word: string, i: number) => (
                    <div key={i} className="leading-tight">
                      {word}
                    </div>
                  ))}
                </div>
                <svg
                  className="w-24 sm:w-28 h-4 text-[#ff2e63] mt-0.5 drop-shadow-sm"
                  viewBox="0 0 140 18"
                  fill="none"
                >
                  <path
                    d="M4 14C42 4 98 4 136 14"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center my-8 lg:my-auto">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="relative group flex items-center justify-center cursor-pointer"
                aria-label="Watch Our Story"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300">

                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff2e63] ml-1 transition-transform group-hover:scale-110" />
                  </div>
                </div>
              </button>
              <div className="mt-4 text-center">
                <span className="text-white font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {data.storySection.watchStoryText}
                </span>
                <div className="w-20 h-[2px] bg-white/80 mx-auto mt-2 rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0 bg-[#0b1727]/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/15 px-4 py-4 sm:px-6 sm:py-5 shadow-2xl">
              <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
                {data.features.map((feature: ContactMessageFeatureItem) => (
                  <div
                    key={feature.id}
                    className="px-2 sm:px-3 flex flex-col items-center justify-center group"
                  >
                    <div className="text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <span className="text-white text-xs sm:text-sm font-semibold leading-tight">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
      {mounted &&
        isVideoOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fadeIn"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-8 z-[1000000] w-12 h-12 rounded-full bg-white/20 hover:bg-[#ff2e63] text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl"
              aria-label="Close video"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] bg-black border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full border-0"
                src={data.storySection.videoUrl}
                title={
                  data.storySection.videoTitle ||
                  data.storySection.watchStoryText
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
