# Soncresity Industries Website

A modern, responsive website built with React, TypeScript, and Vite for Soncresity Industries.

## 🚀 Features

- Modern React with TypeScript
- Fast development with Vite
- Responsive design for all devices
- Professional corporate layout
- Easy to customize and extend

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── images/
│           └── logo.png          # Place your company logo here
├── src/
│   ├── components/               # Reusable React components
│   ├── assets/                   # Static assets
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Global styles
│   └── main.tsx                  # Application entry point
├── package.json                  # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

## 🎨 Logo Placement

**Important:** Place your company logo file as `logo.png` in the following directory:
```
public/assets/images/logo.png
```

The logo should ideally be:
- PNG format with transparent background
- Recommended size: 200x200px or similar square aspect ratio
- High resolution for crisp display on all devices

## 🛠️ Development

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Content
- Edit `src/App.tsx` to modify the main content
- Update `src/App.css` to change styles and colors
- Replace the logo at `public/assets/images/logo.png`

### Adding New Sections
The website is structured with semantic sections:
- Header with navigation
- Hero section with call-to-action
- Features/Services section
- Footer

You can easily add new sections by modifying the `App.tsx` file.

### Styling
The project uses modern CSS with:
- Flexbox and Grid layouts
- CSS custom properties (variables)
- Responsive design with media queries
- Smooth animations and transitions

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

© 2025 Soncresity Industries. All rights reserved.
