'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServiceDetails, createSlug } from '@/data/index';
import * as FaIcons from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from '@/app/components/ui/animations';

interface ServiceDetailRelatedProps {
  currentId?: string;
}

export default function ServiceDetailRelated({ currentId }: ServiceDetailRelatedProps) {
  const allServices = getAllServiceDetails();
  const otherServices = allServices.filter(s => s.id !== currentId);

  if (otherServices.length === 0) return null;

  return (
    <section className="relative w-full py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-widest text-pink-600 uppercase block mb-2">
            EXPLORE MORE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b28]">
            Other Travel Services
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Discover all the specialized travel services we offer to make your travel seamless and worry-free.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service) => {
            const serviceSlug = createSlug(`${service.titlePart1 || ''} ${service.titleHighlight || ''}`);
            return (
              <StaggerItem key={service.id}>
                <MotionCard className="h-full">
                  <Link
                    href={`/servicedetails?name=${serviceSlug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image
                        src={service.featuredImage || '/blog1.jpg'}
                        alt={service.titlePart1}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-all"></div>
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                        {service.id}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                          {service.titlePart1} <span className="text-pink-500">{service.titleHighlight}</span>
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-pink-600 group-hover:text-red-500 transition-colors mt-auto">
                        <span>Explore Details</span>
                        <FaIcons.FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
