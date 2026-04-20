import React, { useState } from 'react';
import styles from './Interactive.module.css';

const categories = [
  {
    id: 'colors',
    label: 'Colors',
    icon: '🎨',
    items: [
      { name: 'Red', emoji: '🔴', fact: 'Red is the color of apples, roses, and fire trucks!' },
      { name: 'Blue', emoji: '🔵', fact: 'Blue is the color of the sky and the deep ocean!' },
      { name: 'Yellow', emoji: '🟡', fact: 'Yellow is the color of the sun and sunflowers!' },
      { name: 'Green', emoji: '🟢', fact: 'Green is the color of leaves, grass, and frogs!' },
    ],
  },
  {
    id: 'numbers',
    label: 'Numbers',
    icon: '🔢',
    items: [
      { name: '1', emoji: '1️⃣', fact: 'One — like one sun in the sky!' },
      { name: '2', emoji: '2️⃣', fact: 'Two — like two eyes on your face!' },
      { name: '3', emoji: '3️⃣', fact: 'Three — like three little pigs!' },
      { name: '5', emoji: '5️⃣', fact: 'Five — like five fingers on one hand!' },
    ],
  },
  {
    id: 'shapes',
    label: 'Shapes',
    icon: '🔷',
    items: [
      { name: 'Circle', emoji: '⭕', fact: 'A circle has no corners — like a wheel or the moon!' },
      { name: 'Square', emoji: '⬜', fact: 'A square has 4 equal sides — like a window!' },
      { name: 'Triangle', emoji: '🔺', fact: 'A triangle has 3 sides — like a slice of pizza!' },
      { name: 'Star', emoji: '⭐', fact: 'Stars twinkle in the night sky — and have 5 points!' },
    ],
  },
];

const Interactive = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  const cat = categories[activeCategory];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left — info */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Interactive Corner</p>
          <h2 className={styles.heading}>
            Learning Through<br />
            <span>Play & Discovery</span>
          </h2>
          <p className={styles.body}>
            Our interactive learning corner lets children explore colors, numbers, and shapes in a fun, engaging way. Tap any card to discover a fun fact!
          </p>

          {/* Category tabs */}
          <div className={styles.tabs}>
            {categories.map((c, i) => (
              <button
                key={c.id}
                className={`${styles.tab} ${activeCategory === i ? styles.tabActive : ''}`}
                onClick={() => { setActiveCategory(i); setActiveItem(null); }}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          {/* Fun fact display */}
          <div className={styles.factBox}>
            {activeItem !== null ? (
              <>
                <div className={styles.factEmoji}>{cat.items[activeItem].emoji}</div>
                <div>
                  <strong>{cat.items[activeItem].name}</strong>
                  <p>{cat.items[activeItem].fact}</p>
                </div>
              </>
            ) : (
              <p className={styles.factPrompt}>👆 Tap a card to learn something fun!</p>
            )}
          </div>
        </div>

        {/* Right — cards */}
        <div className={styles.right}>
          <div className={styles.cards}>
            {cat.items.map((item, i) => (
              <button
                key={i}
                className={`${styles.card} ${activeItem === i ? styles.cardActive : ''}`}
                onClick={() => setActiveItem(activeItem === i ? null : i)}
              >
                <span className={styles.cardEmoji}>{item.emoji}</span>
                <span className={styles.cardName}>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Decorative image */}
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=85&auto=format&fit=crop"
              alt="Children learning"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
