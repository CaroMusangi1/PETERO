import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero.jpeg";

function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center bg-navy overflow-hidden">
      
      {/* Image Wrapper (Centered & Contained, responsive) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroImg}
          alt="Petero Msanii"
          className="w-full max-w-full h-full max-h-screen object-contain"
        />
      </div>

      {/* Side Navy Blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />

      {/* Bottom Navy Blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/90" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="relative z-10 max-w-3xl px-4 sm:px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-black">
          <span className="block">Petero Msanii</span>
          <span className="block text-lg sm:text-2xl md:text-4xl font-medium mt-2 sm:mt-4">
            Bringing Stories to Life Through Every Character
          </span>
        </h1>

        <p className="text-black text-base sm:text-lg mb-4 sm:mb-6">
          A versatile entertainer, actor and storyteller delivering unforgettable performances.
        </p>

        <span className="bg-gold text-black px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold text-sm sm:text-base">
          COMING SOON
        </span>
      </motion.div>
    </div>
  );
}

export default HeroSection;