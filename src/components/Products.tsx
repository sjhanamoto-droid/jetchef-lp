import { useNavigate } from 'react-router-dom'
import Reveal from '../lib/Reveal'
import { useUI } from '../ui/ui'
import { IMG } from '../data/images'
import { UNAGI_PRODUCTS, YAKINIKU_PRODUCTS, type Product } from '../data/products'
import './Products.css'

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <Reveal delay={i * 0.06} y={28}>
      <article className="product-card">
        <div className="product-card__media">
          <img src={p.image} alt={p.name} loading="lazy" />
        </div>
        <div className="product-card__body">
          <h4 className="product-card__name">
            {p.prefix && <span className="product-card__prefix">{p.prefix}</span>}
            <span className="product-card__main">{p.name}</span>
            {p.rank && <span className="product-card__rank">{p.rank}</span>}
            {p.suffix && <span className="product-card__suffix">{p.suffix}</span>}
          </h4>
          <p className="product-card__price">
            <span className="product-card__amount">{p.price}</span>
            <span className="product-card__yen">円</span>
            <span className="product-card__tax">(税込)</span>
          </p>
          <p className="product-card__desc">{p.desc}</p>
        </div>
      </article>
    </Reveal>
  )
}

export default function Products() {
  const { open } = useUI()
  const navigate = useNavigate()

  return (
    <section id="products" className="products section">
      <div className="container">
        <Reveal className="products__head">
          <p className="kicker">PRODUCTS</p>
          <h2 className="section-title">
            冷めても美味しい弁当ではなく、<br />
            <span className="accent">食べる直前に温める弁当へ。</span>
          </h2>
        </Reveal>
      </div>

      {/* 築地うなぎ食堂 */}
      <div className="container">
        <div className="restaurant">
          <Reveal className="restaurant__head">
            <div className="restaurant__logo"><img src={IMG.unagiLogo} alt="築地うなぎ食堂" /></div>
            <div className="restaurant__intro">
              <span className="restaurant__tag">築地場外市場のうなぎ専門店</span>
              <h3 className="restaurant__name">築地うなぎ食堂</h3>
              <p className="restaurant__desc">
                養殖期間1年未満の青手の新仔うなぎ（ニホンウナギ）のみを使用。蒸気調理で、ふっくら仕上がる本格うなぎ弁当。
              </p>
              <button className="restaurant__btn" onClick={() => navigate('/order')}>
                法人向けに注文する<i>→</i>
              </button>
            </div>
          </Reveal>
          <div className="products__grid">
            {UNAGI_PRODUCTS.map((p, i) => <ProductCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </div>

      {/* 築地焼肉苑 */}
      <div className="container">
        <div className="restaurant restaurant--next">
          <Reveal className="restaurant__head restaurant__head--reverse">
            <div className="restaurant__logo"><img src={IMG.yakinikuLogo} alt="築地焼肉苑" /></div>
            <div className="restaurant__intro">
              <span className="restaurant__tag">和牛×JET CHEFでまるで焼きたて！</span>
              <h3 className="restaurant__name">築地焼肉苑</h3>
              <p className="restaurant__desc">
                冷めても美味しいから、いつでも熱々な焼肉弁当へ。最後の一口まで出来立てホヤホヤの和牛焼肉弁当をお届けします。
              </p>
              <button className="restaurant__btn" onClick={() => navigate('/order')}>
                法人向けに注文する<i>→</i>
              </button>
            </div>
          </Reveal>
          <div className="products__grid">
            {YAKINIKU_PRODUCTS.map((p, i) => <ProductCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </div>

      {/* 高齢者施設・介護施設向け */}
      <div className="container">
        <Reveal className="care-card" y={28}>
          <span className="care-card__badge">導入相談受付中</span>
          <h3 className="care-card__title">高齢者施設・介護施設向け JET CHEF弁当</h3>
          <p className="care-card__desc">
            外食が難しい方にも、食べる直前に温かく香り立つ食事を。施設の食事提供にあわせたご提案を承ります。
            （商品確定前のため、まずはお気軽にご相談ください。）
          </p>
          <button className="care-card__btn" onClick={() => open('contact')}>
            導入を相談する<i>→</i>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
