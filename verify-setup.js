#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Beauty-At-Home setup...\n');

// Check if required files exist
const requiredFiles = [
  'README.md',
  'DEPLOYMENT_GUIDE.md',
  'setup.md',
  '.gitignore',
  'backend/package.json',
  'backend/server.js',
  'backend/env.example',
  'frontend/package.json',
  'frontend/vite.config.js',
  'frontend/env.example',
  'frontend/netlify.toml',
  'backend/railway.json',
  'backend/render.yaml'
];

let allFilesExist = true;

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n🔧 Checking package.json configurations:');

// Check backend package.json
try {
  const backendPkg = JSON.parse(fs.readFileSync('backend/package.json', 'utf8'));
  if (backendPkg.name === 'beauty-at-home-backend') {
    console.log('✅ Backend package.json configured');
  } else {
    console.log('❌ Backend package.json needs configuration');
  }
} catch (error) {
  console.log('❌ Backend package.json error:', error.message);
}

// Check frontend package.json
try {
  const frontendPkg = JSON.parse(fs.readFileSync('frontend/package.json', 'utf8'));
  if (frontendPkg.name === 'beauty-at-home-frontend') {
    console.log('✅ Frontend package.json configured');
  } else {
    console.log('❌ Frontend package.json needs configuration');
  }
} catch (error) {
  console.log('❌ Frontend package.json error:', error.message);
}

console.log('\n🌐 Checking deployment configurations:');

// Check if deployment files exist
const deploymentFiles = [
  'frontend/netlify.toml',
  'backend/railway.json',
  'backend/render.yaml'
];

deploymentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} ready for deployment`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

console.log('\n📋 Environment Variables Checklist:');
console.log('Backend (.env) - Required:');
console.log('  - MONGODB_URI');
console.log('  - TWILIO_ACCOUNT_SID');
console.log('  - TWILIO_AUTH_TOKEN');
console.log('  - TWILIO_PHONE_NUMBER');
console.log('  - SALON_OWNER_PHONE');
console.log('  - RAZORPAY_KEY_ID');
console.log('  - RAZORPAY_KEY_SECRET');
console.log('  - JWT_SECRET');

console.log('\nFrontend (.env) - Required:');
console.log('  - VITE_BACKEND_URL');

console.log('\n🚀 Ready for GitHub Push!');
console.log('\nNext steps:');
console.log('1. Create .env files from env.example');
console.log('2. Add your actual credentials');
console.log('3. Test locally');
console.log('4. Push to GitHub');
console.log('5. Deploy to Railway/Render and Netlify');

if (allFilesExist) {
  console.log('\n✅ All files are ready! Your project is prepared for deployment.');
} else {
  console.log('\n❌ Some files are missing. Please check the list above.');
}
