import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import StudyInUK from './pages/StudyInUK'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
      <Navbar />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/study-in-uk" element={<StudyInUK />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      <Footer />
    </Router>
    </div>
  )
}

export default App