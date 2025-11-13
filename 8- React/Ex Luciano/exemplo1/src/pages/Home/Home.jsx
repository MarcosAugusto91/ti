import { Link } from 'react-router-dom';
import { Button, Card } from '@components/common';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Transforme seu Negócio com Soluções Inovadoras
          </h1>
          <p className={styles.subtitle}>
            Ajudamos empresas a alcançarem seus objetivos através de tecnologia e estratégia
          </p>
          <div className={styles.actions}>
            <Link to="/services">
              <Button size="large">Nossos Serviços</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="large">Entre em Contato</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por que nos escolher?</h2>
          <div className={styles.grid}>
            <Card title="🚀 Inovação" variant="elevated">
              <p>Utilizamos as tecnologias mais modernas para criar soluções que impulsionam seu negócio.</p>
            </Card>
            <Card title="💎 Qualidade" variant="elevated">
              <p>Comprometimento com excelência em cada projeto que desenvolvemos.</p>
            </Card>
            <Card title="🤝 Parceria" variant="elevated">
              <p>Trabalhamos lado a lado com você para alcançar os melhores resultados.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
          <p className={styles.ctaText}>
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.
          </p>
          <Link to="/contact">
            <Button size="large">Fale Conosco</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};