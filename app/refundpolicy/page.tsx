import SubBanner from "@/app/components/ui/subbanner";
import RefundSec from "@/app/components/layout/refundpolicy/refund";

export const metadata = {
  title: "Refund Policy | TripNexa",
  description:
    "Understand TripNexa's cancellation guidelines, refund timelines, and policies.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="refundpolicy" />
      <RefundSec />
    </main>
  );
}
