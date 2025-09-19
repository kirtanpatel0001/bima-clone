import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "How can AI and Machine Learning help students in their careers?",
    a: "Our AI and ML courses prepare students to automate tasks, analyze data, and develop intelligent systems, opening doors to high-paying and future-proof careers.",
  },
  {
    q: "Is Cyber Security difficult to learn for beginners?",
    a: "Not at all! We guide students step-by-step through practical labs and real-world projects, making even complex Cyber Security concepts approachable.",
  },
  {
    q: "What will I learn in Blockchain courses?",
    a: "Students learn decentralized technologies, smart contract development, and real-world blockchain applications to build innovative solutions.",
  },
  {
    q: "Can I enroll in multiple courses at once?",
    a: "Yes, our institute allows students to combine AI, ML, Cyber Security, and Blockchain courses to gain a competitive advantage in the tech industry.",
  },
  {
    q: "How long does it take to complete a course?",
    a: "Course duration varies: AI/ML and Cyber Security typically take a few months for hands-on mastery, while Blockchain is project-based and may vary.",
  },
  {
    q: "Do you provide career support after the course?",
    a: "Absolutely! We offer placement support, project guidance, and mentorship to help our students secure roles in leading tech companies.",
  },
];

function IconPlus({ open }) {
  return (
    <motion.span
      className="inline-block text-white/80"
      initial={false}
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      aria-hidden
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

const Item = React.memo(function Item({
  item,
  index,
  isOpen,
  onToggle,
  disableMotion,
}) {
  return (
    <div className="w-full">
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/5 hover:bg-white/6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 text-left"
        onClick={() => onToggle(index)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(index);
          }
        }}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="text-sm md:text-base font-medium">{item.q}</span>
        <IconPlus open={isOpen} />
      </button>

      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeOut", duration: disableMotion ? 0 : 0.35 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 bg-gradient-to-b from-white/2 to-transparent mt-3 rounded-xl text-sm md:text-base text-white/70">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const disableMotion = useReducedMotion();

  const toggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  const containerVariants = disableMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.06,
            duration: 0.6,
            ease: "easeOut",
          },
        },
      };

  return (
    <motion.section
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-[rgb(6,7,22)] text-white overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show" // ✅ runs immediately, no scroll trigger
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="order-1 md:order-1 flex flex-col justify-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 mb-4 sm:mb-6"
            layout
          >
            FAQ
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-md leading-relaxed text-sm sm:text-base md:text-lg"
            layout
          >
            Our institute offers hands-on courses in AI, Machine Learning,
            Cyber Security, and Blockchain. Learn with real projects and expert
            mentors to kickstart your tech career.
          </motion.p>
        </div>

        <div className="order-2 md:order-2">
          <div className="space-y-4 md:space-y-5">
            {FAQ_ITEMS.map((it, i) => (
              <motion.div key={i} layout>
                <Item
                  item={it}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={toggle}
                  disableMotion={disableMotion}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
