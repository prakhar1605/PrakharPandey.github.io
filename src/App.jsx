import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Scene3D from './components/Scene3D'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

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

    // Fade the 3D core down as you leave the hero so content stays readable
    const onScroll = () => {
      const canvas = document.querySelector('.bg-canvas')
      if (!canvas) return
      const t = Math.min(window.scrollY / window.innerHeight, 1)
      canvas.style.opacity = String(1 - t * 0.62)
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
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Scene3D />
      <div className="scrim" />
      <div className="grain" />
      <ScrollProgress />
      <div className="content">
        <Navbar />
        <main>
          <Hero started={loaded} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer>
          © {new Date().getFullYear()} Prakhar Pandey · Built with React, Three.js & GSAP
        </footer>
      </div>
    </>
  )
}
