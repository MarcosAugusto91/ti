import { useState, useCallback, useEffect } from 'react';
import './App.css';
import { wordsList } from "./data/word"; 
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

// Criando o projeto:
// 1-Primeira parte limpar os arquivos index.css e app.css, retirar oque vem em App.jsx e adicionar o arquivo word na pasta DATA dentro da pasta src;

// Ajustes Gerais:
// 2-Arrumar os arquivos App.css e Index.css para centralizar o conteúdo da tela e colocar um fundo para a tela, o fundo pode ser uma cor ou uma imagem, fica a seu critério;

//Finalizando tela inicial do jogo:
// 3- Criar um componente StartScreen.jsx dentro da pasta components, esse componente deve conter um título, uma descrição e um botão para iniciar o jogo, o estilo do componente fica a seu critério, mas ele deve ser centralizado na tela; Com isso temos a página inicial do jogo pronta, agora vamos para a parte de lógica do jogo;

// Criando componentes do projeto:
/* 4- Importar useCallback, useEffect e wordslist;
Criar os estágios: start, game e end;
Criar os components Game e GameOver com seus Css's
Chamar o wordsList para um array e exibi-lo no console */

//Alternando estágios do jogo:
/* 5- Criamos a função startGame para mudar o estágio do jogo para "game" e passamos ela como props para o componente StartScreen, para que quando o botão de iniciar o jogo for clicado, a função seja chamada e o estágio do jogo seja alterado para "game", assim exibindo o componente Game na tela. Além dela a função verifyLetter para mudar para end e a função retry para mudar para start.
*/

//Escolhendo palavra e categoria aleatória do jogo:
/* 6- Criamos as variáveis picketWord, pickedCategory e letters 
para armazenar a palavra escolhida, a categoria escolhida e as letras escolhidas pelo usuário, respectivamente. Criamos a função pickyWordAndCategory para escolher uma palavra e uma categoria aleatória do array de palavras, e exibimos a categoria escolhida no console para verificar se está funcionando corretamente. E depois mudamos a função startGame para chamar a função pickyWordAndCategory e preencher as variáveis picketWord, pickedCategory e letters com as informações da palavra escolhida. E exibimos a palavra escolhida, a categoria escolhida e as letras escolhidas no console para verificar se está funcionando corretamente.
*/

//Estruturando componentes Game:
/* 7- Adicionamos os campos no componente Game; */

//Css da tela jogo
/* 8- Ajustando o Layout do componente Game */

//Consumindo state do jogo:
/* 9- */

//Evento de inserção de letra:
/* 10- */

//Processando Letras válidas e inválidas:
/* 11- */

//Lógica para o fim do jogo:
/* 12- */

//Finalizando tela do fim do jogo:
/* 13- */

//Condição de vitória do jogo:
/* 14- */

//Conclusão do projeto:
/* 15- */

const stages = [ 
  {id: 1, name:"start"},
  {id: 2, name:"game" },
  {id: 3, name: "end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPicketWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  //Função para escolher uma palavra e uma categoria aleatória do array de palavras
  const pickyWordAndCategory = () => {
    const categories = Object.keys(words); //Pega as categorias do objeto words
    
    const category = 
    categories[Math.floor(Math.random() * categories.length)]; //Pega uma categoria aleatória

    const word = 
    words[category][Math.floor(Math.random() * words[category].length)]; 
    //Pega uma palavra aleatória da categoria escolhida  

    return {word, category};
  }

  //Função para iniciar o jogo, ela muda o estágio do jogo para "game"
  const startGame = () => {
    //pick word and pick category
     const {word, category} = pickyWordAndCategory();
     console.log(category, word);

     //create an array of letters = Ele quebra a palavra em letras, por exemplo: "carro" vira ["c", "a", "r", "r", "o"]
     let wordLetters = word.split("");
     wordLetters = wordLetters.map((l) => l.toLowerCase()); //Deixa todas as letras minúsculas para evitar problemas com letras maiúsculas e minúsculas
     console.log(wordLetters);

     //fill states = Preenche os estados com as informações da palavra escolhida
      setPicketWord(word);
      setPickedCategory(category);
      setLetters(wordLetters);

     setGameStage(stages[1].name);
  }

  //Função para verificar a letra, ela muda o estágio do jogo para "end"
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //Função para reiniciar o jogo, ela muda o estágio do jogo para "start"
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (

    <>
      <div className='App'>
        <div className='start'>
          {gameStage === 'start' && <StartScreen startGame={startGame}/>}
          {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
          {gameStage === 'end' && <GameOver retry={retry}/>}
        </div>
      </div>
    </>
  )
}

export default App