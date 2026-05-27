import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollAnimations'

export default function ContactCTA() {
  const containerRef = useScrollReveal({ y: 30 })
  const [typedText, setTypedText] = useState('')
  
  useEffect(() => {
    const fullText = 'out.'
    let currentIndex = 0
    let isDeleting = false
    let timeout

    const type = () => {
      // Typing forward
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
        timeout = setTimeout(type, currentIndex > fullText.length ? 2000 : 200)
      } 
      // Erasing backward
      else if (isDeleting && currentIndex >= 0) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex--
        timeout = setTimeout(type, currentIndex < 0 ? 800 : 100)
      } 
      // Switch direction
      else {
        isDeleting = !isDeleting
        currentIndex = isDeleting ? fullText.length - 1 : 1
        timeout = setTimeout(type, 150)
      }
    }

    timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #2b88ff; }
        }
      `}</style>
      
      <div ref={containerRef} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Headline and Info */}
          <div>
            <div className="mb-16 pt-8">
              <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-[#111] leading-none flex items-center">
                Reach&nbsp;
                <div className="relative inline-block mt-2 align-bottom min-w-[20px]">
                  {/* Tooltip */}
                  <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-[#222] text-white text-[10px] px-2.5 py-1 rounded-md font-medium tracking-wide shadow-sm before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-[#222] animate-[fade-in_0.5s_ease-out_2s_both]">
                    Connect
                  </div>
                  
                  <div className="relative inline-block pr-1 border-r-2 border-transparent" style={{ animation: 'blink-caret .75s step-end infinite' }}>
                    {/* Blue selection box overlay */}
                    <div className="absolute inset-0 bg-[#e0f0ff] border border-[#2b88ff] -z-10 mix-blend-multiply" />
                    
                    {/* Selection dots */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#2b88ff] rounded-[1px]" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#2b88ff] rounded-[1px]" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#2b88ff] rounded-[1px]" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#2b88ff] rounded-[1px]" />
                    
                    <span className="px-1 text-[#111]">{typedText}</span>
                  </div>
                </div>
              </h2>
            </div>

            <div className="space-y-0 text-sm max-w-sm">
              {/* Info Item 1 */}
              <div className="border-t border-gray-100 py-6 flex gap-5">
                <div className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Direct Communication</p>
                  <a href="mailto:hello@leanbuild.com" className="text-gray-900 font-medium hover:text-[#2b88ff] transition-colors">
                    hello@leanbuild.com
                  </a>
                </div>
              </div>

              {/* Info Item 2 */}
              <div className="border-t border-gray-100 py-6 flex gap-5">
                <div className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Headquarters</p>
                  <a href="https://maps.google.com/?q=8751+Collin+McKinney+Pkwy+Suite+1102+McKinney+TX+75070" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:text-[#2b88ff] transition-colors block">
                    8751 Collin McKinney Pkwy Suite 1102 #542<br />
                    McKinney, TX 75070
                  </a>
                </div>
              </div>

              {/* Info Item 3 */}
              <div className="border-t border-b border-gray-100 py-6 flex gap-5">
                <div className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Phone Number</p>
                  <a href="tel:+15124563654" className="text-gray-900 font-medium hover:text-[#2b88ff] transition-colors">
                    +1 (512) 456-3654
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="pt-2">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">
              SEND US A MESSAGE
            </span>
            <h3 className="text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-10 tracking-tight">
              Start Your Project Today
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-bold">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Vikram Rangan" 
                    className="w-full border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all bg-[#f8f9fa] placeholder-gray-400 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-bold">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="vikram@example.com" 
                    className="w-full border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all bg-[#f8f9fa] placeholder-gray-400 text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-bold">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="+91 98765 43210" 
                    className="w-full border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all bg-[#f8f9fa] placeholder-gray-400 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-bold">Service Interested In</label>
                  <div className="relative">
                    <select className="w-full border border-gray-100 rounded-xl px-4 py-3.5 text-sm appearance-none focus:outline-none focus:border-[#2b88ff] focus:ring-1 focus:ring-[#2b88ff] transition-all bg-white text-gray-900 shadow-sm cursor-pointer relative z-10">
                      <option>Select a service</option>
                      <option>Residential Construction</option>
                      <option>Commercial Buildings</option>
                      <option>Interior Design</option>
                      <option>Renovation & Restoration</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-600 z-20">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-bold">Project Details *</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about your project vision, budget, and timeline..." 
                  className="w-full border border-gray-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all bg-[#f8f9fa] placeholder-gray-400 text-gray-900 resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="bg-[#111] hover:bg-black text-white font-semibold py-4 px-10 rounded-full text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Send Message
                  <span>→</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
