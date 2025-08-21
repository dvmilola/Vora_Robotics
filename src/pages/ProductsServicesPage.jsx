import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden">
        {/* FAQ Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
        >
          <h3 className="text-lg font-semibold text-slate-800 pr-4">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          >
            <Icon 
              icon={isOpen ? "mdi:minus" : "mdi:plus"} 
              width="24" 
              height="24" 
              className="text-green-600" 
            />
          </motion.div>
        </button>

        {/* FAQ Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6">
                <div className="pt-2 pb-4 border-t border-slate-100">
                  <p className="text-slate-600 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProductsServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation.jpg')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Products & Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed"
            >
              Comprehensive robotics and automation solutions designed to transform industries and drive innovation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
              >
                Overview
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed"
              >
                We design, manufacture, and deliver advanced unmanned vehicles, robotics, and automation solutions tailored to the needs of industries across Africa. Our services span agriculture, security, manufacturing, education, and sustainability — combining innovation, quality, and local expertise to create lasting impact.
              </motion.p>
              
              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">Advanced Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">Local Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">Industry Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">Sustainable Solutions</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Placeholder Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl">
                {/* Placeholder Content */}
                <div className="aspect-[4/3] flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                      <Icon icon="mdi:robot" width="48" height="48" className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-800">Robotics & Automation</h3>
                      <p className="text-slate-600 text-sm">Advanced solutions for African industries</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-purple-500 rounded-full opacity-20"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Icon icon="mdi:drone" width="32" height="32" className="text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Icon icon="mdi:printer-3d" width="24" height="24" className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Core Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Drone Manufacturing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:drone" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    Drone Manufacturing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We design and build high-performance unmanned vehicles (UVs) tailored for agriculture, industrial monitoring, security, and environmental applications.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Drone as a Service */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:drone-video" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                    Drone as a Service (DaaS)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Access cutting-edge drone technology without the upfront investment. Covers mapping, inspection, spraying, cinematography, and more.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Robotics & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:robot" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Robotics & Automation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    From SCADA to industrial automation, we streamline operations, reduce errors, and boost productivity.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Additive Manufacturing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:printer-3d" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                    Additive Manufacturing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Custom parts, tools, and products using advanced 3D printing, ideal for prototyping and small-batch production.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Sustainable 3D Printing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-teal-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:recycle" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                    Sustainable 3D Printing Solutions
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Transform plastic waste into high-quality 3D filament and end products, reducing environmental impact.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-green-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Training & Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-indigo-300 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:school" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                    Training & Consultancy
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hands-on programs and tailored curricula to empower schools, universities, and companies in drones, robotics, and automation.
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming industries through intelligent robotics and automation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            
            {/* Agriculture */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 hover:shadow-green-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:sprout" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Agriculture
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Crop monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Precision spraying</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Soil & plant health analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Farm mapping and survey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Security & Surveillance */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 hover:shadow-red-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:shield-check" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                    Security & Surveillance
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Perimeter patrol</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Real-time incident monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Emergency response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Construction & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 hover:shadow-orange-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:crane" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                    Construction & Infrastructure
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Site mapping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Structural inspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Progress tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Hazard detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education & Training */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:shadow-blue-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:school" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    Education & Training
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">STEM & robotics curriculum integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Drone operation training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Teacher capacity building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Manufacturing & Industrial Automation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 hover:shadow-purple-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:factory" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                    Manufacturing & Industrial Automation
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Process automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">SCADA systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Predictive maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Energy optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sustainability & Recycling */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-teal-300 hover:shadow-teal-500/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.03),transparent_50%)]"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:recycle" width="32" height="32" className="text-white" />
                </motion.div>

                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                    Sustainability & Recycling
                  </h3>
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Plastic-to-filament recycling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Sustainable 3D-printed products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Waste reduction initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
                 <motion.div
           animate={{ 
             y: [0, -20, 0],
             rotate: [0, 5, 0]
           }}
           transition={{ 
             duration: 6,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-xl"
         />
         <motion.div
           animate={{ 
             y: [0, 20, 0],
             rotate: [0, -5, 0]
           }}
           transition={{ 
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 2
           }}
           className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-500/8 rounded-full blur-xl"
         />
         <motion.div
           animate={{ 
             y: [0, -15, 0],
             x: [0, 10, 0]
           }}
           transition={{ 
             duration: 7,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 1
           }}
           className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/6 rounded-full blur-xl"
         />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-2xl"
            >
              Ready to bring innovation to your operations?
            </motion.h2>
            
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-medium opacity-90 mt-4 mb-12 text-white/90 drop-shadow-lg"
            >
              Let's talk.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Button Border Glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white via-green-300 to-white rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Button Content */}
                <span className="relative z-10 text-lg font-bold tracking-wide">
                  Contact Us
                </span>
                
                {/* Arrow Icon */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 ml-3"
                >
                  <Icon icon="mdi:arrow-right" width="20" height="20" className="text-black" />
                </motion.div>
              </motion.button>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-white/70 text-sm md:text-base"
            >
              <p>Get started with a free consultation</p>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* FAQ Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <FAQItem
                question="What industries does Vora Robotics serve?"
                answer="We serve a diverse range of industries including agriculture, security & surveillance, construction & infrastructure, education & training, manufacturing & industrial automation, and sustainability & recycling. Our solutions are tailored to meet the specific needs of each sector, from precision agriculture to industrial automation."
              />
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <FAQItem
                question="How customizable are your solutions?"
                answer="Our solutions are highly customizable to meet your specific requirements. We offer tailored drone manufacturing, custom robotics automation, and personalized 3D printing solutions. Our team works closely with clients to understand their unique challenges and develop solutions that perfectly fit their operational needs."
              />
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <FAQItem
                question="Do you provide training for operating your systems?"
                answer="Yes, we offer comprehensive training programs for all our systems. Our training includes hands-on drone operation, robotics system management, and 3D printing technology. We also provide ongoing support and capacity building for educational institutions and corporate clients."
              />
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <FAQItem
                question="What is the average deployment timeline?"
                answer="Deployment timelines vary depending on the complexity of the solution. Simple drone deployments typically take 2-4 weeks, while comprehensive automation systems may require 8-12 weeks. We provide detailed project timelines during the consultation phase and maintain transparent communication throughout the process."
              />
            </motion.div>

            {/* FAQ Item 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group"
            >
              <FAQItem
                question="Can your drones and robotics be integrated with existing systems?"
                answer="Absolutely! Our solutions are designed with integration in mind. We can integrate with existing SCADA systems, IoT platforms, and enterprise software. Our team conducts thorough system assessments to ensure seamless integration and minimal disruption to your current operations."
              />
            </motion.div>

            {/* FAQ Item 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <FAQItem
                question="How do you support sustainability in your products?"
                answer="Sustainability is core to our mission. We offer plastic-to-filament recycling solutions, sustainable 3D printing materials, and energy-efficient automation systems. Our products help reduce waste, lower energy consumption, and promote environmental responsibility while maintaining high performance standards."
              />
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-slate-600 mb-6">
              Didn't find your question?
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Contact Us</span>
              <Icon icon="mdi:arrow-right" width="20" height="20" />
            </motion.button>
          </motion.div>
        </div>
      </section>





    </div>
  );
};

export default ProductsServicesPage;
