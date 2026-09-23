"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, ServiceItem, ServiceFeature, createSlug } from '@/data/index';
import * as FaIcons from 'react-icons/fa';
import { FadeIn, ScaleIn } from '@/app/components/ui/animations';

type IconName = keyof typeof FaIcons;

export default function ServiceSec() {
    const { services } = site;

    if (!services || !services.items) {
        return null;
    }

    return (
        <section className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-8 sm:space-y-10 md:space-y-12">
                {services.items.map((item: ServiceItem, index: number) => {
                    const isLight = item.theme === 'light';
                    const serviceSlug = createSlug(`${item.titlePart1 || ''} ${item.titlePart2 || ''}`);

                    return (
                        <FadeIn key={item.id || index} direction="up" delay={index * 0.1} className="w-full">
                            <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[370px] relative justify-center items-center">

                            {isLight ? (
                                <>
                                    <div className="relative w-full lg:w-[60%] h-[280px] sm:h-[300px] lg:h-[88%] z-10 lg:pr-12 lg:-skew-x-[8deg] group ml-3 mt-4 lg:ml-6 lg:mt-6">
       
                                        <div className="absolute top-0 left-0 w-[55%] h-[75%] bg-gradient-to-r from-pink-600 to-red-500 rounded-[2rem] transform -translate-x-3 -translate-y-4 shadow-lg hidden lg:block"></div>

                                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl">
                 
                                            <div className="w-full h-full lg:w-[120%] lg:h-[120%] lg:skew-x-[8deg] lg:-ml-[10%] lg:-mt-[5%] relative">
                                                <Image
                                                    src={item.image}
                                                    alt={item.titlePart1}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div
                                                    className="absolute font-[family-name:var(--font-script)] text-3xl  text-[#1e3a8a] font-normal bottom-12 left-12 lg:bottom-12 lg:left-24 text-white leading-tight z-20 flex flex-col items-start"

                                                >
                                                    {item.imageOverlayText.split('\n').map((line, i) => (
                                                        <div key={i}>{line}</div>
                                                    ))}
                                                    <div className="w-[65%] h-[3px] mt-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform rotate-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-[50%] h-auto lg:h-full bg-white border border-gray-100 rounded-[2rem] shadow-2xl z-20 lg:-ml-[15%] lg:-skew-x-[8deg] p-6 sm:p-8 lg:p-8 flex flex-col justify-center mt-[-2rem] lg:mt-0">
                                        <div className="lg:skew-x-[8deg] flex flex-col h-full w-full">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-4xl font-bold text-red-500">{item.id}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-0.5 bg-red-500"></div>
                                                    <span className="text-sm font-bold tracking-wider text-red-500 uppercase">{item.subtitle}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">
                                                <span className="text-gray-900">{item.titlePart1} </span>
                                                <span className="text-red-500">{item.titlePart2}</span>
                                            </h3>
                                            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                                                {item.features?.map((feat: ServiceFeature, i: number) => {
                                                    const Icon = FaIcons[feat.icon as IconName] || FaIcons.FaCheck;
                                                    return (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                                                <Icon size={14} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-700">{feat.text}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="mt-auto">
                                                <Link href={`/servicedetails?name=${serviceSlug}`} className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                                                    {item.buttonText || "Explore Service"}
                                                    <FaIcons.FaArrowRight size={14} />
                                                </Link>
                                            </div>

                                            {/* Decorative Watermark */}
                                            <div className="absolute bottom-4 right-4 text-gray-100 opacity-50 z-[-1]">
                                                <FaIcons.FaCity size={120} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative w-full lg:w-[45%] h-auto lg:h-full bg-[#0f172a] rounded-[2rem] shadow-2xl z-20 lg:-mr-[12%] lg:-skew-x-[8deg] p-6 sm:p-8 lg:p-8 flex flex-col justify-center order-2 lg:order-1 mt-[-2rem] lg:mt-0">
                                        <div className="lg:skew-x-[8deg] flex flex-col h-full w-full">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-4xl font-bold text-red-500">{item.id}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-0.5 bg-red-500"></div>
                                                    <span className="text-sm font-bold tracking-wider text-red-500 uppercase">{item.subtitle}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">
                                                <span className="text-white">{item.titlePart1} </span>
                                                <span className="text-pink-500">{item.titlePart2}</span>
                                            </h3>
                                            <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                                                {item.features?.map((feat: ServiceFeature, i: number) => {
                                                    const Icon = FaIcons[feat.icon as IconName] || FaIcons.FaCheck;
                                                    return (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                                                <Icon size={14} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-200">{feat.text}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="mt-auto">
                                                <Link href={`/servicedetails?name=${serviceSlug}`} className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 w-fit">
                                                    {item.buttonText || "Explore Service"}
                                                    <FaIcons.FaArrowRight size={14} />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-4 right-4 text-white/5 z-[-1]">
                                                <FaIcons.FaPlane size={100} className="transform -rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-[60%] h-[280px] sm:h-[300px] lg:h-[88%] z-10 lg:pl-8 lg:-skew-x-[8deg] group order-1 lg:order-2 mr-4 mt-4 lg:mr-6 lg:mt-6">

                                        <div className="absolute top-0 right-0 w-[55%] h-[75%] bg-gradient-to-r from-pink-600 to-red-500 rounded-[2rem] transform translate-x-4 -translate-y-4 shadow-lg hidden lg:block"></div>

                                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl">
                                            <div className="w-full h-full lg:w-[120%] lg:h-[120%] lg:skew-x-[8deg] lg:-ml-[10%] lg:-mt-[5%] relative">
                                                <Image
                                                    src={item.image}
                                                    alt={item.titlePart1}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div
                                                    className="absolute font-[family-name:var(--font-script)] text-3xl  text-white font-normal bottom-12 left-8 lg:bottom-12 lg:left-[35%] text-white leading-tight z-20 flex flex-col items-start"

                                                >
                                                    {item.imageOverlayText.split('\n').map((line, i) => (
                                                        <div key={i}>{line}</div>
                                                    ))}
                                                    <div className="w-[65%] h-[3px] mt-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform rotate-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </FadeIn>
                );
                })}
            </div>
        </section>
    );
}
