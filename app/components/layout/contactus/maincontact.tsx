"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelContactUsData as ContactUsData,
  ContactCardItem,
} from "@/data/index";

interface MainContactProps {
  data?: ContactUsData;
}

const getContactIcon = (iconName: string) => {
  switch (iconName) {
    case "FaMapMarkerAlt":
      return <FaMapMarkerAlt className="w-8 h-8" />;
    case "FaPhoneAlt":
      return <FaPhoneAlt className="w-7 h-7" />;
    case "FaEnvelope":
      return <FaEnvelope className="w-7 h-7" />;
    case "FaHeadset":
      return <FaHeadset className="w-8 h-8" />;
    default:
      return <FaMapMarkerAlt className="w-8 h-8" />;
  }
};

export default function MainContact({
  data: propData,
}: MainContactProps = {}) {
  const data: ContactUsData = propData || travelData.contactUs;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center max-w-2xl mx-auto mb-6">
          {/* Badge with Horizontal Red Lines */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
              {data.header.badge}
            </span>
            <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-3 sm:mb-4">
            {data.header.headingPrefix}
            <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {data.header.description}
          </p>
        </div>

        {/* 4 Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card: ContactCardItem) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-gray-200 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_26px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rounded Icon Badge */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${card.iconBg} ${card.iconColor}`}
                >
                  {getContactIcon(card.icon)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#101828] mb-3">
                  {card.title}
                </h3>

                {/* Info Lines */}
                <div className="space-y-1 text-gray-600 font-semibold text-sm sm:text-[16px] leading-relaxed">
                  {card.lines.map((line: string, index: number) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Bottom Section (Note or Action Link) */}
              {(card.note || card.action) && (
                <div className="mt-5 pt-1">
                  {card.note && (
                    <p className="text-gray-500 text-sm font-semibold sm:text-[16px]">
                      {card.note}
                    </p>
                  )}
                  {card.action && (
                    <Link
                      href={card.action.href}
                      className="inline-flex items-center gap-1.5 text-[#ff2e63] font-semibold text-sm sm:text-[15px] hover:gap-2.5 transition-all duration-200"
                    >
                      <span>{card.action.text}</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
