import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const otherProjects = [
  {
    location: "City of South Houston, Texas",
    description: "Construction of 1,000,000 Gallon & 500,000 Gallon shop painted bolted ground storage tanks complete with concrete foundation, control valves, surface water lines, and chlorination system."
  },
  {
    location: "Metro's Northwest Bus Operating Facility, Houston, Texas",
    description: "Furnished and Installed oil/water separator dissolved air flotation system, Chemical feed systems, Piping and Electrical modification."
  },
  {
    location: "Texas City, Texas",
    description: "Repairs to storm water pump station screw pumps (approx. 12' dia. x 60' long) with 3\u201d height flights (augers) for storm water pump station."
  },
  {
    location: "Fairfield Village, Harris County MUD No. 322, Texas",
    description: "Construction of interim sewage treatment plant (package), lift station, 24\u201d influent piping 18' below ground complete with foundations, piping, and electrical."
  },
  {
    location: "Northgate Crossing MUD No. 1, Houston, Texas",
    description: "Construction of water supply facility complete with 1,200 GPM water well, Ground storage tanks, Hydro-pneumatic tanks, Piping, Chlorination system, Water booster pump station with control room, Electrical, Motor control center, Programmable logic controller (PLC) instrumentation, and Emergency power auxiliary engine."
  },
  {
    location: "Gulf Coast Intercoastal Waterways / Corps of Engineers, Texas",
    description: "Installation of 3 phase, 15KV power lines and communication cables in conduits enclosed in 12\u201d steel casing across the Colorado River, approximately 1,000' and 50' below the river bed, using horizontal boring, direction drilling, and \u00bd mile long high voltage duct banks with termination switchgear on both ends of the river at Colorado River locks."
  },
  {
    location: "Johnson Space Center, NASA, Houston, Texas",
    description: "Removal and replacement of existing High Vacuum Pumps in highly sensitive and restricted area at Building 7, replacing intercoolers in the vacuum chambers, all field welded stainless cross-over piping to withstand vacuum pressure of about 10-15 microns of mercury absolute."
  },
  {
    location: "Port of Houston, Houston, Texas",
    description: "Furnishing and installation of complete Dust Suppression System with all concrete foundations, Structural steel supports, platforms, stainless steel ducts, Scrubber unit, Cyclone, Slurry tanks, Piping and appurtenances."
  }
]

export default function OtherProjects() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-32 pb-24 min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '999px', backgroundColor: '#fff', color: '#000', border: '1px solid #ddd', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#000', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Other Notable <span style={{ fontWeight: 700 }}>Completed Projects</span>
          </h1>
          <p style={{ color: '#555', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            A comprehensive list of our specialized construction, repair, and installation projects across various sectors.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {otherProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                backgroundColor: '#fff',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <svg style={{ width: '20px', height: '20px', color: '#059669', marginTop: '3px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#000', lineHeight: 1.3, margin: 0 }}>
                  {proj.location}
                </h3>
              </div>
              <p style={{ color: '#333', fontSize: '15px', lineHeight: 1.7, margin: 0, paddingLeft: '32px' }}>
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
