import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'

import imgCommercial from '../assets/svc_commercial.webp'
import imgInterior from '../assets/svc_interior.webp'
import imgRenovation from '../assets/svc_renovation.webp'
import imgDesign from '../assets/svc_design.webp'
import imgEngineering from '../assets/svc_engineering.webp'
import servicesHeroBg from '../assets/services_hero_bg.webp'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
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



/* ─── HERO (Same style as landing page, static image) ─── */
function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
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
            Building Smarter Spaces From Concept to Completion
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}
          >
            We provide comprehensive planning, design, development, construction, and consultation services for modern new-build and renovation projects.
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
  const imgRef = useScrollReveal({ y: 60, delay: 0.1 })
  const textRef = useScrollReveal({ y: 50, delay: 0.25 })
  const listRef = useStaggerReveal('.feat-item', { stagger: 0.08, y: 20 })

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
        <p className="text-warm-gray leading-[1.85] text-base md:text-lg mb-8">
          {service.desc}
        </p>
        <div ref={listRef}>
          <div className="grid grid-cols-2 gap-3">
            {service.features.map((f, j) => (
              <div key={j} className="feat-item flex items-center gap-2.5 py-2.5 px-3.5 bg-offwhite rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-charcoal flex-shrink-0" />
                <span className="text-sm font-medium text-dark-slate">{f}</span>
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



/* ─── SERVICES PAGE ─── */
export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ServicesHero />
      <ServiceShowcase />
      <ContactCTA />
    </motion.div>
  )
}
