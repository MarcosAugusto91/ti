import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Empresa</h3>
            <p className={styles.description}>
              Soluções inovadoras para o seu negócio crescer e se destacar no mercado.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Links Rápidos</h4>
            <nav className={styles.links}>
              <Link to="/" className={styles.link}>Início</Link>
              <Link to="/about" className={styles.link}>Sobre</Link>
              <Link to="/services" className={styles.link}>Serviços</Link>
              <Link to="/contact" className={styles.link}>Contato</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <div className={styles.contact}>
              <p>📧 contato@empresa.com</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo, SP</p>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Redes Sociais</h4>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear}  Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};