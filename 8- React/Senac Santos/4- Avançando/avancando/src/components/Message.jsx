const Message = (props) => {
  return (
    <div>
        <hr/>
        <h2>Utilizando State Lift: Message e ChangeMessageState</h2>
        A mensagem é: {props.msg}
    </div>
  )
}

export default Message