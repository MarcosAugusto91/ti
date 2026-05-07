const ShowUserName = (props) => {

  let nome = props.name;

  return (
    <div>
      <h2>Usando Props: ShowUserName</h2>
      <p>O nome do usuário é: {props.name}</p>
      <p>O nome do usuário é: {nome}</p>
    </div>
  )
}

export default ShowUserName