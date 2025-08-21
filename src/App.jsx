import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsServicesPage from './pages/ProductsServicesPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import NewsEventsPage from './pages/NewsEventsPage';
import './index.css';

function App() {
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products-services" element={<ProductsServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
