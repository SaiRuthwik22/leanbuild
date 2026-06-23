import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function NotFound() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite px-6">
        <span className="text-[10px] uppercase tracking-[0.4em] text-warm-gray font-medium mb-6">
          Page Not Found
        </span>
        <h1 className="text-8xl md:text-9xl font-heading font-bold text-charcoal mb-4 tracking-tight">
          404
        </h1>
        <p className="text-lg text-charcoal/60 mb-10 text-center max-w-md leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-full font-heading font-bold hover:bg-dark-slate transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}
