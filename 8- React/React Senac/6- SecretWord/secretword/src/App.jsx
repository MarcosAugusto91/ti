import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1-Primeira parte limpar os arquivos index.css e app.css, retirar oque vem em App.jsx e adicionar o arquivo word na pasta DATA dentro da pasta src;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Secret Word</h2>
      </div>
    </>
  )
}

export default App
