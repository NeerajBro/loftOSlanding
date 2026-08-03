import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TrialSignupProvider } from './context/TrialSignupContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <TrialSignupProvider>
          <App />
        </TrialSignupProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
