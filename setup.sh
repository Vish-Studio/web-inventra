#!/bin/bash

# Inventra AI - Next.js Setup Script

echo "🚀 Setting up Inventra AI Next.js Project..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "To start the development server, run:"
    echo "  npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser."
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
