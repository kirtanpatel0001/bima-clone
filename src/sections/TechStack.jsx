import React from 'react';

const tech = ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite', 'Framer Motion'];

export default function TechStack() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Tech Stack</h3>
        <p className="text-gray-600 mb-6">We build with modern, maintainable technologies that scale with your business.</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {tech.map((t) => (
            <div key={t} className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
