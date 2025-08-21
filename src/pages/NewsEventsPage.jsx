import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';

const NewsEventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/people-hangout-together-coffee-shop.jpg')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              News & Events
            </motion.h1>
            
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
            >
              Highlights from our journey — media features, expos, fairs, and events.
            </motion.p>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center mt-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-green-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-32 right-20 w-12 h-12 bg-blue-500/15 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-purple-500/10 rounded-full blur-xl"
        />
      </section>

      {/* News & Events Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay connected with our latest achievements, media coverage, and upcoming events.
            </p>
          </motion.div>

          {/* Photo Gallery Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Card 1 - Arewa Tech Festival */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="mdi:image" width="48" height="48" className="text-green-600" />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <Icon icon="mdi:calendar-star" width="14" height="14" />
                      Event
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    Arewa Tech Festival — Product Showcase
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon icon="mdi:calendar" width="16" height="16" />
                    <span>May 28, 2025</span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Demonstrated our unmanned vehicles to industry stakeholders and ecosystem players.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - GITEX RoadShow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-t-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="mdi:image" width="48" height="48" className="text-blue-600" />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      <Icon icon="mdi:trophy" width="14" height="14" />
                      Event
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    Vora shortlisted at GITEX RoadShow Northwest Showcase 2025
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon icon="mdi:calendar" width="16" height="16" />
                    <span>Jul 23, 2025</span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Recognized among top African startups for global showcase opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Arewa 24 Interview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="mdi:image" width="48" height="48" className="text-purple-600" />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      <Icon icon="mdi:newspaper" width="14" height="14" />
                      News
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    Vora Robotics In an Interview with Arewa 24
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon icon="mdi:calendar" width="16" height="16" />
                    <span>Jul 23, 2025</span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Recognized among northern Nigeria startups for the excellent work we do.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <span>Load More</span>
              <Icon icon="mdi:arrow-down" width="20" height="20" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default NewsEventsPage;
