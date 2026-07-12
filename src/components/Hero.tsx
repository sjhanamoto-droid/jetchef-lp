import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useUI } from '../ui/ui'
import { IMG } from '../data/images'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1] as const
const BADGES = ['特許取得済', '法人対応', '累計100万個以上', 'Uber Eats 総合評価1位店']

export default function Hero() {
  const { open } = useUI()
  const navigate = useNavigate()

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <img className="hero__poster" src={IMG.heroPoster} alt="" />
        <iframe
          className="hero__video"
          src="https://www.youtube.com/embed/7fK2NotfTcg?autoplay=1&mute=1&loop=1&playlist=7fK2NotfTcg&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&fs=0"
          title="JET CHEF 背景動画"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner container">
        <motion.p
          className="hero__kicker"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          食べることは、生きること。
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          会議室が、<br />
          <span className="hero__title-accent">そのままレストランに。</span>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
        >
          紐を引くだけで、どこでも温かいレストラン品質のお弁当。
          法人会議・研修・接待・高齢者施設に“温かい食事体験”を届けます。
        </motion.p>

        <motion.p
          className="hero__note"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
        >
          築地うなぎ食堂が開発した、特許取得済みの“温まるお弁当”技術です。
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease }}
        >
          <button className="btn btn--primary" onClick={() => navigate('/order')}>
            法人向けJET CHEF弁当を注文する
          </button>
          <button className="hero__btn-outline" onClick={() => open('contact')}>
            法人利用を相談する
          </button>
        </motion.div>

        <motion.ul
          className="hero__badges"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease }}
        >
          {BADGES.map((b) => (
            <li key={b} className="hero__badge">{b}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
