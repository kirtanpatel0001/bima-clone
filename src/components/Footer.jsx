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

          {/* center contact: use same vertical spacing as left labels so items line up */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="text-sm text-gray-400"> +91 91047 57776</p>
            {/* Plain email (no animation), same size as the number */}
            <p className="text-1xl text-gray-400">skillcodeai.institute@gmail.com</p>
          </div>

          {/* right navigation & follow lists */} 
          <div className="md:col-span-5 flex flex-col md:flex-row md:justify-end gap-8 text-left">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">[ NAVIGATION ]</div>
              <ul className="space-y-3 text-white">
                <li>
                  <motion.a href="/home" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Home</motion.a>
                </li>
                
                <li>
                  <motion.a href="/services" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Courses</motion.a>
                </li>
                <li>
                  <motion.a href="/contact" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Contact</motion.a>
                </li>
                <li>
                  <motion.a href="/blog" className="nav-link pb-1" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Blog</motion.a>
                </li>
               
              </ul>
            </div>

            <div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">[ FOLLOW US ]</div>
              <ul className="space-y-3 text-white">
                <li>
                  <motion.a href="https://www.youtube.com/@SkillCode.AIInstitute" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>YouTube</motion.a>
                </li>
                <li>
                  <motion.a href="https://www.instagram.com/skillcodeai.institute/" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Instagram</motion.a>
                </li>
                <li>
                  <motion.a href="https://www.facebook.com/profile.php?id=61580257503079" className="nav-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Facebook</motion.a>
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

