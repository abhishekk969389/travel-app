import SubBanner from "@/app/components/ui/subbanner";
import WhyChoose from "@/app/components/layout/whychooseus/whychoose";
import Achievement from "@/app/components/ui/achievement";
import Packages from "../components/homelayout/packages";

export const metadata = {
  title: "Why Choose Us | TripNexa",
  description:
    "Discover why thousands of travelers choose TripNexa for authentic, safe, and unforgettable travel experiences.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="whychooseus" />
      <WhyChoose />
      <Achievement />
      <Packages/>
    </main>
  );
}
