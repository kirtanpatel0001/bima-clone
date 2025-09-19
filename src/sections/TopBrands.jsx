import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  { id: 1, eyebrow: '[ PROVEN RESULTS ]', title: '200+ students successfully trained', img: '/src/assets/CARRERR.jpg' },
  { id: 2, eyebrow: '[ Seamless Learning ]', title: "Blended online + offline classes.", img: '/src/assets/COURSES.jpeg' },
  { id: 3, eyebrow: '[ Tailored Curriculum ]', title: 'Courses designed for real-world jobs', img: '/src/assets/ONLINE OFFLINE.webp' },
  { id: 4, eyebrow: '[ Ongoing Support ]', title: 'Career guidance & placement assistance.', img: '/src/assets/STUDNET.jpg' },
];

const logos = [
  '/src/assets/LOGO1.webp',
  '/src/assets/LOGO2.png',
  '/src/assets/LOGO2.svg',
  '/src/assets/LOGO3.png',
  '/src/assets/LOGO4.png',
  '/src/assets/LOGO6.png',
  '/src/assets/LOGO7.png',
  '/src/assets/LOGO8.png',
  '/src/assets/LOGO9.png',
  '/src/assets/LOGO10.png',
  '/src/assets/LOGO11.png',
  '/src/assets/LOGO55.jpg',
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.25, duration: 3, delay: i * 0.18 },
  }),
};

export default function TopBrands() {
  const containerRef = useRef(null);

  return (
    <section className="relative py-16 bg-[#030417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-8 font-extrabold py-8 text-center">
          Why Top Brands{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
            Trust Us
          </span>
        </h2>

        {/* Feature Cards */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, rotate: 1.5, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative rounded-3xl overflow-hidden p-6 sm:p-8 md:p-10 min-h-[400px] bg-white/6 backdrop-blur-md border border-white/8 shadow-[0_24px_60px_rgba(2,6,23,0.6)] group flex flex-col items-center text-center"
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-full blur-2xl z-0"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.15 }}
                aria-hidden={true}
              />

              <div className="relative z-20">
                <div className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase mb-3">{f.eyebrow}</div>
                <motion.img
                  src={f.img}
                  alt={f.title}
                  className="w-40 h-40 sm:w-52 sm:h-52 object-contain mb-6 drop-shadow-xl"
                  initial={{ scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.18 }}
                />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {f.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="mt-12 w-full relative">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-28 pointer-events-none" style={{ background: 'linear-gradient(90deg,#030417,transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-16 sm:w-28 pointer-events-none" style={{ background: 'linear-gradient(270deg,#030417,transparent)' }} />

          <div className="overflow-hidden w-full">
            <motion.div
              className="flex w-[200%] items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 120 }}
              style={{ willChange: 'transform' }}
              aria-hidden={true}
            >
              {[...logos, ...logos].map((src, i) => (
                <div key={`${src}-${i}`} className="flex items-center justify-center px-4 sm:px-6">
                  <img src={src} alt="brand logo" className="h-8 sm:h-12 lg:h-20 object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
