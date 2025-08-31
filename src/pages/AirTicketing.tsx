import React from 'react'

const airlineLogos = [
  '/images/airlines/emirates.png',
  '/images/airlines/qatar.png',
  '/images/airlines/srilankan.png',
  '/images/airlines/airindia.png',
  '/images/airlines/britishairways.png',
  '/images/airlines/singapore.png',
  '/images/airlines/etihad.png',
  '/images/airlines/turkish.png',
  '/images/airlines/airarabia.png',
  '/images/airlines/indigo.png',
  '/images/airlines/aircanada.png',
  // Add more airline logos as needed
]

const AirTicketing = () => (
  <section className="pt-24 pb-16 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Air Ticketing <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book your flight to any destination, on any airline, with confidence. We offer the best deals, flexible options, and 24/7 support for all your air ticketing needs.
        </p>
      </div>

      {/* Airline Logos Slideshow */}
      <div className="overflow-hidden mb-12">
        <div className="relative w-full h-24">
          <div
            className="absolute flex items-center h-24 animate-[slide-left_30s_linear_infinite]"
            style={{
              minWidth: `${airlineLogos.length * 140}px`,
              animationName: 'slide-left',
              animationDuration: '30s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {airlineLogos.concat(airlineLogos).map((logo, idx) => (
              <div key={idx} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  alt="Airline Logo"
                  className="h-16 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Slideshow animation keyframes */}
        <style>
          {`
            @keyframes slide-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Book With Us?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>All major airlines and destinations worldwide</li>
            <li>Competitive fares and exclusive student/youth discounts</li>
            <li>Flexible date changes and refund options</li>
            <li>Group bookings and special assistance</li>
            <li>24/7 customer support for urgent travel needs</li>
            <li>Visa and travel documentation guidance</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/airlines/airplane-ticket.jpg"
            alt="Air Ticket Booking"
            className="rounded-xl shadow-lg w-full max-w-xs object-cover"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Book Your Flight?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us now for a free quote or to get expert advice on your travel plans.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get a Quote
        </a>
      </div>
    </div>
  </section>
)

export default AirTicketing
