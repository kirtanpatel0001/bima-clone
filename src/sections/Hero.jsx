import { motion, useReducedMotion } from "framer-motion";
import heroVideo from "../assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm";

// Motion variants moved outside the component to avoid re-creating them on each render
const textContainer = {
  hidden: {},
  show: {
    transition: {
      // slightly larger stagger for a smooth, readable entrance
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

// slide in from the right using translateX for GPU-accelerated transforms
const textItem = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.9 },
  },
};

export default function Hero() {

  const shouldReduce = useReducedMotion();

  return (
  <section className="relative min-h-screen flex items-center bg-[#000319] text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2 w-full text-left"
          variants={textContainer}
          initial={shouldReduce ? "show" : "hidden"}
          animate="show"
          style={{ willChange: "transform" }}
        >
          <motion.h1
            variants={textItem}
            className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", willChange: "transform" }}
          >
            Turning Business into <span className="text-purple-400">AI-Powered Machine.</span>
          </motion.h1>

          <motion.p variants={textItem} className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed" style={{ willChange: "transform" }}>
            A result-focused design partner to help you <span className="text-white font-semibold">automate workflows</span>, <span className="text-white font-semibold">optimize operations</span>, and scale faster with <span className="text-white font-semibold">AI solutions</span>.
          </motion.p>

          {/* CTA */}
          <motion.div variants={textItem} className="mt-10" style={{ willChange: "transform" }}>
            <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold transition-transform">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
              Get a Free AI Strategy Session
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Circular video effect */}
        <div className="md:w-1/2 w-full relative flex justify-center items-center">
          {/* Rectangular, responsive video (removed circular mask and center hole) */}
            <div className="relative w-full max-w-none mx-auto flex justify-end">
              <div className="relative right-[-192px] w-[640px] sm:w-[896px] md:w-[1120px]  lg:w-[1152px] overflow-visible transform translate-x-6 md:translate-x-12 lg:translate-x-20">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-video w-[1120px] h-[630px] object-contain"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
