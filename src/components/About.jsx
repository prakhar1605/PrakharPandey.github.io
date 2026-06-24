import { stats, education, profile } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="container">
      <Reveal><span className="eyebrow">About</span></Reveal>
      <Reveal>
        <h2 className="section-title">
          Data Science & AI undergrad at IIT Guwahati,<br />shipping LLM products to real users.
        </h2>
      </Reveal>
      <Reveal>
        <p className="section-sub">
          I work across the agentic stack — from RAG pipelines and knowledge graphs to multi-agent
          orchestration — at YC-backed and international startups. I like building things end to end and
          getting them into people's hands.
        </p>
      </Reveal>

      <Reveal>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="exp-card" style={{ marginTop: 24 }}>
          <div className="exp-top">
            <div>
              <div className="exp-role">{education.school}</div>
              <div className="exp-co">{education.degree}</div>
            </div>
            <span className="exp-period">{education.period}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
