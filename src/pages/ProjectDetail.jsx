import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContactCTA from '../components/ContactCTA'
import { portfolioCategories } from './Projects'
import { generateSlug } from '../utils/slugify'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── Find project by slug across all categories ─── */
function findProjectBySlug(slug) {
  for (const cat of portfolioCategories) {
    for (const project of cat.projects) {
      if (generateSlug(project.title) === slug) {
        return { ...project, categoryTitle: cat.title }
      }
    }
  }
  return null
}

/* ─── IMAGE SLIDER ─── */
function ImageSlider({ images, alt }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const next = () => setCurrent((p) => (p + 1) % images.length)
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length)

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
      {/* Main image */}
      <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${alt} - ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20 shadow-xl border border-white/10 cursor-pointer"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20 shadow-xl border border-white/10 cursor-pointer"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        {images.length > 1 && (
          <div className="absolute top-5 right-5 z-20 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-1.5 p-3 bg-black/90 overflow-x-auto scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                idx === current
                  ? 'ring-2 ring-white ring-offset-1 ring-offset-black/90 opacity-100'
                  : 'opacity-40 hover:opacity-80'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── 404 fallback ─── */
function ProjectNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite px-6">
      <h1 className="text-6xl font-heading font-bold text-charcoal mb-4">404</h1>
      <p className="text-lg text-charcoal/60 mb-8 text-center max-w-md">
        The project you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-full font-heading font-bold hover:bg-dark-slate transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Projects
      </Link>
    </div>
  )
}

/* ─── PROJECT DETAIL PAGE ─── */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = findProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return (
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <ProjectNotFound />
      </motion.div>
    )
  }

  const imagesToDisplay = project.images && project.images.length > 0 ? project.images : [project.img]
  const hasDataFields = project.area || project.totalUnits || project.parkingLots || project.projectCost

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Top bar with back link */}
      <div className="bg-white/80 backdrop-blur-md border-b border-charcoal/5 pt-24 pb-6 sticky top-0 z-30">
        <div className="container-narrow max-w-6xl mx-auto">
          <Link
            to={`/projects#project-${slug}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-charcoal/5 hover:bg-charcoal hover:text-white text-charcoal/70 transition-all duration-300 text-sm font-medium group hover:shadow-lg hover:shadow-charcoal/10"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Projects
          </Link>
        </div>
      </div>

      {/* Image Slider */}
      <section className="bg-offwhite py-8 md:py-12">
        <div className="container-narrow max-w-6xl mx-auto">
          <ImageSlider images={imagesToDisplay} alt={project.title} />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-narrow max-w-6xl mx-auto">

          {/* Title block */}
          <div className="mb-10 md:mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {project.status && (
                <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full
                  ${project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'}`}>
                  {project.status}
                </span>
              )}
              <span className="text-charcoal/30 text-xs uppercase tracking-widest font-semibold">
                {project.categoryTitle}
              </span>
            </div>

            <h1
              className="text-charcoal leading-[1.1] text-balance mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              {project.title}
            </h1>

            {project.location && (
              <p className="flex items-center gap-2 text-charcoal/50 text-base font-medium">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {project.location}
              </p>
            )}
          </div>

          {/* Data Grid */}
          {hasDataFields && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-charcoal/8">
              {project.area && (
                <div className="p-5 bg-offwhite rounded-xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 mb-2">Project Scale</h4>
                  <p className="text-charcoal font-bold text-base md:text-lg leading-snug">{project.area}</p>
                </div>
              )}
              {project.totalUnits && (
                <div className="p-5 bg-offwhite rounded-xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 mb-2">Total Units</h4>
                  <p className="text-charcoal font-bold text-base md:text-lg leading-snug">{project.totalUnits}</p>
                </div>
              )}
              {project.parkingLots && (
                <div className="p-5 bg-offwhite rounded-xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 mb-2">Parking Lots</h4>
                  <p className="text-charcoal font-bold text-base md:text-lg leading-snug">{project.parkingLots}</p>
                </div>
              )}
              {project.projectCost && (
                <div className="p-5 bg-offwhite rounded-xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 mb-2">Project Cost</h4>
                  <p className="text-charcoal font-bold text-base md:text-lg leading-snug">${project.projectCost}</p>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {project.description && (
            <div className="max-w-3xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30 mb-4">Project Details</h3>
              <p className="text-charcoal/65 leading-[1.9] whitespace-pre-line text-base md:text-[17px]">
                {project.description}
              </p>
            </div>
          )}


        </div>
      </section>

      <ContactCTA />
    </motion.div>
  )
}
