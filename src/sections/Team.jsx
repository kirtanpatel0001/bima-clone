import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import img1 from "../assets/CEO2.jpg";
import img2 from "../assets/MD.jpg";
import img3 from "../assets/jenil.jpg";
import img4 from "../assets/JEEEEEEL.jpg";

export default function Team() {
  const shouldReduce = useReducedMotion();

  const containerVariant = shouldReduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.32,
            delayChildren: 0.06,
          },
        },
      };

  const cardVariant = shouldReduce
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.99 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const people = [
    { name: "Divyesh Ramoliya", role: "CEO", img: img1, linkedin: "#", insta: "#" },
    { name: "Prince Patoliya", role: "MD", img: img2, linkedin: "#", insta: "#" },
    { name: "Jenil Khachariya", role: "CFO", img: img3, linkedin: "#", insta: "#" },
    { name: "Jeel Dholariya", role: "CTO", img: img4, linkedin: "#", insta: "#" },
  ];

  return (
    <section className="relative bg-[#000319] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Decorative left vignette */}
      <div className="hidden md:block absolute -left-40 -top-28 w-[320px] sm:w-[420px] md:w-[520px] h-[320px] sm:h-[420px] md:h-[520px] rounded-full bg-gradient-to-br from-[#0f1226] via-[#0b0820] to-transparent opacity-70 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300">
                Founder
              </span>
            </h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
        >
          {people.map((p) => (
            <motion.div
              key={p.name}
              variants={cardVariant}
              className="relative rounded-3xl overflow-hidden border border-white/6 bg-gradient-to-b from-white/3 to-transparent"
            >
              <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[520px] bg-[#0b0e1a] relative group">
                <img
                  src={p.img}
                  loading="lazy"
                  decoding="async"
                  alt={p.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center bg-black/0 transition-all duration-300 ${
                    shouldReduce ? "" : "md:group-hover:bg-black/40"
                  } md:backdrop-blur-0` + (shouldReduce ? "" : " md:group-hover:backdrop-blur-sm")}
                >
                  <div
                    className={`opacity-0 transform translate-y-2 transition-all duration-300 ${
                      shouldReduce ? "opacity-100 translate-y-0" : "group-hover:opacity-100 group-hover:translate-y-0"
                    } text-center px-4`}
                  >
                    <div className="text-sm sm:text-base text-gray-300 mb-2">{p.role}</div>
                    <div className="flex gap-4 justify-center">
                      <a
                        href={p.linkedin}
                        aria-label={`${p.name} LinkedIn`}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5Z" fill="white" />
                          <path d="M6 8H0V24H6V8Z" fill="white" />
                          <path
                            d="M24 24H18V15.6C18 12.9 16.6 11.4 14.3 11.4C12.6 11.4 11.6 12.3 11.3 13.1C11.1 13.5 11 14.2 11 14.9V24H5V8H11V10.6C11.8 9.5 13.3 8 15.9 8C19.8 8 24 10.4 24 16V24Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 z-20">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">{p.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
