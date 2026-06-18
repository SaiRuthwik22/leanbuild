import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/image.png'
import logoImgWhite from '../assets/logo_white.png'

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About Us',  path: '/about' },
  { name: 'Services',  path: '/services' },
  {
    name: 'Products',
    path: '#',
    children: [
      { name: 'MorphX', path: 'https://morphx360.com/', external: true },
      { name: 'MorphX Steel Structures', path: 'https://morphx360.com/', external: true },
    ],
  },
  { name: 'Projects',  path: '/projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null) // tracks which dropdown is open (by path)
  const [mobileExpanded, setMobileExpanded] = useState(null) // mobile accordion
  const location = useLocation()
  const dropdownTimeout = useRef(null)

  // Pages with a dark hero that need white nav text initially
  const darkHero = ['/', '/about', '/services', '/projects', '/contact'].includes(location.pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setMobileExpanded(null) }, [location.pathname])

  // Decide text / icon color based on scroll + darkHero
  const isLight = darkHero && !scrolled          // white text when not scrolled on dark hero
  const textBase   = isLight ? 'text-white/70'   : 'text-warm-gray'
  const textActive = isLight ? 'text-white'      : 'text-charcoal'
  const barColor   = (isLight && !mobileOpen) ? 'bg-white' : 'bg-charcoal'

  const handleDropdownEnter = (path) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setDropdownOpen(path)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(null), 150)
  }

  const isActivePath = (link) => {
    return location.pathname === link.path && link.path !== '#'
  }

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
          <Link to="/" className="relative z-10 shrink-0 flex items-center">
            <img 
              src={isLight ? logoImgWhite : logoImg} 
              alt="LeanBuild Logo" 
              className="h-[52px] w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={link.children ? () => handleDropdownEnter(link.path) : undefined}
                onMouseLeave={link.children ? handleDropdownLeave : undefined}
              >
                <Link
                  to={link.path}
                  onClick={(e) => link.path === '#' && e.preventDefault()}
                  className={`group relative text-base font-heading font-semibold tracking-wide transition-colors duration-500 py-1 flex items-center gap-1 ${
                    isActivePath(link) ? textActive : `${textBase} hover:${textActive}`
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen === link.path ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Active underline */}
                  {isActivePath(link) && (
                    <motion.span layoutId="nav-underline" className={`absolute -bottom-1 left-0 w-full h-[2px] ${barColor} rounded-full`} />
                  )}
                  {/* Hover underline */}
                  {!isActivePath(link) && (
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] ${barColor} rounded-full opacity-0 scale-x-50 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 origin-left`} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && dropdownOpen === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-xl shadow-xl border border-black/[0.06] overflow-hidden"
                    >
                      <div className="py-2">
                        {link.children.map(child => (
                          child.external ? (
                            <a
                              key={child.name}
                              href={child.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-5 py-3 text-sm font-heading font-medium text-warm-gray hover:text-charcoal hover:bg-offwhite transition-all duration-200"
                            >
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-5 py-3 text-sm font-heading font-medium text-warm-gray hover:text-charcoal hover:bg-offwhite transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA button adapts too */}
            <Link
              to="/contact"
              className={`px-5 py-2.5 text-sm font-heading font-bold rounded-full transition-all duration-300 ${
                isLight
                  ? 'bg-white text-charcoal hover:bg-white hover:-translate-y-0.5 hover:shadow-lg'
                  : 'bg-charcoal text-white hover:bg-black hover:-translate-y-0.5 hover:shadow-lg'
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
            className="fixed inset-0 bg-offwhite z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Close button for mobile/tablet */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-charcoal/10 hover:bg-charcoal/20 active:bg-charcoal/30 flex items-center justify-center transition-all z-[60]"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                className="flex flex-col items-center"
              >
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.path ? null : link.path)}
                      className={`flex items-center gap-2 text-lg font-heading font-bold tracking-wide transition-colors ${
                        isActivePath(link) ? 'text-charcoal' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === link.path ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === link.path && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden flex flex-col items-center gap-3 mt-3"
                        >
                          {link.children.map(child => (
                            child.external ? (
                              <a
                                key={child.name}
                                href={child.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-heading font-medium text-warm-gray hover:text-charcoal transition-colors"
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                key={child.name}
                                to={child.path}
                                className="text-base font-heading font-medium text-warm-gray hover:text-charcoal transition-colors"
                              >
                                {child.name}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-lg font-heading font-bold tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-charcoal' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
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
