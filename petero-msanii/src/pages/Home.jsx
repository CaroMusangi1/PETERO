import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Carousel from "../components/media/Carousel";
import Footer from "../components/ui/Footer";
import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import characters from "../data/characters";

function Home() {
  const homeCharacters = characters.filter(c => c.type === "character");

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <HeroSection />

      {/* TRENDING BUTTON (FIXED NO OVERLAP) */}
      <div className="w-full flex justify-center py-8">
        <Link
          to="/achievements#kiithio"
          className="bg-gold text-black px-6 py-3 rounded-full font-semibold text-base
                     hover:scale-105 hover:shadow-lg hover:shadow-gold transition duration-300"
        >
          Click to See Trending
        </Link>
      </div>

      {/* SOCIAL MEDIA */}
      <section className="pt-10 pb-6 text-center px-4">
        <h2 className="text-3xl font-bold text-gold mb-8">
          Connect With Petero
        </h2>

        <div className="flex flex-wrap justify-center gap-8 items-center">

          <a
            href="https://www.youtube.com/@peteromsanii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full">
              <FaYoutube size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">YouTube</span>
          </a>

          <a
            href="https://www.facebook.com/@PeteroMsanii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full">
              <FaFacebook size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">Facebook</span>
          </a>

          <a
            href="https://www.tiktok.com/@peteromsanii1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full">
              <FaTiktok size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">TikTok</span>
          </a>

        </div>

        <div className="mt-6 text-gray-400 text-sm">
          👍 Like &nbsp;&nbsp; 💬 Comment &nbsp;&nbsp; 🔗 Share
        </div>
      </section>

      {/* CHARACTERS */}
      <section className="pt-10 pb-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gold text-center mb-10">
          Characters
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {homeCharacters.map((char, index) => (
            <div
              key={index}
              className="bg-navy p-4 rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-gold mb-2">
                {char.name}
              </h3>

              <p className="text-gray-300 text-sm mb-3">
                {char.description}
              </p>

              <Carousel images={char.images} />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;