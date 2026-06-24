import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile } from '../data'
import Magnetic from './Magnetic'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <header id="top" ref={root} className="hero container">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="eyebrow" data-hero>Available for AI roles</span>
          <h1 data-hero>
            Building <span className="grad">intelligent</span><br />
            autonomous systems
          </h1>
          <p className="lead" data-hero>{profile.tagline}</p>
          <div className="hero-meta" data-hero>
            <span>◇ {profile.location}</span>
            <span>◇ Agentic AI · RAG · LLMs</span>
          </div>
          <div className="btn-row" data-hero>
            <Magnetic><a href="#projects" className="btn btn-primary">View projects →</a></Magnetic>
            <Magnetic><a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a></Magnetic>
            <Magnetic><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a></Magnetic>
          </div>
        </div>

        <aside className="hero-right" data-hero>
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
