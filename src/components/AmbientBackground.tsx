import { motion } from 'framer-motion'

type Star = {
  left: string
  top: string
  size: number
  duration: number
  delay: number
}

const stars: Star[] = [
  { left: '6%', top: '11%', size: 2, duration: 14, delay: 0.2 },
  { left: '14%', top: '28%', size: 1.8, duration: 16, delay: 1.1 },
  { left: '20%', top: '18%', size: 2.2, duration: 12, delay: 0.7 },
  { left: '28%', top: '9%', size: 1.7, duration: 15, delay: 1.5 },
  { left: '36%', top: '22%', size: 2.1, duration: 13, delay: 0.9 },
  { left: '44%', top: '12%', size: 1.9, duration: 17, delay: 0.4 },
  { left: '53%', top: '25%', size: 2.3, duration: 14, delay: 1.2 },
  { left: '61%', top: '14%', size: 1.8, duration: 16, delay: 0.6 },
  { left: '69%', top: '30%', size: 2.2, duration: 13, delay: 1.4 },
  { left: '77%', top: '16%', size: 1.9, duration: 15, delay: 0.3 },
  { left: '84%', top: '24%', size: 2.1, duration: 12, delay: 1.7 },
  { left: '91%', top: '12%', size: 1.7, duration: 14, delay: 0.8 },
  { left: '10%', top: '42%', size: 2.1, duration: 16, delay: 1.3 },
  { left: '24%', top: '47%', size: 1.8, duration: 14, delay: 0.5 },
  { left: '40%', top: '44%', size: 2.2, duration: 15, delay: 1.6 },
  { left: '58%', top: '48%', size: 1.9, duration: 13, delay: 0.1 },
  { left: '73%', top: '45%', size: 2.3, duration: 17, delay: 1.0 },
  { left: '88%', top: '41%', size: 2.0, duration: 14, delay: 0.9 },
]

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-base absolute inset-0" />

      <motion.div
        className="ambient-grid absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ['0px 56px', '120px 146px'] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute -left-40 -top-52 h-[30rem] w-[30rem] rounded-full bg-brand-400/18 blur-3xl"
        animate={{
          x: [0, 36, -24, 0],
          y: [0, 28, -16, 0],
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{ duration: 46, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-52 -right-44 h-[31rem] w-[31rem] rounded-full bg-brand-500/20 blur-3xl"
        animate={{
          x: [0, -34, 18, 0],
          y: [0, -26, 14, 0],
          scale: [1, 1.04, 0.97, 1],
        }}
        transition={{ duration: 52, repeat: Infinity, ease: 'easeInOut' }}
      />

      {stars.map((star, index) => (
        <motion.span
          key={`${star.left}-${star.top}-${index}`}
          className="absolute rounded-full bg-brand-300/80"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 12px rgba(196, 181, 253, 0.5)',
          }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}

      <motion.div
        className="ambient-vignette absolute inset-0"
        animate={{ opacity: [0.76, 0.88, 0.76] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
