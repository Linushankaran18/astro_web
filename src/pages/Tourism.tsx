import React from 'react';
import { Globe, Plane, Sun, Tag, Users, Calendar, Clock } from 'lucide-react';

interface TourPackageProps {
  title: string;
  destination: string;
  image: string;
  days: number;
  price: number;
  type: 'inbound' | 'outbound';
  activities: string[];
  groupSize: number;
}

const TourPackage: React.FC<TourPackageProps> = ({ 
  title, 
  destination, 
  image, 
  days, 
  price, 
  activities, 
  groupSize 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-102 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={destination} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${price.toLocaleString()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-blue-700 font-medium mb-4">{destination}</p>
        
        <div className="flex items-center mb-4 text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>{days} days</span>
          <Users className="h-5 w-5 ml-4 mr-2" />
          <span>Up to {groupSize} people</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-2">Activities Include:</h4>
          <div className="flex flex-wrap gap-2">
            {activities.map((activity, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                {activity}
              </span>
            ))}
          </div>
        </div>
        
        <a 
          href="#" 
          className="mt-2 inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

const Tourism = () => {
  const inboundPackages = [
    {
      title: "Cultural Heritage Tour",
      destination: "Historical Sites Tour",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 7,
      price: 1299,
      type: 'inbound' as const,
      activities: ['Heritage Sites', 'Local Cuisine', 'Cultural Shows'],
      groupSize: 15
    },
    {
      title: "Beach Paradise Getaway",
      destination: "Coastal Exploration",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 5,
      price: 899,
      type: 'inbound' as const,
      activities: ['Beach Activities', 'Snorkeling', 'Seafood Dining'],
      groupSize: 10
    },
    {
      title: "Wildlife Safari Adventure",
      destination: "National Parks Tour",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 6,
      price: 1499,
      type: 'inbound' as const,
      activities: ['Safari', 'Camping', 'Photography'],
      groupSize: 8
    }
  ];

  const outboundPackages = [
    {
      title: "European Discovery",
      destination: "France, Italy, Switzerland",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 12,
      price: 2999,
      type: 'outbound' as const ,
      activities: ['Sightseeing', 'Wine Tasting', 'Museum Tours'],
      groupSize: 20
    },
    {
      title: "Asian Explorer",
      destination: "Thailand, Singapore, Vietnam",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 10,
      price: 1899,
      type: 'outbound' as const,
      activities: ['Island Hopping', 'Street Food', 'Temple Visits'],
      groupSize: 15
    },
    {
      title: "Middle East Experience",
      destination: "Dubai, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 8,
      price: 2299,
      type: 'outbound' as const,
      activities: ['Desert Safari', 'Luxury Shopping', 'Architecture Tours'],
      groupSize: 12
    },
    {
      title: "African Safari Adventure",
      destination: "Kenya, Tanzania",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      days: 9,
      price: 3499,
      type: 'outbound' as const,
      activities: ['Wildlife Safari', 'Tribal Village Visits', 'Hot Air Balloon'],
      groupSize: 10
    }
  ];

  return (
    <div className="py-16 pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight mb-4">
            Discover Exciting <span className="text-blue-600">Tour Packages</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Explore our carefully curated inbound and outbound travel packages designed to create unforgettable memories.
          </p>
        </div>

        {/* Outbound Packages */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Outbound Packages</h2>
            </div>
            <div className="ml-auto">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View All Packages
                <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outboundPackages.map((pkg, index) => (
              <TourPackage key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* Inbound Packages */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Inbound Packages</h2>
            </div>
            <div className="ml-auto">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View All Packages
                <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inboundPackages.map((pkg, index) => (
              <TourPackage key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Travel Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We ensure you get the best value for your money with our price matching policy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our experienced guides provide rich insights into the culture and history of each destination.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Change your travel dates or destinations with our flexible booking policy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is available round the clock to assist you during your journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;
