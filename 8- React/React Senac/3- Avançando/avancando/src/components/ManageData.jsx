import { useState } from "react";

const ManageData = () => {
let someData = 10;

const [number, setNumber] = useState(someData);

  return (
    <>

        {/* Quando mudamos o valor da variável não atualiza o valor */}
        <div>
            <p>Valor {someData}</p>
            <button onClick={() => (someData = 15)}>Mudando a Variável para 15: Não atualiza</button>
            <p>Valor: {someData}</p>
            
            <br></br>
            <hr></hr>
            <br></br>
        </div>

        {/* Quando mudamos o state o valor é atualizado na tela */}
        <div>
            <p>Valor {number}</p>
            <button onClick={() => setNumber(25)}>Mudando o State para 25: Tela atualiza</button>
            <p>Valor: {number}</p>
        </div>
    </>
  )
}

export default ManageData