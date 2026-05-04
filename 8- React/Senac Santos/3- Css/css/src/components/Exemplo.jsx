//import './Exemplo.css'

import styles from './Exemplo.module.css' //<------ Dessa forma utilizando o Module os estilos não vazariam para os outros componentes.

const Exemplo = () => {
  return (
    <div>
        <h1 className={styles.container_titulo}>Exemplo de Componente (Sem Estilo Específico)</h1>
        <h1 className={styles.titulo}>Exemplo de Componente (Com estilo pink) "Trouxe do Module"</h1>
    </div>
  )
}

export default Exemplo