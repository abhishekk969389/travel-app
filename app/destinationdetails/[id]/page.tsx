import SubBanner from "@/app/components/ui/subbanner";
import DestinationDetailsSec from "@/app/components/layout/destinationdetails/destinationdetailsec";
import Achievement from "@/app/components/ui/achievement";
import { site as travelData } from "@/data/index";
import { notFound } from "next/navigation";

interface DestinationDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailsPage({ params }: DestinationDetailsPageProps) {
  const resolvedParams = await params;
  const destinationId = resolvedParams.id;

  // Find destination from domestic or international lists
  const domesticList = travelData.destinationsPage.domesticDestinations;
  const internationalList = travelData.destinationsPage.internationalDestinations;
  
  const allDestinations = [...domesticList, ...internationalList];
  
  const destination = allDestinations.find((d) => d.id === destinationId);

  if (!destination) {
    notFound();
  }

  return (
    <section>
      <SubBanner pageKey="destinationdetails" />
      <DestinationDetailsSec destination={destination} labels={(travelData.destinationsPage as any).detailLabels} />
      <div className="">
        <Achievement />
      </div>
    </section>
  );
}
