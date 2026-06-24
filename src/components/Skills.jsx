import { skills } from '../data'
import Reveal from './Reveal'

function spot(e) {
  const c = e.currentTarget
  const r = c.getBoundingClientRect()
  c.style.setProperty('--mx', `${e.clientX - r.left}px`)
  c.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Skills() {
  return (
    <section id="skills" className="container">
      <Reveal><span className="eyebrow">Toolkit</span></Reveal>
      <Reveal><h2 className="section-title">Technical skills</h2></Reveal>
      <Reveal>
        <p className="section-sub">The stack I reach for when building agentic and ML systems.</p>
      </Reveal>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="skill-card" onMouseMove={spot}>
              <h4>{group.title}</h4>
              <div className="chips">
                {group.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
