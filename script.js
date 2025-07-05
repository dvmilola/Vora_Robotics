// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop back to beginning or end
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1; // Convert to 0-based index
    showSlide(currentSlideIndex);
}

// Auto-play carousel (optional - uncomment to enable)
// setInterval(() => {
//     changeSlide(1);
// }, 5000); // Change slide every 5 seconds

// Keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const carousel = document.querySelector('.hero-carousel');
if (carousel) {
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - go to next slide
            changeSlide(1);
        } else {
            // Swiped right - go to previous slide
            changeSlide(-1);
        }
    }
}

// Video Carousel functionality - Full Screen
let currentVideoSlideIndex = 0;
const videoSlides = document.querySelectorAll('.video-slide');

function updateVideoCarousel() {
    if (!videoSlides.length) return;
    
    // Update active slide and manage video playback
    videoSlides.forEach((slide, index) => {
        const isActive = index === currentVideoSlideIndex;
        const video = slide.querySelector('video');
        
        slide.classList.toggle('active', isActive);
        
        if (video) {
            if (isActive) {
                // Ensure active video always plays
                video.play().catch(e => {
                    console.log('Video autoplay prevented:', e);
                });
            } else {
                // Pause non-active videos to save resources
                video.pause();
            }
        }
    });
}

function changeVideoSlide(direction) {
    currentVideoSlideIndex += direction;
    
    if (currentVideoSlideIndex >= videoSlides.length) {
        currentVideoSlideIndex = 0;
    } else if (currentVideoSlideIndex < 0) {
        currentVideoSlideIndex = videoSlides.length - 1;
    }
    
    updateVideoCarousel();
    // Ensure video starts fresh on slide change
    setTimeout(() => restartActiveVideo(), 100);
}

// Handle video playback interactions
function setupVideoInteractions() {
    videoSlides.forEach((slide, slideIndex) => {
        const video = slide.querySelector('video');
        if (video) {
            // Handle video loading
            video.addEventListener('loadeddata', () => {
                video.setAttribute('data-loaded', 'true');
                // Start playing if this is the active slide
                if (slideIndex === currentVideoSlideIndex) {
                    video.play().catch(e => {
                        console.log('Video autoplay prevented:', e);
                    });
                }
            });
            
            // Handle errors
            video.addEventListener('error', () => {
                console.log('Video loading error for:', video.src);
                video.setAttribute('data-loaded', 'error');
            });
        }
    });
}

// Touch/swipe support for video carousel
let videoTouchStartX = 0;
let videoTouchEndX = 0;

const videoCarousel = document.querySelector('.video-carousel');
if (videoCarousel) {
    videoCarousel.addEventListener('touchstart', function(e) {
        videoTouchStartX = e.changedTouches[0].screenX;
    });

    videoCarousel.addEventListener('touchend', function(e) {
        videoTouchEndX = e.changedTouches[0].screenX;
        handleVideoSwipe();
    });
}

function handleVideoSwipe() {
    const swipeThreshold = 50;
    const diff = videoTouchStartX - videoTouchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeVideoSlide(1);
        } else {
            changeVideoSlide(-1);
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeVideoSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeVideoSlide(1);
    }
});

// Auto-advance carousel every 8 seconds
let videoAutoAdvance = setInterval(() => {
    changeVideoSlide(1);
}, 8000);

// Pause auto-advance on hover
const videoCarouselElement = document.querySelector('.video-carousel');
if (videoCarouselElement) {
    videoCarouselElement.addEventListener('mouseenter', () => {
        clearInterval(videoAutoAdvance);
    });
    
    videoCarouselElement.addEventListener('mouseleave', () => {
        videoAutoAdvance = setInterval(() => {
            changeVideoSlide(1);
        }, 8000);
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default and do smooth scroll for hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(13, 28, 35, 0.98)';
        } else {
            navbar.style.background = 'rgba(13, 28, 35, 0.95)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and other elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .impact-case, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize video carousel
    setupVideoInteractions();
    updateVideoCarousel();
    
    // Force initial video to play
    initializeVideoAutoplay();
    
    // Initialize scroll animations
    initializeScrollAnimations();

    // Initialize gallery expansion
    initializeGalleryExpansion();

    // Initialize other effects
    addQuantumScrollBehavior();
    addParallaxEffects();
    createQuantumProgressIndicator();
});

// Force videos to autoplay on page load
function initializeVideoAutoplay() {
    videoSlides.forEach((slide, index) => {
        const video = slide.querySelector('video');
        if (video) {
            // Set video properties to ensure autoplay
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            
            if (index === currentVideoSlideIndex) {
                // Force the active video to play
                setTimeout(() => {
                    video.play().catch(e => {
                        console.log('Initial video autoplay prevented:', e);
                        // Try again after user interaction
                        document.addEventListener('click', () => {
                            video.play().catch(err => console.log('Video play retry failed:', err));
                        }, { once: true });
                    });
                }, 100);
            }
        }
    });
}

// Handle page visibility changes to restart videos
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && videoSlides.length > 0) {
        const activeSlide = videoSlides[currentVideoSlideIndex];
        const activeVideo = activeSlide?.querySelector('video');
        if (activeVideo) {
            setTimeout(() => {
                activeVideo.play().catch(e => {
                    console.log('Video restart on visibility change failed:', e);
                });
            }, 200);
        }
    }
});

// Enhanced video transition with restart
function restartActiveVideo() {
    if (videoSlides.length > 0) {
        const activeSlide = videoSlides[currentVideoSlideIndex];
        const activeVideo = activeSlide?.querySelector('video');
        if (activeVideo) {
            activeVideo.currentTime = 0; // Restart from beginning
            activeVideo.play().catch(e => {
                console.log('Video restart failed:', e);
            });
        }
    }
}

// FUTURISTIC SCROLL ANIMATION SYSTEM
function initializeScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Get all futuristic sections
    const futureSections = document.querySelectorAll('.future-section');
    
    if (futureSections.length === 0) return;
    
    // If user prefers reduced motion, show all content immediately
    if (prefersReducedMotion) {
        futureSections.forEach(section => {
            const neuralContent = section.querySelector('.neural-content');
            const terminalContent = section.querySelector('.interface-terminal');
            const portalContent = section.querySelector('.portal-content');
            
            if (neuralContent) neuralContent.classList.add('animate-in');
            if (terminalContent) terminalContent.classList.add('animate-in');
            if (portalContent) portalContent.classList.add('animate-in');
        });
        return;
    }
    
    // Create intersection observer for futuristic animations
    const futuristicObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Neural Network Section
                const neuralContent = section.querySelector('.neural-content');
                if (neuralContent) {
                    setTimeout(() => {
                        neuralContent.classList.add('animate-in');
                        // Trigger holographic text animations
                        triggerHolographicEffects(section);
                    }, 200);
                }
                
                // Matrix Interface Section
                const terminalContent = section.querySelector('.interface-terminal');
                if (terminalContent) {
                    setTimeout(() => {
                        terminalContent.classList.add('animate-in');
                        // Start terminal typing effect
                        startTerminalAnimation(section);
                    }, 300);
                }
                
                // Dimensional Portal Section
                const portalContent = section.querySelector('.portal-content');
                if (portalContent) {
                    setTimeout(() => {
                        portalContent.classList.add('animate-in');
                        // Activate portal effects
                        activatePortalEffects(section);
                    }, 150);
                }
            }
        });
    }, {
        // Trigger when 25% of the section is visible for more dramatic effect
        threshold: 0.25,
        // Start observing 150px before section enters viewport
        rootMargin: '0px 0px -150px 0px'
    });
    
    // Observe all futuristic sections
    futureSections.forEach(section => {
        futuristicObserver.observe(section);
    });
    
    // Add enhanced smooth scrolling behavior
    addQuantumScrollBehavior();
}

// Trigger holographic text effects
function triggerHolographicEffects(section) {
    const holoTexts = section.querySelectorAll('.holo-text');
    holoTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.animationDelay = `${index * 0.2}s`;
            text.classList.add('holo-activated');
        }, index * 100);
    });
}

// Start terminal typing animation
function startTerminalAnimation(section) {
    const typedText = section.querySelector('.typed-text');
    const cursor = section.querySelector('.cursor');
    
    if (typedText && cursor) {
        const originalText = typedText.textContent;
        typedText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                typedText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                // Start blinking cursor
                cursor.style.animation = 'cursor-blink 1s infinite';
            }
        }, 80); // Typing speed
    }
    
    // Animate progress bars
    const progressBars = section.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-out';
                bar.style.width = width;
            }, 100);
        }, index * 300);
    });
}

// Activate portal dimensional effects
function activatePortalEffects(section) {
    const rings = section.querySelectorAll('.ring');
    rings.forEach((ring, index) => {
        setTimeout(() => {
            ring.style.animationPlayState = 'running';
            ring.style.opacity = '0.6';
        }, index * 200);
    });
    
    // Enhance quantum button effects
    const quantumBtns = section.querySelectorAll('.quantum-btn');
    quantumBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            createQuantumParticles(btn);
        });
    });
}

// Create quantum particle effect for buttons
function createQuantumParticles(button) {
    const particles = button.querySelector('.btn-particles');
    if (!particles) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-green);
            border-radius: 50%;
            pointer-events: none;
            animation: quantum-particle 1s ease-out forwards;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// QUANTUM SCROLL BEHAVIOR
function addQuantumScrollBehavior() {
    // Enhanced smooth scroll with quantum effects
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Add futuristic scroll progress indicator
    createQuantumProgressIndicator();
    
    // Add parallax effect for floating particles
    addParallaxEffects();
}

// Add parallax effects to floating elements
function addParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-particles, .holographic-overlay');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Create futuristic quantum progress indicator
function createQuantumProgressIndicator() {
    // Create quantum progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'quantum-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-green), #00ffff, #ff00ff);
        z-index: 9999;
        transition: width 0.2s ease;
        box-shadow: 0 0 20px var(--primary-green);
        filter: blur(0.5px);
    `;
    
    // Add pulsing effect
    const progressGlow = document.createElement('div');
    progressGlow.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: var(--primary-green);
        z-index: 9998;
        transition: width 0.2s ease;
        animation: quantum-pulse 2s ease-in-out infinite;
    `;
    
    document.body.appendChild(progressGlow);
    document.body.appendChild(progressBar);
    
    // Update progress on scroll with quantum effects
    let ticking = false;
    
    function updateQuantumProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        progressGlow.style.width = Math.min(scrollPercent, 100) + '%';
        
        // Change color based on progress
        if (scrollPercent > 66) {
            progressBar.style.background = 'linear-gradient(90deg, #ff00ff, #00ffff, var(--primary-green))';
        } else if (scrollPercent > 33) {
            progressBar.style.background = 'linear-gradient(90deg, #00ffff, var(--primary-green), #ff00ff)';
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateQuantumProgress);
            ticking = true;
        }
    });
    
    // Hide progress bar on reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        progressBar.style.display = 'none';
        progressGlow.style.display = 'none';
    }
}

// Function to handle "INITIATE CONTACT" button click
function initiateContact() {
    const contactSection = document.getElementById('contact-interface');
    if (contactSection) {
        // Get the navbar height
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
        // Get the section's position
        const rect = contactSection.getBoundingClientRect();
        
        // Calculate the scroll position to show the full section
        const scrollPosition = window.pageYOffset + rect.top - navbarHeight;
        
        // Smooth scroll to position
        window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
    }
}

// Function to handle "ACCESS ARCHIVES" button click
// Moved to index.html inline script

function initializeGalleryExpansion() {
    const expandBtn = document.querySelector('.expand-gallery-btn');
    const collapseBtn = document.querySelector('.collapse-gallery-btn');
    const galleryGrid = document.querySelector('.holographic-gallery-grid');
    const galleryPreview = document.querySelector('.gallery-preview');
    
    if (expandBtn && galleryGrid && collapseBtn) {
        console.log('Gallery expansion initialized'); // Debug log
        
        expandBtn.addEventListener('click', function() {
            console.log('Expand button clicked'); // Debug log
            galleryGrid.classList.add('expanded');
            expandBtn.style.display = 'none';
            
            // Scroll to the expanded gallery with smooth animation
            setTimeout(() => {
                galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });

        collapseBtn.addEventListener('click', function() {
            console.log('Collapse button clicked'); // Debug log
            galleryGrid.classList.remove('expanded');
            expandBtn.style.display = 'inline-block';
            
            // Scroll back to preview with smooth animation
            setTimeout(() => {
                galleryPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    } else {
        console.log('Gallery elements not found:', { 
            expandBtn: !!expandBtn, 
            collapseBtn: !!collapseBtn,
            galleryGrid: !!galleryGrid 
        }); // Debug log
    }
}