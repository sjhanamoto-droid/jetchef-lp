import Reveal from '../lib/Reveal'
import { STATS, ACHIEVEMENTS, REVIEWS } from '../data/content'
import './Achievements.css'

export default function Achievements() {
  return (
    <section id="achievements" className="ach">
      <div className="container">
        <Reveal className="ach__head">
          <p className="kicker ach__kicker">TRACK RECORD</p>
          <h2 className="ach__title">
            築地うなぎ食堂の<span className="ach__accent">実績</span>
          </h2>
          <p className="ach__sub">
            築地の食のプロとして長年培ってきた調理技術・運用実績をもとに開発された、実践型サービスです。
          </p>
        </Reveal>

        <div className="ach__stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} y={24}>
              <div className="stat">
                <span className="stat__value">
                  {s.value}
                  {s.unit && <i className="stat__unit">{s.unit}</i>}
                </span>
                <span className="stat__label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="ach__list" y={24}>
          <ul>
            {ACHIEVEMENTS.map((a) => (
              <li key={a}><span className="ach__check" aria-hidden="true">✓</span>{a}</li>
            ))}
          </ul>
        </Reveal>

        <div className="ach__reviews">
          {REVIEWS.map((r) => (
            <Reveal key={r.title} y={24}>
              <article className="ach__review">
                <span className="ach__stars" role="img" aria-label={`5段階中${r.rating}`}>{'★'.repeat(r.rating)}</span>
                <h3 className="ach__review-title">「{r.title}」</h3>
                <p className="ach__review-text">{r.text}</p>
                <span className="ach__review-author">— {r.author}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
