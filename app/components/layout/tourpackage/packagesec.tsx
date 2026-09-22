"use client";

import { useState, useMemo, useRef, useEffect } from "react";
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
    FaChevronDown,
    FaChevronUp,
    FaSlidersH,
    FaRedo,
    FaHeart,
    FaRegHeart,
    FaCheck,
} from "react-icons/fa";
import { site as travelData, createSlug } from "@/data/index";
import type {
    TravelTourPackagesPageData,
    TourPackageCardItem,
    TourPackageFilterGroupItem,
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
    const { header, filterSidebar, sortOptions, pagination: initialPagination, packages: allPackages } = data;

    // Filter & Sort States
    const [selectedTourTypes, setSelectedTourTypes] = useState<string[]>([]);
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
    const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>("popular");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [wishlist, setWishlist] = useState<string[]>([]);
    const [openFilterGroups, setOpenFilterGroups] = useState<{ [key: string]: boolean }>({
        tourType: true,
        destination: true,
        duration: true,
        facilities: true,
    });
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

    const itemsPerPage = initialPagination?.itemsPerPage || 9;

    // Toggle Accordion
    const toggleGroup = (groupId: string) => {
        setOpenFilterGroups((prev) => ({
            ...prev,
            [groupId]: !prev[groupId],
        }));
    };

    // Toggle Checkbox
    const toggleCheckbox = (list: string[], setList: (val: string[]) => void, item: string) => {
        if (list.includes(item)) {
            setList(list.filter((i) => i !== item));
        } else {
            setList([...list, item]);
        }
        setCurrentPage(1);
    };

    // Reset All Filters
    const handleReset = () => {
        setSelectedTourTypes([]);
        setSelectedDestinations([]);
        setSelectedDurations([]);
        setSelectedFacilities([]);
        setSortBy("popular");
        setCurrentPage(1);
    };

    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
                setIsSortDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Wishlist toggle
    const toggleWishlist = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Filter and Sort calculation
    const filteredAndSortedPackages = useMemo(() => {
        return allPackages
            .filter((pkg: TourPackageCardItem) => {
                // Filter by Tour Type
                if (selectedTourTypes.length > 0) {
                    const hasTourType = pkg.tourType?.some((t: string) => selectedTourTypes.includes(t));
                    if (!hasTourType) return false;
                }

                // Filter by Destination
                if (selectedDestinations.length > 0) {
                    if (!selectedDestinations.includes(pkg.destinationType)) return false;
                }

                // Filter by Duration
                if (selectedDurations.length > 0) {
                    const days = pkg.durationDays;
                    const matchesDuration = selectedDurations.some((d: string) => {
                        if (d.includes("1 - 3") && days >= 1 && days <= 3) return true;
                        if (d.includes("4 - 7") && days >= 4 && days <= 7) return true;
                        if (d.includes("8 - 14") && days >= 8 && days <= 14) return true;
                        if (d.includes("15+") && days >= 15) return true;
                        return false;
                    });
                    if (!matchesDuration) return false;
                }

                // Filter by Facilities
                if (selectedFacilities.length > 0) {
                    const hasFacility = pkg.facilities?.some((f: string) => selectedFacilities.includes(f));
                    if (!hasFacility) return false;
                }

                return true;
            })
            .sort((a: TourPackageCardItem, b: TourPackageCardItem) => {
                switch (sortBy) {
                    case "price_asc":
                        return a.price - b.price;
                    case "price_desc":
                        return b.price - a.price;
                    case "duration_asc":
                        return a.durationDays - b.durationDays;
                    case "rating_desc":
                        return b.rating - a.rating;
                    case "popular":
                    default:
                        return b.reviewsCount - a.reviewsCount;
                }
            });
    }, [allPackages, selectedTourTypes, selectedDestinations, selectedDurations, selectedFacilities, sortBy]);

    // Pagination calculation
    const totalItems = filteredAndSortedPackages.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const validCurrentPage = Math.min(currentPage, totalPages);

    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    const currentPackages = filteredAndSortedPackages.slice(startIndex, startIndex + itemsPerPage);
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
                {/* Section Header */}
                <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    {/* Red Accent Badge */}
                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#12161f] uppercase">
                            {header.badge}
                        </span>
                        <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-black text-[#101828] tracking-tight leading-tight mb-3">
                        <span>{header.headingPrefix}</span>
                        <span className="text-[#ff2e63]">{header.headingHighlight}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                        {header.description}
                    </p>
                </FadeIn>

                {/* Mobile Filter Toggle Button */}
                <div className="lg:hidden mb-6 flex items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
                    <button
                        type="button"
                        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                        className="flex items-center gap-2 text-sm font-bold text-[#101828] px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm"
                    >
                        <FaSlidersH className="w-4 h-4 text-[#ff2e63]" />
                        <span>{isMobileFilterOpen ? "Hide Filters" : "Filter Packages"}</span>
                    </button>

                    <span className="text-xs font-semibold text-gray-500">
                        {totalItems} Packages Available
                    </span>
                </div>

                {/* Main Content Layout: Left Sidebar Filter + Right Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* ================= LEFT COLUMN: FILTER SIDEBAR ================= */}
                    <div
                        className={`lg:col-span-3 ${isMobileFilterOpen ? "block" : "hidden lg:block"
                            } lg:sticky lg:top-24 space-y-6`}
                    >
                        <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-gray-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.05)] overflow-hidden">
                            {/* Filter Top Header Banner */}
                            <div className="bg-[#0B1727] text-white px-5 sm:px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <FaSlidersH className="w-4 h-4 text-[#ff2e63]" />
                                    <h2 className="text-sm sm:text-base font-bold tracking-tight">
                                        {filterSidebar.title}
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                                >
                                    <FaRedo className="w-3 h-3" />
                                    <span>{filterSidebar.resetText}</span>
                                </button>
                            </div>

                            {/* Filter Accordion Groups */}
                            <div className="p-5 sm:p-6 space-y-6 divide-y divide-gray-100">
                                {filterSidebar.groups.map((group: TourPackageFilterGroupItem, idx: number) => {
                                    const isOpen = openFilterGroups[group.id] ?? true;

                                    return (
                                        <div key={group.id} className={idx > 0 ? "pt-5" : ""}>
                                            {/* Accordion Header */}
                                            <button
                                                type="button"
                                                onClick={() => toggleGroup(group.id)}
                                                className="w-full flex items-center justify-between text-left text-sm sm:text-[15px] font-bold text-[#101828] mb-3 group cursor-pointer"
                                            >
                                                <span>{group.title}</span>
                                                {isOpen ? (
                                                    <FaChevronUp className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                ) : (
                                                    <FaChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                                )}
                                            </button>

                                            {/* Accordion Body: Checkbox Options */}
                                            {isOpen && (
                                                <div className="space-y-2.5 pt-1">
                                                    {group.options.map((option: string) => {
                                                        let isChecked = false;
                                                        let toggleHandler = () => { };

                                                        if (group.id === "tourType") {
                                                            isChecked = selectedTourTypes.includes(option);
                                                            toggleHandler = () =>
                                                                toggleCheckbox(selectedTourTypes, setSelectedTourTypes, option);
                                                        } else if (group.id === "destination") {
                                                            isChecked = selectedDestinations.includes(option);
                                                            toggleHandler = () =>
                                                                toggleCheckbox(selectedDestinations, setSelectedDestinations, option);
                                                        } else if (group.id === "duration") {
                                                            isChecked = selectedDurations.includes(option);
                                                            toggleHandler = () =>
                                                                toggleCheckbox(selectedDurations, setSelectedDurations, option);
                                                        } else if (group.id === "facilities") {
                                                            isChecked = selectedFacilities.includes(option);
                                                            toggleHandler = () =>
                                                                toggleCheckbox(selectedFacilities, setSelectedFacilities, option);
                                                        }

                                                        return (
                                                            <label
                                                                key={option}
                                                                className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 hover:text-slate-900 cursor-pointer select-none"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={toggleHandler}
                                                                    className="w-4 h-4 rounded border-gray-300 text-[#ff2e63] focus:ring-[#ff2e63] accent-[#ff2e63] cursor-pointer"
                                                                />
                                                                <span className={isChecked ? "font-semibold text-slate-900" : ""}>
                                                                    {option}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Apply Filters Bottom Action Button */}
                            <div className="p-5 sm:p-6 pt-0">
                                <button
                                    type="button"
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ff2e63] to-[#ff5722] hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#ff2e63]/25 transition-all cursor-pointer"
                                >
                                    <span>{filterSidebar.applyText}</span>
                                    <FaArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT COLUMN: PACKAGES GRID ================= */}
                    <div className="lg:col-span-9 flex flex-col justify-start">
                        {/* Top Toolbar: Showing Counter & Sort By Dropdown */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-2 border-b border-gray-100">
                            <span className="text-xs sm:text-sm font-semibold text-gray-600">
                                Showing {totalItems > 0 ? startIndex + 1 : 0}–{endIndex} of {totalItems} Packages
                            </span>

                            {/* Custom Sort By Dropdown */}
                            <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                                    Sort By:
                                </span>
                                <div className="relative" ref={sortDropdownRef}>
                                    {/* Trigger Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsSortDropdownOpen((prev) => !prev)}
                                        className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-white border text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs ${isSortDropdownOpen
                                            ? "border-[#ff2e63] ring-2 ring-[#ff2e63]/15 text-[#ff2e63]"
                                            : "border-gray-200 text-slate-800 hover:border-[#ff2e63]"
                                            }`}
                                    >
                                        <span>
                                            {sortOptions.find((opt) => opt.value === sortBy)?.label || "Most Popular"}
                                        </span>
                                        <FaChevronDown
                                            className={`w-3 h-3 text-[#ff2e63] transition-transform duration-200 ${isSortDropdownOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Options Popup */}
                                    {isSortDropdownOpen && (
                                        <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-gray-100 py-1.5 z-40 overflow-hidden">
                                            {sortOptions.map((opt) => {
                                                const isSelected = opt.value === sortBy;
                                                return (
                                                    <button
                                                        key={opt.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setSortBy(opt.value);
                                                            setIsSortDropdownOpen(false);
                                                        }}
                                                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-colors text-left cursor-pointer ${isSelected
                                                            ? "bg-[#ff2e63] text-white font-bold"
                                                            : "text-slate-700 hover:bg-[#ffe8ed] hover:text-[#ff2e63]"
                                                            }`}
                                                    >
                                                        <span>{opt.label}</span>
                                                        {isSelected && <FaCheck className="w-3 h-3 text-white" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Packages Grid (3 Columns) */}
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
                                            {/* Package Image & Top Badges */}
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

                                                {/* Top Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

                                                {/* Duration Pill Badge */}
                                                <div className="absolute top-3.5 left-3.5 z-10">
                                                    <span className="px-3.5 py-1 rounded-full bg-[#0B1727]/90 backdrop-blur-md text-white font-bold text-xs shadow-sm border border-white/15">
                                                        {pkg.duration}
                                                    </span>
                                                </div>

                                                {/* Wishlist Heart Button */}
                                                <button
                                                    type="button"
                                                    onClick={(e) => toggleWishlist(pkg.id, e)}
                                                    aria-label="Add to Wishlist"
                                                    className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 flex items-center justify-center text-white transition-all cursor-pointer border border-white/20 hover:scale-110 active:scale-95"
                                                >
                                                    {isWishlisted ? (
                                                        <FaHeart className="w-4 h-4 text-[#ff2e63]" />
                                                    ) : (
                                                        <FaRegHeart className="w-4 h-4 text-white" />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Package Content Info */}
                                            <div className="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
                                                <div>
                                                    {/* Title & Subtitle */}
                                                    <Link href={detailHref} className="block group/title">
                                                        <h2 className="text-base sm:text-lg font-extrabold text-[#101828] group-hover/title:text-[#ff2e63] group-hover:text-[#ff2e63] transition-colors leading-tight mb-1">
                                                            {pkg.title}
                                                        </h2>
                                                    </Link>
                                                    <p className="text-xs text-gray-500 font-medium mb-3.5 line-clamp-1">
                                                        {pkg.subtitle}
                                                    </p>

                                                    {/* Facilities Row */}
                                                    <div className="flex items-center gap-3.5 text-xs text-gray-600 font-medium mb-3.5 pb-3.5 border-b border-gray-100">
                                                        {pkg.facilities.slice(0, 3).map((facility: string) => (
                                                            <div key={facility} className="flex items-center gap-1.5 shrink-0">
                                                                <span className="text-[#0E5266]">
                                                                    {renderFacilityIcon(facility, "w-3 h-3")}
                                                                </span>
                                                                <span className="text-[11px] sm:text-xs text-slate-600">
                                                                    {facility}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Bottom Row: Rating, Price & CTA Arrow Button */}
                                                <div>
                                                    {/* Reviews Rating */}
                                                    <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold text-slate-700">
                                                        <FaStar className="w-3.5 h-3.5 text-[#ff2e63]" />
                                                        <span>{pkg.rating}</span>
                                                        <span className="text-gray-400 font-normal">
                                                            ({pkg.reviewsCount} Reviews)
                                                        </span>
                                                    </div>

                                                    {/* Price & Red Circle Button */}
                                                    <div className="flex items-center justify-between pt-1">
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-xl sm:text-2xl font-black text-[#ff2e63] leading-none">
                                                                {pkg.priceFormatted}
                                                            </span>
                                                            <span className="text-xs font-semibold text-gray-400">
                                                                {pkg.priceUnit}
                                                            </span>
                                                        </div>

                                                        <Link
                                                            href={detailHref}
                                                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff2e63] hover:bg-[#e02454] text-white flex items-center justify-center shadow-md shadow-[#ff2e63]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                                                            aria-label={`View details for ${pkg.title}`}
                                                        >
                                                            <FaArrowRight className="w-3.5 h-3.5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </MotionCard>
                                    );
                                })}
                            </StaggerContainer>
                        ) : (
                            /* Empty State */
                            <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200/80 my-8">
                                <p className="text-base font-bold text-slate-700 mb-2">
                                    No packages match your selected filters.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mb-5">
                                    Try clearing some filters to see available tour packages.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="px-5 py-2.5 rounded-xl bg-[#ff2e63] text-white text-xs font-bold shadow-md shadow-[#ff2e63]/20 hover:bg-[#e02454] transition-all cursor-pointer"
                                >
                                    Reset All Filters
                                </button>
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
