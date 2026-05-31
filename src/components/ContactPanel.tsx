import { motion } from 'framer-motion'
import { useUI } from '../ui/ui'
import PanelShell from './PanelShell'
import { CONTACT } from '../data/contact'
import './ContactPanel.css'

const cardIn = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
})

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8z" fill="currentColor"/>
  </svg>
)
const LineIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <path d="M12 3C6.9 3 2.75 6.4 2.75 10.6c0 3.77 3.3 6.93 7.76 7.53.3.06.71.2.82.46.1.24.06.6.03.85l-.13.79c-.04.24-.18.93.82.5 1-.42 5.4-3.18 7.36-5.44 1.36-1.49 2-3 2-4.69C23.25 6.4 19.1 3 12 3z" fill="currentColor"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11z" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export default function ContactPanel() {
  const { panel, close } = useUI()

  return (
    <PanelShell
      open={panel === 'contact'}
      onClose={close}
      title="お問い合わせ"
      subtitle="ご注文・ご相談など、お好きな方法でお気軽にご連絡ください。"
    >
      <div className="contact-cards">
        {/* 電話 */}
        <motion.a className="contact-card" href={CONTACT.phoneHref} {...cardIn(0)}>
          <span className="contact-card__icon contact-card__icon--red"><PhoneIcon /></span>
          <span className="contact-card__body">
            <span className="contact-card__label">電話でのお問い合わせ</span>
            <span className="contact-card__value">{CONTACT.phone}</span>
            <span className="contact-card__meta">{CONTACT.phoneHours}</span>
          </span>
          <span className="contact-card__arrow" aria-hidden="true">→</span>
        </motion.a>

        {/* LINE */}
        <motion.a
          className="contact-card"
          href={CONTACT.line}
          target="_blank"
          rel="noopener noreferrer"
          {...cardIn(1)}
        >
          <span className="contact-card__icon contact-card__icon--line"><LineIcon /></span>
          <span className="contact-card__body">
            <span className="contact-card__label">LINEでのお問い合わせ</span>
            <span className="contact-card__value">{CONTACT.lineLabel}</span>
            <span className="contact-card__meta">トークでスピーディにご相談いただけます</span>
          </span>
          <span className="contact-card__arrow" aria-hidden="true">→</span>
        </motion.a>

        {/* メール */}
        <motion.a
          className="contact-card"
          href={CONTACT.email}
          target="_blank"
          rel="noopener noreferrer"
          {...cardIn(2)}
        >
          <span className="contact-card__icon contact-card__icon--gold"><MailIcon /></span>
          <span className="contact-card__body">
            <span className="contact-card__label">メールでのお問い合わせ</span>
            <span className="contact-card__value">{CONTACT.emailLabel}</span>
            <span className="contact-card__meta">24時間受付・お問い合わせフォームへ</span>
          </span>
          <span className="contact-card__arrow" aria-hidden="true">→</span>
        </motion.a>
      </div>

      <p className="panel-note">
        ※お電話は受付時間内にご連絡ください。フォーム・LINEでのお問い合わせには順次ご返信いたします。
      </p>
    </PanelShell>
  )
}
