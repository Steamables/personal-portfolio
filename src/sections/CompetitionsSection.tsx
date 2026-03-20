import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { competitions } from '../data/portfolioData'

export function CompetitionsSection() {
  return (
    <FadeInSection id="competitions" className="section-shell">
      <SectionHeading
        eyebrow="Competitions"
        title="Active participation in technical challenge environments"
        description="Competitive work that supports problem-solving speed, teamwork, and innovation mindset."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {competitions.map((competition) => (
          <motion.article
            key={competition.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="surface-card p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white">{competition.title}</h3>
              <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.1em] text-slate-300">
                {competition.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              {competition.description}
            </p>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  )
}
