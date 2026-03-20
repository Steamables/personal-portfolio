import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolioData'

export function ProjectsSection() {
  return (
    <FadeInSection id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Built systems with real implementation depth"
        description="Featured projects emphasize technical contribution, architecture decisions, and execution quality."
      />

      <div className="space-y-6">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.22 }}
            className="surface-card p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-300">
                {project.period}
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate-300">{project.summary}</p>

            <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-slate-200 md:text-base">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1.5 text-xs text-brand-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  )
}
