import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PolicyModal({ isOpen, onClose, type }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'
  const lastUpdated = 'July 13, 2026'

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] flex flex-col max-h-[85vh] z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="px-7 pt-7 pb-5 border-b border-slate-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-lg bg-charcoal flex items-center justify-center flex-shrink-0">
                    {type === 'privacy' ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  <h2 className="text-lg font-bold font-heading tracking-tight text-charcoal">{title}</h2>
                </div>
                <p className="text-[11px] text-slate-400 ml-[42px]">Last updated: {lastUpdated}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:text-charcoal hover:bg-slate-200 transition-all duration-200 flex items-center justify-center cursor-pointer flex-shrink-0 mt-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="px-7 py-6 overflow-y-auto flex-1 space-y-5 text-[0.9rem] text-slate-600 leading-[1.75]">
              {type === 'privacy' ? <PrivacyContent /> : <TermsContent />}
            </div>

            {/* Footer */}
            <div className="px-7 py-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
              <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} LeanBuild LLC</p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-charcoal hover:bg-black text-white font-semibold text-sm transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/* ─── Section block helper ─── */
function Section({ number, title, children }) {
  return (
    <div className="space-y-2">
      <h3 className="text-[0.8rem] font-bold text-charcoal uppercase tracking-wide">
        {number}. {title}
      </h3>
      {children}
    </div>
  )
}

/* ─── Privacy Policy Content ─── */
function PrivacyContent() {
  return (
    <>
      <p>
        At LeanBuild LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <Section number={1} title="Information We Collect">
        <p>
          We collect information that you provide directly to us when you fill out contact forms, request consultations, or communicate with us. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500">
          <li>Name and contact details (email address, phone number)</li>
          <li>Project details, location, and requirements</li>
          <li>Any other details you choose to provide in your inquiries</li>
        </ul>
      </Section>

      <Section number={2} title="How We Use Your Information">
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500">
          <li>To provide, operate, and maintain our services</li>
          <li>To contact you and respond to your inquiries or request for design consultation</li>
          <li>To send you project updates, newsletters, or communications that you request</li>
          <li>To monitor and analyze website usage and improve user experience</li>
        </ul>
      </Section>

      <Section number={3} title="Sharing Your Information">
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share information with trusted third-party partners only to the extent necessary to perform services on our behalf (e.g., engineering sub-consultants, contractors) or as required by law.
        </p>
      </Section>

      <Section number={4} title="Security of Your Information">
        <p>
          We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please remember that no method of transmission over the internet is 100% secure.
        </p>
      </Section>

      <Section number={5} title="Your Rights">
        <p>
          Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. You can contact us to exercise these rights.
        </p>
      </Section>

      <Section number={6} title="Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href="mailto:info@leanbuildllc.com" className="text-charcoal font-semibold hover:underline transition-colors">
            info@leanbuildllc.com
          </a>.
        </p>
      </Section>
    </>
  )
}

/* ─── Terms of Service Content ─── */
function TermsContent() {
  return (
    <>
      <p>
        Welcome to LeanBuild LLC. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service.
      </p>

      <Section number={1} title="Acceptance of Terms">
        <p>
          By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
        </p>
      </Section>

      <Section number={2} title="Intellectual Property Rights">
        <p>
          All content, design, layouts, logos, trademarks, and media on this website are the property of LeanBuild LLC and are protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
        </p>
      </Section>

      <Section number={3} title="User Responsibilities">
        <p>When using our website and contact submission forms, you agree to:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500">
          <li>Provide accurate, current, and complete information</li>
          <li>Not use the website for any unlawful or malicious purpose</li>
          <li>Not attempt to disrupt or compromise the website's security or integrity</li>
        </ul>
      </Section>

      <Section number={4} title="Services and Projects">
        <p>
          The information on this website regarding construction, architectural, and engineering services is for informational purposes only. All projects, contracts, and pricing are subject to separate formal agreements signed directly between LeanBuild LLC and our clients.
        </p>
      </Section>

      <Section number={5} title="Disclaimer and Limitation of Liability">
        <p>
          This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. LeanBuild LLC makes no representations or warranties of any kind. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.
        </p>
      </Section>

      <Section number={6} title="Governing Law">
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, USA, without regard to its conflict of law principles.
        </p>
      </Section>

      <Section number={7} title="Contact Information">
        <p>
          For any questions regarding these Terms of Service, please contact us at{' '}
          <a href="mailto:info@leanbuildllc.com" className="text-charcoal font-semibold hover:underline transition-colors">
            info@leanbuildllc.com
          </a>.
        </p>
      </Section>
    </>
  )
}
