import { useNavigate } from 'react-router-dom'
import Reveal from '../lib/Reveal'
import { useUI } from '../ui/ui'
import { CONTACT } from '../data/contact'
import './ContactSection.css'

export default function ContactSection() {
  const { open } = useUI()
  const navigate = useNavigate()

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <Reveal className="contact__head">
          <p className="kicker contact__kicker">CONTACT</p>
          <h2 className="contact__title">
            法人向けJET CHEF弁当の<br />ご相談はこちら
          </h2>
          <p className="contact__lead">
            会議・研修・接待・イベント・高齢者施設など、用途に応じたJET CHEF弁当のご相談を承ります。
            数量、納品場所、ご予算、利用シーンにあわせてご提案いたします。
          </p>
        </Reveal>

        <Reveal className="contact__actions" delay={0.1}>
          <button className="btn btn--primary" onClick={() => navigate('/order')}>
            会議弁当を注文・相談する
          </button>
          <button className="contact__btn" onClick={() => open('contact')}>
            高齢者施設向け導入を相談する
          </button>
          <button className="contact__btn" onClick={() => open('contact')}>
            法人利用について相談する
          </button>
        </Reveal>

        <Reveal className="contact__direct" delay={0.18}>
          <a className="contact__phone" href={CONTACT.phoneHref}>
            <span className="contact__phone-label">お電話でのご相談</span>
            <span className="contact__phone-num">{CONTACT.phone}</span>
          </a>
          <span className="contact__hours">{CONTACT.phoneHours}</span>
        </Reveal>
      </div>
    </section>
  )
}
