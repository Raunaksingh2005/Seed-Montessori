import React from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './About.module.css';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const features = [
    {
      icon: 'fa-child',
      title: 'Child-Centered Learning',
      description: 'Our curriculum adapts to each child\'s unique interests and abilities'
    },
    {
      icon: 'fa-hands',
      title: 'Hands-On Experience',
      description: 'Learning through practical, engaging activities and materials'
    },
    {
      icon: 'fa-heart',
      title: 'Nurturing Environment',
      description: 'Safe, warm, and supportive atmosphere for optimal growth'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <Container>
        <SectionHeader 
          title="About Seed Montessori"
          subtitle="Creating a nurturing environment where children thrive"
        />

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>Our Philosophy</h3>
            <p>At Seed Montessori, we believe in nurturing the whole child - intellectually, emotionally, socially, and physically. Our approach is rooted in the Montessori method, which respects each child's individual development pace and learning style.</p>

            <div className={styles.aboutFeatures}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  ref={index === 0 ? ref : null}
                  className={`${styles.aboutFeature} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <i className={`fas ${feature.icon}`}></i>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.visualCard}>
              <i className="fas fa-seedling"></i>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
