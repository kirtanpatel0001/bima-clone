import React from 'react';

import { motion } from 'framer-motion';
import TechStackCard from './TechStackCard';


// MANUAL DATA ENTRY: Add/edit your tech stack here
const techs = [
  {
    label: 'OPENAI',
    number: 1,
    angle: -15,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#fff" strokeWidth="4" opacity="0.12"/><path d="M32 16a16 16 0 1 1 0 32 16 16 0 0 1 0-32z" stroke="#fff" strokeWidth="2" opacity="0.5"/></svg>
    ),
  },
  {
    label: 'ZAPIER',
    number: 2,
    angle: -12,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#fff" strokeWidth="4" opacity="0.12"/><path d="M32 20v24M20 32h24M25 25l14 14M25 39l14-14" stroke="#fff" strokeWidth="2" opacity="0.5"/></svg>
    ),
  },
  {
    label: 'AIRTABLE',
    number: 3,
    angle: -9,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="12" y="28" width="40" height="20" rx="4" fill="#fff" opacity="0.08"/><rect x="20" y="16" width="24" height="16" rx="4" fill="#fff" opacity="0.18"/></svg>
    ),
  },
  {
    label: 'LANGCHAIN',
    number: 4,
    angle: -6,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><ellipse cx="44" cy="32" rx="8" ry="12" fill="#fff" opacity="0.08"/><ellipse cx="24" cy="32" rx="8" ry="12" fill="#fff" opacity="0.08"/><path d="M36 32h8M20 32h8" stroke="#fff" strokeWidth="2" opacity="0.5"/></svg>
    ),
  },
  {
    label: 'PYTHON',
    number: 5,
    angle: -3,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="16" y="16" width="32" height="32" rx="8" fill="#fff" opacity="0.08"/><path d="M24 32h16M32 24v16" stroke="#fff" strokeWidth="2" opacity="0.5"/></svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 bg-[#090B1A] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-2 leading-tight">
          Our<span className="text-gradient ml-2">Tech</span><br />Stack
        </h2>
        <motion.div
          className="mt-16 flex flex-row items-end justify-center gap-[-32px] md:gap-[-48px] relative z-10"
          style={{ gap: 0 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
        >
          {techs.map((t, i) => (
            <motion.div
              key={t.label}
              className="-ml-16 first:ml-0 last:mr-0"
              style={{ zIndex: 10 - i }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i < techs.length / 2 ? -120 : 120,
                  scale: 0.92,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 60,
                    damping: 16,
                  },
                },
              }}
            >
              <TechStackCard
                icon={t.icon}
                label={t.label}
                number={t.number}
                angle={t.angle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
  