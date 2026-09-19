import SubBanner from "@/app/components/ui/subbanner";
import TermsSec from "@/app/components/layout/termscondition/termssec";

export const metadata = {
  title: "Terms & Conditions | TripNexa",
  description:
    "Read the terms and conditions governing your use of TripNexa's travel services and website.",
};

export default function TermsConditionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="termscondition" />
      <TermsSec />
    </main>
  );
}
