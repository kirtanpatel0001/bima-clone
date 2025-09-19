import React, { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CheckIcon = memo(({ className = "w-5 h-5 text-indigo-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
));

const PlanCard = memo(function PlanCard({ plan, animation }) {
  const { id, title, price, priceLabel, tagline, cta, features } = plan;
  const navigate = useNavigate();

  return (
    <motion.article
      className="card-dark p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/5"
      aria-labelledby={`plan-${id}`}
      initial={animation.initial}
      animate={animation.animate}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="decor absolute -right-6 -top-6 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/6 opacity-10 pointer-events-none" />
      <h2 id={`plan-${id}`} className="text-white/90 font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">
        {title}
      </h2>

      {price && (
        <div className="mb-4 sm:mb-6">
          <div className="flex items-baseline gap-2 sm:gap-3">
            <span className="font-extrabold text-2xl sm:text-4xl text-white">{price}</span>
            {priceLabel && <span className="text-xs sm:text-sm text-gray-400">{priceLabel}</span>}
          </div>
        </div>
      )}

      {tagline && (
        <p className="mb-6 text-gray-400 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: tagline }} />
      )}

      <button
        type="button"
        className="w-full py-2 sm:py-3 rounded-full bg-transparent border border-white/6 text-white font-semibold mb-6 hover:bg-white/5 transition"
        onClick={() => navigate("/contact")}
        aria-label={`Enroll in ${title}`}
      >
        {cta}
      </button>

      <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-indigo-400 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
});

const PLANS = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    tagline: "AI/ML Program<br/>Hands-on projects & mentorship",
    cta: "Enroll Now",
    features: [
      "Fundamentals of AI, Machine Learning, and Deep Learning",
      "Neural Networks and Natural Language Processing (NLP)",
      "Predictive Analytics & Smart Decision-Making Algorithms",
      "AI Robotics Integration for Automation",
      "Project-based learning with real datasets and deployments",
      "Career scope: AI/ML Engineer, Data Scientist, AI Product Manager, Automation Specialist",
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    tagline: "Ethical hacking, defence & forensics",
    cta: "Enroll Now",
    features: [
      "Ethical Hacking & Penetration Testing",
      "Network Security & Threat Intelligence",
      "Blockchain-based Security Protocols",
      "Quantum Cryptography (emerging)",
      "Hands-on labs, attack simulations and defensive tooling",
      "Career scope: Cyber Security Analyst, Ethical Hacker, Security Consultant, Info Security Manager",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Technology",
    tagline: "Smart contracts & decentralized systems",
    cta: "Enroll Now",
    features: [
      "Blockchain Fundamentals & Cryptography",
      "Smart Contracts & DApp Development",
      "Decentralized Finance (DeFi) Systems",
      "Real-world Applications in Supply Chain & Healthcare",
      "Hands-on smart contract labs and deployments",
      "Career scope: Blockchain Developer, Smart Contract Developer, Crypto Analyst, Solution Architect",
    ],
  },
];

export default function CoursePricing() {
  const animations = [
    { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { x: 60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">
          COURSES
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {PLANS.map((p, i) => (
          <PlanCard key={p.id} plan={p} animation={animations[i % animations.length]} />
        ))}
      </div>
    </section>
  );
}
