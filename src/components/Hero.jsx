import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile } from '../data'
import Magnetic from './Magnetic'

const FADE = '.eyebrow, .lead, .hero-meta, .btn-row, .scroll-hint'

export default function Hero({ started }) {
  const root = useRef(null)

  // Hide everything immediately on mount so nothing flashes behind the preloader
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.set('.line-inner', { yPercent: 120 })
      gsap.set(FADE, { autoAlpha: 0, y: 22 })
      gsap.set('.hero-card', { autoAlpha: 0, y: 28, scale: 0.94 })
    }, root)
    return () => ctx.revert()
  }, [])

  // Play the entrance once the preloader has wiped away
  useEffect(() => {
    if (!started) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.eyebrow', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.05)
        .to('.line-inner', { yPercent: 0, duration: 1.05, ease: 'power4.out', stagger: 0.12 }, 0.15)
        .to('.hero-card', { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, 0.45)
        .to('.lead', { autoAlpha: 1, y: 0, duration: 0.7 }, 0.75)
        .to('.hero-meta', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.9)
        .to('.btn-row', { autoAlpha: 1, y: 0, duration: 0.6 }, 1.0)
        .to('.scroll-hint', { autoAlpha: 1, duration: 0.6 }, 1.25)
    }, root)
    return () => ctx.revert()
  }, [started])

  return (
    <header id="top" ref={root} className="hero container">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="eyebrow">Available for AI roles</span>
          <h1>
            <span className="line-mask"><span className="line-inner">Building <span className="grad">intelligent</span></span></span>
            <span className="line-mask"><span className="line-inner">autonomous systems</span></span>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-meta">
            <span>◇ {profile.location}</span>
            <span>◇ Agentic AI · RAG · LLMs</span>
          </div>
          <div className="btn-row">
            <Magnetic><a href="#projects" className="btn btn-primary">View projects →</a></Magnetic>
            <Magnetic><a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a></Magnetic>
            <Magnetic><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a></Magnetic>
          </div>
        </div>

        <aside className="hero-right">
          <div className="hero-card">
            <img src="./Myphoto.jpeg" alt="Prakhar Pandey" />
            <div className="role">{profile.role}</div>
          </div>
        </aside>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </header>
  )
}
