import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaRocket,
  FaArrowRight,
  FaUsers,
  FaMicrosoft,
  FaBuilding,
  FaGraduationCap
} from 'react-icons/fa';
import {
  SiGoogle,
  SiAmazon,
  SiApple
} from 'react-icons/si';

const Home = () => {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-blue-600">Dream</span> Career
          </h1>

          <p className="text-xl text-gray-600 mb-10">
            Connect with top companies and discover opportunities that match your skills and ambitions
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-xl shadow-lg p-2 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-3">
                <FaSearch className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full outline-none text-gray-800"
                />
              </div>

              <div className="flex-1 flex items-center px-3">
                <FaSearch className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-gray-800"
                />
              </div>

              <Link
                to="/jobs"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
              >
                <FaSearch className="mr-2" />
                Search Jobs
              </Link>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              Explore Jobs <FaArrowRight className="ml-2" />
            </Link>

            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition flex items-center justify-center">
              <FaUsers className="mr-2" />
              Post a Job
            </button>
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">
            Trusted by leading companies
          </p>

          <div className="flex justify-center flex-wrap gap-10 text-gray-600 text-3xl">
            <SiGoogle />
            <FaMicrosoft />
            <SiAmazon />
            <SiApple />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CareerConnect?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<FaRocket />}
              title="Smart Job Matching"
              text="AI-powered matching that connects you with the right opportunities."
            />
            <Feature
              icon={<FaBuilding />}
              title="Top Companies"
              text="Exclusive access to jobs from industry-leading companies."
            />
            <Feature
              icon={<FaGraduationCap />}
              title="Career Growth"
              text="Resources and guidance to help you grow your career."
            />
          </div>
        </div>
      </section>

    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm text-center">
    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Home;
