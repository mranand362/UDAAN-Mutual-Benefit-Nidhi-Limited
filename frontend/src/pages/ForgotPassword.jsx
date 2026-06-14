import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      if (response.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Forgot Password?</h2>
              <p className="text-gray-300 text-sm mt-1">Enter your email to reset password</p>
            </div>
            
            <div className="p-8">
              {success ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Check Your Email</h3>
                  <p className="text-gray-600 mb-6">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  <Link to="/login" className="inline-flex items-center gap-2 text-[#FDB813] hover:underline">
                    <ArrowLeft size={16} />
                    Back to Login
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                      <AlertCircle className="text-red-500" size={18} />
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                        placeholder="Enter your registered email"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] py-2 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>
                  
                  <div className="text-center">
                    <Link to="/login" className="text-sm text-gray-600 hover:text-[#FDB813] inline-flex items-center gap-1">
                      <ArrowLeft size={14} />
                      Back to Login
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;