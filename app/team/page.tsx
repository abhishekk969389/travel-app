import SubBanner from "@/app/components/ui/subbanner";
import TeamSec from "@/app/components/layout/team/teamsec";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Meet Our Team | TripNexa",
  description: "Meet our passionate team of travel professionals and expert tourist guides at TripNexa.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="team" />
      <TeamSec />
      <Achievement />
    </main>
  );
}
