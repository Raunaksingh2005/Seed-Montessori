import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ onEnrollClick }) => {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=85&auto=format&fit=crop"
          alt="Children learning in a bright classroom"
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Floating decorative dots */}
      <div className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dot1}`} />
        <span className={`${styles.dot} ${styles.dot2}`} />
        <span className={`${styles.dot} ${styles.dot3}`} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left column */}
          <div className={styles.left}>
            <div className={styles.pill}>
              <span className={styles.pillDot} />
              Excellence in Early Education
            </div>

            <h1 className={styles.title}>
              Where Every Child<br />
              <em className={styles.titleEm}>Discovers & Grows</em>
            </h1>

            <p className={styles.desc}>
              At Seed Montessori, we nurture curious minds through the proven Montessori method — blending hands-on learning, creative exploration, and a warm, secure environment.
            </p>

            <div className={styles.actions}>
              <button className={styles.btnPrimary} onClick={onEnrollClick}>
                Enroll Your Child
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className={styles.btnGhost} onClick={scrollToAbout}>
                <span className={styles.playIcon}><i className="fas fa-play"></i></span>
                Discover More
              </button>
            </div>
          </div>

          {/* Right column — image mosaic */}
          <div className={styles.right}>
            <div className={styles.mosaic}>
              <div className={styles.mosaicMain}>
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=85&auto=format&fit=crop"
                  alt="Child engaged in learning"
                />
              </div>
              <div className={styles.mosaicTop}>
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=85&auto=format&fit=crop"
                  alt="Kids painting"
                />
              </div>
              <div className={styles.mosaicBottom}>
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=85&auto=format&fit=crop"
                  alt="Classroom activity"
                />
              </div>

              {/* Floating badge only */}
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>🏆</div>
                <div>
                  <strong>Award Winning</strong>
                  <span>Montessori School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} onClick={scrollToAbout}>
        <span />
      </div>
    </section>
  );
};

export default Hero;
