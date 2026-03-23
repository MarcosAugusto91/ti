import './App.css'
import Cabecalho from './components/Header/Cabecalho'
import Rodape from './components/Footer/Rodape'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contato from './Pages/Contato/Contato'

function App() {

  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </>
  )
}

export default App