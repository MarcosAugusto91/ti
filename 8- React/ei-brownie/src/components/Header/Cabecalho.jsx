import Nav from '../Navbar/Nav'
import './Cabecalho.css'

const Cabecalho = () => {
  return (
    <div className='divcab'>
      <div>
        <p className="textocab">Cabeçalho</p>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default Cabecalho