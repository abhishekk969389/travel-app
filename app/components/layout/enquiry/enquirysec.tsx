"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaHeadset,
  FaCog,
  FaTag,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaSuitcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaCommentAlt,
  FaLock,
  FaPaperPlane,
  FaArrowRight,
  FaChevronDown,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelEnquiryData, EnquiryFeatureItem } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface EnquirySecProps {
  data?: TravelEnquiryData;
}

const renderIcon = (iconName: string, className = "w-5 h-5") => {
  switch (iconName) {
    case "FaHeadset":
      return <FaHeadset className={className} />;
    case "FaCog":
      return <FaCog className={className} />;
    case "FaTag":
      return <FaTag className={className} />;
    case "FaClock":
      return <FaClock className={className} />;
    case "FaUser":
      return <FaUser className={className} />;
    case "FaEnvelope":
      return <FaEnvelope className={className} />;
    case "FaPhoneAlt":
      return <FaPhoneAlt className={className} />;
    case "FaSuitcase":
      return <FaSuitcase className={className} />;
    case "FaMapMarkerAlt":
      return <FaMapMarkerAlt className={className} />;
    case "FaCalendarAlt":
      return <FaCalendarAlt className={className} />;
    case "FaUsers":
      return <FaUsers className={className} />;
    case "FaDollarSign":
      return <FaDollarSign className={className} />;
    case "FaCommentAlt":
      return <FaCommentAlt className={className} />;
    case "FaLock":
      return <FaLock className={className} />;
    case "FaPaperPlane":
      return <FaPaperPlane className={className} />;
    default:
      return <FaPaperPlane className={className} />;
  }
};

export default function EnquirySec({ data: propData }: EnquirySecProps = {}) {
  const data: TravelEnquiryData = propData || travelData.enquiry;
  const form = data.form;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelType: "",
    destination: "",
    travelDate: "",
    travelers: "",
    budget: "",
    message: "",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelType: "",
        destination: "",
        travelDate: "",
        travelers: "",
        budget: "",
        message: "",
        agreed: false,
      });

      setTimeout(() => setIsSuccess(false), 6000);
    }, 800);
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14  bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Feature Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2">
            <FadeIn direction="left">
              <div>
                {/* Badge */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
                    {data.header.badge}
                  </span>
                  <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight mb-2">
                  {data.header.headingLine1}
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-extrabold text-[#ff2e63] tracking-tight leading-tight mb-4">
                  {data.header.headingLine2Prefix}
                  <span>{data.header.headingLine2Highlight}</span>
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg">
                  {data.header.description}
                </p>
              </div>
            </FadeIn>

            {/* 4 Feature Items (2x2 Grid) */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {data.features.map((feat: EnquiryFeatureItem) => (
                <StaggerItem key={feat.id}>
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-full bg-[#ffe8ed] text-[#ff2e63] flex items-center justify-center shrink-0 shadow-sm">
                      {renderIcon(feat.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#101828] mb-0.5">
                        {feat.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <FadeIn direction="right" className="lg:col-span-7">
            <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-100 bg-white">
              {/* Dark Card Header Banner */}
              <div className="relative bg-[#081426] px-6 sm:px-8 md:px-9 py-6 sm:py-7 md:py-8 text-white overflow-hidden rounded-t-[24px] sm:rounded-t-[28px]">
                {/* World Map Background Graphic Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none select-none overflow-hidden"
                >
                  <div className="absolute -right-4 -top-8 w-[100%] sm:w-[80%] md:w-[65%] h-[150%] opacity-20 sm:opacity-25 mix-blend-screen">
                    <Image
                      src="/world.jpg"
                      alt="World Map Background"
                      fill
                      unoptimized
                      className="object-contain object-right filter invert brightness-150 contrast-125"
                    />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="max-w-[70%] sm:max-w-[75%]">
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-none">
                      {form.headerTitle}{" "}
                      <span className="bg-gradient-to-r from-[#FF2B55] via-[#FF3B4E] to-[#FF5E3A] bg-clip-text text-transparent">
                        {form.headerHighlight}
                      </span>
                    </h2>
                    <p className="text-white/95 text-xs sm:text-sm md:text-[15px] font-normal mt-2 sm:mt-2.5 leading-snug">
                      {form.headerSubtitle}
                    </p>
                  </div>

                  {/* Red Origami Paper Plane with Dotted Flight Trail */}
                  <div className="relative shrink-0 flex items-center justify-end w-20 sm:w-28 md:w-32 h-16 sm:h-20 select-none pointer-events-none">
                    <svg
                      viewBox="0 0 140 90"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* Flight Trail Gradient */}
                        <linearGradient id="trailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF5A75" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#FF2E55" stopOpacity="0.95" />
                        </linearGradient>
                        {/* Plane Top Wing Gradient */}
                        <linearGradient id="planeTopFace" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF6B4A" />
                          <stop offset="50%" stopColor="#FF2B57" />
                          <stop offset="100%" stopColor="#E6194A" />
                        </linearGradient>
                        {/* Plane Underwing / Shadow Gradient */}
                        <linearGradient id="planeBottomFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D81B43" />
                          <stop offset="100%" stopColor="#8E0A24" />
                        </linearGradient>
                        {/* Plane Spine Highlight */}
                        <linearGradient id="planeSpineHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#FF2E55" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Dashed Flight Trail */}
                      <path
                        d="M 12 70 C 35 73, 58 64, 76 44"
                        stroke="url(#trailGrad)"
                        strokeWidth="2.2"
                        strokeDasharray="5 4"
                        strokeLinecap="round"
                      />

                      {/* Origami 3D Plane */}
                      <g transform="translate(62, 10)">
                        {/* Underwing / Bottom Shadow Facet */}
                        <polygon points="58,5 22,46 16,34" fill="url(#planeBottomFacet)" />

                        {/* Left Wing Facet */}
                        <polygon points="58,5 4,28 22,46" fill="#D9163D" />

                        {/* Main Upper Right Wing */}
                        <polygon points="58,5 22,46 36,20" fill="url(#planeTopFace)" />

                        {/* Top Main Wing Upper Surface */}
                        <polygon points="58,5 4,28 36,20" fill="url(#planeTopFace)" />

                        {/* Center Crease / Spine Highlight Stripe */}
                        <polygon points="58,5 18,25 36,20" fill="url(#planeSpineHighlight)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-5">
                {isSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-between animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <FaCheck className="w-4 h-4 text-emerald-600" />
                      <span>{form.successMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-emerald-600 hover:text-emerald-800 ml-2 cursor-pointer"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.nameLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.nameIcon, "w-4 h-4")}
                      </span>
                      <input
                        type="text"
                        required
                        placeholder={form.namePlaceholder}
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.emailLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.emailIcon, "w-4 h-4")}
                      </span>
                      <input
                        type="email"
                        required
                        placeholder={form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone Number & Travel Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.phoneLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.phoneIcon, "w-4 h-4")}
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder={form.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.travelTypeLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.travelTypeIcon, "w-4 h-4")}
                      </span>
                      <select
                        required
                        value={formData.travelType}
                        onChange={(e) =>
                          setFormData({ ...formData, travelType: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none appearance-none cursor-pointer pr-6"
                      >
                        <option value="" disabled>
                          {form.travelTypePlaceholder}
                        </option>
                        {form.travelTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="w-3 h-3 text-gray-400 absolute right-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Preferred Destination & Travel Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.destinationLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.destinationIcon, "w-4 h-4")}
                      </span>
                      <input
                        type="text"
                        required
                        placeholder={form.destinationPlaceholder}
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.travelDateLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.travelDateIcon, "w-4 h-4")}
                      </span>
                      <input
                        type="date"
                        required
                        value={formData.travelDate}
                        onChange={(e) =>
                          setFormData({ ...formData, travelDate: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Number of Travelers & Budget (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.travelersLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.travelersIcon, "w-4 h-4")}
                      </span>
                      <select
                        required
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none appearance-none cursor-pointer pr-6"
                      >
                        <option value="" disabled>
                          {form.travelersPlaceholder}
                        </option>
                        {form.travelersOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="w-3 h-3 text-gray-400 absolute right-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {form.budgetLabel}
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                      <span className="text-gray-400 shrink-0">
                        {renderIcon(form.budgetIcon, "w-4 h-4")}
                      </span>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none appearance-none cursor-pointer pr-6"
                      >
                        <option value="">{form.budgetPlaceholder}</option>
                        {form.budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="w-3 h-3 text-gray-400 absolute right-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {form.messageLabel}
                  </label>
                  <div className="relative flex items-start border border-gray-200 rounded-xl px-3.5 py-3 bg-white focus-within:border-[#ff2e63] focus-within:ring-2 focus-within:ring-[#ff2e63]/10 transition-all">
                    <span className="text-gray-400 shrink-0 mt-0.5">
                      {renderIcon(form.messageIcon, "w-4 h-4")}
                    </span>
                    <textarea
                      rows={3}
                      placeholder={form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent pl-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="enquiry-consent"
                    required
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 rounded text-[#ff2e63] focus:ring-[#ff2e63] accent-[#ff2e63] cursor-pointer"
                  />
                  <label
                    htmlFor="enquiry-consent"
                    className="text-[13px] sm:text-sm text-slate-600 cursor-pointer leading-relaxed"
                  >
                    {form.consentText}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff2e63] via-[#ff3b56] to-[#ff5722] hover:from-[#e02454] hover:to-[#f44336] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#ff2e63]/25 hover:shadow-xl hover:shadow-[#ff2e63]/35 transition-all duration-300 cursor-pointer disabled:opacity-70 group"
                >
                  <span>
                    {isSubmitting ? "Submitting..." : form.submitButtonText}
                  </span>
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base text-gray-500 pt-1">
                  <FaLock className="w-3 h-3 text-gray-400" />
                  <span>{form.securityNote}</span>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
