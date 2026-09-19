"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelPaginationData as PaginationData } from "@/data/index";

export interface PaginationProps {
  data?: PaginationData;
  currentPage?: number;
  totalPages?: number;
  pages?: number[];
  onPageChange?: (page: number) => void;
  className?: string;
}

export default function Pagination({
  data: propData,
  currentPage: propCurrentPage,
  totalPages: propTotalPages,
  pages: propPages,
  onPageChange,
  className = "",
}: PaginationProps = {}) {
  const data: PaginationData = propData || travelData.destinationsPage.pagination;

  const totalPages = propTotalPages ?? data.totalPages ?? 4;
  const currentPage = propCurrentPage ?? data.currentPage ?? 1;
  const pagesList =
    propPages ??
    data.pages ??
    Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage <= 1}
        aria-label="Previous Page"
        className="w-10 h-10 rounded-full bg-[#edf7fc] text-[#1a2b49] flex items-center justify-center transition-all duration-200 hover:bg-[#d8effa] hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100 cursor-pointer shadow-2xs"
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {pagesList.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Page ${page}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[15px] sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#ff2e63] text-white shadow-md shadow-[#ff2e63]/25 scale-105"
                  : "text-[#1a2b49] hover:text-[#ff2e63] hover:bg-[#edf7fc]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        aria-label="Next Page"
        className="w-10 h-10 rounded-full bg-[#edf7fc] text-[#1a2b49] flex items-center justify-center transition-all duration-200 hover:bg-[#d8effa] hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100 cursor-pointer shadow-2xs"
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}
