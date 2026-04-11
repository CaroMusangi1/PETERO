import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero.jpeg";

function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center bg-navy overflow-hidden">

      {/* Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center p-0 sm:p-2">
        <img
          src={heroImg}
          alt="Petero Msanii"
          className="w-full h-full object-cover sm:object-contain object-center"
        />
      </div>

      {/* Cinematic Overlay (UNCHANGED) */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/90" />

      {/* Text Content (ONLY TEXT COLOR CHANGED) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 max-w-3xl px-4 sm:px-6 flex flex-col items-center text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-black">
          <span className="block">Petero Msanii</span>

          <span className="block text-lg sm:text-2xl md:text-4xl font-medium mt-2 sm:mt-4 text-black">
            Bringing Stories to Life Through Every Character
          </span>
        </h1>

        <p className="text-black text-base sm:text-lg mb-6">
          A versatile entertainer, actor and storyteller delivering unforgettable performances.
        </p>
      </motion.div>
    </div>
  );
}

export default HeroSection;