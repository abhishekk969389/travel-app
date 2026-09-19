import SubBanner from "@/app/components/ui/subbanner";
import PartnerSection from "@/app/components/layout/partners/partnersec";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Our Travel Partners | TripNexa",
  description: "Explore our trusted global travel partners including premier airlines, luxury hotels, and tour operators across the world.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="partners" />
      <PartnerSection />
      <Achievement />
    </main>
  );
}
