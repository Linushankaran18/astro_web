import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

type LocationState = {
  scrollTo?: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Function to handle scrolling to sections on the home page
  const scrollToSection = (sectionId: string) => {
    const isHomePage = location.pathname === "/";
    
    if (isHomePage) {
      // If already on home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    }
    
    // Close dropdowns when navigating
    setIsServicesDropdownOpen(false);
  };

  // Scroll to section after navigation to home page
  useEffect(() => {
    if (
      location.pathname === '/' &&
      (location.state as LocationState)?.scrollTo
    ) {
      const sectionId = (location.state as LocationState).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clean up state to prevent scrolling on refresh
        navigate('/', { replace: true });
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location, navigate]);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src='/images/astro_log.png' alt="Astro Consultancy Logo" className="h-16 w-16 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-700">Astro Consultancy</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                About
              </Link>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/services') || isActive('/study-in-uk') ? 
                    'text-blue-600 bg-blue-50' : 
                    'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => scrollToSection('study-abroad')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        role="menuitem"
                      >
                        Student Consultation
                      </button>
                      <Link
                        to="/visitor-visa"
                        className={`block px-4 py-2 text-sm ${
                          isActive('/visitor-visa') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                        role="menuitem"
                      >
                        Visitor Visa
                      </Link>
                      <Link
                        to="/air-ticketing"
                        className={`block px-4 py-2 text-sm ${
                          isActive('/air-ticketing') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                        role="menuitem"
                      >
                        Air Ticketing
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/tourism" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/tourism') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Tourism
              </Link>
              
              <button 
                onClick={() => scrollToSection('blog')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Blog
              </button>
              
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Testimonials
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Contact Us
              </button>
              
              <Link 
                to="/consultation" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Free Consultation
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              About
            </Link>
            
            <button 
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              Services
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesDropdownOpen && (
              <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                <button 
                  onClick={() => scrollToSection('study-abroad')}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                >
                  Student Consultation
                </button>
                
                <Link 
                  to="/visitor-visa" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/visitor-visa') ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Visitor Visa
                </Link>
                
                <Link 
                  to="/air-ticketing" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/air-ticketing') ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Air Ticketing
                </Link>
              </div>
            )}
            
            <Link 
              to="/tourism" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/tourism') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Tourism
            </Link>
            
            <button 
              onClick={() => scrollToSection('blog')}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Blog
            </button>
            
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Testimonials
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Contact Us
            </button>
            
            <Link 
              to="/consultation" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar