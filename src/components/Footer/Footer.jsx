import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <i className="fas fa-seedling"></i>
              </div>
              <div>
                <span className={styles.logoName}>The Seed Montessori</span>
                <span className={styles.logoTagline}>Early Learning Centre</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Nurturing young minds through the Montessori method in our centrally heated, air-conditioned, and secure learning environment.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.social}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.social}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.social}>
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {['home', 'about', 'programs', 'curriculum', 'policies', 'gallery', 'contact'].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
                    <i className="fas fa-chevron-right"></i>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>AeroArcade, Sco 36-37, G-Block, Aerocity, Mohali, Punjab 140306</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+91 9592080029<br />+91 9592080073</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info.theseedmontessorischool@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon – Fri: 7:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} The Seed Montessori School. All rights reserved.</p>
          <p className={styles.bottomRight}>Designed with <span>♥</span> for little learners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
