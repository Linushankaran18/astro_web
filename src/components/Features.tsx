import React from 'react'
import { ClipboardCheck, Users, GraduationCap, FileCheck, Stamp, Plane, Home, MapPin } from 'lucide-react'

const Features = () => {
  const visaProcess = [
    {
      step: 1,
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Initial Consultation',
      description: 'Meet with our education experts to discuss your academic goals, preferences, and budget.'
    },
    {
      step: 2,
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: 'University Selection',
      description: 'Get personalized university recommendations based on your academic profile and career goals.'
    },
    {
      step: 3,
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: 'Application Submission',
      description: 'We help prepare and submit applications to your chosen universities with required documents.'
    },
    {
      step: 4,
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: 'Offer Acceptance',
      description: 'Receive and accept your university offer with our guidance on choosing the best option.'
    },
    {
      step: 5,
      icon: <Stamp className="h-8 w-8 text-blue-600" />,
      title: 'Visa Application',
      description: 'Complete documentation preparation and submit your student visa application with our expert support.'
    },
    {
      step: 6,
      icon: <Plane className="h-8 w-8 text-blue-600" />,
      title: 'Pre-Departure',
      description: 'Attend our orientation session and get prepared for your journey with essential information.'
    },
    {
      step: 7,
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: 'Arrival Support',
      description: 'Receive guidance on accommodation, local transportation, and settling into your new environment.'
    },
    {
      step: 8,
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: 'Ongoing Assistance',
      description: 'Enjoy continued support throughout your academic journey, including visa extensions if needed.'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
            <GraduationCap className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-blue-700 font-medium">Student Visa Journey</span>
          </div>
          
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Your Path to <span className="text-blue-600">Studying Abroad</span> </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven step-by-step process ensures a smooth transition from application to arrival at your dream university
          </p>
        </div>
        
        <div className="relative">
          {/* Process connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaProcess.slice(0, 4).map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaProcess.slice(4).map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default Features