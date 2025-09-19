import pythonImg from '../assets/python.jpeg';
import tensorflowImg from '../assets/tenserflow.jpeg';
import ethereumImg from '../assets/ethereum.png';
import kaliImg from '../assets/kali.png';
import githubImg from '../assets/github.png';

import { motion } from 'framer-motion';
import TechStackCard from './TechStackCard';

const techs = [
  { label: 'PYTHON', number: 1, angleX: 0, angleY: -30, icon: <img src={pythonImg} alt="Python logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border-2 border-white shadow-lg bg-white" loading="lazy" />, posX: 0, posY: 0 },
  { label: 'TENSORFLOW', number: 2, angleX: 0, angleY: -30, icon: <img src={tensorflowImg} alt="TensorFlow logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border-2 border-white shadow-lg bg-white" loading="lazy" />, posX: 0, posY: -25 },
  { label: 'ETHEREUM', number: 3, angleX: 0, angleY: -30, icon: <img src={ethereumImg} alt="Ethereum logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border-2 border-white shadow-lg bg-white" loading="lazy" />, posX: 0, posY: -65 },
  { label: 'KALI LINUX', number: 4, angleX: 0, angleY: -30, icon: <img src={kaliImg} alt="Kali Linux logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border-2 border-white shadow-lg bg-white" loading="lazy" />, posX: 0, posY: -95 },
  { label: 'GIT & GITHUB', number: 5, angleX: 0, angleY: -30, icon: <img src={githubImg} alt="GitHub logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-full border-2 border-white shadow-lg bg-white" loading="lazy" />, posX: 0, posY: -125 },
];

export default function TechStack() {
  return (
    <section className="relative py-20 md:py-32 bg-[#090B1A] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-center md:text-left">
          Our
          <span className="text-gradient ml-2">Tech</span>
          <br className="hidden md:block" />
          Stack
        </h2>

        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center md:flex-nowrap md:items-end gap-6 md:gap-0 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
        >
          {techs.map((t, i) => (
            <motion.div
              key={t.label}
              className="flex-shrink-0 md:-ml-16 first:ml-0 last:mr-0"
              style={{ zIndex: 10 - i }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i < techs.length / 2 ? -80 : 80,
                  scale: 0.92,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 60, damping: 16 },
                },
              }}
            >
              <TechStackCard
                icon={t.icon}
                label={t.label}
                number={t.number}
                angleX={t.angleX}
                angleY={t.angleY}
                posX={t.posX}
                posY={t.posY}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
