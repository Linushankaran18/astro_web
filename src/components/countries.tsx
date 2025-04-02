// This can be added as a new component file or integrated into an existing page

import React from 'react'
import { GraduationCap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const VisaDestinations = () => {
  const countries = [
    // {
    //   name: "United States",
    //   flag: "/images/flags/usa.png", // Add these flag images to your public folder
    //   description: "World-renowned universities with diverse programs and opportunities",
    //   popularUniversities: ["Harvard University", "MIT", "Stanford University"]
    // },
    {
      name: "United Kingdom",
      flag: "/images/flags/uk.jpeg",
      description: "Prestigious education system with centuries of academic excellence",
      popularUniversities: ["Oxford", "Cambridge", "Imperial College London"]
    },
    {
      name: "Canada",
      flag: "/images/flags/canada.jpeg",
      description: "High quality education with pathway to permanent residency",
      popularUniversities: ["University of Toronto", "McGill", "University of British Columbia"]
    },
    {
      name: "Germany",
      flag: "/images/flags/germany.jpeg",
      description: "Low or no tuition fees with strong focus on research and innovation",
      popularUniversities: ["TU Munich", "Heidelberg University", "Humboldt University"]
    },
    {
      name: "Australia",
      flag: "/images/flags/australia.jpeg",
      description: "Excellent quality of life and strong support for international students",
      popularUniversities: ["University of Melbourne", "University of Sydney", "ANU"]
    }
    
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
            <Globe className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-blue-700 font-medium">Global Study Destinations</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Countries We Provide <span className="text-blue-600">Student Visas</span> For
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Start your educational journey in these top destinations for international students
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="aspect-w-16 aspect-h-9 bg-white flex items-center justify-center overflow-hidden rounded-t-xl">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder-flag.png";
                  }}
                />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1 text-blue-500" />
                    Popular Universities
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {country.popularUniversities.map((uni, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  {
                    <Link 
                    to="/study-in-uk" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    Apply for {country.name} visa
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Expert Visa Guidance
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default VisaDestinations