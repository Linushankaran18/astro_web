import React from 'react'
import { GraduationCap, Globe, Users, Award, CheckCircle } from 'lucide-react'

const About = () => (
  <section id="about" className="pt-24 pb-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            About <span className="text-blue-600">Astro Trend</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We are your trusted partner for student visas, travel, and global education. With 500+ happy clients and a 98% visa success rate, we turn aspirations into achievements.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/about/about-team.jpg"
            alt="Astro Trend Team"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">500+</div>
          <div className="text-gray-600">Clients Served</div>
        </div>
        <div className="text-center">
          <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">15+</div>
          <div className="text-gray-600">Countries Covered</div>
        </div>
        <div className="text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">98%</div>
          <div className="text-gray-600">Visa Success Rate</div>
        </div>
        <div className="text-center">
          <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900">5-Star</div>
          <div className="text-gray-600">Client Reviews</div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most reliable and innovative consultancy for international education and travel, empowering every client to achieve their global dreams.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide transparent, expert, and personalized guidance for students and travelers, ensuring a smooth journey from application to arrival.
          </p>
        </div>
      </div>

      {/* How We Work */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 rounded-lg p-6 text-center flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-blue-900 mb-2">Personal Consultation</h3>
            <p className="text-gray-700">We listen to your goals and provide honest, expert advice tailored to your needs.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-blue-900 mb-2">Step-by-Step Support</h3>
            <p className="text-gray-700">From university selection to visa application and travel, we guide you at every stage.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-blue-900 mb-2">Success & Beyond</h3>
            <p className="text-gray-700">Our support continues after your arrival, ensuring a smooth transition and ongoing success.</p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900 mb-2">Student Visas</h4>
            <p className="text-gray-700 text-sm">Comprehensive guidance for students seeking education abroad, from application to approval.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900 mb-2">Visitor Visas</h4>
            <p className="text-gray-700 text-sm">Hassle-free visitor visa services for tourism, business, or family visits.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900 mb-2">Air Ticketing</h4>
            <p className="text-gray-700 text-sm">Best deals on international and domestic flights with flexible booking options.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900 mb-2">Tourism Services</h4>
            <p className="text-gray-700 text-sm">Customized tour packages, hotel bookings, and local experiences for memorable trips.</p>
          </div>
        </div>
      </div>

      {/* Gallery
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Journey in Pictures</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/about/gallery1.jpg" alt="Gallery 1" className="rounded-lg object-cover w-full h-40" />
          <img src="/images/about/gallery2.jpg" alt="Gallery 2" className="rounded-lg object-cover w-full h-40" />
          <img src="/images/about/gallery3.jpg" alt="Gallery 3" className="rounded-lg object-cover w-full h-40" />
          <img src="/images/about/gallery4.jpg" alt="Gallery 4" className="rounded-lg object-cover w-full h-40" />
        </div>
      </div> */}

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Let’s Make Your Dream a Reality</h2>
        <p className="text-lg text-gray-700 mb-6">Contact us for a free consultation and take the first step toward your global future.</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
)

export default About
