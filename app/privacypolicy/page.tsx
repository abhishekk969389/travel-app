import SubBanner from "@/app/components/ui/subbanner";
import PrivacySec from "@/app/components/layout/privacypolicy/privacysec";

export const metadata = {
  title: "Privacy Policy | TripNexa",
  description:
    "Learn about how TripNexa collects, protects, and uses your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="privacypolicy" />
      <PrivacySec />
    </main>
  );
}
