import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

const Faq = () => {
  const faqs = [
    {
      question: 'How long does the student visa process typically take?',
      answer: 'The student visa processing time varies by country, but generally takes between 2-12 weeks. We recommend starting the process at least 3-4 months before your intended departure date to allow for any unexpected delays.',
    },
    {
      question: 'What documents are required for a visitor visa application?',
      answer: 'Common documents include a valid passport, completed application form, proof of financial means, travel itinerary, accommodation details, and proof of ties to your home country. Specific requirements vary by destination country, and our consultants will provide you with a detailed checklist.'
    },
    {
      question: 'Do you offer refunds if my visa application is rejected?',
      answer: 'We offer a partial refund of our service fees if your visa is rejected despite following all our guidance. However, government application fees are typically non-refundable. Our high success rate means rejections are rare when you work with us.'
    },
    {
      question: "Can you help with visa extensions while I'm abroad?",
      answer: "Yes, we provide assistance with visa extensions and status changes while you're abroad. Our global network allows us to support you throughout your journey, not just before departure."
    },
    {
      question: 'What are your payment terms for travel packages?',
      answer: 'We typically require a 25% deposit to secure your booking, with the remaining balance due 30 days before departure. For last-minute bookings (within 30 days of travel), full payment is required at the time of booking. We accept credit cards, bank transfers, and digital payment methods.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Can't find what you're looking for? 
            <a href="#contact" className="text-blue-600 hover:text-blue-800 ml-1">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq