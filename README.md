# SnokOS Website

<div align="center">
  <img src="assets/logo.png" alt="SnokOS Logo" width="150">
  
  ### Modern, Multilingual Website for SnokOS
  
  **Specialized in Web Development, Software Development, and Open-Source Solutions**
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
</div>

---

## ✨ Features

### 🌍 Multilingual Support
- **English** (Default)
- **French** (Français)
- **Arabic** (العربية) with full RTL support

### 🌓 Theme Switching
- Light mode for daytime browsing
- Dark mode for comfortable night viewing
- Smooth transitions between themes
- Preference persistence with localStorage

### 🎨 Modern Design
- **Glassmorphism** effects on cards and navigation
- **Gradient backgrounds** with animations
- **Smooth scroll animations** triggered on viewport intersection
- **Hover effects** on all interactive elements
- **Responsive typography** that scales beautifully

### 📱 Fully Responsive
- Mobile-first design approach
- Optimized for phones, tablets, and desktops
- Touch-friendly interface
- Adaptive layouts

---

## 🚀 Quick Start

### Option 1: Open Directly
Simply double-click `index.html` or run:
```bash
xdg-open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 📁 Project Structure

```
SnokOS_SiteWeb/
├── index.html          # Main HTML file
├── styles.css          # Complete design system
├── script.js           # Multilingual & theme logic
├── README.md           # This file
└── assets/
    └── logo.png        # SnokOS logo
```

---

## 🎯 Usage

### Switching Languages
Click the language buttons in the navigation bar:
- **EN** - English
- **FR** - French  
- **AR** - Arabic (enables RTL layout)

Your language preference is automatically saved.

### Toggling Theme
Click the theme toggle button:
- 🌙 **Moon icon** - Switch to dark mode
- ☀️ **Sun icon** - Switch to light mode

Your theme preference is automatically saved.

### Navigation
- Click **"Get Started"** to jump to the contact section
- Click **"Learn More"** to view services
- Use footer links for quick navigation

---

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Inter & Cairo fonts
- **LocalStorage API** - Preference persistence
- **Intersection Observer API** - Scroll animations

---

## 🎨 Design System

### Color Palette

**Light Mode:**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Accent: `hsl(250, 84%, 54%)`

**Dark Mode:**
- Background: `#0a0a0f`
- Text: `#f7fafc`
- Accent: `hsl(250, 84%, 64%)`

### Typography
- **Primary Font:** Inter (Latin scripts)
- **Arabic Font:** Cairo (Arabic script)
- **Responsive Sizing:** Using clamp() for fluid scaling

---

## 📝 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
  --accent-primary: hsl(250, 84%, 54%);
  --accent-secondary: hsl(280, 84%, 54%);
}
```

### Adding Languages
1. Add translation object in `script.js`:
```javascript
translations.es = {
  heroTitle: "Construye el Futuro Con",
  // ... add all translation keys
}
```

2. Add language button in `index.html`:
```html
<button class="lang-btn" data-lang="es">ES</button>
```

### Modifying Content
Edit the translation objects in `script.js`. All text content is centralized there for easy management.

---

## 🌐 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 📄 License

© 2025 SnokOS. All rights reserved.

---

## 🤝 Contributing

SnokOS supports open-source! Contributions, issues, and feature requests are welcome.

---

## 📧 Contact

- **Email:** SnokSoft@gmail.com
- **Phone:** +216 26 360 802
- **Location:** Tunis

---

<div align="center">
  <p>Built with ❤️ by SnokOS</p>
  <p>Supporting Open-Source Solutions Worldwide</p>
</div>
