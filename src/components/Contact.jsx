import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import Socials from './Socials'

export default function Contact() {
  return (
    <section id="contact" className="container">
      <Reveal>
        <div className="contact-card">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's talk</span>
          <h2>Building agents? Let's talk.</h2>
          <p>
            I'm open to AI engineering internships now and full-time roles from 2027 — agent
            infrastructure, post-training, evals and LLM products. Remote across US and Singapore
            timezones works well. Email is the fastest way to reach me.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Magnetic><a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a></Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                Resume <span aria-hidden="true">↗</span>
              </a>
            </Magnetic>
          </div>
          <Socials className="center" omit={['email']} />
        </div>
      </Reveal>
    </section>
  )
}
