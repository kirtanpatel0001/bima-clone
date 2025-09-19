import { useMemo } from "react";
import { POSTS } from "../lib/blogData";

export default function Blog1() {
  const post = useMemo(() => POSTS[0], []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000319] to-[#07102a] text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Article */}
          <article className="md:col-span-2 bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
            <header>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">{post.title}</h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">{post.date}</p>
            </header>

            <section className="mt-6 sm:mt-8 md:mt-10 text-slate-200 space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Introduction:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Artificial Intelligence (AI) is no longer just a futuristic concept—it is already shaping the way industries operate across the world. From healthcare and finance to education and e-commerce, AI is creating endless opportunities for skilled professionals. For students in India, learning AI today means unlocking a world of high-paying, future-proof careers tomorrow.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">What is Artificial Intelligence?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Artificial Intelligence refers to machines or computer systems that can perform tasks that usually require human intelligence, such as decision-making, problem-solving, and learning. Technologies like <strong>Machine Learning (ML)</strong>, <strong>Natural Language Processing (NLP)</strong>, and <strong>Robotics</strong> are all part of AI.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Learn AI Now?</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li>AI is used globally in every industry.</li>
                  <li>Demand for AI engineers is growing by 74% every year.</li>
                  <li>Average salary for AI professionals in India ranges between ₹6 LPA to ₹25 LPA.</li>
                  <li>Early learners get a head start in career growth.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Career Opportunities in AI & ML</h3>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li><strong>AI Engineer</strong> – Designing and implementing AI models.</li>
                  <li><strong>Data Scientist</strong> – Analyzing large data sets to make smart business decisions.</li>
                  <li><strong>Machine Learning Engineer</strong> – Building systems that can learn from data.</li>
                  <li><strong>AI Researcher</strong> – Innovating new algorithms and solutions.</li>
                  <li><strong>Business Intelligence Developer</strong> – Helping companies make AI-driven decisions.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Choose Skill Code.AI Institute?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  At Skill Code.AI, we prepare students to be future-ready with hands-on training, real-world projects, and expert mentorship. Our industry-focused curriculum in AI, ML, Blockchain, and Cyber Security ensures that students don’t just learn theory but also gain practical knowledge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Conclusion:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  The future belongs to those who understand Artificial Intelligence. By starting your journey today, you can secure your place in one of the most promising fields of the 21st century.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Call to Action:</h3>
                <p className="mt-2 text-sm sm:text-base">Ready to start your AI career? Enroll with Skill Code.AI Institute today and take the first step towards a bright future.</p>
                <div className="mt-4">
                  <a href="/contact" className="inline-block bg-cta-gradient text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base">Apply Now</a>
                </div>
              </div>
            </section>
          </article>

          {/* Sidebar / Image */}
          <aside className="md:col-span-1 mt-6 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-800 relative">
              {post.image ? (
                <img
                  src={`src/assets/blog1.jpg`}
                  alt="post hero"
                  className="w-full h-64 sm:h-72 md:h-full object-cover"
                />
              ) : (
                <div className="w-full h-64 sm:h-72 md:h-full bg-slate-700" />
              )}
              <div className="absolute bottom-3 sm:bottom-4 left-4 text-white/80 text-xs sm:text-sm font-medium">BATAVIA</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
