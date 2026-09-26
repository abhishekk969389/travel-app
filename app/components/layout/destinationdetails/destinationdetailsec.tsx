import Image from "next/image";
import { FaLandmark, FaUserFriends, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import type { DestinationCardItem } from "@/data/index";
import { FadeIn } from "@/app/components/ui/animations";

interface DestinationDetailsSecProps {
  destination: DestinationCardItem & { description?: string };
  labels?: { badge?: string; highlightsTitle?: string };
}

const getTagIcon = (iconName: string) => {
  const iconClass = "w-4 h-4 text-[#ff2e63]";
  switch (iconName) {
    case "FaLandmark":
      return <FaLandmark className={iconClass} />;
    case "FaUserFriends":
      return <FaUserFriends className={iconClass} />;
    case "FaGlobe":
      return <FaGlobe className={iconClass} />;
    default:
      return <FaMapMarkerAlt className={iconClass} />;
  }
};

export default function DestinationDetailsSec({ destination, labels }: DestinationDetailsSecProps) {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <FadeIn direction="left" className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] rounded-full bg-[#ff2e63]" />
                <span className="text-sm font-bold tracking-widest text-[#ff2e63] uppercase">
                  {labels?.badge || "Destination"}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12161f] tracking-tight leading-tight">
                {destination.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-500 mt-2">
                {destination.subtitle}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-sm md:text-base">
              {destination.description || `Experience the vibrant culture, rich history, and stunning landscapes of ${destination.name}. This destination offers a perfect blend of ${destination.subtitle.toLowerCase()}, making it an ideal spot for travelers seeking an unforgettable journey. Explore unique attractions, savor local flavors, and create memories that will last a lifetime.`}
            </p>

            {destination.tags && destination.tags.length > 0 && (
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-[#12161f] mb-4">
                  {labels?.highlightsTitle || "Highlights"}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {destination.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-[#edf7fc] px-4 py-2.5 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-sm"
                    >
                      {getTagIcon(tag.icon)}
                      <span className="text-sm font-bold text-[#12161f]">{tag.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
