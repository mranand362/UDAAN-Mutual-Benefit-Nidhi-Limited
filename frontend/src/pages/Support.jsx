import React, { useEffect, useState } from "react";
import {
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Calendar,
  Users,
  Headphones,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Shield,
  Building,
  Globe,
  Smartphone,
  Laptop,
  ChevronRight,
  MessageSquare,
  MailOpen,
  PhoneCall,
  Video,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  Printer,
  Share2,
  Star,
  ThumbsUp,
  ThumbsDown,
  Award,
  Clock as ClockIcon,
  UserCheck,
} from "lucide-react";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "general",
        message: "",
      });
    }, 3000);
  };

  const supportChannels = [
    {
      id: "phone",
      title: "Phone Support",
      icon: Phone,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      details: [
        { label: "24/7 Helpline", value: "+91 73977 82590", action: "tel:+917397782590" },
        { label: "Toll Free", value: "1800 123 4567", action: "tel:18001234567" },
        { label: "Emergency", value: "+91 98765 43210", action: "tel:+919876543210" },
      ],
      timing: "Available 24/7 for emergency support",
    },
    {
      id: "email",
      title: "Email Support",
      icon: Mail,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      details: [
        { label: "General Support", value: "support@udaan.in", action: "mailto:support@udaan.in" },
        { label: "Grievance", value: "grievance@udaan.in", action: "mailto:grievance@udaan.in" },
        { label: "Compliance", value: "compliance@udaan.in", action: "mailto:compliance@udaan.in" },
      ],
      timing: "Response within 24 hours",
    },
    {
      id: "chat",
      title: "Live Chat",
      icon: MessageCircle,
      color: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-50",
      details: [
        { label: "Website Chat", value: "Click to start", action: "#" },
        { label: "Mobile App", value: "In-app support", action: "#" },
        { label: "WhatsApp", value: "+91 73977 82590", action: "https://wa.me/917397782590" },
      ],
      timing: "Monday to Saturday, 9 AM to 8 PM",
    },
    {
      id: "branch",
      title: "Branch Visit",
      icon: Building,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      details: [
        { label: "Head Office", value: "Villupuram, Tamil Nadu" },
        { label: "Branches", value: "25+ locations nationwide" },
        { label: "Find Branch", value: "Use branch locator", action: "#" },
      ],
      timing: "Monday to Saturday, 10 AM to 5 PM",
    },
  ];

  const faqCategories = [
    {
      category: "Account Related",
      icon: UserCheck,
      questions: [
        "How to open an account?",
        "Documents required for KYC?",
        "Minimum balance requirements?",
      ],
    },
    {
      category: "Deposits",
      icon: FileText,
      questions: [
        "Current interest rates?",
        "FD premature withdrawal?",
        "Nomination facility?",
      ],
    },
    {
      category: "Loans",
      icon: HelpCircle,
      questions: [
        "Loan eligibility criteria?",
        "Loan against FD?",
        "Prepayment charges?",
      ],
    },
    {
      category: "Technical",
      icon: Smartphone,
      questions: [
        "Mobile app issues?",
        "Forgot password?",
        "Transaction failed?",
      ],
    },
  ];

  const supportHours = [
    { day: "Monday - Saturday", hours: "10:00 AM - 05:00 PM", type: "Branch Hours" },
    { day: "24/7", hours: "Always Open", type: "Phone Support" },
    { day: "Monday - Saturday", hours: "09:00 AM - 08:00 PM", type: "Live Chat" },
    { day: "All Days", hours: "24x7 Available", type: "Online Banking" },
  ];

  const emergencyContacts = [
    { name: "Lost/Stolen Card", number: "1800 123 4567", priority: "high" },
    { name: "Fraud Reporting", number: "1800 123 4568", priority: "high" },
    { name: "Technical Support", number: "+91 73977 82590", priority: "medium" },
    { name: "Grievance Officer", number: "+91 73977 82591", priority: "medium" },
  ];

  const SupportChannelCard = ({ channel }) => {
    const Icon = channel.icon;
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`bg-gradient-to-r ${channel.color} px-6 py-4`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{channel.title}</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3 mb-4">
            {channel.details.map((detail, idx) => (
              <div key={idx} className="flex items-start justify-between">
                <span className="text-sm text-gray-500">{detail.label}</span>
                {detail.action ? (
                  <a
                    href={detail.action}
                    className="text-sm font-medium text-[#0B2A4A] hover:text-[#FDB813] transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-700">{detail.value}</span>
                )}
              </div>
            ))}
          </div>
          <div className={`${channel.bgColor} rounded-lg p-3 mt-4`}>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-gray-500" />
              <p className="text-xs text-gray-600">{channel.timing}</p>
            </div>
          </div>
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
              <Headphones size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Customer Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">How Can We Help You?</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Our dedicated support team is here to assist you with any questions or concerns. Choose your preferred way to connect with us.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Alert Banner */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-red-600" />
              <span className="text-sm text-red-800 font-medium">For Lost/Stolen Cards or Fraud Reporting:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {emergencyContacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-red-700 hover:text-red-900 font-medium"
                >
                  <Phone size={14} />
                  {contact.name}: {contact.number}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels Grid */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Get Support</h2>
            <p className="text-gray-600">Choose your preferred way to connect with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportChannels.map((channel) => (
              <SupportChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      </div>

      {/* Support Hours & Emergency Contacts */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Support Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                  <ClockIcon size={24} className="text-[#0B2A4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Support Hours</h3>
              </div>
              <div className="space-y-3">
                {supportHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <div>
                      <p className="font-medium text-gray-800">{item.day}</p>
                      <p className="text-xs text-gray-500">{item.type}</p>
                    </div>
                    <p className="text-sm text-[#0B2A4A] font-semibold">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick FAQ Links */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                  <HelpCircle size={24} className="text-[#0B2A4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Quick Answers</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {faqCategories.map((category, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon size={16} className="text-[#FDB813]" />
                      <h4 className="font-semibold text-gray-700 text-sm">{category.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.questions.map((question, qIdx) => (
                        <li key={qIdx}>
                          <a
                            href="/faq"
                            className="text-xs text-gray-600 hover:text-[#0B2A4A] flex items-center gap-1 group"
                          >
                            <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                            {question}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="/faq" className="text-sm text-[#0B2A4A] font-medium hover:text-[#FDB813] flex items-center gap-1">
                  View All FAQs <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Branch Locator */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                  <Send size={24} className="text-[#0B2A4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
              </div>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle size={48} className="mx-auto text-green-600 mb-3" />
                  <h4 className="font-semibold text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-green-600">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-600">{formError}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="account">Account Related</option>
                        <option value="deposit">Deposit Related</option>
                        <option value="loan">Loan Related</option>
                        <option value="technical">Technical Issue</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Branch Locator */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-[#0B2A4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Find a Branch</h3>
              </div>
              
              <div className="mb-6">
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter city, pincode, or branch name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Building size={18} className="text-[#0B2A4A] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Head Office</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        No. 362/B, Kamarajar Street,<br />
                        Villupuram - 605602, Tamil Nadu
                      </p>
                      <a href="tel:+917397782590" className="text-sm text-[#0B2A4A] hover:text-[#FDB813] mt-2 inline-block">
                        +91 73977 82590
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Globe size={18} className="text-[#0B2A4A] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Branch Network</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        25+ branches across Tamil Nadu<br />
                        More branches opening soon
                      </p>
                      <a href="#" className="text-sm text-[#0B2A4A] hover:text-[#FDB813] mt-2 inline-block">
                        View all branches →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Connect With Us On Social Media</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#E4405F] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">Follow us for updates, tips, and announcements</p>
        </div>
      </div>

      {/* Download Resources */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors">
              <Download size={16} />
              Download Support Guide
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Printer size={16} />
              Print Contact Info
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={16} />
              Share Support Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;