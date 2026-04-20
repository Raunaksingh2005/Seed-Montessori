// Test Email Setup for Seed Montessori
// Run this to test if email notifications will work

const nodemailer = require('nodemailer');

console.log('📧 Testing Email Setup for Seed Montessori');
console.log('📧 Email: sunainamalhotra80@gmail.com');
console.log('');

// Test configuration
const testConfig = {
  service: 'gmail',
  auth: {
    user: 'sunainamalhotra80@gmail.com',
    pass: 'YOUR_APP_PASSWORD_HERE' // ← Replace with your App Password
  }
};

console.log('🔧 Configuration:');
console.log('• Service: Gmail');
console.log('• Email: sunainamalhotra80@gmail.com');
console.log('• App Password: [To be added]');
console.log('');

console.log('📋 To set up email notifications:');
console.log('');
console.log('1. Generate Google App Password:');
console.log('   • Go to: https://myaccount.google.com/security');
console.log('   • Enable 2-Step Verification');
console.log('   • Go to "App passwords"');
console.log('   • Select "Mail" as app');
console.log('   • Select "Other" as device → Name: "Seed Montessori"');
console.log('   • Copy the 16-character password');
console.log('');
console.log('2. Update the password above');
console.log('');
console.log('3. Test email:');
console.log('   node test-email-setup.js');
console.log('');
console.log('4. If test succeeds, deploy Firebase Functions:');
console.log('   ./deploy-email-notifications.sh');
console.log('');

// Test email function
async function testEmail() {
  console.log('🚀 Testing email connection...');
  
  try {
    const transporter = nodemailer.createTransport(testConfig);
    
    // Verify connection
    await transporter.verify();
    console.log('✅ Email server connection successful');
    
    // Send test email
    const testEmail = {
      from: 'Seed Montessori <sunainamalhotra80@gmail.com>',
      to: 'sunainamalhotra80@gmail.com',
      subject: '✅ Test Email - Seed Montessori Notifications',
      text: 'This is a test email to verify email notifications are working for Seed Montessori.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6A8B4A, #5A7740); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">✅ Test Successful!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h2 style="color: #6A8B4A;">Seed Montessori Email Notifications</h2>
            <p>This test confirms that email notifications are properly configured.</p>
            <p>When someone submits a form, you'll receive:</p>
            <ul>
              <li><strong>🎓 Enrollment forms</strong> → Detailed parent & child information</li>
              <li><strong>📧 Contact forms</strong> → Contact details and message</li>
            </ul>
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Test Time:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `
    };
    
    const info = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log('');
    console.log('📬 Check your inbox: sunainamalhotra80@gmail.com');
    console.log('');
    console.log('🎉 Email notifications are ready!');
    console.log('Next: Deploy Firebase Functions using deploy-email-notifications.sh');
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    console.log('');
    console.log('🔧 Troubleshooting:');
    console.log('1. Make sure 2-Step Verification is enabled');
    console.log('2. Generate correct App Password (16 characters)');
    console.log('3. Check if password has spaces (remove them)');
    console.log('4. Try using "Less secure apps" option (not recommended)');
    console.log('');
    console.log('📚 Help: https://support.google.com/accounts/answer/185833');
  }
}

// Run test if password is provided
if (process.argv[2] === '--test' && process.argv[3]) {
  testConfig.auth.pass = process.argv[3];
  testEmail();
} else {
  console.log('💡 Usage:');
  console.log('  node test-email-setup.js --test YOUR_APP_PASSWORD');
  console.log('');
  console.log('Example:');
  console.log('  node test-email-setup.js --test "abcd efgh ijkl mnop"');
}

module.exports = { testConfig, testEmail };