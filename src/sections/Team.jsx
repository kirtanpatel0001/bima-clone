import React from "react";
import { motion, useReducedMotion } from "framer-motion";
// use high-quality online images (base URLs without fixed width) so we can build responsive srcset
const img1 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&ixlib=rb-4.0.3";
const img2 = "https://images.unsplash.com/photo-1545996124-1b7a4d3f0b3b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3";
const img3 = "https://images.unsplash.com/photo-1531123414780-f2b5b6a9c3a8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3";
const img4 = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3";



export default function Team() {
		const shouldReduce = useReducedMotion();

		// slower, more deliberate entrance when the section comes into view
		const containerVariant = shouldReduce
			? { hidden: {}, show: {} }
			: {
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.32,
							delayChildren: 0.06,
						},
					},
				};

		const cardVariant = shouldReduce
			? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
			: {
					hidden: { opacity: 0, y: 40, scale: 0.99 },
					show: {
						opacity: 1,
						y: 0,
						scale: 1,
						transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
					},
				};
	// small set of people using provided assets; swap with real photos as needed
	const people = [
		{ name: "Alex Kumongso", role: "Founder", img: img1, linkedin: "#", insta: "#" },
		{ name: "Lisa Ningrum", role: "Automation Architect", img: img2, linkedin: "#", insta: "#" },
		{ name: "Ryan Wilujeng", role: "Lead AI Engineer", img: img3, linkedin: "#", insta: "#" },
		{ name: "Sarah Kumala", role: "Customer Success Manager", img: img4, linkedin: "#", insta: "#" },
	];

	return (
			<section className="relative bg-[#000319] text-white py-16 md:py-20 overflow-hidden">
				{/* decorative left vignette - hide on small screens */}
				<div className="hidden md:block absolute -left-40 -top-28 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#0f1226] via-[#0b0820] to-transparent opacity-70 pointer-events-none blur-3xl" />

			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
					<div className="w-full lg:w-1/2">
						<h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
							Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300">Experts</span>
						</h2>
					</div>

					<p className="w-full lg:w-1/2 text-gray-300 max-w-md text-sm md:text-base">
						Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business
						grow, without extra effort.
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={containerVariant}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.14 }}
				>
					{people.map((p) => (
						<motion.div
							key={p.name}
							variants={cardVariant}
							className="relative rounded-3xl overflow-hidden border border-white/6 bg-gradient-to-b from-white/3 to-transparent"
						>
							{/* image container */}
							<div className="w-full h-80 sm:h-96 md:h-[420px] lg:h-[520px] bg-[#0b0e1a] relative group">
											<img
												src={`${p.img}&w=1200`}
												srcSet={`${p.img}&w=400 400w, ${p.img}&w=800 800w, ${p.img}&w=1200 1200w`}
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
												loading="lazy"
												decoding="async"
												alt={p.name}
												className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
											/>

								{/* hover overlay: blur background and show role + socials */}
								{/* overlay: only apply heavy blur on md+ and respect reduced motion */}
								<div className={`absolute inset-0 flex flex-col justify-center items-center bg-black/0 transition-all duration-300 ${shouldReduce ? '' : 'md:group-hover:bg-black/40' } md:backdrop-blur-0` + (shouldReduce ? '' : ' md:group-hover:backdrop-blur-sm')}>
									<div className={`opacity-0 transform translate-y-2 transition-all duration-300 ${shouldReduce ? 'opacity-100 translate-y-0' : 'group-hover:opacity-100 group-hover:translate-y-0'} text-center px-4`}>
										<div className="text-sm text-gray-300 mb-2">{p.role}</div>
										<div className="flex gap-4 justify-center">
											<a href={p.linkedin} aria-label={`${p.name} LinkedIn`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
												{/* simple LinkedIn svg */}
												<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5Z" fill="white"/>
													<path d="M6 8H0V24H6V8Z" fill="white"/>
													<path d="M24 24H18V15.6C18 12.9 16.6 11.4 14.3 11.4C12.6 11.4 11.6 12.3 11.3 13.1C11.1 13.5 11 14.2 11 14.9V24H5V8H11V10.6C11.8 9.5 13.3 8 15.9 8C19.8 8 24 10.4 24 16V24Z" fill="white"/>
												</svg>
											</a>
											<a href={p.insta} aria-label={`${p.name} Instagram`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
												{/* simple Instagram svg */}
												<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" stroke="white" strokeWidth="1.2"/>
													<path d="M17.7 6.3a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24Z" fill="white"/>
													<path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z" stroke="white" strokeWidth="1.2"/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* name badge */}
							<div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 z-20">
								<div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">{p.name}</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

