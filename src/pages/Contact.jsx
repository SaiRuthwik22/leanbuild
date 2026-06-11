import { motion } from 'framer-motion'
import { useScrollReveal, useParallax } from '../hooks/useScrollAnimations'
import { useState } from 'react'

import contactHeroBg from '../assets/contact_hero_bg.webp'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── HERO ─── */
function ContactHero() {
  const parallaxRef = useParallax(0.2)

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-r from-blue-950 to-slate-900">
      <div className="absolute inset-0 z-0 parallax-container opacity-45">
        <img ref={parallaxRef} src={contactHeroBg} alt="" aria-hidden="true" className="parallax-img" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 w-full container max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5 bg-blue-400" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-blue-400 font-bold">Get In Touch</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-balance max-w-3xl leading-[1.1] font-heading font-extrabold tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Let's Build Something Great
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-lg text-slate-300/80 leading-relaxed text-base md:text-lg"
        >
          Have a project in mind or want to learn more about our architectural and engineering services? We're here to help.
        </motion.p>
      </div>
    </section>
  )
}

/* ─── CONTACT BODY (FORM + INFO SIDEBAR) ─── */
function ContactBody() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  
  const formRef = useScrollReveal({ y: 40 })
  const sidebarRef = useScrollReveal({ y: 40, delay: 0.15 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Form Side */}
          <div ref={formRef} className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold block mb-2">Message Us</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-charcoal mb-8 tracking-tight">Start Your Project Today</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Full Name *</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Vikram Rangan"
                    className="w-full border border-slate-200/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/30 placeholder-charcoal/30 text-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Email Address *</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@example.com"
                    className="w-full border border-slate-200/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/30 placeholder-charcoal/30 text-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full border border-slate-200/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/30 placeholder-charcoal/30 text-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Service Required</label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-slate-200/80 rounded-xl px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/30 text-charcoal cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Buildings</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation & Restoration</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-charcoal/30">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Project Details *</label>
                <textarea
                  required rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project vision, timeline, and budget..."
                  className="w-full border border-slate-200/80 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/30 placeholder-charcoal/30 text-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {submitted ? '✓ Message Sent Successfully' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div ref={sidebarRef} className="lg:col-span-5 space-y-8 lg:pl-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold block mb-2">Our Office</span>
              <h3 className="text-2xl font-heading font-extrabold text-charcoal tracking-tight mb-6">Reach Out Directly</h3>
            </div>

            <div className="space-y-6">
              {/* HQ */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Head Office</h4>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    8751 Collin McKinney Pkwy Suite 1102 #542<br />
                    McKinney, TX 75070
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Phone Line</h4>
                  <a href="tel:+15124563654" className="text-sm text-charcoal/60 hover:text-blue-600 transition-colors">
                    +1 (512) 456-3654
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Email</h4>
                  <a href="mailto:hello@leanbuild.com" className="text-sm text-charcoal/60 hover:text-blue-600 transition-colors block">
                    hello@leanbuild.com
                  </a>
                  <a href="mailto:projects@leanbuild.com" className="text-sm text-charcoal/40 hover:text-blue-600 transition-colors block mt-0.5">
                    projects@leanbuild.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Office Hours</h4>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    Mon – Fri: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 2:00 PM
                  </p>
                </div>
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
    <section className="py-24 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold block mb-2">Location</span>
          <h2 className="text-3xl font-heading font-extrabold text-charcoal tracking-tight">Visit Our Office</h2>
        </div>

        <div className="rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] h-[450px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1189498263595!2d-96.71960242352458!3d33.125603773520555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c143922d0577d%3A0xe543c1626d70ff9c!2s8751%20Collin%20McKinney%20Pkwy%20%231102%2C%20McKinney%2C%20TX%2075070%2C%20USA!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            title="LeanBuild Office Location - McKinney, TX"
          />
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
      <ContactBody />
      <MapSection />
    </motion.div>
  )
}
