const UserDetails = ({funcionarios}) => {
  return (
    <div><h2>Exercício Final</h2>

    {funcionarios.map((funcionario) => ( 
        <div key={funcionario.id}> 
           <p>Nome: {funcionario.nome}</p>
           <p>Idade: {funcionario.idade}</p>
           <p>Cargo: {funcionario.cargo}</p>
           <p>Salário: R${funcionario.salario},00</p>
           
            {funcionario.idade >= 18 ? <h4>Pode tirar carteira de motorista</h4> : 
            <h4>Não pode tirar carteira de motorista</h4>}
         
           <hr />
        </div> ))}

    </div>
  )
}

export default UserDetails