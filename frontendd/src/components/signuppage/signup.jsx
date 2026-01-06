import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// Icons
import { MdOutlineMarkEmailRead, MdArrowBack } from "react-icons/md";
import { IoIosMail, IoIosLock, IoIosPerson } from "react-icons/io";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

const API_BASE_URL = "http://localhost:9090";

export default function Signup() {
  const [currentStep, setCurrentStep] = useState("signup");
  const [isLoading, setIsLoading] = useState(false);
  const [countdownTimer, setCountdownTimer] = useState(59);
  const [canResendOtp, setCanResendOtp] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const otpInputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (currentStep !== "otp") return;

    const timerInterval = setInterval(() => {
      setCountdownTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          setCanResendOtp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [currentStep]);

  // Focus first OTP input
  useEffect(() => {
    if (currentStep === "otp" && otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  }, [currentStep]);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const registerUser = async () => {
    const { name, email, password } = userData;
    
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.warning("Please fill in all the required fields");
      return;
    }

    if (!email.includes("@")) {
      toast.warning("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/create_user`, userData);
      toast.success(response.data?.message || "Verification code sent to your email");
      
      setCurrentStep("otp");
      setCountdownTimer(59);
      setCanResendOtp(false);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpDigitChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpDigits];
    newOtp[index] = value;
    setOtpDigits(newOtp);

    if (value && index < 3) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const verifyOtpCode = async () => {
    const otpCode = otpDigits.join("");
    
    if (otpCode.length !== 4) {
      toast.warning("Please enter the complete 4-digit code");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/verify_otp`, {
        email: userData.email,
        otp: otpCode,
      });
      toast.success(response.data?.message || "Your account has been verified!");
      // Redirect or update state here
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          "The verification code is invalid or has expired";
      toast.error(errorMessage);
      
      setOtpDigits(["", "", "", ""]);
      if (otpInputRefs.current[0]) {
        otpInputRefs.current[0].focus();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationCode = async () => {
    if (!canResendOtp) return;

    try {
      const response = await axios.post(`${API_BASE_URL}/resend_otp`, {
        email: userData.email,
      });
      toast.success(response.data?.message || "New verification code sent!");
      setCountdownTimer(59);
      setCanResendOtp(false);
      setOtpDigits(["", "", "", ""]);
      otpInputRefs.current[0].focus();
    } catch (error) {
      toast.error("Unable to resend code. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (currentStep === "signup") {
        registerUser();
      } else {
        verifyOtpCode();
      }
    }
  };

  const goBackToSignup = () => {
    setCurrentStep("signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-md">
        
        {/* Main Card */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MdOutlineMarkEmailRead className="text-3xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {currentStep === "signup" ? "Create Your Account" : "Verify Your Email"}
            </h1>
            <p className="text-gray-400 text-sm">
              {currentStep === "signup" 
                ? "Join us today to get started" 
                : `We sent a code to ${userData.email}`}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              currentStep === "signup" 
                ? 'bg-blue-500 text-white' 
                : 'bg-green-500 text-white'
            }`}>
              1
            </div>
            <div className="h-1 w-12 bg-gray-700 mx-2" />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              currentStep === "otp" 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-400'
            }`}>
              2
            </div>
          </div>

          {/* Signup Form */}
          {currentStep === "signup" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="relative">
                <IoIosPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Your Full Name"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  autoFocus
                />
              </div>

              <div className="relative">
                <IoIosMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div className="relative">
                <IoIosLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Create a Password"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <button
                onClick={registerUser}
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-200 flex items-center justify-center gap-2 mt-6"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Verification Code...
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    Send Verification Code
                  </>
                )}
              </button>
            </motion.div>
          )}

          {/* OTP Verification */}
          {currentStep === "otp" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-blue-400 mb-2">
                  <IoIosMail />
                  <span className="text-sm">{userData.email}</span>
                </div>
                <p className="text-gray-400 text-sm">Enter the 4-digit verification code</p>
              </div>

              <div className="flex justify-center gap-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpDigitChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-14 h-14 text-center text-xl font-semibold bg-gray-700/80 border-2 border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                ))}
              </div>

              <button
                onClick={verifyOtpCode}
                disabled={isLoading || otpDigits.join("").length !== 4}
                className="w-full py-3.5 bg-gradient-to-br from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <FaCheckCircle />
                    Verify Account
                  </>
                )}
              </button>

              <div className="text-center">
                {canResendOtp ? (
                  <button
                    onClick={resendVerificationCode}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    <FiRefreshCw />
                    Send New Code
                  </button>
                ) : (
                  <p className="text-gray-400 text-sm">
                    Request new code in <span className="text-yellow-400 font-medium">{countdownTimer}s</span>
                  </p>
                )}
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={goBackToSignup}
                  className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto text-sm"
                >
                  <MdArrowBack />
                  Back to Registration
                </button>
              </div>
            </motion.div>
          )}

          {/* Security Notice */}
          <div className="mt-8 p-3 bg-blue-900/20 rounded-xl border border-blue-800/30">
            <p className="text-xs text-blue-300 text-center">
              🔒 Your information is securely protected. Never share your verification code with anyone.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-4">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}