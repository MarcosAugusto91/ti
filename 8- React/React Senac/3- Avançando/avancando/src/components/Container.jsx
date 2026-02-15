const Container = ({ children, propValor }) => {
  return (
    <div>
        <hr />
        <h2>Utilizando Children</h2>
        <p>Meu nome é: {propValor}</p>
        {children}
    </div>
  )
}

export default Container