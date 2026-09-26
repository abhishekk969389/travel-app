"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowRight,
  FaRegHeart,
  FaHeart,
  FaLandmark,
  FaUserFriends,
  FaMountain,
  FaHiking,
  FaUmbrellaBeach,
  FaGlassCheers,
  FaShip,
  FaSwimmer,
  FaWater,
  FaSnowflake,
  FaPray,
  FaCity,
  FaShoppingBag,
  FaHotel,
  FaTrain,
  FaCampground,
  FaToriiGate,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelDestinationsPageData as DestinationsPageData } from "@/data/index";
import Pagination from "@/app/components/ui/pagination";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

interface DestinationSecProps {
  data?: DestinationsPageData;
}

const getTagIcon = (iconName: string) => {
  const iconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a2b49] shrink-0";
  switch (iconName) {
    case "FaLandmark":
      return <FaLandmark className={iconClass} />;
    case "FaUserFriends":
      return <FaUserFriends className={iconClass} />;
    case "FaMountain":
      return <FaMountain className={iconClass} />;
    case "FaHiking":
      return <FaHiking className={iconClass} />;
    case "FaUmbrellaBeach":
      return <FaUmbrellaBeach className={iconClass} />;
    case "FaGlassCheers":
      return <FaGlassCheers className={iconClass} />;
    case "FaShip":
      return <FaShip className={iconClass} />;
    case "FaSwimmer":
      return <FaSwimmer className={iconClass} />;
    case "FaWater":
      return <FaWater className={iconClass} />;
    case "FaSnowflake":
      return <FaSnowflake className={iconClass} />;
    case "FaPray":
      return <FaPray className={iconClass} />;
    case "FaCity":
      return <FaCity className={iconClass} />;
    case "FaShoppingBag":
      return <FaShoppingBag className={iconClass} />;
    case "FaHotel":
      return <FaHotel className={iconClass} />;
    case "FaTrain":
      return <FaTrain className={iconClass} />;
    case "FaCampground":
      return <FaCampground className={iconClass} />;
    case "FaToriiGate":
      return <FaToriiGate className={iconClass} />;
    default:
      return <FaMapMarkerAlt className={iconClass} />;
  }
};

export default function DestinationSec({ data: propData }: DestinationSecProps = {}) {
  const data: DestinationsPageData = propData || travelData.destinationsPage;
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(data.pagination?.currentPage || 1);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const destinationsList =
    activeTab === "domestic" ? data.domesticDestinations : data.internationalDestinations;

  const itemsPerPage = data.pagination?.itemsPerPage || 8;
  const totalPages = Math.ceil(destinationsList.length / itemsPerPage) || 1;
  const pagesList = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Paginated destination slice (e.g. 8 on page 1, remaining 2 on page 2)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDestinations = destinationsList.slice(startIndex, endIndex);

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff2e63] uppercase">
                {data.header.badge}
              </span>
              <span className="h-[2px] w-6 sm:w-8 rounded-full bg-[#ff2e63]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12161f] tracking-tight mb-3 sm:mb-4">
              {data.header.titlePrefix}
              <span className="text-[#ff2e63]">{data.header.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-base leading-relaxed max-w-xl mx-auto">
              {data.header.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-7">
              {data.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.id === "domestic" ? FaMapMarkerAlt : FaGlobe;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as "domestic" | "international");
                      setCurrentPage(1);
                    }}
                    className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                      isActive
                        ? "bg-[#ff2e63] text-white shadow-md shadow-[#ff2e63]/25 scale-105"
                        : "bg-[#edf7fc] text-[#12161f] hover:bg-slate-100 hover:text-[#ff2e63]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-600"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
        <StaggerContainer key={activeTab + currentPage} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start">
          {displayedDestinations.map((item) => {
            const isFav = Boolean(favorites[item.id]);

            return (
              <StaggerItem key={item.id} className="h-full">
                <div
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-4.5 flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-[19px] font-bold text-[#12161f] group-hover:text-[#ff2e63] transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5 font-normal line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                      <Link 
                        href={`/destinationdetails/${item.id}`}
                        className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#ff2e63] text-white shadow-lg shadow-[#ff2e63]/40 hover:shadow-xl hover:shadow-[#ff2e63]/50 hover:-translate-y-1 transition-all duration-300"
                      >
                        <FaArrowRight className="sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        {data.pagination && totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              data={{
                ...data.pagination,
                totalPages,
                pages: pagesList,
              }}
              currentPage={currentPage}
              totalPages={totalPages}
              pages={pagesList}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
