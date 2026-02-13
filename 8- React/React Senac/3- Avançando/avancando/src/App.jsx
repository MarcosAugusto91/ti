import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squirtle from './assets/squirtle2.png'
import ManageData from './components/ManageData'
import ManageData2UseState from './components/ManageData2UseState'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const name = "Marcos Augusto"
  const [userName] = useState("Marcos Augusto de Azevedo")

  return (
    <>
      <div>
        <p>Começando Sessão 3</p>
        {/* Imagem em Public */}
        <div>
          <img src="/bulbassauro.png" alt="Pokemon Bulbassauro" />
        </div>
        <div>
          <img src="/chamander.png" alt="Pokemon Chamander" />          
        </div>

        {/* Imagem em Assets */}
        <div>
          <img src={Squirtle} alt="Pokemon Squirtle" />  
        </div>

       {/* <ManageData /> */}
       <ManageData2UseState />
       <hr />
       <ListRender/>
       <hr />
       <CondicionalRender/>
       <hr />

       {/* Props */}
       <ShowUserName name={userName}/>
       <hr />
       {/* Destructuring */}
       <CarDetails brand="Ferrari" km={100000} color="Preto"  novo={false}/>
       <hr />
       {/* Reaproveitando */}
        <CarDetails brand="Ford" color="Vermelho" km={0} novo={true}/>
        <CarDetails brand="Fiat" color="Cinza" km={15000} novo={false}/>

      </div>      
    </>
  )
}

export default App
