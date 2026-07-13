import { motion } from 'framer-motion'


import contactHeroBg from '../assets/hero_contact_new.webp'
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


/* ─── CONTACT PAGE ─── */
export default function Contact() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <ContactHero />
      <ContactCTA />
    </motion.div>
  )
}
