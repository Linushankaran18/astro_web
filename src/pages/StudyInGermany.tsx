import React, { useState } from 'react'
import { MapPin, DollarSign, Clock, Users, Award, CheckCircle, Calculator, TrendingUp, Building, School } from 'lucide-react'

const StudyInGermany = () => {
  const [blockedAccountAmount, setBlockedAccountAmount] = useState(11208) // Current required amount in EUR
  const [exchangeRate, setExchangeRate] = useState(88.5) // EUR to LKR approximate rate
  const [calculatedAmount, setCalculatedAmount] = useState(blockedAccountAmount * exchangeRate)

  const handleCalculateBlockedAccount = () => {
    setCalculatedAmount(blockedAccountAmount * exchangeRate)
  }

  const whyGermany = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'World-Class Education',
      description: 'Germany hosts some of the world\'s oldest and most prestigious universities with cutting-edge research facilities.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-amber-600" />,
      title: 'Low or No Tuition Fees',
      description: 'Public universities charge minimal or no tuition fees, making quality education highly affordable.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: 'Strong Job Market',
      description: 'Europe\'s largest economy offers excellent career opportunities and post-study work options.'
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Cultural Diversity',
      description: 'Experience rich culture, history, and connect with students from around the world.'
    }
  ]

  const publicUniversities = [
    { name: 'Technical University of Munich', location: 'Munich', tuition: '€0 - €150/semester', ranking: '#1 in Germany' },
    { name: 'Ludwig Maximilian University', location: 'Munich', tuition: '€0 - €150/semester', ranking: '#2 in Germany' },
    { name: 'Heidelberg University', location: 'Heidelberg', tuition: '€0 - €150/semester', ranking: '#3 in Germany' },
    { name: 'Humboldt University Berlin', location: 'Berlin', tuition: '€0 - €300/semester', ranking: 'Top 100 Global' }
  ]

  const privateUniversities = [
    { name: 'Frankfurt School of Finance', location: 'Frankfurt', tuition: '€39,000 - €42,000/year', ranking: 'Top Business School' },
    { name: 'ESMT Berlin', location: 'Berlin', tuition: '€56,000/year', ranking: 'Top MBA Program' },
    { name: 'WHU Otto Beisheim School', location: 'Düsseldorf', tuition: '€39,800/year', ranking: 'Top Private University' },
    { name: 'Jacobs University Bremen', location: 'Bremen', tuition: '€20,000/year', ranking: 'International Focus' }
  ]

  const procedures = [
    { step: 1, title: 'Choose Your Program', description: 'Research and select universities and programs that match your interests and qualifications.' },
    { step: 2, title: 'Prepare Documents', description: 'Gather academic transcripts, language certificates (German/English), and other required documents.' },
    { step: 3, title: 'Apply to Universities', description: 'Submit applications through uni-assist or directly to universities before deadlines.' },
    { step: 4, title: 'Open Blocked Account', description: 'Deposit required funds (€11,208 for 2024) in a German blocked account.' },
    { step: 5, title: 'Apply for Student Visa', description: 'Submit visa application with all documents including university admission and blocked account proof.' },
    { step: 6, title: 'Arrive in Germany', description: 'Complete registration, find accommodation, and begin your studies.' }
  ]

  const requirements = [
    'Valid passport',
    'University admission letter',
    'Academic transcripts and certificates',
    'German language certificate (DSH, TestDaF) or English (IELTS/TOEFL)',
    'Blocked account proof (€11,208)',
    'Health insurance coverage',
    'Statement of Purpose',
    'CV/Resume',
    'Passport photos',
    'Application fee payment'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-red-600 via-amber-600 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/germany-hero.jpg" 
            alt="Study in Germany" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/30 backdrop-blur-md border border-amber-400/50 mb-6">
              <MapPin className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Europe's Education Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in <span className="text-amber-200">Germany</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover world-class education in the heart of Europe. With minimal tuition fees, excellent research opportunities, and a thriving job market, Germany is the perfect destination for ambitious students.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold rounded-lg transition duration-300">
                Embassy Appointments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Germany's Growing <span className="text-amber-600">Demand</span>
            </h2>
            <p className="text-xl text-gray-600">Why Germany is becoming the top choice for international students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">400,000+</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">80%</div>
              <div className="text-gray-600">Employment Rate</div>
            </div>
            <div className="text-center bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">350+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">€0</div>
              <div className="text-gray-600">Tuition at Public Unis</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Rising Demand Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🔥 Most Sought-After Programs:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Engineering & Technology (35% of applicants)</li>
                  <li>• Business & Management (25%)</li>
                  <li>• Computer Science & IT (20%)</li>
                  <li>• Medicine & Life Sciences (15%)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🌍 Growing International Interest:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• 15% increase in applications (2023)</li>
                  <li>• Top source countries: India, China, Turkey</li>
                  <li>• 90% visa approval rate</li>
                  <li>• Post-study work visa up to 18 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Germany */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Study in <span className="text-amber-600">Germany</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Germany offers unique advantages that make it an ideal destination for international students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGermany.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-amber-600">Public vs Private</span> Universities
            </h2>
            <p className="text-xl text-gray-600">Choose the right path for your education journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Public Universities */}
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <School className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Public Universities</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Key Benefits:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No or minimal tuition fees</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />World-renowned research facilities</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Strong industry connections</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Government funding support</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Top Public Universities:</h4>
                {publicUniversities.map((uni, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900">{uni.name}</h5>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{uni.ranking}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {uni.location}
                      </div>
                      <div className="font-medium text-green-600">{uni.tuition}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Universities */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Private Universities</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Key Benefits:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Smaller class sizes</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Specialized programs</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Industry-focused curriculum</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Faster admission process</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Top Private Universities:</h4>
                {privateUniversities.map((uni, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900">{uni.name}</h5>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{uni.ranking}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {uni.location}
                      </div>
                      <div className="font-medium text-blue-600">{uni.tuition}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* German Blocked Account Calculator */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 mb-4">
              <Calculator className="h-5 w-5 text-amber-700 mr-2" />
              <span className="text-amber-700 font-medium">Financial Planning</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              German <span className="text-amber-600">Blocked Account</span> Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate the exact amount you need for your German blocked account
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Calculate Your Blocked Account</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Amount (EUR)
                    </label>
                    <input
                      type="number"
                      value={blockedAccountAmount}
                      onChange={(e) => setBlockedAccountAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current requirement: €11,208 (2024)</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Exchange Rate (EUR to LKR)
                    </label>
                    <input
                      type="number"
                      value={exchangeRate}
                      onChange={(e) => setExchangeRate(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">Current approximate rate</p>
                  </div>
                  
                  <button
                    onClick={handleCalculateBlockedAccount}
                    className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300"
                  >
                    Calculate Amount
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Calculation Result</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Required in EUR:</span>
                    <span className="text-2xl font-bold text-amber-600">€{blockedAccountAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Exchange Rate:</span>
                    <span className="font-semibold">1 EUR = {exchangeRate} LKR</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total in LKR:</span>
                      <span className="text-3xl font-bold text-green-600">Rs. {calculatedAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">💡 Important Notes:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Amount covers 1 year of living expenses</li>
                      <li>• You can withdraw €934 per month</li>
                      <li>• Account must be opened before visa application</li>
                      <li>• Add bank charges and processing fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Procedure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Application <span className="text-amber-600">Procedure</span>
            </h2>
            <p className="text-xl text-gray-600">
              Follow these steps to secure your place in a German university
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    {procedure.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{procedure.title}</h3>
                </div>
                <p className="text-gray-600">{procedure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visa <span className="text-amber-600">Requirements</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ensure you have all necessary documents for a successful German student visa application.
              </p>
              
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Processing Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-amber-600 mr-3" />
                  <div>
                    <div className="font-semibold">University Application</div>
                    <div className="text-gray-600">2-6 months before semester</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-amber-600 mr-3" />
                  <div>
                    <div className="font-semibold">Blocked Account</div>
                    <div className="text-gray-600">1-2 weeks processing</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-amber-600 mr-3" />
                  <div>
                    <div className="font-semibold">Visa Processing</div>
                    <div className="text-gray-600">4-8 weeks</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📞 Need Help?</h4>
                <p className="text-sm text-gray-600">
                  Our Germany education consultants are here to guide you through every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-amber-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your German Adventure?
            </h2>
            <p className="text-xl text-white mb-8">
              Join thousands of students who have chosen Germany for their higher education. Start your journey today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold rounded-lg transition duration-300">
                Embassy Appointments
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyInGermany
