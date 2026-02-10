import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Шлях до статики (важливо для GitHub Pages, де сайт у підшляху)
const base = import.meta.env.BASE_URL
document.documentElement.style.setProperty('--bg-url', `url("${base}static/background.jpg")`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
