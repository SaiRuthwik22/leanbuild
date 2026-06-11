import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations'
import { useEffect, useState, useRef } from 'react'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'
import Testimonials from '../components/Testimonials'

// Assets
import aboutHeroBg from '../assets/about_hero_bg.webp'
import teamCVO from '../assets/cvo.png'
import teamMember1 from '../assets/team_member_1.png'
import teamMember2 from '../assets/team_member_2.png'
import teamMember3 from '../assets/team_member_3.png'


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

const leaderMember = {
  name: 'Uday Vedre',
  role: 'Chief Value Officer',
  img: teamCVO,
  bio: 'Uday brings 18 years of expertise in value engineering and client relations. She ensures every project maximizes value for clients while maintaining the highest standards of quality, sustainability, and design excellence.',
  linkedin: '#',
}

const teamGrid = [
  { name: 'Rahul Kapoor', role: 'Project Manager', img: teamMember1 },
  { name: 'Sarah Johnson', role: 'Lead Architect', img: teamMember2 },
  { name: 'Vikram Patel', role: 'Structural Engineer', img: teamMember3 },
  { name: 'Emily Chen', role: 'Interior Designer', img: null },
  { name: 'Arjun Mehta', role: 'Site Supervisor', img: null },
  { name: 'Lisa Rodriguez', role: 'Quality Assurance', img: null },
]

function TeamSection() {
  const headerRef = useScrollReveal({ y: 40 })
  const cardsRef = useStaggerReveal('.team-card', { stagger: 0.2, y: 60 })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            The Minds Building the Future
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">
            Our leadership combines architectural imagination with precision engineering.
          </p>
        </div>

        <div ref={cardsRef} className="max-w-2xl mx-auto mb-20">
          <div className="team-card group relative p-10 lg:p-12 bg-white border border-charcoal/[0.08] rounded-2xl hover:border-charcoal/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-full md:w-44 h-56 md:h-64 rounded-xl bg-offwhite overflow-hidden flex-shrink-0">
                <OptimizedImage
                  src={leaderMember.img}
                  alt={leaderMember.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/35 font-bold block mb-2">
                    {leaderMember.role}
                  </span>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 tracking-tight">
                    {leaderMember.name}
                  </h3>
                  <p className="text-base text-charcoal/60 leading-[1.85] font-medium">
                    {leaderMember.bio}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-charcoal/[0.06] flex items-center">
                  <a href={leaderMember.linkedin} className="group/btn flex items-center gap-3 text-[10px] uppercase tracking-widest text-charcoal/50 hover:text-charcoal transition-colors duration-300">
                    <span className="w-7 h-7 rounded-full border border-charcoal/15 flex items-center justify-center group-hover/btn:border-charcoal group-hover/btn:bg-charcoal group-hover/btn:text-white transition-all duration-300">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </span>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {teamGrid.length > 0 && (
          <div className="mt-32">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-px w-16 bg-charcoal/10"></div>
              <h3 className="text-center text-sm font-bold text-charcoal/50 uppercase tracking-[0.2em]">Our Experts</h3>
              <div className="h-px w-16 bg-charcoal/10"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamGrid.map((member, idx) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-[2.5rem] p-3 border border-charcoal/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-charcoal/10 transition-all duration-500"
                >
                  <div className="relative h-80 sm:h-72 lg:h-80 rounded-[2rem] overflow-hidden bg-offwhite mb-6">
                    {member.img ? (
                      <OptimizedImage 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                        wrapperClassName="w-full h-full" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal/[0.02] to-charcoal/[0.08] group-hover:from-charcoal/[0.05] group-hover:to-charcoal/[0.12] transition-colors duration-500">
                        <span className="text-5xl font-heading font-light text-charcoal/20 group-hover:text-charcoal/40 transition-colors duration-500">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[2rem] pointer-events-none" />
                  </div>
                  
                  <div className="px-5 pb-5 relative">
                    <h4 className="text-xl font-heading font-bold text-charcoal tracking-tight mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-charcoal/50 font-medium tracking-wide">
                      {member.role}
                    </p>
                    
                    {/* Decorative arrow that appears on hover */}
                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-offwhite flex items-center justify-center opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Partnerships Section ─── */
const partnerships = {
  institutions: [
    { name: 'ETTL Engineers & Consultants', short: 'ETTL' },
    { name: 'ECL – Engineering Consultants Ltd', short: 'ECL' },
    { name: 'Texas Board of Professional Engineers', short: 'TBPE' },
    { name: 'American Institute of Architects', short: 'AIA' },
    { name: 'International Code Council', short: 'ICC' },
    { name: 'OSHA Safety Partners', short: 'OSHA' },
  ],
  inspectors: [
    { name: 'ETTL – Third Party Inspections', short: 'ETTL' },
    { name: 'ECL – Quality Assurance', short: 'ECL' },
    { name: 'Bureau Veritas', short: 'BV' },
    { name: 'Intertek Testing Services', short: 'ITS' },
    { name: 'SGS Inspection Services', short: 'SGS' },
    { name: 'TÜV Rheinland', short: 'TÜV' },
  ],
}

function PartnershipsSection() {
  const headerRef = useScrollReveal({ y: 40 })

  const allInstitutions = [...partnerships.institutions, ...partnerships.institutions]
  const allInspectors = [...partnerships.inspectors, ...partnerships.inspectors]

  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            Trusted Partners
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/60 text-lg md:text-xl font-medium leading-relaxed">
            We collaborate with leading institutions, architects, and third-party inspectors to ensure the highest standards.
          </p>
        </div>
      </div>

      {/* Institutions & Architects — auto-scroll left */}
      <div className="mb-14 relative">
        <div className="container-narrow relative z-10 mb-6 flex justify-center md:justify-start">
          <p className="text-xs uppercase tracking-[0.25em] text-warm-gray font-semibold">Institutions & Architects</p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ '--marquee-duration': '35s' }}>
            {allInstitutions.map((partner, i) => (
              <div
                key={`inst-${i}`}
                className="w-[260px] md:w-[300px] flex-shrink-0 group flex flex-col items-center justify-center py-8 px-6 mx-2.5 rounded-2xl bg-white hover:bg-charcoal transition-all duration-500 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                {partner.logo ? (
                  <div className="h-12 w-full flex items-center justify-center mb-2 overflow-hidden px-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-500"
                    />
                  </div>
                ) : (
                  <span className="text-2xl md:text-3xl font-heading font-extrabold text-charcoal/25 group-hover:text-white transition-colors duration-500 tracking-tighter">
                    {partner.short}
                  </span>
                )}
                <p className="text-[10px] text-charcoal/35 group-hover:text-white/60 mt-2 transition-colors duration-500 text-center leading-tight font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third-Party Inspectors — auto-scroll right (reverse) */}
      <div className="relative">
        <div className="container-narrow relative z-10 mb-6 flex justify-center md:justify-end">
          <p className="text-xs uppercase tracking-[0.25em] text-warm-gray font-semibold">Third-Party Inspectors</p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track marquee-reverse" style={{ '--marquee-duration': '40s' }}>
            {allInspectors.map((partner, i) => (
              <div
                key={`insp-${i}`}
                className="w-[260px] md:w-[300px] flex-shrink-0 group flex flex-col items-center justify-center py-8 px-6 mx-2.5 rounded-2xl bg-white hover:bg-charcoal transition-all duration-500 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                {partner.logo ? (
                  <div className="h-12 w-full flex items-center justify-center mb-2 overflow-hidden px-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-500"
                    />
                  </div>
                ) : (
                  <span className="text-2xl md:text-3xl font-heading font-extrabold text-charcoal/25 group-hover:text-white transition-colors duration-500 tracking-tighter">
                    {partner.short}
                  </span>
                )}
                <p className="text-[10px] text-charcoal/35 group-hover:text-white/60 mt-2 transition-colors duration-500 text-center leading-tight font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
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
      <PartnershipsSection />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  )
}
