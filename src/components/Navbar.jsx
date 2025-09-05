import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 left-0 bg-transparent backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <Link to="/">
          <img src={logo} alt="Bima logo" className="h-16 object-contain" />
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/success-stories" className="nav-link">Success Stories</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/services" className="nav-link">Course</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block px-5 py-2 rounded-xl bg-cta-gradient text-white shadow-cta hover:scale-105 transition-transform">
            Work with Us
          </button>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 border border-white/10 rounded">
            <span className="sr-only">Toggle menu</span>
            <div className={`w-5 h-0.5 bg-white mb-1 ${open ? 'rotate-45 translate-y-1' : ''}`} />
            <div className={`w-5 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white mt-1 ${open ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>

        {/* Mobile nav overlay */}
        {open && (
          <div className="absolute left-0 right-0 top-full bg-[#000319]/95 backdrop-blur-md p-6 md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setOpen(false)} className="nav-link">Home</Link>
              <a href="#features" onClick={() => setOpen(false)} className="nav-link">Features</a>
              <Link to="/success-stories" onClick={() => setOpen(false)} className="nav-link">Success Stories</Link>
              <Link to="/services" onClick={() => setOpen(false)} className="nav-link">Services</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="nav-link">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
