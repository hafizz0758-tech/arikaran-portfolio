import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Hexagon } from "lucide-react";

const links = [
  ["Home", "/"], ["About", "/about"], ["Projects", "/projects"],
  ["Skills", "/skills"], ["Articles", "/articles"], ["Profiles", "/coding-profiles"], ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={close} aria-label="Arikaran home">
          <span className="brand-mark"><Hexagon size={19} strokeWidth={1.8} /></span>
          <span>arikaran<span className="brand-dot">.</span></span>
        </Link>
        <div className="desktop-nav">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              {({ isActive }) => <>{label}{isActive && <motion.span className="nav-underline" layoutId="nav-underline" />}</>}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="nav-cta">Let's talk <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            {links.map(([label, path], i) => (
              <motion.div key={path} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035 }}>
                <NavLink to={path} end={path === "/"} onClick={close} className={location.pathname === path ? "active" : ""}>{label}</NavLink>
              </motion.div>
            ))}
            <Link to="/contact" onClick={close} className="mobile-talk">Let's talk <ArrowUpRight size={16} /></Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
