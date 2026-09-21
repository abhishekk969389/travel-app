import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import SitemapSec from "@/app/components/layout/sitemap/sitemapsec";

export const metadata: Metadata = {
  title: "Sitemap — TripNexa",
  description: "Navigate through all the pages and sections of the TripNexa website with ease.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="sitemap" />
      <SitemapSec />
    </main>
  );
}

