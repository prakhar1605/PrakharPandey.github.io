import { projects } from '../data'
import Reveal from './Reveal'

function tilt(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`
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
          Products I've shipped end to end and tooling the developer community uses.
        </p>
      </Reveal>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.06}>
            <article
              className={`proj-card ${p.featured ? 'feat' : ''}`}
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
            >
              <span className="proj-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <div className="proj-stack">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              {p.link && p.link !== '#' && (
                <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                  View →
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
