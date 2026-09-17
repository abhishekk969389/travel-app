"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkedAlt, FaRoute } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Images and Decorative Elements */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start">
          
          {/* Vertical Left Badge Ribbon */}
          <div className="absolute -left-3 sm:-left-6 z-30 bg-[#12161f] text-white py-8 px-2.5 rounded-l-md shadow-2xl hidden sm:flex flex-col items-center justify-center text-xs font-semibold tracking-wider uppercase [writing-mode:vertical-lr] rotate-180">
            <span className="text-[#ff2e63] font-bold mb-2 tracking-widest text-[13px]">25,000+</span> Happy Travelers
            <div className="absolute bottom-2 text-[#ff2e63] text-xs">🐾</div>
          </div>
          {/* Red fold accent for the vertical badge */}
          <div className="absolute -left-3 sm:-left-6 top-0 w-3 h-4 bg-[#c01243] hidden sm:block rounded-tl-md" />

          <div className="relative w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* First Image Frame (Sunset Landscape) */}
            <div className="relative w-full sm:w-[250px] h-[380px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src="/bannerimg.png"
                alt="Traveler looking at sunset landscape"
                fill
                className="object-cover"
              />
              {/* Top-Right Red Accent Box */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#ff2e63] rounded-bl-xl" />
            </div>

            {/* Second Image Frame (Tropical Islands - Offset Downwards) */}
            <div className="relative w-full sm:w-[260px] h-[410px] sm:mt-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white">
              <Image
                src="/bannerimg.png"
                alt="Traveler looking at tropical islands"
                fill
                className="object-cover"
              />
              {/* Bottom-Right Red Frame Accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff2e63]" />
            </div>

            {/* Floating Experience Card Overlay */}
            <div className="absolute bottom-2 left-4 sm:-left-8 z-30 bg-white px-6 py-4 rounded-xl shadow-2xl border border-gray-100 flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ff2e63] leading-none mb-1">25</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap">Years of Experience</span>
              <div className="w-8 h-1 bg-[#ff2e63] rounded-full mt-2" />
            </div>

          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Subtitle */}
          <span className="font-[family-name:var(--font-script)] italic text-2xl sm:text-3xl text-[#ff5349] font-normal mb-1">
            Explore the world
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#12161f] tracking-tight leading-[1.12] mb-4">
            Great Opportunity For <br />
            <span className="text-[#ff2e63]">Adventure & Travels</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[520px]">
            Discover breathtaking destinations, unforgettable experiences, and journeys that stay with you forever. We are here to make your travel dreams a reality with personalized trips and expert guidance.
          </p>

          {/* Features Grid (Two Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* Feature 1: Trusted Travel Guide */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffe6ed] flex items-center justify-center shrink-0 text-[#ff2e63]">
                <RouteIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#12161f] text-base mb-1">Trusted Travel Guide</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Get expert guidance and local insights for a safe and memorable journey.
                </p>
              </div>
            </div>

            {/* Feature 2: Personalized Trips */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffe6ed] flex items-center justify-center shrink-0 text-[#ff2e63]">
                <MapIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#12161f] text-base mb-1">Personalized Trips</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Customized travel experiences designed around your interests and budget.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Actions & Founder Info Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">
            
            {/* CTA Button */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ff2e63] to-[#ff6b00] hover:brightness-105 text-white font-medium text-sm px-7 py-3.5 rounded-xl shadow-md transition-all duration-300"
            >
              <span>More About Us</span>
              <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Founder Signature Info */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff2e63] shadow-sm">
                <Image
                  src="/bannerimg.png"
                  alt="Mehedii H"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-script)] text-xl text-[#12161f] font-bold leading-none mb-1">Mehedii .H</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">CEO & Founder</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Custom inline SVG icons matching the style in the screenshot
function RouteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" {...props}>
      <path d="M528 32H416c-8.8 0-16 7.2-16 16v48H176V48c0-8.8-7.2-16-16-16H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h112c8.8 0 16-7.2 16-16v-48h224v48c0 8.8 7.2 16 16 16h112c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-416 320H64V128h48v224zm352 0H464V128h48v224z"/>
    </svg>
  );
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" {...props}>
      <path d="M212.33 224.33L128 272.33V448l84.33-48 103.67 48L400 400l84.33 48V272.33l-84.33-48L296.33 272zM576 80v352l-96-54.86V134.86L576 80zM0 80l96 54.86v242.28L0 432V80z"/>
    </svg>
  );
}