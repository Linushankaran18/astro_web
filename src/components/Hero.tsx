import React, { useEffect } from 'react'
import { GraduationCap, Globe, Award } from 'lucide-react'

const Hero = () => {
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
              
              {/* Rest of the content */}
              {/* ... */}
            </div>
            
            {/* Enhanced form background */}
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-2xl w-full max-w-md transform hover:-translate-y-1 transition duration-300 relative overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20 blur-xl animate-glow"></div>
                
                <div className="relative">
                  {/* Form content remains the same */}
                  {/* ... */}
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