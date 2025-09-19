import React, { useEffect, useRef, useState, memo, useCallback } from 'react';

// Testimonials data (kept exactly as you provided)
export const TESTIMONIALS = [
  { id: 't5', quote: 'I loved the hands-on approach in every class. The AI projects were challenging but so rewarding. I feel ready for any tech job now!', name: 'Riya Mehta', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't6', quote: 'Blockchain was a mystery to me before, but now I can explain it to anyone! The teachers are patient and always help you understand every concept.', name: 'Aarav Joshi', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't7', quote: 'The Cyber Security course gave me real confidence. I even won a hackathon thanks to what I learned here!', name: 'Sneha Shah', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't8', quote: 'Amazing institute! The environment is so positive and everyone motivates you to do your best. I made great friends and learned so much.', name: 'Mitali Rana', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't9', quote: 'I got placed in a top IT company after completing the Blockchain course. The placement support is excellent!', name: 'Jay Patel', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't10', quote: 'The mentors here are industry experts. They share real stories and make every topic interesting. Highly recommended!', name: 'Simran Desai', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't11', quote: 'I was nervous about coding, but the AI course started from basics and now I can build my own models. Thank you for the support!', name: 'Karan Bhakta', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't12', quote: 'The Cyber Security labs are so realistic. I learned how to defend against real attacks and feel ready for the industry.', name: 'Pooja Gohil', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't13', quote: 'Best place to learn Blockchain! The projects are practical and the teachers are always available for help.', name: 'Nisarg Shah', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't14', quote: 'I made so many friends and learned so much about teamwork. The institute is like a family!', name: 'Hetvi Patel', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't1', quote: 'Joining this institute was the best decision of my life! The AI & Machine Learning course gave me real-world skills and confidence. The mentors are so supportive and the projects are amazing.', name: 'Dhruv Patel', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't2', quote: 'I never thought I could understand Blockchain, but the way it is taught here is so practical and easy. Now I am building my own DApps and my career is on a new path!', name: 'Priya Desai', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't3', quote: 'The Cyber Security course is top-notch. The hands-on labs and real attack simulations made me industry-ready. I got placed in a top company right after the course!', name: 'Harshil Shah', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
  { id: 't4', quote: 'Best institute in Gujarat for tech courses! The environment is friendly, and the teachers really care about your growth. Highly recommended for anyone serious about tech.', name: 'Kavya Bhatt', role: 'Student, Surat', avatar: '/src/assets/avatar.svg' },
];

const ArrowBtn = memo(({ onClick, children, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0c1220] border border-white/6 flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
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

  // Autoplay
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!pausedRef.current && len > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % len);
      }, 4000); // slightly slower for better readability
    }

    return () => clearInterval(intervalRef.current);
  }, [len, index]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    clearInterval(intervalRef.current);
    if (len > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % len);
      }, 4000);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-8 gap-4 md:gap-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-center md:text-left pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">
          What Our Students Say
        </h2>
        <div className="flex items-center gap-2 sm:gap-3">
          <ArrowBtn onClick={prev} ariaLabel="previous testimonial">
            ◀
          </ArrowBtn>
          <ArrowBtn onClick={next} ariaLabel="next testimonial">
            ▶
          </ArrowBtn>
        </div>
      </div>

      <div
        className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((t, i) => {
          const active = i === index;
          return (
            <article
              key={t.id}
              className="absolute inset-0 flex items-start justify-center pointer-events-none"
              aria-hidden={!active}
            >
              <div
                className={`mx-auto w-full max-w-md sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 transition-all duration-700 ease-in-out transform ${
                  active
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 translate-y-6'
                }`}
              >
                <div className="card-dark bg-gradient-to-br from-[#050612] to-[#0b1220] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/6 shadow-2xl">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug text-gray-200 font-medium">
                    "{t.quote}"
                  </p>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base md:text-lg">{t.name}</div>
                      <div className="text-gray-400 text-xs sm:text-sm md:text-base">{t.role}</div>
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
