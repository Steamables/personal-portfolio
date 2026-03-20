import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type FadeInSectionProps = PropsWithChildren<{
  id: string
  className?: string
}>

export function FadeInSection({ id, className, children }: FadeInSectionProps) {
  const mergedClassName = `scroll-mt-24 md:scroll-mt-28 ${className ?? ''}`.trim()

  return (
    <motion.section
      id={id}
      className={mergedClassName}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  )
}
