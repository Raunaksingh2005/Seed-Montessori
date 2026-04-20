import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Programs.module.css';

const programs = [
  {
    emoji: '🐣',
    tag: '18 months – 3 years',
    title: 'Toddler Program',
    color: '#e8f5ec',
    accent: '#4a7c59',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=85&auto=format&fit=crop',
    desc: 'A gentle, nurturing introduction to structured learning. Toddlers develop foundational skills through sensory play, movement, and loving guidance.',
    focus: ['Gross & fine motor skills', 'Early language development', 'Social-emotional skills', 'Sensory exploration'],
    activities: ['Sensory bins & water play', 'Finger painting & crafts', 'Circle time & songs', 'Practical life activities'],
    schedule: '8:00 AM – 12:00 PM',
    ratio: '6:1 ratio',
  },
  {
    emoji: '🌱',
    tag: '3 – 4 years',
    title: 'Preschool Program',
    color: '#fff8e8',
    accent: '#b07d2e',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=85&auto=format&fit=crop',
    desc: 'Children blossom through structured Montessori activities, building literacy, numeracy, and social confidence in a prepared environment.',
    focus: ['Pre-literacy & phonics', 'Number sense & early math', 'Creative expression', 'Independence & self-care'],
    activities: ['Storytelling & read-alouds', 'Montessori math materials', 'STEAM exploration', 'Outdoor nature walks'],
    schedule: '8:00 AM – 1:00 PM',
    ratio: '8:1 ratio',
    featured: true,
  },
  {
    emoji: '🌳',
    tag: '4 – 5 years',
    title: 'Pre-K Program',
    color: '#eef2ff',
    accent: '#4a5fa0',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=85&auto=format&fit=crop',
    desc: 'School-readiness through advanced Montessori curriculum. Children develop critical thinking, collaboration, and a strong academic foundation.',
    focus: ['Reading & writing readiness', 'Mathematical reasoning', 'Cultural & science studies', 'Leadership & teamwork'],
    activities: ['Journaling & writing', 'Science experiments', 'Cultural projects', 'Collaborative STEAM'],
    schedule: '8:00 AM – 3:00 PM',
    ratio: '10:1 ratio',
  },
];

const Programs = () => {
  const [ref, visible] = useIntersectionObserver();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="programs" className={styles.programs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Programs</p>
          <h2 className={styles.heading}>
            A Program for Every<br />
            <span>Stage of Childhood</span>
          </h2>
          <p className={styles.sub}>Each program is thoughtfully designed to meet children where they are — nurturing independence, curiosity, and a genuine love of learning.</p>
        </div>

        <div className={styles.grid} ref={ref}>
          {programs.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${p.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {p.featured && <div className={styles.popularBadge}>⭐ Most Popular</div>}

              <div className={styles.cardImg}>
                <img src={p.img} alt={p.title} />
                <div className={styles.cardTag} style={{ background: p.accent }}>
                  {p.emoji} {p.tag}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>

                <div className={styles.twoCol}>
                  <div>
                    <p className={styles.colLabel}>Focus Areas</p>
                    <ul className={styles.list}>
                      {p.focus.map((f, j) => (
                        <li key={j}><i className="fas fa-check-circle" style={{ color: p.accent }}></i> {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={styles.colLabel}>Sample Activities</p>
                    <ul className={styles.list}>
                      {p.activities.map((a, j) => (
                        <li key={j}><i className="fas fa-star" style={{ color: p.accent }}></i> {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.meta} style={{ background: p.color }}>
                  <span><i className="fas fa-clock"></i> {p.schedule}</span>
                  <span><i className="fas fa-users"></i> {p.ratio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
