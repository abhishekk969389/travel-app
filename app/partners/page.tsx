import SubBanner from "@/app/components/ui/subbanner";
import PartnerSection from "@/app/components/layout/partners/partnersec";
import Achievement from "@/app/components/ui/achievement";


export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="partners" />
      <PartnerSection />
      <Achievement />
    </main>
  );
}
