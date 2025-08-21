import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

const CoreSolutions = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const solutions = [
    {
      id: 1,
      title: "Drone Manufacturing",
      description: "Specialized in rapid prototyping and manufacturing of high-quality drones with precision engineering.",
      icon: "mdi:drone",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Drone as a Service",
      description: "Comprehensive drone services including aerial photography, surveying, and monitoring.",
      icon: "mdi:drone-video",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Robotics & Automation",
      description: "Cutting-edge automation and robotics technologies that transform industries.",
      icon: "mdi:robot",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Additive Manufacturing",
      description: "Advanced 3D printing and additive manufacturing solutions for complex geometries.",
      icon: "mdi:printer-3d",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Sustainable 3D Printing",
      description: "Eco-friendly 3D printing technologies using sustainable materials and processes.",
      icon: "mdi:recycle",
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: 6,
      title: "Training & Consultancy",
      description: "Professional training programs and consultancy services in robotics and automation.",
      icon: "mdi:school",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,218,135,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Core Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const cardProgress = useTransform(
              scrollYProgress,
              [index * 0.1, (index + 1) * 0.1],
              [0, 1]
            );

            const yTransform = useTransform(
              cardProgress,
              [0, 1],
              [50, 0]
            );

            const opacity = useTransform(
              cardProgress,
              [0, 0.5, 1],
              [0, 0.5, 1]
            );

            return (
              <motion.div
                key={solution.id}
                style={{
                  y: yTransform,
                  opacity
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative h-full"
                >
                  {/* Card */}
                  <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-green-500 h-full group-hover:bg-gradient-to-br group-hover:from-slate-800 group-hover:to-slate-700">
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6`}
                    >
                      <Icon icon={solution.icon} width="32" height="32" className="text-white" />
                    </motion.div>

                                         {/* Content */}
                     <div className="space-y-4">
                       <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                         {solution.title}
                       </h3>
                       <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                         {solution.description}
                       </p>
                     </div>

                                         {/* Hover Arrow */}
                                           <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 8, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-6 right-6 text-green-400 group-hover:text-green-300 transition-colors duration-300"
                      >
                        <Icon 
                          icon="mdi:arrow-right" 
                          width="20" 
                          height="20"
                          className="transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>

                    {/* Hover Border Effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
                      <motion.a
              href="services.html"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(11, 218, 135, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Solutions
              <Icon 
                icon="mdi:arrow-right" 
                width="20" 
                height="20"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreSolutions;
