// import './App.css' Comentado para evitar conflito com o CSS base
import Home from './pages/Home'
import Sobre from './pages/Sobre'
// Importando os componentes Home e Sobre

import './assets/css/base/base.css'
//Importando o CSS base

function App() {
  return (
    <>
      <Home />
      {/* <hr></hr> */}
      <Sobre />
    </>
  )
}

export default App
