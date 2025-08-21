# Vora Robotics Website

A modern, responsive website for Vora Robotics - a leading robotics and automation solutions company based in Kaduna, Nigeria. Built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design** - Sleek, professional design with glass morphism effects
- **Responsive Layout** - Fully responsive across all devices
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Components** - Engaging user experience with hover effects
- **Contact Integration** - Google Maps integration with office location
- **Multi-page Structure** - Home, About, Products & Services, Team, News & Events, Contact

## 📱 Pages & Components

### Pages
- **Home Page** - Hero section, core solutions, features, testimonials
- **About Page** - Company mission, vision, and values
- **Products & Services** - Detailed service offerings
- **Team Page** - Meet the team members
- **News & Events** - Company updates and events
- **Contact Page** - Contact form with Google Maps integration

### Key Components
- **Navbar** - Responsive navigation with smooth transitions
- **Hero Section** - Animated hero with call-to-action
- **Core Solutions** - Scroll-triggered animated cards
- **Features** - Interactive feature showcases
- **Testimonials** - Customer testimonials carousel
- **Footer** - Comprehensive footer with links and info

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── CoreSolutions.jsx
│   │   ├── FeaturesAppearances.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Mission.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   ├── pages/              # Page components
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NewsEventsPage.jsx
│   │   ├── ProductsServicesPage.jsx
│   │   └── TeamPage.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── Assets/                 # Static assets
│   ├── images/
│   └── logos/
├── public/                 # Public assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # TailwindCSS config
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Styling
The project uses TailwindCSS for styling. Customize colors, fonts, and other design tokens in `tailwind.config.js`.

### Content
Update content by editing the respective component files:
- Company information in `Mission.jsx`
- Team members in `TeamPage.jsx`
- Services in `ProductsServicesPage.jsx`
- Contact details in `ContactPage.jsx`

### Animations
Modify animations by adjusting Framer Motion properties in the component files.

## 📞 Contact Information

**Vora Robotics**
- **Address:** 11A New Dawaki Rd, off Sultan Road, City Centre, Kaduna 800283, Kaduna, Nigeria
- **Email:** vorarobotics@gmail.com
- **Phone:** +234 813 397 9794

## 🌐 Deployment

The website is configured for deployment on Netlify with the `netlify.toml` configuration file.

### Deploy to Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [TailwindCSS](https://tailwindcss.com/)
- Build tool [Vite](https://vitejs.dev/) 