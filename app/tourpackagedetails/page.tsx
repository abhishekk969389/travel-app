import SubBanner from "@/app/components/ui/subbanner";
import TourDetailHero from "@/app/components/layout/tourpackagedetails/tourdetailhero";
import TourDetailOverview from "@/app/components/layout/tourpackagedetails/tourdetailoverview";
import TourDetailItinerary from "@/app/components/layout/tourpackagedetails/tourdetailitinerary";
import TourDetailSidebar from "@/app/components/layout/tourpackagedetails/tourdetailsidebar";
import Achievement from "@/app/components/ui/achievement";
import { site as travelData } from "@/data/index";
import type { TravelTourPackagesPageData, TourPackageCardItem } from "@/data/index";

interface TourPackageDetailsPageProps {
  searchParams?: Promise<{ id?: string }>;
}

export default async function TourPackageDetailsPage({ searchParams }: TourPackageDetailsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const packageId = resolvedSearchParams.id;

  const tourPackagesData: TravelTourPackagesPageData = travelData.tourPackagesPage;
  const packagesList: TourPackageCardItem[] = tourPackagesData.packages;

  const pkg =
    packagesList.find((p) => packageId && p.id === packageId) || packagesList[0];

  return (
    <section className="min-h-screen">
      <SubBanner pageKey="tourpackagedetails" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-10">
        <TourDetailHero pkg={pkg} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <TourDetailOverview pkg={pkg} />
            <TourDetailItinerary pkg={pkg} />
          </div>
          <div className="lg:col-span-4">
            <TourDetailSidebar pkg={pkg} />
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <Achievement />
      </div>
    </section>
  );
}
