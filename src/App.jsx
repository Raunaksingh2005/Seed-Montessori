import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Facilities from './components/Facilities/Facilities';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import EnrollmentModal from './components/Modals/EnrollmentModal/EnrollmentModal';
import SuccessModal from './components/Modals/SuccessModal/SuccessModal';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setEnrollmentModalOpen(true);
      }, 3000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnrollmentSuccess = () => {
    setEnrollmentModalOpen(false);
    setSuccessModalOpen(true);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <Header onEnrollClick={() => setEnrollmentModalOpen(true)} />
      <Hero onEnrollClick={() => setEnrollmentModalOpen(true)} />
      <About />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
      <EnrollmentModal
        isOpen={enrollmentModalOpen}
        onClose={() => setEnrollmentModalOpen(false)}
        onSuccess={handleEnrollmentSuccess}
      />
      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      />
    </>
  );
}

export default App;
