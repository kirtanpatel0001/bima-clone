// TechStackCard.jsx
import React from 'react';

export default function TechStackCard({ icon, label, number, angle = 0 }) {
  return (
    <div
      className="relative flex flex-col items-center justify-end w-[270px] h-[320px] rounded-2xl border border-white/10 bg-[#111426]"
      style={{
        transform: `perspective(900px) rotateY(${angle}deg)`,
        boxShadow: '0 8px 40px rgba(124,58,237,0.10), 0 2px 6px rgba(0,0,0,0.4)',
        border: '1.5px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(2px)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(11,14,35,0.98) 100%)',
        opacity: 1,
      }}
    >
      <span className="absolute top-4 left-4 text-sm text-white/30 font-mono tracking-widest select-none">[{number.toString().padStart(2, '0')}]</span>
      <div className="absolute inset-0 flex items-center justify-center opacity-100">
        {icon}
      </div>
      <div className="absolute bottom-6 left-0 w-full px-8 flex justify-between items-center">
        <span className="text-base font-medium tracking-widest text-white/80 select-none"></span>
        <span className="text-lg font-semibold tracking-widest text-white/80 select-none">
          <span className={label.includes('AI') || label.includes('CHAIN') ? 'text-gradient' : ''}>{label}</span>
        </span>
      </div>
    </div>
  );
}
