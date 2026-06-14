import React, { useEffect } from "react";
import {
  Network,  // Changed from Sitemap to Network
  Home,
  Building,
  Users,
  FileText,
  DollarSign,
  CreditCard,
  Image,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  Shield,
  Lock,
  Award,
  Calendar,
  Clock,
  ChevronRight,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  Printer,
  Share2,
  UserCheck,
  TrendingUp,
  MessageCircle,
  Briefcase,
  HeartHandshake,
  BookOpen,
  AlertCircle,
  Settings,
  Smartphone,
  Laptop,
  CheckCircle,
  MapPin as MapPinIcon,
} from "lucide-react";

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 15, 2024";

  const siteSections = [
    {
      title: "Main Pages",
      icon: Home,
      color: "blue",
      links: [
        { name: "Home", url: "/", description: "Welcome to UDAAN" },
        { name: "About Us", url: "/aboutus", description: "Learn about our journey" },
        { name: "Contact Us", url: "/contactus", description: "Get in touch with us" },
        { name: "Gallery", url: "/gallery", description: "View our photos and events" },
        { name: "Careers", url: "/careers", description: "Join our team" },
      ],
    },
    {
      title: "Company",
      icon: Building,
      color: "purple",
      links: [
        { name: "About UDAAN", url: "/aboutus", description: "Company overview" },
        { name: "Board of Directors", url: "/board", description: "Meet our leadership" },
        { name: "Mission & Vision", url: "/mission", description: "Our guiding principles" },
        { name: "Our Policies", url: "/policies", description: "Company policies" },
        { name: "Annual Reports", url: "/reports", description: "Financial reports" },
      ],
    },
    {
      title: "Deposits",
      icon: DollarSign,
      color: "green",
      links: [
        { name: "Savings Account", url: "/deposits/savings", description: "Daily banking with interest" },
        { name: "Fixed Deposit", url: "/deposits/fd", description: "Lump sum investment" },
        { name: "Recurring Deposit", url: "/deposits/rd", description: "Monthly savings plan" },
        { name: "Senior Citizen Scheme", url: "/deposits/senior", description: "Special benefits for seniors" },
        { name: "Interest Rates", url: "/deposits/rates", description: "Current interest rates" },
      ],
    },
    {
      title: "Loans",
      icon: CreditCard,
      color: "orange",
      links: [
        { name: "Personal Loan", url: "/loan/personal", description: "For personal needs" },
        { name: "Gold Loan", url: "/loan/gold", description: "Against gold jewelry" },
        { name: "Loan Against FD", url: "/loan/against-fd", description: "Secure loan against FD" },
        { name: "Vehicle Loan", url: "/loan/vehicle", description: "For two/four wheelers" },
        { name: "Business Loan", url: "/loan/business", description: "For entrepreneurs" },
        { name: "Loan Calculator", url: "/loan/calculator", description: "Calculate your EMI" },
      ],
    },
    {
      title: "Account Services",
      icon: UserCheck,
      color: "teal",
      links: [
        { name: "Login", url: "/login", description: "Access your account" },
        { name: "Register", url: "/register", description: "Open new account" },
        { name: "Dashboard", url: "/dashboard", description: "Account overview" },
        { name: "My Deposits", url: "/my-deposits", description: "View your deposits" },
        { name: "My Loans", url: "/my-loans", description: "Manage your loans" },
        { name: "Transaction History", url: "/transactions", description: "View transactions" },
        { name: "Profile Settings", url: "/settings", description: "Update your info" },
      ],
    },
    {
      title: "Legal & Policies",
      icon: Shield,
      color: "red",
      links: [
        { name: "Terms of Use", url: "/terms", description: "Terms and conditions" },
        { name: "Privacy Policy", url: "/privacy", description: "Privacy practices" },
        { name: "Disclaimer", url: "/disclaimer", description: "Legal disclaimer" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage" },
        { name: "Grievance Policy", url: "/grievance", description: "Complaint process" },
      ],
    },
    {
      title: "Support",
      icon: HelpCircle,
      color: "cyan",
      links: [
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { name: "Customer Support", url: "/support", description: "Get help" },
        { name: "Live Chat", url: "/chat", description: "Chat with us" },
        { name: "Branch Locator", url: "/branches", description: "Find nearest branch" },
        { name: "Feedback", url: "/feedback", description: "Share your feedback" },
      ],
    },
    {
      title: "Resources",
      icon: FileText,
      color: "indigo",
      links: [
        { name: "Interest Rate Calculator", url: "/calculator/interest", description: "Calculate interest" },
        { name: "Loan EMI Calculator", url: "/calculator/emi", description: "Calculate EMI" },
        { name: "Download Forms", url: "/downloads", description: "Application forms" },
        { name: "Latest News", url: "/news", description: "Company updates" },
        { name: "Blog", url: "/blog", description: "Financial insights" },
        { name: "Events", url: "/events", description: "Upcoming events" },
      ],
    },
    {
      title: "Social Media",
      icon: Globe,
      color: "pink",
      links: [
        { name: "Facebook", url: "https://facebook.com/udaan", description: "Follow us on Facebook" },
        { name: "Twitter", url: "https://twitter.com/udaan", description: "Follow us on Twitter" },
        { name: "Instagram", url: "https://instagram.com/udaan", description: "Follow us on Instagram" },
        { name: "LinkedIn", url: "https://linkedin.com/company/udaan", description: "Connect on LinkedIn" },
        { name: "YouTube", url: "https://youtube.com/udaan", description: "Subscribe on YouTube" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Login", url: "/login", icon: UserCheck },
    { name: "Register", url: "/register", icon: FileText },
    { name: "Support", url: "/support", icon: HelpCircle },
    { name: "FAQ", url: "/faq", icon: MessageCircle },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 73977 82590", link: "tel:+917397782590" },
    { icon: Mail, text: "support@udaan.in", link: "mailto:support@udaan.in" },
    { icon: MapPinIcon, text: "Villupuram, Tamil Nadu", link: "#" },
    { icon: Clock, text: "Mon-Sat: 10 AM - 5 PM", link: "#" },
  ];

  const SectionCard = ({ section }) => {
    const colorMap = {
      blue: "from-blue-600 to-blue-700",
      purple: "from-purple-600 to-purple-700",
      green: "from-green-600 to-green-700",
      orange: "from-orange-600 to-orange-700",
      teal: "from-teal-600 to-teal-700",
      red: "from-red-600 to-red-700",
      cyan: "from-cyan-600 to-cyan-700",
      indigo: "from-indigo-600 to-indigo-700",
      pink: "from-pink-600 to-pink-700",
    };

    const Icon = section.icon;

    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`bg-gradient-to-r ${colorMap[section.color]} px-5 py-4`}>
          <div className="flex items-center gap-2">
            <Icon size={20} className="text-white" />
            <h2 className="text-lg font-bold text-white">{section.title}</h2>
          </div>
        </div>
        <div className="p-5">
          <ul className="space-y-3">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  className="group flex items-start gap-2 text-gray-600 hover:text-[#0B2A4A] transition-colors"
                >
                  <ChevronRight size={14} className="mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <span className="text-sm font-medium">{link.name}</span>
                    <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] text-white py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <Network size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Site Navigation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Sitemap</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Find everything you need on our website. Browse through our complete site structure to quickly access any page.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar size={12} className="text-[#FDB813]" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Globe size={12} className="text-[#FDB813]" />
                <span>85+ Pages</span>
              </div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Building size={12} className="text-[#FDB813]" />
                <span>9 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#0B2A4A] transition-colors">
                    <Icon size={20} className="text-[#0B2A4A] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Site Sections Grid */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteSections.map((section, idx) => (
              <SectionCard key={idx} section={section} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Social Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                      <Phone size={24} className="text-[#0B2A4A]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
                  </div>
                  <div className="space-y-4">
                    {contactInfo.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.link}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0B2A4A] transition-colors group"
                        >
                          <Icon size={18} className="group-hover:scale-110 transition-transform" />
                          <span className="text-sm">{item.text}</span>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Facebook size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Twitter size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Instagram size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Linkedin size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Youtube size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Sitemap */}
              <div className="col-span-2">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                      <Network size={24} className="text-[#0B2A4A]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">About This Sitemap</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    This sitemap provides a comprehensive overview of all pages available on the UDAAN Mutual Benefit Nidhi Limited website. Use this page to quickly navigate to any section of our website. We regularly update our sitemap to reflect new pages and content.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Easy Navigation</h4>
                        <p className="text-xs text-gray-500">Quickly find any page</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Complete Listing</h4>
                        <p className="text-xs text-gray-500">All pages in one place</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Regular Updates</h4>
                        <p className="text-xs text-gray-500">Always up-to-date</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Mobile Friendly</h4>
                        <p className="text-xs text-gray-500">Access on any device</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Options */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors">
              <Download size={16} />
              Download Sitemap (PDF)
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Printer size={16} />
              Print Sitemap
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={16} />
              Share Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* SEO Notice */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-400">
            This sitemap is intended for users to navigate the UDAAN Mutual Benefit Nidhi Limited website. 
            All pages are subject to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sitemap;