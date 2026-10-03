import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <header className="nav">
        <NavLink to="/" className="brand" aria-label="Ranjit Nayak home">
          <span>RN</span>
          <b>RANJIT NAYAK</b>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-cta">
          Let&apos;s Create <ArrowUpRight size={15} />
        </Link>

        <button className="menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="close-menu" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X />
            </button>

            <div className="mobile-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <p>Photography · Film · Content</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
