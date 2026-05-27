import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollAnimations'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA'

import servicesHeroBg from '../assets/services_hero_bg.webp'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── HERO ─── */
function ProductsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 z-0">
        <img src={servicesHeroBg} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      <div className="relative z-10 w-full container-narrow pt-28 pb-32">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">Our Products</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.08] text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', fontWeight: 700 }}
          >
            Innovative Building Products for Modern Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}
          >
            Discover our proprietary solutions engineered to deliver superior performance, sustainability, and value across every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#morphx" className="px-8 py-3.5 bg-white text-[#000000] text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5">
              Explore MorphX
            </a>
            <a href="#morphx-steel" className="px-8 py-3.5 border border-white/30 text-white text-sm font-heading font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/10">
              Steel Structures
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

/* ─── MORPHX PRODUCT DATA ─── */
const morphxFeatures = [
  { title: 'Advanced Composite Materials', desc: 'Engineered polymer-concrete composites providing superior durability and weather resistance for long-lasting structures.' },
  { title: 'Rapid Assembly System', desc: 'Modular interlocking design that reduces on-site construction time by up to 40% compared to traditional methods.' },
  { title: 'Thermal Efficiency', desc: 'Built-in insulation properties that exceed energy code requirements, reducing HVAC costs significantly.' },
  { title: 'Seismic Resilience', desc: 'Flexible joint technology that absorbs and distributes seismic forces, ensuring structural integrity.' },
  { title: 'Sustainable Manufacturing', desc: 'Produced using recycled materials with a carbon footprint 60% lower than conventional building components.' },
  { title: 'Custom Configurations', desc: 'Available in a wide range of profiles, sizes, and finishes to meet diverse architectural requirements.' },
]

const morphxSteelFeatures = [
  { title: 'Pre-Engineered Frameworks', desc: 'Computer-optimized steel framing systems designed for maximum load-bearing capacity with minimal material usage.' },
  { title: 'Corrosion-Resistant Coatings', desc: 'Multi-layer protective coatings including hot-dip galvanization ensuring 50+ year service life.' },
  { title: 'Integrated Connection Systems', desc: 'Precision-machined bolted connections that simplify erection and ensure consistent structural performance.' },
  { title: 'Span Capabilities', desc: 'Clear-span designs up to 200 feet, ideal for warehouses, hangars, and large commercial facilities.' },
  { title: 'Fire-Rated Solutions', desc: 'Intumescent coating options and fireproofing systems meeting UL and ASTM fire resistance standards.' },
  { title: 'BIM-Ready Designs', desc: 'Full Building Information Modeling compatibility for seamless integration into modern design workflows.' },
]

/* ─── PRODUCT SECTION ─── */
function ProductSection({ id, num, title, subtitle, description, features, isReversed }) {
  const headerRef = useScrollReveal({ y: 40 })
  const gridRef = useStaggerReveal('.feat-card', { stagger: 0.1, y: 40 })

  return (
    <section id={id} className={`section-padding relative overflow-hidden ${isReversed ? 'bg-white' : 'bg-offwhite'}`}>
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="mb-16">
          <span className="text-[10px] font-mono text-warm-gray tracking-widest block mb-4">// PRODUCT.0{num}</span>
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">{title}</h2>
          <p className="mt-3 text-lg md:text-xl text-charcoal/50 font-heading font-semibold">{subtitle}</p>
          <p className="mt-5 max-w-2xl text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">{description}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="feat-card group relative p-7 md:p-8 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              <div className="text-[10px] font-mono text-warm-gray tracking-widest mb-4">// FEAT.0{i + 1}</div>
              <h4 className="text-base font-bold text-charcoal tracking-tight mb-3">{feat.title}</h4>
              <p className="text-base text-charcoal/60 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-charcoal hover:text-black transition-colors duration-300 group/btn"
          >
            <span className="w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center group-hover/btn:border-charcoal group-hover/btn:bg-charcoal group-hover/btn:text-white transition-all duration-300">
              →
            </span>
            <span className="border-b border-transparent group-hover/btn:border-charcoal pb-0.5 transition-all">
              INQUIRE ABOUT {title.toUpperCase()}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PRODUCTS PAGE ─── */
export default function Products() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ProductsHero />
      <ProductSection
        id="morphx"
        num="1"
        title="MorphX"
        subtitle="Next-Generation Building System"
        description="MorphX is our proprietary modular building system that combines advanced composite materials with innovative assembly techniques to deliver structures that are stronger, faster to build, and more sustainable."
        features={morphxFeatures}
        isReversed={false}
      />
      <ProductSection
        id="morphx-steel"
        num="2"
        title="MorphX Steel Structures"
        subtitle="Engineered Steel Solutions"
        description="MorphX Steel Structures delivers pre-engineered steel framing systems for commercial, industrial, and institutional projects. Designed for maximum performance with precision manufacturing."
        features={morphxSteelFeatures}
        isReversed={true}
      />
      <ContactCTA />
    </motion.div>
  )
}
