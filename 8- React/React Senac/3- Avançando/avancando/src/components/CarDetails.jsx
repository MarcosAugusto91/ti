const CarDetails = ({brand, km, color, novo}) => {

    return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {novo ? <p>Carro Novo</p> : <p>Carro Usado</p>}

    </div>
  )
}

export default CarDetails