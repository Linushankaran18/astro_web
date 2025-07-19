import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'

  const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: 'Rukshaman Rathinarsa',
        role: 'Student at University of Dundee',
        image: '/images/testimonials/ruku.jpg',
        quote: 'Astro Trend made my dream of studying abroad a reality. Their guidance throughout the student visa process was invaluable.\nI highly recommend their services to anyone looking to study overseas.',
        rating: 5,
        country: 'UK',
        countryFlag: '/images/flags/flaguk.png'
      },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/testimonials/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and \nflight bookings has saved me countless hours.',
      rating: 5,
      country: 'Canada',
      countryFlag: '/images/flags/flagcan.png'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Family Vacation',
      image: '/images/testimonials/sainuja photo.jpg',
      quote: 'Our family trip to Europe was perfectly planned by GlobalVisa. From visa applications to tour arrangements, everything was \nhandled professionally. We had the vacation of a lifetime!',
      rating: 4,
      country: 'Europe',
      countryFlag: '/images/flags/flagfra.png'
    },
    {
      id: 4,
      name: 'Palany Jeevan',
      role: 'Student at University of Chester',
      image: '/images/testimonials/jeevan.jpeg',
      quote: 'The team at GlobalVisa went above and beyond to help me with my complicated visa situation. Their expertise and dedication \nare unmatched in the industry.',
      rating: 5,
      country: 'UK',
      countryFlag: '/images/flags/flaguk.png'
    },
    {
      id: 5,
      name: 'Lowe Suoun Sandeepa',
      role: 'Student at Swansea University',
      image: '/images/testimonials/supun.png',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling \nvisa applications and flight bookings has saved me countless hours.',
      rating: 5,
      country: 'UK',
      countryFlag: '/images/flags/flaguk.png'
    },
    {
      id: 6,
      name: 'Mathivathany Baskaran',
      role: 'Graduation Visa Applicant',
      image: '/images/testimonials/mathi.jpeg',
      quote: 'Astro Trend made my graduation visa process seamless. \nTheir team was always available to answer my questions and guide me through each step.',
      rating: 4,
      country: 'UK',
      countryFlag: '/images/flags/flaguk.png'
    },
    {
      id: 7,
      name: 'Lowe Malith Sudarsha',
      role: 'Student at University of South Wales',
      image: '/images/testimonials/malith.png',
      quote: 'I\'ve got my student visa for the course MSc in Mechanical Engineering in UK through the services of Astro Trend. \nTheir team was very supportive and guided me through the entire process.',
      rating: 5,
      country: 'UK',
      countryFlag: '/images/flags/flaguk.png'
    },
    {
      id: 8,
      name: 'Kajanan Sivarajah',
      role: 'Student at Humber College',
      image: '/images/testimonials/kajan.png',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. \nTheir efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5,
      country: 'Canada',
      countryFlag: '/images/flags/flagcan.png'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
            <Star className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-blue-700 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">What <span className="text-blue-600">Our Clients</span> Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from people who have successfully achieved their travel and education goals with our help
          </p>
          
          {/* Google Reviews Link */}
          <div className="mt-6">
            <a 
              href="https://g.page/r/CWxEDgwT1eMPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center mr-3">
                <span className="text-blue-600 font-semibold mr-1">Google</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              View Our Google Reviews
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 flex justify-center">
                        <div className="relative">
                          <img 
                            className="h-32 w-32 rounded-full object-cover border-4 border-blue-100" 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                          />
                          {/* Country Flag Badge */}
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
                            <img 
                              src={testimonial.countryFlag} 
                              alt={testimonial.country}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4 whitespace-pre-line">"{testimonial.quote}"</p>
                        <div className="font-medium">
                          <div className="flex items-center justify-center md:justify-start">
                            <p className="text-blue-600">{testimonial.name}</p>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {testimonial.country}
                            </span>
                          </div>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials