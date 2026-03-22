import { FadeInSection } from '../components/FadeInSection'
import { contact, heroData } from '../data/portfolioData'

type IconName = 'direction' | 'stack' | 'leadership' | 'projects' | 'github' | 'linkedin' | 'cv' | 'contact'

type HighlightItem = {
  label: string
  value: string
  icon: IconName
}

type ActionItem = {
  label: string
  href: string
  icon: IconName
  variant: 'primary' | 'ghost' | 'accent'
  external?: boolean
}

const highlightItems: HighlightItem[] = [
  { label: 'Focus & Interests', value: 'Software Engineering, DevOps, and QA', icon: 'direction' },
  { label: 'Leadership', value: 'Treasurer, IEEE RAS IIT', icon: 'leadership' },
  { label: 'Languages', value: 'Java and Python', icon: 'stack' },
]

const actionItems: ActionItem[] = [
  { label: 'View Projects', href: '#projects', icon: 'projects', variant: 'primary' },
  { label: 'Contact', href: '#contact', icon: 'contact', variant: 'accent' },
  { label: 'GitHub', href: contact.github, icon: 'github', variant: 'ghost', external: true },
  { label: 'LinkedIn', href: contact.linkedIn, icon: 'linkedin', variant: 'ghost', external: true },
  { label: 'View CV', href: contact.cvView, icon: 'cv', variant: 'ghost', external: true },
]

function Icon({ name, className }: { name: IconName; className?: string }) {
  const classes = className ?? 'h-4 w-4'

  if (name === 'direction') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="M12 3 9.2 9.2 3 12l6.2 2.8L12 21l2.8-6.2L21 12l-6.2-2.8L12 3Z" />
      </svg>
    )
  }

  if (name === 'stack') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    )
  }

  if (name === 'leadership') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
        <path d="M4 10.5a2.3 2.3 0 1 0 0-4.6" />
        <path d="M20 10.5a2.3 2.3 0 1 1 0-4.6" />
      </svg>
    )
  }

  if (name === 'projects') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="M3.5 7.2A2.2 2.2 0 0 1 5.7 5h3.5l1.5 1.7h7.6a2.2 2.2 0 0 1 2.2 2.2v7.9a2.2 2.2 0 0 1-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2V7.2Z" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="M9 19c-3 1-3-1.5-4-2" />
        <path d="M15 21v-3.3a3 3 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11 11 0 0 0-6 0C6.7 3 5.7 3.3 5.7 3.3a4.3 4.3 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.2c0 4.6 2.8 5.6 5.5 6A3 3 0 0 0 9 17.7V21" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8.2 10.2v5.8" />
        <path d="M8.2 7.8h0" />
        <path d="M12 16v-3.2a2 2 0 1 1 4 0V16" />
        <path d="M12 10.2V16" />
      </svg>
    )
  }

  if (name === 'cv') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
        <path d="M7 3.5h7.5L19.5 8v12.5H7z" />
        <path d="M14.5 3.5V8H19" />
        <path d="M10 12h6" />
        <path d="M10 15h6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes}>
      <path d="M4 6h16v12H4z" />
      <path d="m4.5 7 7.5 6L19.5 7" />
    </svg>
  )
}

function actionClass(variant: ActionItem['variant']) {
  if (variant === 'primary') {
    return 'bg-brand-400 text-white hover:-translate-y-0.5 hover:bg-brand-300 border border-brand-400/70 shadow-glow'
  }

  if (variant === 'accent') {
    return 'border border-brand-300/55 bg-brand-400/10 text-brand-300 hover:-translate-y-0.5 hover:bg-brand-400/20'
  }

  return 'border border-white/20 text-slate-100 hover:-translate-y-0.5 hover:border-brand-300/60 hover:text-brand-300'
}

export function HeroSection() {
  return (
    <FadeInSection id="home" className="w-full">
      <section className="relative min-h-[calc(100dvh-5rem)] w-full overflow-hidden border-b border-white/10 bg-ink-950/55 md:min-h-[calc(100dvh-6rem)]">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950/90 via-ink-950/78 to-ink-900/66" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-6xl gap-8 px-4 py-8 sm:px-6 md:min-h-[calc(100dvh-6rem)] md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-brand-300/45 bg-brand-400/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Open to internships
            </p>

            <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
              {heroData.name}
            </h1>

            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-brand-300 md:text-3xl">
              {heroData.tagline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {heroData.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {actionItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all duration-200 sm:w-auto ${actionClass(item.variant)}`}
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/12 bg-ink-900/45 p-5 backdrop-blur-md md:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-300">Quick Snapshot</p>
            <div className="mt-4 space-y-3">
              {highlightItems.map((item) => (
                <article key={item.label} className="rounded-xl border border-white/12 bg-white/[0.03] p-3.5">
                  <div className="flex items-center gap-2 text-brand-300">
                    <Icon name={item.icon} className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold leading-relaxed text-slate-100 md:text-base">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </FadeInSection>
  )
}

