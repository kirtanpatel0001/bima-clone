import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import light from "../assets/0J5Sh8pzQ8QLRcicRCJ91lYaInI.avif";
import aiImg from "../assets/ai.jpg";
import cyberImg from "../assets/cyber.jpg";
import blockImg from "../assets/block.jpg";

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
		id: "course1",
		title: "Artificial Intelligence & Machine Learning",
		subtitle: "AI/ML Program · Hands-on projects & mentorship",
		img: aiImg,
		features: [
			"Fundamentals of AI, Machine Learning, and Deep Learning",
			"Neural Networks and Natural Language Processing (NLP)",
			"Predictive Analytics & Smart Decision-Making Algorithms",
			"AI Robotics Integration for Automation",
			"Project-based learning with real datasets and deployments",
			"Career scope: AI/ML Engineer, Data Scientist, AI Product Manager, Automation Specialist",
		],
	},
	{
		id: "course2",
		title: "Cyber Security",
		subtitle: "Ethical hacking, defence & forensics",
		img: cyberImg,
		features: [
			"Ethical Hacking & Penetration Testing",
			"Network Security & Threat Intelligence",
			"Blockchain-based Security Protocols",
			"Quantum Cryptography (emerging)",
			"Hands-on labs, attack simulations and defensive tooling",
			"Career scope: Cyber Security Analyst, Ethical Hacker, Security Consultant, Info Security Manager",
		],
	},
	{
		id: "course3",
		title: "Blockchain Technology",
		subtitle: "Smart contracts & decentralized systems",
		img: blockImg,
		features: [
			"Blockchain Fundamentals & Cryptography",
			"Smart Contracts & DApp Development",
			"Decentralized Finance (DeFi) Systems",
			"Real-world Applications in Supply Chain & Healthcare",
			"Hands-on smart contract labs and deployments",
			"Career scope: Blockchain Developer, Smart Contract Developer, Crypto Analyst, Solution Architect",
		],
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
							 <Link
								 key={c.id}
								 to={`/${c.id}`}
								 className="group"
								 style={{ textDecoration: 'none' }}
							 >
								 <motion.div
									 variants={item}
									 whileHover={{ translateY: -8, scale: 1.02 }}
									 className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 p-8 rounded-2xl shadow-lg border border-white/5 flex flex-col min-h-[420px] transition-transform cursor-pointer group-hover:border-indigo-400"
								 >
									 <img src={c.img} alt={c.title} className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg" />
									 <h3 className="text-2xl font-bold mb-2 text-white">{c.title}</h3>
									 <h4 className="text-base text-indigo-300 mb-4">{c.subtitle}</h4>
									 <ul className="space-y-2 text-gray-200 text-base mb-6">
										 {c.features.map((f, i) => (
											 <li key={i} className="flex items-start gap-2">
												 <span className="text-indigo-400 font-bold">&#10003;</span>
												 <span>{f}</span>
											 </li>
										 ))}
									 </ul>
									 <button
										 className="w-full py-3 rounded-full bg-transparent border border-indigo-400 text-white font-semibold text-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors"
										 onClick={e => { e.preventDefault(); window.location.href = '/contact'; }}
									 >
										 Enroll Now
									 </button>
								 </motion.div>
							 </Link>
						 ))}
					</motion.div>
				</section>

			</div>
		</section>
	);
}
