import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Facilities.module.css';

const facilities = [
  {
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=85&auto=format&fit=crop',
    icon: 'fa-thermometer-half',
    title: 'Climate-Controlled Classrooms',
    desc: 'Central heating and air conditioning maintain the perfect learning temperature year-round, so children stay comfortable and focused.',
  },
  {
    img: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=700&q=85&auto=format&fit=crop',
    icon: 'fa-shield-alt',
    title: 'Advanced Security Systems',
    desc: 'Biometric access control, CCTV monitoring, and a single supervised entry point ensure your child is always safe.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=85&auto=format&fit=crop',
    icon: 'fa-book-open',
    title: 'Montessori Resource Library',
    desc: 'Thousands of carefully curated books, manipulatives, and learning materials aligned with the Montessori curriculum.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=700&q=85&auto=format&fit=crop',
    icon: 'fa-tree',
    title: 'Outdoor Learning Garden',
    desc: 'A dedicated outdoor space with a nature garden, sandpit, and climbing structures for physical development and exploration.',
  },
];

const Facilities = () => {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="facilities" className={styles.facilities}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Campus</p>
          <h2 className={styles.heading}>
            Premium Facilities Built<br />
            <span>for Little Learners</span>
          </h2>
          <p className={styles.sub}>Every corner of our campus is thoughtfully designed to inspire curiosity, ensure safety, and support the Montessori method.</p>
        </div>

        <div className={styles.grid} ref={ref}>
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.cardImg}>
                <img src={f.img} alt={f.title} />
                <div className={styles.iconBadge}>
                  <i className={`fas ${f.icon}`}></i>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
