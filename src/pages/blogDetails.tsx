import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { POSTS } from "../lib/blogData";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => POSTS.find((p) => p.id === id), [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000319] to-[#07102a] text-white">
        <div className="text-center">
          <p className="mb-4">Post not found.</p>
          <Link to="/blog" className="px-4 py-2 rounded border border-white/20">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000319] to-[#07102a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 bg-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-5xl font-extrabold leading-tight">{post.title}</h1>
                  <p className="text-sm text-slate-300 mt-3">{post.date}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => navigate(-1)} className="px-3 py-1 rounded border border-white/10">Back</button>
                  <Link to="/blog" className="px-3 py-1 rounded bg-cta-gradient text-white">All posts</Link>
                </div>
              </div>

              <div className="mt-8 text-slate-200 leading-relaxed space-y-4">
                <p>{post.content}</p>
                <p>{post.content}</p>
                <p>{post.content}</p>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-800">
                {post.image ? <img src={`/src/assets/${post.image}`} alt="post hero" className="w-full h-full object-cover" /> : <div className="w-full h-64 bg-slate-700" />}
                <div className="p-6">
                  <div className="text-white/80 text-sm">BATAVIA</div>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
