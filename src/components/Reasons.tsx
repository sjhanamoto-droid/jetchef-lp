import Reveal from '../lib/Reveal'
import { REASONS } from '../data/content'
import './Reasons.css'

export default function Reasons() {
  return (
    <section id="reasons" className="reasons section">
      <div className="container">
        <Reveal className="reasons__head">
          <p className="kicker">WHY JET CHEF</p>
          <h2 className="section-title">
            法人弁当に<span className="accent">選ばれる理由</span>
          </h2>
        </Reveal>

        <div className="reasons__grid">
          {REASONS.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.06} y={28}>
              <div className="reason">
                <span className="reason__no">{r.no}</span>
                <div className="reason__body">
                  <h3 className="reason__title">{r.title}</h3>
                  <p className="reason__desc">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
