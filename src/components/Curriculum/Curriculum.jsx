import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Curriculum.module.css';

const approaches = [
  {
    icon: '🧩',
    title: 'Montessori Principles',
    desc: 'Self-directed activity, hands-on learning, and collaborative play in a prepared environment that respects each child\'s natural development.',
  },
  {
    icon: '🎨',
    title: 'Creative Curriculum',
    desc: 'A research-based framework that integrates art, music, movement, and storytelling to make learning joyful and meaningful.',
  },
  {
    icon: '🌍',
    title: 'Reggio Emilia Influence',
    desc: 'Children are viewed as capable, curious researchers. Projects emerge from their interests, with the environment as the "third teacher".',
  },
];

const coreAreas = [
  {
    icon: 'fa-book',
    color: '#e8f5ec',
    iconColor: '#4a7c59',
    title: 'Language & Literacy',
    items: ['Phonemic awareness', 'Storytelling & read-alouds', 'Pre-writing skills', 'Vocabulary building'],
  },
  {
    icon: 'fa-calculator',
    color: '#fff8e8',
    iconColor: '#b07d2e',
    title: 'Early Mathematics',
    items: ['Number sense & counting', 'Patterns & sorting', 'Shapes & spatial reasoning', 'Montessori math materials'],
  },
  {
    icon: 'fa-heart',
    color: '#fce8f0',
    iconColor: '#c0436a',
    title: 'Social-Emotional Development',
    items: ['Self-regulation skills', 'Empathy & kindness', 'Conflict resolution', 'Building friendships'],
  },
  {
    icon: 'fa-paint-brush',
    color: '#eef2ff',
    iconColor: '#4a5fa0',
    title: 'Creativity & Motor Skills',
    items: ['Fine motor through art & crafts', 'Gross motor outdoor play', 'Music & movement', 'STEAM projects'],
  },
];

const Curriculum = () => {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="curriculum" className={styles.curriculum}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How We Teach</p>
          <h2 className={styles.heading}>
            A Curriculum Built on<br />
            <span>Proven Approaches</span>
          </h2>
          <p className={styles.sub}>We draw from the world's most respected early childhood frameworks to create a rich, balanced learning experience.</p>
        </div>

        {/* Approaches */}
        <div className={styles.approaches} ref={ref}>
          {approaches.map((a, i) => (
            <div
              key={i}
              className={`${styles.approachCard} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.approachEmoji}>{a.icon}</div>
              <h3 className={styles.approachTitle}>{a.title}</h3>
              <p className={styles.approachDesc}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Core areas */}
        <div className={styles.coreHeader}>
          <h3 className={styles.coreTitle}>Core Learning Areas</h3>
        </div>
        <div className={styles.coreGrid}>
          {coreAreas.map((area, i) => (
            <div
              key={i}
              className={`${styles.coreCard} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${(i + 3) * 0.1}s`, background: area.color }}
            >
              <div className={styles.coreIcon} style={{ color: area.iconColor }}>
                <i className={`fas ${area.icon}`}></i>
              </div>
              <h4 className={styles.coreCardTitle}>{area.title}</h4>
              <ul className={styles.coreList}>
                {area.items.map((item, j) => (
                  <li key={j} style={{ color: area.iconColor }}>
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
