import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiBriefcase, 
  FiMapPin, 
  FiTarget, 
  FiDollarSign, 
  FiArrowRight 
} from 'react-icons/fi';

export default function Jobs() {
  // State for search inputs
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', {
      jobTitle,
      location,
      position,
      expectedSalary
    });
    // Add your search logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      {/* Page Title */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your <span className="text-blue-600">Dream Job</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover thousands of job opportunities with all the information you need
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
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
                    placeholder="Job Title, Skills, or Company"
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
                    placeholder="City, State, or Remote"
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

            {/* Position Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white rounded-xl p-1">
                <div className="flex items-center bg-gray-50 rounded-lg px-4 py-4">
                  <FiTarget className="text-gray-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Position (e.g., Full-time, Internship)"
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-lg"
                  />
                  {position && (
                    <button 
                      type="button"
                      onClick={() => setPosition('')}
                      className="text-gray-400 hover:text-gray-600 ml-2"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Expected Salary Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white rounded-xl p-1">
                <div className="flex items-center bg-gray-50 rounded-lg px-4 py-4">
                  <FiDollarSign className="text-gray-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={expectedSalary}
                    onChange={(e) => setExpectedSalary(e.target.value)}
                    placeholder="Expected Salary (e.g., $60,000)"
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-lg"
                  />
                  {expectedSalary && (
                    <button 
                      type="button"
                      onClick={() => setExpectedSalary('')}
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
          <div className="pt-4 flex items-center justify-center">
            <button
              type="submit"
              className="group w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>SEARCH JOBS</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-gray-600 hover:text-purple-500 hover:underline font-bold text-sm mb-3">MOST SEARCHED JOBS POSITIONS:</p>
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
      </div>

      {/* Job Listings Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-bold text-gray-900  cursor-pointer hover:text-blue-500 mb-6">Available Jobs</h3>
        

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Frontend Developer</h4>
                <p className="text-gray-600">TechCorp Inc.</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiBriefcase className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center text-gray-600 mb-2">
                <FiMapPin className="mr-2" />
                <span>Remote</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiDollarSign className="mr-2" />
                <span>$80,000 - $120,000</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">Tailwind</span>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Data Scientist</h4>
                <p className="text-gray-600">DataWorks LLC</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiTarget className="text-purple-600 text-xl" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center text-gray-600 mb-2">
                <FiMapPin className="mr-2" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiDollarSign className="mr-2" />
                <span>$90,000 - $140,000</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">Machine Learning</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">SQL</span>
            </div>
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-gray-900">UX Designer</h4>
                <p className="text-gray-600">DesignStudio</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiSearch className="text-green-600 text-xl" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center text-gray-600 mb-2">
                <FiMapPin className="mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiDollarSign className="mr-2" />
                <span>$70,000 - $110,000</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">Figma</span>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">UI Design</span>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">Prototyping</span>
            </div>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Load More Jobs
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 JobPortal. All rights reserved.</p>
          <p className="mt-2 text-sm">Find your perfect job opportunity today</p>
        </div>
      </footer>
    </div>
  );
}