import HeroSection from "../components/ui/HeroSection";
import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";
import Carousel from "../components/media/Carousel";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* SOCIAL MEDIA SECTION */}
      <section className="pt-16 pb-6 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">
          Connect With Petero
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300"
          >
            <FaYoutube size={28} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300"
          >
            <FaTiktok size={28} />
          </a>
        </div>
      </section>

      {/* CHARACTER CAROUSEL */}
      <section className="pt-4 pb-16">
        <Carousel />
      </section>
    </>
  );
}

export default Home;