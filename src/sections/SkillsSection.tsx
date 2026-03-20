import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { skills } from '../data/portfolioData'

export function SkillsSection() {
  return (
    <FadeInSection id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical stack and engineering foundations"
        description="Grouped for fast recruiter scanning and clean readability."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((category) => (
          <motion.article
            key={category.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="surface-card p-6"
          >
            <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-full border border-brand-300/35 bg-brand-300/10 px-3 py-1.5 text-sm text-brand-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  )
}
