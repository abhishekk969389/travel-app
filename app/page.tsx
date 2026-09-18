import Banner from "./components/homelayout/banner";
import AboutSection from "./components/homelayout/aboutus";
import Destinations from "./components/homelayout/destinations";
import Packages from "./components/homelayout/packages";
import WhyChoose from "./components/homelayout/whychoose";
import Achievement from "./components/ui/achievement";
import Blog from "./components/homelayout/blog";

export default function Home() {
  return (
    <main>
      <Banner />
      <Destinations />
      <AboutSection />
      <Packages />
      <WhyChoose />
      <Achievement />
      <Blog />
    </main>
  );
}

