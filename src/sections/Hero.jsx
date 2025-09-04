import { motion } from "framer-motion";
import heroVideo from "../assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm";

export default function Hero() {
  return (
  <section className="min-h-screen flex items-center bg-transparent text-white px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left: text */}
        <div className="md:w-1/2 w-full text-left">
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight max-w-full" style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="block">Turning Students into</span>
            <span className="block text-gradient">Future-Ready Tech Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-lg text-gray-400 max-w-xl"
          >
            A result-focused design partner to help you
            <strong> automate workflows, optimize operations</strong>, and
            scale faster with AI solutions.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            className="mt-10 px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg"
          >
            Get a Free AI Strategy Session
          </motion.button>
        </div>

        {/* Right: video/display area */}
        <div className="md:w-1/2 w-full flex items-center justify-end">
          <div className="w-full flex items-center justify-end relative overflow-visible pt-5">
            {/* Video only - no ring or glow; positioned on right with 20px top padding */}
                  {/* Visible clipping container: fixed visible area that prevents the page from expanding */}
                  <div className="absolute right-0 top-5 w-screen h-[70vw] md:w-[48rem] md:h-[48rem] overflow-hidden bg-transparent pointer-events-none">
                    {/* Large positioned inner video keeps its visual size but will be clipped by parent */}
                    <div className="fixed right-[-200px] top-[130px] w-[250vw] h-[250vw] md:w-[42rem] md:h-[42rem] pointer-events-none">
                      <video
                        src={heroVideo}
                        poster="/vite.svg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video blend-screen w-full h-full object-cover"
                      />
                    </div>
                    {/* Subtle gradient highlight overlay to match lighting in reference image */}
                    <div className="hero-video-overlay pointer-events-none" />
                  </div>
            </div>
        </div>
      </div>
    </section>
  );
}
