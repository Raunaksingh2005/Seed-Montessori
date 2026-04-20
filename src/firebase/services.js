import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/<[^>]*>/g, '');
};

// Submit enrollment form
export const submitEnrollment = async (formData) => {
  try {
    const sanitizedData = {
      parentName: sanitizeInput(formData.parentName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      childName: sanitizeInput(formData.childName),
      childAge: parseInt(formData.childAge),
      program: sanitizeInput(formData.program),
      message: sanitizeInput(formData.message),
      status: 'new',
      type: 'enrollment',
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'enrollments'), sanitizedData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting enrollment:', error);
    throw new Error('Failed to submit enrollment. Please try again.');
  }
};

// Submit contact form
export const submitContact = async (formData) => {
  try {
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      message: sanitizeInput(formData.message),
      type: 'contact',
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'contacts'), sanitizedData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
