import { memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { POSTS } from "../lib/blogData";
import type { Post } from "../lib/blogData";

type CardProps = { post: Post; index: number; link: string; displayIndex: string };

const BlogCard = memo(function BlogCard({ post, link, displayIndex }: CardProps) {
  const imgSrc = post.image ? `/src/assets/${post.image}` : undefined;

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="bg-gradient-to-r from-[#0b1020]/80 to-[#071028]/50 p-6 md:p-8 rounded-2xl shadow-lg border border-white/5 flex flex-col md:flex-row items-start md:items-center gap-6"
    >
      <div className="flex-1 w-full">
        <Link to={link} className="block" aria-label={`${post.title} — read post`}>
          <div className="text-left">
            <span className="text-xs sm:text-sm text-slate-400">[{displayIndex}]</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mt-2">{post.title}</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-full md:max-w-[60ch]">{post.excerpt}</p>
            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm">Startup</span>
              <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm">E-commerce</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full md:w-48 lg:w-72 h-48 sm:h-36 md:h-48 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800 mt-4 md:mt-0">
        {imgSrc ? (
          <img src={imgSrc} alt={`${post.title} hero`} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full bg-slate-700" />
        )}
      </div>
    </motion.article>
  );
});

export default function Blog() {
  const posts = useMemo(() => POSTS, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000319] to-[#07102a] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Blog</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-full sm:max-w-2xl">
            Fresh articles about design, frontend engineering and product. Click any card to open details.
          </p>
        </motion.header>

        <section className="mt-8 sm:mt-10 grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {posts.map((post, i) => {
              const link = `/blog${i + 1}`;
              const displayIndex = String(i + 1).padStart(2, "0");
              return <BlogCard key={post.id} post={post} index={i} link={link} displayIndex={displayIndex} />;
            })}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
