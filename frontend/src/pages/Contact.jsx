import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, Sparkles,
  Facebook, Twitter, Instagram, Linkedin, MessageCircle,
  Headphones, Building2, Globe, CheckCircle, HelpCircle,
  Users, Award, Clock as ClockIcon, ChevronRight
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: "Visit Us", 
      details: ["No. 362/B, Kamarajar Street", "Villupuram – 605602", "Tamil Nadu, India"],
      action: "https://maps.google.com",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "Call Us", 
      details: ["+91 73977 82590", "+91 73977 82591"], 
      action: "tel:+917397782590",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: "Email Us", 
      details: ["info@udaan.com", "support@udaan.com"], 
      action: "mailto:info@udaan.com",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      title: "Working Hours", 
      details: ["Monday – Saturday", "10:00 AM – 5:00 PM", "Sunday Closed"],
      color: "from-amber-500 to-amber-600"
    }
  ];

  const branchOffices = [
    {
      city: "Villupuram (Head Office)",
      address: "No. 362/B, Kamarajar Street, Villupuram - 605602",
      phone: "+91 73977 82590",
      email: "ho@udaan.com",
      manager: "Mr. S. Venkatesh"
    },
    {
      city: "Chennai Branch",
      address: "No. 45, Anna Salai, Guindy, Chennai - 600032",
      phone: "+91 73977 82592",
      email: "chennai@udaan.com",
      manager: "Ms. Priya Sharma"
    },
    {
      city: "Salem Branch",
      address: "No. 78, Fort Main Road, Salem - 636001",
      phone: "+91 73977 82593",
      email: "salem@udaan.com",
      manager: "Mr. R. Kumar"
    }
  ];

  const faqs = [
    {
      q: "How can I open an account?",
      a: "Visit any of our branches with your KYC documents (Aadhaar, PAN, passport size photos) and minimum initial deposit of ₹1,000."
    },
    {
      q: "What documents are required for loan?",
      a: "Identity proof (Aadhaar/PAN), address proof, income proof (salary slips/IT returns), and photographs."
    },
    {
      q: "How long does loan approval take?",
      a: "Loan approvals are typically processed within 24-48 hours after document verification."
    },
    {
      q: "Can I open account online?",
      a: "Yes, you can start the application online and visit our branch for final verification and activation."
    }
  ];

  const stats = [
    { value: "5000+", label: "Happy Members", icon: <Users className="w-4 h-4" /> },
    { value: "15+", label: "Years of Trust", icon: <Award className="w-4 h-4" /> },
    { value: "3", label: "Branches", icon: <Building2 className="w-4 h-4" /> },
    { value: "24/7", label: "Support", icon: <Headphones className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Have questions? We'd love to hear from you. Our team is here to help.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center gap-1 text-[#FDB813] mb-1">
                {stat.icon}
                <span className="text-2xl font-bold text-[#0B2A4A]">{stat.value}</span>
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contactInfo.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#0B2A4A] text-base mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                item.action ? (
                  <a 
                    key={i} 
                    href={item.action} 
                    className="block text-xs text-gray-500 hover:text-[#FDB813] transition-colors mb-1"
                  >
                    {detail}
                  </a>
                ) : (
                  <p key={i} className="text-xs text-gray-500 mb-1">{detail}</p>
                )
              ))}
            </div>
          ))}
        </div>

        {/* Main Grid: Form & Map */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#FDB813]" />
              Send us a Message
            </h2>
            
            {isSuccess && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 animate-fadeIn">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <p className="text-sm text-green-700">Message sent successfully! We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-[1.02] shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0B2A4A] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Quick Info */}
          <div className="space-y-5">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-1 border border-gray-100 h-64 overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.5!2d79.5!3d11.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU0JzAwLjAiTiA3OcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-[#0B2A4A] text-base mb-3 flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#FDB813]" />
                Quick Support
              </h3>
              <p className="text-xs text-gray-500 mb-3">For immediate assistance, contact our support team:</p>
              <div className="space-y-2">
                <a href="tel:+917397782590" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FDB813] transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 73977 82590
                </a>
                <a href="mailto:support@udaan.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FDB813] transition-colors">
                  <Mail className="w-4 h-4" />
                  support@udaan.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-[#0B2A4A] text-base mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
                  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
                  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813] hover:bg-[#FDB813] hover:text-white transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Branch Offices */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#FDB813]" />
            Our Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {branchOffices.map((branch, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-[#0B2A4A] text-base mb-2">{branch.city}</h3>
                <p className="text-xs text-gray-500 mb-2">{branch.address}</p>
                <div className="space-y-1 mb-2">
                  <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#FDB813]">
                    <Phone className="w-3 h-3" />
                    {branch.phone}
                  </a>
                  <a href={`mailto:${branch.email}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#FDB813]">
                    <Mail className="w-3 h-3" />
                    {branch.email}
                  </a>
                </div>
                <p className="text-[10px] text-gray-400">Branch Manager: {branch.manager}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-10">
          <h2 className="text-xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#FDB813]" />
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all">
                <h3 className="font-medium text-[#0B2A4A] text-sm mb-2">{faq.q}</h3>
                <p className="text-xs text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Prefer to talk in person?</h3>
          <p className="text-sm text-gray-300 mb-4">Visit any of our branches or schedule a video consultation</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md">
              Schedule Meeting
            </button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
              Find Branch
            </button>
          </div>
        </div>

        {/* Business Hours Note */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-400">
          <ClockIcon className="w-3 h-3" />
          <span>Customer support available Monday – Saturday, 10:00 AM – 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;