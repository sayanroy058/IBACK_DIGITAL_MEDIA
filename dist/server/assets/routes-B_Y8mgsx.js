import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Camera, ChevronDown, Code2, Globe, Layout, Mail, MapPin, Megaphone, MessageCircle, Phone, Search, Server, Share2, Sparkles, Target, TrendingUp, Users } from "lucide-react";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-5lNnVb_i.jpg";
//#endregion
//#region src/assets/portfolio-1.jpg
var portfolio_1_default = "/assets/portfolio-1-BaRx5GIm.jpg";
//#endregion
//#region src/assets/portfolio-2.jpg
var portfolio_2_default = "/assets/portfolio-2-CE46v-t_.jpg";
//#endregion
//#region src/assets/portfolio-3.jpg
var portfolio_3_default = "/assets/portfolio-3-D7Mh2Yox.jpg";
//#endregion
//#region src/assets/1000151066-Photoroom.png
var _1000151066_Photoroom_default = "/assets/1000151066-Photoroom-CyP5uVIH.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function CursorGlow() {
	const [pos, setPos] = useState({
		x: -200,
		y: -200
	});
	useEffect(() => {
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed z-[100] h-[500px] w-[500px] rounded-full opacity-40 mix-blend-screen transition-transform duration-300 ease-out",
		style: {
			left: pos.x - 250,
			top: pos.y - 250,
			background: "radial-gradient(circle, rgba(240,120,24,0.25), transparent 60%)"
		}
	});
}
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: `mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 transition-all duration-500 md:px-6 glass-sky rounded-full`,
			style: { maxWidth: "72rem" },
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#top",
					className: "group flex items-center gap-2",
					children: /* @__PURE__ */ jsx("img", {
						src: _1000151066_Photoroom_default,
						alt: "IBACK Digital Media",
						className: "h-10 w-auto md:h-12"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						["Work", "#work"],
						["Services", "#services"],
						["Process", "#process"],
						["Contact", "#contact"]
					].map(([label, href]) => /* @__PURE__ */ jsxs("a", {
						href,
						className: "group relative text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
						children: [label, /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" })]
					}, href))
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "#contact",
					className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--gold)]/40 px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all hover:border-[var(--gold)]",
					children: [
						/* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" }),
						/* @__PURE__ */ jsx("span", {
							className: "relative transition-colors group-hover:text-background",
							children: "Start Project"
						}),
						/* @__PURE__ */ jsx(ArrowUpRight, { className: "relative h-3.5 w-3.5 transition-transform group-hover:rotate-45 group-hover:text-background" })
					]
				})
			]
		})
	});
}
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		ref,
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					scale,
					y
				},
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: hero_default,
						alt: "Luxury digital agency 3D scene",
						width: 1920,
						height: 1280,
						className: "h-full w-full object-cover opacity-85",
						style: { filter: "brightness(1.15) contrast(1.05)" }
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/25 via-background/40 to-background" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 via-[30%] to-transparent" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(9,9,9,0.35)_80%)]" })
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[var(--gold)]/18 blur-[120px] animate-pulse-glow" }),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-[var(--gold)]/12 blur-[100px] animate-pulse-glow",
				style: { animationDelay: "2s" }
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				style: { opacity },
				className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32",
				children: [
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gold)]/30 glass px-4 py-1.5",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" }), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] uppercase tracking-[0.25em] text-[var(--cream)]/80",
							children: "Premium Digital Agency · Sharjah, UAE"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-tight text-foreground",
						children: [
							[
								"Where",
								"Vision",
								"Meets"
							].map((word, i) => /* @__PURE__ */ jsx(motion.span, {
								initial: {
									opacity: 0,
									y: 60,
									filter: "blur(10px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								transition: {
									duration: .9,
									delay: .15 * i,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "mr-4 inline-block",
								children: word
							}, word)),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx(motion.span, {
								initial: {
									opacity: 0,
									y: 60,
									filter: "blur(10px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								transition: {
									duration: 1,
									delay: .6,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "italic text-gradient-gold animate-gradient",
								style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6,#f07818,#3fb4e6)" },
								children: "Digital Excellence."
							})
						]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .9
						},
						className: "mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl",
						children: "Helping ambitious businesses grow through world-class marketing, branding, websites and technology — engineered in Sharjah, delivered worldwide."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: 1.1
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:gold-glow",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "relative z-10",
									children: "Start Your Project"
								}),
								/* @__PURE__ */ jsx(ArrowUpRight, { className: "relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" }),
								/* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-[#ffb066] to-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" })
							]
						}), /* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-3 rounded-full border border-white/15 glass px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground transition-all hover:border-[var(--gold)]/50",
							children: ["Book Free Consultation", /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)] transition-transform group-hover:scale-150" })]
						})]
					}),
					/* @__PURE__ */ jsx(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 1.4
						},
						className: "mt-24 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/5 pt-8",
						children: [
							["250+", "Projects"],
							["12", "Countries"],
							["8yr", "Experience"]
						].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-3xl font-medium text-[var(--gold)]",
							children: n
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: l
						})] }, l))
					})
				]
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1.6 },
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
					children: ["Scroll", /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 animate-bounce text-[var(--gold)]" })]
				})
			})
		]
	});
}
function Marquee() {
	const words = [
		"Branding",
		"Strategy",
		"Web",
		"Motion",
		"SEO",
		"Ads",
		"Growth",
		"Design",
		"Content"
	];
	return /* @__PURE__ */ jsx("section", {
		className: "relative border-y border-white/5 overflow-hidden py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex animate-marquee whitespace-nowrap",
			children: [
				...words,
				...words,
				...words
			].map((w, i) => /* @__PURE__ */ jsxs("span", {
				className: "mx-6 font-display text-xl font-light text-foreground/40 md:text-3xl",
				children: [
					w,
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-[var(--gold)]",
						children: "✦"
					})
				]
			}, i))
		})
	});
}
function SectionLabel({ eyebrow, title, className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `mb-16 ${className}`,
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				x: -20
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: { once: true },
			transition: { duration: .6 },
			className: "mb-4 flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-[var(--gold)]" }), /* @__PURE__ */ jsx("span", {
				className: "text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]",
				children: eyebrow
			})]
		}), /* @__PURE__ */ jsx(motion.h2, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .8,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
			children: title
		})]
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "relative py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "About",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"A studio built for",
					/* @__PURE__ */ jsx("br", {}),
					"brands that refuse to ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "blend in"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .8 },
						className: "text-lg leading-relaxed text-muted-foreground md:text-xl",
						children: "IBACK Digital Media is a Sharjah-based agency crafting brands, campaigns and digital products for founders who play the long game. We pair sharp strategy with cinematic craft — no templates, no shortcuts."
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative border-l border-[var(--gold)]/20 pl-8",
						children: [
							{
								year: "01",
								title: "Innovation",
								body: "Ideas that push the category forward, not backwards."
							},
							{
								year: "02",
								title: "Craft",
								body: "Pixel-perfect execution across every touchpoint."
							},
							{
								year: "03",
								title: "Trust",
								body: "Transparent, senior teams — no account handlers."
							},
							{
								year: "04",
								title: "Growth",
								body: "Work measured by revenue, not vanity metrics."
							}
						].map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: i * .1
							},
							className: "group relative mb-10 last:mb-0",
							children: [
								/* @__PURE__ */ jsx("span", { className: "absolute -left-[41px] top-2 h-3 w-3 rounded-full border border-[var(--gold)] bg-background transition-all group-hover:bg-[var(--gold)] group-hover:gold-glow" }),
								/* @__PURE__ */ jsx("div", {
									className: "mb-2 font-mono text-xs text-[var(--gold)]",
									children: s.year
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl font-medium",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-muted-foreground",
									children: s.body
								})
							]
						}, s.title))
					})
				})]
			})]
		})
	});
}
var services = [
	{
		icon: Megaphone,
		name: "Social Media Management",
		cat: "Marketing"
	},
	{
		icon: TrendingUp,
		name: "Digital Marketing",
		cat: "Marketing"
	},
	{
		icon: Globe,
		name: "Domain Registration",
		cat: "Infra"
	},
	{
		icon: Search,
		name: "SEO Optimization",
		cat: "Marketing"
	},
	{
		icon: Target,
		name: "Google & Meta Ads",
		cat: "Performance"
	},
	{
		icon: Layout,
		name: "Website Design",
		cat: "Design"
	},
	{
		icon: Code2,
		name: "Web Development",
		cat: "Tech"
	},
	{
		icon: Sparkles,
		name: "Brand Identity",
		cat: "Design"
	},
	{
		icon: Server,
		name: "Web Hosting",
		cat: "Infra"
	}
];
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		id: "services",
		className: "relative py-32",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 opacity-20",
			style: { background: "radial-gradient(circle at 50% 0%, rgba(240,120,24,0.15), transparent 50%)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Services",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Everything you need,",
					/* @__PURE__ */ jsx("br", {}),
					"under ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "one roof"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => {
					const Icon = s.icon;
					return /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .5,
							delay: i % 3 * .08
						},
						className: "group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/50",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
								style: { background: "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(240,120,24,0.15), transparent 60%)" }
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex items-start justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 transition-all group-hover:bg-[var(--gold)]/15 group-hover:rotate-6",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-[var(--gold)]" })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
									children: s.cat
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "relative mt-6 font-display text-xl font-medium leading-tight",
								children: s.name
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-[var(--gold)]",
								children: ["Learn more ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })]
							})
						]
					}, s.name);
				})
			})]
		})]
	});
}
function Counter({ end, suffix = "" }) {
	const [val, setVal] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const start = performance.now();
				const dur = 2e3;
				const tick = (t) => {
					const p = Math.min((t - start) / dur, 1);
					const eased = 1 - Math.pow(1 - p, 3);
					setVal(Math.floor(eased * end));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		});
		io.observe(el);
		return () => io.disconnect();
	}, [end]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [val, suffix]
	});
}
function WhyUs() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative border-y border-white/5 py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Why Choose Us",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Numbers that speak ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "louder"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-5",
				children: [
					{
						n: 8,
						s: "+",
						label: "Years of Experience"
					},
					{
						n: 250,
						s: "+",
						label: "Projects Delivered"
					},
					{
						n: 98,
						s: "%",
						label: "Client Retention"
					},
					{
						n: 47,
						s: "M",
						label: "Revenue Generated"
					},
					{
						n: 12,
						s: "",
						label: "Countries Served"
					}
				].map((it, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: "group relative bg-background p-8 transition-all hover:bg-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl",
							children: /* @__PURE__ */ jsx(Counter, {
								end: it.n,
								suffix: it.s
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "mt-3 h-px w-8 bg-[var(--gold)] transition-all group-hover:w-16" }),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: it.label
						})
					]
				}, it.label))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ jsx("section", {
		id: "process",
		className: "relative py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Process",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Six steps. ", /* @__PURE__ */ jsx("em", {
					className: "text-gradient-gold",
					style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
					children: "Zero fluff."
				})] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent lg:block" }), /* @__PURE__ */ jsx("div", {
					className: "grid gap-8 lg:grid-cols-6",
					children: [
						{
							n: "01",
							t: "Discover",
							d: "Deep dive into your brand, market and goals."
						},
						{
							n: "02",
							t: "Strategy",
							d: "A clear roadmap grounded in data and craft."
						},
						{
							n: "03",
							t: "Design",
							d: "Distinctive visual systems built to convert."
						},
						{
							n: "04",
							t: "Develop",
							d: "Fast, accessible, technically flawless builds."
						},
						{
							n: "05",
							t: "Launch",
							d: "Coordinated release with QA and analytics."
						},
						{
							n: "06",
							t: "Grow",
							d: "Continuous optimisation and creative iteration."
						}
					].map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .08
						},
						className: "group relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-background font-display text-lg text-[var(--gold)] transition-all group-hover:bg-[var(--gold)] group-hover:text-background group-hover:gold-glow",
								children: s.n
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-medium",
								children: s.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.n))
				})]
			})]
		})
	});
}
function Tech() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Technology",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"The stack behind ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "the magic"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap justify-center gap-4",
				children: [
					"WordPress",
					"React",
					"Next.js",
					"Node.js",
					"Laravel",
					"Figma",
					"Adobe",
					"Google",
					"Meta",
					"AWS",
					"Cloudflare",
					"Shopify"
				].map((t, i) => /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .04
					},
					className: "group flex h-24 w-24 items-center justify-center rounded-full glass text-center text-xs font-medium transition-all hover:scale-110 hover:border-[var(--gold)] hover:text-[var(--gold)] md:h-32 md:w-32 md:text-sm",
					children: t
				}, t))
			})]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ jsx("section", {
		id: "work",
		className: "relative py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Selected Work",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Recent ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "projects"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-6",
				children: [
					{
						img: portfolio_1_default,
						title: "Aurum Financial",
						cat: "Web · Brand",
						year: "2024"
					},
					{
						img: portfolio_2_default,
						title: "Noir Atelier",
						cat: "Identity · Packaging",
						year: "2024"
					},
					{
						img: portfolio_3_default,
						title: "Verse Commerce",
						cat: "E-commerce · UX",
						year: "2025"
					}
				].map((p, i) => /* @__PURE__ */ jsx(motion.a, {
					href: "#contact",
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						duration: .8,
						delay: i * .1
					},
					className: "group relative block overflow-hidden rounded-3xl border border-white/10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden md:col-span-8",
							children: [/* @__PURE__ */ jsx("img", {
								src: p.img,
								alt: p.title,
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:h-[500px]"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col justify-between bg-card p-8 md:col-span-4 md:p-12",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mb-3 flex items-center gap-3",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]",
											children: p.cat
										}),
										/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-[var(--gold)]/40" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
											children: p.year
										})
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-3xl font-medium leading-tight md:text-4xl",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: "A cinematic digital experience combining brand strategy, motion and technology."
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors group-hover:text-[var(--gold)]",
								children: ["View case study ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:rotate-45" })]
							})]
						})]
					})
				}, p.title))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Client Success",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("em", {
					className: "text-gradient-gold",
					style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
					children: "Testimonials"
				}), "."] })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						q: "IBACK rebuilt our entire brand and grew revenue 3x in eight months. The best partner we've hired.",
						a: "Layla A.",
						r: "Founder, Aurum Financial"
					},
					{
						q: "Every deliverable felt premium. Their team operates like an in-house creative studio.",
						a: "Marcus R.",
						r: "CMO, Noir Atelier"
					},
					{
						q: "Fast, sharp, senior. They shipped a flagship site in six weeks — with zero drama.",
						a: "Sara H.",
						r: "CEO, Verse Commerce"
					}
				].map((t, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i * .1
					},
					className: "group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "font-display text-6xl leading-none text-[var(--gold)]/40",
							children: "\""
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg leading-relaxed text-foreground",
							children: t.q
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 border-t border-white/10 pt-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-medium",
								children: t.a
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: t.r
							})]
						})
					]
				}, i))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden py-32",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, rgba(240,120,24,0.2), transparent 60%)" }
			}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/10 blur-[120px] animate-pulse-glow" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ jsxs(motion.h2, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .8 },
						className: "font-display text-5xl font-medium leading-[1] tracking-tight md:text-7xl lg:text-8xl",
						children: [
							"Let's build something",
							" ",
							/* @__PURE__ */ jsx("em", {
								className: "text-gradient-gold animate-gradient",
								style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6,#f07818,#3fb4e6)" },
								children: "extraordinary"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .2
						},
						className: "mx-auto mt-8 max-w-xl text-lg text-muted-foreground",
						children: "Book a free 30-minute consultation. We'll audit your presence and outline a plan you can act on."
					}),
					/* @__PURE__ */ jsxs(motion.a, {
						href: "#contact",
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .4
						},
						className: "group mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] text-background transition-all hover:gold-glow",
						children: ["Book Your Free Consultation", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:rotate-45" })]
					})
				]
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "relative border-t border-white/5 py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				eyebrow: "Contact",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Start the ",
					/* @__PURE__ */ jsx("em", {
						className: "text-gradient-gold",
						style: { backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" },
						children: "conversation"
					}),
					"."
				] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-8 lg:col-span-5",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]",
							children: "Studio"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 text-lg",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" }), /* @__PURE__ */ jsxs("div", { children: [
								"IBACK Digital Media",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Al Mtsannid Suburb - Sharjah - United Arab Emirates"
								})
							] })]
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-6 border-t border-white/5 pt-8",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "mailto:support@ibackdigital.media",
									className: "group flex items-center gap-3 text-lg transition-colors hover:text-[var(--gold)]",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-[var(--gold)]" }), " support@ibackdigital.media"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "tel:+971551957769",
									className: "group flex items-center gap-3 text-lg transition-colors hover:text-[var(--gold)]",
									children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-[var(--gold)]" }), " +971 55 195 7769"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/971551957769",
									className: "group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:bg-[var(--gold)] hover:text-background",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://botim.me/0551957769",
									className: "group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:bg-[var(--gold)] hover:text-background",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), " Chat / Call on Botim"]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-white/10 overflow-hidden h-64",
							children: /* @__PURE__ */ jsx("iframe", {
								title: "Sharjah location",
								src: "https://www.google.com/maps?q=Sharjah+Media+City+(Shams+Free+Zone)&output=embed",
								className: "h-full w-full",
								loading: "lazy"
							})
						})
					]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						alert("Thanks — we'll be in touch within one business day.");
					},
					className: "glass-strong relative overflow-hidden rounded-3xl p-8 lg:col-span-7 md:p-12",
					children: [
						/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative grid gap-6 md:grid-cols-2",
							children: [[
								{
									l: "Full Name",
									t: "text",
									n: "name"
								},
								{
									l: "Email",
									t: "email",
									n: "email"
								},
								{
									l: "Company",
									t: "text",
									n: "company"
								},
								{
									l: "Budget (USD)",
									t: "text",
									n: "budget"
								}
							].map((f) => /* @__PURE__ */ jsxs("label", {
								className: "group relative block",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: f.l
								}), /* @__PURE__ */ jsx("input", {
									type: f.t,
									name: f.n,
									required: f.n !== "budget" && f.n !== "company",
									className: "w-full border-0 border-b border-white/15 bg-transparent pb-3 text-base outline-none transition-colors focus:border-[var(--gold)]"
								})]
							}, f.n)), /* @__PURE__ */ jsxs("label", {
								className: "relative block md:col-span-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Tell us about your project"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 4,
									required: true,
									className: "w-full resize-none border-0 border-b border-white/15 bg-transparent pb-3 text-base outline-none transition-colors focus:border-[var(--gold)]"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							className: "group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:gold-glow",
							children: [/* @__PURE__ */ jsx("span", {
								className: "relative z-10",
								children: "Send Inquiry"
							}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" })]
						})
					]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "relative border-t border-[var(--gold)]/20 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ jsx("img", {
						src: _1000151066_Photoroom_default,
						alt: "IBACK Digital Media",
						className: "h-11 w-auto"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" IBACK Digital Media · Sharjah, UAE"
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex gap-4",
					children: [
						Camera,
						Users,
						Share2
					].map((I, i) => /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]",
						children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" })
					}, i))
				})
			]
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	return /* @__PURE__ */ jsx(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--gold)] via-[#ffb066] to-[var(--gold)]"
	});
}
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen bg-background text-foreground noise",
		children: [
			/* @__PURE__ */ jsx(ScrollProgress, {}),
			/* @__PURE__ */ jsx(CursorGlow, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Marquee, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Services, {}),
				/* @__PURE__ */ jsx(WhyUs, {}),
				/* @__PURE__ */ jsx(Process, {}),
				/* @__PURE__ */ jsx(Tech, {}),
				/* @__PURE__ */ jsx(Portfolio, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(CTA, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
