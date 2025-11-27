import { Card } from '@components/common';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    icon: '💻',
    title: 'Desenvolvimento Web',
    description: 'Criamos aplicações web modernas, responsivas e de alta performance usando as tecnologias mais recentes do mercado.',
    features: ['React & JavaScript', 'Next.js', 'Node.js', 'API REST']
  },
  {
    id: 2,
    icon: '📱',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos apps nativos e híbridos para iOS e Android com foco em experiência do usuário.',
    features: ['React Native', 'Flutter', 'UI/UX Design', 'Performance']
  },
  {
    id: 3,
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Infraestrutura escalável e automatizada na nuvem com as melhores práticas de DevOps.',
    features: ['AWS & Azure', 'Docker', 'CI/CD', 'Kubernetes']
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Design de Interface',
    description: 'Criação de interfaces intuitivas e atraentes que encantam os usuários.',
    features: ['UI Design', 'UX Research', 'Prototipagem', 'Design System']
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Segurança',
    description: 'Implementação de soluções robustas de segurança para proteger seus dados e sistemas.',
    features: ['Auditoria', 'Criptografia', 'OAuth 2.0', 'Compliance']
  },
  {
    id: 6,
    icon: '📊',
    title: 'Análise de Dados',
    description: 'Transforme dados em insights valiosos para tomar decisões estratégicas.',
    features: ['Big Data', 'BI', 'Machine Learning', 'Data Viz']
  }
];

export const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Nossos Serviços</h1>
          <p className={styles.subtitle}>
            Soluções completas para todas as necessidades do seu negócio
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service) => (
            <Card key={service.id} variant="elevated" className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};