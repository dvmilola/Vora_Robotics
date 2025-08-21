import React from 'react';
import { motion } from 'framer-motion';

const FeaturesAppearances = () => {
  const logos = [
    {
      id: 1,
      name: "VOA Hausa",
      placeholder: "VOA Hausa",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "BBC Pidgin",
      placeholder: "BBC Pidgin",
      color: "from-red-500 to-red-600"
    },
    {
      id: 3,
      name: "Anadolu Agency",
      placeholder: "Anadolu Agency",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Arewa 24",
      placeholder: "Arewa 24",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      name: "SalingaTV",
      placeholder: "SalingaTV",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      name: "AriseTV",
      placeholder: "AriseTV",
      color: "from-teal-500 to-teal-600"
    }
  ];

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,218,135,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,218,135,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Featured In
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Trusted by leading media outlets and organizations worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          {/* Infinite Carousel */}
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex items-center gap-12 md:gap-16 lg:gap-20"
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 group"
              >
                {/* Logo Placeholder */}
                <div className={`
                  w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 
                  rounded-xl bg-gradient-to-br ${logo.color}
                  flex items-center justify-center
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  group-hover:shadow-2xl
                  border border-white/20
                `}>
                  <span className="text-white font-semibold text-sm md:text-base lg:text-lg text-center px-2">
                    {logo.placeholder}
                  </span>
                </div>
                
                {/* Subtle Glow Effect on Hover */}
                <div className={`
                  absolute inset-0 rounded-xl bg-gradient-to-br ${logo.color}
                  opacity-0 group-hover:opacity-20 blur-xl
                  transition-opacity duration-300
                  -z-10
                `} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm md:text-base">
            Recognized for innovation and excellence in robotics and automation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesAppearances;
