import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom';

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
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/tourism" className="text-gray-700 hover:text-blue-600">Tourism</Link>
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