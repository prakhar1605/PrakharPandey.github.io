import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="container">
      <Reveal>
        <div className="contact-card">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's talk</span>
          <h2>Building something with AI?</h2>
          <p>
            I'm open to AI engineering roles and collaborations in agentic systems, RAG, and LLM products.
            The fastest way to reach me is email.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Magnetic><a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a></Magnetic>
            <Magnetic><a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></Magnetic>
            <Magnetic><a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a></Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
