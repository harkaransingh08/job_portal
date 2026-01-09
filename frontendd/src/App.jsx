import React from 'react'
import Navbar from './components/navbar.jsx'
import HeroSection from './components/page1.jsx'
import Page2 from './components/page2.jsx'
import Footer from './components/footer.jsx'
import SignUp from './components/signuppage/signup.jsx'
import Home from './components/pages/home.jsx'

import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing / Introduction page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Page2 />
            </>
          }
        />

        {/* Home page (opened via Home icon) */}
        <Route path="/home" element={<Home />} />

        {/* Auth */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      <Footer />
    </>
  )
}
