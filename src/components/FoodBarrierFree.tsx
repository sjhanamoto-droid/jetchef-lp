import Reveal from '../lib/Reveal'
import { IMG } from '../data/images'
import './FoodBarrierFree.css'

export default function FoodBarrierFree() {
  return (
    <section id="barrier-free" className="bf">
      <img className="bf__bg" src={IMG.barrierFree} alt="" loading="lazy" />
      <div className="bf__scrim" />

      <div className="container bf__inner">
        <Reveal className="bf__head">
          <p className="kicker bf__kicker">FOOD BARRIER FREE</p>
          <h2 className="bf__title">
            食べることは、生きること。<br />
            JET CHEFが目指す、<span className="bf__title-accent">食のバリアフリー</span>
          </h2>
        </Reveal>

        <div className="bf__body">
          <Reveal delay={0.08}>
            <p className="bf__p">
              JET CHEFは、代表・谷口の次男 陽亮（ようすけ）さんの経験から生まれました。
              外食が難しくなった家族にも、本当においしい食事を一緒に楽しみたい——その想いが原点です。
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="bf__p">
              高齢の方、介護を受けている方、病気・障がいで外食が難しい方、そして食事環境を自由に選べない法人の現場。
              状況は違っても、「温かく本当に美味しい食事を、食べたい場所で楽しむことが難しい」という共通の課題があります。
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="bf__p">
              電気や電子レンジに頼らず、食べる直前に温かい食事を提供することで、この課題を解決する。
              <strong>誰もが美味しい食事をあきらめない社会</strong>を、JET CHEFは目指します。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
