import React from "react";
import { motion } from "framer-motion";
import aiImg from "../assets/ai1.jpg";
import blockchainImg from "../assets/blockchain.jpeg";
import cyberImg from "../assets/cyber secvurity.jpeg";

export default function Work() {
  const cards = [
    {
      id: 1,
      eyebrow: "[AI/ML]",
      title: "Artificial Intelligence & Machine Learning",
      desc:
        "Empower your future with our AI/ML program. By 2050, autonomous systems will transform every industry. At our institute, you’ll master neural networks, deep learning, and real-world AI projects—preparing you to lead innovation in business, healthcare, and beyond.",
      tags: ["AI", "Machine Learning", "Future Vision"],
      img: aiImg,
    },
    {
      id: 2,
      eyebrow: "[Blockchain]",
      title: "Blockchain Technology",
      desc:
        "Join the decentralized revolution! Our Blockchain course covers everything from cryptography to smart contracts and DeFi. Learn to build secure, transparent systems for finance, supply chain, and digital identity—skills essential for the digital economy of 2050.",
      tags: ["Blockchain", "Decentralization", "DeFi"],
      img: blockchainImg,
    },
    {
      id: 3,
      eyebrow: "[Cyber Security]",
      title: "Cyber Security",
      desc:
        "Become a guardian of the connected world. Our Cyber Security program prepares you for the challenges of quantum computing, advanced threats, and digital identity protection. Hands-on labs and expert mentorship ensure you’re ready to secure tomorrow’s infrastructure.",
      tags: ["Cyber Security", "Quantum", "Digital Identity"],
      img: cyberImg,
    },
  ];

  return (
    <section className="relative py-40 lg:py-48 bg-[#030319] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative">
        <h2 className="text-4xl md:text-5xl text-white tracking-tight">
          See Our Work in Action
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="space-y-10">
          {cards.map((c, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.1,
                }}
                className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-[#0b1320]/80 to-[#0b0b15]/60 border border-[#3a3560]/40 rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex-1 text-white">
                  <div className="text-sm text-gray-400 mb-3">{c.eyebrow}</div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-6 text-gray-300 max-w-xl">{c.desc}</p>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-gray-600 text-gray-200 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-80 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-700/10 to-black flex items-center justify-center">
                  <img
                    src={c.img}
                    alt={`work-${c.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="h-32" />
    </section>
  );
}
