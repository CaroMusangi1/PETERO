import HeroSection from "../components/ui/HeroSection";
import SocialLinks from "../components/ui/SocialLinks";
import Carousel from "../components/media/Carousel";

function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <SocialLinks />
      <Carousel />
    </div>
  );
}

export default Home;