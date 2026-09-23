"use client";

import Image from "next/image";
import { site as travelData } from "@/data/index";
import type {
    TravelPartnersData as PartnersData,
    PartnerItem,
} from "@/data/index";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface PartnerSecProps {
    data?: PartnersData;
}

export default function PartnerSection({
    data: propData,
}: PartnerSecProps = {}) {
    const data: PartnersData = propData || travelData.partners;

    return (
        <section className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 bg-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[190px] sm:h-[230px] md:h-[300px] pointer-events-none select-none flex items-start justify-start overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
            >
                <div className="relative w-full max-w-[1280px] h-full opacity-8 sm:opacity-10">
                    <Image
                        src="/world.jpg"
                        alt="World Map Background"
                        fill
                        unoptimized
                        className="object-contain object-left-top filter blur-[0.6px]"
                        priority
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up">
                    <div className="relative text-center max-w-2xl mx-auto mb-6">
                        <div className="flex items-center justify-center gap-3 mb-2.5">
                            <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#12161f] uppercase">
                                {data.header.badge}
                            </span>
                            <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
                            {data.header.headingPrefix}
                            <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                            {data.header.description}
                        </p>
                    </div>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
                    {data.items.map((item: PartnerItem) => (
                        <StaggerItem key={item.id}>
                            <div
                                className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 p-2 sm:p-2.5 flex items-center justify-center h-20 sm:h-24 md:h-28"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
