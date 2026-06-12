"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaDatabase } from "react-icons/fa";
import { PiDotsThreeCircle } from "react-icons/pi";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiFramer, SiShadcnui, SiExpress, SiFastapi,
  SiPostgresql, SiMongodb, SiSanity, SiPostman, SiPrisma,
} from "react-icons/si";
import { VscGithubAction } from "react-icons/vsc";
import { TbAtom2 } from "react-icons/tb"; // used for Zustand (state atom metaphor)

// ── Types ─────────────────────────────────────────────────────────────────────

type Skill = { name: string; icon: React.ReactNode; color: string };
type TabKey = "frontend" | "backend" | "other";

// ── Skill data ────────────────────────────────────────────────────────────────

const FRONTEND: Skill[] = [
  { name: "HTML",           icon: <SiHtml5 />,       color: "#E34F26" },
  { name: "CSS",            icon: <SiCss />,          color: "#1572B6" },
  { name: "JavaScript",     icon: <SiJavascript />,   color: "#F7DF1E" },
  { name: "TypeScript",     icon: <SiTypescript />,   color: "#3178C6" },
  { name: "React.js",       icon: <SiReact />,        color: "#61DAFB" },
  { name: "Next.js",        icon: <SiNextdotjs />,    color: "#e5e5e5" },
  { name: "Tailwind CSS",   icon: <SiTailwindcss />,  color: "#06B6D4" },
  { name: "ShadCN UI",      icon: <SiShadcnui />,     color: "#e5e5e5" },
  { name: "Framer Motion",  icon: <SiFramer />,       color: "#e5e5e5" },
  { name: "Zustand",        icon: <TbAtom2 />,        color: "#c084fc" },
];

const BACKEND: Skill[] = [
  { name: "Node.js",    icon: <FaNodeJs />,    color: "#339933" },
  { name: "Express.js", icon: <SiExpress />,   color: "#e5e5e5" },
  { name: "Python",     icon: <FaPython />,    color: "#3776AB" },
  { name: "FastAPI",    icon: <SiFastapi />,   color: "#009688" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  { name: "MongoDB",    icon: <SiMongodb />,   color: "#47A248" },
  { name: "Mongoose",    icon: <SiMongoose />,   color: "#B5A27F" },
  { name: "SanityCMS",  icon: <SiSanity />,    color: "#F03E2F" },
  { name: "SQLModel",   icon: <FaDatabase />,  color: "#6366f1" },
];

const OTHER: Skill[] = [
  { name: "Git",     icon: <FaGitAlt />,         color: "#F05032" },
  { name: "Postman", icon: <SiPostman />,         color: "#FF6C37" },
  { name: "Docker",  icon: <FaDocker />,          color: "#2496ED" },
  { name: "AWS",     icon: <FaAws />,             color: "#FF9900" },
  // { name: "CI/CD",   icon: <VscGithubAction />,   color: "#2088FF" },
];

const SKILL_MAP: Record<TabKey, Skill[]> = { frontend: FRONTEND, backend: BACKEND, other: OTHER };

const GLOW: Record<TabKey, string> = {
  frontend: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(97,218,251,0.07), transparent)",
  backend:  "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(51,153,51,0.07), transparent)",
  other:    "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,153,0,0.07), transparent)",
};

// ── Skill bubble ──────────────────────────────────────────────────────────────

function SkillBubble({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.45, y: -10 }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-2.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle */}
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 0 0 1.5px ${skill.color}60, 0 6px 24px ${skill.color}30`
            : "0 0 0 1px rgba(255,255,255,0.06)",
          background: hovered
            ? `${skill.color}14`
            : "rgba(255,255,255,0.035)",
        }}
        transition={{ duration: 0.22 }}
        className="w-15 h-15 sm:w-17 sm:h-17 md:w-19 md:h-19 rounded-full flex items-center justify-center cursor-default relative overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Inner radial shimmer on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 rounded-full"
              style={{ background: `radial-gradient(circle at 38% 32%, ${skill.color}22, transparent 62%)` }}
            />
          )}
        </AnimatePresence>

        <motion.span
          animate={{ color: hovered ? skill.color : "rgba(255,255,255,0.45)", scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.18 }}
          className="text-[22px] sm:text-[28px] relative z-10 leading-none"
        >
          {skill.icon}
        </motion.span>
      </motion.div>

      {/* Label */}
      <motion.span
        animate={{ color: hovered ? skill.color : "rgba(255,255,255,0.38)", y: hovered ? -2 : 0 }}
        transition={{ duration: 0.18 }}
        className="text-[10px] sm:text-[11px] font-mono text-center leading-tight whitespace-nowrap select-none"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function SkillsSection() {
  const [active, setActive] = useState<TabKey>("frontend");

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "frontend", label: "Frontend", icon: <FaCode /> },
    { key: "backend",  label: "Backend",  icon: <FaServer /> },
    { key: "other",    label: "Other",    icon: <PiDotsThreeCircle /> },
  ];

  return (
    <div className="w-[85%] mx-auto my-20 sm:my-40">

      {/* ── Heading ── */}
      <div className="skills-heading font-dm-serif-display flex justify-center items-center text-2xl sm:text-5xl mb-8">
        <h2>SKILLS.</h2>
        <div className="h-px bg-main-text w-full mx-4" />
      </div>

      {/* ── Tab bar ── */}
      <div className={`skill-btn w-full flex justify-end relative -left-5 items-center mt-5 mx-4  text-base sm:text-lg md:text-xl text-main-para mb-6`}>
        <ul className="flex gap-6 sm:gap-8 justify-between items-center font-roboto">
          {tabs.map(({ key, label, icon }) => (
            <li
              key={key}
              onClick={() => setActive(key)}
              className={[
                "flex gap-1 items-center cursor-pointer relative",
                "after:absolute after:content-[''] after:-bottom-0.75 after:left-0",
                "after:block after:h-0.5 after:bg-main-text",
                "after:transition-all after:ease-out after:duration-200",
                "hover:after:w-full",
                active === key ? "after:w-full" : "after:w-0",
              ].join(" ")}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Skills container ── */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(10px)",
          minHeight: "180px",
        }}
      >
        {/* Colour-tinted top glow — transitions per tab */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500"
          style={{ background: GLOW[active] }}
        />

        {/* Skill count badge */}
        <span
          className="absolute top-3 right-4 font-mono text-[11px] select-none z-10"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          {SKILL_MAP[active].length} skills
        </span>

        {/* Animated grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-7 p-6 sm:p-8 pt-10"
          >
            {SKILL_MAP[active].map((skill, i) => (
              <SkillBubble key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
