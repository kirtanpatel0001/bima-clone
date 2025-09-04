import { motion } from "framer-motion";
import heroVideo from "../assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm";

export default function Hero() {
  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050510] text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2 w-full text-left"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={textItem}
            className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Turning Business into{" "}
            <motion.span
              variants={textItem}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-yellow-400"
            >
              AI-Powered Machine.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            <motion.span variants={textItem} className="inline-block">
              A result-focused design partner to help you
            </motion.span>{" "}
            <motion.span variants={textItem} className="text-white font-semibold inline-block">
              automate workflows
            </motion.span>
            ,{" "}
            <motion.span variants={textItem} className="text-white font-semibold inline-block">
              optimize operations
            </motion.span>
            , and scale faster with{" "}
            <motion.span variants={textItem} className="text-white font-semibold inline-block">
              AI solutions
            </motion.span>
            .
          </motion.p>

          {/* CTA */}
          <motion.div variants={textItem} className="mt-10">
            <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg transition-transform">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              Get a Free AI Strategy Session
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Circular video effect */}
        <div className="md:w-1/2 w-full relative flex justify-center items-center">
          <div className="relative right-[-300px]  w-[50px] h-[50px] md:w-[50rem] md:h-[40rem] rounded-full overflow-hidden flex items-center justify-center isolate">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="hero-video w-full h-full object-contain bg-transparent mix-blend-screen opacity-90"
              style={{ backgroundColor: "transparent" }}
            />

            {/* Center 'hole' to simulate transparency (matches section bg) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div className="w-1/2 h-1/2 md:w-1/3 md:h-1/3 rounded-full bg-[#050510] shadow-[0_0_60px_rgba(5,5,10,0.6)]" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r 0 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
