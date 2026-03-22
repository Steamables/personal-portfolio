import { ContactSection } from './sections/ContactSection'
import { TopNav } from './components/TopNav'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { LeadershipSection } from './sections/LeadershipSection'
import { CompetitionsSection } from './sections/CompetitionsSection'
import { ScrollProgress } from './components/ScrollProgress'
import { AmbientBackground } from './components/AmbientBackground'

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
      <AmbientBackground />
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
