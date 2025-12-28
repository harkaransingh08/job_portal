import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 p-2 rounded-lg mr-2">JOB</span>
              <span className="text-blue-400">HUNT</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Find your dream job with JobHunt - connecting talented professionals with top companies worldwide. Your career journey starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center"><FaArrowRight className="mr-2 text-xs" /> Browse Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center"><FaArrowRight className="mr-2 text-xs" /> Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center"><FaArrowRight className="mr-2 text-xs" /> Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center"><FaArrowRight className="mr-2 text-xs" /> Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center"><FaArrowRight className="mr-2 text-xs" /> Employer Login</a></li>
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Top Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">IT & Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Finance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Remote Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Internships</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-400">123 Career Street, Job City, JC 10101</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <span className="text-gray-400">support@jobhunt.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to get latest job alerts and career tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-l-lg w-full md:w-64 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">FAQ</a>
            </div>
          </div>
          
          {/* Job Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">50K+</div>
              <div className="text-gray-400 text-sm">Jobs Posted</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-400">10K+</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">200K+</div>
              <div className="text-gray-400 text-sm">Candidates Hired</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-pink-400">98%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Download App */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Download our mobile app</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.5 3.5 2.5H17L21 6.5V20.5C21 21.09 20.66 21.5 20.5 21.5H3.5C3.34 21.5 3 21.09 3 20.5Z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}