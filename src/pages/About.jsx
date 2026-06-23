import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'
import Testimonials from '../components/Testimonials'

// Assets
import aboutHeroBg from '../assets/hero_about_new.png'
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
    desc: 'Over 10 years of commercial real estate experience, specializing in Multifamily and Mixed-Use Land Acquisition and Ground-Up Development. Uday has completed projects worth over $80.0 million in multi-family and mixed-use developments.'
  },
  {
    title: 'History',
    desc: 'Over 185,000 Sq.Ft. of commercial space and 175 units delivered. Currently in pipeline — 212 units in Tyler, Texas and 288 units in Florence, SC. Over 68,000 Sq.Ft. commercial in Austin and 300,000 Sq.Ft. of Flex Space in Houston.'
  },
  {
    title: 'Skills',
    desc: 'Exceptional interpersonal and leadership skills. Uday served as Vice President of Acquisitions at a leading financial institution. He currently serves as an Advisory Board Member of a few Silicon Valley tech start-ups and holds a Master\'s degree in Computer Science Engineering.'
  },
  {
    title: 'Clients',
    desc: 'Uday is actively involved in many construction projects in Tyler, Austin, Denison, and Houston, Texas, as well as Charlotte, NC and Boston, MA. He offers mentorship to other property developers and is committed to delivering value across every engagement.'
  },
  {
    title: 'Work',
    desc: 'Board Member of multiple Non-Profit organizations, Community organizations, NC International Minority Coalition, and organizations striving for affordable housing in Charlotte. Uday has also served on advisory boards of many software companies.'
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
  bio: "Uday brings over a decade of commercial real estate expertise, specializing in multifamily and mixed-use ground-up development with an $80M+ completed portfolio. A former VP of Acquisitions, he leads expansive pipelines across the US while mentoring developers and advising tech startups.",
  linkedin: '#',
}



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

        <div ref={cardsRef} className="max-w-3xl mx-auto mb-20">
          <div className="team-card group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700">
            {/* Inner Content Container */}
            <div className="flex flex-col md:flex-row h-full relative">
              {/* Image Container with precise cropping */}
              <div className="relative w-full md:w-[40%] aspect-[4/5] sm:aspect-auto sm:h-96 md:h-auto overflow-hidden bg-offwhite md:border-r border-light-gray">
                <OptimizedImage
                  src={leaderMember.img}
                  alt={leaderMember.name}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter contrast-[1.02] saturate-[0.95]"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Minimalistic Typography & Content */}
              <div className="relative w-full md:w-[60%] p-10 md:p-12 flex flex-col justify-center bg-white">
                {/* Decorative minimal dot */}
                <div className="absolute top-10 right-10 flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[1px] bg-charcoal" />
                    <span className="text-xs uppercase tracking-[0.4em] text-charcoal font-semibold">
                      {leaderMember.role}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6 tracking-tight leading-none">
                    {leaderMember.name}
                  </h3>
                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed font-medium mb-10 max-w-lg">
                    {leaderMember.bio}
                  </p>
                </div>

                <div className="mt-auto">
                  <a href={leaderMember.linkedin} className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-charcoal font-bold group/link">
                    <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover/link:border-charcoal group-hover/link:bg-charcoal group-hover/link:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </span>
                    <span className="border-b border-transparent group-hover/link:border-charcoal pb-0.5 transition-all">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
