import React, { useState } from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { submitContact } from '../../firebase/services';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      showNotification('Message sent successfully! We will get back to you soon.', 'success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      showNotification(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      content: 'AeroArcade, Sco 36-37, G-Block, Aerocity, Mohali, Punjab 140306'
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      content: '+91 9592080029\n+91 9592080073'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      content: 'info.theseedmontessorischool@gmail.com'
    },
    {
      icon: 'fa-clock',
      title: 'Operating Hours',
      content: 'Monday – Friday: 7:00 AM – 6:00 PM'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <SectionHeader 
          title="Get in Touch"
          subtitle="We'd love to meet you and your child. Schedule a visit or send us a message."
        />

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.contactItem}>
                <i className={`fas ${item.icon}`}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={`${styles.btnSubmit} ${loading ? styles.loading : ''}`} disabled={loading}>
                <span className={styles.btnText}>Schedule Appointment</span>
                {loading && (
                  <div className={styles.btnLoader}>
                    <div className={styles.loaderSpinner}></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {notification.show && (
          <div className={`${styles.notification} ${styles[notification.type]}`}>
            <i className={`fas fa-${notification.type === 'success' ? 'check' : 'exclamation'}`}></i>
            <span>{notification.message}</span>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Contact;
