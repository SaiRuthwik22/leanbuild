import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations'
import { useEffect, useState } from 'react'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'

// Assets
import aboutHeroBg from '../assets/about_hero_bg.webp'
import teamPresident from '../assets/president.png'
import teamCVO from '../assets/cvo.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─────────────────────────────────────────────
   VIDEO SOURCES
   Free Pexels architecture / construction videos
   (multiple clips cycle for interior + exterior)
   ───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">

      <div className="absolute inset-0 z-0">
        <img
          src={aboutHeroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 w-full container-narrow pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-white/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">
              About LeanBuild
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.08] text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', fontWeight: 700 }}
          >
            Leading Construction & Renovation Solutions for Modern Spaces
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
          >
            We provide a diverse range of construction, renovation, and design services tailored to deliver quality, efficiency, and lasting value.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-9 bg-white/20"
        />
      </motion.div>

    </section>
  )
}



/* ─── Experience Section ─── */
const experienceData = [
  {
    title: 'Experience',
    desc: 'Over 40 years of engineering and management experience, encompassing a wide breadth of expertise in electrical, mechanical, civil, warehousing, and industrial construction.'
  },
  {
    title: 'History',
    desc: 'As president and owner of an electrical control systems manufacturing company and an engineering and construction company, he has personally overseen every aspect of the business, incorporating both technical know-how as well as considerable financial and business management experience.'
  },
  {
    title: 'Skills',
    desc: 'This experience combined with his critical skill and keen attention to detail has led his advisory and consulting services to be sought out for various real estate ventures including multiple temples in Houston.'
  },
  {
    title: 'Clients',
    desc: 'Mr. Jannapureddy Managed and Successfully executed numerous multi million-dollar projects across the state of Texas, possesses in-depth planning, estimating, and construction knowledge.'
  },
  {
    title: 'Work',
    desc: 'Mr. Jannapureddy directly managed hands on several diversified projects totaling over $50 million required several disciplines.'
  }
]

function ExperienceSection() {
  const containerRef = useScrollReveal({ y: 40 })
  const rowsRef = useStaggerReveal('.exp-row', { stagger: 0.2, y: 30 })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={aboutHeroBg}
          alt="Building exterior"
          className="w-full h-full object-cover object-center"
          wrapperClassName="w-full h-full"
        />
        {/* Light overlay to make card pop and blend edges */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>

      <div className="container-narrow relative z-10 max-w-5xl mx-auto">
        <div ref={containerRef} className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-charcoal bg-white/70 backdrop-blur-md inline-block px-8 py-4 rounded-xl shadow-lg border border-white/50 tracking-wide">
            AN ENGINEERING & CONSTRUCTION COMPANY WITH FORTY YEARS OF EXPERIENCES
          </h2>
        </div>

        <div ref={rowsRef} className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          {experienceData.map((item, i) => {
            const isReversed = i % 2 !== 0
            return (
              <div
                key={item.title}
                className={`exp-row grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-14 items-center ${i !== experienceData.length - 1 ? 'border-b border-charcoal/10' : ''
                  }`}
              >
                {/* Title */}
                <div className={`flex items-center justify-center ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal tracking-tight">
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <div className={`flex items-center justify-center text-center ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                  <p className="text-base md:text-lg text-charcoal/80 font-medium leading-relaxed max-w-md mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Our Leadership Team ─── */
const teamMembers = [
  {
    name: 'Gopal Janapureddy',
    role: 'President',
    img: teamPresident,
    bio: 'With over 25 years of experience in construction and architecture, Gopal Janapureddy has led LeanBuild from a small firm to one of India\'s most trusted construction companies.',
    linkedin: '#',
  },
  {
    name: 'Uday vedre',
    role: 'Chief Value Officer',
    img: teamCVO,
    bio: 'Uday brings 18 years of expertise in value engineering and client relations. She ensures every project maximizes value for clients while maintaining the highest standards of quality, sustainability, and design excellence.',
    linkedin: '#',
  },
]

function TeamSection() {
  const headerRef = useScrollReveal({ y: 40 })
  const cardsRef = useStaggerReveal('.team-card', { stagger: 0.2, y: 60 })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Technical Drafting / Stitched Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-charcoal/10 -translate-x-1/2 hidden lg:block" />

      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            The Minds Building the Future
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">
            Our leadership combines architectural imagination with precision engineering. Engineered for high performance, built to endure.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="team-card group relative p-10 lg:p-12 bg-white border border-dashed border-black rounded-lg hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              {/* Corner crosshairs for technical drafting look */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              {/* Asymmetric layout inside card */}
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Image Container with precise framing */}
                <div className="relative w-full md:w-44 h-56 md:h-64 rounded bg-offwhite overflow-hidden border border-light-gray group-hover:border-charcoal/40 transition-colors duration-500 flex-shrink-0">
                  <OptimizedImage
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    wrapperClassName="w-full h-full"
                  />
                  {/* Outer accent "stitch" lines overlay */}
                  <div className="absolute inset-2 border border-dashed border-black pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info and Bio section */}
                <div className="flex-1 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-charcoal mb-4 tracking-tight group-hover:text-black transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-base text-charcoal/70 leading-[1.85] font-medium">
                      {member.bio}
                    </p>
                  </div>

                  {/* Stamp signature / LinkedIn link */}
                  <div className="mt-8 pt-6 border-t border-dashed border-light-gray flex items-center justify-between">
                    <a
                      href={member.linkedin}
                      className="group/btn flex items-center gap-3 text-[10px] uppercase font-mono tracking-widest text-charcoal hover:text-black transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <span className="w-6 h-6 rounded-full border border-charcoal/20 flex items-center justify-center group-hover/btn:border-charcoal group-hover/btn:bg-charcoal group-hover/btn:text-white transition-all duration-300">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <span>Connect Profile</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <AboutHero />
      <TeamSection />
      <ExperienceSection />
      <ContactCTA />
    </motion.div>
  )
}
