import { Link, NavLink } from 'react-router-dom';
import { useTheme, useApp } from '@hooks';
import { Button } from '@components/common';
import styles from './Header.module.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { state, toggleMenu } = useApp();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Empresa</span>
        </Link>

        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav className={`${styles.nav} ${state.isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Início
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Serviços
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contato
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <Button 
            onClick={toggleTheme}
            variant="outline"
            size="small"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </div>
    </header>
  );
};