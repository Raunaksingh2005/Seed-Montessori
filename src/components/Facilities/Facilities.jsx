import React from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Facilities.module.css';

const Facilities = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const facilities = [
    {
      icon: 'fa-thermometer-half',
      title: 'Centrally Heated Classrooms',
      description: 'Our classrooms maintain perfect temperature year-round, ensuring a comfortable learning environment even during the coldest months.'
    },
    {
      icon: 'fa-snowflake',
      title: 'Air Conditioned Spaces',
      description: 'Stay cool and focused during warmer seasons with our modern air conditioning systems in all learning areas.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Secure Environment',
      description: 'Advanced security systems and controlled access ensure your child\'s safety at all times.'
    }
  ];

  return (
    <section id="facilities" className={styles.facilities}>
      <Container>
        <SectionHeader 
          title="Our Premium Facilities"
          subtitle="Designed for comfort, safety, and optimal learning"
        />

        <div className={styles.facilitiesContent}>
          {facilities.map((facility, index) => (
            <div 
              key={index}
              ref={index === 0 ? ref : null}
              className={`${styles.facilityCard} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.facilityIcon}>
                <i className={`fas ${facility.icon}`}></i>
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Facilities;
