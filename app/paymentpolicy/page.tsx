import SubBanner from "@/app/components/ui/subbanner";
import PaymentSec from "@/app/components/layout/paymentpolicy/paymentsec";

export const metadata = {
  title: "Payment Policy | TripNexa",
  description:
    "Review TripNexa's accepted payment methods, security standards, and billing terms.",
};

export default function PaymentPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="paymentpolicy" />
      <PaymentSec />
    </main>
  );
}
