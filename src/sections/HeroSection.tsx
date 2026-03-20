import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { contact, heroData } from '../data/portfolioData'

const Hero3DPanel = lazy(async () => {
  const module = await import('../components/Hero3DPanel')
  return { default: module.Hero3DPanel }
})

const quickStats = [
  {
    label: 'Interest Areas',
    value: 'Artificial Intelligence, Cloud Computing, and Machine Learning',
  },
  { label: 'Core Languages', value: 'Java, Python' },
  { label: 'Leadership Role', value: 'IEEE RAS Treasurer' },
  { label: 'Open To', value: 'Software Engineering and Full-Stack Internships' },
]

export function HeroSection() {
  return (
    <FadeInSection id="home" className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
        <Suspense
          fallback={
            <motion.div
              className="absolute inset-0 bg-slate-900/75"
              animate={{ opacity: [0.6, 0.82, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          }
        >
          <div className="pointer-events-none absolute inset-0 scale-[1.06] opacity-55 blur-[1.5px]">
            <Hero3DPanel />
          </div>
        </Suspense>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-950/80 to-slate-900/78" />

        <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-brand-300/40 bg-brand-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Open to internships and technical collaborations
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {heroData.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-300 md:text-xl">
              {heroData.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {heroData.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="w-full rounded-xl bg-brand-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-300 sm:w-auto"
              >
                View Projects
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
              >
                GitHub
              </a>
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
              >
                LinkedIn
              </a>
              <a
                href={contact.cvView}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-brand-300/50 bg-brand-400/10 px-5 py-3 text-center text-sm font-semibold text-brand-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-400/20 sm:w-auto"
              >
                View CV
              </a>
              <a
                href="#contact"
                className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="grid content-start gap-3">
            {quickStats.map((item) => (
              <motion.article
                key={item.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.24 }}
                className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 backdrop-blur-sm"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                <p className="mt-2 break-words text-sm font-semibold leading-relaxed text-slate-100 md:text-base">
                  {item.value}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
