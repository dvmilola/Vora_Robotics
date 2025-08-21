import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const slides = [
    {
      id: 1,
      videoSrc: "/Assets/drone.mp4",
      title: "We Build Solutions That Solve Real Problems",
      subtitle: "Precision in Motion, Excellence in Automation"
    },
    {
      id: 2,
      videoSrc: "/Assets/automation.mov",
      title: "We Build Solutions That Solve Real Problems",
      subtitle: "Precision in Motion, Excellence in Automation"
    },
    {
      id: 3,
      videoSrc: "/Assets/tools.mp4",
      title: "We Build Solutions That Solve Real Problems",
      subtitle: "Precision in Motion, Excellence in Automation"
    },
    {
      id: 4,
      videoSrc: "/Assets/raas.mp4",
      title: "We Build Solutions That Solve Real Problems",
      subtitle: "Precision in Motion, Excellence in Automation"
    }
  ];

  const changeSlide = (direction) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= slides.length) {
      setCurrentSlide(0);
    } else if (newSlide < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(newSlide);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle video playback
  useEffect(() => {
    slides.forEach((_, index) => {
      if (videoRefs.current[index]) {
        if (index === currentSlide) {
          videoRefs.current[index].play().catch(e => {
            console.log('Video autoplay prevented:', e);
          });
        } else {
          videoRefs.current[index].pause();
        }
      }
    });
  }, [currentSlide]);

  return (
    <section className="hero">
      <div className="video-carousel">
        <div className="video-carousel-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`video-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <video 
                ref={el => videoRefs.current[index] = el}
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="metadata"
              >
                <source src={slide.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <div className="container">
                  <div className="hero-content">
                    <h1 className="hero-title gradient-text">We Build Solutions That Solve Real Problems</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                                          <div className="hero-cta">
                        <a href="services.html" className="btn-primary large">
                          Explore Our Solutions →
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="video-carousel-controls">
                                <button 
                        className="video-carousel-prev" 
                        onClick={() => changeSlide(-1)}
                      >
                        <Icon icon="mdi:chevron-left" width="24" height="24" />
                      </button>
                      <button 
                        className="video-carousel-next" 
                        onClick={() => changeSlide(1)}
                      >
                        <Icon icon="mdi:chevron-right" width="24" height="24" />
                      </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
