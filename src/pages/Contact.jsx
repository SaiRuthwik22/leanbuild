import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollAnimations'
import { useState } from 'react'

import contactHeroBg from '../assets/hero_contact_new.png'
import ContactCTA from '../components/ContactCTA'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* ─── HERO ─── */
function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 z-0">
        <img src={contactHeroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      <div className="relative z-10 w-full container max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5 bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/60 font-bold">Get In Touch</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1189498263595!2d-96.71960242352458!3d33.125603773520555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c143922d0577d%3A0xe543c1626d70ff9c!2s8751%20Collin%20McKinney%20Pkwy%20Suite%201102%20%23542%2C%20McKinney%2C%20TX%2075070%2C%20USA!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
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
      <ContactCTA />
      <MapSection />
    </motion.div>
  )
}
