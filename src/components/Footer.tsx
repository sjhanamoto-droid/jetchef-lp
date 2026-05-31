import { useNavigate, useLocation } from 'react-router-dom'
import { useUI } from '../ui/ui'
import { IMG } from '../data/images'
import { CONTACT, STORE } from '../data/contact'
import './Footer.css'

const SECTIONS = [
  { label: 'JET CHEFとは', id: 'about' },
  { label: '選ばれる理由', id: 'reasons' },
  { label: '活用シーン', id: 'usecases' },
  { label: '食のバリアフリー', id: 'barrier-free' },
  { label: '商品紹介', id: 'products' },
  { label: '実績・特許', id: 'achievements' },
  { label: '記事一覧', id: 'journal' },
  { label: 'お問い合わせ', id: 'contact' },
]

export default function Footer() {
  const { open } = useUI()
  const navigate = useNavigate()
  const location = useLocation()

  const goSection = (id: string) => {
    if (location.pathname === '/') document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    else navigate('/', { state: { scrollTo: id } })
  }

  return (
    <footer className="footer">
      <img className="footer__bg" src={IMG.footerBg} alt="" />
      <div className="footer__overlay" />

      <div className="footer__inner container">
        <div className="footer__brand">
          <img className="footer__logo" src={IMG.logo} alt="JET CHEF" />
          <p className="footer__tagline">〜お弁当大革命！会議室がレストランに〜</p>
          <p className="footer__brandnote">ポータブルレストラン JET CHEF</p>
          <div className="footer__cta-row">
            <button className="btn btn--primary" onClick={() => open('order')}>ご注文・ご予約</button>
            <button className="footer__ghost" onClick={() => open('contact')}>お問い合わせ</button>
          </div>
        </div>

        <nav className="footer__col" aria-label="サイトメニュー">
          <h3 className="footer__h">メニュー</h3>
          {SECTIONS.map((s) => (
            <button key={s.id} className="footer__link" onClick={() => goSection(s.id)}>{s.label}</button>
          ))}
        </nav>

        <div className="footer__col">
          <h3 className="footer__h">店舗情報</h3>
          <p className="footer__info">店舗名：{STORE.name}</p>
          <p className="footer__info">住所：{STORE.postal} {STORE.address}</p>
          <p className="footer__info">
            電話：<a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
          <p className="footer__info footer__info--muted">{CONTACT.phoneHours}</p>
        </div>
      </div>

      <div className="footer__bar container">
        <span>© {new Date().getFullYear()} JET CHEF. All Rights Reserved.</span>
        <span className="footer__bar-brand">築地うなぎ食堂 × 築地焼肉苑</span>
      </div>
    </footer>
  )
}
