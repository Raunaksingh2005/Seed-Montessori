import React, { useEffect } from 'react';
import Button from '../../common/Button/Button';
import styles from './SuccessModal.module.css';

const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <div className={styles.successIcon}>
          <i className="fas fa-check-circle"></i>
        </div>
        <h3>Registration Successful!</h3>
        <p>Thank you for your interest in Seed Montessori. We'll contact you within 24 hours.</p>
        <Button variant="primary" onClick={onClose}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SuccessModal;
