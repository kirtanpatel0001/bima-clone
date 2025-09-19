import { useMemo } from "react";
import { POSTS } from "../lib/blogData";

export default function Blog2() {
  const post = useMemo(() => POSTS[1], []);
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
                  Blockchain is not just about cryptocurrency like Bitcoin—it is a technology that is transforming industries worldwide. From banking and supply chain to healthcare and education, blockchain is changing the way data is stored, verified, and secured. For students, learning blockchain today means being a part of tomorrow’s digital revolution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">What is Blockchain?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Blockchain is a decentralized digital ledger that records transactions across multiple computers. It ensures data security, transparency, and trust without the need for middlemen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why is Blockchain Important?</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li><strong>High Security</strong> – Data cannot be easily hacked or altered.</li>
                  <li><strong>Transparency</strong> – All transactions are visible and verified.</li>
                  <li><strong>Fast & Efficient</strong> – Eliminates unnecessary intermediaries.</li>
                  <li><strong>High Demand</strong> – Blockchain professionals are needed in almost every industry.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Career Opportunities in Blockchain</h3>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li><strong>Blockchain Developer</strong> – Designing secure blockchain systems.</li>
                  <li><strong>Smart Contract Engineer</strong> – Building automated contract systems.</li>
                  <li><strong>Blockchain Project Manager</strong> – Managing blockchain-based solutions.</li>
                  <li><strong>Crypto Analyst</strong> – Studying cryptocurrency markets.</li>
                  <li><strong>Blockchain Consultant</strong> – Helping companies adopt blockchain solutions.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Why Choose Skill Code.AI Institute?</h3>
                <p className="mt-2 text-sm sm:text-base">
                  At Skill Code.AI Institute, we train students with practical blockchain applications, live projects, and hands-on experience. Our expert mentors guide learners to become future-ready professionals in blockchain, AI, ML, and cyber security.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Conclusion:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  Blockchain is more than a trend—it is the future of secure digital transactions. By learning blockchain today, you can build a career in one of the most in-demand industries of the future.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Call to Action:</h3>
                <p className="mt-2 text-sm sm:text-base">Join Skill Code.AI Institute now and become a part of the blockchain revolution.</p>
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
