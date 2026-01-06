import React from 'react'
import Navbar from './components/navbar.jsx'
import HeroSection from './components/page1.jsx'
import Page2 from './components/page2.jsx'
import Footer from './components/footer.jsx'
import SignUp from './components/signuppage/signup.jsx'

import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Page2 />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* 🔥 Toastify lives ONCE, globally */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <Footer />
    </>
  )
}
