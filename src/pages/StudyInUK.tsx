import { Book, Award, Clock, Check, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
// Removed unused Navbar import

const StudyInUK = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-80 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/flags/uk.jpeg')",
            backgroundBlendMode: "multiply",
            filter: "contrast(1.1) brightness(0.9)"
          }}
        ></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="relative">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight mb-6 drop-shadow-lg">
                Study in the<br />
                <span className="text-6xl text-white">United Kingdom</span>
              </h1>
              <div className="absolute -left-3 top-0 w-1 h-20"></div>
            </div>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed pl-1 backdrop-blur-sm bg-blue-900/10 p-4 rounded-lg border-l-4 shadow-xl">
              Access world-renowned education and incredible cultural experiences in one of the most popular study destinations globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <span className="mr-2">Apply for UK Student Visa</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <a 
                href="#uk-universities" 
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-medium rounded-lg hover:bg-white/30 transition duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <span className="mr-2">Explore Universities</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in UK Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Study in the United Kingdom?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The UK offers a rich academic tradition with modern innovation and diverse cultural experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-gray-700">
                Home to some of the world's oldest and most prestigious universities with globally recognized qualifications
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Shorter Programs</h3>
              <p className="text-gray-700">
                Bachelor's degrees typically take 3 years and Master's degrees just 1 year, saving you time and money
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cultural Experience</h3>
              <p className="text-gray-700">
                Experience diverse cultures, historic landmarks, and vibrant cities all within a compact geography
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Universities Section */}
      <section id="uk-universities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top UK Universities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The UK is home to many world-class institutions that offer exceptional education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Coventry University",
                image: "/images/universities/coventry.png",
                description: "A forward-looking, modern university with a proud tradition as a provider of high-quality education and a focus on applied research.",
                fields: ["Business", "Engineering", "Health Sciences"]
              },
              {
                name: "University of Chester",
                image: "/images/universities/chester.png",
                description: "Founded in 1839, one of the oldest higher education institutions in the UK with a focus on practical learning and employability.",
                fields: ["Education", "Health & Social Care", "Business & Management"]
              },
              {
                name: "University of Bristol",
                image: "/images/universities/bristol.png",
                description: "A research-intensive university with a reputation for high-quality teaching and innovation across many disciplines.",
                fields: ["Engineering", "Social Sciences", "Life Sciences"]
              },
              {
                name: "University of Greenwich",
                image: "/images/universities/greenwich.png",
                description: "Set in beautiful historic buildings near London, offering career-focused courses and strong industry connections.",
                fields: ["Architecture", "Business", "Computing & Mathematics"]
              },
              {
                name: "University of Hertfordshire",
                image: "/images/universities/hertfordshire.png",
                description: "An innovative and enterprising university with strong links to business and industry.",
                fields: ["Creative Arts", "Computer Science", "Business & Finance"]
              },
              {
                name: "University of Law",
                image: "/images/universities/law.png",
                description: "The UK's longest-established specialist provider of legal education and training with a focus on employability.",
                fields: ["Law", "Business", "Criminology"]
              }
            ].map((uni, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={uni.image} 
                    alt={uni.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-university.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                  <p className="text-gray-600 mb-4">{uni.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Book className="h-4 w-4 mr-2 text-blue-500" />
                      Popular Fields
                    </h4>
                    <ul className="text-sm text-gray-700">
                      {uni.fields.map((field, idx) => (
                        <li key={idx} className="flex items-center mb-1">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {field}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">UK Student Visa Requirements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what you need for your UK student visa application
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Required Documents</h3>
                <ul className="space-y-3">
                  {["Valid passport", "Confirmation of Acceptance for Studies (CAS)", "Proof of financial support", "English language proficiency", "Academic qualifications", "Tuberculosis test results (if applicable)"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Application Process</h3>
                <ol className="space-y-3 list-decimal pl-5">
                  {[
                    "Receive an offer from a UK university",
                    "Pay the tuition deposit to secure your place",
                    "Receive your CAS number",
                    "Apply online for the Student Visa",
                    "Pay the visa fee and immigration health surcharge",
                    "Book and attend a biometric appointment",
                    "Wait for visa decision (typically 3 weeks)"
                  ].map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-blue-800 font-medium mb-4">Our services can help simplify your visa application process</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Get Expert Guidance
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your UK Education Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts will guide you through every step of the application and visa process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyInUK
