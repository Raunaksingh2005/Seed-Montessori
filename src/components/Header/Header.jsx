import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ onEnrollClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => scrollTo(e, 'home')}>
          <div className={styles.logoIcon}>
            <i className="fas fa-seedling"></i>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Seed Montessori</span>
            <span className={styles.logoSub}>Early Learning Centre</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${active === id ? styles.navLinkActive : ''}`}
              onClick={(e) => scrollTo(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <button className={styles.ctaBtn} onClick={onEnrollClick}>
            Enroll Now
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.mobileLink} ${active === id ? styles.mobileLinkActive : ''}`}
            onClick={(e) => scrollTo(e, id)}
          >
            {label}
          </a>
        ))}
        <button className={styles.mobileCta} onClick={() => { setMenuOpen(false); onEnrollClick(); }}>
          Enroll Now
        </button>
      </div>
    </header>
  );
};

export default Header;
