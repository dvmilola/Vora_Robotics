import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Vora Robotics is the kind of innovation we like to see across the African continent.",
      author: "Dr. Sarah Johnson",
      position: "Director of Innovation",
      organization: "African Tech Foundation",
      avatar: "mdi:account-tie"
    },
    {
      id: 2,
      quote: "Their team of experts has helped us implement robotics education into our school curriculum.",
      author: "Michael Chen",
      position: "Principal",
      organization: "Tech Academy International",
      avatar: "mdi:school"
    },
    {
      id: 3,
      quote: "The precision and quality of their drone manufacturing is unmatched in the region.",
      author: "Aisha Mohammed",
      position: "Operations Manager",
      organization: "Aerial Solutions Ltd",
      avatar: "mdi:account-cog"
    },
    {
      id: 4,
      quote: "Vora Robotics has transformed our automation processes, increasing efficiency by 300%.",
      author: "David Okafor",
      position: "CEO",
      organization: "Industrial Dynamics",
      avatar: "mdi:account-tie-woman"
    },
    {
      id: 5,
      quote: "Their sustainable 3D printing solutions have revolutionized our manufacturing approach.",
      author: "Fatima Hassan",
      position: "Head of R&D",
      organization: "Green Manufacturing Co",
      avatar: "mdi:account-hard-hat"
    }
  ];

  // Calculate how many testimonials to show based on screen size
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop
      if (window.innerWidth >= 768) return 2;  // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const slidesToShow = getSlidesToShow();
  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(current => current >= maxSlide ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(current => current <= 0 ? maxSlide : current - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, maxSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            What Our Clients Say
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Trusted by organizations across Africa for innovative robotics and automation solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-6xl mx-auto px-8 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-lg"
          >
            <Icon 
              icon="mdi:chevron-left" 
              width="16" 
              height="16"
              className="md:w-5 md:h-5 transform group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-lg"
          >
            <Icon 
              icon="mdi:chevron-right" 
              width="16" 
              height="16"
              className="md:w-5 md:h-5 transform group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `-${currentSlide * (100 / slidesToShow)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="flex gap-4 md:gap-6 lg:gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-6 lg:p-8 h-full group hover:bg-white/10 transition-all duration-500 mx-2 md:mx-0"
                  >
                    {/* Quote Icon */}
                    <div className="text-green-400 text-2xl mb-4">
                      <Icon icon="mdi:format-quote-close" width="32" height="32" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                        <Icon icon={testimonial.avatar} width="24" height="24" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm md:text-base">
                          {testimonial.author}
                        </div>
                        <div className="text-slate-400 text-xs md:text-sm">
                          {testimonial.position}
                        </div>
                        <div className="text-green-400 text-xs md:text-sm font-medium">
                          {testimonial.organization}
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-2 mt-12"
        >
          {Array.from({ length: maxSlide + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-green-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isAutoPlaying ? 'bg-green-500' : 'bg-slate-500'
            }`} />
            <span>Auto-play {isAutoPlaying ? 'on' : 'paused'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
