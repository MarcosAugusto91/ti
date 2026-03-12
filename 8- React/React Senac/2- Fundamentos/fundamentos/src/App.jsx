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
      <div className="card">
        {/* Importando os componentes */}
        <MyComponent/>
        <FirstComponents />   
        <TemplateExpressions />  
        <Events />
        <Challenge />

      </div>
    </>
  )
}

export default App;