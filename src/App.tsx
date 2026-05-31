import { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { useUI } from './ui/ui'
import Header from './components/Header'
import Footer from './components/Footer'
import SideRail from './components/SideRail'
import OrderPanel from './components/OrderPanel'
import ContactPanel from './components/ContactPanel'
import ScrollManager from './lib/ScrollManager'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'

function PanelDeepLink() {
  const [params, setParams] = useSearchParams()
  const { open } = useUI()
  useEffect(() => {
    const p = params.get('panel')
    if (p === 'order' || p === 'contact') {
      open(p)
      // consume the param so the panel can be reopened later and the URL stays clean
      setParams((prev) => {
        prev.delete('panel')
        return prev
      }, { replace: true })
    }
  }, [params, open, setParams])
  return null
}

export default function App() {
  const { panel } = useUI()

  return (
    <>
      <ScrollManager />
      <PanelDeepLink />

      {/* Background content — made inert while a modal panel is open */}
      <div inert={panel ? true : undefined}>
        <a className="skip-link" href="#main">メインコンテンツへスキップ</a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <SideRail />
      </div>

      <OrderPanel />
      <ContactPanel />
    </>
  )
}
