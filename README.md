# Vora Robotics Website

A modern, responsive website for Vora Robotics built with clean HTML, CSS, and JavaScript. The website showcases their automation and robotics solutions with a focus on industrial applications.

## Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, tech-inspired design with smooth animations
- **Brand Compliance**: Uses Vora Robotics' official brand colors and guidelines
- **Interactive Elements**: Hover effects, smooth scrolling, and animated sections
- **Optimized Performance**: Lightweight and fast-loading

## Brand Guidelines

The website follows Vora Robotics' brand guidelines:

- **Primary Green**: `#0BDA87`
- **Charcoal**: `#0D1C23`
- **White**: `#FFFFFF`
- **Font**: Poppins (fallback from Gilroy)

## File Structure

```
Website/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styling
├── script.js               # JavaScript for interactivity
├── compress_videos.sh      # Video compression script
├── Assets/                 # Media files folder
│   ├── drone.webm          # Optimized drone video (WebM)
│   ├── drone.mp4           # Optimized drone video (MP4)
│   ├── automation.webm     # Optimized automation video (WebM)
│   ├── automation.mp4      # Optimized automation video (MP4)
│   ├── tools.webm          # Optimized tools video (WebM)
│   ├── tools.mp4           # Optimized tools video (MP4)
│   ├── raas.webm           # Optimized RaaS video (WebM)
│   └── raas.mp4            # Optimized RaaS video (MP4)
└── README.md               # This file
```

## Sections

1. **Navigation**: Fixed header with logo placeholder and menu items
2. **Hero Video Carousel**: Full-screen video showcase of four key services with hero content
3. **Features Overview**: 5-card grid showcasing automation solutions
4. **User Experience**: 6-card grid highlighting platform benefits
5. **About Section**: Company story with visual placeholder
6. **Growth Stats**: Impact metrics with animated counters
7. **Footer**: Company links and contact information

## Hero Video Carousel Features

- **Full-Screen Background Videos**: Immersive full-screen video backgrounds
- **Service Showcase**: Four key robotics services with fade transitions
- **Overlay Content**: Hero messaging and service captions overlaid on videos
- **Auto-playing Videos**: Videos autoplay, loop, and are muted for optimal UX
- **Interactive Controls**: Click to play/pause, hover to pause temporarily
- **Navigation Controls**: Previous/next arrow buttons with smooth animations
- **Visual Indicators**: Clickable dots to jump to specific service videos
- **Touch Support**: Swipe gestures on mobile devices
- **Keyboard Navigation**: Arrow keys for slide navigation
- **Auto-Advance**: Automatic slide progression every 8 seconds (pauses on hover)
- **Optimized Loading**: Dual format (WebM/MP4) with metadata preloading
- **Responsive Design**: Adapts layout for mobile with centered content



## Getting Started

1. Open `index.html` in any modern web browser
2. The website is fully responsive and works on all devices
3. Replace logo placeholders with actual Vora Robotics logos
4. Update placeholder images with real robotics/automation visuals
5. Customize content as needed for specific campaigns

## Customization

### Logo Replacement
- Replace `.logo-placeholder` elements with actual logo images
- Recommended dimensions: 200x50px for header, larger for footer

### Image Placeholders
- Replace emoji icons with proper SVG/PNG icons
- Update visual placeholders in about section with real images
- Add product photos to feature cards

### Adding More Carousel Images
To add more images to the hero carousel:

1. **Add image files** to the project directory
2. **Update HTML** in `index.html`:
   ```html
   <!-- Add new slide in carousel-container -->
   <div class="carousel-slide">
       <img src="your-new-image.jpg" alt="Description">
       <div class="slide-overlay"></div>
   </div>
   
   <!-- Add new indicator -->
   <span class="indicator" onclick="currentSlide(2)"></span>
   ```
3. **Images work best** at 1920x1080px or similar widescreen ratios
4. **File formats**: JPG, PNG, or WebP for optimal loading

### Video Compression & Optimization

The video carousel supports **dual format delivery** for optimal performance:
- **WebM format**: 30-50% smaller file sizes, supported by modern browsers
- **MP4 format**: Broader compatibility, fallback for older browsers

**🚀 Quick Compression (Recommended):**
1. Place your original video files in the `Assets/` folder
2. Run the compression script: `./compress_videos.sh`
3. The script will create optimized WebM and MP4 versions automatically

**📋 Original Video Requirements:**
- **Files needed**: `drone.mp4`, `automation.mov`, `tools.mp4`, `raas.mp4`
- **Format**: Any common video format (MP4, MOV, AVI, etc.)
- **Resolution**: 1920x1080 or higher (will be optimized to 720p)
- **Duration**: 10-30 seconds for best user experience
- **Content**: Professional footage showcasing each respective service

**⚙️ Compression Settings (Automatic):**
- **WebM**: VP9 codec, 1M bitrate, 720p @ 30fps
- **MP4**: H.264 codec, 1.5M bitrate, 720p @ 30fps  
- **Audio**: Optimized to 128k bitrate
- **Output**: Typically 2-8MB per video (vs 20-100MB+ originals)

### Content Updates
- All text is easily editable in `index.html`
- Maintain the existing structure for consistent styling
- Update statistics in the growth section as needed

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- **Optimized CSS** with modern techniques and efficient selectors
- **Minimal JavaScript** for better loading times
- **Dual Format Videos**: WebM + MP4 for optimal compression and compatibility
- **Responsive images** support with modern formats
- **Clean, semantic HTML** structure for fast rendering
- **Video optimization**: 720p delivery reduces bandwidth by 60-80%
- **Preload metadata** for instant video startup

## Contact

For technical support or customization requests, contact the development team.

---

**Built for Vora Robotics** - Empowering industries through innovative automation. 