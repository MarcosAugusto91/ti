import { Card } from '@components/common';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Sobre Nós</h1>
          <p className={styles.subtitle}>
            Conheça nossa história e o que nos motiva
          </p>
        </header>

        <section className={styles.content}>
          <Card variant="elevated">
            <h2 className={styles.sectionTitle}>Nossa Missão</h2>
            <p className={styles.text}>
              Capacitar empresas através de soluções tecnológicas inovadoras, 
              transformando desafios em oportunidades de crescimento e sucesso.
            </p>
          </Card>

          <Card variant="elevated">
            <h2 className={styles.sectionTitle}>Nossa Visão</h2>
            <p className={styles.text}>
              Ser referência em transformação digital, reconhecida pela excelência 
              técnica e pelo impacto positivo que geramos nos negócios de nossos clientes.
            </p>
          </Card>

          <Card variant="elevated">
            <h2 className={styles.sectionTitle}>Nossos Valores</h2>
            <ul className={styles.list}>
              <li>💡 <strong>Inovação:</strong> Buscamos constantemente novas formas de resolver problemas</li>
              <li>🎯 <strong>Excelência:</strong> Comprometimento com a qualidade em tudo que fazemos</li>
              <li>🤝 <strong>Colaboração:</strong> Acreditamos no poder do trabalho em equipe</li>
              <li>🌱 <strong>Crescimento:</strong> Investimos no desenvolvimento contínuo</li>
            </ul>
          </Card>
        </section>

        <section className={styles.stats}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>10+</h3>
            <p className={styles.statLabel}>Anos de Experiência</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>200+</h3>
            <p className={styles.statLabel}>Projetos Entregues</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>50+</h3>
            <p className={styles.statLabel}>Clientes Satisfeitos</p>
          </div>
        </section>
      </div>
    </div>
  );
};