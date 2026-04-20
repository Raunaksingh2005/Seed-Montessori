import React, { useState, useEffect } from 'react';
import { submitEnrollment } from '../../../firebase/services';
import styles from './EnrollmentModal.module.css';

const EnrollmentModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    message: ''
  });
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
    setCaptchaInput('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (captchaInput !== captcha) {
      setError('CAPTCHA verification failed. Please try again.');
      generateCaptcha();
      return;
    }

    setLoading(true);

    try {
      await submitEnrollment(formData);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        program: '',
        message: ''
      });
      setCaptchaInput('');
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Begin Your Child's Journey</h3>
          <button className={styles.modalClose} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.formSectionHeader}>
            <h3>Child Registration</h3>
            <p>Please provide your information to begin the enrollment process</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="parentName">Parent's Full Name</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  placeholder="Enter full name"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="childName">Child's Name</label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  placeholder="Enter child's name"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="childAge">Child's Age</label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  min="2"
                  max="6"
                  placeholder="Enter age"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="program">Program Interest</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select program</option>
                  <option value="toddler">Toddler Program (2-3 years)</option>
                  <option value="primary">Primary Program (3-6 years)</option>
                  <option value="extended">Extended Care</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Tell us about your child's interests, needs, or any special requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.captchaSection}>
              <div className={styles.captchaHeader}>
                <h4>Security Check</h4>
                <p>Please verify you're human by entering the code below</p>
              </div>
              <div className={styles.captchaContainer}>
                <div className={styles.captchaDisplay}>{captcha}</div>
                <div className={styles.captchaInput}>
                  <input
                    type="text"
                    placeholder="Enter the code above"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                  />
                  <button type="button" onClick={generateCaptcha} title="Refresh CAPTCHA">
                    <i className="fas fa-redo"></i>
                  </button>
                </div>
              </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button type="submit" className={`${styles.btnSubmit} ${loading ? styles.loading : ''}`} disabled={loading}>
              <span className={styles.btnText}>Submit Registration</span>
              {loading && (
                <div className={styles.btnLoader}>
                  <div className={styles.loaderSpinner}></div>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
