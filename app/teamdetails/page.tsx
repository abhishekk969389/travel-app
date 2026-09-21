import SubBanner from "@/app/components/ui/subbanner";
import TeamProfileCard from "@/app/components/layout/teamdetails/teamprofilecard";
import TeamAboutSec from "@/app/components/layout/teamdetails/teamaboutsec";
import TeamMomentsSec from "@/app/components/layout/teamdetails/teammomentssec";
import Achievement from "@/app/components/ui/achievement";
import { site as travelData } from "@/data/index";
import type { TravelTeamData } from "@/data/index";

interface TeamDetailsPageProps {
  searchParams?: Promise<{ id?: string; slug?: string }>;
}

export default async function TeamDetailsPage({ searchParams }: TeamDetailsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const memberId = resolvedSearchParams.id;
  const memberSlug = resolvedSearchParams.slug;

  const teamData: TravelTeamData = travelData.team;
  const members = teamData.members;

  // Find member by ID or slug, default to first member (Janny Willson / team-1)
  const member =
    members.find(
      (m) =>
        (memberId && m.id === memberId) ||
        (memberSlug && m.slug === memberSlug)
    ) || members[0];

  return (
    <section className="min-h-screen">
      <SubBanner pageKey="teamdetails" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4">
            <TeamProfileCard member={member} />
          </div>
          <div className="lg:col-span-8">
            <TeamAboutSec member={member} />
          </div>
        </div>
        <TeamMomentsSec member={member} />
      </div>
      <Achievement />
    </section>
  );
}
