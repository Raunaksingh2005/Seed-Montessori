import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './About.module.css';

const tabs = [
  {
    id: 'vision',
    label: 'Vision',
    icon: 'fa-eye',
    heading: 'Our Vision',
    body: 'To create a nurturing environment where every child builds curiosity, creativity, and confidence — growing into independent, compassionate, and lifelong learners.',
    points: [
      { icon: 'fa-lightbulb', text: 'Build curiosity through exploration' },
      { icon: 'fa-palette', text: 'Foster creativity in every activity' },
      { icon: 'fa-star', text: 'Develop confidence from within' },
      { icon: 'fa-seedling', text: 'Nurture a love for lifelong learning' },
    ],
  },
  {
    id: 'mission',
    label: 'Mission',
    icon: 'fa-bullseye',
    heading: 'Our Mission',
    body: 'We are committed to encouraging independence and critical thinking, supporting emotional and social growth, fostering creativity through hands-on learning, and building a strong parent-school partnership.',
    points: [
      { icon: 'fa-brain', text: 'Encourage independence & critical thinking' },
      { icon: 'fa-heart', text: 'Support emotional and social growth' },
      { icon: 'fa-hands', text: 'Foster creativity via hands-on learning' },
      { icon: 'fa-users', text: 'Build strong parent-school partnerships' },
    ],
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    icon: 'fa-book-open',
    heading: 'Our Philosophy',
    body: 'We blend play-based and Montessori approaches with Reggio Emilia influences — believing that children learn best through hands-on, exploratory experiences that honour the whole child: mind, body, and spirit.',
    points: [
      { icon: 'fa-child', text: 'Play-based + Montessori approach' },
      { icon: 'fa-search', text: 'Hands-on, exploratory learning' },
      { icon: 'fa-infinity', text: 'Whole-child development' },
      { icon: 'fa-globe', text: 'Reggio Emilia influences' },
    ],
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [ref, visible] = useIntersectionObserver();
  const current = tabs.find(t => t.id === activeTab);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* Left — image stack */}
        <div className={styles.imageStack} ref={ref}>
          <div className={`${styles.imgLarge} ${visible ? styles.visible : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=85&auto=format&fit=crop"
              alt="Teacher guiding a child in Montessori classroom"
            />
          </div>
          <div className={`${styles.imgSmall} ${visible ? styles.visible : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=400&q=85&auto=format&fit=crop"
              alt="Children working together"
            />
          </div>
          <div className={styles.expBadge}>
            <span className={styles.expNum}>🌱</span>
            <span className={styles.expText}>Montessori<br />Certified</span>
          </div>
        </div>

        {/* Right — tabbed content */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>Who We Are</p>
          <h2 className={styles.heading}>
            Education Rooted in<br />
            <span className={styles.headingAccent}>Purpose & Care</span>
          </h2>
          <p className={styles.intro}>
            The Seed Montessori School is built on the belief that every child carries within them the seeds of greatness. Our role is simply to plant knowledge, water it with love, and watch hearts grow.
          </p>

          {/* Tabs */}
          <div className={styles.tabs}>
            {tabs.map(t => (
              <button
                key={t.id}
                className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                <i className={`fas ${t.icon}`}></i>
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className={styles.tabContent} key={activeTab}>
            <h3 className={styles.tabHeading}>{current.heading}</h3>
            <p className={styles.tabBody}>{current.body}</p>
            <div className={styles.points}>
              {current.points.map((p, i) => (
                <div key={i} className={styles.point}>
                  <div className={styles.pointIcon}>
                    <i className={`fas ${p.icon}`}></i>
                  </div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
