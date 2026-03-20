const Imc = () => {

    const name = "Marcos";
    const imc = {
        altura: 1.78,
        peso: '70'
    }

  return (
    <div>
        <p>Olá {name}!</p>
        <p>Seu IMC é: {imc.peso / (imc.altura * imc.altura)}</p>
    </div>
  )
}

export default Imc