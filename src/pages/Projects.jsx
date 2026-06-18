import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollAnimations'
import OptimizedImage from '../components/OptimizedImage'
import ContactCTA from '../components/ContactCTA'

/* Hero images (unchanged) */
import imgHorizon from '../assets/proj_horizon.webp'
import imgSerene from '../assets/proj_serene.webp'
import imgMeridian from '../assets/proj_meridian.webp'
import projectsHeroBg from '../assets/hero_projects_v2.png'

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

import luxury1 from '../assets/luxuryapartment1.png'
import luxury2 from '../assets/luxuryapartment2.png'
import luxury3 from '../assets/luxuryapartmentt3.png'

import pinnacle1 from '../assets/pinnacleacademy1.png'
import pinnacle2 from '../assets/pinnacleacademy2.png'
import pinnacle3 from '../assets/pinnacleacademy3.png'
import pinnacle4 from '../assets/pinnacleacademy4.png'

import cornhill1 from '../assets/cornhill1.png'
import cornhill2 from '../assets/cornhill2.png'
import cornhill3 from '../assets/cornhill3.png'



import pinnacletx1 from '../assets/pinnacletx1.png'
import pinnacletx2 from '../assets/pinnacletx2.png'
import pinnacletx3 from '../assets/pinnacletx3.png'
import pinnacletx4 from '../assets/pinnacletx4.png'
import pinnacletx5 from '../assets/pinnacletx5.png'

import velocity1 from '../assets/velocity1.png'
import velocity2 from '../assets/velocity2.png'
import velocity3 from '../assets/velocity3.png'
import velocity4 from '../assets/velocity4.png'
import velocity5 from '../assets/velocity5.png'
import velocity6 from '../assets/velocity6.png'
import velocity7 from '../assets/velocity7.png'

import mamabros1 from '../assets/mamabros1.png'
import mamabros2 from '../assets/mamabros2.png'
import mamabros3 from '../assets/mamabros3.png'
import mamabros4 from '../assets/mamabros4.png'

import sitara1 from '../assets/sitara1.png'
import sitara2 from '../assets/sitara2.png'
import sitara3 from '../assets/sitara3.png'
import sitara4 from '../assets/sitara4.png'

import blake1 from '../assets/blake1.png'
import blake2 from '../assets/blake2.png'
import blake3 from '../assets/blake3.png'

import godavari1 from '../assets/godavari1.png'
import godavari2 from '../assets/godavari2.png'

import sunrise1 from '../assets/sunrise1.png'
import sunrise2 from '../assets/sunrise2.png'

import flood1 from '../assets/flood1.png'
import ground1 from '../assets/ground1.png'

import landmarkApartment from '../assets/landmark_apartment.png'
import mixeduse1 from '../assets/mixeduse1.png'
import mixeduse2 from '../assets/mixeduse2.png'
import mixeduse3 from '../assets/mixeduse3.png'

import glenn1 from '../assets/glenn1.png'
import glenn2 from '../assets/glenn2.png'

import rosenburg1 from '../assets/rosenburg1.png'
import rosenburg2 from '../assets/rosenburg2.png'
import rosenburg3 from '../assets/rosenburg3.png'

import cedar1 from '../assets/cedar1.png'
import cedar2 from '../assets/cedar2.png'

import leander1 from '../assets/leander1.png'
import leander2 from '../assets/leander2.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── Slug helper ─── */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/* ─── Portfolio data organised by category ─── */
export const portfolioCategories = [
  {
    id: 'multifamily',
    title: 'Multifamily',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m7.5 0h2.25" />
      </svg>
    ),
    projects: [
      {
        title: 'Luxury Apartment Complex',
        img: luxury1,
        images: [luxury1, luxury2, luxury3],
        location: 'Berkman Drive, Austin, TX',
        totalUnits: '305 Units',
        area: '6 Apartment Buildings & 1 Clubhouse Building',
        description: 'Complete Land Entitled, our team is doing a design build development – Working with city of Austin on the Civil and Architectural plan approvals. Project to break ground in January 2026. Features 3 Storied Garden Style Class A Apartments and World class Amenities.',
        status: 'Upcoming'
      },
      {
        title: 'Landmark @31Apartments',
        img: landmarkApartment,
        location: 'Tyler, TX',
        totalUnits: 'TBD',
        area: 'Standard Apartment Complex',
        description: '• Modern standard multi-family apartment community\n• Features comfortable living spaces and essential amenities\n• Convenient access to local retail and dining in Tyler, Texas',
        status: 'Upcoming'
      },
      {
        title: 'Florence Mixed Use Apartments',
        img: mixeduse1,
        images: [mixeduse1, mixeduse2, mixeduse3],
        location: 'South Carolina',
        status: 'In Design',
        description: '• 7+ Acres Commercial\n• 3 acres – Storage\n• Single Family – 84 units\n• Townhomes – 70 Units\n• Apartments – 216 units\n• Approx project estimation - $48M'
      },
      {
        title: 'The Blake',
        img: blake1,
        images: [blake1, blake2, blake3],
        location: '457 W Broadway, South Boston, MA',
        description: 'Podium style construction with two floors of parking with concrete, Ground floor steel – commercial and Four floor stick-built luxury Condominiums.\nPartnered with Brenco Constructions LLC',
        status: 'Completed'
      },
    ],
  },
  {
    id: 'warehouses',
    title: 'Warehouses',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    projects: [
      {
        title: 'Sunrise Food Mart',
        img: sunrise1,
        images: [sunrise1, sunrise2],
        location: 'Sunrise Beach, Texas',
        area: '0.5 Acres | Approx. 3,500 Sq.Ft.',
        projectCost: '1.55M',
        status: 'Completed'
      },
    ],
  },
  {
    id: 'retail-office',
    title: 'Retail & Office',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .414.336.75.75.75z" />
      </svg>
    ),
    projects: [
      {
        title: 'Cornhill Business Park',
        img: cornhill1,
        images: [cornhill1, cornhill2, cornhill3],
        location: 'Jarrell, TX',
        area: '23.78 Acres | 33,920 Sq.Ft.',
        projectCost: '5.9M (Phase 1 & 2)',
        status: 'In Progress'
      },
      {
        title: 'Cedar Park Office Condos',
        img: cedar1,
        images: [cedar1, cedar2],
        location: 'Baghdad Road, Cedar Park, Texas',
        area: '3.5 Acres | Approx. 39,000 Sq.Ft.',
        totalUnits: 'Unit Sizes Range - 1007 to 2077 Sq.Ft.',
        parkingLots: '161 Spaces',
        projectCost: '5.25M',
        status: 'In Progress'
      },
      {
        title: 'Retail Complex Project',
        img: glenn1,
        images: [glenn1, glenn2],
        location: 'Glenn Heights, TX',
        area: '4.26 Acres | 34,174 Sq.Ft.',
        parkingLots: '187 Spaces',
        projectCost: '6.8M',
        status: 'In Pipeline'
      },
      {
        title: 'Rosenburg Business Center',
        img: rosenburg1,
        images: [rosenburg1, rosenburg2, rosenburg3],
        location: 'Rosenburg, Texas',
        area: '25 Acres | 300,000 Sq.Ft.',
        status: 'Upcoming'
      },
      {
        title: 'Pinnacle Montessori Academy',
        img: pinnacletx1,
        images: [pinnacletx1, pinnacletx2, pinnacletx3, pinnacletx4, pinnacletx5],
        location: 'Georgetown, TX',
        area: '2 Acres | 17,500 Sq.Ft.',
        projectCost: '6M',
        description: 'Project Completion – Feb 2026',
        status: 'Completed'
      },
    ],
  },
  {
    id: 'townhomes',
    title: 'Townhomes & Single Family',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    projects: [

      {
        title: 'The Emery Village Apartments',
        img: imgTownhome1,
        images: [imgMultifamily1, imgMultifamily2, imgMultifamily3],
        location: '174 Emery Ave, Concord, NC',
        totalUnits: '132',
        description: '• Project Status: Completed / Leasing Now\n• Project Type: 132 Unit Apartments with Clubhouse.\n• Project Location: 174 Emery Ave, Concord, NC\n• Partnered with Collins & Galyon Constructions',
        status: 'Completed'
      },
      {
        title: 'Plaza Midwood Townhomes',
        img: imgTownhome1,
        images: [imgTownhome1, imgMultifamily1],
        location: '3916 The Plaza, Charlotte NC',
        totalUnits: '4',
        description: '• Project Status: Completed / Sold\n• Project Type: Townhomes – 4 Units\n• Project Location: 3916 The Plaza, Charlotte NC\n• Partnered with KB holdings LLC',
        status: 'Completed'
      }
    ],
  },
  {
    id: 'infra-industrial',
    title: 'Infra – Industrial',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M18 4l-8.49 8.49m3.49-3.49l5.1 5.1M6 20l8.49-8.49M3.99 11.01l8.49-8.49M20.01 12.99l-8.49 8.49" />
      </svg>
    ),
    projects: [
      {
        title: 'Ground Storage Tank',
        img: ground1,
        images: [ground1],
        location: 'Parkglen-1 Pump station, City of Houston, Texas',
        description: '5.0MG ground storage tank with heavy concrete foundation and detention pond. Associated site work includes heavily wooded site clearing, large diameter underground/aboveground fill and suction lines, protective coatings, and miscellaneous site work necessary for completion of the project.',
        status: 'Completed'
      },
      {
        title: 'Flood Management System',
        img: flood1,
        images: [flood1],
        location: 'City of Houston, Texas',
        description: 'Install flood prevention concrete wall and flood gate at the entry/exist of the City Annex garage near interstate 45 and the Mckinney Street bridge. Also, as a part of overall flood mitigation at most of the critical City buildings and facilities, installed double submarine type doors, stainless steel dams, with all necessary structural supports and electrical controls for City of Houston, Texas.',
        status: 'Completed'
      }
    ],
  },
  {
    id: 'institutional',
    title: 'Institutional',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    projects: [
      {
        title: 'Pinnacle Montessori Academy',
        img: pinnacle1,
        images: [pinnacle1, pinnacle2, pinnacle3, pinnacle4],
        location: 'Oak Point, TX',
        area: '2.2 Acres | 17,500 Sq.Ft.',
        projectCost: '6M',
        status: 'In Progress'
      },
      {
        title: 'Montessori Academy Project',
        img: leander1,
        images: [leander1, leander2],
        location: 'Leander, TX',
        area: '1.72 Acres | 10,400 Sq.Ft.',
        parkingLots: '34 Spaces',
        projectCost: '3.1M',
        status: 'In Progress'
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed Projects',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    projects: [
      {
        title: 'Pinnacle Montessori Academy',
        img: pinnacletx1,
        images: [pinnacletx1, pinnacletx2, pinnacletx3, pinnacletx4, pinnacletx5],
        location: 'Georgetown, TX',
        area: '2 Acres | 17,500 Sq.Ft.',
        projectCost: '6M',
        description: 'Project Completion – Feb 2026',
        status: 'Completed'
      },
      {
        title: 'Velocity Sports',
        img: velocity1,
        images: [velocity1, velocity2, velocity3, velocity4, velocity5, velocity6, velocity7],
        location: 'Mckinney, TX',
        area: '1.2 Acres | 23,500 Sq.Ft.',
        totalUnits: '26 Units',
        parkingLots: '52',
        projectCost: '6M',
        description: 'Unit Sizes Range - 1007 to 2077 Sqft\nProject Completion: 2025',
        status: 'Completed'
      },
      {
        title: 'Mama Bros Restaurant and Banquets',
        img: mamabros1,
        images: [mamabros1, mamabros2, mamabros3, mamabros4],
        location: '801 Wells Branch Pkwy, Pflugerville, TX - 78660',
        area: 'Approx. 7,800 Sq.Ft.',
        projectCost: '1.3M',
        description: 'Project Type: Restaurant & Banquet Space',
        status: 'Completed'
      },
      {
        title: 'New Sitara Restaurant',
        img: sitara1,
        images: [sitara1, sitara2, sitara3, sitara4],
        location: '1779 Wells Branch Pkwy, Austin, TX 78728',
        area: 'Approx. 6300 Sq.Ft.',
        projectCost: '1.15M',
        description: 'Project Type: Restaurant & Banquet Space',
        status: 'Completed'
      },
      {
        title: 'The Blake',
        img: blake1,
        images: [blake1, blake2, blake3],
        location: '457 W Broadway, South Boston, MA',
        description: 'Podium style construction with two floors of parking with concrete, Ground floor steel – commercial and Four floor stick-built luxury Condominiums.\nPartnered with Brenco Constructions LLC',
        status: 'Completed'
      },
      {
        title: 'The Emery Village Apartments',
        img: imgMultifamily1,
        images: [imgMultifamily1, imgMultifamily2, imgMultifamily3],
        location: '174 Emery Ave, Concord, NC',
        totalUnits: '132',
        description: 'Project Type: 132 Unit Apartments with Clubhouse\nPartnered with Collins & Galyon Constructions',
        status: 'Completed'
      },
      {
        title: 'Plaza Midwood Townhomes',
        img: imgTownhome1,
        images: [imgTownhome1, imgMultifamily1],
        location: '3916 The Plaza, Charlotte NC',
        totalUnits: '4',
        description: 'Project Type: Townhomes\nPartnered with KB holdings LLC',
        status: 'Completed'
      },
      {
        title: 'Godavari Restaurant',
        img: godavari1,
        images: [godavari1, godavari2],
        location: 'Austin, TX',
        area: '3500 Sq.Ft.',
        description: 'Turnkey Restaurant construction.\nFraming, Electrical, HVAC and Plumbing. Finished the interior from insulation, Drywall and Painting. Installed Doors, Lighting fixtures, Plumbing fixtures. We completed the Kitchen and Refrigerators with Walking coolers/Freezers.',
        status: 'Completed'
      },
      {
        title: 'Sunrise Food Mart',
        img: sunrise1,
        images: [sunrise1, sunrise2],
        location: 'Sunrise Beach, Texas',
        area: '0.5 Acres | Approx. 3,500 Sq.Ft.',
        projectCost: '1.55M',
        status: 'Completed'
      },
      {
        title: 'Flood Management System',
        img: flood1,
        images: [flood1],
        location: 'City of Houston, Texas',
        description: 'Install flood prevention concrete wall and flood gate at the entry/exist of the City Annex garage near interstate 45 and the Mckinney Street bridge. Also, as a part of overall flood mitigation at most of the critical City buildings and facilities, installed double submarine type doors, stainless steel dams, with all necessary structural supports and electrical controls for City of Houston, Texas.',
        status: 'Completed'
      },
      {
        title: 'Ground Storage Tank',
        img: ground1,
        images: [ground1],
        location: 'Parkglen-1 Pump station, City of Houston, Texas',
        description: '5.0MG ground storage tank with heavy concrete foundation and detention pond. Associated site work includes heavily wooded site clearing, large diameter underground/aboveground fill and suction lines, protective coatings, and miscellaneous site work necessary for completion of the project.',
        status: 'Completed'
      }
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
      <div className="absolute inset-0 z-0 bg-[#000000]">
        <img src={projectsHeroBg} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.70] opacity-90"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
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
    <div className="hidden lg:block bg-white/95 backdrop-blur-xl border-b border-light-gray/50 shadow-sm py-4 transition-all duration-300">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center gap-3">
          {portfolioCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-heading font-semibold whitespace-nowrap transition-all duration-300 border shadow-sm ${activeCategory === cat.id
                ? 'bg-charcoal text-white border-charcoal shadow-charcoal/20'
                : 'bg-white text-charcoal border-light-gray hover:border-charcoal hover:bg-offwhite hover:shadow-md'
                }`}
            >
              <span className={`transition-colors duration-300 ${activeCategory === cat.id ? 'text-white/90' : 'text-charcoal/70'}`}>
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
  const slug = generateSlug(project.title)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        <div className="aspect-[4/3] overflow-hidden relative">
          <OptimizedImage
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            wrapperClassName="w-full h-full"
          />

          {/* Status Tag */}
          {project.status && (
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md border border-white/20
                ${project.status === 'Completed' ? 'bg-green-500/90 text-white' :
                  project.status === 'In Progress' ? 'bg-blue-500/90 text-white' :
                    'bg-orange-500/90 text-white'}`}>
                {project.status}
              </span>
            </div>
          )}
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

      {/* Text info + View Details */}
      <div className="mt-4 px-1">
        <h4 className="text-lg font-heading font-semibold text-charcoal leading-snug group-hover:text-dark-slate transition-colors duration-300 line-clamp-2">
          {project.title}
        </h4>
        {project.location && (
          <p className="mt-1.5 text-sm font-medium text-charcoal/60">{project.location}</p>
        )}
        <Link
          to={`/projects/${slug}`}
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-charcoal bg-offwhite border border-charcoal/10 rounded-full hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300 shadow-sm hover:shadow-md"
        >
          View Details
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

/* ─── SINGLE CATEGORY SECTION ─── */
function CategorySection({ category, index }) {
  const isEven = index % 2 === 0
  const isCompleted = category.id === 'completed'

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

        {/* View More link — only inside Completed Projects */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Link to="/other-projects" className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-full font-heading font-bold hover:bg-dark-slate transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
              View all completed projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        )}
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
      const yOffset = -140 // account for Navbar (72px) + CategoryNav (approx 68px)
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
        const dist = Math.abs(rect.top - 140)
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
      {/* Override ContactCTA bg so it doesn't blend with Completed Projects section */}
      <div className="[&>section]:bg-[#eaeaea]">
        <ContactCTA />
      </div>
    </motion.div>
  )
}
