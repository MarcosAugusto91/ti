import './App.css'
// COMO UTILIZAR O JSON SERVER A TRAZER DADOS DE UMA API:
// 1- npm install json-server@0.17.0
// 2- Criar o arquivo db.json com os dados que vamos utilizar posteriormente
// 3- Dentro do arquivo package.json adionar dentro de scripts os seguintes comandos: 
  //"scripts": {
  //"dev": "vite",
  //"build": "vite build",
  //"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  //"preview": "vite preview",
  //"server": "json-server --watch db.json"
  //},
// 4- Executar o comando: npm run server
// 5- Agora você poderá acessar aos produtos em http://localhost:3000/produtos 

// UTILIZANDO ROUTERS:
//0- npm install react-router-dom

//1- config react routers
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Cabecalho from './components/Cabecalho'

//4- Não esqueça de importar os componentes / páginas que foram utilizados no BrowserRouter >> Routes >> Route
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        
        {/* 5- Criando botões que redirecionam por meio do Link */}
        <nav style={{display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', backgroundColor: '#f0f0f0'}}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
        </nav>

        {/*   
        2- Criando as rotas de acordo com a Url da Página 
        3- Após colocar os caminhos e posicionar as pages crie uma pasta pages e crie os componentes lá dentro com seus css;
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
