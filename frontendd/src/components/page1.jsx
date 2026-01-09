import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiBriefcase, FiCheckCircle, FiTrendingUp, FiUsers, FiStar, FiArrowRight, FiDollarSign, FiTarget } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { jobTitle, location, position, expectedSalary });
    // Add your search logic here
  };

  // const features = [
  //   "AI-powered job matching",
  //   "Remote work opportunities",
  //   "Instant apply feature",
  //   "Salary transparency",
  //   "Company reviews",
  //   "Career growth tracking"
  // ];

  return (
    <div className="relative min-h-screen cursor-pointer bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      
      {/* Navigation Bar */}
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8"
          >
            <FiTrendingUp className="text-green-500" />
            <span className="text-sm flex gap-2 font-medium hover:text-blue-500 text-gray-700">
              🚀 <motion.h3
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              >Newly passed students getting their jobs</motion.h3>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Find Your Dream
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Career
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with <span className="font-semibold text-blue-600">top tech companies</span> and discover 
            opportunities that perfectly match your skills and ambitions
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <button className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span>EXPLORE JOBS</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span>POST A JOB</span>
              <FiBriefcase className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 5}%`,
              width: '200px',
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="text-sm font-medium text-gray-700">React Developer</div>
            <div className="text-xs text-gray-500">$80K+ • Remote</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;