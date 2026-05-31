import Reveal from '../lib/Reveal'
import { IMG } from '../data/images'
import './Temperature.css'

export default function Temperature() {
  return (
    <section id="temperature" className="temp section">
      <div className="container temp__inner">
        <Reveal className="temp__media" x={-24}>
          <img src={IMG.heatingContainer} alt="食材温度を測定する様子" loading="lazy" />
          <span className="temp__chip">体温＋約25℃前後で設計</span>
        </Reveal>

        <Reveal className="temp__body" x={24} delay={0.1}>
          <p className="kicker">TEMPERATURE DESIGN</p>
          <h2 className="section-title">
            “冷たい”から、<br />
            <span className="accent">“おいしい温度で食べる”</span>へ。
          </h2>
          <p className="temp__lead">
            配達から食事までに時間が経ち、冷めた状態で食べる——それが従来の常識でした。
            けれど、食事の満足度は「温度」によって大きく変わります。
          </p>
          <p className="temp__lead">
            JET CHEFは、熱すぎず冷めすぎない最適温度帯で、
            うなぎの香り・焼肉の脂の旨み・ご飯のふっくら感を最大限に引き出します。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
