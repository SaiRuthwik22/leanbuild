import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useParallax } from '../hooks/useScrollAnimations'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import OptimizedImage from '../components/OptimizedImage'

// Service images
import imgResidential from '../assets/svc_residential.jpg'
import imgCommercial  from '../assets/svc_commercial.jpg'
import imgInterior    from '../assets/svc_interior.jpg'
import imgRenovation  from '../assets/svc_renovation.jpg'
import imgDesign      from '../assets/svc_design.png'
import imgEngineering from '../assets/svc_engineering.png'
import imgHorizon     from '../assets/proj_horizon.jpg'
import imgSerene      from '../assets/proj_serene.jpg'
import servicesHeroBg from '../assets/services_hero_bg.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── SERVICES DATA ─── */
const services = [
  {
    num: '01',
    title: 'Design',
    desc: 'We assist you in transforming conceptual ideas into detailed blueprints.',
    features: ['Architectural Drawings', 'Concept Development', '3D Visualizations', 'Blueprint Detailing'],
    img: imgDesign,
  },
  {
    num: '02',
    title: 'Engineering',
    desc: 'We have an experienced team that can provide customized innovative engineering solutions.',
    features: ['Structural Engineering', 'MEP Systems', 'Value Engineering', 'Sustainability Analysis'],
    img: imgEngineering,
  },
  {
    num: '03',
    title: 'Space Planning',
    desc: 'We offer our clients consulting services with our highly qualified and experienced construction specialists.',
    features: ['Layout Optimization', 'Functional Zoning', 'Traffic Flow Analysis', 'Utilization Studies'],
    img: imgInterior,
  },
  {
    num: '04',
    title: 'Re-Modeling',
    desc: 'Our skilled team of designers help in Re-modeling projects as per client\'s requirements.',
    features: ['Interior Renovation', 'Structural Upgrades', 'Adaptive Reuse', 'Permit Management'],
    img: imgRenovation,
  },
  {
    num: '05',
    title: 'Prefabrication Solutions',
    desc: 'We work with the client needs and pre-fabrication companies to provide the feasibility of the project.',
    features: ['Modular Construction', 'Offsite Fabrication', 'Cost Feasibility', 'Quality Control'],
    img: imgCommercial,
  },
]

const processSteps = [
  { step: '01', title: 'Discovery',         desc: 'We listen deeply — understanding your vision, lifestyle, constraints, and aspirations through immersive consultation sessions.',    icon: '🔍' },
  { step: '02', title: 'Design & Blueprint', desc: 'Our architects create detailed 3D visualizations and blueprints, iterating with you until every line reflects your intent.',     icon: '📐' },
  { step: '03', title: 'Build & Craft',      desc: 'Skilled artisans and engineers bring the design to life with premium materials, daily quality audits, and transparent progress reports.', icon: '🏗️' },
  { step: '04', title: 'Handover & Beyond',  desc: 'Final walkthrough, quality certification, and 2-year warranty. We stay connected long after the keys change hands.',           icon: '🔑' },
]

/* ─── HERO (Same style as landing page, static image) ─── */
function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Static image background */}
      <div className="absolute inset-0 z-0">
        <img src={servicesHeroBg} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      <div className="relative z-10 w-full container-narrow pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">What We Do</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.08] text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', fontWeight: 700 }}
          >
            Full-Service Construction & Design — From Ground Up to Renovation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
          >
            From the first sketch to the final handover, we deliver end-to-end 
            services crafted to exceed every expectation.
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

/* ─── ALTERNATING SERVICE ROWS ─── */
function ServiceRow({ service, index }) {
  const isReversed = index % 2 === 1
  const imgRef   = useScrollReveal({ y: 60, delay: 0.1 })
  const textRef  = useScrollReveal({ y: 50, delay: 0.25 })
  const listRef  = useStaggerReveal('.feat-item', { stagger: 0.08, y: 20 })

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
      {/* Image */}
      <div ref={imgRef} className={`relative rounded-3xl overflow-hidden group ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            wrapperClassName="w-full h-full"
          />
        </div>
        {/* Number overlay */}
        <div className="absolute top-5 left-5 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <span className="text-sm font-heading font-bold text-charcoal">{service.num}</span>
        </div>
      </div>

      {/* Content */}
      <div ref={textRef} className={isReversed ? 'lg:[direction:ltr]' : ''}>
        <h2 className="text-2xl lg:text-3xl font-heading font-semibold leading-snug mb-5">
          {service.title}
        </h2>
        <p className="text-warm-gray leading-[1.85] text-[0.975rem] mb-8">
          {service.desc}
        </p>
        <div ref={listRef}>
          <div className="grid grid-cols-2 gap-3">
            {service.features.map((f, j) => (
              <div key={j} className="feat-item flex items-center gap-2.5 py-2.5 px-3.5 bg-offwhite rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-charcoal flex-shrink-0" />
                <span className="text-xs font-medium text-dark-slate">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="space-y-28 lg:space-y-36">
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CAPABILITY STATS ─── */
function CapabilityBanner() {
  const ref = useScrollReveal({ y: 40 })
  const gridRef = useStaggerReveal('.cap-item', { stagger: 0.1, y: 30 })

  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container-narrow">
        <div ref={ref} className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4">Our Capabilities</p>
          <h2 className="text-white text-balance">End-to-End Construction Expertise</h2>
          <p className="mt-5 text-white/50 max-w-2xl mx-auto leading-relaxed">
            From foundation to furnishing, we bring deep expertise across every 
            phase of construction and design.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '150+', label: 'Residential Projects', desc: 'Luxury homes delivered on time and on budget' },
            { n: '75+',  label: 'Commercial Builds',   desc: 'Offices, retail, and mixed-use complexes' },
            { n: '40+',  label: 'Interior Projects',   desc: 'Award-winning interior transformations' },
            { n: '98%',  label: 'Client Satisfaction',  desc: 'Repeat clients and referrals' },
          ].map((item, i) => (
            <div key={i} className="cap-item p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <span className="text-3xl font-heading font-bold text-white">{item.n}</span>
              <h4 className="mt-3 text-sm font-semibold text-white/90">{item.label}</h4>
              <p className="mt-2 text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS TIMELINE ─── */
function ProcessTimeline() {
  const headerRef   = useScrollReveal({ y: 40 })
  const timelineRef = useStaggerReveal('.proc-step', { stagger: 0.15, y: 50 })

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-warm-gray mb-4">Our Process</p>
          <h2 className="text-balance">From Vision to Reality in Four Steps</h2>
        </div>

        <div ref={timelineRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, i) => (
            <div key={i} className="proc-step relative group">
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-px bg-light-gray translate-x-1/2 pointer-events-none" style={{ width: '50%' }} />
              )}
              <div className="text-3xl mb-4">{item.icon}</div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray font-medium">Step {item.step}</span>
              <h4 className="mt-2 text-base font-semibold leading-snug">{item.title}</h4>
              <p className="mt-3 text-sm text-warm-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FEATURED WORK TEASER ─── */
function FeaturedWorkTeaser() {
  const headerRef = useScrollReveal({ y: 30 })
  const card1Ref  = useScrollReveal({ y: 50, delay: 0.1 })
  const card2Ref  = useScrollReveal({ y: 50, delay: 0.25 })

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div ref={headerRef} className="flex flex-wrap items-end justify-between mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-warm-gray mb-4">Recent Work</p>
            <h2>See Our Services in Action</h2>
          </div>
          <Link to="/projects" className="btn-outline mt-4 md:mt-0">View All Projects →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div ref={card1Ref} className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <OptimizedImage src={imgHorizon} alt="Horizon Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" wrapperClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">Commercial • Hyderabad</p>
                <h3 className="text-lg font-heading font-semibold">Horizon Tower</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={card2Ref} className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <OptimizedImage src={imgSerene} alt="Serene Villas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" wrapperClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">Residential • Bangalore</p>
                <h3 className="text-lg font-heading font-semibold">Serene Villas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  const ref = useScrollReveal({ y: 40 })
  return (
    <section className="section-padding bg-charcoal">
      <div ref={ref} className="container-narrow text-center max-w-xl mx-auto">
        <h2 className="text-white text-balance">Ready to Build Your Vision?</h2>
        <p className="mt-5 text-white/50 leading-relaxed">
          Let's discuss your project and create something extraordinary together.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-10 py-4 bg-white text-charcoal text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5">
            Start a Conversation
          </a>
          <Link to="/projects" className="px-10 py-4 border border-white/25 text-white text-sm font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:bg-white/10">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES PAGE ─── */
export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ServicesHero />
      <ServiceShowcase />
      <CapabilityBanner />
      <ProcessTimeline />
      <FeaturedWorkTeaser />
      <CTASection />
    </motion.div>
  )
}
