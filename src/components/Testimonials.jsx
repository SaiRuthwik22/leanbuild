import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollAnimations'

const testimonials = [
  {
    quote: 'LeanBuild delivered our multifamily project on time and under budget. Their attention to structural detail is unmatched.',
    name: 'Robert Caldwell',
    role: 'Director of Development',
    company: 'Caldwell Properties',
  },
  {
    quote: 'From concept to completion, the team demonstrated exceptional engineering expertise and clear communication throughout.',
    name: 'Priya Sharma',
    role: 'Principal Architect',
    company: 'Pinnacle Design Studio',
  },
  {
    quote: 'We\'ve partnered with LeanBuild on three warehouse projects. Their prefabrication solutions saved us significant time and cost.',
    name: 'James Mitchell',
    role: 'Operations Manager',
    company: 'Gulf Coast Logistics',
  },
  {
    quote: 'The renovation of our office space was handled with professionalism and precision. Every detail was meticulously executed.',
    name: 'Angela Torres',
    role: 'Facilities Director',
    company: 'Meridian Health Systems',
  },
  {
    quote: 'LeanBuild\'s value engineering approach helped us maximize our budget without compromising on quality or design intent.',
    name: 'David Chen',
    role: 'Project Manager',
    company: 'Apex Commercial Group',
  },
  {
    quote: 'Their experience with institutional projects gave us confidence. The temple construction was a deeply personal project done right.',
    name: 'Srinivas Reddy',
    role: 'Committee Chairman',
    company: 'Woodland Hindu Temple',
  },
]

export default function Testimonials() {
  const headerRef = useScrollReveal({ y: 40 })
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const handleDotClick = (index) => {
    setActive(index)
    resetTimer()
  }

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-semibold block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Featured Quote */}
        <div className="max-w-3xl mx-auto text-center mb-14 min-h-[180px] flex items-center justify-center">
          <div className="relative w-full">
            {/* Quote mark */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-charcoal/[0.06] font-serif leading-none select-none">"</span>

            <p className="text-xl md:text-2xl lg:text-[1.65rem] text-charcoal/80 leading-relaxed font-medium tracking-tight transition-all duration-500">
              "{testimonials[active].quote}"
            </p>

            {/* Author */}
            <div className="mt-8">
              <p className="text-sm font-bold text-charcoal tracking-tight">
                {testimonials[active].name}
              </p>
              <p className="text-xs text-charcoal/40 mt-1 font-medium">
                {testimonials[active].role}, {testimonials[active].company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-8 h-2 bg-charcoal'
                  : 'w-2 h-2 bg-charcoal/15 hover:bg-charcoal/30'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
