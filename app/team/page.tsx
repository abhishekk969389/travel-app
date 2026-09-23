import SubBanner from "@/app/components/ui/subbanner";
import TeamSec from "@/app/components/layout/team/teamsec";
import Achievement from "@/app/components/ui/achievement";


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="team" />
      <TeamSec />
      <Achievement />
    </main>
  );
}
