import { motion } from "framer-motion";

export default function Footer({ emailSize = 'text-2xl md:text-3xl' }) {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-gray-300 pt-12 pb-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.02)', background: '#050217' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* left labels */}
          <div className="md:col-span-2 flex flex-col gap-6 text-sm text-gray-500">
            <div className="uppercase tracking-widest">[ CALL US ]</div>
            <div className="uppercase tracking-widest">[ MAIL US ]</div>
          </div>

          {/* center contact */}
          <div className="md:col-span-5">
                <p className="text-sm text-gray-400 mb-2">+1234567890</p>
    <motion.h2
      className={`${emailSize} font-light leading-tight whitespace-normal md:whitespace-nowrap`}
              style={{
                background: 'linear-gradient(90deg,#ffffff 0%, #b19fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
                  whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              skillcodeai.institute@gmail.com
            </motion.h2>
          </div>

          {/* right navigation & follow lists */}
          <div className="md:col-span-5 flex flex-col md:flex-row md:justify-end gap-8 text-left">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">[ NAVIGATION ]</div>
              <ul className="space-y-3 text-white">
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Home</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>success-stories</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>courses</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Contact</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Blog</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>404</motion.a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">[ FOLLOW US ]</div>
              <ul className="space-y-3 text-white">
                <li>
                  <motion.a href="#" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>X/Twitter</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Instagram</motion.a>
                </li>
                <li>
                  <motion.a href="#" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>LinkedIn</motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SKILL CODE AI. All rights reserved.</p>
        </div>
      </div>
  </motion.footer>
  );
}

