import React from 'react'
import { GraduationCap, Plane, Ticket, Map } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn More
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      id: 'student-visa',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: 'Student Visas',
      description: 'Comprehensive guidance for students seeking education abroad. We handle documentation, university applications, and visa processing.',
      link: '#student-visa'
    },
    {
      id: 'visitor-visa',
      icon: <Plane className="h-6 w-6 text-blue-600" />,
      title: 'Visitor Visas',
      description: 'Hassle-free visitor visa services for tourism, business trips, or family visits with high approval rates.',
      link: '#visitor-visa'
    },
    {
      id: 'air-ticketing',
      icon: <Ticket className="h-6 w-6 text-blue-600" />,
      title: 'Air Ticketing',
      description: 'Best deals on international and domestic flights with flexible booking options and 24/7 support.',
      link: '#air-ticketing'
    },
    {
      id: 'tourism',
      icon: <Map className="h-6 w-6 text-blue-600" />,
      title: 'Tourism Services',
      description: 'Customized tour packages, hotel bookings, and local experiences for memorable vacations worldwide.',
      link: '#tourism'
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel and visa solutions tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services