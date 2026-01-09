import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSend, 
  FiPaperclip, 
  FiSmile, 
  FiMoreVertical,
  FiSearch,
  FiVideo,
  FiPhone,
  FiInfo,
  FiChevronLeft,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiUserPlus,
  FiLogIn,
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiX,
  FiHome
} from 'react-icons/fi';

export default function Advice() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const messagesEndRef = useRef(null);

  // Companies Data
  const companies = [
    {
      id: 1,
      name: "TCS HR Team",
      avatar: "TC",
      lastMessage: "We'll review your application and get back soon.",
      time: "10:30 AM",
      unread: 2,
      online: true,
      category: "IT Services"
    },
    {
      id: 2,
      name: "Infosys Recruitment",
      avatar: "IN",
      lastMessage: "Your interview is scheduled for tomorrow.",
      time: "Yesterday",
      unread: 0,
      online: false,
      category: "IT Services"
    },
    {
      id: 3,
      name: "Wipro Hiring",
      avatar: "WI",
      lastMessage: "Please share your updated resume.",
      time: "2 days ago",
      unread: 1,
      online: true,
      category: "IT Services"
    },
    {
      id: 4,
      name: "HCL Talent",
      avatar: "HC",
      lastMessage: "Congratulations! You've been shortlisted.",
      time: "Mar 12",
      unread: 0,
      online: false,
      category: "IT Services"
    },
    {
      id: 5,
      name: "Reliance HR",
      avatar: "RL",
      lastMessage: "When can you start the internship?",
      time: "Mar 10",
      unread: 3,
      online: true,
      category: "Conglomerate"
    },
    {
      id: 6,
      name: "Flipkart Recruitment",
      avatar: "FL",
      lastMessage: "Let's schedule a technical round.",
      time: "Mar 8",
      unread: 0,
      online: false,
      category: "E-commerce"
    }
  ];

  // Sample messages for selected company
  const sampleMessages = [
    {
      id: 1,
      text: "Hello! I'm interested in the Software Engineer position at your company.",
      sender: 'user',
      time: '10:00 AM',
      date: 'Today'
    },
    {
      id: 2,
      text: "Hi! Thanks for your interest. Can you share your resume and portfolio?",
      sender: 'company',
      time: '10:05 AM',
      date: 'Today'
    },
    {
      id: 3,
      text: "Sure! I have 3 years of experience in React and Node.js. Here's my portfolio link: https://myportfolio.com",
      sender: 'user',
      time: '10:10 AM',
      date: 'Today'
    },
    {
      id: 4,
      text: "Great! We'll review your application and get back to you within 2-3 business days.",
      sender: 'company',
      time: '10:15 AM',
      date: 'Today'
    }
  ];

  // Initialize messages when company is selected
  useEffect(() => {
    if (selectedCompany) {
      setMessages(sampleMessages);
    }
  }, [selectedCompany]);

  // Auto scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: 'Today'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');

    // Auto reply after 2 seconds
    setTimeout(() => {
      const autoReply = {
        id: messages.length + 2,
        text: "Thanks for your message. Our team will respond shortly.",
        sender: 'company',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: 'Today'
      };
      setMessages(prev => [...prev, autoReply]);
    }, 2000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginData({ email: '', password: '' });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup
    if (signupData.name && signupData.email && signupData.password && signupData.password === signupData.confirmPassword) {
      setIsLoggedIn(true);
      setShowSignup(false);
      setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedCompany(null);
    setMessages([]);
  };

  // AuthModal Component
  const AuthModal = () => {
    if (!showLogin && !showSignup) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-md">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {showLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              {showLogin ? 'Sign in to continue chatting' : 'Sign up to start chatting with companies'}
            </p>
          </div>

          {/* Form */}
          <div className="p-6">
            {showLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={signupData.name}
                      onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}

            {/* Toggle between Login/Signup */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {showLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => {
                    setShowLogin(!showLogin);
                    setShowSignup(!showSignup);
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If not logged in, show login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <h1 className="text-xl font-bold text-gray-900">Company Connect</h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
              💬
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Connect Directly with Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chat with HR teams, ask questions about job openings, and get immediate responses
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4 mx-auto">
                <FiSend />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Direct Chat</h3>
              <p className="text-gray-600 text-sm">Chat directly with company HR teams</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl mb-4 mx-auto">
                <FiClock />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Responses</h3>
              <p className="text-gray-600 text-sm">Get instant answers to your queries</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mb-4 mx-auto">
                <FiCheckCircle />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verified Companies</h3>
              <p className="text-gray-600 text-sm">All companies are verified and hiring</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowLogin(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiLogIn />
              Sign In to Chat
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiUserPlus />
              Create Free Account
            </button>
          </div>

          {/* Preview */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
              <div className="flex">
                {/* Companies List */}
                <div className="w-1/3 border-r border-gray-200 p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Available Companies</h4>
                    {companies.slice(0, 3).map(company => (
                      <div key={company.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {company.avatar}
                          </div>
                          {company.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">{company.name}</div>
                          <div className="text-xs text-gray-500 truncate">{company.lastMessage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Preview */}
                <div className="w-2/3 p-4">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      TC
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">TCS HR Team</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Messages Preview */}
                  <div className="space-y-4 mb-4">
                    <div className="flex justify-start">
                      <div className="max-w-xs bg-gray-100 rounded-2xl rounded-tl-none p-3">
                        <p className="text-gray-900">Hello! I'm interested in the Software Engineer position</p>
                        <div className="text-xs text-gray-500 mt-1 text-right">10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-xs bg-blue-600 text-white rounded-2xl rounded-tr-none p-3">
                        <p>Hi! Thanks for your interest. Can you share your resume?</p>
                        <div className="text-xs text-blue-200 mt-1 text-right">10:05 AM</div>
                      </div>
                    </div>
                  </div>

                  {/* Input Preview */}
                  <div className="bg-gray-100 rounded-full p-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent px-4 py-2 outline-none"
                        disabled
                      />
                      <button className="p-2 text-blue-600">
                        <FiSend />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Users Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">"Got my interview scheduled within minutes of chatting!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Rahul Sharma</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">"Direct communication with HR saved me weeks of waiting."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Priya Patel</div>
                    <div className="text-sm text-gray-500">Data Analyst</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">"The quick responses helped me prepare better for interviews."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Amit Kumar</div>
                    <div className="text-sm text-gray-500">Product Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="font-bold text-gray-900">Company Connect</span>
              </div>
              <div className="text-sm text-gray-600">
                © 2024 Company Connect. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Auth Modal */}
        <AuthModal />
      </div>
    );
  }

  // Main Chat Interface (logged in)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {selectedCompany && (
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="md:hidden text-gray-600 hover:text-gray-900"
                >
                  <FiChevronLeft size={24} />
                </button>
              )}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <h1 className="text-xl font-bold text-gray-900">Company Connect</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Online
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Logout
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                U
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Layout */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex h-[calc(100vh-180px)]">
            {/* Companies List - Left Panel */}
            <div className={`w-full md:w-1/3 border-r border-gray-200 ${selectedCompany ? 'hidden md:block' : 'block'}`}>
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Companies List */}
              <div className="overflow-y-auto h-[calc(100%-80px)]">
                {companies.map(company => (
                  <div
                    key={company.id}
                    onClick={() => setSelectedCompany(company)}
                    className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${selectedCompany?.id === company.id ? 'bg-blue-50' : ''}`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {company.avatar}
                      </div>
                      {company.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="font-bold text-gray-900 truncate">{company.name}</div>
                        <div className="text-xs text-gray-500">{company.time}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500 truncate">{company.lastMessage}</div>
                        {company.unread > 0 && (
                          <div className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                            {company.unread}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{company.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area - Right Panel */}
            <div className={`w-full md:w-2/3 ${!selectedCompany ? 'hidden md:block' : 'block'}`}>
              {selectedCompany ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedCompany.avatar}
                        </div>
                        {selectedCompany.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{selectedCompany.name}</div>
                        <div className="text-sm text-gray-500">{selectedCompany.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                        <FiVideo size={20} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                        <FiPhone size={20} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                        <FiInfo size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div className="p-4 overflow-y-auto h-[calc(100%-140px)] bg-gray-50">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-white rounded-full px-4 py-2 shadow-sm">
                        <span className="text-sm text-gray-500">Today</span>
                      </div>
                    </div>
                    
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md ${message.sender === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' : 'bg-white text-gray-900 rounded-2xl rounded-tl-none shadow-sm'}`}>
                          <div className="p-3">
                            <p className="whitespace-pre-wrap break-words">{message.text}</p>
                            <div className={`text-xs mt-1 flex justify-end items-center gap-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                              {message.time}
                              {message.sender === 'user' && <FiCheck className="text-sm" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                      <button type="button" className="p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full">
                        <FiPaperclip size={20} />
                      </button>
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button type="button" className="p-3 text-gray-600 hover:text-yellow-600 hover:bg-gray-100 rounded-full">
                        <FiSmile size={20} />
                      </button>
                      <button
                        type="submit"
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        disabled={!newMessage.trim()}
                      >
                        <FiSend size={20} />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                // No Company Selected View
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-400 text-4xl mb-6">
                      💬
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Select a Company to Chat</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                      Choose a company from the list to start chatting about job opportunities, ask questions, and get immediate responses from their HR team.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {companies.slice(0, 3).map(company => (
                        <button
                          key={company.id}
                          onClick={() => setSelectedCompany(company)}
                          className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {company.avatar}
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-gray-900">{company.name}</div>
                            <div className="text-xs text-gray-500">{company.category}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <FiInfo className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This is a simulated chat interface. Messages are auto-generated for demonstration. Real companies would have their HR teams responding to queries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal />
    </div>
  );
}