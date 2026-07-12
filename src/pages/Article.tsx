import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { getArticle, ARTICLES, type Block } from '../data/articles'
import './Article.css'

const fmt = (iso: string) => iso.replace(/-/g, '.')

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'h2':
      return <h2 key={i} className="article__h2">{b.text}</h2>
    case 'p':
      return <p key={i} className="article__p">{b.text}</p>
    case 'quote':
      return <blockquote key={i} className="article__quote">{b.text}</blockquote>
    case 'list':
      return (
        <ul key={i} className="article__list">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      )
    case 'img':
      return (
        <figure key={i} className="article__figure">
          <img src={b.src} alt={b.alt} loading="lazy" />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )
  }
}

export default function Article() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = slug ? getArticle(slug) : undefined

  if (!article) return <Navigate to="/blog" replace />

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <article className="article">
      <header className="article__hero">
        <img className="article__hero-img" src={article.cover} alt="" />
        <div className="article__hero-scrim" />
        <div className="container article__hero-inner">
          <Link to="/blog" className="article__back">← 記事一覧へ</Link>
          <span className="article__cat">{article.category}</span>
          <h1 className="article__title">{article.title}</h1>
          <div className="article__meta">
            <time>{fmt(article.date)}</time>
            <span className="article__dot" />
            <span>約{article.readMinutes}分で読めます</span>
          </div>
        </div>
      </header>

      <div className="container article__layout">
        <div className="article__body">
          {article.body.map(renderBlock)}

          <div className="article__cta">
            <h3>JET CHEFを注文する</h3>
            <p>会議・セミナー・接待に。電子レンジ不要で、出来立ての美味しさをお届けします。</p>
            <button className="btn btn--primary" onClick={() => navigate('/order')}>
              ご注文・ご予約はこちら
            </button>
          </div>
        </div>
      </div>

      <section className="container article__related">
        <h2 className="section-title">ほかの記事を読む</h2>
        <div className="article__related-grid">
          {related.map((r) => (
            <Link key={r.slug} to={`/blog/${r.slug}`} className="article__rel-card">
              <div className="article__rel-media"><img src={r.cover} alt="" loading="lazy" /></div>
              <div className="article__rel-body">
                <time>{fmt(r.date)}</time>
                <h3>{r.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
