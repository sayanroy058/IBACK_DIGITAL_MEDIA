import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Megaphone,
  Search,
  Target,
  Share2,
  Camera,
  Users,
  Palette,
  Layout,
  Code2,
  Component,
  Globe,
  Mail,
  Server,
  Video,
  BarChart3,
  Briefcase,
  PenTool,
  TrendingUp,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import logoUrl from "@/assets/1000151066-Photoroom.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--ce0b05a9-716a-4258-8e4e-287628d47a66.lovable.app/og.jpg" },
    ],
  }),
});

/* ---------- Cursor glow ---------- */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] rounded-full opacity-40 mix-blend-screen transition-transform duration-300 ease-out"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background: "radial-gradient(circle, rgba(240,120,24,0.25), transparent 60%)",
      }}
    />
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 transition-all duration-500 md:px-6 glass-sky rounded-full`}
        style={{ maxWidth: "72rem" }}
      >
        <a href="#top" className="group flex items-center gap-2">
          <img
            src={logoUrl}
            alt="IBACK Digital Media"
            className="h-10 w-auto md:h-12"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--gold)]/40 px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all hover:border-[var(--gold)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative transition-colors group-hover:text-background">Start Project</span>
          <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform group-hover:rotate-45 group-hover:text-background" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury digital agency 3D scene"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-85"
          style={{ filter: "brightness(1.15) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-[30%] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(9,9,9,0.35)_80%)]" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[var(--gold)]/18 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-[var(--gold)]/12 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gold)]/30 glass px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--cream)]/80">
            Premium Digital Agency · Sharjah, UAE
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
          {["Where", "Vision", "Meets"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="italic text-gradient-gold animate-gradient"
            style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6,#f07818,#3fb4e6)" }}
          >
            Digital Excellence.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Helping ambitious businesses grow through world-class marketing, branding, websites and technology — engineered in Sharjah, delivered worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:gold-glow"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#ffb066] to-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 glass px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground transition-all hover:border-[var(--gold)]/50"
          >
            Book Free Consultation
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] transition-transform group-hover:scale-150" />
          </a>
        </motion.div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-24 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/5 pt-8"
        >
          {[
            ["250+", "Projects"],
            ["12", "Countries"],
            ["8yr", "Experience"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-medium text-[var(--gold)]">{n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce text-[var(--gold)]" />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const words = ["Branding", "Strategy", "Web", "Motion", "SEO", "Ads", "Growth", "Design", "Content"];
  return (
    <section className="relative border-y border-white/5 overflow-hidden py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="mx-6 font-display text-xl font-light text-foreground/40 md:text-3xl">
            {w} <span className="text-[var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionLabel({ eyebrow, title, className = "" }: { eyebrow: string; title: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="h-px w-12 bg-[var(--gold)]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="About" title={<>A studio built for<br />brands that refuse to <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>blend in</em>.</>} />
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              IBACK Digital Media is a Sharjah-based agency crafting brands, campaigns and digital products for founders who play the long game. We pair sharp strategy with cinematic craft — no templates, no shortcuts.
            </motion.p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative border-l border-[var(--gold)]/20 pl-8">
              {[
                { year: "01", title: "Innovation", body: "Ideas that push the category forward, not backwards." },
                { year: "02", title: "Craft", body: "Pixel-perfect execution across every touchpoint." },
                { year: "03", title: "Trust", body: "Transparent, senior teams — no account handlers." },
                { year: "04", title: "Growth", body: "Work measured by revenue, not vanity metrics." },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative mb-10 last:mb-0"
                >
                  <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border border-[var(--gold)] bg-background transition-all group-hover:bg-[var(--gold)] group-hover:gold-glow" />
                  <div className="mb-2 font-mono text-xs text-[var(--gold)]">{s.year}</div>
                  <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const services = [
  { icon: Megaphone, name: "Social Media Management", cat: "Marketing" },
  { icon: TrendingUp, name: "Digital Marketing", cat: "Marketing" },
  { icon: Globe, name: "Domain Registration", cat: "Infra" },
  { icon: Search, name: "SEO Optimization", cat: "Marketing" },
  { icon: Target, name: "Google & Meta Ads", cat: "Performance" },
  { icon: Layout, name: "Website Design", cat: "Design" },
  { icon: Code2, name: "Web Development", cat: "Tech" },
  { icon: Sparkles, name: "Brand Identity", cat: "Design" },
  { icon: Server, name: "Web Hosting", cat: "Infra" },
];

function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 0%, rgba(240,120,24,0.15), transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Services" title={<>Everything you need,<br />under <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>one roof</em>.</>} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/50"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(240,120,24,0.15), transparent 60%)" }} />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 transition-all group-hover:bg-[var(--gold)]/15 group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{s.cat}</span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-medium leading-tight">{s.name}</h3>
                <div className="relative mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-[var(--gold)]">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us / Counters ---------- */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 2000;
        const tick = (t: number) => {
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
  return <span ref={ref}>{val}{suffix}</span>;
}

function WhyUs() {
  const items = [
    { n: 8, s: "+", label: "Years of Experience" },
    { n: 250, s: "+", label: "Projects Delivered" },
    { n: 98, s: "%", label: "Client Retention" },
    { n: 47, s: "M", label: "Revenue Generated" },
    { n: 12, s: "", label: "Countries Served" },
  ];
  return (
    <section className="relative border-y border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Why Choose Us" title={<>Numbers that speak <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>louder</em>.</>} />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-background p-8 transition-all hover:bg-card"
            >
              <div className="font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl">
                <Counter end={it.n} suffix={it.s} />
              </div>
              <div className="mt-3 h-px w-8 bg-[var(--gold)] transition-all group-hover:w-16" />
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Deep dive into your brand, market and goals." },
    { n: "02", t: "Strategy", d: "A clear roadmap grounded in data and craft." },
    { n: "03", t: "Design", d: "Distinctive visual systems built to convert." },
    { n: "04", t: "Develop", d: "Fast, accessible, technically flawless builds." },
    { n: "05", t: "Launch", d: "Coordinated release with QA and analytics." },
    { n: "06", t: "Grow", d: "Continuous optimisation and creative iteration." },
  ];
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Process" title={<>Six steps. <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>Zero fluff.</em></>} />
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-background font-display text-lg text-[var(--gold)] transition-all group-hover:bg-[var(--gold)] group-hover:text-background group-hover:gold-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-xl font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech ---------- */
function Tech() {
  const tech = ["WordPress", "React", "Next.js", "Node.js", "Laravel", "Figma", "Adobe", "Google", "Meta", "AWS", "Cloudflare", "Shopify"];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Technology" title={<>The stack behind <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>the magic</em>.</>} />
        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex h-24 w-24 items-center justify-center rounded-full glass text-center text-xs font-medium transition-all hover:scale-110 hover:border-[var(--gold)] hover:text-[var(--gold)] md:h-32 md:w-32 md:text-sm"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
function Portfolio() {
  const projects = [
    { img: portfolio1, title: "Aurum Financial", cat: "Web · Brand", year: "2024" },
    { img: portfolio2, title: "Noir Atelier", cat: "Identity · Packaging", year: "2024" },
    { img: portfolio3, title: "Verse Commerce", cat: "E-commerce · UX", year: "2025" },
  ];
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Selected Work" title={<>Recent <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>projects</em>.</>} />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="grid md:grid-cols-12">
                <div className="relative overflow-hidden md:col-span-8">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-[280px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-between bg-card p-8 md:col-span-4 md:p-12">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{p.cat}</span>
                      <span className="h-px w-8 bg-[var(--gold)]/40" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
                    </div>
                    <h3 className="font-display text-3xl font-medium leading-tight md:text-4xl">{p.title}</h3>
                    <p className="mt-4 text-sm text-muted-foreground">A cinematic digital experience combining brand strategy, motion and technology.</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors group-hover:text-[var(--gold)]">
                    View case study <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { q: "IBACK rebuilt our entire brand and grew revenue 3x in eight months. The best partner we've hired.", a: "Layla A.", r: "Founder, Aurum Financial" },
    { q: "Every deliverable felt premium. Their team operates like an in-house creative studio.", a: "Marcus R.", r: "CMO, Noir Atelier" },
    { q: "Fast, sharp, senior. They shipped a flagship site in six weeks — with zero drama.", a: "Sara H.", r: "CEO, Verse Commerce" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Client Success" title={<><em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>Testimonials</em>.</>} />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40"
            >
              <div className="font-display text-6xl leading-none text-[var(--gold)]/40">"</div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">{t.q}</p>
              <div className="mt-8 border-t border-white/10 pt-4">
                <div className="font-medium">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(240,120,24,0.2), transparent 60%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/10 blur-[120px] animate-pulse-glow" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl font-medium leading-[1] tracking-tight md:text-7xl lg:text-8xl"
        >
          Let's build something{" "}
          <em className="text-gradient-gold animate-gradient" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6,#f07818,#3fb4e6)" }}>extraordinary</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Book a free 30-minute consultation. We'll audit your presence and outline a plan you can act on.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] text-background transition-all hover:gold-glow"
        >
          Book Your Free Consultation
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </motion.a>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Contact" title={<>Start the <em className="text-gradient-gold" style={{ backgroundImage: "linear-gradient(90deg,#f07818,#ffb066,#3fb4e6)" }}>conversation</em>.</>} />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Studio</div>
              <div className="flex items-start gap-3 text-lg">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <div>IBACK Digital Media<br /><span className="text-muted-foreground">Al Mtsannid Suburb - Sharjah - United Arab Emirates</span></div>
              </div>
            </div>
            <div className="grid gap-6 border-t border-white/5 pt-8">
              <a href="mailto:support@ibackdigital.media" className="group flex items-center gap-3 text-lg transition-colors hover:text-[var(--gold)]">
                <Mail className="h-4 w-4 text-[var(--gold)]" /> support@ibackdigital.media
              </a>
              <a href="tel:+971551957769" className="group flex items-center gap-3 text-lg transition-colors hover:text-[var(--gold)]">
                <Phone className="h-4 w-4 text-[var(--gold)]" /> +971 55 195 7769
              </a>
              <a href="https://wa.me/971551957769" className="group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:bg-[var(--gold)] hover:text-background">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a href="https://botim.me/0551957769" className="group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:bg-[var(--gold)] hover:text-background">
                <MessageCircle className="h-4 w-4" /> Chat / Call on Botim
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden h-64">
              <iframe
                title="Sharjah location"
                src="https://www.google.com/maps?q=Sharjah+Media+City+(Shams+Free+Zone)&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch within one business day.");
            }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8 lg:col-span-7 md:p-12"
          >
            <div className="pointer-events-none absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-2">
              {[
                { l: "Full Name", t: "text", n: "name" },
                { l: "Email", t: "email", n: "email" },
                { l: "Company", t: "text", n: "company" },
                { l: "Budget (USD)", t: "text", n: "budget" },
              ].map((f) => (
                <label key={f.n} className="group relative block">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{f.l}</span>
                  <input
                    type={f.t}
                    name={f.n}
                    required={f.n !== "budget" && f.n !== "company"}
                    className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-base outline-none transition-colors focus:border-[var(--gold)]"
                  />
                </label>
              ))}
              <label className="relative block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tell us about your project</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent pb-3 text-base outline-none transition-colors focus:border-[var(--gold)]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:gold-glow"
            >
              <span className="relative z-10">Send Inquiry</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-[var(--gold)]/20 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="IBACK Digital Media" className="h-11 w-auto" />
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} IBACK Digital Media · Sharjah, UAE</div>
        <div className="flex gap-4">
          {[Camera, Users, Share2].map((I, i) => (
            <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ---------- Scroll progress ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--gold)] via-[#ffb066] to-[var(--gold)]"
    />
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground noise">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Tech />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
