import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="container">
      <Reveal><span className="eyebrow">Experience</span></Reveal>
      <Reveal><h2 className="section-title">Where I've been building</h2></Reveal>
      <Reveal>
        <p className="section-sub">
          Three AI engineering internships across YC-backed and international startups — agentic systems,
          RAG, and production LLM products.
        </p>
      </Reveal>

      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.05}>
            <div className={`exp ${e.current ? 'current' : ''}`}>
              <div className="exp-card">
                <div className="exp-top">
                  <div>
                    <div className="exp-role">
                      {e.role}
                      {e.current && <span className="badge-now">Now</span>}
                    </div>
                    <div className="exp-co">{e.company}</div>
                    <div className="exp-loc">◇ {e.location}</div>
                  </div>
                  <span className="exp-period">{e.period}</span>
                </div>
                <ul className="exp-points">
                  {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
