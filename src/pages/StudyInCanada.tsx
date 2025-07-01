import React from 'react'
import { MapPin, GraduationCap, DollarSign, Clock, Users, Award, CheckCircle } from 'lucide-react'

const StudyInCanada = () => {
  const whyCanada = [
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: 'World-Class Education',
      description: 'Canada is home to some of the world\'s top universities and colleges, offering high-quality education recognized globally.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-600" />,
      title: 'Affordable Tuition',
      description: 'Compared to other English-speaking countries, Canada offers excellent value for money with competitive tuition fees.'
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'Multicultural Society',
      description: 'Experience Canada\'s welcoming, diverse, and inclusive society that celebrates multiculturalism.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: 'Post-Study Work Opportunities',
      description: 'Graduate with a Post-Graduation Work Permit (PGWP) and gain valuable Canadian work experience.'
    }
  ]

  const topUniversities = [
    { name: 'University of Toronto', location: 'Toronto, Ontario', ranking: '#1 in Canada' },
    { name: 'University of British Columbia', location: 'Vancouver, BC', ranking: '#2 in Canada' },
    { name: 'McGill University', location: 'Montreal, Quebec', ranking: '#3 in Canada' },
    { name: 'McMaster University', location: 'Hamilton, Ontario', ranking: '#4 in Canada' },
    { name: 'University of Alberta', location: 'Edmonton, Alberta', ranking: '#5 in Canada' },
    { name: 'University of Waterloo', location: 'Waterloo, Ontario', ranking: 'Top for Engineering' }
  ]

  const popularCourses = [
    'Business Administration',
    'Computer Science',
    'Engineering',
    'Healthcare & Medicine',
    'Natural Resources',
    'Arts & Humanities'
  ]

  const requirements = [
    'Valid passport',
    'Letter of acceptance from a Canadian institution',
    'Proof of financial support (CAD $10,000+ per year)',
    'English/French language proficiency (IELTS/TOEFL/TEF)',
    'Statement of Purpose',
    'Academic transcripts and certificates',
    'Medical examination (if required)',
    'Police clearance certificate'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-red-600 to-red-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/canada-hero.jpg" 
            alt="Study in Canada" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/30 backdrop-blur-md border border-red-400/50 mb-6">
              <MapPin className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Study Destination</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in <span className="text-red-200">Canada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover world-class education in one of the most welcoming countries. Experience Canada's high academic standards, multicultural environment, and excellent post-study opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold rounded-lg transition duration-300">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Universities & Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">800,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">2 Languages</div>
              <div className="text-gray-600">English & French</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">3 Years</div>
              <div className="text-gray-600">Post-Study Work Permit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Study in <span className="text-red-600">Canada</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Canada offers an exceptional education system, welcoming culture, and excellent career prospects for international students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCanada.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top <span className="text-red-600">Canadian Universities</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of Canada's most prestigious institutions known for academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topUniversities.map((university, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{university.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{university.location}</span>
                    </div>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    {university.ranking}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular <span className="text-red-600">Study Programs</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Canada offers a wide range of programs across various fields. Here are some of the most popular choices among international students.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularCourses.map((course, index) => (
                  <div key={index} className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cost of Living & Studies</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuition Fees (per year)</span>
                  <span className="font-semibold">CAD $15,000 - $35,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Living Expenses (per year)</span>
                  <span className="font-semibold">CAD $12,000 - $18,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accommodation (per year)</span>
                  <span className="font-semibold">CAD $8,000 - $15,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total (Estimated)</span>
                    <span className="text-red-600">CAD $35,000 - $68,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Canadian <span className="text-red-600">Student Visa Requirements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Here's what you need to apply for a Canadian study permit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Required Documents</h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Processing Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">Processing Time</div>
                    <div className="text-gray-600">4-8 weeks</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">Application Fee</div>
                    <div className="text-gray-600">CAD $150</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">Biometrics Fee</div>
                    <div className="text-gray-600">CAD $85</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Canadian Journey?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Let our experienced consultants guide you through every step of your application process.
            </p>
            <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyInCanada
