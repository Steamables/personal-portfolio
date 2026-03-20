import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Contact', href: '#contact' },
]

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-10"
      >
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 font-display text-sm font-semibold tracking-wide text-white"
        >
          <img
            src="/DSC_0145.jpg"
            alt="Yusuf Aziez portrait"
            className="h-10 w-10 rounded-full border border-white/15 object-cover object-top"
          />
          Yusuf Aziez
        </a>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-brand-300/60 hover:text-brand-300 lg:hidden"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-brand-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-3 lg:hidden"
          >
            <ul className="mx-auto grid w-full max-w-6xl gap-2">
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg border border-white/10 px-3 py-2.5 text-sm text-slate-200 transition-colors hover:border-brand-300/50 hover:text-brand-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}


