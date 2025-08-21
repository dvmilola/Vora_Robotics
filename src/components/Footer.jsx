import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const siteMapLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "about.html" },
        { name: "Our Mission", href: "#mission" },
        { name: "Core Solutions", href: "#solutions" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Drone Manufacturing", href: "services.html#drones" },
        { name: "Drone as a Service", href: "services.html#raas" },
        { name: "Robotics & Automation", href: "services.html#robotics" },
        { name: "Additive Manufacturing", href: "services.html#3d-printing" },
        { name: "Training & Consultancy", href: "services.html#training" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "contact.html" },
        { name: "Technical Support", href: "contact.html#support" },
        { name: "Documentation", href: "#docs" },
        { name: "FAQ", href: "#faq" }
      ]
    }
  ];

  const socialHandles = [
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: "mdi:instagram",
      href: "#",
      color: "hover:text-pink-500"
    },
    {
      name: "YouTube",
      icon: "mdi:youtube",
      href: "#",
      color: "hover:text-red-600"
    }
  ];

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/Vora_Robotics_Horizontal_Logo_RGB_Green_White.png" 
              alt="Vora Robotics" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-green-400 font-semibold text-sm mb-4">
              Our products are proudly designed, assembled, and supported in Nigeria 🇳🇬
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-slate-400">
                <span className="text-green-400 font-semibold">RC Number:</span> RC 7374525
              </p>
              <p className="text-slate-400">
                <span className="text-green-400 font-semibold">Location:</span> Nigeria
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Solutions */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Industrial Automation</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Smart Manufacturing</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Process Optimization</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Custom Robotics</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="about.html" className="text-slate-300 hover:text-white text-sm transition-colors">About Us</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Careers</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">News</a></li>
                  <li><a href="contact.html" className="text-slate-300 hover:text-white text-sm transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Training</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Support Portal</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Community</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-sm mb-4">Newsletter</h3>
            <p className="text-slate-300 text-xs mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded text-sm hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </form>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded text-center"
              >
                <p className="text-green-400 text-xs">Thank you for subscribing! 🎉</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Social Handles and Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex items-center gap-4">
                {socialHandles.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-slate-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <Icon icon={social.icon} width="20" height="20" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="text-slate-300 text-sm">
              © 2024 Vora Robotics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
