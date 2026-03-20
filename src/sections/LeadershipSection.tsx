import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { leadership } from '../data/portfolioData'

export function LeadershipSection() {
  return (
    <FadeInSection id="leadership" className="section-shell">
      <SectionHeading
        eyebrow="Leadership"
        title="Execution beyond code"
        description="IEEE roles that demonstrate ownership, coordination, and operational reliability."
      />

      <div className="relative space-y-5">
        <div className="absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-brand-300/25 md:block" />
        {leadership.map((item, index) => (
          <motion.article
            key={item.role}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="surface-card relative p-6 md:ml-8 md:p-7"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-brand-300/35 bg-brand-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                {item.role}
              </span>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{item.organization}</h3>
            <ul className="mt-4 space-y-2">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm leading-relaxed text-slate-200"
                >
                  {detail}
                </li>
              ))}
            </ul>
            <span className="absolute left-2 top-7 hidden h-3 w-3 rounded-full bg-brand-300 shadow-glow md:block" />
            <span className="sr-only">Leadership step {index + 1}</span>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  )
}
