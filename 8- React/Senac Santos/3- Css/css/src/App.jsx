import { useState } from 'react'
import './App.css'
import Exemplo from './components/Exemplo.jsx'
import ExemploSemCss from './components/ExemploSemCss'

function App() {
  const [count, setCount] = useState(0)
  
  //CSS Global: index.css (Vermelho)
  //CSS Local: App.css (Mais forte que o global) (Azul)
  //CSS Local: Exemplo.Css se não criarmos ele acaba pegando o local do App.css ou o Global.css (Verde) Cuidado pois este pode acabar vazando para outros;
  //CSS Module: Exemplo.module.css (Tem que ser importado no seu componente como um objeto e usar className={estilos.nomeDaClasse}) evita vazar para outros componentes, SOMENTE em Classes ou Id's, para Seletores genéricos como um parágrafo ainda vai continuar vazando.

  let autor = 'Marcos'

  return (
    <>
      <h1>TESTE</h1>
      
      {/* Exemplo sem Css pegando o CSS Exemplo.css erroneamente porque quando colocamos uma configuração global em algum css componente ele aplica em todos, temos que usar o CSS Module e className.
      Ex: Exemplo.module.css + Exemplo.jsx (parte comentada) */}
      <ExemploSemCss />

      {/* CSS Local App.css ou CSS Global Index.css */}
      <h1>Formatação Local / Global</h1>

      {/* CSS Local Exemplo.css */}
      <Exemplo />

      {/* Formatação com classe do App.css*/}
      <h1 className='titulo'>Formatação com Classe</h1>

      {/*Formatação com ID do App.css*/}
      <h1 id='meuid'>Formatação com ID</h1>

      {/* -------------------------------------------------- */}
      
      {/* CSS Inline */}
        <p style={{ color: 'blue', borderTop: '2px solid blue', display: 'inline-block' }}>Formatação com CSS Inline</p>

      {/* CSS Inline Dinâmico */}
        <p style={{ color: autor === 'Marcos' ? 'orange' : 'blue' }}>Formatação com CSS Inline Dinâmico</p>

        <p style={{ 
                    color: autor === 'Marcos' ? 'orange' : 'blue',          
          backgroundColor: autor === 'Marcos' ? 'lightblue' : 'lightgray' }}>Formatação com CSS Inline Dinâmico 2</p>

      {/* Classes Dinâmicas */}
        <h1 className={autor === 'Marcos' ? 'marcos' : 'titulo'}>Formatação com Classe Dinâmica</h1>


      {/* Utilizando Classe de mesmo nome com Module */}
        <h1 className='titulo'>Classe de mesmo nome com Module "Trouxe do App"</h1>
    </>
  )
}

export default App