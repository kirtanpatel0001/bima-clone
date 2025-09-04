export default function Features() {
  const features = [
    { title: "Fast Performance", desc: "Optimized with Vite + React for blazing speed." },
    { title: "Beautiful Animations", desc: "Smooth transitions powered by Framer Motion." },
    { title: "SEO Ready", desc: "Clean code structure with metadata for ranking." },
  ];

  return (
    <section id="features" className="py-24 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="p-6 card-dark transition">
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
