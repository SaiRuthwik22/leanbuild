import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMemo, useState, useCallback } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

import Projects from './pages/Projects'
import OtherProjects from './pages/OtherProjects'
import Contact from './pages/Contact'
import PageLoader from './components/PageLoader'
import SplashScreen from './components/SplashScreen'
import { useImagePreloader } from './hooks/useImagePreloader'

// Critical above-the-fold images — preloaded per route
import heroBg from './assets/hero_bg.webp'
import aboutHeroBg from './assets/about_hero_bg.webp'
import servicesHeroBg from './assets/services_hero_bg.webp'
import projectsHeroBg from './assets/projects_hero_bg.webp'
import contactHeroBg from './assets/contact_hero_bg.webp'

const routeImages = {
  '/':         [heroBg],
  '/about':    [aboutHeroBg],
  '/services': [servicesHeroBg],

  '/projects': [projectsHeroBg],
  '/contact':  [contactHeroBg],
}

function App() {
  const location = useLocation()

  // First-visit splash screen state
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  // Determine which images to preload for the current route
  const imagesToPreload = useMemo(
    () => routeImages[location.pathname] || [],
    [location.pathname]
  )

  const { isLoaded, progress } = useImagePreloader(imagesToPreload)

  const handleExitComplete = () => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      // Allow React a tick to mount and paint the new DOM elements
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'instant', block: 'center' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
      }, 50)
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  // Show splash screen on first visit
  if (!splashDone) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <>
      <PageLoader isLoaded={isLoaded} progress={progress} />
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/other-projects" element={<OtherProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
