import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' Necessário comentar para evitar conflito com o CSS base
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
