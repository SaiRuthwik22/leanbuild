import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PageLoader from './components/PageLoader'
import { useImagePreloader } from './hooks/useImagePreloader'

// Critical above-the-fold images — preloaded per route
import heroBg from './assets/hero_bg.jpg'
import aboutHeroBg from './assets/about_hero_bg.png'
import servicesHeroBg from './assets/services_hero_bg.png'
import projectsHeroBg from './assets/projects_hero_bg.png'
import contactHeroBg from './assets/contact_hero_bg.png'

const routeImages = {
  '/':         [heroBg],
  '/about':    [aboutHeroBg],
  '/services': [servicesHeroBg],
  '/projects': [projectsHeroBg],
  '/contact':  [contactHeroBg],
}

function App() {
  const location = useLocation()

  // Determine which images to preload for the current route
  const imagesToPreload = useMemo(
    () => routeImages[location.pathname] || [],
    [location.pathname]
  )

  const { isLoaded, progress } = useImagePreloader(imagesToPreload)

  return (
    <>
      <PageLoader isLoaded={isLoaded} progress={progress} />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
