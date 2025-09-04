import { motion } from "framer-motion";
import logo from "../assets/LOGO.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
  className="fixed w-full top-0 left-0 bg-transparent backdrop-blur-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
  <img src={logo} alt="Bima logo" className="h-20 object-contain" />
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#features" className="nav-link">Features</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        <button className="px-5 py-2 rounded-xl bg-cta-gradient text-white shadow-cta hover:scale-105 transition-transform">
            Work with Us
        </button>
      </div>
    </motion.nav>
  );
}
