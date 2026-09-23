import SubBanner from "@/app/components/ui/subbanner";
import PaymentSec from "@/app/components/layout/paymentpolicy/paymentsec";


export default function PaymentPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="paymentpolicy" />
      <PaymentSec />
    </main>
  );
}
