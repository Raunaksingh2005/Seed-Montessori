// Firebase Cloud Functions for Email Notifications
// Deploy these to get email alerts when forms are submitted

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sunainamalhotra80@gmail.com', // Your email
    pass: 'your-app-password' // You need to generate App Password in Google Account
  }
});

// Send email when enrollment is submitted
exports.sendEnrollmentEmail = functions.firestore
  .document('enrollments/{enrollmentId}')
  .onCreate(async (snapshot, context) => {
    const enrollmentData = snapshot.data();
    
    const mailOptions = {
      from: 'Seed Montessori <sunainamalhotra80@gmail.com>',
      to: 'sunainamalhotra80@gmail.com', // Your email
      subject: '🎓 New Enrollment Request - Seed Montessori',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6A8B4A, #5A7740); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">🎓 New Enrollment Request</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h2 style="color: #6A8B4A;">Parent Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Parent Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.parentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.phone}</td>
              </tr>
            </table>
            
            <h2 style="color: #6A8B4A;">Child Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Child Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.childName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Age:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.childAge} years</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Program:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${enrollmentData.program}</td>
              </tr>
            </table>
            
            ${enrollmentData.message ? `
            <h2 style="color: #6A8B4A;">Additional Information</h2>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              ${enrollmentData.message}
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Submitted:</strong> ${new Date(enrollmentData.createdAt?.toDate() || new Date()).toLocaleString()}
              </p>
              <p style="margin: 10px 0 0 0;">
                <a href="https://console.firebase.google.com/project/seed-montessori/firestore/data/~2Fenrollments~2F${context.params.enrollmentId}" 
                   style="background: #6A8B4A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
                  View in Firebase Console
                </a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Enrollment email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

// Send email when contact form is submitted
exports.sendContactEmail = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snapshot, context) => {
    const contactData = snapshot.data();
    
    const mailOptions = {
      from: 'Seed Montessori <sunainamalhotra80@gmail.com>',
      to: 'sunainamalhotra80@gmail.com', // Your email
      subject: '📧 New Contact Message - Seed Montessori',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6A8B4A, #5A7740); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">📧 New Contact Message</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h2 style="color: #6A8B4A;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contactData.email}</td>
              </tr>
              ${contactData.phone ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contactData.phone}</td>
              </tr>
              ` : ''}
            </table>
            
            <h2 style="color: #6A8B4A;">Message</h2>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd; margin-bottom: 20px;">
              ${contactData.message}
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Submitted:</strong> ${new Date(contactData.createdAt?.toDate() || new Date()).toLocaleString()}
              </p>
              <p style="margin: 10px 0 0 0;">
                <a href="https://console.firebase.google.com/project/seed-montessori/firestore/data/~2Fcontacts~2F${context.params.contactId}" 
                   style="background: #6A8B4A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
                  View in Firebase Console
                </a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Contact email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

// SMS Notification (Optional - requires Twilio)
exports.sendSMSNotification = functions.firestore
  .document('enrollments/{enrollmentId}')
  .onCreate(async (snapshot, context) => {
    const enrollmentData = snapshot.data();
    
    // Uncomment and configure Twilio for SMS
    /*
    const accountSid = 'your-twilio-sid';
    const authToken = 'your-twilio-token';
    const client = require('twilio')(accountSid, authToken);
    
    await client.messages.create({
      body: `🎓 New enrollment: ${enrollmentData.parentName} for ${enrollmentData.childName} (${enrollmentData.program})`,
      from: '+1234567890', // Your Twilio number
      to: '+919592080029' // Your phone number
    });
    */
    
    console.log('SMS would be sent to: +919592080029');
  });