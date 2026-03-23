import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='cabecalho-nav'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>Sobre</button></Link>
        <Link to="/Contato"><button>Contato</button></Link>
      </nav>
    </>
  )
}

export default Nav