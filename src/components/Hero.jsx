import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile, highlights } from '../data'
import Magnetic from './Magnetic'
import Socials from './Socials'

const FADE = '.status-pill, .lead, .hero-proof, .hero-actions, .scroll-hint'

export default function Hero() {
  const root = useRef(null)

  // Layout effect so the hidden start state is applied before first paint — no flash.
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.set('.line-inner', { yPercent: 120 })
      gsap.set(FADE, { autoAlpha: 0, y: 22 })
      gsap.set('.hero-card', { autoAlpha: 0, y: 28, scale: 0.94 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
      tl.to('.status-pill', { autoAlpha: 1, y: 0, duration: 0.5 }, 0)
        .to('.line-inner', { yPercent: 0, duration: 0.95, ease: 'power4.out', stagger: 0.1 }, 0.08)
        .to('.hero-card', { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 }, 0.3)
        .to('.lead', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.5)
        .to('.hero-proof', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.62)
        .to('.hero-actions', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.72)
        .to('.scroll-hint', { autoAlpha: 1, y: 0, duration: 0.6 }, 1.0)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <header id="top" ref={root} className="hero container">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="status-pill"><span className="pulse" /> {profile.availability}</span>
          <h1>
            <span className="line-mask"><span className="line-inner">Shipping AI agents</span></span>
            <span className="line-mask"><span className="line-inner">from research</span></span>
            <span className="line-mask"><span className="line-inner"><span className="grad">to real users.</span></span></span>
          </h1>
          <p className="lead">{profile.tagline}</p>

          <ul className="hero-proof" aria-label="Highlights">
            {highlights.map((h) => (
              <li key={h.label}>
                <a href={h.href}>
                  <strong>{h.label}</strong>
                  <span>{h.detail}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <div className="btn-row">
              <Magnetic>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
                  View resume <span aria-hidden="true">↗</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost">Email me</a>
              </Magnetic>
            </div>
            <Socials omit={['email']} />
          </div>
        </div>

        <aside className="hero-right">
          <div className="hero-card">
            <img src="./Myphoto.jpeg" alt="Portrait of Prakhar Pandey" />
            <div className="hero-card-text">
              <div className="hero-name">{profile.name}</div>
              <div className="role">{profile.role}</div>
              <div className="hero-loc">{profile.location}</div>
            </div>
          </div>
        </aside>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </header>
  )
}
