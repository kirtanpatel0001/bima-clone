import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const FAQ_ITEMS = [
  {
    q: 'How can AI automation help my business?',
    a: 'AI automation reduces manual work, speeds up processes, improves accuracy, and frees staff to focus on higher-value tasks. It can automate customer support, reporting, predictions, and repetitive operations.'
  },
  {
    q: 'Is AI difficult to integrate into my current system?',
    a: 'Integration complexity depends on your current systems and data quality. We focus on minimal-disruption integrations, using APIs and microservices when possible to keep rollout smooth.'
  },
  {
    q: 'What industries can benefit from AI automation?',
    a: 'Almost every industry can benefit: finance, healthcare, retail, manufacturing, logistics, and professional services — especially where repetitive tasks, prediction, or large data volumes exist.'
  },
  {
    q: "What's the difference between your pricing plans?",
    a: 'Plans vary by volume, level of customization, SLA and support. We offer transparent tiers from starter packages to fully-managed custom solutions.'
  },
  {
    q: 'How long does AI setup take?',
    a: 'Typical setups can range from a few days for simple automations to several months for large, bespoke deployments. We provide an estimated timeline after initial assessment.'
  },
  {
    q: 'Can I request a custom AI solution?',
    a: 'Yes — we design custom solutions tailored to data, workflows, and goals. Start with a short discovery call to scope your needs.'
  }
]

function IconPlus({ open }) {
  return (
    <motion.span
      className="inline-block text-white/80"
      initial={false}
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  )
}

const Item = React.memo(function Item({ item, index, isOpen, onToggle, disableMotion }) {
  return (
    <div className="w-full">
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/5 hover:bg-white/6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        onClick={() => onToggle(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle(index)
          }
        }}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="text-left text-sm md:text-base text-white/90 font-medium">{item.q}</span>
        <IconPlus open={isOpen} />
      </button>

      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: 'easeOut', duration: disableMotion ? 0 : 0.35 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 bg-gradient-to-b from-white/2 to-transparent mt-3 rounded-xl text-sm text-white/70">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const disableMotion = useReducedMotion()

  const toggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }, [])

  const containerVariants = disableMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { when: 'beforeChildren', staggerChildren: 0.06, duration: 0.6, ease: 'easeOut' }
        }
      }

  return (
    <motion.section
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[rgb(6,7,22)] text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.12 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="order-1 md:order-1 flex flex-col justify-center">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400" layout>
            FAQ
          </motion.h2>
          <motion.p className="mt-6 text-white/70 max-w-md leading-relaxed" layout>
            Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
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
  )
}
