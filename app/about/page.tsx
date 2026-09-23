import SubBanner from "@/app/components/ui/subbanner";
import AboutUs from "@/app/components/homelayout/aboutus";
import OurStory from "@/app/components/layout/about/ourstory";
import Achievement from "../components/ui/achievement";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="about" />
      <div>
        <AboutUs showCta={false} />
        <OurStory />
        <Achievement/>
      </div>
    </main>
  );
}
