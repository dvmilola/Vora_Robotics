import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section with Factory Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Factory Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/factory-workshop-interior-machines-glass-production-background.jpg')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content - Centered */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Shaping the Future with Robotics & Innovation
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed"
            >
              Vora Robotics is transforming industries with human-centered automation, cutting-edge drones, and smart robotics.
            </motion.p>
            

          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-slate-800"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 leading-tight">
                  Who We Are
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6"
              >
                Founded in 2023, Vora Robotics is a team of engineers, innovators, and problem-solvers committed to advancing Africa's future through drones, robotics, automation, and sustainable 3D printing.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
              >
                We combine technical expertise with a passion for innovation to create solutions that address real-world challenges, improve productivity, and promote sustainability. From manufacturing unmanned vehicles (UVs) to transforming plastic waste into valuable products, we work tirelessly to make life and work easier, safer, and more efficient for industries and communities across the continent.
              </motion.p>
              
              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Engineering excellence and innovation</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Sustainable technology solutions</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">African-focused problem solving</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Team Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Team Photo */}
                <div 
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/people-office-work-day.jpg')"
                  }}
                >
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
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
                  <Icon icon="mdi:robot" width="24" height="24" className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:lightbulb-on" width="40" height="40" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To be the leading force in African robotics and automation, pioneering innovative solutions that transform industries and empower communities across the continent. We envision a future where cutting-edge technology drives sustainable development and creates opportunities for the next generation of African innovators.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:rocket-launch" width="40" height="40" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To empower Africa with affordable, innovative technology that solves real-world problems, enhances productivity, and transforms industries while promoting sustainability and equipping the next generation with the skills to lead in a tech-driven future.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Innovation */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:lightbulb-on-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Innovation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We constantly push boundaries and explore new technologies to create cutting-edge solutions that address real-world challenges.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Sustainability */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:recycle" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Sustainability
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We prioritize eco-friendly solutions and sustainable practices, ensuring our innovations contribute to a better future for generations to come.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Transparency */}
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
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:eye-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Transparency
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We maintain open communication and clear processes, building trust with our clients, partners, and communities through honest practices.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Excellence */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:trophy-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Excellence
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We strive for the highest standards in everything we do, delivering exceptional quality and outstanding results for our clients.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Social Responsibility */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:heart-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Social Responsibility
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We are committed to making a positive impact on society, empowering communities and contributing to Africa's technological advancement.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problems We Solve Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Problems We Solve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Manual Labor & Safety Risks */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:alert-triangle-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                    Manual Labor & Safety Risks
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Dangerous manual tasks in hazardous environments put workers at risk. We automate these processes with robotics and drones to eliminate safety hazards and improve workplace conditions.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Limited Data Accessibility */}
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
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:database-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    Limited Data Accessibility
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Inaccessible or hard-to-reach areas lack proper monitoring and data collection. Our drone and sensor solutions provide real-time insights and comprehensive data for informed decision-making.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>

            {/* Environmental Impact */}
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
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.03),transparent_50%)]"></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6"
                >
                  <Icon icon="mdi:earth-outline" width="32" height="32" className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                    Environmental Impact
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Traditional manufacturing and waste disposal methods harm the environment. Our sustainable 3D printing and recycling solutions reduce carbon footprint and promote circular economy practices.
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Awards Ticker Container */}
          <div className="relative">
            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Awards Ticker */}
            <div className="flex gap-8 py-4">
              {/* First Set */}
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-8 min-w-max"
              >
                {/* Youth Startup of the Year */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:trophy" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Youth Startup of the Year</h3>
                        <p className="text-slate-600 text-sm">Global Startup Awards</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creativity & Innovation */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:lightbulb-on" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Creativity & Innovation</h3>
                        <p className="text-slate-600 text-sm">Future Awards Africa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Innovator of the Year */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:star" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Innovator of the Year</h3>
                        <p className="text-slate-600 text-sm">Youth Africa Magazine</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Innovation Technology Excellence */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:medal" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Innovation Technology Excellence</h3>
                        <p className="text-slate-600 text-sm">You Drive Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Set (Duplicate for seamless loop) */}
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-8 min-w-max"
              >
                {/* Youth Startup of the Year */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:trophy" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Youth Startup of the Year</h3>
                        <p className="text-slate-600 text-sm">Global Startup Awards</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creativity & Innovation */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:lightbulb-on" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Creativity & Innovation</h3>
                        <p className="text-slate-600 text-sm">Future Awards Africa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Innovator of the Year */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:star" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Innovator of the Year</h3>
                        <p className="text-slate-600 text-sm">Youth Africa Magazine</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Innovation Technology Excellence */}
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 min-w-[280px] group-hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon icon="mdi:medal" width="32" height="32" className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Innovation Technology Excellence</h3>
                        <p className="text-slate-600 text-sm">You Drive Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
