const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <hr />
        <h2>Executando Funções por Props</h2>
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecuteFunction