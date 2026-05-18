import { motion } from 'framer-motion'
import { useScrollReveal, useStaggerReveal, useParallax } from '../hooks/useScrollAnimations'
import { useState } from 'react'

import contactHeroBg from '../assets/contact_hero_bg.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── HERO ─── */
function ContactHero() {
  const parallaxRef = useParallax(0.2)

  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-36 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0 parallax-container">
        <img ref={parallaxRef} src={contactHeroBg} alt="" aria-hidden="true" className="parallax-img" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mb-7">
          <div className="w-12 h-px bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">Get In Touch</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-balance max-w-3xl leading-[1.08]"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em' }}
        >
          Let's Build Something Extraordinary Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 max-w-xl text-white/55 leading-relaxed text-[1.05rem]"
        >
          Whether you have a project in mind or just want to explore possibilities, 
          we'd love to hear from you.
        </motion.p>
      </div>
    </section>
  )
}

/* ─── CONTACT FORM + INFO ─── */
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useScrollReveal({ y: 50 })
  const infoRef = useScrollReveal({ y: 50, delay: 0.2 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Send Us a Message</p>
            <h2 className="text-balance mb-10">Start Your Project Today</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-medium text-warm-gray uppercase tracking-[0.15em] mb-2">Full Name *</label>
                  <input
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Vikram Rangan"
                    className="form-input-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-medium text-warm-gray uppercase tracking-[0.15em] mb-2">Email Address *</label>
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="vikram@example.com"
                    className="form-input-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-medium text-warm-gray uppercase tracking-[0.15em] mb-2">Phone Number</label>
                  <input
                    type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-medium text-warm-gray uppercase tracking-[0.15em] mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service} onChange={handleChange}
                    className="form-input-light"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Buildings</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation & Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-medium text-warm-gray uppercase tracking-[0.15em] mb-2">Project Details *</label>
                <textarea
                  name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project vision, budget, and timeline..."
                  className="form-input-light resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-10 py-4 bg-charcoal text-white text-sm font-heading font-semibold rounded-full transition-all duration-400 hover:bg-dark-slate hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                  disabled={submitted}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div ref={infoRef} className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Contact Information</p>
            <h3 className="text-xl font-heading font-semibold mb-8">Reach Out Directly</h3>

            <div className="space-y-8">
              {/* Office address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-offwhite flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Head Office</h4>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    42, Jubilee Hills Road No. 36,<br />
                    Jubilee Hills, Hyderabad,<br />
                    Telangana 500033, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-offwhite flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Phone</h4>
                  <a href="tel:+919876543210" className="text-sm text-warm-gray hover:text-charcoal transition-colors reveal-underline">
                    +91 98765 43210
                  </a>
                  <br />
                  <a href="tel:+914023456789" className="text-sm text-warm-gray hover:text-charcoal transition-colors reveal-underline">
                    +91 40 2345 6789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-offwhite flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Email</h4>
                  <a href="mailto:hello@leanbuild.com" className="text-sm text-warm-gray hover:text-charcoal transition-colors reveal-underline">
                    hello@leanbuild.com
                  </a>
                  <br />
                  <a href="mailto:projects@leanbuild.com" className="text-sm text-warm-gray hover:text-charcoal transition-colors reveal-underline">
                    projects@leanbuild.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-offwhite flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Working Hours</h4>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    Mon – Fri: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 pt-10 border-t border-light-gray">
              <p className="text-xs uppercase tracking-[0.2em] text-warm-gray mb-4">Follow Us</p>
              <div className="flex gap-3">
                {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-light-gray flex items-center justify-center text-warm-gray hover:text-charcoal hover:border-charcoal transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-xs font-semibold">{social[0]}{social[1]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MAP SECTION ─── */
function MapSection() {
  const ref = useScrollReveal({ y: 40 })

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={ref} className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gray mb-4">Find Us</p>
          <h2 className="text-balance">Visit Our Office</h2>
          <p className="mt-4 max-w-lg mx-auto text-warm-gray leading-relaxed">
            Located in the heart of Jubilee Hills, Hyderabad — drop by for a coffee and a conversation about your next project.
          </p>
        </div>

        <div className="map-container h-[450px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4080!3d17.4310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c72b6a9b5b%3A0x123456789!2sJubilee+Hills%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LeanBuild Office Location - Jubilee Hills, Hyderabad"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── CTA SECTION ─── */
function CTASection() {
  const ref = useScrollReveal({ y: 40 })

  return (
    <section className="section-padding bg-charcoal">
      <div ref={ref} className="container-narrow text-center max-w-xl mx-auto">
        <h2 className="text-white text-balance">Ready to Transform Your Space?</h2>
        <p className="mt-5 text-white/50 leading-relaxed">
          Schedule a free consultation with our architects and discover the possibilities for your next project.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="px-10 py-4 bg-white text-charcoal text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT PAGE ─── */
export default function Contact() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ContactHero />
      <ContactForm />
      <MapSection />
      <CTASection />
    </motion.div>
  )
}
