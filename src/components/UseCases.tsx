import Reveal from '../lib/Reveal'
import { SCENES } from '../data/content'
import './UseCases.css'

export default function UseCases() {
  return (
    <section id="usecases" className="usecases section">
      <div className="container">
        <Reveal className="usecases__head">
          <p className="kicker">USE CASES</p>
          <h2 className="section-title">
            あらゆる<span className="accent">ビジネスシーン</span>で
          </h2>
          <p className="usecases__sub">
            会議・研修・接待から、製薬会社・MR向け、イベント・ロケ弁、そして高齢者施設・介護施設まで。
            <span className="usecases__sub-red">電子レンジ不要</span>で“温かい”を一斉に提供できます。
          </p>
        </Reveal>

        <div className="usecases__grid">
          {SCENES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06} y={28}>
              <article className="usecase">
                <div className="usecase__media">
                  <img src={c.image} alt={c.title} loading="lazy" />
                  <span className="usecase__index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="usecase__body">
                  <h3 className="usecase__title">{c.title}</h3>
                  <p className="usecase__desc">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
