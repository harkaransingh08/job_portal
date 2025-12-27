import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiBriefcase, FiCheckCircle, FiTrendingUp, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { jobTitle, location });
    // Add your search logic here
  };

  const stats = [
    { number: "100K+", label: "Tech Jobs", icon: <FiBriefcase />, color: "from-blue-500 to-cyan-400" },
    { number: "50K+", label: "Companies", icon: <FiUsers />, color: "from-purple-500 to-pink-500" },
    { number: "10K+", label: "Success Stories", icon: <FiStar />, color: "from-green-500 to-emerald-400" },
    { number: "35%", label: "Faster Hiring", icon: <FiTrendingUp />, color: "from-orange-500 to-yellow-400" },
  ];

  const features = [
    "AI-powered job matching",
    "Remote work opportunities",
    "Instant apply feature",
    "Salary transparency",
    "Company reviews",
    "Career growth tracking"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

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
            <span className="text-sm flex gap-2 font-medium text-gray-700">
              🚀 <h3>Newely passed students getting their jobs</h3>
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

          {/* Search Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <FiSearch className="text-blue-500" />
              Search Jobs
            </h2>
            
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Job Title Input */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-1">
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-4">
                      <FiBriefcase className="text-gray-400 mr-3 flex-shrink-0" />
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Job title, keywords, or company"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-lg"
                      />
                      {jobTitle && (
                        <button 
                          type="button"
                          onClick={() => setJobTitle('')}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location Input */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-1">
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-4">
                      <FiMapPin className="text-gray-400 mr-3 flex-shrink-0" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="City, state, or remote"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-lg"
                      />
                      {location && (
                        <button 
                          type="button"
                          onClick={() => setLocation('')}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span>SEARCH 10,000+ JOBS</span>
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Software Engineer', 'Remote', 'React Developer', 'Data Scientist', 'UI/UX Designer', 'Backend Engineer'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setJobTitle(tag)}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100">
                    <div className="flex justify-center mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2 text-gray-700">
                  <FiCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
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
            <div className="text-sm font-medium text-gray-700">Senior Developer</div>
            <div className="text-xs text-gray-500">$120K+ • Remote</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;