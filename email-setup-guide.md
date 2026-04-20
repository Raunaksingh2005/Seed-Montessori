# 📧 Email Notification Setup for Seed Montessori

## **Your Email:** `sunainamalhotra80@gmail.com`

## **Step 1: Generate Google App Password**

1. **Go to**: [myaccount.google.com/security](https://myaccount.google.com/security)
2. **Enable 2-Step Verification** (if not already)
3. **Go to "App passwords"**
4. **Generate new password**:
   - App: **Mail**
   - Device: **Other** → Name: **Seed Montessori**
5. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

## **Step 2: Update Firebase Functions**

Replace `'your-app-password'` with your **actual App Password** in `firebase-functions.js`:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sunainamalhotra80@gmail.com', // Your email
    pass: 'your-actual-app-password-here' // ← PASTE YOUR APP PASSWORD HERE
  }
});
```

## **Step 3: Deploy Firebase Functions**

### **Option A: Using Firebase CLI (Recommended)**

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize Firebase in your project
firebase init functions

# 4. Select JavaScript
# 5. Don't overwrite existing files
# 6. Install dependencies? Yes

# 7. Copy the functions code to functions/index.js
# 8. Install nodemailer
cd functions
npm install nodemailer

# 9. Deploy functions
firebase deploy --only functions
```

### **Option B: Quick Deploy Script**

Create `deploy-functions.sh`:

```bash
#!/bin/bash
echo "📧 Deploying Email Notifications..."

# Create functions directory
mkdir -p functions

# Copy functions file
cp firebase-functions.js functions/index.js

# Initialize Firebase
firebase init functions --project seed-montessori

# Install dependencies
cd functions
npm install firebase-functions firebase-admin nodemailer

# Deploy
firebase deploy --only functions

echo "✅ Email notifications deployed!"
echo "📧 You'll receive emails at: sunainamalhotra80@gmail.com"
```

## **Step 4: Test Email Notifications**

1. **Submit a test enrollment form** in your React app
2. **Check your email** `sunainamalhotra80@gmail.com`
3. **You should receive**:
   - **Subject**: `🎓 New Enrollment Request - Seed Montessori`
   - **Email with all form details**

## **Email Preview:**

**Enrollment Email:**
```
🎓 New Enrollment Request - Seed Montessori

Parent Information:
• Parent Name: [Name]
• Email: [Email]
• Phone: [Phone]

Child Information:
• Child Name: [Name]
• Age: [Age]
• Program: [Program]

Submitted: [Timestamp]
```

**Contact Email:**
```
📧 New Contact Message - Seed Montessori

Contact Information:
• Name: [Name]
• Email: [Email]
• Phone: [Phone]

Message: [Message]

Submitted: [Timestamp]
```

## **Troubleshooting:**

### **If emails don't arrive:**

1. **Check App Password**:
   - Make sure it's 16 characters
   - No spaces in the password field
   - Correct email: `sunainamalhotra80@gmail.com`

2. **Check Firebase Functions Logs**:
   ```bash
   firebase functions:log
   ```

3. **Test email manually**:
   ```javascript
   // Test email function
   transporter.sendMail({
     from: 'Seed Montessori <sunainamalhotra80@gmail.com>',
     to: 'sunainamalhotra80@gmail.com',
     subject: 'Test Email',
     text: 'Test email from Seed Montessori'
   });
   ```

## **Alternative: Use Email Service (Easier)**

If Google App Password is complicated, use **SendGrid** or **Mailgun**:

### **SendGrid Setup:**
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: 'your-sendgrid-api-key'
  }
});
```

## **Quick Start Commands:**

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Initialize functions
firebase init functions

# 4. Deploy
firebase deploy --only functions
```

## **Support:**

If you need help:
1. **Email issues**: Check Google App Password
2. **Deployment issues**: Run `firebase functions:log`
3. **No emails**: Test with simple email first

## **✅ Once Deployed:**

- Every enrollment → Email to `sunainamalhotra80@gmail.com`
- Every contact form → Email to `sunainamalhotra80@gmail.com`
- Real-time notifications
- All form details in email

**You'll know immediately when someone submits a form!** 🎉