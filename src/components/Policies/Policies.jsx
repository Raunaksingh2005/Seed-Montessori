import React, { useState } from 'react';
import styles from './Policies.module.css';

const policies = [
  {
    id: 'admission',
    icon: 'fa-file-alt',
    label: 'Admission',
    color: '#e8f5ec',
    accent: '#4a7c59',
    sections: [
      {
        title: 'Eligibility by Age',
        items: ['Toddler: 18 months – 3 years', 'Preschool: 3 – 4 years', 'Pre-K: 4 – 5 years'],
      },
      {
        title: 'Required Documents',
        items: ['Birth certificate (original + copy)', 'Immunization records', 'Passport-size photographs (4)', 'Parent/guardian ID proof', 'Address proof'],
      },
      {
        title: 'Enrollment Steps',
        items: ['Submit inquiry form online or in person', 'Schedule a school tour & parent meeting', 'Complete enrollment application', 'Submit documents & pay registration fee', 'Receive confirmation & welcome kit'],
      },
    ],
  },
  {
    id: 'attendance',
    icon: 'fa-calendar-check',
    label: 'Attendance',
    color: '#fff8e8',
    accent: '#b07d2e',
    sections: [
      {
        title: 'Attendance Requirements',
        items: ['Minimum 80% attendance required', 'Regular attendance supports developmental continuity', 'Attendance records maintained monthly'],
      },
      {
        title: 'Absence Reporting',
        items: ['Notify school by 8:30 AM on day of absence', 'Call or WhatsApp: 9592080029 / 9592080073', 'Email: info.theseedmontessorischool@gmail.com', 'Medical certificate required for 3+ consecutive days'],
      },
    ],
  },
  {
    id: 'health',
    icon: 'fa-shield-alt',
    label: 'Health & Safety',
    color: '#fce8f0',
    accent: '#c0436a',
    sections: [
      {
        title: 'Immunization',
        items: ['Up-to-date immunization records mandatory', 'Records must be submitted before first day', 'Annual flu vaccine strongly recommended'],
      },
      {
        title: 'Illness Policy',
        items: ['Child must be fever-free for 24 hours before return', 'No school with active vomiting or diarrhea', 'Notify school of any contagious illness immediately', 'School will contact parents if child becomes ill'],
      },
      {
        title: 'Campus Safety',
        items: ['100% nut-free campus', 'No outside food without prior approval', 'All visitors must sign in at reception', 'CCTV monitoring throughout campus'],
      },
    ],
  },
  {
    id: 'fees',
    icon: 'fa-rupee-sign',
    label: 'Fees',
    color: '#eef2ff',
    accent: '#4a5fa0',
    sections: [
      {
        title: 'Tuition Structure',
        items: ['Monthly tuition billed on the 1st of each month', 'Annual registration fee (non-refundable)', 'Sibling discount available — contact office'],
      },
      {
        title: 'Payment Plans',
        items: ['Monthly, quarterly, or annual payment options', 'Online payment via bank transfer or UPI', 'Late payment fee applies after 10th of month'],
      },
      {
        title: 'Additional Fees',
        items: ['Activity & material fee (annual)', 'Uniform set (optional, available at school)', 'Field trip fees communicated in advance'],
      },
    ],
  },
];

const Policies = () => {
  const [active, setActive] = useState('admission');
  const current = policies.find(p => p.id === active);

  return (
    <section id="policies" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>School Policies</p>
          <h2 className={styles.heading}>
            Transparent Policies for<br />
            <span>Peace of Mind</span>
          </h2>
          <p className={styles.sub}>We believe informed parents are our best partners. Here's everything you need to know.</p>
        </div>

        <div className={styles.layout}>
          {/* Sidebar tabs */}
          <div className={styles.sidebar}>
            {policies.map(p => (
              <button
                key={p.id}
                className={`${styles.sideTab} ${active === p.id ? styles.sideTabActive : ''}`}
                style={active === p.id ? { borderLeftColor: p.accent, color: p.accent, background: p.color } : {}}
                onClick={() => setActive(p.id)}
              >
                <i className={`fas ${p.icon}`}></i>
                {p.label}
                <i className="fas fa-chevron-right" style={{ marginLeft: 'auto', fontSize: '0.7rem', opacity: 0.5 }}></i>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className={styles.content} key={active}>
            <div className={styles.contentHeader} style={{ background: current.color }}>
              <div className={styles.contentIcon} style={{ color: current.accent }}>
                <i className={`fas ${current.icon}`}></i>
              </div>
              <h3 style={{ color: current.accent }}>{current.label} Policy</h3>
            </div>

            <div className={styles.sections}>
              {current.sections.map((s, i) => (
                <div key={i} className={styles.policySection}>
                  <h4 className={styles.sectionTitle} style={{ color: current.accent }}>
                    <i className="fas fa-circle" style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}></i>
                    {s.title}
                  </h4>
                  <ul className={styles.policyList}>
                    {s.items.map((item, j) => (
                      <li key={j}>
                        <i className="fas fa-check-circle" style={{ color: current.accent }}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;
