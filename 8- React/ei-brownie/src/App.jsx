import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cabecalho from './components/Header/Cabecalho'
import Main from './components/Main/Main'
import Rodape from './components/Footer/Rodape'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Main />  
      <Rodape />
    </>
  )
}

export default App