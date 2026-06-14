import React, { useState } from "react";
import { 
  User, Mail, Phone, Calendar, MapPin, 
  IndianRupee, FileText, CheckCircle, ArrowRight,
  Briefcase, Landmark, Sparkles, Shield
} from "lucide-react";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    panNumber: "",
    employmentType: "",
    monthlyIncome: "",
    loanType: "",
    loanAmount: "",
    tenure: "",
    agreeTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const loanTypes = [
    { value: "fd", label: "Loan Against FD" },
    { value: "property", label: "Loan Against Property" },
    { value: "policy", label: "Loan Against Policy" },
    { value: "gold", label: "Gold Loan" },
    { value: "personal", label: "Personal Loan" },
    { value: "vehicle", label: "Vehicle Loan" },
    { value: "education", label: "Education Loan" },
    { value: "business", label: "Business Loan" }
  ];

  const employmentTypes = [
    { value: "salaried", label: "Salaried" },
    { value: "self-employed", label: "Self Employed" },
    { value: "business", label: "Business Owner" },
    { value: "professional", label: "Professional" }
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
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          address: "",
          panNumber: "",
          employmentType: "",
          monthlyIncome: "",
          loanType: "",
          loanAmount: "",
          tenure: "",
          agreeTerms: false
        });
      }, 3000);
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Landmark className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Loan Application</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-2">Apply for Investment</h1>
          <p className="text-sm text-gray-600">Complete your application in 3 easy steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center w-full max-w-sm">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  currentStep >= step 
                    ? "bg-[#FDB813] text-[#0B2A4A] shadow-md" 
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {step}
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

        {/* Success Message */}
        {isSuccess && (
          <div className="mb-4 p-3 bg-green-100 border border-green-200 rounded-lg flex items-center gap-2 animate-scaleIn">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <p className="text-sm text-green-700">Application submitted successfully!</p>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
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
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      DOB <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter address"
                      />
                    </div>
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
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter PAN number"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Employment & Income */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#FDB813]" />
                  Employment Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Employment Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    >
                      <option value="">Select employment type</option>
                      {employmentTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Monthly Income (₹) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="number"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter monthly income"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-gray-300 text-gray-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Loan Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#FDB813]" />
                  Loan Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Loan Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    >
                      <option value="">Select loan type</option>
                      {loanTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Loan Amount (₹) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Tenure (Years) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="tenure"
                      value={formData.tenure}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                      placeholder="Enter years"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-0.5 text-[#FDB813] border-gray-300 rounded focus:ring-[#FDB813]"
                  />
                  <span className="text-xs text-gray-600">
                    I agree to the <a href="#" className="text-[#FDB813] font-medium hover:underline">Terms & Conditions</a> and confirm that the information provided is correct.
                  </span>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-gray-300 text-gray-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeTerms}
                    className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0B2A4A] border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
          <Shield className="w-3 h-3 text-[#FDB813]" />
          <span>Need help? Call </span>
          <a href="tel:+917397782590" className="text-[#FDB813] font-medium hover:underline">+91 73977 82590</a>
        </div>
      </div>
    </div>
  );
};

export default Apply;