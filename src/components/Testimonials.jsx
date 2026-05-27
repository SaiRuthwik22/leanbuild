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

function TestimonialCard({ item }) {
  return (
    <div className="group relative flex-shrink-0 w-[340px] md:w-[400px] p-7 md:p-8 bg-white border border-dashed border-charcoal/20 rounded-lg hover:border-charcoal/50 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] mx-3">
      {/* Corner crosshairs */}
      <div className="absolute -top-1.5 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -top-1.5 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -bottom-2 -left-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>
      <div className="absolute -bottom-2 -right-1.5 text-xs text-charcoal/30 font-mono font-light select-none">+</div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-base text-charcoal/75 leading-[1.8] font-medium mb-6">
        "{item.quote}"
      </p>

      {/* Author */}
      <div className="pt-5 border-t border-dashed border-light-gray">
        <h4 className="text-sm font-bold text-charcoal tracking-tight">{item.name}</h4>
        <p className="text-xs text-warm-gray mt-1 font-medium">{item.role}, {item.company}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useScrollReveal({ y: 40 })

  /* Duplicate the list so CSS marquee can loop seamlessly */
  const doubledItems = [...testimonials, ...testimonials]

  return (
    <section className="section-padding bg-offwhite relative overflow-hidden border-t border-dashed border-charcoal/10">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div ref={headerRef} className="text-center mb-14">
          <p className="text-[10px] font-mono text-warm-gray tracking-widest mb-4">// CLIENT TESTIMONIALS</p>
          <h2 className="text-balance text-4xl lg:text-5xl font-heading font-bold text-charcoal tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/70 text-lg md:text-xl font-medium leading-relaxed">
            Trusted by developers, architects, and institutions across Texas.
          </p>
        </div>
      </div>

      {/* Marquee wrapper — full width overflow hidden */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-offwhite to-transparent z-10 pointer-events-none" />

        <div className="marquee-track" style={{ '--marquee-duration': '40s' }}>
          {doubledItems.map((item, i) => (
            <TestimonialCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
