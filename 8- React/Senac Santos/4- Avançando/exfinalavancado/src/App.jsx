import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  const funcionarios = [
    { id: 1, nome: 'Marcos', cargo: 'Professor', idade: 34, salario: 6500 },
    { id: 2, nome: 'Joyci', cargo: 'Confeiteira', idade: 29, salario: 4500 },
    { id: 4, nome: 'Tobias', cargo: 'Estagiário', idade: 17, salario: 1500 },
  ]

  return (
    <>
      <UserDetails funcionarios={funcionarios} />
    </>
  )
}

export default App
