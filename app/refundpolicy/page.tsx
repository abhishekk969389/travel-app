import SubBanner from "@/app/components/ui/subbanner";
import RefundSec from "@/app/components/layout/refundpolicy/refund";


export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="refundpolicy" />
      <RefundSec />
    </main>
  );
}
