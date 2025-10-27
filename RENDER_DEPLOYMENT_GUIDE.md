# 🚀 Beauty-At-Home Render Deployment Guide

## 📋 Prerequisites

### Required Accounts:
1. **GitHub Account** - For code repository
2. **Render Account** - For backend hosting
3. **MongoDB Atlas** - For database
4. **Twilio Account** - For WhatsApp/SMS
5. **Razorpay Account** - For payments
6. **Netlify Account** - For frontend hosting

### Required Credentials:
- MongoDB Atlas connection string
- Twilio Account SID and Auth Token
- Razorpay Key ID and Secret
- JWT Secret key

---

## 🔧 Step 1: Prepare Your Code

### 1.1 Create Environment Files

**Backend (.env):**
```bash
cd backend
cp env.example .env
```

Edit `backend/.env` with your actual credentials:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/beauty-at-home?retryWrites=true&w=majority
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+14155238886
SALON_OWNER_PHONE=+919876543210
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_super_secret_jwt_key_here
PORT=4000
NODE_ENV=production
```

**Frontend (.env):**
```bash
cd frontend
cp env.example .env
```

Edit `frontend/.env` (keep localhost for now):
```env
VITE_BACKEND_URL=http://localhost:4000
```

### 1.2 Test Locally
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in new terminal)
cd frontend
npm install
npm run dev
```

---

## 📤 Step 2: Push to GitHub

### 2.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Ready for Render deployment"
```

### 2.2 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `Beauty-At-Home`
4. Make it public
5. Don't initialize with README (you already have files)

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/yourusername/Beauty-At-Home.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 3: Deploy Backend to Render

### 3.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your GitHub account

### 3.2 Deploy Backend Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `beauty-at-home-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

### 3.3 Add Environment Variables
In the Render dashboard, go to your service → Environment:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/beauty-at-home?retryWrites=true&w=majority
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+14155238886
SALON_OWNER_PHONE=+919876543210
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=production
```

### 3.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Get your backend URL: `https://beauty-at-home-backend.onrender.com`

---

## 🎨 Step 4: Deploy Frontend to Netlify

### 4.1 Update Frontend Environment
Update `frontend/.env`:
```env
VITE_BACKEND_URL=https://beauty-at-home-backend.onrender.com
```

### 4.2 Push Updated Code
```bash
git add .
git commit -m "Update frontend with production backend URL"
git push origin main
```

### 4.3 Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repository
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
5. Add environment variable:
   - Key: `VITE_BACKEND_URL`
   - Value: `https://beauty-at-home-backend.onrender.com`
6. Deploy

---

## ✅ Step 5: Test Your Deployment

### 5.1 Test Backend
- Visit: `https://beauty-at-home-backend.onrender.com`
- Should show: "Server Works fine!"

### 5.2 Test Frontend
- Visit your Netlify URL
- Test booking functionality
- Verify payments work
- Check WhatsApp notifications

### 5.3 Test Admin Panel
- Go to: `https://your-netlify-url.netlify.app/admin/login`
- Login with admin credentials
- Verify booking management works

---

## 🔧 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Render logs
   - Verify all dependencies are in package.json
   - Ensure build commands are correct

2. **Environment Variables**
   - Double-check all variables are set
   - Verify no typos in variable names
   - Ensure values don't have extra spaces

3. **Database Connection**
   - Verify MongoDB URI is correct
   - Check if IP is whitelisted in MongoDB Atlas
   - Ensure database name is correct

4. **CORS Issues**
   - Backend already has CORS enabled
   - Verify frontend URL is correct

5. **Twilio Issues**
   - Verify phone numbers are in E.164 format
   - Check if Twilio account is active
   - Ensure templates are approved

---

## 📱 Your Twilio Integration

Your WhatsApp integration will work perfectly because:
- ✅ Uses approved message templates
- ✅ Proper E.164 phone formatting
- ✅ Environment variable configuration
- ✅ Error handling implemented

---

## 🎯 Quick Commands Summary

```bash
# 1. Prepare and test locally
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev

# 2. Push to GitHub
git add .
git commit -m "Ready for Render deployment"
git push origin main

# 3. Deploy backend on Render
# (Use Render dashboard)

# 4. Update frontend with backend URL
# Edit frontend/.env with Render URL
git add . && git commit -m "Update backend URL" && git push

# 5. Deploy frontend on Netlify
# (Use Netlify dashboard)
```

---

## 🚀 You're Ready!

Your Beauty-At-Home application will be live with:
- ✅ Professional backend on Render
- ✅ Beautiful frontend on Netlify
- ✅ Working payment integration
- ✅ WhatsApp notifications
- ✅ Admin panel
- ✅ MongoDB database

**Happy Deploying! 🎉**
