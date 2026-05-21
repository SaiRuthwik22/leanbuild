import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useCountUp } from '../hooks/useScrollAnimations'
import { useEffect, useState, useRef } from 'react'
import OptimizedImage from '../components/OptimizedImage'

// Assets
import aboutHeroBg from '../assets/about_hero_bg.webp'
import teamPresident from '../assets/president.png'
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
const videoSources = [
  // Pexels: luxury modern home exterior
  'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4',
  // Pexels: modern house interior / living room
  'https://videos.pexels.com/video-files/7578544/7578544-hd_1920_1080_25fps.mp4',
  // Pexels: building construction exterior
  'https://videos.pexels.com/video-files/3252564/3252564-hd_1920_1080_24fps.mp4',
]

function AboutHero() {
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
          src={aboutHeroBg}
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
            A Legacy of Architectural Excellence & Innovation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 text-white/65 leading-relaxed max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
          >
            With over two decades of experience, we transform ambitious visions
            into stunning realities — building spaces that inspire and endure.
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



/* ─── Leadership Profile ─── */
const leadershipProfile = [
  {
    title: 'Experience',
    desc: 'Over 40 years of engineering and management experience, encompassing a wide breadth of expertise in electrical, mechanical, civil, warehousing, and industrial construction.'
  },
  {
    title: 'History',
    desc: 'As president and owner of an electrical control systems manufacturing company and an engineering and construction company, he has personally overseen every aspect of the business, incorporating both technical know-how as well as considerable financial and business management experience.'
  },
  {
    title: 'Skills',
    desc: 'This experience combined with his critical skill and keen attention to detail has led his advisory and consulting services to be sought out for various real estate ventures including multiple temples in Houston.'
  },
  {
    title: 'Clients',
    desc: 'Mr. Jannapureddy Managed and Successfully executed numerous multi million-dollar projects across the state of Texas, possesses in-depth planning, estimating, and construction knowledge.'
  },
  {
    title: 'Work',
    desc: 'Mr. Jannapureddy directly managed hands on several diversified projects totaling over $50 million required several disciplines.'
  }
]

function WhyChooseUs() {
  const headerRef = useScrollReveal({ y: 40 })
  const gridRef = useStaggerReveal('.profile-card', { stagger: 0.15, y: 50 })

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Leadership</p>
          <h2 className="text-balance">Built on Trust, Driven by Excellence</h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {leadershipProfile.map((item, i) => (
            <div key={i} className="profile-card group relative p-8 md:p-10 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] cursor-default">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-warm-gray/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
                <h4 className="text-[0.8rem] uppercase tracking-[0.2em] font-semibold text-charcoal">{item.title}</h4>
              </div>

              <p className="text-[0.875rem] text-warm-gray leading-[1.85]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  const leftRef = useScrollReveal({ y: 50 })
  const rightRef = useScrollReveal({ y: 50, delay: 0.25 })

  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28">
        <div ref={leftRef}>
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-5">Our Vision</p>
          <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-6 leading-snug">
            Shaping the Future of Urban Living
          </h3>
          <p className="text-white/55 leading-[1.85] text-[0.975rem]">
            We envision a world where every structure harmonizes with its environment —
            where innovation meets sustainability and spaces empower the people who inhabit them.
          </p>
        </div>
        <div ref={rightRef}>
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-5">Our Mission</p>
          <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-6 leading-snug">
            Excellence in Every Detail
          </h3>
          <p className="text-white/55 leading-[1.85] text-[0.975rem]">
            To deliver world-class construction solutions through innovative engineering,
            transparent collaboration, and an unwavering commitment to quality. Every brick,
            every beam, every finish — crafted with purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
const stats = [
  { value: 40, suffix: '+', label: 'Years in Market' },
  { value: 80, suffix: '+', label: 'Loyalty Customers' },
  { value: 100, suffix: '+', label: 'Completed Projects' },
]

function StatItem({ value, suffix, label }) {
  const numRef = useCountUp(value, 2.5)
  return (
    <div className="text-center">
      <div className="flex items-end justify-center">
        <span ref={numRef} className="text-4xl lg:text-5xl font-heading font-bold text-charcoal tabular-nums">0</span>
        <span className="text-4xl lg:text-5xl font-heading font-bold text-charcoal">{suffix}</span>
      </div>
      <p className="mt-3 text-[0.7rem] text-warm-gray uppercase tracking-[0.2em]">{label}</p>
    </div>
  )
}

function StatsSection() {
  const ref = useScrollReveal({ y: 30 })
  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s, i) => <StatItem key={i} {...s} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
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
    <section className="section-padding bg-offwhite">
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

/* ─── Our Leadership Team ─── */
const teamMembers = [
  {
    name: 'Gopal Janapureddy',
    role: 'President',
    img: teamPresident,
    bio: 'With over 25 years of experience in construction and architecture, Gopal Janapureddy has led LeanBuild from a small firm to one of India\'s most trusted construction companies.',
    linkedin: '#',
  },
  {
    name: 'Uday vedre',
    role: 'Chief Value Officer',
    img: teamCVO,
    bio: 'Uday brings 18 years of expertise in value engineering and client relations. She ensures every project maximizes value for clients while maintaining the highest standards of quality, sustainability, and design excellence.',
    linkedin: '#',
  },
]

function TeamSection() {
  const headerRef = useScrollReveal({ y: 40 })
  const cardsRef = useStaggerReveal('.team-card', { stagger: 0.2, y: 60 })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Technical Drafting / Stitched Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-charcoal/10 -translate-x-1/2 hidden lg:block" />

      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            The Minds Building the Future
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-warm-gray text-sm leading-relaxed">
            Our leadership combines architectural imagination with precision engineering. Engineered for high performance, built to endure.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="team-card group relative p-8 md:p-10 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              {/* Corner crosshairs for technical drafting look */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
              <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

              {/* Asymmetric layout inside card */}
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Image Container with precise framing */}
                <div className="relative w-full md:w-44 h-56 md:h-64 rounded bg-offwhite overflow-hidden border border-light-gray group-hover:border-charcoal/40 transition-colors duration-500 flex-shrink-0">
                  <OptimizedImage
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    wrapperClassName="w-full h-full"
                  />
                  {/* Outer accent "stitch" lines overlay */}
                  <div className="absolute inset-2 border border-dashed border-white/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info and Bio section */}
                <div className="flex-1 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    {/* Role Stamp */}
                    <div className="text-[9px] uppercase tracking-[0.25em] font-mono font-bold text-warm-gray mb-2">
                      // {member.role}
                    </div>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-charcoal mb-4 tracking-tight group-hover:text-black transition-colors duration-300">
                      {member.name}
                    </h3>
                    {/* Bio */}
                    <p className="text-xs text-warm-gray leading-[1.85] font-light">
                      {member.bio}
                    </p>
                  </div>

                  {/* Stamp signature / LinkedIn link */}
                  <div className="mt-8 pt-6 border-t border-dashed border-light-gray flex items-center justify-between">
                    <a
                      href={member.linkedin}
                      className="group/btn flex items-center gap-3 text-[10px] uppercase font-mono tracking-widest text-charcoal hover:text-black transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <span className="w-6 h-6 rounded-full border border-charcoal/20 flex items-center justify-center group-hover/btn:border-charcoal group-hover/btn:bg-charcoal group-hover/btn:text-white transition-all duration-300">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <span>Connect Profile</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
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
      <WhyChooseUs />
      <VisionMission />
      <StatsSection />
      <TestimonialsSection />
    </motion.div>
  )
}
