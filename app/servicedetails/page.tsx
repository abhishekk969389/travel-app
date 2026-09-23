
import SubBanner from "@/app/components/ui/subbanner";
import Achievement from "@/app/components/ui/achievement";
import ServiceDetailHero from "@/app/components/layout/servicedetails/servicedetailhero";
import ServiceDetailOverview from "@/app/components/layout/servicedetails/servicedetailoverview";
import { getServiceDetails } from "@/data/index";


interface PageProps {
  searchParams: Promise<{ id?: string; name?: string; slug?: string; title?: string }>;
}

export default async function ServiceDetailsPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const identifier =
    resolvedSearchParams?.name ||
    resolvedSearchParams?.slug ||
    resolvedSearchParams?.id ||
    resolvedSearchParams?.title ||
    '01';

  const serviceData = getServiceDetails(identifier);

  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="servicedetails" />
      <ServiceDetailHero data={serviceData} />
      <ServiceDetailOverview data={serviceData} />
      <Achievement />
    </main>
  );
}
