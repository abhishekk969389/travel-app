import SubBanner from "@/app/components/ui/subbanner";
import PrivacySec from "@/app/components/layout/privacypolicy/privacysec";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="privacypolicy" />
      <PrivacySec />
    </main>
  );
}
