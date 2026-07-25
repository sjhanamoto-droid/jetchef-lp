import { motion } from 'framer-motion'
import { IMG } from '../data/images'
import { CONTACT } from '../data/contact'
import { PERSONAL_ORDERS, CORPORATE_ORDERS, CORPORATE_NOTE } from '../data/orders'
import type { PersonalOrder } from '../data/orders'
import '../components/OrderPanel.css'
import './Order.css'

/* Full-page version of the「ご注文・ご予約」side panel (components/OrderPanel.tsx).
   Same content and visual language; the side panel is kept as-is. */

const rowIn = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
})

const OrderLink = ({ order, index }: { order: PersonalOrder; index: number }) => (
  <motion.a
    className="order-link"
    href={order.url}
    target="_blank"
    rel="noopener noreferrer"
    {...rowIn(index)}
  >
    <span className="order-link__text">
      <span className="order-link__label">{order.label}</span>
      <span className="order-link__sub">{order.sub}</span>
    </span>
    <span className="order-link__arrow" aria-hidden="true">→</span>
  </motion.a>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8z" fill="currentColor"/>
  </svg>
)

export default function Order() {
  const onlineOrder = PERSONAL_ORDERS.find((o) => o.label.includes('通販'))
  const localOrders = PERSONAL_ORDERS.filter((o) => o !== onlineOrder)

  return (
    <div className="order-page">
      <div className="order-page__body">
        <div className="order-page__inner">
          {/* 個人のお客様 */}
          <section className="panel-section">
            <img className="panel-banner" src={IMG.bannerPersonal} alt="個人様注文はこちら" />
            <div className="order-links">
              {localOrders.map((o, i) => (
                <OrderLink key={o.url} order={o} index={i} />
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

          {/* オンライン通販でお取り寄せ */}
          {onlineOrder && (
            <section className="panel-section">
              <motion.a
                className="order-featured"
                href={onlineOrder.url}
                target="_blank"
                rel="noopener noreferrer"
                {...rowIn(0)}
              >
                <span className="order-featured__text">
                  <span className="order-featured__badge">全国配送</span>
                  <span className="order-featured__label">{onlineOrder.label}</span>
                  <span className="order-featured__sub">{onlineOrder.sub}</span>
                </span>
                <span className="order-featured__arrow" aria-hidden="true">→</span>
              </motion.a>
            </section>
          )}

          {/* お電話からのご予約 */}
          <motion.a className="order-phone" href={CONTACT.phoneHref} {...rowIn(0)}>
            <span className="order-phone__icon" aria-hidden="true"><PhoneIcon /></span>
            <span className="order-phone__body">
              <span className="order-phone__label">お電話からのご予約はこちら</span>
              <span className="order-phone__value">{CONTACT.phone}</span>
              <span className="order-phone__meta">{CONTACT.phoneHours}</span>
            </span>
            <span className="order-phone__arrow" aria-hidden="true">→</span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}
