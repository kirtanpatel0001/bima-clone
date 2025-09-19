import React from 'react';
import aiImg from '../assets/ai.jpg';
import blockImg from '../assets/block.jpg';
import cyberImg from '../assets/cyber.jpg';
import mentorImg from '../assets/mentor.png';
import { motion } from 'framer-motion';

export default function Workflow() {

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const hoverTransition = { type: 'spring', stiffness: 300, damping: 20 };

  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#070612] via-[#050617] to-[#070519] text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
          <motion.div className="lg:col-span-2" variants={item}>
            <p className="mb-2 uppercase tracking-wider text-sm text-indigo-200">[ OUR SOLUTIONS ]</p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold" variants={item}>
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300">AI-Powered</span>
              <br />
              Workflow
            </motion.h2>
          </motion.div>
          <motion.div className="hidden lg:block text-right text-gray-300" variants={item}>
            <p className="max-w-xs ml-auto text-sm md:text-base">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" variants={container}>
          {/* Left: Large hero card */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden relative bg-gradient-to-b from-[#0b1222]/70 to-[#0b0f19]/60 border border-gray-700 p-6 sm:p-8 md:p-10 backdrop-blur-lg shadow-2xl flex flex-col md:flex-row items-center"
            variants={leftItem}
            whileHover={{ scale: 1.02 }}
            transition={hoverTransition}
          >
            <img
              src={aiImg}
              alt="AI & Machine Learning"
              className="w-full md:w-1/2 h-56 md:h-64 lg:h-72 object-cover rounded-xl shadow-lg mb-6 md:mb-0 md:mr-6 lg:mr-8"
              loading="lazy"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                Master algorithms, data models, and real-world AI applications through hands-on projects.
              </p>
            </div>
          </motion.div>

          {/* Top-right card */}
          <motion.div
            className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#0e1322]/60 to-[#0b0f19]/50 border border-gray-700 backdrop-blur-md shadow-lg flex flex-col items-center text-center"
            variants={rightItem}
            whileHover={{ scale: 1.02 }}
            transition={hoverTransition}
          >
            <img
              src={cyberImg}
              alt="Cybersecurity"
              className="w-full h-44 sm:h-52 md:h-56 lg:h-60 object-cover rounded-xl shadow-lg mb-4 sm:mb-5"
              loading="lazy"
              style={{ minWidth: '180px', maxWidth: '340px' }}
            />
            <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Cybersecurity</h4>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
              Learn to protect networks, prevent cyberattacks, and secure digital systems with advanced tools.
            </p>
          </motion.div>

          {/* Bottom-left card */}
          <motion.div
            className="rounded-xl p-5 sm:p-6 bg-gradient-to-b from-[#0e1322]/50 to-[#0b0f19]/40 border border-gray-700 backdrop-blur-md flex flex-col items-center text-center"
            variants={leftItem}
            whileHover={{ scale: 1.02 }}
            transition={hoverTransition}
          >
            <img
              src={blockImg}
              alt="Blockchain"
              className="w-full h-44 sm:h-52 md:h-56 lg:h-60 object-cover rounded-xl shadow-lg mb-3 sm:mb-4"
              loading="lazy"
              style={{ minWidth: '160px', maxWidth: '320px' }}
            />
            <h5 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Blockchain</h5>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
              Dive into decentralized systems, smart contracts, and blockchain development for the future of finance & tech.
            </p>
          </motion.div>

          {/* Bottom-right mentorship card */}
          <motion.div
            className="rounded-2xl p-6 sm:p-10 bg-gradient-to-b from-[#0e1322]/50 to-[#0b0f19]/40 border-2 border-indigo-500 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center text-center md:text-left md:col-span-2"
            variants={leftItem}
            whileHover={{ scale: 1.04 }}
            transition={hoverTransition}
          >
            <img
              src={mentorImg}
              alt="Career Mentorship"
              className="w-full md:w-2/5 h-44 sm:h-52 md:h-64 lg:h-72 object-cover rounded-xl shadow-lg mb-4 md:mb-0 md:mr-6 lg:mr-10"
              loading="lazy"
              style={{ minWidth: '180px', maxWidth: '340px' }}
            />
            <div className="flex-1">
              <h5 className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4">Career Mentorship</h5>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
                Get guidance from industry experts, resume support, and career assistance to land your dream job.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
