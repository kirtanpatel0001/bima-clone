import React, { useEffect, useRef, useState, memo, useCallback } from 'react';

// Add or remove items from this array to change the carousel content
export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'Our AI chatbot reduced response times from 10 minutes to just 2 seconds. Customer satisfaction skyrocketed, and we saved over 400 hours per month on support.',
    name: 'Mila S.',
    role: 'COO, Finance Firm',
    avatar: '/src/assets/avatar.svg',
  },
  {
    id: 't2',
    quote:
      'Implementing the workflow automation cut our manual processing time in half and improved accuracy across teams.',
    name: 'Rahul P.',
    role: 'Head of Operations',
    avatar: '/src/assets/avatar.svg',
  },
  {
    id: 't3',
    quote:
      'The analytics dashboard gives us clear insights. We make decisions faster and drive more revenue from the same traffic.',
    name: 'Sofia M.',
    role: 'VP Marketing',
    avatar: '/src/assets/avatar.svg',
  },
  
];

const ArrowBtn = memo(({ onClick, children, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="w-12 h-12 rounded-full bg-[#0c1220] border border-white/6 flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
  >
    {children}
  </button>
));

export default function Testimonials() {
  const items = TESTIMONIALS;
  const len = items.length;
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const pausedRef = useRef(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + len) % len), [len]);

  // start autoplay
  useEffect(() => {
    // clear any previous
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!pausedRef.current && len > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % len);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [len, index]);

  // pause on hover
  function handleMouseEnter() {
    pausedRef.current = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function handleMouseLeave() {
    pausedRef.current = false;
    // restart interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (len > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % len);
      }, 3000);
    }
  }

  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
  <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl font-extrabold leading-[1.15] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">
          What Our Students Say
        </h2>
        <div className="flex items-center gap-3 ">
          <ArrowBtn onClick={() => { prev(); }} ariaLabel="previous testimonial">◀</ArrowBtn>
          <ArrowBtn onClick={() => { next(); }} ariaLabel="next testimonial">▶</ArrowBtn>
        </div>
      </div>

      <div
        className="relative min-h-[220px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((t, i) => {
          const active = i === index;
          return (
            <article
              key={t.id}
              className={`absolute inset-0 flex items-start justify-center pointer-events-none`}
              aria-hidden={!active}
            >
              <div
                className={`mx-auto w-full max-w-6xl px-6 transition-all duration-5000 ease-in-out transform ${
                  active ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-6'
                }`}
              >
                <div className="card-dark bg-gradient-to-br from-[#050612] to-[#0b1220] p-10 rounded-3xl border border-white/6 shadow-2xl">
                  <p className="text-3xl md:text-4xl leading-tight text-gray-200 font-medium">"{t.quote}"</p>

                  <div className="mt-8 flex items-center gap-4">
                    <img src={t.avatar} alt={`${t.name} avatar`} className="w-12 h-12 rounded-full border border-white/6" />
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
