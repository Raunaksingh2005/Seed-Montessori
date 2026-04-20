import React, { useState, useEffect } from 'react';
import Button from '../common/Button/Button';
import styles from './Header.module.css';

const Header = ({ onEnrollClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navBrand}>
            <div className={styles.logo}>
              <i className="fas fa-seedling"></i>
              <span>Seed Montessori</span>
            </div>
          </div>

          <div className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
            {['home', 'about', 'programs', 'facilities', 'gallery', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`${styles.navLink} ${activeLink === section ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>
            <Button variant="primary" onClick={onEnrollClick}>
              <span>Enroll Now</span>
            </Button>
          </div>

          <button
            className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
