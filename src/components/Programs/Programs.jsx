import React from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Programs.module.css';

const Programs = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const programs = [
    {
      icon: 'fa-baby',
      title: 'Toddler Program',
      age: '2-3 years',
      description: 'Our toddler program focuses on developing independence, language skills, and social interaction in a carefully prepared environment.',
      features: ['Practical life activities', 'Sensorial development', 'Early language skills', 'Social interaction'],
      schedule: '8:00 AM - 12:00 PM',
      ratio: '8:1 Student-Teacher Ratio',
      featured: false
    },
    {
      icon: 'fa-child',
      title: 'Primary Program',
      age: '3-6 years',
      description: 'Comprehensive curriculum covering all areas of development in our specially prepared Montessori environment.',
      features: ['Mathematics & Numbers', 'Language arts & Reading', 'Cultural studies', 'Science exploration'],
      schedule: '8:00 AM - 3:00 PM',
      ratio: '10:1 Student-Teacher Ratio',
      featured: true
    },
    {
      icon: 'fa-sun',
      title: 'Extended Care',
      age: 'All Ages',
      description: 'Before and after school care for working parents in a safe, engaging, and nurturing environment.',
      features: ['Flexible hours', 'Homework assistance', 'Enrichment activities', 'Outdoor play'],
      schedule: '7:00 AM - 6:00 PM',
      ratio: '12:1 Student-Teacher Ratio',
      featured: false
    }
  ];

  return (
    <section id="programs" className={styles.programs}>
      <Container>
        <SectionHeader 
          title="Our Educational Programs"
          subtitle="Tailored learning experiences for every stage of development"
        />

        <div className={styles.programsGrid}>
          {programs.map((program, index) => (
            <div 
              key={index}
              ref={index === 0 ? ref : null}
              className={`${styles.programCard} ${program.featured ? styles.featured : ''} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {program.featured && <div className={styles.programBadge}>Most Popular</div>}
              
              <div className={styles.programHeader}>
                <div className={styles.programIcon}>
                  <i className={`fas ${program.icon}`}></i>
                </div>
                <h3>{program.title}</h3>
                <p className={styles.programAge}>{program.age}</p>
              </div>

              <div className={styles.programContent}>
                <p>{program.description}</p>
                <ul className={styles.programFeatures}>
                  {program.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.programMeta}>
                  <div className={styles.metaItem}>
                    <i className="fas fa-clock"></i>
                    <span>{program.schedule}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <i className="fas fa-users"></i>
                    <span>{program.ratio}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Programs;
