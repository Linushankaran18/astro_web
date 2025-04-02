import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import VisaDestinations from '../components/countries'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <Features />
      <VisaDestinations/>
      <Blog />
      <Faq />
      <Newsletter />
      <Contact />
      
    </>
  )
}

export default Home