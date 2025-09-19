import { useMemo } from "react";
import { POSTS } from "../lib/blogData";

export default function Blog4() {
  const post = useMemo(() => POSTS[3], []);
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
                  At Skill Code.AI Institute, we believe that success speaks louder than words. Our students have not only learned advanced technologies like AI, ML, Blockchain, and Cyber Security but also turned their knowledge into successful careers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Real Transformations:</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-sm sm:text-base">
                  <li><strong>Rohan Patel</strong> – Started as a beginner in AI, now working as a Machine Learning Engineer at a leading IT firm.</li>
                  <li><strong>Priya Shah</strong> – Completed Cyber Security course and is now a Certified Ethical Hacker, protecting organizations from cyber threats.</li>
                  <li><strong>Amit Mehta</strong> – Learned Blockchain development and launched his own startup providing blockchain solutions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Our Students Succeed?</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li>Practical hands-on training.</li>
                  <li>Guidance from industry experts.</li>
                  <li>Real projects and case studies.</li>
                  <li>Career counseling and placement support.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Impact of Skill Code.AI:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Our alumni are working in top companies, contributing to innovative projects, and building successful careers in technology.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Conclusion:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Every student has potential; they just need the right guidance. At Skill Code.AI Institute, we don’t just teach—we create success stories.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Call to Action:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Be the next success story. Enroll today at Skill Code.AI Institute.
                </p>
                <div className="mt-4">
                  <a href="/contact" className="inline-block bg-cta-gradient text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base">
                    Apply Now
                  </a>
                </div>
              </div>
            </section>
          </article>

          {/* Sidebar / Image */}
          <aside className="md:col-span-1 mt-6 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-800 relative">
              {post.image ? (
                <img
                  src={`/src/assets/${post.image}`}
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
