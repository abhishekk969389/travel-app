import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import PackageSec from "@/app/components/layout/tourpackage/packagesec";
import Achievement from "../components/ui/achievement";

export const metadata: Metadata = {
  title: "Tour Packages — TripNexa",
  description: "Explore our handpicked domestic and international tour packages with best prices and unforgettable experiences.",
};

export default function TourPackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="tourpackage" />
      <PackageSec />
      <Achievement/>
    </main>
  );
}
