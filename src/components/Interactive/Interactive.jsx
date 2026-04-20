import React, { useState } from 'react';
import Container from '../common/Container/Container';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import Button from '../common/Button/Button';
import styles from './Interactive.module.css';

const Interactive = () => {
  const [message, setMessage] = useState({
    title: 'Click on our friend to learn something new!',
    content: ''
  });

  const learningContent = {
    colors: [
      { name: "Red", icon: "🔴", example: "Like an apple!" },
      { name: "Blue", icon: "🔵", example: "Like the sky!" },
      { name: "Yellow", icon: "🟡", example: "Like the sun!" },
      { name: "Green", icon: "🟢", example: "Like grass!" }
    ],
    numbers: [
      { number: "1", icon: "1️⃣", example: "One little finger" },
      { number: "2", icon: "2️⃣", example: "Two bright eyes" },
      { number: "3", icon: "3️⃣", example: "Three little kittens" },
      { number: "4", icon: "4️⃣", example: "Four seasons" }
    ],
    shapes: [
      { name: "Circle", icon: "⭕", example: "Like a ball!" },
      { name: "Square", icon: "⬜", example: "Like a window!" },
      { name: "Triangle", icon: "🔺", example: "Like a slice of pizza!" },
      { name: "Star", icon: "⭐", example: "Like in the sky!" }
    ]
  };

  const showLearningContent = (category) => {
    const content = learningContent[category];
    const randomItem = content[Math.floor(Math.random() * content.length)];
    
    let title = '';
    let text = '';
    
    switch(category) {
      case 'colors':
        title = 'Let\'s Learn Colors!';
        text = `${randomItem.icon} ${randomItem.name} - ${randomItem.example}`;
        break;
      case 'numbers':
        title = 'Let\'s Count!';
        text = `${randomItem.icon} Number ${randomItem.number} - ${randomItem.example}`;
        break;
      case 'shapes':
        title = 'Let\'s Learn Shapes!';
        text = `${randomItem.icon} ${randomItem.name} - ${randomItem.example}`;
        break;
      default:
        break;
    }
    
    setMessage({ title, content: text });
  };

  const showRandomLearning = () => {
    const categories = ['colors', 'numbers', 'shapes'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    showLearningContent(randomCategory);
  };

  return (
    <section className={styles.interactive}>
      <Container>
        <SectionHeader 
          title="Interactive Learning"
          subtitle="Tap on our friendly character to see what we're learning today!"
        />

        <div className={styles.interactiveContainer}>
          <div className={styles.kidCharacter} onClick={showRandomLearning}>
            <i className="fas fa-child"></i>
          </div>

          <div className={styles.interactiveMessage}>
            <h3>{message.title}</h3>
            {message.content && (
              <>
                <p className={styles.messageContent}>{message.content}</p>
                <p>Click again to learn more!</p>
              </>
            )}
          </div>

          <div className={styles.interactiveButtons}>
            <Button variant="primary" onClick={() => showLearningContent('colors')}>
              <i className="fas fa-palette"></i>
              <span>Learn Colors</span>
            </Button>
            <Button variant="secondary" onClick={() => showLearningContent('numbers')}>
              <i className="fas fa-sort-numeric-up"></i>
              <span>Learn Numbers</span>
            </Button>
            <Button variant="primary" onClick={() => showLearningContent('shapes')}>
              <i className="fas fa-shapes"></i>
              <span>Learn Shapes</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Interactive;
