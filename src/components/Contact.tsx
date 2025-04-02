import React from 'react'
import { MapPin, Phone, GraduationCap, Globe, Award } from 'lucide-react'

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-blue-100">{details}</p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
            <GraduationCap className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-blue-700 font-medium">Start Your International Education Journey</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Ready to <span className="text-blue-600">Study Abroad</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our education consultants are here to help you turn your international study dreams into reality
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Get Personalized Guidance</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="study-level" className="block text-sm font-medium text-gray-700">
                      Study Level
                    </label>
                    <select
                      id="study-level"
                      name="study-level"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="">Select study level</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="diploma">Diploma/Certificate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="">Select destination</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="europe">Europe</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Questions or Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Tell us about your study goals and any specific questions you have..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300"
                  >
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Start Your Application Today
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Your information is secure and won't be shared with third parties
                </p>
              </form>
              
              
            </div>
            
            <div className="lg:w-1/2 bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">How We Support Your Study Abroad Journey</h3>
                
                <div className="space-y-8">
                  <ContactInfo 
                    icon={<GraduationCap className="h-6 w-6" />}
                    title="University Applications"
                    details="Expert guidance for applications to top universities worldwide"
                  />
                  <ContactInfo 
                    icon={<Award className="h-6 w-6" />}
                    title="Scholarship Assistance"
                    details="Help finding and applying for scholarships to fund your education"
                  />
                  <ContactInfo 
                    icon={<Globe className="h-6 w-6" />}
                    title="Visa Processing"
                    details="End-to-end visa application support with high success rates"
                  />
                  <ContactInfo 
                    icon={<Phone className="h-6 w-6" />}
                    title="Contact Us"
                    details="+94 77 226 6889 | info@astros.lk"
                  />
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Our Offices</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Colombo: 20, 42nd Lane, Colombo-06</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Jaffna: 108, Palaly Road, Thirunelvely</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Abstract shapes in the background */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-blue-400 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact