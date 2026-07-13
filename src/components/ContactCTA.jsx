import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollAnimations'

export default function ContactCTA() {
  const containerRef = useScrollReveal({ y: 30 })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#fcfdff] to-[#f5f8ff] relative overflow-hidden">
      {/* Decorative Bright Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-400/5 to-emerald-400/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div ref={containerRef} className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Let's Collaborate
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-charcoal tracking-tight mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="text-charcoal/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Reach out to our expert engineering and architectural team today for a free design consultation.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-[32px] border border-blue-100/50 shadow-[0_30px_70px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.06)] transition-all duration-500 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            
            {/* Left Column - Contact Details Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c1017] to-[#1a2332] p-8 lg:p-12 text-white flex flex-col justify-between relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
              
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">
                  Contact Information
                </h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-sm">
                  Whether it is a commercial development or a premium residential project, we are here to deliver excellence.
                </p>

                {/* Info List */}
                <div className="space-y-6">
                  {/* Phone */}
                  <a href="tel:+15124563654" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Phone Call</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">+1 (512) 456-3654</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@leanbuildllc.com" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Email Support</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">info@leanbuildllc.com</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Mailing Address</p>
                      <p className="text-sm font-semibold text-slate-200">8751 Collin McKinney Pkwy</p>
                      <p className="text-xs text-slate-400 mt-0.5">Suite 1102 #542, McKinney, TX 75070</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] tracking-wider text-slate-500 font-bold uppercase">
                <span>LeanBuild LLC © 2026</span>
                <span className="text-blue-500">Premium Standards</span>
              </div>
            </div>

            {/* Right Column - Submission Form */}
            <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
              <h3 className="text-xl font-extrabold text-charcoal mb-2 tracking-tight">
                Send Us a Message
              </h3>
              <p className="text-charcoal/40 text-sm mb-8">Fill out the form below and we will reach out within one business day.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full border border-blue-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 placeholder-charcoal/30 text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full border border-blue-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 placeholder-charcoal/30 text-charcoal"
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
                      placeholder="+1 (555) 123-4567"
                      className="w-full border border-blue-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 placeholder-charcoal/30 text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal/40 mb-2 font-bold">Service Required</label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full border border-blue-100 rounded-xl px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 text-charcoal cursor-pointer"
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
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project vision, timeline, and budget..."
                    className="w-full border border-blue-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 placeholder-charcoal/30 text-charcoal resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-charcoal hover:bg-black disabled:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-charcoal/20 active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <span>✓ Message Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
