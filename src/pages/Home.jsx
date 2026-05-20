import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useCountUp } from '../hooks/useScrollAnimations'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'

// Assets
import heroBg from '../assets/hero_bg.jpg'
import svcInterior from '../assets/svc_interior.jpg'
import imgMultifamily1 from '../assets/proj_multifamily_1.png'
import imgWarehouse1 from '../assets/proj_warehouse_1.png'
import imgRetail1 from '../assets/proj_retail_1.png'
import imgTownhome1 from '../assets/proj_townhome_1.png'
import imgIndustrial1 from '../assets/proj_industrial_1.png'
import imgInstitutional1 from '../assets/proj_institutional_1.png'
import imgDesign from '../assets/svc_design.png'
import imgEngineering from '../assets/svc_engineering.png'
import imgInterior from '../assets/svc_interior.jpg'
import imgRenovation from '../assets/svc_renovation.jpg'
import imgCommercial from '../assets/svc_commercial.jpg'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─────────────────────────────────────────────
   VIDEO HERO
   Free Pexels architecture / construction videos
   (multiple clips cycle for interior + exterior)
───────────────────────────────────────────── */
const videoSources = [
  // Pexels: luxury modern home exterior
  'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4',
  // Pexels: modern house interior / living room
  'https://videos.pexels.com/video-files/7578544/7578544-hd_1920_1080_25fps.mp4',
  // Pexels: building construction exterior
  'https://videos.pexels.com/video-files/3252564/3252564-hd_1920_1080_24fps.mp4',
]

function HeroSection() {
  const [videoIdx, setVideoIdx] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef(null)

  // Cycle videos
  const handleVideoEnd = () => {
    setVideoIdx(i => (i + 1) % videoSources.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => { })
    }
  }, [videoIdx])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">

      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image shown before video loads */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        />
        <video
          ref={videoRef}
          key={videoSources[videoIdx]}
          muted
          autoPlay
          playsInline
          onCanPlayThrough={() => setLoaded(true)}
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ willChange: 'opacity' }}
        >
          <source src={videoSources[videoIdx]} type="video/mp4" />
        </video>

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
              Architecture & Construction
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
            Building Modern Spaces With Precision & Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
          >
            We craft architectural masterpieces that blend innovation with timeless design,
            delivering spaces that inspire and endure for generations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/projects"
              className="px-8 py-3.5 bg-white text-[#000000] text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white text-sm font-heading font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/10"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-24 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { n: '40+', label: 'Years in Market' },
            { n: '80+', label: 'Loyalty Customers' },
            { n: '100+', label: 'Completed Projects' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-heading font-bold text-white">{stat.n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
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

      {/* Video dot indicators */}
      <div className="absolute bottom-10 right-8 flex gap-2 z-10">
        {videoSources.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVideoIdx(i); setLoaded(false) }}
            aria-label={`Video ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${videoIdx === i ? 'w-6 bg-white' : 'w-2 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

/* ─── Who We Are ─── */
function IntroSection() {
  const tagRef = useScrollReveal({ y: 20, delay: 0.05 })
  const titleRef = useScrollReveal({ y: 45, delay: 0.15 })
  const bodyRef = useScrollReveal({ y: 35, delay: 0.3 })
  const divRef = useScrollReveal({ y: 0, delay: 0.45, duration: 0.8 })
  const imgRef = useScrollReveal({ y: 30, delay: 0.2 })

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p ref={tagRef} className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-5">Who We Are</p>
          <h2 ref={titleRef} className="text-balance leading-[1.12]">A Legacy of Architectural Excellence</h2>
          <p ref={bodyRef} className="mt-7 leading-[1.85] text-warm-gray text-[1.025rem]">
            With over two decades of expertise, we transform ambitious visions into stunning
            realities. Our commitment to precision engineering, sustainable practices, and
            timeless aesthetics has made us a trusted name in modern construction.
          </p>
          <div ref={divRef} className="mt-10 w-12 h-px bg-light-gray" />
        </div>

        {/* Interior design image */}
        <div ref={imgRef} className="relative h-[420px] rounded-2xl overflow-hidden">
          <OptimizedImage
            src={svcInterior}
            alt="Premium interior design by LeanBuild"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-charcoal">Interior Excellence</p>
            <p className="text-[10px] text-warm-gray mt-0.5">Precision in every detail</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PROJECTS SECTORS ─── */
const projectCategories = [
  {
    id: 'multifamily',
    num: '01',
    title: 'Multifamily',
    img: imgMultifamily1,
    desc: 'High-density residential developments engineered for modern community living.',
  },
  {
    id: 'warehouses',
    num: '02',
    title: 'Warehouses',
    img: imgWarehouse1,
    desc: 'State-of-the-art logistics and storage facilities optimized for commercial efficiency.',
  },
  {
    id: 'retail-office',
    num: '03',
    title: 'Retail & Office',
    img: imgRetail1,
    desc: 'Premium commercial spaces designed to inspire collaboration and customer engagement.',
  },
  {
    id: 'townhomes',
    num: '04',
    title: 'Townhomes & Single Family',
    img: imgTownhome1,
    desc: 'Custom-crafted residential designs that bring architectural character and comfort to life.',
  },
  {
    id: 'infra-industrial',
    num: '05',
    title: 'Infra – Industrial',
    img: imgIndustrial1,
    desc: 'Heavy-duty infrastructure engineering, purifying systems, and robust structural facilities.',
  },
  {
    id: 'institutional',
    num: '06',
    title: 'Institutional',
    img: imgInstitutional1,
    desc: 'Community-centric public landmarks and temples built with deep civic pride and longevity.',
  },
]

function ProjectsSection() {
  const headerReveal = useScrollReveal({ y: 40 })
  const itemsReveal = useStaggerReveal('.proj-row', { stagger: 0.15, y: 50 })

  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div ref={headerReveal} className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">// SELECT PORTFOLIO</p>
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">Our Core Project Sectors</h2>
          <p className="mt-5 max-w-xl mx-auto text-warm-gray text-sm leading-relaxed">
            Delivering structural excellence across a diverse spectrum of build typologies. Meticulously designed, structurally sound.
          </p>
        </div>

        <div ref={itemsReveal} className="space-y-16 md:space-y-24">
          {projectCategories.map((item, index) => {
            const isReversed = index % 2 === 1
            return (
              <div
                key={item.id}
                className={`proj-row grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image side */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative p-3 bg-white border border-dashed border-charcoal/20 rounded-lg group hover:border-charcoal/60 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                    {/* Corner drafting marks */}
                    <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
                    <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
                    <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
                    <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

                    <div className="aspect-[16/10] rounded overflow-hidden bg-offwhite border border-light-gray relative">
                      <OptimizedImage
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                        wrapperClassName="w-full h-full"
                      />
                      {/* Technical drafting border stitch overlay on hover */}
                      <div className="absolute inset-2 border border-dashed border-white/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  <span className="text-[10px] font-mono font-bold text-warm-gray tracking-widest block mb-3">
                    // {item.num}. {item.id.toUpperCase()}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-[1.85] font-light mb-8">
                    {item.desc}
                  </p>
                  <div>
                    <Link
                      to={`/projects#portfolio-${item.id}`}
                      className="inline-flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-charcoal hover:text-black transition-colors duration-300 group/btn"
                    >
                      <span className="w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center group-hover/btn:border-charcoal group-hover/btn:bg-charcoal group-hover/btn:text-white transition-all duration-300">
                        →
                      </span>
                      <span className="border-b border-transparent group-hover/btn:border-charcoal pb-0.5 transition-all">
                        VIEW WORK
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── LEAN BUILD STATISTICS ─── */
const leanBuildStats = [
  { value: 40, suffix: '+', label: 'Years in Market', desc: 'Over four decades of deep industry domain expertise, pioneering engineering solutions and client value.' },
  { value: 80, suffix: '+', label: 'Loyalty Customers', desc: 'Building long-term partnerships with over eighty percent of clients returning for repeat commercial builds.' },
  { value: 100, suffix: '+', label: 'Completed Projects', desc: 'Over a hundred iconic projects delivered successfully with architectural integrity and precision craftsmanship.' },
]

function LeanBuildStatsItem({ value, suffix, label, desc, index }) {
  const countRef = useCountUp(value, 2.5)
  return (
    <div className="why-card group relative p-8 md:p-10 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      {/* Corner crosshairs */}
      <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

      <div className="text-[10px] font-mono text-warm-gray tracking-widest mb-4">// METRIC.0{index + 1}</div>
      <div className="flex items-baseline mb-3">
        <span ref={countRef} className="text-5xl font-heading font-bold text-charcoal tracking-tight tabular-nums">0</span>
        <span className="text-4xl font-heading font-bold text-charcoal">{suffix}</span>
      </div>
      <h4 className="text-base font-semibold text-charcoal tracking-tight mb-3">{label}</h4>
      <p className="text-xs text-warm-gray leading-relaxed font-light">{desc}</p>
    </div>
  )
}

function LeanBuildStatsSection() {
  const headerReveal = useScrollReveal({ y: 40 })
  const gridReveal = useStaggerReveal('.why-card', { stagger: 0.15, y: 50 })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Drafting grid background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div ref={headerReveal} className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">// LEAN BUILD</p>
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">Precision & Performance Metrics</h2>
          <p className="mt-5 max-w-xl mx-auto text-warm-gray text-sm leading-relaxed">
            By optimizing resource allocation and eliminating operational waste, we deliver unmatched value without compromising architectural beauty.
          </p>
        </div>

        <div ref={gridReveal} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leanBuildStats.map((item, i) => (
            <LeanBuildStatsItem key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES LIST ─── */
const servicesList = [
  {
    num: '01',
    title: 'Designing',
    img: imgDesign,
    desc: 'Transforming custom conceptual ideas into structural blueprints and full 3D visualizations.',
  },
  {
    num: '02',
    title: 'Engineering',
    img: imgEngineering,
    desc: 'Advanced structural calculations, mechanical, electrical, and value-engineering analysis.',
  },
  {
    num: '03',
    title: 'Space Planning',
    img: imgInterior,
    desc: 'Optimization of functional layout zones and structural traffic flow for maximum utility.',
  },
  {
    num: '04',
    title: 'Re-Modeling',
    img: imgRenovation,
    desc: 'Comprehensive structural restoration, interior transformations, and adaptive reuse.',
  },
  {
    num: '05',
    title: 'Prefabrication Solutions',
    img: imgCommercial,
    desc: 'Feasibility analysis, off-site modular prefabrication, and high-efficiency installation.',
  },
]

function ExploreServicesSection() {
  const headerReveal = useScrollReveal({ y: 40 })
  const gridReveal = useStaggerReveal('.svc-card', { stagger: 0.1, y: 40 })

  return (
    <section className="section-padding bg-offwhite relative overflow-hidden border-t border-dashed border-charcoal/10">
      {/* Background drafting grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div ref={headerReveal} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">// EXPLORE OUR SERVICES</p>
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">Our Professional Capabilities</h2>
          <p className="mt-5 max-w-xl mx-auto text-warm-gray text-sm leading-relaxed">
            From the initial blueprint to the final modular handover, we deliver tailored building solutions.
          </p>
        </div>

        <div ref={gridReveal} className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {/* Top 3 services */}
          {servicesList.slice(0, 3).map((svc, i) => (
            <div
              key={svc.num}
              className="svc-card md:col-span-2 group relative p-6 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              <div>
                <div className="aspect-[4/3] rounded overflow-hidden border border-light-gray relative mb-6">
                  <OptimizedImage
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-2 border border-dashed border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-[10px] font-mono text-warm-gray tracking-widest block mb-2">// SERVICE_0{svc.num}</span>
                <h4 className="text-lg font-bold text-charcoal mb-3">{svc.title}</h4>
                <p className="text-xs text-warm-gray leading-relaxed font-light">{svc.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-light-gray flex justify-between items-center">
                <Link to="/services" className="text-[10px] uppercase font-mono tracking-widest text-charcoal hover:underline transition-all">
                  LEARN MORE
                </Link>
                <span className="text-[9px] font-mono text-light-gray">LB.SVC-0{svc.num}</span>
              </div>
            </div>
          ))}

          {/* Bottom 2 services */}
          {servicesList.slice(3).map((svc, i) => (
            <div
              key={svc.num}
              className={`svc-card md:col-span-2 group relative p-6 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-lg flex flex-col justify-between ${i === 0 ? 'md:col-start-2' : ''
                }`}
            >
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              <div>
                <div className="aspect-[4/3] rounded overflow-hidden border border-light-gray relative mb-6">
                  <OptimizedImage
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-2 border border-dashed border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-[10px] font-mono text-warm-gray tracking-widest block mb-2">// SERVICE_0{svc.num}</span>
                <h4 className="text-lg font-bold text-charcoal mb-3">{svc.title}</h4>
                <p className="text-xs text-warm-gray leading-relaxed font-light">{svc.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-light-gray flex justify-between items-center">
                <Link to="/services" className="text-[10px] uppercase font-mono tracking-widest text-charcoal hover:underline transition-all">
                  LEARN MORE
                </Link>
                <span className="text-[9px] font-mono text-light-gray">LB.SVC-0{svc.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── READY TO BUILD CTA ─── */
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

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { name: 'Rajesh Kumar', role: 'Homeowner', initials: 'RK', text: 'LeanBuild transformed our dream home into reality. Their attention to detail and commitment to timelines was truly exceptional.' },
  { name: 'Priya Sharma', role: 'Business Owner', initials: 'PS', text: "Outstanding work on our commercial complex. The team's professionalism and innovative approach set them apart from any builder we've worked with." },
  { name: 'Anand Reddy', role: 'Real Estate Developer', initials: 'AR', text: 'Partnering with LeanBuild has been a game-changer. Superior quality, on-time delivery, and exceptional design sensibility throughout.' },
]

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const wrapperRef = useScrollReveal({ y: 40 })

  useEffect(() => {
    const id = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <div ref={wrapperRef}>
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Testimonials</p>
          <h2 className="text-balance">What Our Clients Say</h2>
        </div>
        <div className="mt-14 relative" style={{ minHeight: 220 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg lg:text-xl text-dark-slate leading-[1.75] italic">
                "{testimonials[current].text}"
              </p>
              <div className="mt-8">
                <div className="w-11 h-11 mx-auto rounded-full bg-light-gray flex items-center justify-center text-warm-gray font-heading font-semibold text-xs">
                  {testimonials[current].initials}
                </div>
                <p className="mt-3 font-heading font-semibold text-charcoal">{testimonials[current].name}</p>
                <p className="text-xs text-warm-gray mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 ${current === i ? 'w-7 bg-charcoal' : 'w-2 bg-light-gray hover:bg-medium-gray'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <LeanBuildStatsSection />
      <ExploreServicesSection />
      <CTASection />
      <TestimonialsSection />
    </motion.div>
  )
}
