import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Forms</h2>

                      {/* Passando os valores para os inputs (6) */}
        <MyForm user={{name:'Marcos Augusto', email: 'marcos@senac.com.br'}} />

      </div>
    </>
  )
}

export default App
