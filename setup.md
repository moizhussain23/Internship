# 🚀 Beauty-At-Home Setup Guide

## 📋 Pre-Deployment Checklist

### ✅ Required Accounts & Services

1. **GitHub Account** - For code repository
2. **MongoDB Atlas** - Database hosting
3. **Twilio Account** - WhatsApp/SMS notifications
4. **Razorpay Account** - Payment processing
5. **Railway/Render Account** - Backend hosting
6. **Netlify Account** - Frontend hosting

### 🔑 Required Credentials

#### MongoDB Atlas
- Create cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
- Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/beauty-at-home`

#### Twilio
- Sign up at [twilio.com](https://twilio.com)
- Get Account SID and Auth Token
- Verify your phone number
- Get WhatsApp sandbox number: `+14155238886`

#### Razorpay
- Create account at [razorpay.com](https://razorpay.com)
- Get Key ID and Key Secret
- Enable test mode for development

---

## 🛠️ Local Development Setup

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/Beauty-At-Home.git
cd Beauty-At-Home
```

### 2. Backend Setup
```bash
cd backend
npm install
cp env.example .env
# Edit .env with your actual credentials
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
cp env.example .env
# Edit .env with your backend URL
npm run dev
```

---

## 🌐 Production Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit - Ready for deployment"
git push origin main
```

### Step 2: Deploy Backend
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Select backend folder
4. Add all environment variables
5. Deploy

### Step 3: Deploy Frontend
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `frontend/dist`
5. Add environment variable: `VITE_BACKEND_URL`
6. Deploy

---

## 🔧 Environment Variables Reference

### Backend (.env)
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

### Frontend (.env)
```env
VITE_BACKEND_URL=https://your-backend-url.railway.app
```

---

## 🧪 Testing Checklist

- [ ] Frontend loads correctly
- [ ] Services page displays
- [ ] Booking form works
- [ ] Payment integration works
- [ ] WhatsApp notifications sent
- [ ] Admin panel accessible
- [ ] Database operations work

---

## 🚨 Important Notes

1. **Never commit .env files** - They contain sensitive information
2. **Use production URLs** - Update VITE_BACKEND_URL after backend deployment
3. **Test thoroughly** - Verify all features work in production
4. **Monitor logs** - Check deployment platform logs for errors

---

## 📞 Support

If you encounter any issues:
1. Check the deployment logs
2. Verify all environment variables are set
3. Ensure all services are properly configured
4. Create an issue in the GitHub repository

**Happy Deploying! 🚀**
