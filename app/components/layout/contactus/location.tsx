"use client";

import { FaArrowRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelContactLocationData as ContactLocationData,
  LocationCardData,
  LocationOfficePinData,
} from "@/data/index";

interface ContactLocationProps {
  data?: ContactLocationData;
}

export default function ContactLocation({
  data: propData,
}: ContactLocationProps = {}) {
  const data: ContactLocationData = propData || travelData.contactLocation;

  return (
    <section className="relative w-full bg-white">
      <div className="relative z-10 w-full mt-8 sm:mt-10 md:mt-14 lg:mt-16 mb-8 sm:mb-12">
        <div className="relative w-full rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-xl border border-gray-200/80 min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px] flex items-center">
          {/* Map Iframe */}
          <iframe
            src={
              data.mapUrl ||
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin"
            }
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="TripNexa Office Map"
          />

          {/* Overlay Container (Pass-through for map interactivity) */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start justify-between pointer-events-none">
            {/* Floating Dark Location Card */}
            {data.locationCard && (
              <div className="pointer-events-auto bg-[#0b1727] rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 md:p-10 lg:p-11 max-w-[420px] w-full shadow-[0_20px_50px_rgba(11,23,39,0.55)] border border-white/10 backdrop-blur-sm animate-fadeIn">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-7 sm:w-8 h-[3px] bg-[#ff2e63] rounded-full" />
                  <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                    {data.locationCard.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
                  {data.locationCard.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
                  {data.locationCard.description}
                </p>

                {/* Get Directions Button */}
                <a
                  href={data.locationCard.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-[#ff2e63] text-white font-semibold text-sm sm:text-base hover:bg-[#ff2e63] transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[#ff2e63]/30 w-fit"
                >
                  <span>{data.locationCard.buttonText}</span>
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            )}
            </div>
        </div>
      </div>
    </section>
  );
}
