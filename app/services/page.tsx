import SubBanner from "@/app/components/ui/subbanner";
import ServiceSec from "@/app/components/layout/services/servicesec";
import Achievement from "../components/ui/achievement";


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="services" />
      <ServiceSec />
      <Achievement/>
    </main>
  );
}

