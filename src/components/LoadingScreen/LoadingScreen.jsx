import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loaderLogo}>
        <div className={styles.logoSpinner}>
          <i className="fas fa-seedling"></i>
        </div>
        <h2>Seed Montessori</h2>
        <p>Early Learning Centre</p>
        <div className={styles.dots}>
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
