import { motion } from 'framer-motion'
import { FadeInSection } from '../components/FadeInSection'
import { SectionHeading } from '../components/SectionHeading'
import { contact } from '../data/portfolioData'

const contactInfo = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    link: true,
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: '',
    link: false,
  },
  {
    label: 'Location',
    value: contact.location,
    href: '',
    link: false,
  },
]

const infoContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.16,
    },
  },
}

const infoItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function ContactSection() {
  return (
    <FadeInSection id="contact" className="section-shell pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Open to internship opportunities and technical collaborations"
        description="Reach out for software engineering internships, student projects, or product-focused technical work."
      />

      <motion.div
        className="surface-card relative grid gap-5 overflow-hidden p-6 md:grid-cols-2 md:p-8"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-brand-400/15 blur-3xl"
          animate={{ x: [0, -20, 10, 0], y: [0, 18, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          variants={infoContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-3 text-sm text-slate-300 md:text-base"
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              variants={infoItem}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="font-semibold text-white">{item.label}:</span>{' '}
                {item.link ? (
                  <a className="text-brand-300 hover:underline" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-brand-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-300 sm:w-auto"
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-colors hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-brand-300/50 bg-brand-400/10 px-5 py-3 text-center text-sm font-semibold text-brand-300 transition-colors hover:bg-brand-400/20 sm:w-auto"
            href={contact.cvView}
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-colors hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
            href={contact.cvDownload}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition-colors hover:border-brand-300/60 hover:text-brand-300 sm:w-auto"
            href={`mailto:${contact.email}`}
          >
            Email Me
          </motion.a>
        </div>
      </motion.div>
    </FadeInSection>
  )
}
