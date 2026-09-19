"use client";

import { site as travelData } from "@/data/index";
import type { TravelRefundPolicyData } from "@/data/index";

interface RefundSecProps {
  data?: TravelRefundPolicyData;
}

export default function RefundSec({
  data: propData,
}: RefundSecProps = {}) {
  const data: TravelRefundPolicyData = propData || travelData.refundPolicy;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
              {data.header.badge}
            </span>
                    <span className="h-[2px] w-7 sm:w-8 rounded-full bg-[#ff2e63]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight mb-3 sm:mb-4">
            {data.header.headingPrefix}
            <span className="text-[#ff2e63]">{data.header.headingHighlight}</span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {data.header.description}
          </p>
        </div>

        {/* Policy Items List */}
        <div className="divide-y divide-slate-200">
          {data.items.map((item, idx) => (
            <div
              key={item.number || idx}
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-6 sm:py-7 md:py-8"
            >
              {/* Number Badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ffe8ed] text-[#ff2e63] font-bold flex items-center justify-center text-sm sm:text-base shrink-0 shadow-sm">
                {item.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#0c182a] tracking-tight mb-2 sm:mb-2.5">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {data.contactEmail && item.description.includes(data.contactEmail) ? (
                    <>
                      {item.description.split(data.contactEmail)[0]}
                      <a
                        href={`mailto:${data.contactEmail}`}
                        className="text-[#ff2e63] font-semibold hover:underline"
                      >
                        {data.contactEmail}
                      </a>
                      {item.description.split(data.contactEmail)[1]}
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
