// src/pages/Home.jsx
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import SocialLinks from "../components/ui/SocialLinks"; 
import Carousel from "../components/media/Carousel";
import Footer from "../components/ui/Footer";
import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SOCIAL MEDIA SECTION */}
      <section className="pt-16 pb-6 text-center">
        <h2 className="text-3xl font-bold text-gold mb-8">
          Connect With Petero
        </h2>

        <div className="flex flex-row justify-center gap-10 items-center">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/yourchannel" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300">
              <FaYoutube size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">YouTube</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourpage" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300">
              <FaFacebook size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">Facebook</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@yourprofile" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-navy p-5 rounded-full hover:shadow-lg hover:shadow-gold transition duration-300">
              <FaTiktok size={28} />
            </div>
            <span className="text-sm mt-2 text-gray-300">TikTok</span>
          </a>
        </div>

        {/* LIKE COMMENT SHARE LINE */}
        <div className="mt-6 text-gray-400 text-sm">
          👍 Like &nbsp;&nbsp; 💬 Comment &nbsp;&nbsp; 🔗 Share
        </div>
      </section>

      {/* CHARACTER CAROUSEL */}
      <section className="pt-4 pb-16">
        <Carousel />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;