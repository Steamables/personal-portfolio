import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 52,
    damping: 34,
    mass: 0.95,
  })

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-400 via-cyan-200 to-brand-500"
      style={{ scaleX }}
    />
  )
}
