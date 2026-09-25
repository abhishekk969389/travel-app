"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaPlane,
    FaHotel,
    FaBinoculars,
    FaUtensils,
    FaCar,
    FaUserTie,
    FaStar,
    FaArrowRight,
    FaHeart,
    FaRegHeart,
} from "react-icons/fa";
import { site as travelData, createSlug } from "@/data/index";
import type {
    TravelTourPackagesPageData,
    TourPackageCardItem,
} from "@/data/index";
import Pagination from "@/app/components/ui/pagination";
import { FadeIn, StaggerContainer, MotionCard } from "@/app/components/ui/animations";

interface PackageSecProps {
    data?: TravelTourPackagesPageData;
}

const renderFacilityIcon = (facility: string, className = "w-3.5 h-3.5") => {
    switch (facility.toLowerCase()) {
        case "flights":
            return <FaPlane className={className} />;
        case "hotel":
            return <FaHotel className={className} />;
        case "sightseeing":
            return <FaBinoculars className={className} />;
        case "meals":
            return <FaUtensils className={className} />;
        case "transport":
            return <FaCar className={className} />;
        case "travel guide":
            return <FaUserTie className={className} />;
        default:
            return <FaPlane className={className} />;
    }
};

export default function PackageSec({ data: propData }: PackageSecProps = {}) {
    const data: TravelTourPackagesPageData = propData || travelData.tourPackagesPage;
    const { header, filterSidebar, sortOptions, pagination: initialPagination, packages: allPackages, toolbar, emptyState } = data as any;

    // Pagination States
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [wishlist, setWishlist] = useState<string[]>([]);

    const itemsPerPage = initialPagination?.itemsPerPage || 9;

    // Wishlist toggle
    const toggleWishlist = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Pagination calculation
    const totalItems = allPackages.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const validCurrentPage = Math.min(currentPage, totalPages);

    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    const currentPackages = allPackages.slice(startIndex, startIndex + itemsPerPage);
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 350,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 bg-white">
            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
                            {header.badge}
                        </span>
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-black text-[#101828] tracking-tight leading-tight mb-3">
                        <span>{header.headingPrefix}</span>
                        <span className="text-[#ff2e63]">{header.headingHighlight}</span>
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                        {header.description}
                    </p>
                </FadeIn>
                <div className="w-full">
                    <div className="w-full flex flex-col justify-start">
                        {/* Top Toolbar: Showing Counter */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-2 border-b border-gray-100">
                            <span className="text-xs sm:text-sm font-semibold text-gray-600">
                                {toolbar?.showingText || "Showing"} {totalItems > 0 ? startIndex + 1 : 0}–{endIndex} {toolbar?.ofText || "of"} {totalItems} {toolbar?.packagesUnit || "Packages"}
                            </span>
                        </div>

                        {currentPackages.length > 0 ? (
                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                                {currentPackages.map((pkg: TourPackageCardItem) => {
                                    const isWishlisted = wishlist.includes(pkg.id);
                                    const detailHref = `/tourpackagedetails?name=${createSlug(pkg.title)}`;

                                    return (
                                        <MotionCard
                                            key={pkg.id}
                                            className="group bg-white rounded-[22px] overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                        >
                                            <div className="relative w-full h-[200px] sm:h-[210px] overflow-hidden">
                                                <Link href={detailHref} className="block relative w-full h-full">
                                                    <Image
                                                        src={pkg.image}
                                                        alt={pkg.title}
                                                        fill
                                                        unoptimized
                                                        className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out cursor-pointer"
                                                    />
                                                </Link>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                                            </div>
                                            <div className="p-5 sm:p-5.5 flex-1 flex items-center justify-between gap-3">
                                                <div>
                                                    <Link href={detailHref} className="block group/title">
                                                        <h2 className="text-base sm:text-lg font-extrabold text-[#101828] group-hover/title:text-[#ff2e63] group-hover:text-[#ff2e63] transition-colors leading-tight mb-1">
                                                            {pkg.title}
                                                        </h2>
                                                    </Link>
                                                    <p className="text-xs text-gray-500 font-medium line-clamp-1">
                                                        {pkg.subtitle}
                                                    </p>
                                                </div>
                                                <Link
                                                    href={detailHref}
                                                    className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-[#ff2e63] hover:bg-[#e02454] text-white flex items-center justify-center shadow-md shadow-[#ff2e63]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                                                    aria-label={`View details for ${pkg.title}`}
                                                >
                                                    <FaArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            </div>
                                        </MotionCard>
                                    );
                                })}
                            </StaggerContainer>
                        ) : (
                            /* Empty State */
                            <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200/80 my-8">
                                <p className="text-base font-bold text-slate-700 mb-2">
                                    No packages available at the moment.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mb-5">
                                    Please check back later for new tour packages.
                                </p>
                            </div>
                        )}

                        {/* Pagination Component */}
                        {totalPages > 1 && (
                            <div className="pt-10 sm:pt-14 flex justify-center">
                                <Pagination
                                    currentPage={validCurrentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
