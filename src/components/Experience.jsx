import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="container">
      <Reveal><span className="eyebrow">Experience</span></Reveal>
      <Reveal><h2 className="section-title">Where I've been building</h2></Reveal>
      <Reveal>
        <p className="section-sub">
          Four remote roles across US and Singapore timezones — browser agents at a UW lab, agent
          runtime work at a YC startup, and RAG products at two early-stage AI companies.
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
                    <div className="exp-co">
                      {e.companyLink
                        ? <a href={e.companyLink} target="_blank" rel="noreferrer">{e.company} <span aria-hidden="true">↗</span></a>
                        : e.company}
                    </div>
                    <div className="exp-loc">◇ {e.location}</div>
                  </div>
                  <span className="exp-period">{e.period}</span>
                </div>
                <ul className="exp-points">
                  {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
                {e.stack && (
                  <div className="exp-stack">
                    {e.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
