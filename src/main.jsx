import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Шлях до статики (важливо для GitHub Pages, де сайт у підшляху)
const base = import.meta.env.BASE_URL
document.documentElement.style.setProperty('--bg-url', `url("${base}static/background.jpg")`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
