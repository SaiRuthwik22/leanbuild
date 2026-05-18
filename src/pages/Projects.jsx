import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import { useScrollReveal, useStaggerReveal, useParallax } from '../hooks/useScrollAnimations'
import OptimizedImage from '../components/OptimizedImage'

import imgHorizon from '../assets/proj_horizon.jpg'
import imgSerene from '../assets/proj_serene.jpg'
import imgMeridian from '../assets/proj_meridian.jpg'
import imgLotus from '../assets/proj_lotus.jpg'
import imgUrban from '../assets/proj_urban.jpg'
import imgSkyline from '../assets/proj_skyline.jpg'
import projectsHeroBg from '../assets/projects_hero_bg.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const projects = [
  { title: 'Horizon Tower', location: 'Hyderabad', category: 'Commercial', status: 'Completed', year: '2024', area: '45,000 sq ft', client: 'Skymark Realty', desc: 'A 22-storey commercial landmark redefining Hyderabad\'s financial district, featuring floor-to-ceiling glass and a rooftop observatory.', img: imgHorizon },
  { title: 'Serene Villas', location: 'Bangalore', category: 'Residential', status: 'Completed', year: '2024', area: '12,000 sq ft', client: 'Private Client', desc: 'Gated community of 16 luxury villas, each with private infinity pool, smart home systems, and biophilic design elements.', img: imgSerene },
  { title: 'The Meridian', location: 'Mumbai', category: 'Commercial', status: 'Ongoing', year: '2025', area: '78,000 sq ft', client: 'Atlas Group', desc: 'Mixed-use tower integrating Grade-A office space with ground-floor lifestyle retail and underground parking for 450 cars.', img: imgMeridian },
  { title: 'Lotus Heights', location: 'Chennai', category: 'Residential', status: 'Completed', year: '2023', area: '32,000 sq ft', client: 'Lotus Living', desc: 'Premium 18-storey residential tower with terracotta cladding, co-working amenities, and Chennai\'s first sky garden at 200ft.', img: imgLotus },
  { title: 'Urban Edge', location: 'Hyderabad', category: 'Mixed-Use', status: 'Ongoing', year: '2025', area: '56,000 sq ft', client: 'EdgeCore Ventures', desc: 'Bold geometric mixed-use campus featuring glass & steel architecture, open-air amphitheatre, and integrated transit connectivity.', img: imgUrban },
  { title: 'Skyline Residences', location: 'Pune', category: 'Residential', status: 'Completed', year: '2023', area: '28,000 sq ft', client: 'Greenfield Estates', desc: 'Premium gated townhouse community with landscaped parks, children\'s play zones, and 24/7 concierge services.', img: imgSkyline },
]

const categories = ['All', 'Residential', 'Commercial', 'Mixed-Use']

/* ─── HERO (Same style as landing page, static image + mosaic) ─── */
function ProjectsHero() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const mosaicCards = [
    { id: 'horizon', img: imgHorizon, title: 'Horizon Tower', cls: 'absolute top-0 right-0 w-[58%] h-[65%]' },
    { id: 'serene', img: imgSerene, title: 'Serene Villas', cls: 'absolute bottom-0 left-0 w-[48%] h-[55%]' },
    { id: 'meridian', img: imgMeridian, title: 'The Meridian', cls: 'absolute top-[11%] left-[8%] w-[35%] h-[35%]' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Static image background */}
      <div className="absolute inset-0 z-0">
        <img src={projectsHeroBg} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      <div className="container-narrow relative z-10 pt-28 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">Portfolio</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-balance leading-[1.08]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Our Projects Speak Louder Than Words
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-7 max-w-md text-white/65 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
            >
              A curated selection of our finest residential, commercial, and mixed-use
              developments across India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="/contact" className="px-8 py-3.5 bg-white text-[#0a0a0a] text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5">
                Start Your Project
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-12 pt-8 border-t border-white/10 flex gap-8"
            >
              {[
                { n: '6+', label: 'Landmark Projects' },
                { n: '3', label: 'Cities' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-heading font-bold text-white">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mosaic image grid — hovered card pops to front */}
          <div className="lg:col-span-7 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative h-[480px]"
            >
              {mosaicCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  className={`${card.cls} transform-gpu will-change-transform`}
                  style={{
                    zIndex: hoveredCard === card.id ? 50 : 10 - i
                  }}
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2
                  }}
                >
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 border-2 ${hoveredCard === card.id
                      ? 'border-white/40 scale-105'
                      : hoveredCard && hoveredCard !== card.id
                        ? 'border-transparent opacity-50 scale-[0.97]'
                        : 'border-white/10'
                      }`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <OptimizedImage src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 transform-gpu" eager wrapperClassName="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute bottom-4 left-4 transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-70'
                      }`}>
                      <p className="text-white text-sm font-heading font-semibold drop-shadow-lg">{card.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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

/* ─── FILTERABLE GALLERY ─── */
function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            wrapperClassName="w-full h-full"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Hover info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-sm leading-relaxed line-clamp-2">{project.desc}</p>
        </div>
        {/* Status badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold backdrop-blur-md ${project.status === 'Ongoing' ? 'bg-amber-500/90 text-white' : 'bg-white/90 text-charcoal'
          }`}>
          {project.status}
        </div>
      </div>

      {/* Info */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">{project.category}</span>
          <span className="text-warm-gray/30 text-xs">•</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">{project.year}</span>
        </div>
        <h3 className="text-lg font-heading font-semibold group-hover:text-dark-slate transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-warm-gray mt-1">{project.location} — {project.area}</p>
      </div>
    </motion.div>
  )
}

function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const headerRef = useScrollReveal({ y: 30 })
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        {/* Header + Filters */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-warm-gray mb-3">Gallery</p>
            <h2>Explore Our Portfolio</h2>
          </div>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-400 ${activeFilter === cat
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-offwhite text-warm-gray hover:bg-light-gray hover:text-dark-slate'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FEATURED PROJECT DEEP DIVE ─── */
function FeaturedProject() {
  const headerRef = useScrollReveal({ y: 30 })
  const imgRef = useScrollReveal({ y: 50, delay: 0.1 })
  const detailRef = useScrollReveal({ y: 50, delay: 0.25 })

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={headerRef} className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.4em] text-warm-gray mb-3">Featured Project</p>
          <h2 className="text-balance">Horizon Tower, Hyderabad</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Image */}
          <div ref={imgRef} className="rounded-3xl overflow-hidden">
            <OptimizedImage
              src={imgHorizon}
              alt="Horizon Tower"
              className="w-full h-auto object-cover"
              wrapperClassName="w-full"
            />
          </div>

          {/* Details */}
          <div ref={detailRef}>
            <p className="text-warm-gray leading-[1.85] text-[0.975rem] mb-8">
              Rising 22 stories above Hyderabad's HITEC City, Horizon Tower is
              a statement in modern commercial architecture. The double-skin glass
              curtain wall reduces solar heat gain by 40% while flooding interiors
              with natural light. Every floor features column-free floorplates,
              giving tenants complete flexibility in layout design.
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
              {[
                { label: 'Client', value: 'Skymark Realty' },
                { label: 'Category', value: 'Commercial' },
                { label: 'Area', value: '45,000 sq ft' },
                { label: 'Status', value: 'Completed 2024' },
                { label: 'Location', value: 'HITEC City, Hyderabad' },
                { label: 'Duration', value: '28 Months' },
              ].map(spec => (
                <div key={spec.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-charcoal">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="border-t border-light-gray pt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray mb-4">Key Highlights</p>
              <ul className="space-y-3">
                {[
                  'Double-skin glass curtain wall with 40% solar gain reduction',
                  'Column-free floorplates for maximum spatial flexibility',
                  'LEED Gold pre-certified with rainwater harvesting',
                  'Rooftop observatory lounge and sky garden',
                ].map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-dark-slate leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-charcoal mt-1.5 flex-shrink-0" />
                    {hl}
                  </li>
                ))}
              </ul>
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
        <h2 className="text-white text-balance">Have a Project in Mind?</h2>
        <p className="mt-5 text-white/50 leading-relaxed">
          Whether it's a dream home or a commercial landmark, we'd love to hear your vision.
        </p>
        <a
          href="/contact"
          className="inline-block mt-10 px-12 py-4 bg-white text-charcoal text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
        >
          Start Your Project
        </a>
      </div>
    </section>
  )
}

/* ─── PROJECTS PAGE ─── */
export default function Projects() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ProjectsHero />
      <ProjectGallery />
      <FeaturedProject />
      <CTASection />
    </motion.div>
  )
}
