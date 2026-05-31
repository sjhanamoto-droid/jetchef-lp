import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUI } from '../ui/ui'
import { IMG } from '../data/images'
import './Header.css'

const SECTIONS = [
  { label: 'JET CHEFとは', id: 'about' },
  { label: '選ばれる理由', id: 'reasons' },
  { label: '活用シーン', id: 'usecases' },
  { label: '食のバリアフリー', id: 'barrier-free' },
  { label: '商品紹介', id: 'products' },
  { label: 'お問い合わせ', id: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { open } = useUI()
  const location = useLocation()
  const navigate = useNavigate()
  const solid = scrolled || location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goSection = (id: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className={`site-header ${solid ? 'is-solid' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" onClick={() => setMenuOpen(false)} aria-label="JET CHEF ホーム">
          <img src={IMG.logo} alt="JET CHEF" />
        </Link>

        <nav className="site-nav" aria-label="メインナビゲーション">
          {SECTIONS.map((s) => (
            <button key={s.id} className="site-nav__link" onClick={() => goSection(s.id)}>
              {s.label}
            </button>
          ))}
        </nav>

        <button className="site-header__cta" onClick={() => open('order')}>
          ご注文・ご予約
        </button>

        <button
          className={`site-header__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-label="モバイルナビゲーション">
        {SECTIONS.map((s) => (
          <button key={s.id} className="mobile-menu__link" onClick={() => goSection(s.id)}>
            {s.label}
          </button>
        ))}
        <button
          className="mobile-menu__cta"
          onClick={() => {
            setMenuOpen(false)
            open('order')
          }}
        >
          ご注文・ご予約
        </button>
      </nav>
    </header>
  )
}
