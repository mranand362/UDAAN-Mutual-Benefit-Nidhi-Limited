import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  User, Mail, Phone, Calendar, MapPin, 
  IndianRupee, FileText, CheckCircle, ArrowRight,
  Building2, Sparkles, Shield, Clock,
  PiggyBank, TrendingUp, Award, Landmark,
  HelpCircle, ChevronRight, Download, AlertCircle
} from "lucide-react";


const ApplyDeposits = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    panNumber: "",
    aadhaarNumber: "",
    occupation: "",
    annualIncome: "",
    depositType: "",
    depositAmount: "",
    tenure: "",
    payoutOption: "",
    nominationName: "",
    nominationRelation: "",
    nominationAge: "",
    agreeTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [calculatedInterest, setCalculatedInterest] = useState(null);

  const depositTypes = [
    { 
      value: "fixed", 
      label: "Fixed Deposit", 
      icon: <Landmark className="w-5 h-5" />,
      rate: "7.5% - 9.5%",
      minAmount: 5000,
      description: "Lump sum deposit with guaranteed returns"
    },
    { 
      value: "recurring", 
      label: "Recurring Deposit", 
      icon: <TrendingUp className="w-5 h-5" />,
      rate: "7.0% - 8.5%",
      minAmount: 500,
      description: "Monthly installments to build savings"
    },
    { 
      value: "daily", 
      label: "Daily Deposit", 
      icon: <PiggyBank className="w-5 h-5" />,
      rate: "6.5% - 7.5%",
      minAmount: 100,
      description: "Save daily, grow consistently"
    },
    { 
      value: "taxsaver", 
      label: "Tax Saver Deposit", 
      icon: <Shield className="w-5 h-5" />,
      rate: "7.5% - 8.5%",
      minAmount: 5000,
      description: "Tax benefits under Section 80C"
    },
    { 
      value: "cumulative", 
      label: "Cumulative Deposit", 
      icon: <Award className="w-5 h-5" />,
      rate: "8.0% - 9.25%",
      minAmount: 10000,
      description: "Compound interest for maximum returns"
    },
    { 
      value: "noncumulative", 
      label: "Non-Cumulative Deposit", 
      icon: <Clock className="w-5 h-5" />,
      rate: "7.75% - 9.0%",
      minAmount: 10000,
      description: "Regular interest payouts"
    }
  ];

  const occupations = [
    "Salaried", "Self Employed", "Business Owner", "Professional", "Retired", "Homemaker", "Student"
  ];

  const tenureOptions = [
    { value: "12", label: "12 months" },
    { value: "24", label: "24 months" },
    { value: "36", label: "36 months" },
    { value: "48", label: "48 months" },
    { value: "60", label: "60 months" }
  ];

  const payoutOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "halfyearly", label: "Half Yearly" },
    { value: "annual", label: "Annual" },
    { value: "maturity", label: "At Maturity" }
  ];

  // Load user data from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    
    if (userName) {
      setFormData(prev => ({
        ...prev,
        fullName: userName,
        email: userEmail || ""
      }));
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Calculate interest when deposit amount, type, or tenure change
    if (name === "depositAmount" || name === "depositType" || name === "tenure") {
      const newAmount = name === "depositAmount" ? value : formData.depositAmount;
      const newType = name === "depositType" ? value : formData.depositType;
      const newTenure = name === "tenure" ? value : formData.tenure;
      calculateInterest(newType, newAmount, newTenure);
    }
  };

  const calculateInterest = (type, amount, tenure) => {
    if (!type || !amount || !tenure) return;
    
    const principal = parseFloat(amount);
    let rate = 8.5;
    
    // Set rate based on deposit type
    switch(type) {
      case "fixed": rate = 8.5; break;
      case "recurring": rate = 7.5; break;
      case "daily": rate = 6.5; break;
      case "taxsaver": rate = 8.0; break;
      case "cumulative": rate = 9.0; break;
      case "noncumulative": rate = 8.0; break;
      default: rate = 8.0;
    }
    
    const years = parseInt(tenure) / 12;
    const interest = principal * rate * years / 100;
    const maturityAmount = principal + interest;
    
    setCalculatedInterest({
      interest: Math.round(interest),
      maturityAmount: Math.round(maturityAmount),
      rate: rate
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.post(
        "https://udaan-mutual-benefit-nidhi-limited.onrender.com/api/applications/deposit-apply",
        {
          ...formData,
          applicationType: "deposit",
          calculatedInterest: calculatedInterest
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/applications");
        }, 2000);
      }
    } catch (error) {
      console.error("Submit error:", error);
      setError(error.response?.data?.message || "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const stats = [
    { value: "9.5%", label: "Highest Rate", icon: <TrendingUp className="w-4 h-4" /> },
    { value: "6", label: "Deposit Types", icon: <PiggyBank className="w-4 h-4" /> },
    { value: "₹500", label: "Min Monthly", icon: <IndianRupee className="w-4 h-4" /> },
    { value: "100%", label: "Secure", icon: <Shield className="w-4 h-4" /> }
  ];

  const selectedDepositType = depositTypes.find(d => d.value === formData.depositType);

  if (isSuccess) {
    return (
      <>
        
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-4">
              Your deposit application has been submitted successfully. Our representative will contact you within 24 hours.
            </p>
            <button
              onClick={() => navigate("/applications")}
              className="w-full bg-gradient-to-r from-[#FDB813] to-[#fec84d] text-[#0B2A4A] py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              View My Applications
            </button>
          </div>
        </div>
        
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
              <PiggyBank className="w-4 h-4 text-[#FDB813]" />
              <span className="text-[#FDB813] font-medium text-sm">Deposit Application</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Open a Deposit Account</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Start your savings journey with JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center w-full max-w-2xl">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                    currentStep >= step 
                      ? "bg-[#FDB813] text-[#0B2A4A]" 
                      : "bg-gray-200 text-gray-500"
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-1 mx-2 transition-colors ${
                      currentStep > step ? "bg-[#FDB813]" : "bg-gray-200"
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Main Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Deposit Type Selection */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#FDB813]" />
                    Select Deposit Type
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {depositTypes.map((type) => (
                      <label 
                        key={type.value}
                        className={`relative p-5 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.depositType === type.value
                            ? 'border-[#FDB813] bg-[#FDB813]/5 shadow-md'
                            : 'border-gray-200 hover:border-[#FDB813]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="depositType"
                          value={type.value}
                          checked={formData.depositType === type.value}
                          onChange={handleChange}
                          className="absolute opacity-0"
                          required
                        />
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            formData.depositType === type.value
                              ? 'bg-[#FDB813] text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {type.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-[#0B2A4A] text-base">{type.label}</h4>
                              <span className="text-xs font-medium text-[#FDB813]">{type.rate}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                            <p className="text-xs text-gray-400 mt-2">Min: ₹{type.minAmount.toLocaleString()}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#FDB813] text-[#0B2A4A] px-8 py-3 rounded-xl font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md flex items-center gap-2"
                    >
                      Next: Personal Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                    <User className="w-5 h-5 text-[#FDB813]" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
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
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Residential Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your complete address"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="State"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Pincode"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        PAN Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="text"
                          name="panNumber"
                          value={formData.panNumber}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your PAN number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Aadhaar Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="text"
                          name="aadhaarNumber"
                          value={formData.aadhaarNumber}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter your Aadhaar number"
                        />
                      </div>
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
                      Next: Deposit Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Deposit Details */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-[#FDB813]" />
                    Deposit Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Occupation <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select occupation</option>
                        {occupations.map(occ => (
                          <option key={occ} value={occ}>{occ}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Annual Income (₹) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="number"
                          name="annualIncome"
                          value={formData.annualIncome}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter annual income"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Deposit Amount (₹) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                        <input
                          type="number"
                          name="depositAmount"
                          value={formData.depositAmount}
                          onChange={handleChange}
                          required
                          min={selectedDepositType?.minAmount || 0}
                          className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                          placeholder="Enter deposit amount"
                        />
                      </div>
                      {selectedDepositType && (
                        <p className="text-xs text-gray-500 mt-1">
                          Minimum amount: ₹{selectedDepositType.minAmount.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Tenure <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="tenure"
                        value={formData.tenure}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select tenure</option>
                        {tenureOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Payout Option <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="payoutOption"
                        value={formData.payoutOption}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select payout option</option>
                        {payoutOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interest Calculator */}
                  {calculatedInterest && (
                    <div className="bg-[#FDB813]/5 p-4 rounded-xl border border-[#FDB813]/20 mt-4">
                      <h4 className="font-medium text-[#0B2A4A] text-sm mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#FDB813]" />
                        Estimated Returns
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <span className="text-xs text-gray-500 block">Interest Rate</span>
                          <span className="text-lg font-bold text-[#0B2A4A]">{calculatedInterest.rate}%</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block">Interest Earned</span>
                          <span className="text-lg font-bold text-[#FDB813]">₹{calculatedInterest.interest.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block">Maturity Amount</span>
                          <span className="text-lg font-bold text-[#0B2A4A]">₹{calculatedInterest.maturityAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

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
                      Next: Nomination
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Nomination & Submit */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#FDB813]" />
                    Nomination & Declaration
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Nominee Name
                      </label>
                      <input
                        type="text"
                        name="nominationName"
                        value={formData.nominationName}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter nominee name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Relation with Nominee
                      </label>
                      <input
                        type="text"
                        name="nominationRelation"
                        value={formData.nominationRelation}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter relation"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Nominee Age
                      </label>
                      <input
                        type="number"
                        name="nominationAge"
                        value={formData.nominationAge}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter nominee age"
                      />
                    </div>
                  </div>

                  <div className="bg-[#FDB813]/5 p-4 rounded-xl border border-[#FDB813]/20">
                    <h4 className="font-medium text-[#0B2A4A] text-sm mb-2">Application Summary</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-gray-500 block">Deposit Type</span>
                        <span className="font-medium text-[#0B2A4A]">
                          {depositTypes.find(d => d.value === formData.depositType)?.label || 'Not selected'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Amount</span>
                        <span className="font-medium text-[#0B2A4A]">₹{formData.depositAmount || 0}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Tenure</span>
                        <span className="font-medium text-[#0B2A4A]">{formData.tenure || 0} months</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Payout</span>
                        <span className="font-medium text-[#0B2A4A]">{formData.payoutOption || 'Not selected'}</span>
                      </div>
                    </div>
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
                      I confirm that the information provided is true and correct. I agree to the <a href="#" className="text-[#FDB813] font-medium hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#FDB813] font-medium hover:underline">Privacy Policy</a>.
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Help Section */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-400">
            <HelpCircle className="w-3 h-3" />
            <span>Need help? Call our deposit experts at </span>
            <a href="tel:+917397782590" className="text-[#FDB813] font-medium hover:underline">+91 73977 82590</a>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ApplyDeposits;