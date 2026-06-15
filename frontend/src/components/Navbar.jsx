import React, { useState, useEffect, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  CreditCard,
  PhoneCall,
  MailOpen,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  LogIn,
  User,
  LogOut,
  Settings,
  HelpCircle,
  Shield,
  Building2,
  Users,
  FileText,
  HandCoins,
  PiggyBank,
  Calculator,
  Home,
  Briefcase,
  Star,
} from "lucide-react";
import logo from "../assets/images/logo1.png";
import ApplicationSummary from "./ApplicationSummary"; // IMPORT Application Summary

const Navbar = () => {
  // State Management
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  
  // Application Count States
  const [applicationCount, setApplicationCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  
  // Dropdown States
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  
  // Hooks
  const location = useLocation();
  const navigate = useNavigate();
  
  // Refs for click outside handling
  const dropdownRefs = {
    company: useRef(null),
    user: useRef(null),
  };

  // Check authentication status and load from API
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      
      if (token) {
        setIsLoggedIn(true);
        
        // Try to get latest profile data from API
        try {
          const response = await axios.get("https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/auth/profile", {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          if (response.data.success && response.data.user) {
            setUserName(response.data.user.name);
            setUserEmail(response.data.user.email);
            if (response.data.user.profileImage) {
              setProfileImage(response.data.user.profileImage);
              localStorage.setItem("profileImage", response.data.user.profileImage);
            }
            localStorage.setItem("userName", response.data.user.name);
            localStorage.setItem("userEmail", response.data.user.email);
          } else {
            // Fallback to localStorage
            const storedUserName = localStorage.getItem("userName");
            const storedUserEmail = localStorage.getItem("userEmail");
            const storedProfileImage = localStorage.getItem("profileImage");
            
            setUserName(storedUserName || "User");
            setUserEmail(storedUserEmail || "");
            setProfileImage(storedProfileImage || "");
          }
        } catch (error) {
          // Fallback to localStorage if API fails
          const storedUserName = localStorage.getItem("userName");
          const storedUserEmail = localStorage.getItem("userEmail");
          const storedProfileImage = localStorage.getItem("profileImage");
          
          setUserName(storedUserName || "User");
          setUserEmail(storedUserEmail || "");
          setProfileImage(storedProfileImage || "");
        }
      } else {
        setIsLoggedIn(false);
        setUserName("");
        setUserEmail("");
        setProfileImage("");
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Fetch application count for navbar
  useEffect(() => {
    const fetchApplicationCount = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/applications/application-count", {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.data.success) {
            setApplicationCount(response.data.total);
            setPendingCount(response.data.pending);
          }
        } catch (error) {
          console.log("Failed to fetch application count");
        }
      }
    };
    
    fetchApplicationCount();
    // Refresh every 30 seconds
    const interval = setInterval(fetchApplicationCount, 30000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target) && openDropdown === key) {
          setOpenDropdown(null);
        }
      });
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Helper Functions
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileCompanyOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("profileImage");
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setProfileImage("");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/home", label: "Home", icon: Home },
    { path: "/deposits", label: "Deposits", icon: PiggyBank },
    { path: "/loan", label: "Loans", icon: HandCoins },
    { path: "/gallery", label: "Gallery", icon: Briefcase },
    { path: "/contactus", label: "Contact Us", icon: Mail },
  ];

  const companyLinks = [
    { path: "/aboutus", label: "About Us", icon: Building2, desc: "Learn about our company" },
    { path: "/board", label: "Board Members", icon: Users, desc: "Meet our leadership" },
    { path: "/mission", label: "Mission & Vision", icon: Star, desc: "Our goals and values" },
    { path: "/policies", label: "Policies", icon: FileText, desc: "Terms and guidelines" },
  ];

  return (
    <>
      {/* Top Bar */}
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
              <a href="mailto:info@udaannidhi.in" className="flex items-center gap-1 text-gray-200 hover:text-[#FDB813] transition-colors">
                <MailOpen size={14} />
                <span>info@udaannidhi.in</span>
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

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center  h-20">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg border-2 border-[#0B2A4A]/10 group-hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="UDAAN Mutual Benefit Nidhi Limited" className="w-full h-full object-cover" />
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
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#FDB813] after:transition-all ${
                    isActive(link.path)
                      ? "text-[#0B2A4A] after:w-full"
                      : "text-gray-600 hover:text-[#0B2A4A] hover:scale-105 after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Company Dropdown */}
              <div className="relative" ref={dropdownRefs.company}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
                  className={`flex items-center gap-1 transition-all duration-300 font-medium ${
                    openDropdown === "company" ? "text-[#0B2A4A]" : "text-gray-600 hover:text-[#0B2A4A] hover:scale-105"
                  }`}
                >
                  Company
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === "company" ? "rotate-180" : ""}`} />
                </button>

                {openDropdown === "company" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-3 animate-fadeIn z-50">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-[#FDB813]/10 transition-colors group"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="w-8 h-8 bg-[#0B2A4A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0B2A4A] transition-colors">
                          <item.icon size={16} className="text-[#0B2A4A] group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* APPLICATION SUMMARY COMPONENT - ADDED HERE */}
              {isLoggedIn && <ApplicationSummary />}

              {/* User Section - With Profile Image */}
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRefs.user}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "user" ? null : "user")}
                    className="flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] hover:shadow-lg transition-all duration-300"
                  >
                    {/* Profile Image or Default Icon */}
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt={userName}
                        className="w-9 h-9 rounded-full object-cover border-2 border-[#FDB813]"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[#FDB813] flex items-center justify-center">
                        <User size={18} className="text-[#0B2A4A]" />
                      </div>
                    )}
                    <span className="text-sm font-medium text-white pr-2">{userName}</span>
                    <ChevronDown size={14} className={`text-white mr-2 transition-transform duration-300 ${openDropdown === "user" ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === "user" && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                        {/* Profile image in dropdown */}
                        {profileImage ? (
                          <img 
                            src={profileImage} 
                            alt={userName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] flex items-center justify-center">
                            <span className="text-white font-bold">
                              {userName?.charAt(0)?.toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{userName}</p>
                          <p className="text-xs text-gray-500">{userEmail}</p>
                        </div>
                      </div>
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#FDB813]/10 transition-colors">
                        <User size={16} /> My Profile
                      </Link>
                    <Link to="/account-details" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#FDB813]/10 transition-colors">
  <CreditCard size={18} />
  Account Details
</Link>
                      <Link to="/applications" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#FDB813]/10 transition-colors">
                        <FileText size={16} /> 
                        My Applications
                        {pendingCount > 0 && (
                          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {pendingCount}
                          </span>
                        )}
                      </Link>
                      <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#FDB813]/10 transition-colors">
                        <Settings size={16} /> Settings
                      </Link>
                      <Link to="/help" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-[#FDB813]/10 transition-colors">
                        <HelpCircle size={16} /> Help & Support
                      </Link>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full">
                          <LogOut size={16} /> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Create Account
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white fixed top-20 left-0 right-0 bottom-0 overflow-y-auto z-40">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {/* Mobile Auth Card with Profile Image */}
                {isLoggedIn ? (
                  <div className=" p-4 bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl text-white">
                    <div className="flex items-center gap-3">
                      {/* Profile image in mobile menu */}
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt={userName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#FDB813]"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-[#FDB813] rounded-full flex items-center justify-center">
                          <User size={24} className="text-[#0B2A4A]" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-lg">{userName}</p>
                        <p className="text-xs text-gray-300">{userEmail}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className=" flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] rounded-lg font-semibold" 
                    onClick={closeMobileMenu}
                  >
                    <LogIn size={18} />
                    Create Account
                  </Link>
                )}

                {/* Mobile Navigation Links */}
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 hover:text-[#0B2A4A] rounded-lg transition-colors" onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Company Dropdown */}
                <div>
                  <button onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)} className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 rounded-lg transition-colors">
                    Company
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileCompanyOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isMobileCompanyOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#FDB813] pl-4">
                      {companyLinks.map((item) => (
                        <Link key={item.path} to={item.path} className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#FDB813]/10 rounded-lg" onClick={closeMobileMenu}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              

                {/* Mobile User Menu */}
                {isLoggedIn && (
                  <>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <Link to="/profile" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 rounded-lg" onClick={closeMobileMenu}>
                      My Profile
                    </Link>
                        {/* Account Details - ADD THIS */}
    <Link to="/account-details" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 rounded-lg flex items-center gap-3" onClick={closeMobileMenu}>
    
      Account Details
    </Link>
                    <Link to="/applications" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 rounded-lg flex items-center justify-between" onClick={closeMobileMenu}>
                      <span>My Applications</span>
                      {pendingCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {pendingCount}
                        </span>
                      )}
                    </Link>
                    <Link to="/settings" className="px-4 py-3 text-gray-700 hover:bg-[#FDB813]/10 rounded-lg" onClick={closeMobileMenu}>
                      Settings
                    </Link>
                    <button onClick={handleLogout} className="px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-left transition-colors">
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;