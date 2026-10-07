import { Suspense, lazy, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Socials from './components/Socials'

// Three.js is the heaviest chunk — load it after the content so the page is readable immediately.
const Scene3D = lazy(() => import('./components/Scene3D'))

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [render3D, setRender3D] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    // anchor links → smooth scroll via Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const target = document.querySelector(a.getAttribute('href'))
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target, { offset: -10 })
      }
    }
    document.addEventListener('click', onClick)

    // Fade the 3D core down as you leave the hero so content stays readable,
    // and pause the WebGL render loop entirely once it's off-screen.
    const onScroll = () => {
      const vis = window.scrollY < window.innerHeight * 0.95
      setRender3D((prev) => (prev === vis ? prev : vis))
      const canvas = document.querySelector('.bg-canvas')
      if (!canvas) return
      const t = Math.min(window.scrollY / window.innerHeight, 1)
      canvas.style.opacity = String(1 - t * 0.82)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <Scene3D active={render3D} />
      </Suspense>
      <div className="scrim" />
      <div className="grain" />
      <ScrollProgress />
      <div className="content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Research />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer>
          <Socials className="center small" />
          <p>© {new Date().getFullYear()} Prakhar Pandey · IIT Guwahati</p>
        </footer>
      </div>
    </>
  )
}
