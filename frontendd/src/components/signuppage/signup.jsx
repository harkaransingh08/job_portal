import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineMarkEmailRead, MdArrowBack } from "react-icons/md";
import { IoIosMail, IoIosLock, IoIosPerson } from "react-icons/io";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Signup() {
  // Step control
  const [step, setStep] = useState("signup"); // 'signup' or 'otp'
  
  // User form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  // OTP state
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);
  
  // Timer for resend OTP
  const [timer, setTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);
  
  // Loading state
  const [loading, setLoading] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (step !== "otp") return;
    
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer, step]);

  // Focus first OTP input
  useEffect(() => {
    if (step === "otp" && otpRefs.current[0]) {
      otpRefs.current[0].focus();
    }
  }, [step]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle signup submit
  const handleSignup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.warning("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:9090/create_user", formData);
      toast.success(res.data?.msg || "OTP sent to email");
      setStep("otp");
      setTimer(59);
      setCanResend(false);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };

  // Handle OTP backspace
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    const otpCode = otp.join("");
    
    if (otpCode.length !== 4) {
      toast.warning("Enter 4-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:9090/verify_otp", {
        email: formData.email,
        otp: otpCode,
      });
      toast.success(res.data?.msg || "Account verified!");
      // You can redirect user here
    } catch (err) {
      toast.error(err.response?.data?.msg || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    if (!canResend) return;

    try {
      const res = await axios.post("http://localhost:9090/resend_otp", {
        email: formData.email,
      });
      toast.success(res.data?.msg || "New OTP sent!");
      setTimer(59);
      setCanResend(false);
      setOtp(["", "", "", ""]);
      otpRefs.current[0].focus();
    } catch (err) {
      toast.error("Failed to resend OTP");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (step === "signup") {
        handleSignup();
      } else {
        verifyOtp();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      
      <div className="w-full max-w-md">
        {/* Main card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MdOutlineMarkEmailRead className="text-3xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              {step === "signup" ? "Create Account" : "Verify Email"}
            </h1>
            <p className="text-gray-400 mt-2">
              {step === "signup" ? "Sign up to get started" : "Enter code from email"}
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "signup" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}>
              1
            </div>
            <div className="h-1 w-12 bg-gray-600 mx-2" />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "otp" ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-400"}`}>
              2
            </div>
          </div>

          {/* Signup Form */}
          {step === "signup" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="relative">
                <IoIosPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
              </div>

              <div className="relative">
                <IoIosMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <IoIosLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                onClick={handleSignup}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending OTP...
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
          {step === "otp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-blue-400 mb-2">
                  <IoIosMail />
                  <span className="text-sm">{formData.email}</span>
                </div>
                <p className="text-gray-400 text-sm">Enter the 4-digit code we sent</p>
              </div>

              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-14 h-14 text-center text-xl font-semibold bg-gray-700 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                ))}
              </div>

              <button
                onClick={verifyOtp}
                disabled={loading || otp.join("").length !== 4}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
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
                {canResend ? (
                  <button
                    onClick={resendOtp}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiRefreshCw />
                    Resend Code
                  </button>
                ) : (
                  <p className="text-gray-400">
                    Resend code in <span className="text-yellow-400 font-medium">{timer}s</span>
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Back button for OTP step */}
          {step === "otp" && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setStep("signup")}
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto"
              >
                <MdArrowBack />
                Back to Signup
              </button>
            </div>
          )}

          {/* Security note */}
          <div className="mt-6 p-3 bg-blue-900/20 rounded-lg border border-blue-800/30">
            <p className="text-xs text-blue-300 text-center">
              🔒 Your information is secure. Never share your OTP with anyone.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-4">
          By signing up, you agree to our Terms & Privacy
        </p>
      </div>
    </div>
  );
}