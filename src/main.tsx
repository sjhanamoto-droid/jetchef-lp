import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './styles/global.css'
import App from './App'
import { UIProvider } from './ui/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <UIProvider>
          <App />
        </UIProvider>
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
