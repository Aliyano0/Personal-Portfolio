"use client";
import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Globe,
  Star,
  GitFork,
  Tag,
  ChevronRight,
  ChevronLeft,
  Layers,
  BarChart2,
  GitBranch,
  ImageIcon,
  Book,
  ShoppingBag,
} from "lucide-react";
import { 
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useInView 
} from "motion/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TAGS = ["All", "Front-End", "Backend", "Full-Stack", "RAG Chatbot"] as const; // "AI/ML", "Mobile", "Open Source", "Design"
type Tag = typeof TAGS[number];

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: Omit<Tag, "All">[];
  stack: string[];
  stats: { stars: number; forks: number };
  accent: string;
  accentDim: string;
  icon: React.ReactNode;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  images: { src: string; alt: string; label?: string }[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Timeless Timber Ecommerce Platform for Furniture",
    subtitle: "Ecommerce platform for sustainable furniture brands",
    description:
      "A full-stack ecommerce platform tailored for sustainable furniture brands. Features include a headless CMS for content management, and a custom-built admin dashboard with real-time analytics. Built with Next.js, Sanity CMS, Clerk, Stripe. Deployed on Vercel. Open source on GitHub.",
    tags: ["Front-End", "Full-Stack"],
    stack: ["Next.js", "Sanity", "Clerk", "Stripe"],
    stats: { stars: 0, forks: 0 },
    accent: "#e8ff47",
    accentDim: "rgba(232,255,71,0.1)",
    icon: <ShoppingBag size={20} />,
    featured: true,
    liveUrl: "https://timeless-timber-marketplace.vercel.app",
    githubUrl: "https://github.com/Aliyano0/GIAIC-HACKATHONS/tree/main/Marketplace-Hackathon/marketplace-hackathon",
    year: "2024",
    images: [
      { src: "/projectImages/timelessTimber/tt-homepage.png", alt: "Homepage", label: "Homepage" },
      { src: "/projectImages/timelessTimber/tt-cart.png", alt: "Cart Page", label: "Cart Page" },
      // { src: "/projectImages/timelessTimber/tt-dashboard.png", alt: "Dashboard", label: "Dashboard" },
    ],
  },
  {
    id: 2,
    title: "The-Humanoid-Blueprint",
    subtitle: "Humanoid-robotics E-book.",
    description:
      "A beginner-friendly guide to building autonomous humanoid robots. Learn ROS 2, simulation, NVIDIA Isaac, and Vision-Language-Action models",
    tags: ["Full-Stack", "Open Source", "RAG Chatbot"],
    stack: ["Docusaurus", "React.js", "Better-auth", "NeonDB", "OpenAI Agents SDK", "OpenAI Chatkit", "Qdrant Vector DB", "Docker"],
    stats: { stars: 0, forks: 0 },
    accent: "#3b82f6",
    accentDim: "rgba(59,130,246,0.1)",
    icon: <Book size={20} />,
    featured: true,
    liveUrl: "https://aliyano0.github.io/Humanoid-robotics-book/",
    githubUrl: "https://github.com/Aliyano0/Humanoid-robotics-book",
    year: "2025",
    images: [
      { src: "/projectImages/ebook/ebook-homepage.png", alt: "E-Book Title Page", label: "Homepage" },
      { src: "/projectImages/ebook/overview.png", alt: "E-Book Overview", label: "Overview" },
      { src: "/projectImages/ebook/chatbot.png", alt: "Chatbot", label: "Chatbot" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Prism Design",
  //   subtitle: "Component system & visual design tokens",
  //   description:
  //     "A headless, themeable component library with 80+ primitives. Ships a Figma plugin for direct token sync, automated a11y testing, and a live playground. Used by 6k+ developers.",
  //   tags: ["Design", "Open Source"],
  //   stack: ["React", "TypeScript", "Radix UI", "Storybook", "Figma API"],
  //   stats: { stars: 3100, forks: 440 },
  //   accent: "#a855f7",
  //   accentDim: "rgba(168,85,247,0.1)",
  //   icon: <Layers size={20} />,
  //   featured: false,
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   year: "2023",
  //   images: [
  //     { src: "https://placehold.co/800x450/0e1117/a855f7?text=Component+Library", alt: "Component Library", label: "Component Library" },
  //     { src: "https://placehold.co/800x450/0e1117/a855f7?text=Figma+Plugin", alt: "Figma Plugin", label: "Figma Plugin" },
  //     { src: "https://placehold.co/800x450/0e1117/a855f7?text=Live+Playground", alt: "Playground", label: "Live Playground" },
  //     { src: "https://placehold.co/800x450/0e1117/a855f7?text=Token+Editor", alt: "Token Editor", label: "Token Editor" },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Ledger",
  //   subtitle: "Personal finance & investment tracker",
  //   description:
  //     "Real-time portfolio analytics with tax-loss harvesting alerts, crypto support, and multi-currency budgeting. Aggregates 200+ banks via Plaid. Mobile-first with offline sync.",
  //   tags: ["Mobile", "Full-Stack"],
  //   stack: ["React Native", "Node.js", "Plaid API", "TimescaleDB"],
  //   stats: { stars: 980, forks: 87 },
  //   accent: "#14b8a6",
  //   accentDim: "rgba(20,184,166,0.1)",
  //   icon: <BarChart2 size={20} />,
  //   featured: false,
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   year: "2023",
  //   images: [
  //     { src: "https://placehold.co/800x450/0e1117/14b8a6?text=Portfolio+View", alt: "Portfolio", label: "Portfolio" },
  //     { src: "https://placehold.co/800x450/0e1117/14b8a6?text=Budget+Tracker", alt: "Budget", label: "Budget Tracker" },
  //     { src: "https://placehold.co/800x450/0e1117/14b8a6?text=Crypto+Dashboard", alt: "Crypto", label: "Crypto Dashboard" },
  //   ],
  // },
];

// ─── Image Carousel ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

function ImageCarousel({
  images,
  accent,
  accentDim,
}: {
  images: Project["images"];
  accent: string;
  accentDim: string;
}) {
  const [[current, direction], setSlide] = useState([0, 0]);

  function go(next: number, dir: number) {
    setSlide([(next + images.length) % images.length, dir]);
  }

  if (!images.length) return null;

  return (
    <div className="relative w-full mb-5 rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-contain"
            draggable={false}
          />

          {/* Bottom gradient + label */}
          <div
            className="absolute inset-x-0 bottom-0 h-14 flex items-end pb-2.5 px-3"
            style={{ background: "linear-gradient(to top, rgba(8,10,15,0.85), transparent)" }}
          >
            {images[current].label && (
              <span
                className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                style={{ background: accentDim, color: accent, border: `1px solid ${accent}30` }}
              >
                {images[current].label}
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go(current - 1, -1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm border transition-all duration-200 group/btn"
            style={{
              background: "rgba(8,10,15,0.55)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accentDim;
              e.currentTarget.style.borderColor = `${accent}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(8,10,15,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
            }}
            aria-label="Previous image"
          >
            <ChevronLeft
              size={16}
              style={{ color: "var(--text-dim)" }}
              className="group-hover/btn:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={() => go(current + 1, 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm border transition-all duration-200 group/btn"
            style={{
              background: "rgba(8,10,15,0.55)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accentDim;
              e.currentTarget.style.borderColor = `${accent}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(8,10,15,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
            }}
            aria-label="Next image"
          >
            <ChevronRight
              size={16}
              style={{ color: "var(--text-dim)" }}
              className="group-hover/btn:scale-110 transition-transform"
            />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to image ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "18px" : "6px",
                  height: "6px",
                  background: i === current ? accent : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            className="absolute top-2.5 right-3 z-20 font-mono text-[10px] px-2 py-0.5 rounded-md backdrop-blur-sm"
            style={{
              background: "rgba(8,10,15,0.6)",
              color: "var(--text-muted)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ImageIcon size={9} className="inline mr-1 opacity-60" />
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <svg className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] w-full h-full">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

function StatBadge({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
      {icon}
      <span style={{ color: "var(--text-dim)" }}>{value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}</span>
      <span>{label}</span>
    </span>
  );
}

function StackPill({ tech }: { tech: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-mono border"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "var(--border)",
        color: "var(--text-muted)",
      }}
    >
      {tech}
    </span>
  );
}

// ─── Tilt Card ────────────────────────────────────────────────────────────────

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function resetTilt() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="w-full"
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.012 }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        className="group relative rounded-2xl cursor-default"
      >
        <div
          className="relative rounded-2xl border overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{ background: `radial-gradient(700px circle at 50% 0%, ${project.accentDim}, transparent 65%)` }}
          />

          {/* Top accent line */}
          <div
            className="h-px w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}55, transparent)` }}
          />

          <div className="p-5 md:p-6">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: project.accentDim,
                    color: project.accent,
                    border: `1px solid ${project.accent}30`,
                  }}
                >
                  {project.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      className="font-display tracking-wide text-xl md:text-lg lg:text-xl leading-none"
                      style={{ color: "var(--text)" }}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[8px] xs:text-[10px] md:text-[8px] lg:text-[10px] font-mono uppercase tracking-widest"
                        style={{
                          background: project.accentDim,
                          color: project.accent,
                          border: `1px solid ${project.accent}40`,
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {project.year}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                {project.githubUrl && (
                  <motion.a
                    target="_blank"
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <GitBranch size={14} />
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    target="_blank"
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <Globe size={14} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-sm font-medium mb-2" style={{ color: "var(--text-dim)" }}>
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              {project.description}
            </p>

            {/* ── Image Carousel ── */}
            {project.images.length > 0 && (
              <ImageCarousel
                images={project.images}
                accent={project.accent}
                accentDim={project.accentDim}
              />
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((t) => (
                <StackPill key={t} tech={t} />
              ))}
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between pt-4 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex gap-4">
                <StatBadge icon={<Star size={12} />} value={project.stats.stars} label="stars" />
                <StatBadge icon={<GitFork size={12} />} value={project.stats.forks} label="forks" />
              </div>
              <motion.a
                target="_blank"
                href={project.liveUrl ?? "#"}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
                style={{ background: project.accentDim, color: project.accent }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `${project.accent}25`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = project.accentDim)}
              >
                View Project <ArrowUpRight size={13} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────

function FilterBar({ active, onChange }: { active: Tag; onChange: (t: Tag) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className="relative px-4 py-1.5 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          style={{
            color: active === tag ? "var(--color-main-text)" : "var(--text-muted)",
            background: active === tag ? "var(--accent)" : "transparent",
            border: `1px solid ${active === tag ? "var(--color-main-text)" : "var(--text-muted)"}`,
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

// ─── Hero Header ─────────────────────────────────────────────────────────────

function HeroHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-2 mb-4">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-mono border"
          style={{ borderColor: "var(--border)", color: "var(--color-main-para)", background: "var(--surface)" }}
        >
          {/* <span className="w-1.5 h-1.5 rounded-full text-center" style={{ background: "var(--accent)" }}/> */}
          Selected Work
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--color-main-para)" }}>
          2024-2026
        </span>
      </div>

      <h1
        className="text-6xl md:text-8xl lg:text-[100px] leading-none tracking-wide mb-4"
        style={{ fontFamily: "var(--font-dmSerifDisplay)", color: "var(--color-main-text)" }}
      >
        MY{" "}
        <span style={{ WebkitTextStroke: "1px var(--accent)", color: "var(--color-main-text)" }}>
          PROJECTS
        </span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 max-w-24" style={{ background: "var(--border)" }} />
        <p className="text-base max-w-md" style={{ color: "var(--color-main-para)" }}>
          A curated collection of things I've built — from AI platforms to open source tooling.
        </p>
        <div className="h-px flex-1" style={{ background: "var(--color-main-text)" }} />
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProjectShowcase() {
  const [activeTag, setActiveTag] = useState<Tag>("All");

  const filtered = PROJECTS.filter(
    (p) => activeTag === "All" || p.tags.includes(activeTag as Omit<Tag, "All">)
  );

  return (
    <section
      className="relative min-h-screen px-3 xs:px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24"
      style={{ background: "var(--bg)" }}
    >
      <NoiseOverlay />

      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div
          className="absolute -top-40 -left-40 w-150 h-150 rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "#3b82f6" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <HeroHeader />

        {/* Filter bar */}
        <div className="flex items-center gap-2 xs:gap-3 mb-10">
          <Tag size={14} style={{ color: "var(--text-muted)" }} />
          <FilterBar active={activeTag} onChange={setActiveTag} />
          <span className="ml-auto font-mono text-xs inline-block min-w-8.25" style={{ color: "var(--text-muted)" }}>
            {filtered.length} / {PROJECTS.length}
          </span>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {filtered.map((project, i) => (
              <TiltCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 gap-3"
          >
            <span className="text-4xl">🛸</span>
            <p style={{ color: "var(--text-muted)" }}>No projects found in this category.</p>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl border"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div>
            <p className="font-medium" style={{ color: "var(--text)" }}>Want to see more?</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Check out my GitHub for experiments & WIP projects.
            </p>
          </div>
          <motion.a
            target="_blank"
            href="https://github.com/Aliyano0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm shrink-0"
            style={{ background: "var(--accent)", color: "#fafafa" }}
          >
            <GitBranch size={16} /> View GitHub <ChevronRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
