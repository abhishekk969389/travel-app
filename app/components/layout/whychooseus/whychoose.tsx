"use client";

import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import {
  LuUsers,
  LuShieldCheck,
  LuMapPin,
  LuHeadphones,
  LuTag,
  LuGlobe,
  LuCompass,
} from "react-icons/lu";
import { site as travelData } from "@/data/index";
import type { TravelWhyChooseUsPageData as WhyChooseData, WhyChoosePageFeature } from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/app/components/ui/animations";

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

type IconProps = {
  className?: string;
};

/** Airplane climbing away from a dotted flight path (Curved hero doodle). */
export function PlaneTrailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <path
        d="M2 76C10 66 21 56 35 47"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeDasharray="0.1 7"
      />
      <g transform="translate(24 3) scale(1.9) rotate(42 12 12)" fill="currentColor">
        <path d="M12 2c.9 0 1.6.8 1.6 1.8v5.4l7.4 4.3v2.1l-7.4-2.3v4.6l2.4 1.8v1.7L12 20.4l-4 .9v-1.7l2.4-1.8v-4.6L3 15.5v-2.1l7.4-4.3V3.8C10.4 2.8 11.1 2 12 2Z" />
      </g>
    </svg>
  );
}

/** Snow-capped peaks used on the "explore" badge. */
export function MountainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 34" className={className} fill="currentColor" aria-hidden>
      <path d="M0 34 12 17l8 11z" opacity={0.55} />
      <path d="M13 34 31 6l17 28z" />
      <path d="m31 6-6.4 10 3.7 1.6L31 14.4l3.1 3.2 3.6-1.6z" fill="#fff" />
    </svg>
  );
}

/** Tapered brush swoosh underlining the headline. */
export function BrushStrokeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 18" className={className} fill="currentColor" aria-hidden>
      <path d="M1.8 14.3C46 6.6 100.9 1.6 158 .6c.9 0 1.4 1.2.6 1.6-48.6 3.3-98.4 7.8-153.8 15.6-2.2.3-3.2-3.1-3-3.5Z" />
    </svg>
  );
}

/** Dynamic icon renderer using react-icons/lu */
const renderFeatureIcon = (iconName?: string) => {
  switch (iconName?.toLowerCase()) {
    case "users":
    case "guides":
      return <LuUsers className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    case "shield":
    case "safety":
      return <LuShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    case "packages":
    case "trip":
    case "map":
      return <LuMapPin className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    case "support":
    case "headset":
      return <LuHeadphones className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    case "value":
    case "tag":
      return <LuTag className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    case "responsible":
    case "globe":
      return <LuGlobe className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
    default:
      return <LuCompass className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />;
  }
};

interface CurvedHeroProps {
  hero?: WhyChooseData["hero"];
  floatingNote?: WhyChooseData["floatingNote"];
}

export function CurvedHero({ hero, floatingNote }: CurvedHeroProps = {}) {
  const image = hero?.image || "/whychooseus.jpg";
  const imageAlt = hero?.imageAlt || "Traveller resting on a cliff above a turquoise mountain lake";
  const overlayText = hero?.overlayText || ["Good", "Places", "Brighter", "People"];
  const badge = hero?.badge || { title: "Explore", subtitle: "Discover", tagline: "Belong" };
  const noteLines = floatingNote?.lines || ["Travel", "More", "Worry Less"];

  return (
    <div className="@container relative mx-auto aspect-[57/82] w-full max-w-[28rem] sm:max-w-[30rem]">
      {/* Floating handwritten note and airplane flight path doodle at top left of hero */}
      <div className="absolute left-[-28%] sm:left-[-32%] lg:left-[-35%] top-[0%] sm:top-[1%] z-20 flex items-center gap-1.5 select-none pointer-events-none">
        <div className={`${scriptFont.className} text-xl sm:text-2xl lg:text-3xl text-deep font-semibold leading-[1.1] -rotate-6`}>
          {noteLines.map((line, idx) => (
            <span key={idx} className={`block ${idx === 1 ? "ml-3" : ""}`}>
              {line}
            </span>
          ))}
        </div>
        <PlaneTrailIcon className="w-16 sm:w-20 lg:w-24 text-deep transform -rotate-6 -mt-3" />
      </div>

      {/* Yellow accents sitting behind the photo */}
      <span
        aria-hidden
        className="blob-a absolute right-[-1%] top-[1%] h-[25%] w-[31%] bg-sun"
      />
      <span
        aria-hidden
        className="blob-b absolute right-[-1%] top-[50%] h-[19%] w-[13%] bg-sun"
      />
      <span
        aria-hidden
        className="blob-b absolute left-[-4%] top-[27%] h-[26%] w-[13%] bg-sun"
      />

      {/* Curved photo frame */}
      <div className="curved-frame absolute bottom-[2%] left-[5%] right-[7%] top-[4%] overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 92vw, 30rem"
          className="object-cover"
          priority
        />
      </div>

      {/* Handwritten overlay */}
      <p className={`absolute left-[41%] right-[18%] top-[10%] text-center ${scriptFont.className} font-semibold leading-[1.08] text-white drop-shadow-[0_2px_10px_rgba(8,32,56,0.45)] text-[clamp(1.5rem,7.4cqw,3rem)] z-10`}>
        {overlayText.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx < overlayText.length - 1 && <br />}
          </span>
        ))}
      </p>
      <BrushStrokeIcon className="absolute left-[57%] top-[32.8%] w-[19%] -rotate-[7deg] text-sun z-10" />

      {/* Explore badge */}
      <div className="absolute bottom-[2%] left-[65%] right-[4%] top-[76%] z-20 flex flex-col items-center justify-center rounded-[14%/18%] bg-white shadow-[0_18px_40px_-14px_rgba(13,40,64,0.35)] p-3">
        <MountainIcon className="w-[40%] text-deep" />
        <p className="mt-[6%] text-center uppercase leading-[1.4] tracking-[0.02em] text-deep text-[clamp(0.6rem,2.8cqw,1.02rem)]">
          <span className="block font-bold text-[1.06em] tracking-[0.04em]">
            {badge.title}
          </span>
          {badge.subtitle}
          <br />
          {badge.tagline}
        </p>
      </div>
    </div>
  );
}

interface WhyChooseProps {
  data?: WhyChooseData;
}

export default function WhyChoose({ data: propData }: WhyChooseProps = {}) {
  const data: WhyChooseData = propData || travelData.whyChoosePage;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description & Features Grid */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <FadeIn direction="up">
              {/* Subtitle */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[3px] w-7 rounded-full bg-[#e5a824]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#082038] uppercase">
                  {data.header.subtitle}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold  text-[#12161f] tracking-tight leading-[1.15] mb-4">
                {data.header.headingLine1} <br />
                <span>{data.header.headingLine2Prefix}</span>
                <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                {data.header.description}
              </p>
            </FadeIn>

            {/* 6 Features Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-x-6 sm:gap-y-8">
              {data.features.map((feature: WhyChoosePageFeature) => (
                <StaggerItem key={feature.id} className="flex items-start gap-3 group">
                  {/* Icon Badge */}
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f2f6] text-[#082038] shrink-0 border border-[#d8e6ed] shadow-xs group-hover:bg-[#ff2e63] group-hover:text-white transition-colors duration-300">
                    {renderFeatureIcon(feature.icon)}
                  </div>
                  
                  {/* Title & Description */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#082038] tracking-tight mb-1 leading-snug whitespace-nowrap">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>

          {/* Right Column: Curved Hero Frame Component */}
          <ScaleIn className="lg:col-span-4 relative mt-6 lg:mt-0 flex justify-center">
            <CurvedHero
              hero={data.hero}
              floatingNote={data.floatingNote}
            />
          </ScaleIn>

        </div>
      </div>
    </section>
  );
}
