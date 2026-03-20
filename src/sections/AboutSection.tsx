import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { aboutParagraphs, whatIBring } from '../data/portfolioData'

export function AboutSection() {
  return (
    <FadeInSection id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Technical growth with structured execution"
        description="Academic foundations, practical project work, and consistent leadership involvement."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card p-6 md:p-8">
          <div className="space-y-5 text-slate-300">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="surface-card p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">What I Bring</h3>
          <div className="mt-5 space-y-3">
            {whatIBring.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 md:text-base"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
