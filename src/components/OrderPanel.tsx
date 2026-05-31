import { motion } from 'framer-motion'
import { useUI } from '../ui/ui'
import PanelShell from './PanelShell'
import { IMG } from '../data/images'
import { PERSONAL_ORDERS, CORPORATE_ORDERS, CORPORATE_NOTE } from '../data/orders'
import './OrderPanel.css'

const rowIn = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
})

export default function OrderPanel() {
  const { panel, close } = useUI()

  return (
    <PanelShell
      open={panel === 'order'}
      onClose={close}
      title="ご注文・ご予約"
      subtitle="個人のお客様・法人のお客様、それぞれの専用予約ページへご案内します。"
    >
      {/* 個人のお客様 */}
      <section className="panel-section">
        <img className="panel-banner" src={IMG.bannerPersonal} alt="個人様予約はこちら" />
        <div className="order-links">
          {PERSONAL_ORDERS.map((o, i) => (
            <motion.a
              key={o.url}
              className="order-link"
              href={o.url}
              target="_blank"
              rel="noopener noreferrer"
              {...rowIn(i)}
            >
              <span className="order-link__text">
                <span className="order-link__label">{o.label}</span>
                <span className="order-link__sub">{o.sub}</span>
              </span>
              <span className="order-link__arrow" aria-hidden="true">→</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 法人のお客様 */}
      <section className="panel-section">
        <img className="panel-banner" src={IMG.bannerCorporate} alt="法人様予約はこちら" />
        <p className="order-region-label">配達エリアをお選びください</p>
        <div className="order-regions">
          {CORPORATE_ORDERS.map((c, i) => (
            <motion.a
              key={c.url}
              className="order-region"
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              {...rowIn(i)}
            >
              <img src={c.image} alt="" loading="lazy" />
              <span className="order-region__overlay" />
              <span className="order-region__name">{c.region}</span>
              <span className="order-region__go">法人予約 →</span>
            </motion.a>
          ))}
        </div>
        <p className="panel-note">{CORPORATE_NOTE}</p>
      </section>
    </PanelShell>
  )
}
