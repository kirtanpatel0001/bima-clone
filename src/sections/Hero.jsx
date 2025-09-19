import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm";

// Motion variants outside to avoid recreation on every render
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

// ✅ Use vertical animation (y) instead of horizontal (x) to prevent overflow
const textItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.9 },
  },
};

function Hero() {
  const shouldReduce = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-[#000319] text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          variants={textContainer}
          initial={shouldReduce ? "show" : "hidden"}
          animate="show"
        >
          <motion.h1
            variants={textItem}
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-tight tracking-tight"
          >
            Turning Students into{" "}
            <span className="text-purple-400">Future-Ready Tech Leaders</span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            A next-gen institute helping you master{" "}
            <span className="text-white font-semibold">AI, Cybersecurity & Blockchain</span>{" "}
            with hands-on{" "}
            <span className="text-white font-semibold">industry projects</span>,{" "}
            and personalized{" "}
            <span className="text-white font-semibold">career guidance</span>.
          </motion.p>

          {/* CTA */}
          <motion.div variants={textItem} className="mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-transform mx-auto md:mx-0"
              onClick={() => navigate('/contact')}
            >
              Get a Free AI Learning Session
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Video */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center order-1 md:order-2">
          <div className="relative w-full flex justify-center md:justify-end">
            {/* ✅ Removed translate-x classes that caused overflow */}
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl md:right-[-400px]">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="hero-video w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
