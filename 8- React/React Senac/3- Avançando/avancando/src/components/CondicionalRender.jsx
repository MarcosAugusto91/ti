import { useState } from 'react';

const CondicionalRender = () => {
const [x] = useState(false);
const [name, setName] = useState("Marcos");

  return (   
    <div>
        <h2>Renderizando Condicionalmente</h2>

        <h3>Isso será exibido?</h3>
        {/* Condicional simples */}
        {x && <p>Se x for true, Sim!</p>}
        {!x && <p>Se x for false, Sim!</p>}

        {/* Operadores Ternários */}
        {x ? <p>Se x for true, Sim!</p> : <p>Se x for false, Sim!</p>}
        {name === "Marcos" ? (<p>Olá, Marcos!</p>) : (<p>Olá, João!</p>)}
        <button onClick={() => setName("João")}>Mudar nome</button>
    </div>
)
}

export default CondicionalRender
