# Seed Montessori - React Application

A modern, secure, and mobile-optimized React application for Seed Montessori School with Firebase backend integration.

## Features

- **Modern React Architecture**: Component-based structure with hooks and CSS modules
- **Firebase Integration**: Secure backend with Firestore for data storage
- **Mobile Optimized**: Fully responsive design optimized for all devices including iPhone
- **Enhanced Security**: 
  - Environment variables for sensitive data
  - Input sanitization to prevent XSS attacks
  - CAPTCHA verification for form submissions
  - Secure Firebase security rules
- **Smooth Animations**: All original animations preserved with CSS and React hooks
- **Accessibility**: ARIA labels and semantic HTML for better accessibility

## Project Structure

```
seed-montessori/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Facilities/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Interactive/
│   │   ├── LoadingScreen/
│   │   ├── Modals/
│   │   │   ├── EnrollmentModal/
│   │   │   └── SuccessModal/
│   │   ├── Programs/
│   │   └── common/
│   │       ├── Button/
│   │       ├── Container/
│   │       └── SectionHeader/
│   ├── firebase/
│   │   ├── config.js
│   │   └── services.js
│   ├── hooks/
│   │   ├── useCounters.js
│   │   └── useIntersectionObserver.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Setup Instructions

### 1. Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### 2. Installation

```bash
# Clone the repository
git clone <repository-url>
cd seed-montessori

# Install dependencies
npm install
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Firestore Database:
   - Go to Firestore Database
   - Click "Create database"
   - Start in production mode
   - Choose your location

4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Click on Web app icon (</>)
   - Copy the configuration values

5. Create `.env` file in the root directory:

```bash
cp .env.example .env
```

6. Add your Firebase configuration to `.env`:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Firebase Security Rules

Set up Firestore security rules to protect your data:

1. Go to Firestore Database > Rules
2. Add the following rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Enrollments collection - write only
    match /enrollments/{document} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll([
        'parentName', 'email', 'phone', 'childName', 
        'childAge', 'program', 'createdAt'
      ]) 
      && request.resource.data.parentName is string
      && request.resource.data.email is string
      && request.resource.data.phone is string
      && request.resource.data.childName is string
      && request.resource.data.childAge is int
      && request.resource.data.childAge >= 2
      && request.resource.data.childAge <= 6
      && request.resource.data.program in ['toddler', 'primary', 'extended'];
    }
    
    // Contacts collection - write only
    match /contacts/{document} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll([
        'name', 'email', 'message', 'createdAt'
      ])
      && request.resource.data.name is string
      && request.resource.data.email is string
      && request.resource.data.message is string;
    }
  }
}
```

### 5. Run the Application

```bash
# Development mode
npm start

# Build for production
npm run build

# The app will open at http://localhost:3000
```

## Security Best Practices

### Environment Variables
- Never commit `.env` file to version control
- Use `.env.example` as a template
- Keep Firebase API keys secure

### Input Sanitization
- All user inputs are sanitized before submission
- HTML tags are stripped to prevent XSS attacks
- Email validation on both client and server side

### CAPTCHA
- Simple CAPTCHA implementation for bot prevention
- Can be upgraded to Google reCAPTCHA v3 for enhanced security

### Firebase Security
- Firestore rules prevent unauthorized read access
- Write operations are validated for required fields
- Data types and ranges are enforced

## Mobile Optimization

- Responsive design using CSS Grid and Flexbox
- Touch-friendly interface elements
- Optimized for iPhone and all mobile devices
- Viewport meta tag for proper scaling
- Mobile-first approach

## Performance Optimization

- Code splitting with React.lazy (can be added)
- CSS modules for scoped styling
- Optimized images and icons via Font Awesome CDN
- Minimal bundle size

## Deployment

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Select Hosting
# Choose your project
# Set build directory to 'build'
# Configure as single-page app: Yes

# Build the app
npm run build

# Deploy
firebase deploy
```

### Other Hosting Options

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop build folder or connect repo
- **AWS S3 + CloudFront**: For scalable hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Firebase Connection Issues
- Verify `.env` file has correct values
- Check Firebase project is active
- Ensure Firestore is enabled

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Styling Issues
- Ensure CSS modules are properly imported
- Check Font Awesome CDN is loading

## Future Enhancements

- [ ] Add Google reCAPTCHA v3
- [ ] Implement Firebase Authentication for admin panel
- [ ] Add image upload for gallery
- [ ] Email notifications via Firebase Functions
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## License

Copyright © 2025 The Seed Montessori School. All rights reserved.

## Support

For support, email info@theseedmontessori.in or call +91 9592080029
