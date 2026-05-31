import Reveal from '../lib/Reveal'
import './About.css'

const POINTS = [
  {
    num: '01',
    title: '電子レンジ・電源不要',
    desc: '紐を引くだけで、食べる直前に温められる加熱式弁当容器。加熱設備がない場所でも、温かい食事を提供できます。',
  },
  {
    num: '02',
    title: '体温＋約25℃前後の温度設計',
    desc: '単に熱くするのではなく、料理がおいしいと感じやすい温度帯を目安に食材温度を設計しています。',
  },
  {
    num: '03',
    title: 'どこでも、香り立つ食事体験',
    desc: '会議室・研修会場・イベント会場・高齢者施設など、食べる直前に温かく、香りが立つ食事を届けます。',
  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <Reveal className="about__head">
          <p className="kicker">ABOUT JET CHEF</p>
          <h2 className="section-title">JET CHEFとは</h2>
          <p className="about__lead">
            電子レンジ・電源不要。紐を引くだけで、食べる直前に温められる加熱式弁当容器です。
            「冷めても美味しい」ではなく、<span className="accent">「食べる直前に温める」</span>。それがJET CHEFの新しい常識です。
          </p>
        </Reveal>

        <Reveal className="about__video" y={30}>
          <div className="about__video-frame">
            <iframe
              src="https://www.youtube.com/embed/4LjRRLtawLA?rel=0&modestbranding=1"
              title="JET CHEFの使い方 動画"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="about__points">
          {POINTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08} y={28}>
              <div className="about__point">
                <span className="about__point-num">{p.num}</span>
                <h3 className="about__point-title">{p.title}</h3>
                <p className="about__point-desc">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
