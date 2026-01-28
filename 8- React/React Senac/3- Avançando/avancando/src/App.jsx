import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squirtle from './assets/squirtle2.png'
import ManageData from './components/ManageData'
import ManageData2UseState from './components/ManageData2UseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Começando Sessão 3</p>
        {/* Imagem em Public */}
        <div>
          <img src="/bulbassauro.png" alt="Pokemon Bulbassauro" />
        </div>
        <div>
          <img src="/chamander.png" alt="Pokemon Chamander" />          
        </div>

        {/* Imagem em Assets */}
        <div>
          <img src={Squirtle} alt="Pokemon Squirtle" />  
        </div>

       {/* <ManageData /> */}
       <ManageData2UseState />
       
      </div>      
    </>
  )
}

export default App
