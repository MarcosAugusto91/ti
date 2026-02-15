import { Fragment, useState } from 'react'
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
import Fragment2 from './components/Fragment2'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

//Ordem de aprendizagem:
//1 - Imagem em Public - Arquivo App.jsx
//2 - Imagem em Assets - Arquivo App.jsx
//3 - useState: Gerenciamento de estado - Arquivo ManageData.jsx e ManageData2UseState.jsx
//4 - Renderização de listas e objetos - Arquivo ListRender.jsx
//5 - Renderização condicional - Arquivo CondicionalRender.jsx
//6 - Props - Arquivo ShowUserName.jsx
//7 - Destructuring Props - Arquivo CarDetails.jsx
//8 - Reaproveitando Componente - Arquivo CarDetails.jsx
//9 - Loop em array de objetos - Arquivo App.jsx (Array de objetos utilizado em CarDetails.jsx)
//10 - Fragment - Arquivo Fragment2.jsx
//11 - Children - Arquivo Container.jsx
//12 - Executar função por Props(Pelo componente Filho) - Arquivo ExecuteFunction.jsx
//13 - State Lift: Um componente exibe outro altera, o Pai gerencia; - Arquivo App.jsx (Componente Message.jsx e ChangeMessageState.jsx)

function App() {
  const [count, setCount] = useState(0)
  const name = "Marcos Augusto"
  const [userName] = useState("Marcos Augusto de Azevedo")

  {/* Array de objetos utilizado em CarDetails */}
  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", km: 0, novo: true},
    {id: 2, brand: "Ford", color: "Preto", km: 10000, novo: false},
    {id: 3, brand: "Fiat", color: "Cinza", km: 45000, novo: false},
    {id: 4, brand: "Chevrolet", color: "Azul", km: 0, novo: true}
  ]

  {/* Função para ser executada no componente filho: ExecuteFunction */}
  function showMessage() {
    console.log("Evento do componente pai")
  }

  {/* State Lift: Criando estado no componente pai e alterando ele a partir do componente filho */}
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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

        {/* <ManageData: Alterando usando useState/> */}
        <ManageData2UseState />
        <hr />

        {/* Renderização de listas e objetos */}
        <ListRender/>
        <hr />

        {/* Renderização condicional */}
        <CondicionalRender/>
        <hr />

        {/* Utilizando Props */}
        <ShowUserName name={userName}/>
        <hr />
    
        {/* Destructuring Props */}
        <CarDetails brand="Ferrari" km={100000} color="Preto"  novo={false}/>
        <hr />
    
        {/* Reaproveitando Componente */}
        <CarDetails brand="Ford" color="Vermelho" km={0} novo={true}/>
        <CarDetails brand="Fiat" color="Cinza" km={15000} novo={false}/>

        {/* Loop em array de objetos */}
        {<hr></hr>}
        {cars.map((car) => (
          <CarDetails 
            key={car.id} 
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            novo={car.novo}/>
        ))}

        {/* Fragment */}
        <Fragment2 propFragment='teste'/>

        {/* Children: Conseguimos renderizar conteúdo Html pelo componente filho */}
        <Container propValor="Marcos Augusto"> 
          <p>Conteúdo filho do Container</p>
        </Container>

        {/* Executar função por Props(Pelo componente Filho) */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* State Lift: Um componente exibe outro altera, o Pai gerencia; */}
        <Message msg={message} /> {/* Componente que exibe o valor do estado message */}
        <ChangeMessageState changeMessage={handleMessage}/> {/* Componente que altera o valor do estado */}

      </div>      
    </>
  )
}

export default App
