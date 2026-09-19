"use client";

import { useState } from "react";
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

            {/* 4 Feature Items (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {data.features.map((feat: EnquiryFeatureItem) => (
                <div key={feat.id} className="flex items-start gap-3.5">
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
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-100 bg-white">
              {/* Dark Card Header Banner */}
              <div className="relative bg-[#0b1727] px-6 sm:px-8 py-6 sm:py-7 text-white overflow-hidden">
                {/* Background Map Watermark Graphic */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {form.headerTitle}{" "}
                      <span className="text-[#ff2e63]">
                        {form.headerHighlight}
                      </span>
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1.5">
                      {form.headerSubtitle}
                    </p>
                  </div>

                  {/* Red Origami Plane Icon */}
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-[#ff2e63] shrink-0 border border-white/10">
                    <FaPaperPlane className="w-5 h-5 transform -rotate-12" />
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                    className="text-xs text-slate-600 cursor-pointer leading-relaxed"
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
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                  <FaLock className="w-3 h-3 text-gray-400" />
                  <span>{form.securityNote}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
