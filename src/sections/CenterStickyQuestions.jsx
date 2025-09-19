import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultItems = [
  "[  You need AI, but don't know where to start  ]",
  "[  Scaling is hard without automation  ]",
  "[  High operational costs reduce profits  ]",
  "[  You are overwhelmed with data and no insights  ]",
  "[  Hiring skilled ML engineers is expensive and slow  ]",
  "[  Your teams spend too much time on manual tasks  ]",
  "[  You lack reliable data pipelines and governance  ]",
  "[  You want to deliver value faster with automation  ]",
];

export default function CenterStickyQuestions({
  centerTitle = "Is This You?",
  items = defaultItems,
}) {
  const containerRef = useRef(null);
  const scrollAreaRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect active section with IntersectionObserver using the scroll area as root
  useEffect(() => {
    const root = scrollAreaRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll(".scroll-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { root: root, threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  // Animation variants for items
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#000319] text-white overflow-hidden">
      <div className="h-[10vh]" />

  {/* Inner scroll area: confines scrolling to this section (no native scrollbar shown) */}
  <div ref={scrollAreaRef} className="relative h-[210vh] mx-auto overflow-y-auto no-scroll">

        {/* Sticky center title inside the scroll area */}
        <div className="sticky top-1/2 transform -translate-y-1/2 z-20 pointer-events-none w-full flex justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-extrabold text-center leading-tight">
            {centerTitle.split(" ").map((word, i) => (
              <span key={i} className={word.toLowerCase().includes("you") ? "text-purple-400" : ""}>
                {word + " "}
              </span>
            ))}
          </h1>
        </div>

        {/* progress indicator removed as requested */}

        {/* Stacked scroll sections inside the scroll area */}
        <div className="relative">
          {items.map((text, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} data-index={i} className="scroll-section h-[120vh] flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`absolute max-w-xs md:max-w-md text-lg md:text-2xl font-medium ${isLeft ? "left-12 text-left" : "right-12 text-right"}`}
                    >
                      <div className="relative p-4">
                        <span className={`absolute w-5 h-5 border border-white/20 ${isLeft ? "-left-4 -top-4" : "-right-4 -top-4"}`} />
                        <span className={`absolute w-5 h-5 border border-white/20 ${isLeft ? "-left-4 -bottom-4" : "-right-4 -bottom-4"}`} />
                        <p>{text}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      <div className="h-[30vh]" />
    </section>
  );
}
             