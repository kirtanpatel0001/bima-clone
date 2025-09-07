import React, { memo } from "react";
import { motion } from "framer-motion";

const CheckIcon = memo(({ className = "w-5 h-5 text-indigo-400" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
	</svg>
));

const PlanCard = memo(function PlanCard({ plan, animation }) {
	const {
		id,
		title,
		price,
		priceLabel,
		tagline,
		cta,
		features,
	} = plan;

	const cardClass = "card-dark p-8 rounded-2xl relative overflow-hidden border border-white/5";

	return (
		<motion.article
			className={cardClass}
			aria-labelledby={`plan-${id}`}
			initial={animation.initial}
			whileInView={animation.whileInView}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 3, type: "spring" }}
		>
			<div className="decor absolute -right-6 -top-6 w-40 h-40 rounded-full border-4 border-white/6 opacity-10 pointer-events-none" />
			<h3 id={`plan-${id}`} className="text-white/90 font-semibold mb-6">
				{title}
			</h3>

			<div className="mb-6">
				<div className="flex items-baseline gap-3">
					<span className="font-extrabold text-4xl text-white">{price}</span>
					<span className="text-sm text-gray-400">{priceLabel}</span>
				</div>
				<p className="mt-4 text-gray-400" dangerouslySetInnerHTML={{ __html: tagline }} />
			</div>

			<button className="w-full py-3 rounded-full bg-transparent border border-white/6 text-white font-semibold mb-6">
				{cta}
			</button>

			<ul className="space-y-3 text-gray-300 text-sm">
				{features.map((f, i) => (
					<li key={i} className="flex items-start gap-3">
						<CheckIcon className="w-5 h-5 mt-1 text-indigo-400 flex-shrink-0" />
						<span>{f}</span>
					</li>
				))}
			</ul>
		</motion.article>
	);
});

const PLANS = [
	{
		id: 'basic',
		title: 'Basic',
		price: '$99',
		priceLabel: '/month',
		tagline: 'Perfect for<br/>Small businesses',
		cta: 'Choose Basic',
		features: [
			'AI chatbot for customer inquiries',
			'Basic workflow automation (email, CRM, data entry)',
			'AI-powered analytics dashboard',
			'24/7 support via email',
		],
	},
	{
		id: 'growth',
		title: 'Growth',
		price: '$299',
		priceLabel: '/month',
		tagline: 'Perfect for<br/>Growing teams',
		cta: 'Choose Growth',
		features: [
			'Everything in Starter Plan',
			'Advanced AI chatbots with custom responses',
			'AI-driven lead qualification & follow-up',
			'Automated reporting & insights',
			'Priority customer support',
		],
	},
	{
		id: 'bespoke',
		title: 'Bespoke',
		price: 'Custom Pricing',
		priceLabel: '',
		tagline: 'Perfect for<br/>Large businesses',
		cta: 'Contact Us',
		features: [
			'Everything in Growth Plan',
			'Custom AI integrations',
			'AI-powered decision-making models',
			'Workflow automation for multiple departments',
			'Dedicated AI consultant & 24/7 priority support',
		],
	},
];

export default function CoursePricing() {
	// Animation: 1st and 3rd from left, 2nd from right
	const animations = [
		{ initial: { x: -80, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
		{ initial: { x: 80, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
		{ initial: { x: -80, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
	];
	return (
		<section className="max-w-7xl mx-auto px-6 py-20">
			<div className="flex items-center justify-between mb-10">
				<h2 className="text-4xl font-extrabold top-72 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">COURSES</h2>
			</div>
			<div className="grid gap-8 md:grid-cols-3">
				{PLANS.map((p, i) => (
					<PlanCard key={p.id} plan={p} animation={animations[i % animations.length]} />
				))}
			</div>
		</section>
	);
}
