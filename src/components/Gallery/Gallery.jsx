import React from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const galleryItems = [
    { icon: 'fa-paint-brush', title: 'Creative Arts', caption: 'Expressing imagination through art' },
    { icon: 'fa-book', title: 'Story Time', caption: 'Developing language and listening skills' },
    { icon: 'fa-seedling', title: 'Nature Exploration', caption: 'Learning about the world around us' },
    { icon: 'fa-cubes', title: 'Building Blocks', caption: 'Developing spatial awareness and creativity' },
    { icon: 'fa-music', title: 'Music & Movement', caption: 'Exploring rhythm and coordination' },
    { icon: 'fa-apple-alt', title: 'Healthy Snacks', caption: 'Learning about nutrition and healthy habits' }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <SectionHeader 
          title="Our Happy Learners"
          subtitle="See our students engaged in learning and play"
        />

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              ref={index === 0 ? ref : null}
              className={`${styles.galleryItem} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.galleryImage}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className={styles.galleryCaption}>
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
