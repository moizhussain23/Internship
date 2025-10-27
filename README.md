# 💄 Beauty-At-Home

A full-stack beauty salon booking application with integrated payment processing and WhatsApp notifications.

## 🌟 Features

- **Service Booking**: Browse and book beauty services
- **Payment Integration**: Secure payments with Razorpay
- **WhatsApp Notifications**: Automated booking confirmations via Twilio
- **Admin Panel**: Manage bookings and appointments
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live booking status updates

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Razorpay Payment Gateway
- Twilio WhatsApp API

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Twilio account
- Razorpay account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Beauty-At-Home.git
   cd Beauty-At-Home
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp env.example .env
   # Edit .env with your actual credentials
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp env.example .env
   # Edit .env with your backend URL
   npm run dev
   ```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+14155238886
SALON_OWNER_PHONE=+919876543210
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
PORT=4000
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

## 📱 API Endpoints

### Bookings
- `POST /bookings` - Create new booking
- `GET /bookings` - Get all bookings (Admin)
- `PUT /bookings/:id` - Update booking status

### Payments
- `POST /create-order` - Create Razorpay order
- `POST /verifyPayment` - Verify payment

### Admin
- `POST /admin/login` - Admin login
- `GET /admin/bookings` - Get admin bookings

### SMS/WhatsApp
- `POST /send-sms-notifications` - Send booking notifications

## 🚀 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy
1. **Backend**: Deploy to Railway/Render/Heroku
2. **Frontend**: Deploy to Netlify
3. **Database**: MongoDB Atlas
4. **SMS**: Twilio WhatsApp API

## 📋 Project Structure

```
Beauty-At-Home/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔐 Admin Access

- **URL**: `/admin/login`
- **Default Credentials**: Set in your admin model
- **Features**: View bookings, update status, manage appointments

## 💳 Payment Integration

- **Gateway**: Razorpay
- **Supported**: Cards, UPI, Net Banking
- **Currency**: INR
- **Test Mode**: Available for development

## 📱 WhatsApp Integration

- **Provider**: Twilio
- **Templates**: Pre-approved message templates
- **Recipients**: Customer and Salon Owner
- **Features**: Booking confirmations, status updates

## 🛡️ Security Features

- JWT Authentication
- CORS Protection
- Input Validation
- Secure Payment Processing
- Environment Variable Protection

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact: [Your Contact Information]

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Made with ❤️ for Beauty-At-Home**