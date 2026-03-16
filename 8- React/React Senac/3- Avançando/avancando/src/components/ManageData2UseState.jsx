import { useState } from "react";


const ManageData2UseState = () => {
    let nome = "Marcos";
    const [name, setName] = useState("Lucas");

  return (
    <div>
        <h2>Gerenciando Dados com useState: ManageData2</h2>
        <button onClick={() => (nome = "Maria")}>Forma errada</button>
        <p>Nome: {nome}</p>

        {/* USANDO USESTATE */}
        <button onClick={() => setName("Maria")}>Forma correta</button>
        <p>Nome: {name}</p>
    </div>
  )
}

export default ManageData2UseState