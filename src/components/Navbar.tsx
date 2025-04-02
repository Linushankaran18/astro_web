import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false)

  useEffect(() => {
    // Add any side effects here if needed
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src='/images/astro_log.png' className="h-28 w-28 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-700">Astro Consultancy</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium">Home</a>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsVisaDropdownOpen(true)}
                onMouseLeave={() => setIsVisaDropdownOpen(false)}
              >
                <button 
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium flex items-center"
                  onClick={() => setIsVisaDropdownOpen(!isVisaDropdownOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isVisaDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="/study-in-uk" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100" role="menuitem">Student Visa</a>
                      <a href="#visitor-visa" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100" role="menuitem">Visitor Visa</a>
                      <a href="#air-ticketing" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100" role="menuitem">Air Ticketing</a>
                      <a href="#tourism" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100" role="menuitem">Tourism</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#blog" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium">Blog</a>
              <a href="#testimonials" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium">Contact Us</a>
              <a href="#consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md text-l font-medium hover:bg-blue-700">Free Consultation</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
            <button 
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsVisaDropdownOpen(!isVisaDropdownOpen)}
            >
              Services
            </button>
            
            {isVisaDropdownOpen && (
              <div className="pl-4 space-y-1">
                <a href="/study-in-uk" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Student Visa</a>
                <a href="#visitor-visa" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Visitor Visa</a>
                <a href="#air-ticketing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Air Ticketing</a>
                <a href="#tourism" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Tourism</a>
              </div>
            )}
            
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Blog</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
            <a href="#consultation" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700">Free Consultation</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar