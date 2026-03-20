import './Exemplo.css'

// import styles from './Exemplo.module.css' <------ Dessa forma utilizando o Module os estilos não vazariam para os outros componentes.

const Exemplo = () => {
  return (
    <div>
        <h1>Exemplo de Componente</h1>
        {/* <h1 className={styles.titulo}>Exemplo de Componente</h1> */}
    </div>
  )
}

export default Exemplo