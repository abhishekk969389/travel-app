import SubBanner from "@/app/components/ui/subbanner";
import MissionSec from "@/app/components/layout/mission/missionsec";
import Achievement from "../components/ui/achievement";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="mission" />
      <MissionSec />
      <Achievement/>
    </main>
  );
}
