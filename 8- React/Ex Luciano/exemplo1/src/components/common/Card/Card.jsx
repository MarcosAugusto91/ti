import styles from './Card.module.css';

export const Card = ({ 
  title, 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} {...props}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};