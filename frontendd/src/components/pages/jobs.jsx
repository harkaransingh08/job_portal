{/* Search Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-40 bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
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
                  <span>SEARCH COMPANIES</span>
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
          </motion.div>