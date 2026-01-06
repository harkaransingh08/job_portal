// pages/ExploreJobs.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFilter, FiMapPin, FiBriefcase, FiDollarSign, FiClock } from 'react-icons/fi';

const ExploreJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120,000 - $140,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "TC"
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "DesignStudio",
      location: "San Francisco, CA",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      posted: "1 week ago",
      logo: "DS"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "CreativeMinds",
      location: "New York, NY",
      salary: "$90,000 - $110,000",
      type: "Contract",
      posted: "3 days ago",
      logo: "CM"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "StartUpHub",
      location: "Remote",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      posted: "5 days ago",
      logo: "SH"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Explore Jobs</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <FiFilter className="mr-2" />
                  Filters
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Clear All
                </button>
              </div>

              {/* Job Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Job Type</h3>
                {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map(type => (
                  <label key={type} className="flex items-center mb-2">
                    <input type="checkbox" className="rounded text-blue-600 mr-2" />
                    <span className="text-gray-600">{type}</span>
                  </label>
                ))}
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Salary Range</h3>
                <input 
                  type="range" 
                  min="50000" 
                  max="200000" 
                  step="10000" 
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$50k</span>
                  <span>$200k+</span>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Location</h3>
                {['Remote', 'United States', 'Europe', 'Asia', 'Worldwide'].map(location => (
                  <label key={location} className="flex items-center mb-2">
                    <input type="checkbox" className="rounded text-blue-600 mr-2" />
                    <span className="text-gray-600">{location}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-blue-600">{job.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {job.title}
                        </h3>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <FiMapPin className="mr-1" /> {job.location}
                          </span>
                          <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <FiBriefcase className="mr-1" /> {job.type}
                          </span>
                          <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <FiDollarSign className="mr-1" /> {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FiClock className="mr-1" /> {job.posted}
                    </span>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Apply Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">
                      Save Job
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreJobs;