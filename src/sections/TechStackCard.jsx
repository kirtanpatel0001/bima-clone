// TechStackCard.jsx
import React from 'react';

export default function TechStackCard({ icon, label, number, angleX = 0, angleY = 0, posX = 0, posY = 0 }) {
  return (
    <div
      className="relative flex flex-col items-center justify-end w-[270px] h-[320px] rounded-2xl border border-white/10 bg-[#111426]"
      style={{
        transform: `perspective(900px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateX(${posX}px) translateY(${posY}px)`,
        boxShadow: '0 8px 40px rgba(124,58,237,0.10), 0 2px 6px rgba(0,0,0,0.4)',
        border: '1.5px solid rgba(255,255,255,0.06)',
        background: '#111426',
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
