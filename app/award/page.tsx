import SubBanner from "@/app/components/ui/subbanner";
import AwardSection from "@/app/components/layout/award/awardsection";
import Achievement from "../components/ui/achievement";


export default function AwardPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="award" />
      <AwardSection />
      <Achievement/>
    </main>
  );
}
