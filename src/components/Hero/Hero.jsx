import React from 'react';
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCounters } from '../../hooks/useCounters';
import styles from './Hero.module.css';

const Hero = ({ onEnrollClick }) => {
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.5 });
  const childrenCount = useCounters(150, statsVisible);
  const teachersCount = useCounters(12, statsVisible);
  const satisfactionCount = useCounters(98, statsVisible);

  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Full-bleed background image */}
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>

      {/* Floating emoji animals */}
      <div className={styles.floatingAnimals}>
        <span className={`${styles.animal} ${styles.a1}`}>🦋</span>
        <span className={`${styles.animal} ${styles.a2}`}>🐸</span>
        <span className={`${styles.animal} ${styles.a3}`}>🌸</span>
        <span className={`${styles.animal} ${styles.a4}`}>🌿</span>
        <span className={`${styles.animal} ${styles.a5}`}>⭐</span>
        <span className={`${styles.animal} ${styles.a6}`}>🐝</span>
      </div>

      <Container>
        <div className={styles.heroContent}>
          {/* Left: text */}
          <div className={styles.heroText}>
            <div className={styles.badge}>🌱 Excellence in Early Education</div>
            <h1 className={styles.heroTitle}>
              Nurturing Young<br />
              <span className={styles.accent}>Minds to Blossom</span>
            </h1>
            <p className={styles.heroDescription}>
              At Seed Montessori, we create an environment where children discover their potential through exploration, creativity, and individualized learning in our state-of-the-art facilities.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary" size="large" onClick={onEnrollClick}>
                <span>Begin Journey</span>
                <i className="fas fa-arrow-right"></i>
              </Button>
              <Button variant="secondary" size="large" onClick={handleLearnMore}>
                <span>Learn More</span>
                <i className="fas fa-play"></i>
              </Button>
            </div>

            <div className={styles.heroStats} ref={statsRef}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{childrenCount}+</div>
                <div className={styles.statLabel}>Happy Children</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{teachersCount}+</div>
                <div className={styles.statLabel}>Certified Teachers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{satisfactionCount}%</div>
                <div className={styles.statLabel}>Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: image collage */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCollage}>
              <div className={styles.imgMain}>
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80"
                  alt="Happy children learning"
                />
              </div>
              <div className={styles.imgSmallTop}>
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=300&q=80"
                  alt="Kids painting"
                />
              </div>
              <div className={styles.imgSmallBottom}>
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&q=80"
                  alt="Classroom activity"
                />
              </div>
              <div className={styles.floatingBadge}>
                <span>🏆</span>
                <div>
                  <strong>Award Winning</strong>
                  <small>Montessori School</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
