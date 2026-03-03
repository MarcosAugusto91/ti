import { useState, useCallback, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { wordsList } from "./data/word"; 
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

// 1-Primeira parte limpar os arquivos index.css e app.css, retirar oque vem em App.jsx e adicionar o arquivo word na pasta DATA dentro da pasta src;

// 2-Arrumar os arquivos App.css e Index.css para centralizar o conteúdo da tela e colocar um fundo para a tela, o fundo pode ser uma cor ou uma imagem, fica a seu critério;

// 3- Criar um componente StartScreen.jsx dentro da pasta components, esse componente deve conter um título, uma descrição e um botão para iniciar o jogo, o estilo do componente fica a seu critério, mas ele deve ser centralizado na tela; Com isso temos a página inicial do jogo pronta, agora vamos para a parte de lógica do jogo;

/* 4- Importar useCallback, useEffect e wordslist;
    Criar os estágios: start, game e end;
    Criar os components Game e GameOver com seus Css's
    Chamar o wordsList para um array e exibi-lo no console */

/* 5- */

const stages = [ 
  {id: 1, name:"start"},
  {id: 2, name:"game" },
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words)


  return (
    <>
      <div className='App'>
        <div className='start'>
          {gameStage === 'start' && <StartScreen/>}
          {gameStage === 'game' && <Game/>}
          {gameStage === 'end' && <GameOver/>}
        </div>
      </div>
    </>
  )
}

export default App
