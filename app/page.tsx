import AboutSection from "./aboutus";
import Banner from "./banner";
import Destinations from "./destinations";
import Packages from "./packages";
import WhyChoose from "./whychoose";
import Achievement from "./achievement";
import Blog from "./blog";

export default function Home() {
  return (
    <main>
      <Banner />
      <Destinations />
      <Packages />
      <WhyChoose />
      <Achievement />
      <Blog />
    </main>
  );
}

