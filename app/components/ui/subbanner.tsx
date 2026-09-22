"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type {
  TravelSubBannersData as SubBannersData,
  SubBannerPageKey,
  BreadcrumbItem,
} from "@/data/index";
import { FadeIn } from "@/app/components/ui/animations";

interface SubBannerProps {
  pageKey?: SubBannerPageKey | string;
  data?: SubBannersData[keyof SubBannersData];
  title?: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function SubBanner({
  pageKey = "about",
  data: propData,
  title: propTitle,
  backgroundImage: propBgImage,
  breadcrumbs: propBreadcrumbs,
}: SubBannerProps) {
  const pageData =
    travelData.subBanners?.[pageKey as keyof typeof travelData.subBanners];
  const data = propData || pageData || travelData.subBanners.about;

  const title = propTitle || data?.title || "About Us";
  const bgImage = propBgImage || data?.backgroundImage || "/subbanner.jpg";
  const breadcrumbs =
    propBreadcrumbs ||
    data?.breadcrumbs || [
      { name: "Home", href: "/" },
      { name: title, href: "#" },
    ];

  return (
    <section className="relative overflow-hidden min-h-[160px] sm:min-h-[210px] md:min-h-[260px] lg:min-h-[320px] flex items-center justify-start bg-[#03111b] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03111b]/90 via-[#061927]/75 to-[#03111b]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 md:py-11 lg:py-14">
        <FadeIn direction="up">
          <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.55rem] font-bold text-white tracking-tight mb-2.5 sm:mb-3 lg:mb-4 drop-shadow-md">
            {title}
          </h1>

          {/* Breadcrumb pill */}
          <nav aria-label="Breadcrumb" className="inline-flex max-w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 rounded-full bg-slate-700/80 backdrop-blur-md border border-white/15 px-4 sm:px-6 md:px-7 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 shadow-xl max-w-full overflow-x-auto">
              {breadcrumbs.map((item, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                const isFirst = idx === 0;

                return (
                  <div key={item.name + idx} className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 shrink-0">
                    {idx > 0 && (
                      <FaChevronRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 text-white" />
                    )}
                    {isLast ? (
                      <span className="font-semibold text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] whitespace-nowrap">
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 text-slate-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] whitespace-nowrap transition-colors hover:text-[#ff5a5f]"
                      >
                        {isFirst && <FaHome className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 shrink-0" />}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
