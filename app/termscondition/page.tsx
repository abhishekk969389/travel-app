import SubBanner from "@/app/components/ui/subbanner";
import TermsSec from "@/app/components/layout/termscondition/termssec";

export default function TermsConditionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="termscondition" />
      <TermsSec />
    </main>
  );
}
