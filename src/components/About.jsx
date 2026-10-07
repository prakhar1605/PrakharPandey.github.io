import { stats, education } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="container">
      <Reveal><span className="eyebrow">About</span></Reveal>
      <Reveal>
        <h2 className="section-title">
          I take agents from a paper<br />to something people use.
        </h2>
      </Reveal>
      <Reveal>
        <p className="section-sub">
          Final-year B.S. (Honors) in Data Science & AI at IIT Guwahati. Over the past year I've worked
          with four remote teams across US and Singapore timezones — a UW research lab, a YC-backed
          startup and two early-stage AI companies — while running my own products on the side.
        </p>
      </Reveal>
      <Reveal>
        <p className="section-sub about-angle">
          What I'm good at: turning fuzzy agent problems into measurable ones — a reward you can verify,
          a benchmark you can grade deterministically, a bug you can trace to a coordinate system.
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
        <div className="exp-card edu-card">
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
