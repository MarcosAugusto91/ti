import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  
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
