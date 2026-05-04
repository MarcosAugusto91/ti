import heroImg from '../assets/hero.png'
//import './Imagem.css'
//<img className='Imagem' src={heroImg} alt="imagem" />

import styles from './Imagem.module.css'

const Imagem = () => {
  return (
    <img className={styles.Imagem} src={heroImg} alt="imagem" />
    
  )
}

export default Imagem