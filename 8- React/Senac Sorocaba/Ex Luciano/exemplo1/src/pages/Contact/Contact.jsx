import { useState } from 'react';
import { Button, Card } from '@components/common';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Entre em Contato</h1>
          <p className={styles.subtitle}>
            Estamos prontos para ajudar você a transformar suas ideias em realidade
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <Card variant="elevated">
              {submitted ? (
                <div className={styles.success}>
                  <h2>✅ Mensagem Enviada!</h2>
                  <p>Obrigado pelo contato. Retornaremos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Mensagem *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="large">Enviar Mensagem</Button>
                </form>
              )}
            </Card>
          </div>

          <div className={styles.infoSection}>
            <Card variant="elevated">
              <h3 className={styles.infoTitle}>📍 Localização</h3>
              <p className={styles.infoText}>São Paulo, SP - Brasil</p>
            </Card>

            <Card variant="elevated">
              <h3 className={styles.infoTitle}>📧 E-mail</h3>
              <p className={styles.infoText}>contato@empresa.com</p>
            </Card>

            <Card variant="elevated">
              <h3 className={styles.infoTitle}>📱 Telefone</h3>
              <p className={styles.infoText}>(11) 99999-9999</p>
            </Card>

            <Card variant="elevated">
              <h3 className={styles.infoTitle}>⏰ Horário</h3>
              <p className={styles.infoText}>Seg - Sex: 9h às 18h</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};