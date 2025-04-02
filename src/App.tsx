import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'
import StudyInUK from './pages/StudyInUK'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-in-uk" element={<StudyInUK />} />
        {/* Add other country routes as needed */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App