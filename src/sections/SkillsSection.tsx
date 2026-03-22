import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FaBrain,
  FaCode,
  FaCodeBranch,
  FaCubes,
  FaJava,
  FaLayerGroup,
  FaSitemap,
  FaTools,
} from 'react-icons/fa'
import {
  SiCloudflare,
  SiCss,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { skills } from '../data/portfolioData'

const categoryIcons: Record<string, IconType> = {
  Languages: FaCode,
  Frameworks: FaLayerGroup,
  Tools: FaTools,
  Concepts: FaBrain,
}

const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  SQL: SiMysql,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  'React Three Fiber': SiThreedotjs,
  'Three.js': SiThreedotjs,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  JavaFX: FaJava,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Expo: SiExpo,
  Firebase: SiFirebase,
  Cloudflare: SiCloudflare,
  Figma: SiFigma,
  'Object-Oriented Programming': FaCubes,
  'Data Structures and Algorithms': FaCodeBranch,
  'System Design': FaSitemap,
}

function SkillBadge({ skill }: { skill: string }) {
  const Icon = skillIcons[skill]

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group flex min-h-11 items-center gap-2.5 rounded-xl border border-brand-300/28 bg-brand-400/6 px-3 py-2.5 text-sm text-slate-200 transition-colors hover:border-brand-300/48"
    >
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-400/12 text-brand-300 transition-transform duration-200 group-hover:scale-110">
        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />}
      </span>
      <span className="leading-snug">{skill}</span>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <FadeInSection id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical stack and engineering foundations"
        description="Structured by category for fast scanning, with focused tooling and concept coverage."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((category) => {
          const CategoryIcon = categoryIcons[category.title]

          return (
            <motion.article
              key={category.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="surface-card p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-300/35 bg-brand-400/10 text-brand-300">
                    {CategoryIcon ? <CategoryIcon className="h-4 w-4" aria-hidden /> : null}
                  </span>
                  {category.title}
                </h3>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                  {category.items.length} items
                </span>
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {category.items.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </FadeInSection>
  )
}


