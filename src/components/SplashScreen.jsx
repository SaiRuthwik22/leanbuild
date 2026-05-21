import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────
   SPLASH SCREEN
   Premium intro animation shown on first visit.
   While the animation plays, hero images are
   preloading in the background via App.jsx.
   ───────────────────────────────────────────── */

// Letter animation variants
const letterVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -90 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.07,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

// Tagline word variants
const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8 + i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

// Architectural line animation
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

// SVG logo path draw
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.1, duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const brandName = 'LEANBUILD'
const taglineWords = ['Architecture', '·', 'Engineering', '·', 'Construction']

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('animate') // 'animate' | 'exit'

  useEffect(() => {
    // Total animation time before auto-exit
    const timer = setTimeout(() => {
      setPhase('exit')
    }, 3800)
    return () => clearTimeout(timer)
  }, [])

  const handleExitComplete = () => {
    if (phase === 'exit') {
      onComplete()
    }
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {phase === 'animate' && (
        <motion.div
          key="splash"
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(12px)',
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#000000] overflow-hidden select-none"
        >
          {/* ── Background elements ── */}

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Slow radial pulse */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.06, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
            }}
          />

          {/* Animated architectural corner brackets */}
          {/* Top-left */}
          <motion.div
            className="absolute top-10 left-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="w-12 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-[1px] bg-white/15 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 48 }}
              />
              <motion.div
                className="absolute top-0 left-0 w-[1px] bg-white/15 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 48 }}
              />
            </motion.div>
          </motion.div>

          {/* Top-right */}
          <motion.div
            className="absolute top-10 right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div className="relative w-12 h-12">
              <motion.div
                className="absolute top-0 right-0 h-[1px] bg-white/15 origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 48 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-[1px] bg-white/15 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 48 }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom-left */}
          <motion.div
            className="absolute bottom-10 left-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div className="relative w-12 h-12">
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-white/15 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 48 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[1px] bg-white/15 origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 48 }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom-right */}
          <motion.div
            className="absolute bottom-10 right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div className="relative w-12 h-12">
              <motion.div
                className="absolute bottom-0 right-0 h-[1px] bg-white/15 origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 48 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-[1px] bg-white/15 origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 48 }}
              />
            </motion.div>
          </motion.div>

          {/* ── Center content ── */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Geometric logo mark — animated SVG */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer architectural frame */}
                <motion.rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="4"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  fill="none"
                />
                {/* Inner diamond / keystone shape */}
                <motion.path
                  d="M28 10 L46 28 L28 46 L10 28 Z"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  fill="none"
                />
                {/* Center L letterform */}
                <motion.path
                  d="M22 20 L22 36 L34 36"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* ── LEANBUILD letter-by-letter reveal ── */}
            <div className="overflow-hidden" style={{ perspective: '600px' }}>
              <div className="flex items-center gap-[2px] md:gap-[4px]">
                {brandName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block font-heading text-white tracking-tight"
                    style={{
                      fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                      fontWeight: i < 4 ? 300 : 700,  // "LEAN" light, "BUILD" bold
                      letterSpacing: '-0.04em',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Horizontal divider line */}
            <motion.div
              className="mt-5 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
              style={{ width: 'clamp(120px, 30vw, 280px)' }}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Tagline */}
            <div className="mt-5 flex items-center gap-2 md:gap-3 flex-wrap justify-center">
              {taglineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={taglineVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white/40 font-heading tracking-[0.25em] uppercase"
                  style={{
                    fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
                    fontWeight: word === '·' ? 300 : 500,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Loading progress indicator */}
            <motion.div
              className="mt-10 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              {/* Animated building blocks */}
              <div className="flex items-end gap-[3px] h-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] bg-white/30 rounded-sm"
                    animate={{
                      height: ['4px', '16px', '4px'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-heading font-medium">
                Loading Experience
              </span>
            </motion.div>
          </div>

          {/* Bottom copyright line */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/12 font-mono">
              © 2025 LeanBuild Construction
            </span>
          </motion.div>

          {/* Sweeping horizontal scan line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            initial={{ top: '20%' }}
            animate={{ top: '80%' }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
