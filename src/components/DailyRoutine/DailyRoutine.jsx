import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './DailyRoutine.module.css';

const routine = [
  { time: '7:00 – 8:00', label: 'Arrival & Free Play', icon: '🌅', desc: 'Children arrive, settle in, and choose from open-ended free play activities in a calm, welcoming environment.', color: '#e8f5ec' },
  { time: '8:00 – 10:00', label: 'Learning Centres', icon: '📚', desc: 'Structured Montessori work time across language, math, sensorial, and practical life areas. Child-led with teacher guidance.', color: '#fff8e8' },
  { time: '10:00 – 10:30', label: 'Circle Time & Snack', icon: '🍎', desc: 'Group gathering for songs, stories, calendar, and a healthy nutritious snack together as a community.', color: '#fce8f0' },
  { time: '10:30 – 11:30', label: 'Outdoor Play', icon: '🌳', desc: 'Active outdoor exploration, gross motor development, nature discovery, and social play in our secure garden.', color: '#eef2ff' },
  { time: '11:30 – 12:30', label: 'Lunch & Rest', icon: '🥗', desc: 'A relaxed, family-style lunch followed by quiet rest or nap time for younger children.', color: '#fff3e0' },
  { time: '12:30 – 3:00', label: 'Creative Activities', icon: '🎨', desc: 'Art, music, STEAM projects, storytelling, and enrichment activities that spark imagination and creativity.', color: '#e8f5ec' },
];

const DailyRoutine = () => {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="routine" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>A Day at Seed</p>
          <h2 className={styles.heading}>
            Our Daily Routine<br />
            <span>Structure with Flexibility</span>
          </h2>
          <p className={styles.sub}>A predictable, nurturing rhythm gives children the security to explore freely and learn confidently.</p>
        </div>

        <div className={styles.timeline} ref={ref}>
          {routine.map((item, i) => (
            <div
              key={i}
              className={`${styles.step} ${visible ? styles.visible : ''} ${i % 2 === 0 ? styles.left : styles.right}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.stepCard} style={{ background: item.color }}>
                <div className={styles.stepEmoji}>{item.icon}</div>
                <div className={styles.stepContent}>
                  <span className={styles.stepTime}>{item.time}</span>
                  <h4 className={styles.stepLabel}>{item.label}</h4>
                  <p className={styles.stepDesc}>{item.desc}</p>
                </div>
              </div>
              <div className={styles.stepDot} />
            </div>
          ))}
          <div className={styles.timelineLine} />
        </div>
      </div>
    </section>
  );
};

export default DailyRoutine;
