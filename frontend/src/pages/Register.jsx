// Register.jsx - Professional version for UDAAN Mutual Benefit Nidhi Limited
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { 
  User, Mail, Lock, Eye, EyeOff, Shield, ArrowRight, CheckCircle,
  Clock, Phone, MapPin, Building2, 
  PiggyBank, HandCoins, ChevronDown, Menu, X,
  PhoneCall, MailOpen, Calendar, Facebook, Twitter, 
  Instagram, Linkedin, ChevronRight
} from "lucide-react";
import logo from '../assets/images/logo1.png';

// ===== NAVBAR COMPONENT (MERGED) =====
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopCompanyOpen, setIsDesktopCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#0B2A4A] text-white text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2 text-gray-200">
              <Calendar size={14} className="text-[#FDB813]" />
              <span>Mon - Sat: 10:00 AM - 05:00 PM</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-[#FDB813] font-medium">Sunday Closed</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@udaan.com" className="flex items-center gap-1 text-gray-200 hover:text-[#FDB813] transition-colors">
                <MailOpen size={14} />
                <span>info@udaan.com</span>
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+917397782590" className="flex items-center gap-1 text-gray-200 hover:text-[#FDB813] transition-colors font-medium">
                <PhoneCall size={14} />
                <span>+91 73977 82590</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg border-2 border-[#0B2A4A]/10">
                <img src={logo} alt="NJF Nidhi Limited" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0B2A4A] leading-tight tracking-tight">
                  UDAAN
                </span>
                <span className="text-sm font-medium text-[#FDB813] leading-tight -mt-1">
                 MUTUAL BENEFIT NIDHI LIMITED
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Since 2010
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">
                Home
              </a>
              
              {/* Company Dropdown - Desktop */}
              <div className="relative">
                <button 
                  onClick={() => setIsDesktopCompanyOpen(!isDesktopCompanyOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium"
                >
                  Company
                  <ChevronDown size={16} className={`transition-transform ${isDesktopCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDesktopCompanyOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 px-4 animate-fadeIn z-50">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                      <div className="w-8 h-8 bg-[#0B2A4A] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">UDAAN</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">MUTUAL BENEFIT NIDHI LIMITED</h3>
                        <p className="text-[10px] text-gray-500">Nidhi Company</p>
                      </div>
                    </div>

                    <div className="mb-3 text-xs text-gray-600 leading-relaxed">
                      UDAAN Mutual Benefit Nidhi Limited is a Nidhi company incorporated under the Companies Act 2013 & 
                      regulated by Ministry of Corporate Affairs, Government of India.
                    </div>

                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 text-xs mb-2">Contact Info</h4>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <MapPin size={14} className="text-[#FDB813] flex-shrink-0" />
                          <p className="text-xs text-gray-600">No. 362/B, Kamarajar St, Villupuram</p>
                        </div>
                        <div className="flex gap-2">
                          <Mail size={14} className="text-[#FDB813] flex-shrink-0" />
                          <a href="mailto:info@udaan.com" className="text-xs text-[#0B2A4A]">info@udaan.com</a>
                        </div>
                        <div className="flex gap-2">
                          <Phone size={14} className="text-[#FDB813] flex-shrink-0" />
                          <a href="tel:+917397782590" className="text-xs text-[#0B2A4A]">+91-7397782590</a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 text-xs mb-2">Social Networks</h4>
                      <div className="flex gap-2">
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Facebook size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Twitter size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Instagram size={12} />
                        </a>
                        <a href="#" className="w-7 h-7 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white hover:bg-[#FDB813]">
                          <Linkedin size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1 pt-2 border-t border-gray-100">
                      <Link to="/aboutus" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
                        <ChevronRight size={12} /> About Us
                      </Link>
                      <Link to="/board" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
                        <ChevronRight size={12} /> Board Members
                      </Link>
                      <Link to="/mission" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
                        <ChevronRight size={12} /> Mission
                      </Link>
                      <Link to="/policies" className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#0B2A4A]">
                        <ChevronRight size={12} /> Policies
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a href="/deposits" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Deposits</a>
              <Link to="/Loan" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Loan</Link>
              <a href="/gallery" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Gallery</a>
              <a href="/Contactus" className="text-gray-600 hover:text-[#0B2A4A] hover:scale-105 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDB813] after:transition-all hover:after:w-full">Contact Us</a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white justify-center">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                <a href="/" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Home</a>
                <Link to="/aboutus" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Company</Link>
                <a href="/deposits" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Deposits</a>
                <Link to="/Loan" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Loans</Link>
                <a href="/gallery" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Gallery</a>
                <a href="/Contactus" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg">Contact Us</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

// ===== REGISTER COMPONENT =====
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password
        }
      );

      alert(res.data.message || "Registration Successful ✅");
      navigate("/login");

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#0B2A4A] opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 M100 0 L0 100" stroke="#0B2A4A" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative w-full max-w-md">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0B2A4A] rounded-2xl mb-4 shadow-xl">
              <Shield className="w-10 h-10 text-[#FDB813]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0B2A4A]">UDAAN Mutual Benefit</h1>
            <p className="text-gray-600">Nidhi Limited</p>
          </div>

          {/* Register Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] px-8 py-6 text-white">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <User className="w-6 h-6 text-[#FDB813]" />
                Create Account
              </h2>
              <p className="text-gray-300 text-sm mt-1">Join UDAAN family today</p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="p-8 space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-all"
                    required
                    minLength="6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#FDB813]" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-[#FDB813]" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#FDB813]" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-[#FDB813]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Match Indicator */}
              {confirmPassword && (
                <div className={`text-xs flex items-center gap-1 ${password === confirmPassword ? 'text-green-600' : 'text-red-500'}`}>
                  <CheckCircle className="w-3 h-3" />
                  {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                </div>
              )}

              {/* Terms & Conditions */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-[#FDB813] border-gray-300 rounded focus:ring-[#FDB813] mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[#FDB813] hover:text-[#fec84d] font-medium">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-[#FDB813] hover:text-[#fec84d] font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] py-3 rounded-lg font-semibold hover:from-[#fec84d] hover:to-[#FDB813] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#0B2A4A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-[#FDB813] font-semibold hover:text-[#fec84d] transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Protected by 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;