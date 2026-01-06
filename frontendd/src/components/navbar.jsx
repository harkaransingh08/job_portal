import React, { useState } from 'react';
import { FiSearch, FiUser, FiBell, FiMessageSquare, FiBriefcase, FiMenu, FiX, FiHome, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FiHome />, path: '#' },
    { name: 'Find Jobs', icon: <FiSearch />, path: '#jobs' },
    { name: 'Companies', icon: <FiBriefcase />, path: '#companies' },
    { name: 'Career Advice', icon: <FiTrendingUp />, path: '#advice' },
    { name: 'Community', icon: <FiUsers />, path: '#community' },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex justify-between items-center ">

          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center ">
              <div className='w-30'>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiSearch size={20} />
            </button>

            {/* Post a Job Button */}
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-md font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-sm">
              Post a Job
            </button>


            {/* User Profile */}
            <div className="flex items-center gap-5">

              <Link
                to="/signup"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
              >
                Sign Up
              </Link>


            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <FiSearch size={20} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Expanded Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-100"
            >
              <div className="py-4">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex-1">
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                      <FiSearch className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        placeholder="Job title, keywords, or company"
                        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                      <FiSearch className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        placeholder="City, state, or remote"
                        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md">
                    SEARCH 10,000+ JOBS →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}

              <div className="flex items-center gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium">
                  Post a Job
                </button>

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  Sign Up
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;