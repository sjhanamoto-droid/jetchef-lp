import { ARTICLES } from '../data/articles'
import Reveal from '../lib/Reveal'
import ArticleCard from '../components/ArticleCard'
import './Blog.css'

export default function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-hero">
        <div className="container">
          <p className="kicker">JOURNAL</p>
          <h1 className="blog-hero__title">記事一覧</h1>
          <p className="blog-hero__lead">
            JET CHEFの活用法や、築地の名店のこだわり。ビジネスシーンを彩るお役立ち情報をお届けします。
          </p>
        </div>
      </header>

      <div className="container">
        <div className="blog-grid">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.06}>
              <ArticleCard article={a} headingLevel="h2" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
