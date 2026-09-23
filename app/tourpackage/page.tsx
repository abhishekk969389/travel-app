import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import PackageSec from "@/app/components/layout/tourpackage/packagesec";
import Achievement from "../components/ui/achievement";


export default function TourPackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="tourpackage" />
      <PackageSec />
      <Achievement/>
    </main>
  );
}
