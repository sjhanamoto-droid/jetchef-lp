import { useNavigate } from 'react-router-dom'
import { useUI } from '../ui/ui'
import './SideRail.css'

const CartIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 14.26l.04-.12.94-1.7h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 20.04 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/>
  </svg>
)
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm6 5H7v-2h6v2zm4-6H7V6h10v2z"/>
  </svg>
)

export default function SideRail() {
  const { open } = useUI()
  const navigate = useNavigate()

  return (
    <>
      {/* Desktop vertical rail */}
      <div className="side-rail" role="group" aria-label="クイックアクション">
        <button className="side-rail__btn side-rail__btn--order" onClick={() => navigate('/order')}>
          <CartIcon />
          <span className="side-rail__text">今すぐ注文</span>
        </button>
        <button className="side-rail__btn side-rail__btn--contact" onClick={() => open('contact')}>
          <ChatIcon />
          <span className="side-rail__text">お問い合わせ</span>
        </button>
      </div>

      {/* Mobile bottom bar */}
      <div className="mobile-bar" role="group" aria-label="クイックアクション">
        <button className="mobile-bar__btn mobile-bar__btn--order" onClick={() => navigate('/order')}>
          <CartIcon />
          <span>今すぐ注文</span>
        </button>
        <button className="mobile-bar__btn mobile-bar__btn--contact" onClick={() => open('contact')}>
          <ChatIcon />
          <span>お問い合わせ</span>
        </button>
      </div>
    </>
  )
}
