import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import light from "../assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif";
import courseImg1 from "../assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif";
import courseImg2 from "../assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif";
import avatar from "../assets/avatar.svg";

type Course = { id: string; title: string; desc: string; img: string };

const courses: Record<string, Course> = {
  "1": { id: "1", title: "Intro to AI for Business", desc: "A hands-on course covering practical AI tools, automation patterns, and business use cases.", img: courseImg1 },
  "2": { id: "2", title: "Data-Driven Decision Making", desc: "Learn to collect, analyze, and use data to drive better product and business decisions.", img: courseImg2 },
  "3": { id: "3", title: "Deploying ML Models", desc: "End-to-end model deployment, monitoring, and scaling best practices.", img: avatar },
};

export default function CourseDetails() {
  const { id } = useParams();
  const shouldReduce = useReducedMotion();
  const course = id ? courses[id] : undefined;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000319] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Course not found</h2>
          <Link to="/services" className="mt-4 inline-block text-indigo-400">Back to course</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#000319] text-white px-6 py-20">
      <img src={light} alt="decorative" className="pointer-events-none absolute -left-24 -top-20 opacity-90 mix-blend-screen" style={{ width: 620, transform: 'rotate(-12deg)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 p-8 rounded-lg shadow-lg border border-white/5">
          <img src={course.img} alt={course.title} className="w-full h-64 object-cover rounded-md mb-6" />
          <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
          <p className="text-gray-300 mb-6">{course.desc}</p>

          <h3 className="text-xl font-semibold mb-2">What you'll learn</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Practical patterns for automating business workflows</li>
            <li>Designing data pipelines and metrics</li>
            <li>Deploying and monitoring models in production</li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded bg-indigo-600 text-white">Enroll now</button>
            <Link to="/services" className="text-indigo-300">Back to courses</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
