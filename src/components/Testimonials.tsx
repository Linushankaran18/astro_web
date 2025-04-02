import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

  const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: 'Rukshaman Rathinarsa',
        role: 'Student at University of Dundee',
        image: '/images/ruku.jpg',
        quote: 'Astro Trend made my dream of studying abroad a reality. Their guidance throughout the student visa process was invaluable. I highly recommend their services to anyone looking to study overseas.',
        rating: 5
      },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Family Vacation',
      image: '/images/sainuja photo.jpg',
      quote: 'Our family trip to Europe was perfectly planned by GlobalVisa. From visa applications to tour arrangements, everything was handled professionally. We had the vacation of a lifetime!',
      rating: 4
    },
    {
      id: 4,
      name: 'Palany Jeevan',
      role: 'Student at University of Chester',
      image: '/images/jeevan.jpeg',
      quote: 'The team at GlobalVisa went above and beyond to help me with my complicated visa situation. Their expertise and dedication are unmatched in the industry.',
      rating: 5
    },
    {
      id: 5,
      name: 'Subarmaniyam Prabukumar',
      role: 'Student at University Dundee',
      image: '/images/sainuja.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
    },
    {
      id: 2,
      name: 'Arun Kalastan Saviri',
      role: 'Student at Algoma University',
      image: '/images/arun.jpg',
      quote: 'I\'ve been using Astro Trend for my student visa needs for over last 3 months. Their efficiency in handling visa applications and flight bookings has saved me countless hours.',
      rating: 5
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
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">What <span className="text-blue-600">Our Clients</span> Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from people who have successfully achieved their travel and education goals with our help
          </p>
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
                        <img 
                          className="h-32 w-32 rounded-full object-cover border-4 border-blue-100" 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                        />
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
                        <p className="text-gray-600 italic mb-4 line-clamp-2">"{testimonial.quote}"</p>
                        <div className="font-medium">
                          <p className="text-blue-600">{testimonial.name}</p>
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