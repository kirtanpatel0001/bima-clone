import { useMemo } from "react";
import { POSTS } from "../lib/blogData";

export default function Blog5() {
  const post = useMemo(() => POSTS[4], []);
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
                  With the rising demand for Artificial Intelligence and Machine Learning, many institutes offer training. But choosing the right one can make all the difference in your career. Here are the factors you should consider before enrolling.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">1. Curriculum Quality</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Ensure the institute provides updated, industry-relevant curriculum covering practical tools and technologies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">2. Experienced Faculty</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Learning from real industry experts gives you an edge in practical knowledge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">3. Hands-on Training</h3>
                <p className="mt-2 text-sm sm:text-base">
                  The right institute should offer live projects, case studies, and real-time problem-solving.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">4. Placement Support</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Check if the institute provides career counseling, internships, and placement assistance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">5. Student Reviews</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Success stories and testimonials speak about the institute’s credibility.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Skill Code.AI Institute?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  We combine all of the above—expert mentors, industry-based curriculum, practical training, and proven success stories. Our students don’t just learn, they become job-ready.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Conclusion:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Choosing the right institute is the first step to building a successful career in AI and ML. Make your decision wisely.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Call to Action:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Start your journey with the best. Join Skill Code.AI Institute today.
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
