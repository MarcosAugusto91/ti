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

      {/* ESTADO VS VALOR: 
      O useState gerencia um valor que persiste entre as renderizações. A razão de usarmos const é que, no React, toda vez que o estado muda, a função do componente é executada novamente do zero. 
        
      Na Renderização 1: O React executa ManageData2UseState, o useState retorna "Lucas". Você tem uma constante name que vale "Lucas".
      Você chama setName("Maria"). O React agenda uma nova renderização.
      Na Renderização 2: O React executa a função novamente. Agora, o useState "lembra" que o novo valor é "Maria" e o retorna. Você tem uma nova constante name (em um novo escopo de função) que vale "Maria".

      Portanto, você usa const porque o valor de name nunca muda dentro daquela execução específica da função. Ele é imutável para aquela "fotografia" do componente.

      RENDERIZAÇÃO INDIVIDUAL VS COMPONENTE TODO:
      No código (Lógica): O React executa a função do componente inteira novamente. Se o seu componente tem 100 linhas, as 100 linhas são lidas de novo.
      No Navegador (DOM): O React é inteligente. Ele usa algo chamado Virtual DOM. Ele compara o que a função retornou antes com o que ela retornou agora e só altera no HTML do navegador o que realmente mudou. 

        */}
    </div>
  );
};

export default ManageData2UseState;
