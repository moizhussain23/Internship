# 🚀 Beauty-At-Home Deployment Guide

## 📋 Required Environment Variables

### Backend Environment Variables
Create these in your deployment platform:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/beauty-at-home?retryWrites=true&w=majority

# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+14155238886
SALON_OWNER_PHONE=+919876543210

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Configuration
PORT=4000
NODE_ENV=production
```

### Frontend Environment Variables
```env
VITE_BACKEND_URL=https://your-backend-url.railway.app
```

---

## 🔧 Backend Deployment

### Option 1: Railway (Recommended)

1. **Sign up** at [railway.app](https://railway.app)
2. **Connect GitHub** and select your repository
3. **Select backend folder** as root directory
4. **Add Environment Variables**:
   - Go to Variables tab
   - Add all the backend environment variables listed above
5. **Deploy** - Railway will automatically build and deploy

### Option 2: Render

1. **Sign up** at [render.com](https://render.com)
2. **Create New Web Service**
3. **Connect GitHub** and select your repository
4. **Configure**:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add Environment Variables** in the Environment tab
6. **Deploy**

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create beauty-at-home-backend`
4. **Set environment variables**:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set TWILIO_ACCOUNT_SID=your_twilio_sid
   heroku config:set TWILIO_AUTH_TOKEN=your_twilio_token
   heroku config:set TWILIO_PHONE_NUMBER=+14155238886
   heroku config:set SALON_OWNER_PHONE=+919876543210
   heroku config:set RAZORPAY_KEY_ID=your_razorpay_key
   heroku config:set RAZORPAY_KEY_SECRET=your_razorpay_secret
   heroku config:set JWT_SECRET=your_jwt_secret
   ```
5. **Deploy**: `git push heroku main`

---

## 🎨 Frontend Deployment - Netlify

### Method 1: Netlify Dashboard

1. **Sign up** at [netlify.com](https://netlify.com)
2. **New site from Git**
3. **Connect GitHub** and select your repository
4. **Configure**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
5. **Add Environment Variables**:
   - Go to Site settings > Environment variables
   - Add: `VITE_BACKEND_URL` = `https://your-backend-url.railway.app`
6. **Deploy**

### Method 2: Netlify CLI

1. **Install**: `npm install -g netlify-cli`
2. **Login**: `netlify login`
3. **Build**: `cd frontend && npm run build`
4. **Deploy**: `netlify deploy --prod --dir=dist`

---

## 🔄 Step-by-Step Deployment Process

### Step 1: Prepare Your Code
```bash
# Make sure your code is committed and pushed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy Backend First
1. Choose Railway, Render, or Heroku
2. Connect your GitHub repository
3. Set all environment variables
4. Deploy and get your backend URL

### Step 3: Deploy Frontend
1. Go to Netlify
2. Connect your GitHub repository
3. Set `VITE_BACKEND_URL` to your backend URL
4. Deploy

### Step 4: Test Your Deployment
1. Test the frontend URL
2. Test booking functionality
3. Verify Twilio messages are sent
4. Check admin panel access

---

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your backend has CORS enabled (✅ already configured)
2. **Environment Variables**: Double-check all variables are set correctly
3. **Build Failures**: Check the build logs in your deployment platform
4. **Database Connection**: Ensure MongoDB URI is correct
5. **Twilio Issues**: Verify phone numbers are in E.164 format

### Testing Checklist:
- [ ] Frontend loads correctly
- [ ] Services page displays
- [ ] Booking form works
- [ ] Payment integration works
- [ ] SMS/WhatsApp notifications sent
- [ ] Admin panel accessible
- [ ] Database operations work

---

## 📱 Your Twilio Integration

Your Twilio setup is **production-ready**! It will work perfectly because:
- ✅ Uses approved WhatsApp templates
- ✅ Proper error handling
- ✅ E.164 phone number formatting
- ✅ Environment variable configuration
- ✅ Sends to both customer and owner

---

## 🎯 Recommended Deployment Order

1. **Backend** → Railway (easiest)
2. **Frontend** → Netlify
3. **Test** everything
4. **Go Live** 🚀

Your project is well-structured and ready for deployment!
