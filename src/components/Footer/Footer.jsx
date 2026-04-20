import React from 'react';
import Container from '../common/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <i className="fas fa-seedling"></i>
              <span>The Seed Montessori</span>
            </div>
            <p>Nurturing young minds through the Montessori method in our centrally heated and air-conditioned, safe learning environment.</p>
            <div className={styles.socialLinks}>
              <button className={styles.socialButton} aria-label="Facebook"><i className="fab fa-facebook-f"></i></button>
              <button className={styles.socialButton} aria-label="Instagram"><i className="fab fa-instagram"></i></button>
              <button className={styles.socialButton} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              <button className={styles.socialButton} aria-label="YouTube"><i className="fab fa-youtube"></i></button>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Programs</h4>
            <ul>
              <li><a href="#programs">Toddler Program</a></li>
              <li><a href="#programs">Primary Program</a></li>
              <li><a href="#programs">Extended Care</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p><i className="fas fa-map-marker-alt"></i>Sco 36,37 Aero Arcade G-BLOCK, Aerocity, near International Airport, Punjab 140306</p>
              <p><i className="fas fa-phone"></i> +91 9592080029 , +91 9592080073</p>
              <p><i className="fas fa-envelope"></i> info@theseedmontessori.in</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 The Seed Montessori School. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
