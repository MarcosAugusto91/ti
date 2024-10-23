import './App.css';

//npm start (Serve para rodar o site)

function CriandoBotao({textoBotao}) {
  return (
    <button className='botao'>
      {textoBotao}
    </button>
  );
}

function Formulario(){
  return(
    <>
      <h2>Login: </h2>
      <input type="text"></input>
      <h2>Senha: </h2>
      <input type='password'></input>
    </>
  )
}

function App(){
  let logado = true;
  if(!logado){
    return(<Formulario />)
  } else{
      return(
        <div className='header'>
          <h1>Meu primeiro botão: </h1>
          <CriandoBotao textoBotao={"Clique Aqui!"} />
          <CriandoBotao textoBotao={"Não aqui!"} />
          <CriandoBotao textoBotao={"Aqui!"} />
          <CriandoBotao textoBotao={"Aqui poxa!"} />
          <CriandoBotao textoBotao={"Clique Aqui vai!"} />
          <CriandoBotao textoBotao={"Aqui!"} />
          <CriandoBotao textoBotao={"Não Clique Aqui!"} />
        </div>
      )
    }
}

export default App;
