import { useMemo } from "react";
import { POSTS } from "../lib/blogData";

export default function Blog3() {
  const post = useMemo(() => POSTS[2], []);
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
                  As technology grows, so do cyber threats. From hacking to identity theft, cyber crimes are on the rise. This makes Cyber Security one of the most crucial and fast-growing career fields today. For students, learning cyber security is not just about getting a job—it’s about becoming a digital protector in the modern world.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">What is Cyber Security?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Cyber Security is the practice of protecting systems, networks, and data from digital attacks. It ensures privacy, safety, and trust in the online world.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Learn Cyber Security?</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li>Every industry requires cyber security experts.</li>
                  <li>Cyber security market is expected to grow over $500 billion by 2030.</li>
                  <li>Huge demand with limited skilled professionals.</li>
                  <li>Salaries in India start from ₹5 LPA and go up to ₹30 LPA.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Career Opportunities in Cyber Security</h3>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li><strong>Ethical Hacker</strong> – Identifying and fixing security vulnerabilities.</li>
                  <li><strong>Cyber Security Analyst</strong> – Monitoring and defending systems from threats.</li>
                  <li><strong>Penetration Tester</strong> – Testing system security through real-world attacks.</li>
                  <li><strong>Network Security Engineer</strong> – Securing organizational networks.</li>
                  <li><strong>Information Security Manager</strong> – Building strategies to protect data.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Choose Skill Code.AI Institute?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  At Skill Code.AI Institute, we provide hands-on training in ethical hacking, cyber defense, and digital forensics. Our practical labs and expert guidance prepare students to tackle real-world security challenges with confidence.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Conclusion:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Cyber Security is not just a career—it is a mission to protect the digital future. By learning it today, you can secure high-paying jobs and contribute to a safer online world.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Call to Action:</h3>
                <p className="mt-2 text-sm sm:text-base">Secure your future with Skill Code.AI Institute’s Cyber Security program. Enroll now!</p>
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
