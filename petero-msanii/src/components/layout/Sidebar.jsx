import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Brand Ambassador", path: "/brand-ambassador" },
  { name: "Master of Ceremonies", path: "/mc" },
  { name: "Collaborations", path: "/collaborations" },
  { name: "Rate Card", path: "/rate-card" },
  { name: "Contact & Book", path: "/contact" },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col fixed w-64 h-full bg-navy p-6">
      <h1 className="text-2xl font-bold text-gold mb-10">
        PETERO MSANII
      </h1>

      <nav className="flex flex-col gap-5">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `transition duration-300 hover:text-gold ${
                isActive ? "text-gold font-semibold" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;