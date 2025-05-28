import React, { useState } from 'react';
import { Globe, Plane, Sun, Tag, Users, Calendar, Clock, Map, Search, Check, Utensils, Camera, Umbrella, Shield, Mountain } from 'lucide-react';


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

  // State for Travel Planner
  const [selectedDestination, setSelectedDestination] = useState('');
  const [customDays, setCustomDays] = useState(7);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [accommodation, setAccommodation] = useState('hotel');
  const [showPlanSummary, setShowPlanSummary] = useState(false);

  // Available destinations
  const availableDestinations = [
    { id: 'singapore', name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 150 },
    { id: 'malaysia', name: 'Malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 120 },
    { id: 'india', name: 'India', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 100 },
    { id: 'thailand', name: 'Thailand', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 110 },
    { id: 'dubai', name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 200 },
    { id: 'japan', name: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', basePricePerDay: 180 },
  ];

  // Available activities
  const activities = [
    { id: 'sightseeing', name: 'Sightseeing', icon: <Camera className="h-4 w-4 mr-2" />, price: 30 },
    { id: 'food-tour', name: 'Food Tour', icon: <Utensils className="h-4 w-4 mr-2" />, price: 50 },
    { id: 'adventure', name: 'Adventure Activities', icon: <Mountain className="h-4 w-4 mr-2" />, price: 70 },
    { id: 'beach', name: 'Beach Activities', icon: <Umbrella className="h-4 w-4 mr-2" />, price: 25 },
    { id: 'cultural', name: 'Cultural Experiences', icon: <Globe className="h-4 w-4 mr-2" />, price: 40 },
    { id: 'shopping', name: 'Shopping Trip', icon: <Tag className="h-4 w-4 mr-2" />, price: 20 },
  ];

  // Toggle activity selection
  const toggleActivity = (activityId: string) => {
    if (selectedActivities.includes(activityId)) {
      setSelectedActivities(selectedActivities.filter(id => id !== activityId));
    } else {
      setSelectedActivities([...selectedActivities, activityId]);
    }
  };

  // Calculate estimated cost
  const calculateEstimatedCost = () => {
    if (!selectedDestination) return 0;
    
    const destination = availableDestinations.find(d => d.id === selectedDestination);
    if (!destination) return 0;
    
    let totalCost = destination.basePricePerDay * customDays * adultsCount;
    
    // Children at 70% of adult cost
    totalCost += destination.basePricePerDay * customDays * childrenCount * 0.7;
    
    // Add cost for selected activities
    selectedActivities.forEach(activityId => {
      const activity = activities.find(a => a.id === activityId);
      if (activity) {
        totalCost += activity.price * (adultsCount + childrenCount);
      }
    });
    
    // Accommodation multiplier
    const accommodationMultiplier = 
      accommodation === 'luxury' ? 1.5 : 
      accommodation === 'budget' ? 0.7 : 1;
    
    return Math.round(totalCost * accommodationMultiplier);
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDestination) {
      setShowPlanSummary(true);
    }
  };

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

        {/* Custom Travel Planner */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Custom Travel Plan</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Plan your perfect trip by selecting your destination, duration, and activities
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="flex items-center">
                <Map className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Travel Planner</h3>
              </div>
              <p className="mt-2 text-blue-100">Select from our available destinations and customize your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-600" />
                    Select Your Destination
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {availableDestinations.map(destination => (
                      <div 
                        key={destination.id}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                          selectedDestination === destination.id 
                            ? 'border-blue-600 shadow-md scale-105' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedDestination(destination.id)}
                      >
                        <div className="h-24 overflow-hidden">
                          <img 
                            src={destination.image} 
                            alt={destination.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 text-center">
                          <p className="font-medium">{destination.name}</p>
                          <p className="text-sm text-gray-500">${destination.basePricePerDay}/day</p>
                        </div>
                        {selectedDestination === destination.id && (
                          <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration (days)
                      </label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="3"
                          max="21"
                          value={customDays}
                          onChange={(e) => setCustomDays(parseInt(e.target.value))}
                          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="ml-3 text-lg font-semibold text-blue-800 min-w-[40px]">{customDays}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Adults
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => setAdultsCount(Math.max(1, adultsCount - 1))}
                            className="bg-gray-200 text-gray-700 py-1 px-3 rounded-l-md"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={adultsCount}
                            readOnly
                            className="w-12 text-center border-t border-b border-gray-300 py-1"
                          />
                          <button
                            type="button"
                            onClick={() => setAdultsCount(adultsCount + 1)}
                            className="bg-gray-200 text-gray-700 py-1 px-3 rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Children
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                            className="bg-gray-200 text-gray-700 py-1 px-3 rounded-l-md"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={childrenCount}
                            readOnly
                            className="w-12 text-center border-t border-b border-gray-300 py-1"
                          />
                          <button
                            type="button"
                            onClick={() => setChildrenCount(childrenCount + 1)}
                            className="bg-gray-200 text-gray-700 py-1 px-3 rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Customize Your Experience</h4>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accommodation Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <label className={`flex items-center justify-center p-3 border rounded-md cursor-pointer ${accommodation === 'budget' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'}`}>
                        <input
                          type="radio"
                          name="accommodation"
                          value="budget"
                          checked={accommodation === 'budget'}
                          onChange={() => setAccommodation('budget')}
                          className="sr-only"
                        />
                        <span className="text-sm">Budget</span>
                      </label>
                      
                      <label className={`flex items-center justify-center p-3 border rounded-md cursor-pointer ${accommodation === 'hotel' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'}`}>
                        <input
                          type="radio"
                          name="accommodation"
                          value="hotel"
                          checked={accommodation === 'hotel'}
                          onChange={() => setAccommodation('hotel')}
                          className="sr-only"
                        />
                        <span className="text-sm">Standard</span>
                      </label>
                      
                      <label className={`flex items-center justify-center p-3 border rounded-md cursor-pointer ${accommodation === 'luxury' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'}`}>
                        <input
                          type="radio"
                          name="accommodation"
                          value="luxury"
                          checked={accommodation === 'luxury'}
                          onChange={() => setAccommodation('luxury')}
                          className="sr-only"
                        />
                        <span className="text-sm">Luxury</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Activities (Optional)
                    </label>
                    <div className="space-y-2">
                      {activities.map(activity => (
                        <div key={activity.id} className="flex items-center">
                          <input
                            id={`activity-${activity.id}`}
                            type="checkbox"
                            checked={selectedActivities.includes(activity.id)}
                            onChange={() => toggleActivity(activity.id)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`activity-${activity.id}`} className="ml-2 flex items-center text-sm text-gray-700">
                            {activity.icon}
                            {activity.name}
                            <span className="ml-auto text-gray-500">${activity.price}/person</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Estimated Total:</span>
                        <span className="text-xl font-bold text-blue-700">${calculateEstimatedCost().toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        This is an estimate based on your selections. Final price may vary.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={!selectedDestination}
                      className={`w-full py-3 rounded-lg text-white font-medium ${
                        selectedDestination 
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {selectedDestination ? 'Create My Travel Plan' : 'Please Select a Destination'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Travel Plan Summary */}
          {showPlanSummary && (
            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="flex items-center">
                  <Check className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Your Travel Plan</h3>
                </div>
                <p className="mt-2 text-green-100">Great choice! Here's a summary of your custom travel package</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {selectedDestination && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Destination</h4>
                        <div className="flex items-center">
                          <img 
                            src={availableDestinations.find(d => d.id === selectedDestination)?.image}
                            alt={availableDestinations.find(d => d.id === selectedDestination)?.name}
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <p className="text-xl font-bold text-gray-800">
                              {availableDestinations.find(d => d.id === selectedDestination)?.name}
                            </p>
                            <p className="text-gray-600">{customDays} days journey</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Trip Details</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Users className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-gray-700">
                            {adultsCount} Adult{adultsCount > 1 ? 's' : ''}{childrenCount > 0 ? ` & ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}` : ''}
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-gray-700">{customDays} Days</span>
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-gray-700">
                            {accommodation === 'budget' ? 'Budget' : accommodation === 'luxury' ? 'Luxury' : 'Standard'} Accommodation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    {selectedActivities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Selected Activities</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedActivities.map(activityId => {
                            const activity = activities.find(a => a.id === activityId);
                            return activity && (
                              <div key={activityId} className="flex items-center p-2 bg-blue-50 rounded-md">
                                {activity.icon}
                                <span className="text-gray-800">{activity.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Price Details</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Base Package</span>
                            <span className="text-gray-800">${calculateEstimatedCost().toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Taxes & Fees</span>
                            <span className="text-gray-800">${Math.round(calculateEstimatedCost() * 0.1).toLocaleString()}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            <div className="flex justify-between font-bold">
                              <span>Total</span>
                              <span className="text-blue-700">${Math.round(calculateEstimatedCost() * 1.1).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-4">
                        <button 
                          onClick={() => setShowPlanSummary(false)}
                          className="flex-1 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                        >
                          Modify Plan
                        </button>
                        <button 
                          className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Book This Trip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
