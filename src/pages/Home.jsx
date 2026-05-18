import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useCountUp } from '../hooks/useScrollAnimations'
import { useEffect, useState, useRef } from 'react'
import OptimizedImage from '../components/OptimizedImage'

// AI-generated project images
import heroBg      from '../assets/hero_bg.jpg'
import svcInterior from '../assets/svc_interior.jpg'
import teamPresident from '../assets/team_president.png'
import teamCVO       from '../assets/team_cvo.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
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
  const [loaded, setLoaded]     = useState(false)
  const videoRef = useRef(null)

  // Cycle videos
  const handleVideoEnd = () => {
    setVideoIdx(i => (i + 1) % videoSources.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [videoIdx])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">

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
              className="px-8 py-3.5 bg-white text-[#0a0a0a] text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
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
          className="mt-24 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { n: '350+', label: 'Projects Completed' },
            { n: '22+',  label: 'Years Experience' },
            { n: '500+', label: 'Happy Clients' },
            { n: '45',   label: 'Awards Won' },
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
  const tagRef     = useScrollReveal({ y: 20, delay: 0.05 })
  const titleRef   = useScrollReveal({ y: 45, delay: 0.15 })
  const bodyRef    = useScrollReveal({ y: 35, delay: 0.3 })
  const divRef     = useScrollReveal({ y: 0, delay: 0.45, duration: 0.8 })
  const imgRef     = useScrollReveal({ y: 30, delay: 0.2 })

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

/* ─── Why Choose Us ─── */
const reasons = [
  { icon: '◷', title: '20+ Years Experience', desc: 'Two decades of delivering excellence in construction and architectural design.' },
  { icon: '◉', title: 'Unmatched Quality',    desc: 'Premium materials and meticulous craftsmanship in every project we undertake.' },
  { icon: '◈', title: 'Timely Delivery',      desc: 'Committed to project timelines without compromising on quality standards.' },
  { icon: '◆', title: 'Innovation Driven',    desc: 'Leveraging cutting-edge technology and modern design methodologies.' },
]

function WhyChooseUs() {
  const headerRef = useScrollReveal({ y: 40 })
  const gridRef   = useStaggerReveal('.why-card', { stagger: 0.12, y: 50 })

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Why Choose Us</p>
          <h2 className="text-balance">Built on Trust, Driven by Excellence</h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div key={i} className="why-card group p-8 rounded-2xl bg-white border border-light-gray/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 cursor-default">
              <div className="text-2xl mb-5 text-warm-gray group-hover:text-charcoal transition-colors duration-300">{item.icon}</div>
              <h4 className="text-[0.95rem] font-semibold mb-3 leading-snug">{item.title}</h4>
              <p className="text-sm text-warm-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  const leftRef  = useScrollReveal({ y: 50 })
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
  { value: 350, suffix: '+', label: 'Projects Completed' },
  { value: 22,  suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 45,  suffix: '',  label: 'Awards Won' },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => <StatItem key={i} {...s} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
const testimonials = [
  { name: 'Rajesh Kumar',  role: 'Homeowner',              initials: 'RK', text: 'LeanBuild transformed our dream home into reality. Their attention to detail and commitment to timelines was truly exceptional.' },
  { name: 'Priya Sharma',  role: 'Business Owner',         initials: 'PS', text: "Outstanding work on our commercial complex. The team's professionalism and innovative approach set them apart from any builder we've worked with." },
  { name: 'Anand Reddy',   role: 'Real Estate Developer',  initials: 'AR', text: 'Partnering with LeanBuild has been a game-changer. Superior quality, on-time delivery, and exceptional design sensibility throughout.' },
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
    name: 'Vikram Rangan',
    role: 'President & Founder',
    img: teamPresident,
    bio: 'With over 25 years of experience in construction and architecture, Vikram has led LeanBuild from a small firm to one of India\'s most trusted construction companies. His vision for sustainable, innovative building practices has earned numerous industry awards.',
    linkedin: '#',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Chief Value Officer',
    img: teamCVO,
    bio: 'Ananya brings 18 years of expertise in value engineering and client relations. She ensures every project maximizes value for clients while maintaining the highest standards of quality, sustainability, and design excellence.',
    linkedin: '#',
  },
]

function TeamSection() {
  const headerRef = useScrollReveal({ y: 40 })
  const cardsRef  = useStaggerReveal('.team-card', { stagger: 0.2, y: 60 })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Our Leadership</p>
          <h2 className="text-balance gradient-text">The Visionaries Behind LeanBuild</h2>
          <p className="mt-5 max-w-2xl mx-auto text-warm-gray leading-relaxed">
            Our leadership team combines decades of industry expertise with a passion for 
            innovation, ensuring every project reflects our commitment to excellence.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`team-card group relative rounded-3xl overflow-hidden bg-offwhite border border-light-gray/60 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${i % 2 === 0 ? 'tilt-card' : 'tilt-card tilt-card-reverse'}`}
            >
              {/* Image area */}
              <div className="relative h-80 overflow-hidden">
                <OptimizedImage
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating role badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal">
                    {member.role}
                  </span>
                </div>

                {/* Name overlay on image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Content area */}
              <div className="p-7">
                <p className="text-sm text-warm-gray leading-[1.85]">
                  {member.bio}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full border border-light-gray flex items-center justify-center text-warm-gray hover:text-charcoal hover:border-charcoal transition-all duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <div className="w-8 h-px bg-light-gray" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <IntroSection />
      <WhyChooseUs />
      <TeamSection />
      <VisionMission />
      <StatsSection />
      <TestimonialsSection />
    </motion.div>
  )
}
