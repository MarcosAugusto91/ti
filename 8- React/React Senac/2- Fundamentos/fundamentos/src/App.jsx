import './App.css'
import FirstComponents from './componentes/FirstComponents'
import TemplateExpressions from './componentes/TemplateExpressions'
import MyComponent from './componentes/MyComponent'
import Events from './componentes/Events'
import Challenge from './componentes/challenge' 

//Ordem de aprendizagem:
//1- First Component
//2- Template Expressions
//3- MyComponent
//4- Events
//5- Challenge

function App() {

  return (
    <>        
      <div className="card">
        {/* Importando os componentes */}
        <MyComponent/> {/* Sendo chamado aqui e no TemplateExpressions */}
        <FirstComponents />   
        <TemplateExpressions />  
        <Events />
        <Challenge />
      </div>
    </>
  )
}

export default App;