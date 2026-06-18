import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useCountUp, useParallax } from '../hooks/useScrollAnimations'
import { Link } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'
import Testimonials from '../components/Testimonials'

// Assets
import heroBg from '../assets/hero_home_mobile_friendly.png'
import imgMultifamily1 from '../assets/proj_multifamily_1.webp'
import imgWarehouse1 from '../assets/proj_warehouse_1.webp'
import imgRetail1 from '../assets/proj_retail_1.webp'
import imgTownhome1 from '../assets/proj_townhome_1.webp'
import imgIndustrial1 from '../assets/proj_industrial_1.webp'
import imgInstitutional1 from '../assets/proj_institutional_1.webp'
import imgDesign from '../assets/svc_design.webp'
import imgEngineering from '../assets/svc_engineering.webp'
import imgInterior from '../assets/svc_interior.webp'
import imgRenovation from '../assets/svc_renovation.webp'
import imgCommercial from '../assets/svc_commercial.webp'
import imgPrefab from '../assets/prefab_solutions.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">

      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center"
        />

        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />
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
            Building Modern Spaces With Innovation & Precision
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}
          >
            We are a design-build company delivering intelligent construction solutions that enhance value, performance, and long-term impact.
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
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">Projects</h2>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">
            We have offered our Engineering & Construction services to multiple sectors.
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
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-charcoal/65 leading-[1.85] font-medium mb-8">
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
      <p className="text-base text-charcoal/60 leading-relaxed font-medium">{desc}</p>
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
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">LEAN BUILD</h2>
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
    desc: 'We assist you in transforming conceptual ideas into detailed blueprints.',
  },
  {
    num: '02',
    title: 'Engineering',
    img: imgEngineering,
    desc: 'We have an experienced team that can provide customized innovative engineering solutions.',
  },
  {
    num: '03',
    title: 'Construction',
    img: imgInterior,
    desc: 'We offer our clients consulting services with our highly qualified and experienced construction specialists.',
  },
  {
    num: '04',
    title: 'Re-Modeling',
    img: imgRenovation,
    desc: 'Our skilled team of designers help in Re-modeling projects as per client\'s requirements.',
  },
  {
    num: '05',
    title: 'Pre-Fabricated Solutions',
    img: imgPrefab,
    desc: 'We work with the client needs and pre-fabrication companies to provide the feasibility of the project.',
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
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">EXPLORE OUR SERVICES</h2>
          <p className="mt-5 max-w-2xl mx-auto text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">
            We Provide Planning, designing, consultation and construction services for ground-up or renovation projects.
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
                <p className="text-base text-charcoal/60 leading-relaxed font-medium">{svc.desc}</p>
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
                <p className="text-base text-charcoal/60 leading-relaxed font-medium">{svc.desc}</p>
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

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <ProjectsSection />
      <LeanBuildStatsSection />
      <ExploreServicesSection />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  )
}
