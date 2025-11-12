import './assets/css/base/base.css';
import './assets/css/post.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/Pagina404';
import Cabecalho from './components/cabecalho';
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import CategoriaPosts from './pages/CategoriaPosts';
import SubCategoria from './pages/SubCategorias';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />

        {/* 
          Esta é a rota pai. Ela renderiza o <Categoria />
        */}
        <Route path='/categoria/:id' element={<Categoria />}>

          {/* Esta é a rota "filho" de índice (index).
              Ela é renderizada dentro do <Outlet> quando a URL
              é exatamente /categoria/:id 
            */}
          <Route index element={<CategoriaPosts />} />

          {/* Esta é a rota "filho" da subcategoria.
              Ela é renderizada dentro do <Outlet> quando a URL
              é /categoria/:id/:subcategoria 
            */}
          <Route path=':subcategoria' element={<SubCategoria />} />

        </Route>

        <Route path='/sobre' element={<Sobre />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>
  )
}

export default App;