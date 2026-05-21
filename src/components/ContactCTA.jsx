import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollAnimations'

export default function ContactCTA() {
  const ref = useScrollReveal({ y: 40 })

  return (
    <section className="section-padding bg-white relative">
      <div ref={ref} className="container-narrow max-w-5xl mx-auto">
        <div className="bg-charcoal text-white rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-balance text-4xl lg:text-5xl font-heading font-bold tracking-tight">Contact Us</h2>
            <p className="mt-8 text-white/80 text-lg md:text-xl font-medium leading-relaxed tracking-wide uppercase">
              REACH OUT TODAY AND START THIS AMAZING JOURNEY WITH US
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-white text-charcoal text-base font-heading font-bold rounded-full transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:-translate-y-1"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
