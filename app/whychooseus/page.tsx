import SubBanner from "@/app/components/ui/subbanner";
import WhyChoose from "@/app/components/layout/whychooseus/whychoose";
import Achievement from "@/app/components/ui/achievement";
import Packages from "../components/homelayout/packages";


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
