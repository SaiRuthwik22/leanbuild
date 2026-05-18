import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About Us',  path: '/' },
  { name: 'Services',  path: '/services' },
  { name: 'Projects',  path: '/projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Pages with a dark hero that need white nav text initially
  const darkHero = ['/', '/services', '/projects', '/contact'].includes(location.pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  // Decide text / icon color based on scroll + darkHero
  const isLight = darkHero && !scrolled          // white text when not scrolled on dark hero
  const textBase   = isLight ? 'text-white/70'   : 'text-warm-gray'
  const textActive = isLight ? 'text-white'      : 'text-charcoal'
  const barColor   = isLight ? 'bg-white'        : 'bg-charcoal'
  const logoColor  = isLight ? 'text-white'      : 'text-charcoal'

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl shadow-sm border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-narrow flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="relative z-10 shrink-0">
            <span className={`font-heading text-lg font-semibold tracking-tight select-none transition-colors duration-500 ${logoColor}`}>
              Lean<span className="font-light">Build</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[0.8125rem] font-heading font-medium tracking-wide transition-colors duration-500 ${
                  location.pathname === link.path ? textActive : `${textBase} hover:${textActive}`
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span layoutId="nav-underline" className={`block mt-0.5 h-[1.5px] ${barColor} rounded-full`} />
                )}
              </Link>
            ))}

            {/* CTA button adapts too */}
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-[0.8125rem] font-heading font-medium rounded-full transition-all duration-500 ${
                isLight
                  ? 'bg-white text-charcoal hover:bg-white/90'
                  : 'bg-charcoal text-white hover:bg-dark-slate hover:shadow-lg'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-center items-end gap-[5px]"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }} className={`block h-[1.5px] ${barColor} origin-center transition-colors duration-500`} style={{ width: 24 }} />
            <motion.span animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} className={`block h-[1.5px] ${barColor} transition-colors duration-500`} style={{ width: 18 }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 24 }} className={`block h-[1.5px] ${barColor} origin-center transition-colors duration-500`} style={{ width: 24 }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-offwhite z-50 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
              >
                <Link
                  to={link.path}
                  className={`text-3xl font-heading font-medium tracking-tight transition-colors ${
                    location.pathname === link.path ? 'text-charcoal' : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.33, duration: 0.45 }}
            >
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
