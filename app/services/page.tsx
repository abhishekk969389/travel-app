import SubBanner from "@/app/components/ui/subbanner";
import ServiceSec from "@/app/components/layout/services/servicesec";
import Achievement from "../components/ui/achievement";

export const metadata = {
  title: "Services | TripNexa",
  description: "Explore our premium travel services at TripNexa.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="services" />
      <ServiceSec />
      <Achievement/>
    </main>
  );
}

