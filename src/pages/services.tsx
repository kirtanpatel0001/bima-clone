import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import light from "../assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif";
import courseImg1 from "../assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif";
import courseImg2 from "../assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif";
import avatar from "../assets/avatar.svg";

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.12, delayChildren: 0.08 },
	},
};

const item = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const courses = [
	{
		id: "1",
		title: "Intro to AI for Business",
		short: "Learn practical AI tools to automate workflows.",
		img: courseImg1,
	},
	{
		id: "2",
		title: "Data-Driven Decision Making",
		short: "Turn analytics into action for growth.",
		img: courseImg2,
	},
	{
		id: "3",
		title: "Deploying ML Models",
		short: "From prototype to production with confidence.",
		img: avatar,
	},
];

export default function Services() {
	const shouldReduce = useReducedMotion();

	return (
		<section className="relative min-h-screen flex flex-col bg-[#000319] text-white px-6 overflow-hidden pt-32">
			<img src={light} alt="decorative light" className="pointer-events-none absolute -left-24 -top-20 opacity-90 mix-blend-screen" style={{ width: 620, transform: 'rotate(-12deg)' }} />

				{/* top overlay so the fixed, transparent navbar doesn't visually blend with the heading */}
				<div className="pointer-events-none absolute top-0 left-0 w-full h-20 md:h-24 lg:h-28 bg-gradient-to-b from-[#000319] to-transparent z-40" />

			<div className="max-w-7xl w-full mx-auto py-12">
				<motion.div className="mb-8 max-w-3xl" variants={container} initial={shouldReduce ? "show" : "hidden"} animate="show">
					<motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
						Our Courses
					</motion.h1>
					<motion.p variants={item} className="mt-4 text-gray-300">
						We help Students To help  to learn and grow  And Achieve Their Goals with Practical, Hands-on Courses.
					</motion.p>
				</motion.div>

				{/* Courses section (video removed for a cleaner header) */}
				<section className="mb-24">
					<motion.h2 className="text-3xl font-semibold mb-6" variants={item} initial={shouldReduce ? "show" : "hidden"} animate="show">
						Courses
					</motion.h2>

					<motion.div className="grid gap-8 md:grid-cols-3" variants={container} initial={shouldReduce ? "show" : "hidden"} animate="show">
						{courses.map((c) => (
							<motion.div key={c.id} variants={item} whileHover={{ translateY: -8, scale: 1.02 }} className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 p-6 rounded-xl shadow-lg border border-white/5 flex flex-col justify-between min-h-[320px] transition-transform">
								<img src={c.img} alt={c.title} className="w-full h-44 object-cover rounded-md mb-4" />
								<div>
									<h3 className="text-xl font-semibold">{c.title}</h3>
									<p className="text-gray-300 mt-2">{c.short}</p>
								</div>
								<div className="mt-6 flex items-center justify-between">
									<Link to={`/courses/${c.id}`} className="text-indigo-400 font-medium">View details</Link>
									<button className="px-4 py-2 rounded bg-indigo-600 text-white text-sm">Enroll</button>
								</div>
							</motion.div>
						))}
					</motion.div>
				</section>

			</div>
		</section>
	);
}
