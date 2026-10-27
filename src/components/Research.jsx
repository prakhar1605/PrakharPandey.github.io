import { publications } from '../data'
import Reveal from './Reveal'

export default function Research() {
  return (
    <section id="research" className="container">
      <Reveal><span className="eyebrow">Research</span></Reveal>
      <Reveal><h2 className="section-title">Publications</h2></Reveal>
      <Reveal>
        <p className="section-sub">
          I study what agents do when their own context disagrees with itself — the failure modes
          that only show up once agents run in production.
        </p>
      </Reveal>

      {publications.map((p) => (
        <Reveal key={p.title}>
          <article className="paper">
            <div className="paper-top">
              <div className="venue">
                <span className="venue-name">{p.venue}</span>
                <span className="venue-status">{p.status}</span>
              </div>
              <span className="paper-date">{p.date}</span>
            </div>

            <h3 className="paper-title">{p.title}</h3>
            <p className="paper-subtitle">{p.subtitle}</p>
            <p className="paper-meta">
              <strong>{p.authors}</strong> · Workshop {p.workshop}
              {p.arxiv && (
                <> · <a className="paper-arxiv" href={`https://arxiv.org/abs/${p.arxiv}`} target="_blank" rel="noreferrer">arXiv:{p.arxiv}</a></>
              )}
            </p>

            <p className="paper-summary">{p.summary}</p>

            <dl className="findings">
              {p.findings.map((f) => (
                <div className="finding" key={f.value}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>

            <div className="btn-row">
              {p.links.map((l, i) => (
                <a
                  key={l.href}
                  className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}
