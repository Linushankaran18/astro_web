import React from 'react'
import { Send } from 'lucide-react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-xl">
              Subscribe to our newsletter for the latest visa updates, travel tips, and exclusive offers.
            </p>
          </div>
          <div className="lg:w-1/2">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white border-white rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-blue-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter