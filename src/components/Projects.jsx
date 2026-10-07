import { projects, profile } from '../data'
import Reveal from './Reveal'

function tilt(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  card.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`
  card.style.setProperty('--mx', `${(e.clientX - r.left)}px`)
  card.style.setProperty('--my', `${(e.clientY - r.top)}px`)
}
function resetTilt(e) {
  e.currentTarget.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateY(0)'
}

export default function Projects() {
  return (
    <section id="projects" className="container">
      <Reveal><span className="eyebrow">Selected work</span></Reveal>
      <Reveal><h2 className="section-title">Projects & open source</h2></Reveal>
      <Reveal>
        <p className="section-sub">
          Products I've built and run solo, plus open models and tools anyone can use.
        </p>
      </Reveal>

      <div className="proj-grid">
        {projects.map((p, i) => {
          const primary = p.links[0]?.href
          const open = () => { if (primary) window.open(primary, '_blank', 'noopener') }
          return (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <article
                className="proj-card clickable"
                onMouseMove={tilt}
                onMouseLeave={resetTilt}
                onClick={open}
              >
                <div className="proj-top">
                  <span className="proj-tag">{p.tag}</span>
                  {p.live && (
                    <span className="live-badge"><span className="pulse" /> LIVE</span>
                  )}
                </div>
                <h3>{p.name}</h3>
                <div className="proj-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
                <p>{p.blurb}</p>
                <div className="proj-stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <div className="proj-links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className="proj-link"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <a className="more-link" href={profile.links.github} target="_blank" rel="noreferrer">
          More on GitHub <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </section>
  )
}
