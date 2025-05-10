import React, { useEffect, useState } from 'react'
import { GraduationCap, Globe, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  // State for managing the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Ad slides data
  const adSlides = [
    {
      id: 1,
      image: "/images/ads/ad1.jpeg", // Replace with actual ad image paths
      title: "What Next? After A/Level",
      description: "Get your student visa with us"
    },
    {
      id: 2,
      image: "/images/ads/ad2.jpg",
      title: "Master Program",
      description: "Get your student visa with us"
    },
    {
      id: 3,
      image: "/images/ads/ad3.jpg",
      title: "Study In UK",
      description: "Get your student visa with us"
    }
  ];

  // Handle slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adSlides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [adSlides.length]);

  // Optional: Add subtle parallax effect on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      const x = (window.innerWidth - e.pageX) / 100;
      const y = (window.innerHeight - e.pageY) / 100;
      
      parallaxElements.forEach(el => {
        const element = el as HTMLElement;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % adSlides.length);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + adSlides.length) % adSlides.length);
  };
  
  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-900 to-indigo-800 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="pt-24 md:pt-28"> {/* Add appropriate padding-top */}
        {/* Layered background for depth */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base layer image */}
          <img 
            src="/images/student_home.jpeg" 
            alt="Abroad Students" 
            className="w-full h-full object-cover opacity-30"
          />
          
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
          
          {/* Pattern overlay for texture */}
          <div className="absolute inset-0 opacity-5" 
              style={{backgroundImage: 'url("/images/pattern-dot.png")', backgroundSize: '30px'}}>
          </div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full filter blur-2xl parallax-layer"></div>
        
        {/* Floating icons with enhanced visual interest */}
        <div className="absolute top-20 left-10 animate-bounce-slow opacity-30 parallax-layer">
          <GraduationCap className="w-16 h-16 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse opacity-30 parallax-layer">
          <Globe className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-3/4 left-1/3 animate-pulse-slow opacity-20 hidden md:block parallax-layer">
          <Award className="w-10 h-10 text-blue-300 drop-shadow-lg" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              {/* Content remains the same, just enhance the badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/50 mb-6 shadow-lg">
                <Award className="h-5 w-5 text-yellow-300 mr-2 animate-pulse-slow" />
                <span className="text-blue-100 font-medium text-sm">Trusted by 1000+ Students</span>
              </div>
              
              {/* Add text shadow for better readability */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
                Turn Your Global <span className="text-blue-200">Education</span> Dreams into Reality
              </h1>
              
              <p className="mt-6 text-xl text-blue-100 max-w-xl drop-shadow">
                Expert guidance on university applications, scholarships, visas, and everything you need for your international academic journey.
              </p>
              
              {/* Call to action buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#services" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-lg transition duration-300 transform hover:-translate-y-1">
                  Explore Services
                </a>
                <a href="#contact" className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md shadow-lg transition duration-300 transform hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Ad Slideshow on the right side */}
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-2xl w-full max-w-md transform hover:-translate-y-1 transition duration-300 relative overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20 blur-xl animate-glow"></div>
                
                {/* Slideshow container */}
                <div className="relative h-[320px]">
                  {/* Slides */}
                  {adSlides.map((slide, index) => (
                    <div 
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <div className="h-[200px] w-[300px] mx-auto overflow-hidden rounded-md mb-3">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            // Fallback for missing images
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/300x200?text=Advertisement";
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
                      <p className="text-blue-100 text-sm line-clamp-2">{slide.description}</p>
                      
                      <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition text-sm">
                        Learn More
                      </button>
                    </div>
                  ))}
                  
                  {/* Navigation buttons */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-[100px] transform -translate-y-1/2 z-20 bg-black/30 text-white p-1.5 rounded-full hover:bg-black/50 transition"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-[100px] transform -translate-y-1/2 z-20 bg-black/30 text-white p-1.5 rounded-full hover:bg-black/50 transition"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Slide indicators */}
                  <div className="absolute bottom-[110px] left-0 right-0 flex justify-center z-20 space-x-2">
                    {adSlides.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero