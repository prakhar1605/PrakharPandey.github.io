import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Research', '#research'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="brand">
        <span className="dot" /> Prakhar Pandey
      </a>
      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <a href={profile.resume} target="_blank" rel="noreferrer" className="nav-resume">Resume</a>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  )
}
