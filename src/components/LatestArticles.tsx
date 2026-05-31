import { Link } from 'react-router-dom'
import Reveal from '../lib/Reveal'
import ArticleCard from './ArticleCard'
import { ARTICLES } from '../data/articles'
import './LatestArticles.css'

export default function LatestArticles() {
  const latest = ARTICLES.slice(0, 3)

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="journal" className="journal section">
      <div className="container">
        <Reveal className="journal__head">
          <p className="kicker">JOURNAL</p>
          <h2 className="section-title">
            <span className="journal__title-lead">JET CHEFに</span><span className="accent">込めた想い</span>
          </h2>
          <p className="journal__sub">
            JET CHEFは、ただ温まるだけのお弁当容器ではありません。外食が難しい方にも、会議や研修の場にも、
            温かく美味しい食事を届けたい。その想いから生まれた、築地うなぎ食堂の新しい挑戦です。
          </p>
          <div className="journal__cta">
            <Link to="/blog/about-jetchef" className="btn btn--dark">開発ストーリーを読む</Link>
            <a href="#barrier-free" className="journal__ghost" onClick={scrollTo('barrier-free')}>
              食のバリアフリーについて読む
            </a>
          </div>
        </Reveal>

        <div className="journal__grid">
          {latest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.06} y={28}>
              <ArticleCard article={a} headingLevel="h3" />
            </Reveal>
          ))}
        </div>

        <Reveal className="journal__more">
          <Link to="/blog" className="btn btn--ghost">
            記事一覧を見る<span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
