import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Brand Ambassador", path: "/brand-ambassador" },
  { name: "Master of Ceremonies", path: "/mc" },
  { name: "Collaborations", path: "/collaborations" },
  { name: "Rate Card", path: "/rate-card" },
  { name: "Contact & Book", path: "/contact" },
];

function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-64 bg-navy p-6 z-50 shadow-xl"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold text-gold">
                  PETERO MSANII
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `transition duration-300 ${
                        isActive
                          ? "text-gold font-semibold"
                          : "text-white hover:text-gold"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileDrawer;