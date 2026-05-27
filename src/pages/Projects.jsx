import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollAnimations'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'

/* Hero images (unchanged) */
import imgHorizon from '../assets/proj_horizon.webp'
import imgSerene from '../assets/proj_serene.webp'
import imgMeridian from '../assets/proj_meridian.webp'
import projectsHeroBg from '../assets/projects_hero_bg.webp'

/* ─── Portfolio category images ─── */
import imgMultifamily1 from '../assets/proj_multifamily_1.webp'
import imgMultifamily2 from '../assets/proj_multifamily_2.webp'
import imgMultifamily3 from '../assets/proj_multifamily_3.webp'
import imgWarehouse1 from '../assets/proj_warehouse_1.webp'
import imgWarehouse2 from '../assets/proj_warehouse_2.webp'
import imgWarehouse3 from '../assets/proj_warehouse_3.webp'
import imgRetail1 from '../assets/proj_retail_1.webp'
import imgRetail2 from '../assets/proj_retail_2.webp'
import imgTownhome1 from '../assets/proj_townhome_1.webp'
import imgIndustrial1 from '../assets/proj_industrial_1.webp'
import imgIndustrial2 from '../assets/proj_industrial_2.webp'
import imgIndustrial3 from '../assets/proj_industrial_3.webp'
import imgIndustrial4 from '../assets/proj_industrial_4.webp'
import imgIndustrial5 from '../assets/proj_industrial_5.webp'
import imgInstitutional1 from '../assets/proj_institutional_1.webp'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── Portfolio data organised by category ─── */
const portfolioCategories = [
  {
    id: 'under-construction',
    title: 'Under Construction',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M18 4l-8.49 8.49m3.49-3.49l5.1 5.1M6 20l8.49-8.49M3.99 11.01l8.49-8.49M20.01 12.99l-8.49 8.49" />
      </svg>
    ),
    projects: [
      { 
        title: 'Commercial Complex - Cornhill Business Park', 
        img: imgRetail1, 
        location: 'Jarrell, TX', 
        area: '23.78 Acres | 33,920 Sq.Ft.',
        description: 'Project Costs:\n• Phase 1 - 2.5M\n• Phase 2 - 3.4M'
      },
      { 
        title: 'School & Retail Space - Pinnacle Montessori Academy', 
        img: imgInstitutional1, 
        location: 'Oak Point, TX', 
        area: '2.2 Acres | 17,500 Sq.Ft.',
        description: 'Project Costs – 6M'
      },
    ],
  },
  {
    id: 'ready-for-construction',
    title: 'Ready for Construction',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m7.5 0h2.25" />
      </svg>
    ),
    projects: [
      { 
        title: 'Landmark @31 Apartments', 
        img: imgMultifamily1, 
        location: 'Tyler, TX', 
        description: 'Complete Land Entitled, our team is doing a design build development – working with city of Tyler on the Civil and Architectural plan approvals.\nProject to break ground in August 2025.\n\n• 8.772 acres - 3 Storied Garden Style Class A Apartments\n• 7 Apartment Buildings and a Clubhouse\n• 212 Units (21-Studio, 84-1-Bed 1-Bath and 107- 2-Bed 2-Bath)'
      },
      { 
        title: 'Luxury Apartment Complex', 
        img: imgMultifamily2, 
        location: 'Berkman Drive, Austin, TX', 
        description: 'Complete Land Entitled, our team is doing a design build development – Working with city of Austin on the Civil and Architectural plan approvals.\nProject to break ground in January 2026.\n\n• 3 Storied Garden Style Class A Apartments\n• 6 Apartment Buildings & 1 Clubhouse Building\n• 305 Units\n• World class Amenities'
      },
    ],
  },
  {
    id: 'design-stage',
    title: 'Design Stage Projects',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    projects: [
      { 
        title: 'Mixed Use Master Plan Community', 
        img: imgTownhome1, 
        location: 'Florence, SC', 
        description: 'Mixed Use Development\n• 7+ Acres Commercial | 3 acres – Storage\n• Single Family – 84 units\n• Townhomes – 70 Units\n• Apartments – 216 units\n• Approx project estimation - $48M'
      },
    ],
  },
  {
    id: 'pipeline',
    title: 'Projects in Pipeline',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .414.336.75.75.75z" />
      </svg>
    ),
    projects: [
      { 
        title: 'Retail Complex Project', 
        img: imgRetail2, 
        location: 'Glenn Heights, TX', 
        area: '4.26 Acres | 34,174 Sq.Ft.',
        description: '• Parking lots – 187 Spaces\n• Project Cost – 6.8M'
      },
      { 
        title: 'Montessori Academy Project', 
        img: imgInstitutional1, 
        location: 'Leander, TX', 
        area: '1.72 Acres | 10,400 Sq.Ft.',
        description: '• Parking lots – 34 Spaces\n• Project Cost – 3.1M'
      },
      { 
        title: 'Cedar Park Office Condos', 
        img: imgRetail1, 
        location: 'Baghdad Road, Cedar Park, TX', 
        area: '3.5 Acres | Approx. 39,000 Sq.Ft.',
        description: '• Unit Sizes Range - 1007 to 2077 Sq.Ft.\n• Parking lots - 161\n• Project Cost – 5.25M'
      },
      { 
        title: 'Rosenburg Business Center', 
        img: imgWarehouse1, 
        location: 'Rosenburg, TX', 
        area: '25 Acres | 300,000 Sq.Ft.',
        description: 'In the process Entitlement working with the city of Rosenburg Planning Department. Projected timelines for the project to start site work in December 2025.'
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed Projects',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    projects: [
      { 
        title: 'Pinnacle Montessori Academy (Day Care & Retail)', 
        img: imgInstitutional1, 
        location: 'Georgetown, TX', 
        area: '2 Acres | 17,500 Sq.Ft.',
        description: '• Project Costs – 6M\n• Project Completion – Feb 2026'
      },
      { 
        title: 'Velocity Sports Complex', 
        img: imgIndustrial1, 
        location: 'McKinney, TX', 
        area: '1.2 Acres | Approx. 23,500 Sq.Ft.',
        description: '• Total units – 26 (Sizes: 1007 to 2077 Sq.Ft.)\n• Total Parking Spaces – 52\n• Project Costs – 6M\n• Project Completion: 2025'
      },
      { 
        title: 'Mama Bros Restaurant and Banquets', 
        img: imgRetail2, 
        location: '801 Wells Branch Pkwy, Pflugerville, TX', 
        area: 'Approx. 7,800 Sq.Ft.',
        description: '• Project Type: Restaurant & Banquet Space\n• Project Costs – 1.3M'
      },
      { 
        title: 'New Sitara Restaurant', 
        img: imgRetail1, 
        location: '1779 Wells Branch Pkwy, Austin, TX', 
        area: 'Approx. 6,300 Sq.Ft.',
        description: '• Project Type: Restaurant Space\n• Project Costs – 1.15M'
      },
      { 
        title: 'The Emery Village Apartments', 
        img: imgMultifamily3, 
        location: '174 Emery Ave, Concord, NC', 
        description: '• Project Type: 132 Unit Apartments with Clubhouse.\n• Partnered with Collins & Galyon Constructions'
      },
      { 
        title: 'The Blake Condominiums', 
        img: imgMultifamily2, 
        location: '457 W Broadway, South Boston, MA', 
        description: '• Podium style construction with two floors of parking with concrete, Ground floor steel – commercial and Four floor stick-built luxury Condominiums.\n• Partnered with Brenco Constructions LLC'
      },
      { 
        title: 'Plaza Midwood Townhomes', 
        img: imgTownhome1, 
        location: '3916 The Plaza, Charlotte NC', 
        description: '• Project Type: Townhomes – 4 Units\n• Partnered with KB holdings LLC'
      },
      { 
        title: 'Godavari Restaurant', 
        img: imgRetail2, 
        location: 'Austin, TX', 
        area: '3,500 Sq.Ft.',
        description: 'Turnkey Restaurant construction. Framing, Electrical, HVAC and Plumbing. Finished the interior from insulation, Drywall and Painting. Installed Doors, Lighting fixtures, Plumbing fixtures. We completed the Kitchen and Refrigerators with Walk-in coolers/Freezers.'
      },
      { 
        title: 'Temple Extension and Improvement', 
        img: imgInstitutional1, 
        location: 'Texas', 
        area: '10 Acres',
        description: 'Turnkey construction from site development to an operating Temple and facilities. Facility to include assembly hall, kitchen, event hall, classrooms and restrooms. Cleared heavy wooded lot to make room for new construction, complete infrastructure to accommodate future expansion.'
      },
      { 
        title: 'Office & Industrial Manufacturing Facility', 
        img: imgIndustrial2, 
        location: 'Texas', 
        area: '7.5 Acres | 20,000 Sq.Ft.',
        description: 'Turnkey construction from site development. Office and industrial manufacturing facilities. Cleared heavy wooded lot, detention pond, water well and septic system, underground water, sanitary and storm water, cast-in-place concrete, structural steel framing, 50-ton bridge crane.'
      },
      { 
        title: 'Sunrise Food Mart', 
        img: imgRetail1, 
        location: 'Sunrise Beach, TX', 
        area: '0.5 Acres | Approx. 3,500 Sq.Ft.',
        description: '• Project Cost – 1.55M'
      },
      { 
        title: 'Flood Management System - Concrete Wall & Flood Gate', 
        img: imgIndustrial3, 
        location: 'City of Houston, TX', 
        description: 'Install flood prevention concrete wall and floodgate at the entry/exit of the City Annex garage near interstate 45 and the Mckinney Street bridge. Installed double submarine type doors, stainless steel dams, with all necessary structural supports.'
      },
      { 
        title: 'Ground Storage Tank - Parkglen-1 Pump Station', 
        img: imgIndustrial4, 
        location: 'City of Houston, TX', 
        description: '5.0MG ground storage tank with heavy concrete foundation and detention pond with associated site work to include heavily wooded site clearing, large diameter underground above ground fill and suction lines, protective coatings.'
      },
      { 
        title: 'Other Municipal & Industrial Infrastructure', 
        img: imgIndustrial5, 
        location: 'Texas', 
        description: '• Construction of 1,000,000 & 500,000 Gallon shop painted bolted ground storage tanks for City of South Houston.\n• Furnished and Installed oil/water separator system for Metro’s Northwest Bus Operating Facility, Houston.\n• Repairs to storm water pump station screw pumps for Texas City.\n• Construction of interim sewage treatment plant (package), lift station, 24” influent piping for Fairfield Village, Harris County MUD No. 322.\n• Construction of water supply facility for Northgate Crossing MUD No. 1, Houston.\n• Installation of 3 phase, 15KV power lines across the Colorado River for Gulf Coast Intercoastal Waterways / Corps of Engineers.'
      },
      { 
        title: 'Other Specialized Projects', 
        img: imgWarehouse2, 
        location: 'Houston, TX', 
        description: '• Removal and replacement of existing High Vacuum Pumps in highly sensitive and restricted area at Building 7, Johnson Space Center, NASA, Houston, Texas.\n• Furnishing and installation of complete Dust Suppression System for Port of Houston.'
      },
    ],
  },
]

/* ─── HERO (Same style as landing page, static image + mosaic) ─── */
function ProjectsHero() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const mosaicCards = [
    { id: 'horizon', img: imgHorizon, title: 'Horizon Tower', cls: 'absolute top-0 right-0 w-[58%] h-[65%]' },
    { id: 'serene', img: imgSerene, title: 'Serene Villas', cls: 'absolute bottom-0 left-0 w-[48%] h-[55%]' },
    { id: 'meridian', img: imgMeridian, title: 'The Meridian', cls: 'absolute top-[11%] left-[8%] w-[35%] h-[35%]' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
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
              <a href="/contact" className="px-8 py-3.5 bg-white text-[#000000] text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5">
                Start Your Project
              </a>
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

/* ─── CATEGORY NAV (sticky top bar) ─── */
function CategoryNav({ activeCategory, onCategoryClick }) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-light-gray/50">
      <div className="container-narrow">
        <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide -mx-2 px-2">
          {portfolioCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-heading font-medium whitespace-nowrap transition-all duration-400 ${activeCategory === cat.id
                  ? 'bg-charcoal text-white shadow-lg shadow-charcoal/20'
                  : 'bg-offwhite text-warm-gray hover:bg-light-gray hover:text-dark-slate'
                }`}
            >
              <span className={`transition-colors duration-300 ${activeCategory === cat.id ? 'text-white/80' : 'text-warm-gray/60'}`}>
                {cat.icon}
              </span>
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── SINGLE PROJECT CARD (for portfolio grid) ─── */
function CategoryProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        <div className="aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            wrapperClassName="w-full h-full"
          />
        </div>
        {/* Gradient overlay — appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Location badge visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-white/90 text-base font-medium">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Text info */}
      <div className="mt-4 px-1">
        <h4 className="text-lg font-heading font-semibold text-charcoal leading-snug group-hover:text-dark-slate transition-colors duration-300 line-clamp-2">
          {project.title}{project.status && <span className="font-normal text-warm-gray"> ({project.status})</span>}
        </h4>
        {project.area && (
          <p className="mt-2 text-[13px] font-semibold tracking-wide text-charcoal/70 uppercase">
            {project.area}
          </p>
        )}
        {project.description && (
          <p className="mt-3 text-sm text-warm-gray leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

/* ─── SINGLE CATEGORY SECTION ─── */
function CategorySection({ category, index }) {
  const isEven = index % 2 === 0

  /* Determine grid layout depending on number of projects */
  const getGridCols = (count) => {
    if (count === 1) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    if (count <= 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <section
      id={`portfolio-${category.id}`}
      className={`py-20 md:py-28 ${isEven ? 'bg-white' : 'bg-offwhite'}`}
    >
      <div className="container-narrow">
        {/* Category header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-charcoal/5 flex items-center justify-center text-charcoal">
              {category.icon}
            </div>
            <div className="h-px flex-1 bg-light-gray" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            {category.title}
          </h2>
          <p className="mt-2 text-sm text-warm-gray">
            {category.projects.length} {category.projects.length === 1 ? 'Project' : 'Projects'}
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className={`grid ${getGridCols(category.projects.length)} gap-6 md:gap-8`}>
          {category.projects.map((project, i) => (
            <CategoryProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PORTFOLIO HEADER + ALL CATEGORIES ─── */
function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState(portfolioCategories[0].id)
  const headerRef = useScrollReveal({ y: 30 })

  const handleCategoryClick = (id) => {
    setActiveCategory(id)
    const el = document.getElementById(`portfolio-${id}`)
    if (el) {
      const yOffset = -72 // account for sticky nav height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  /* Track which section is currently most visible */
  useEffect(() => {
    const handleScroll = () => {
      let closestId = portfolioCategories[0].id
      let closestDist = Infinity

      for (const cat of portfolioCategories) {
        const el = document.getElementById(`portfolio-${cat.id}`)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - 80)
        if (dist < closestDist) {
          closestDist = dist
          closestId = cat.id
        }
      }
      setActiveCategory(closestId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Section header */}
      <section className="pt-20 md:pt-28 pb-6 bg-white">
        <div ref={headerRef} className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-warm-gray mb-3">Portfolio</p>
            <h2 className="text-balance">Explore Our Portfolio</h2>
            <p className="mt-4 text-charcoal/70 text-base md:text-lg font-medium leading-relaxed">
              From multifamily residences to large-scale industrial infrastructure, our work spans every sector of modern construction.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky category navigation */}
      <CategoryNav activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />

      {/* All category sections */}
      {portfolioCategories.map((cat, i) => (
        <CategorySection key={cat.id} category={cat} index={i} />
      ))}
    </>
  )
}

/* ─── PROJECTS PAGE ─── */
export default function Projects() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ProjectsHero />
      <PortfolioSection />
      <ContactCTA />
    </motion.div>
  )
}
