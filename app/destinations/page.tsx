import SubBanner from "@/app/components/ui/subbanner";
import DestinationSec from "@/app/components/layout/destinations/destinationsec";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Top Destinations | TripNexa",
  description: "Explore handpicked domestic and international destinations around the globe with TripNexa.",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="destinations" />
      <DestinationSec />
      <Achievement />
    </main>
  );
}
