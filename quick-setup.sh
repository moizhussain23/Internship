#!/bin/bash

echo "🚀 Beauty-At-Home Quick Setup for Render Deployment"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "backend" ] && [ ! -d "frontend" ]; then
    echo "❌ Please run this script from the Beauty-At-Home root directory"
    exit 1
fi

echo "📁 Setting up environment files..."

# Create backend .env if it doesn't exist
if [ ! -f "backend/.env" ]; then
    echo "Creating backend/.env from template..."
    cp backend/env.example backend/.env
    echo "✅ Backend .env created - Please edit with your credentials"
else
    echo "✅ Backend .env already exists"
fi

# Create frontend .env if it doesn't exist
if [ ! -f "frontend/.env" ]; then
    echo "Creating frontend/.env from template..."
    cp frontend/env.example frontend/.env
    echo "✅ Frontend .env created - Will update with Render URL after deployment"
else
    echo "✅ Frontend .env already exists"
fi

echo ""
echo "📦 Installing dependencies..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Edit backend/.env with your actual credentials"
echo "2. Test locally: npm run dev (in both backend and frontend)"
echo "3. Push to GitHub: git add . && git commit -m 'Ready for Render' && git push"
echo "4. Deploy backend on Render"
echo "5. Update frontend/.env with Render URL"
echo "6. Deploy frontend on Netlify"
echo ""
echo "📖 See RENDER_DEPLOYMENT_GUIDE.md for detailed instructions"
