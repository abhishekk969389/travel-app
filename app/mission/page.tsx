import SubBanner from "@/app/components/ui/subbanner";
import MissionSec from "@/app/components/layout/mission/missionsec";
import Achievement from "../components/ui/achievement";

export const metadata = {
  title: "Mission & Vision | TripNexa",
  description: "Learn about our vision and mission at TripNexa.",
};

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="mission" />
      <MissionSec />
      <Achievement/>
    </main>
  );
}
