import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    eyebrow: '[ PROVEN RESULTS ]',
    title: '200+ businesses automated',
    img: '/src/assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif',
  },
  {
    id: 2,
    eyebrow: '[ SEAMLESS AI INTEGRATION ]',
    title: "Works with your existing tools",
    img: '/src/assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif',
  },
  {
    id: 3,
    eyebrow: '[ TAILORED FOR YOU ]',
    title: 'Custom AI solutions',
    img: '/src/assets/avatar.svg',
  },
  {
    id: 4,
    eyebrow: '[ ONGOING SUPPORT ]',
    title: 'We ensure your AI runs smoothly',
    img: '/src/assets/LOGO2.png',
  },
];

const logos = [
  '/src/assets/LOGO.png',
  '/src/assets/LOGO2.png',
  '/src/assets/avatar.svg',
  '/src/assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif',
  '/src/assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif',
  '/src/assets/LOGO.png',
  '/src/assets/LOGO2.png',
  '/src/assets/avatar.svg',
  '/src/assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif',
  '/src/assets/LOGO.png',
];

import { useRef } from 'react';

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 3,
      delay: i * 0.18,
    },
  }),
};

export default function TopBrands() {
  const containerRef = useRef(null);
  return (
    <section className="relative py-16 bg-[#030417]">
      <div className="max-w-7xl h-auto mx-auto px-6 w-full">
        <h2 className="text-5xl lg:text-6xl text-white mb-4 font-extrabold py-12">
          Why Top Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">Trust Us</span>
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="relative rounded-3xl overflow-hidden p-10 min-h-[460px] bg-white/6 backdrop-blur-md border border-white/8 shadow-[0_24px_60px_rgba(2,6,23,0.6)] group"
            >
              {/* Animated background blob */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-full blur-2xl z-0"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.15 }}
                aria-hidden={true}
              />

              <div className="absolute inset-0 pointer-events-none z-10" />

              <div className="text-xs text-gray-400 tracking-widest uppercase mb-4 z-20 relative">{f.eyebrow}</div>

              <div className="flex items-center justify-center mb-8 z-20 relative">
                <motion.img
                  src={f.img}
                  alt={f.title}
                  className="w-64 h-64 object-contain drop-shadow-xl"
                  initial={{ scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.18 }}
                />
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight z-20 relative">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 + i * 0.18 }}
                >
                  {f.title}
                </motion.span>
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Marquee / logo belt using framer-motion. Duplicate the logo list for seamless loop. Add gradient masks on sides for belt effect */}
        <div className="mt-12 w-full relative ">
          <div className="absolute left-0 top-0 h-full w-28 pointer-events-none" style={{ background: 'linear-gradient(90deg,#030417,transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-28 pointer-events-none" style={{ background: 'linear-gradient(270deg,#030417,transparent)' }} />

          <div className="overflow-hidden w-full">
            <motion.div
              className="flex w-[200%] items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 120 }}
              style={{ willChange: 'transform' }}
              aria-hidden={true}
            >
              {[...logos, ...logos].map((src, i) => (
                <div key={`${src}-${i}`} className="flex items-center justify-center px-8">
                  <img src={src} alt="brand logo" className="h-12 object-contain opacity-50 grayscale" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
