import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Imagem from './components/Imagem.jsx'

function App() {
  return (
    <>
    <h2>Imagem usando CSS Module</h2>
     <Imagem/>
     <hr></hr>
     <h2>Imagem usando CSS App</h2>
     <img className='Imagem' src={heroImg} alt="imagem" />
    </>
  )
}

export default App
