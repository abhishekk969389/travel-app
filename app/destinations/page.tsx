import SubBanner from "@/app/components/ui/subbanner";
import DestinationSec from "@/app/components/layout/destinations/destinationsec";
import Achievement from "@/app/components/ui/achievement";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="destinations" />
      <DestinationSec />
      <Achievement />
    </main>
  );
}
