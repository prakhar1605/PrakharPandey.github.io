import { useEffect, useState } from 'react'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
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
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  )
}
