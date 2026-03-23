import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
      Colocamos BrowserRouter no Main por garantia. Se fosse no App, funcionaria agora,
      mas daria erro se você decidisse usar hooks (useNavigate) no App no futuro.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
