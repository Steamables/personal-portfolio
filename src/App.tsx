import { motion } from 'framer-motion'
import { ContactSection } from './sections/ContactSection'
import { TopNav } from './components/TopNav'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { LeadershipSection } from './sections/LeadershipSection'
import { CompetitionsSection } from './sections/CompetitionsSection'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-[70] rounded-lg bg-slate-900 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-48 left-[10%] h-80 w-80 rounded-full bg-brand-400/15 blur-3xl"
          animate={{ x: [0, 28, -12, 0], y: [0, -24, 12, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[8%] top-[38%] h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
          animate={{ x: [0, -20, 14, 0], y: [0, 18, -12, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <TopNav />

      <main id="main-content" className="relative z-10 pt-20 md:pt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <CompetitionsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="section-shell py-8 text-center text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Yusuf Aziez. Built with React,
          Tailwind CSS, and Framer Motion.
        </div>
      </footer>
    </div>
  )
}

export default App
