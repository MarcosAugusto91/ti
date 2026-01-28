import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponents from './componentes/FirstComponents'
import TemplateExpressions from './componentes/TemplateExpressions'
import MyComponent from './componentes/MyComponent'
import Events from './componentes/Events'
import Challenge from './componentes/challenge' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {/* Importando os componentes */}
        <MyComponent/>
        <FirstComponents />   
        <TemplateExpressions />  
        <Events />
        <Challenge />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;