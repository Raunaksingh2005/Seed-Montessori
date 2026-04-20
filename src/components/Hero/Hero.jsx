import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ onEnrollClick }) => {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=85&auto=format&fit=crop"
          alt="Children learning in a bright Montessori classroom"
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dot1}`} />
        <span className={`${styles.dot} ${styles.dot2}`} />
        <span className={`${styles.dot} ${styles.dot3}`} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.pill}>
              <span className={styles.pillDot} />
              Montessori-Based Early Education · Aerocity, Mohali
            </div>

            <h1 className={styles.title}>
              The Seed Montessori<br />
              <em className={styles.titleEm}>Planting Knowledge,<br />Growing Hearts</em>
            </h1>

            <p className={styles.desc}>
              A child-centered learning environment where independence, curiosity, and holistic growth are nurtured every single day — through the proven Montessori method.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <i className="fas fa-seedling"></i>
                <span>Child-Centered Learning</span>
              </div>
              <div className={styles.highlight}>
                <i className="fas fa-hands"></i>
                <span>Hands-On Exploration</span>
              </div>
              <div className={styles.highlight}>
                <i className="fas fa-heart"></i>
                <span>Holistic Development</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.btnPrimary} onClick={onEnrollClick}>
                Apply for Admission
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className={styles.btnGhost} onClick={scrollToAbout}>
                <span className={styles.playIcon}><i className="fas fa-play"></i></span>
                Learn More
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.mosaic}>
              <div className={styles.mosaicMain}>
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=85&auto=format&fit=crop"
                  alt="Child engaged in Montessori learning"
                />
              </div>
              <div className={styles.mosaicTop}>
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=85&auto=format&fit=crop"
                  alt="Kids in creative activity"
                />
              </div>
              <div className={styles.mosaicBottom}>
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=85&auto=format&fit=crop"
                  alt="Classroom activity"
                />
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>🌱</div>
                <div>
                  <strong>Ages 18 months – 5 yrs</strong>
                  <span>Toddler · Preschool · Pre-K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} onClick={scrollToAbout}>
        <span />
      </div>
    </section>
  );
};

export default Hero;
