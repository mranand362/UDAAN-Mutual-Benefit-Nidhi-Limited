import React, { useState } from "react";
import { 
  User, Mail, Phone, Calendar, Clock, MessageSquare,
  CheckCircle, ArrowRight, Sparkles, Headphones,
  Users, Award, Star, TrendingUp, Shield,
  Video, Coffee, Briefcase, ChevronRight,
  Zap, Target, Heart, Globe, Download,
  X, AlertCircle, Check, ThumbsUp
} from "lucide-react";

const TalkToExpert = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    topic: "",
    message: "",
    agreeTerms: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const consultationTypes = [
    { value: "investment", label: "Investment Planning", icon: <TrendingUp className="w-4 h-4" />, desc: "Grow your wealth with expert strategies" },
    { value: "loan", label: "Loan Consultation", icon: <Briefcase className="w-4 h-4" />, desc: "Find the best loan for your needs" },
    { value: "deposit", label: "Deposit Schemes", icon: <Shield className="w-4 h-4" />, desc: "Maximize returns on your savings" },
    { value: "retirement", label: "Retirement Planning", icon: <Award className="w-4 h-4" />, desc: "Secure your golden years" },
    { value: "tax", label: "Tax Saving", icon: <Zap className="w-4 h-4" />, desc: "Optimize your tax benefits" },
    { value: "general", label: "General Inquiry", icon: <MessageSquare className="w-4 h-4" />, desc: "Any other financial questions" }
  ];

  const timeSlots = [
    { slot: "09:00 AM - 10:00 AM", available: true },
    { slot: "10:00 AM - 11:00 AM", available: true },
    { slot: "11:00 AM - 12:00 PM", available: false },
    { slot: "12:00 PM - 01:00 PM", available: true },
    { slot: "02:00 PM - 03:00 PM", available: true },
    { slot: "03:00 PM - 04:00 PM", available: false },
    { slot: "04:00 PM - 05:00 PM", available: true }
  ];

  const topics = [
    "How to start saving?",
    "Best deposit scheme for me",
    "Loan eligibility check",
    "Tax saving options",
    "Retirement planning",
    "Investment strategies",
    "Education planning",
    "Wealth management",
    "Other"
  ];

  const experts = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Financial Advisor",
      experience: "15+ years",
      expertise: ["Investment Planning", "Retirement", "Tax Saving"],
      rating: 4.9,
      reviews: 1245,
      consultations: 1500,
      languages: ["English", "Hindi", "Tamil"],
      image: "RK",
      color: "from-blue-600 to-blue-700",
      availability: "Available Today"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Loan Specialist",
      experience: "12+ years",
      expertise: ["Home Loans", "Business Loans", "Personal Loans"],
      rating: 4.8,
      reviews: 982,
      consultations: 1100,
      languages: ["English", "Hindi", "Telugu"],
      image: "PS",
      color: "from-green-600 to-green-700",
      availability: "Available Tomorrow"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Deposit Advisor",
      experience: "10+ years",
      expertise: ["Fixed Deposits", "Recurring Deposits", "Tax Saver"],
      rating: 4.7,
      reviews: 756,
      consultations: 850,
      languages: ["English", "Hindi", "Gujarati"],
      image: "AP",
      color: "from-purple-600 to-purple-700",
      availability: "Available Today"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Wealth Manager",
      experience: "8+ years",
      expertise: ["Portfolio Management", "Mutual Funds", "Insurance"],
      rating: 4.9,
      reviews: 623,
      consultations: 700,
      languages: ["English", "Hindi", "Telugu"],
      image: "SR",
      color: "from-amber-600 to-amber-700",
      availability: "Available Today"
    }
  ];

  const benefits = [
    { icon: <Clock className="w-4 h-4" />, title: "Save Time", desc: "Get answers in 30 minutes" },
    { icon: <Users className="w-4 h-4" />, title: "Expert Advice", desc: "Certified professionals" },
    { icon: <Heart className="w-4 h-4" />, title: "Personalized", desc: "Tailored to your needs" },
    { icon: <Shield className="w-4 h-4" />, title: "Confidential", desc: "100% private & secure" }
  ];

  const testimonials = [
    {
      name: "S. Venkatesh",
      role: "Member since 2019",
      text: "The expert helped me choose the perfect investment plan. My portfolio has grown 25% in just one year!",
      rating: 5,
      image: "SV"
    },
    {
      name: "M. Lakshmi",
      role: "Member since 2020",
      text: "Excellent advice on tax saving. Saved over ₹50,000 in taxes this year thanks to their guidance.",
      rating: 5,
      image: "ML"
    },
    {
      name: "R. Kumar",
      role: "Member since 2018",
      text: "Professional team, clear explanations, and no pressure tactics. Highly recommended for loan advice.",
      rating: 5,
      image: "RK"
    }
  ];

  const stats = [
    { value: "15+", label: "Expert Advisors", icon: <Users className="w-4 h-4" />, change: "+2 this month" },
    { value: "5,000+", label: "Happy Clients", icon: <Heart className="w-4 h-4" />, change: "98% satisfaction" },
    { value: "4.9", label: "Rating", icon: <Star className="w-4 h-4" />, change: "Based on 2.5k reviews" },
    { value: "Free", label: "Consultation", icon: <Sparkles className="w-4 h-4" />, change: "No obligation" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setCurrentStep(1);
        setSelectedExpert(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          consultationType: "",
          topic: "",
          message: "",
          agreeTerms: false
        });
      }, 3000);
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const selectExpert = (expert) => {
    setSelectedExpert(expert);
    setShowSchedule(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FDB813] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
                <Headphones className="w-4 h-4 text-[#FDB813]" />
                <span className="text-[#FDB813] font-medium text-sm">Expert Guidance Available 24/7</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Talk to an <span className="text-[#FDB813]">Expert</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-6">
                Get personalized financial advice from our certified professionals. 
                Book a free consultation today.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button 
                  onClick={() => setShowSchedule(true)}
                  className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-medium hover:bg-white transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Now
                </button>
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-w-[200px]">
              <div className="text-3xl font-bold text-[#FDB813] mb-1">98%</div>
              <div className="text-sm text-white mb-2">Client Satisfaction</div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDB813] text-[#FDB813]" />
                ))}
              </div>
              <div className="text-xs text-gray-300">Based on 2,500+ reviews</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-[#FDB813]/10 rounded-xl flex items-center justify-center text-[#FDB813] group-hover:bg-[#FDB813] group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <span className="text-xs text-gray-400">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-[#0B2A4A]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813]">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-medium text-[#0B2A4A] text-sm">{benefit.title}</h4>
                <p className="text-xs text-gray-500">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Team */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0B2A4A]">Our Expert Team</h2>
            <button className="text-[#FDB813] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All Experts
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experts.map((expert) => (
              <div 
                key={expert.id} 
                className={`bg-gradient-to-br ${expert.color} rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300`}
                onClick={() => selectExpert(expert)}
              >
                <div className="p-5 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl backdrop-blur-sm">
                      {expert.image}
                    </div>
                    <span className="bg-green-400 text-xs px-2 py-1 rounded-full text-white font-medium">
                      {expert.availability}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{expert.name}</h3>
                  <p className="text-white/80 text-xs mb-3">{expert.role}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-white text-white" />
                      <span className="text-xs ml-1 font-medium">{expert.rating}</span>
                    </div>
                    <span className="text-white/60 text-xs">({expert.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {expert.expertise.slice(0, 2).map((skill, i) => (
                      <span key={i} className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-white">
                        {skill}
                      </span>
                    ))}
                    {expert.expertise.length > 2 && (
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-white">
                        +{expert.expertise.length-2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <Globe className="w-3 h-3" />
                    {expert.languages.join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        {showSchedule && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#0B2A4A] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FDB813]" />
                Schedule Your Consultation
              </h2>
              <button 
                onClick={() => setShowSchedule(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Expert */}
            {selectedExpert && (
              <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-4 mb-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {selectedExpert.image}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Your Expert</p>
                    <p className="font-bold">{selectedExpert.name} - {selectedExpert.role}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                >
                  Change
                </button>
              </div>
            )}

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center w-full max-w-md">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                      currentStep >= step 
                        ? "bg-[#FDB813] text-[#0B2A4A]" 
                        : "bg-gray-200 text-gray-500"
                    }`}>
                      {currentStep > step ? <Check className="w-4 h-4" /> : step}
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-1 mx-2 transition-colors ${
                        currentStep > step ? "bg-[#FDB813]" : "bg-gray-200"
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {isSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Consultation Scheduled!</p>
                  <p className="text-xs text-green-600">Expert will contact you at the scheduled time.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Consultation Type */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0B2A4A] text-lg mb-3">Select Consultation Type</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consultationTypes.map((type) => (
                      <label 
                        key={type.value}
                        className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.consultationType === type.value
                            ? 'border-[#FDB813] bg-[#FDB813]/5'
                            : 'border-gray-200 hover:border-[#FDB813]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.value}
                          checked={formData.consultationType === type.value}
                          onChange={handleChange}
                          className="absolute opacity-0"
                          required
                        />
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.consultationType === type.value
                              ? 'bg-[#FDB813] text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {type.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-[#0B2A4A] text-sm">{type.label}</h4>
                            <p className="text-xs text-gray-500">{type.desc}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md flex items-center gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0B2A4A] text-lg mb-3">Your Information</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Topic <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select topic</option>
                        {topics.map(topic => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-600 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-xl font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md flex items-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Schedule & Confirm */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#0B2A4A] text-lg mb-3">Schedule & Confirm</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(({ slot, available }) => (
                          <option key={slot} value={slot} disabled={!available}>
                            {slot} {!available && "(Unavailable)"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all resize-none"
                      placeholder="Tell us what you'd like to discuss..."
                    />
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 mt-0.5 text-[#FDB813] border-gray-300 rounded focus:ring-[#FDB813]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-gray-600">
                      I agree to the <a href="#" className="text-[#FDB813] font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-[#FDB813] font-medium hover:underline">Privacy Policy</a>. I understand this consultation is free with no obligation.
                    </label>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-600 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeTerms}
                      className="bg-[#FDB813] text-[#0B2A4A] px-8 py-3 rounded-xl font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0B2A4A] border-t-transparent rounded-full animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <Check className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B2A4A] mb-6 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#0B2A4A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2A4A] text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FDB813] text-[#FDB813]" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to take control of your finances?</h3>
            <p className="text-gray-300 mb-6">Join thousands of satisfied members who have benefited from our expert advice.</p>
            <div className="flex flex-wrap justify-center gap-4">
            
              <button className="border border-white/30 text-white px-8 py-3 rounded-xl bg-[#FDB813] font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call +91 73977 82590
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">No credit card required. 100% free consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;