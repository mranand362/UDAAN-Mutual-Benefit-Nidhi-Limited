
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF,
  FaTwitter, FaInstagram, FaLinkedinIn, FaRegClock,
  FaPaperPlane, FaArrowUp, FaShieldAlt, FaRegCreditCard,
  FaCcVisa, FaCcMastercard, FaLock
} from "react-icons/fa";
import { SiGooglepay, SiPhonepe } from "react-icons/si";
import logo from "../assets/images/logo1.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();




  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/aboutus" },
    { name: "Deposits", path: "/deposits" },
    { name: "Loans", path: "/loans" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Board Members", path: "/board" },
    { name: "Policies", path: "/policies" },
  ];

  const usefulLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  return (
    <footer className="relative bg-[#0B2A4A] text-white">
   

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-7 max-w-7xl">
        
        {/* Top Section - Logo & Newsletter */}
        <div className="flex flex-col md:flex-row  border-b border-white/10 pb-4 mb-1">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="UDAAN Logo" className="h-12 w-auto object-contain" />
            <div>
              <h3 className="text-2xl font-bold">UDAAN</h3>
              <p className="text-xs text-[#FDB813]">MUTUAL BENEFIT NIDHI LIMITED</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Company Description */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FDB813]">About Company</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                UDAAN Mutual Benefit Nidhi Limited is a government regulated 
                Nidhi company committed to providing secure and transparent financial 
                services to our members since 2010.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FDB813]">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#FDB813] mt-1 flex-shrink-0" size={14} />
                  <span className="text-gray-300 text-sm">
                    No. 362/B, Kamarajar Street, Villupuram – 605602, Tamil Nadu
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#FDB813]" size={14} />
                  <a href="tel:+917397782590" className="text-gray-300 hover:text-[#FDB813] transition-colors text-sm">
                    +91 73977 82590
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FDB813]" size={14} />
                  <a href="mailto:info@udaan.com" className="text-gray-300 hover:text-[#FDB813] transition-colors text-sm">
                    info@udaan.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaRegClock className="text-[#FDB813]" size={14} />
                  <span className="text-gray-300 text-sm">Mon - Sat: 10:00 AM - 05:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Links in two columns */}
          <div className="grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FDB813]">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-[#FDB813] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#FDB813] rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#FDB813]">Useful Links</h4>
              <ul className="space-y-2">
                {usefulLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-[#FDB813] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#FDB813] rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       

        {/* Bottom Bar - Payment Methods & Copyright */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">We Accept:</span>
              <div className="flex items-center gap-2">
                <FaCcVisa className="text-gray-400 hover:text-[#FDB813] transition-colors" size={24} />
                <FaCcMastercard className="text-gray-400 hover:text-[#FDB813] transition-colors" size={24} />
                <SiGooglepay className="text-gray-400 hover:text-[#FDB813] transition-colors" size={20} />
                <SiPhonepe className="text-gray-400 hover:text-[#FDB813] transition-colors" size={20} />
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2">
              <FaLock className="text-green-400" size={14} />
              <span className="text-xs text-gray-400">256-bit SSL Secure</span>
              <FaShieldAlt className="text-[#FDB813]" size={14} />
              <span className="text-xs text-gray-400">Regulated by Govt of India</span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs text-gray-400">
                © {currentYear} UDAAN Mutual Benefit Nidhi Limited. All rights reserved.
              </p>
            </div>
          </div>

          {/* CIN */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              CIN: U85300BR2023NPL061372 | Registered under Companies Act 2013
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;