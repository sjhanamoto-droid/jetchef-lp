import Reveal from '../lib/Reveal'
import './Patent.css'

export default function Patent() {
  return (
    <section id="patent" className="patent section">
      <div className="container patent__inner">
        <Reveal className="patent__badge" x={-20}>
          <img src="/assets/jetchef_images/full-resolution/tokkyologo.png" alt="特許取得済み" loading="lazy" />
        </Reveal>

        <Reveal className="patent__body" x={20} delay={0.1}>
          <p className="kicker">PATENT &amp; TRADEMARK</p>
          <h2 className="section-title">
            特許取得済みの<span className="accent">独自技術</span>
          </h2>
          <p className="patent__lead">
            「新配合の高性能発熱剤」と「その性能を最大限に引き出す専用容器」の組み合わせによる加熱構造は、
            他社にはないJET CHEF独自の特許技術として正式に登録されています。
          </p>
          <dl className="patent__nums">
            <div className="patent__num">
              <dt>特許番号</dt>
              <dd>第7657413号</dd>
            </div>
            <div className="patent__num">
              <dt>商標登録番号</dt>
              <dd>第6786212号</dd>
            </div>
          </dl>
          <p className="patent__note">「JET CHEF®」は有限会社築地にっしん太助の登録商標です。</p>
        </Reveal>
      </div>
    </section>
  )
}
