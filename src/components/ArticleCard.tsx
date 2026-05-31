import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'
import './ArticleCard.css'

const fmtDate = (iso: string) => iso.replace(/-/g, '.')

interface ArticleCardProps {
  article: Article
  /** heading element for the card title (keep document outline correct) */
  headingLevel?: 'h2' | 'h3'
}

export default function ArticleCard({ article, headingLevel: H = 'h3' }: ArticleCardProps) {
  return (
    <Link to={`/blog/${article.slug}`} className="blog-card">
      <div className="blog-card__media">
        <img src={article.cover} alt="" loading="lazy" />
        <span className="blog-card__cat">{article.category}</span>
      </div>
      <div className="blog-card__body">
        <time className="blog-card__date">{fmtDate(article.date)}</time>
        <H className="blog-card__title">{article.title}</H>
        <p className="blog-card__excerpt">{article.excerpt}</p>
        <span className="blog-card__more">続きを読む<i>→</i></span>
      </div>
    </Link>
  )
}
