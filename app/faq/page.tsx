import SubBanner from "@/app/components/ui/subbanner";
import FaqSection from "@/app/components/layout/faq/faqsec";
import Achievement from "@/app/components/ui/achievement";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="faq" />
      <FaqSection />
      <Achievement />
    </main>
  );
}
