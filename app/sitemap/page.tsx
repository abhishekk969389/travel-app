import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import SitemapSec from "@/app/components/layout/sitemap/sitemapsec";

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="sitemap" />
      <SitemapSec />
    </main>
  );
}

