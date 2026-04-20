import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Gallery.module.css';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=85&auto=format&fit=crop',
    title: 'Creative Arts',
    desc: 'Expressing imagination through painting and craft',
    span: 'wide',
  },
  {
    img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=500&q=85&auto=format&fit=crop',
    title: 'Story Time',
    desc: 'Building language and listening skills',
  },
  {
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=85&auto=format&fit=crop',
    title: 'Hands-On Math',
    desc: 'Discovering numbers through Montessori materials',
  },
  {
    img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=85&auto=format&fit=crop',
    title: 'Nature Exploration',
    desc: 'Learning about the world around us',
  },
  {
    img: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=700&q=85&auto=format&fit=crop',
    title: 'Music & Movement',
    desc: 'Exploring rhythm, coordination, and joy',
    span: 'wide',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=85&auto=format&fit=crop',
    title: 'Building & Design',
    desc: 'Developing spatial awareness and creativity',
  },
];

const Gallery = () => {
  const [ref, visible] = useIntersectionObserver();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Life at Seed</p>
          <h2 className={styles.heading}>
            A Glimpse Into Our<br />
            <span>Vibrant Learning World</span>
          </h2>
          <p className={styles.sub}>Every day is filled with discovery, laughter, and meaningful learning experiences.</p>
        </div>

        <div className={styles.grid} ref={ref}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${item.span === 'wide' ? styles.wide : ''} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={item.img} alt={item.title} />
              <div className={`${styles.overlay} ${hovered === i ? styles.overlayVisible : ''}`}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
