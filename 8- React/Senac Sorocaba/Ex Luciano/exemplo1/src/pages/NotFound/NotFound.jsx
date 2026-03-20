import { Link } from 'react-router-dom';
import { Button } from '@components/common';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Página não encontrada</h2>
          <p className={styles.text}>
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button size="large">Voltar para Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};