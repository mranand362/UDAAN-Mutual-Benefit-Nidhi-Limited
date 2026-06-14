import React, { useState } from "react";
import { 
  CheckCircle, XCircle, ArrowRight, Sparkles,
  IndianRupee, Briefcase, Calendar, Percent,
  User, Shield, AlertCircle, HelpCircle
} from "lucide-react";

const Eligibility = () => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    employmentType: "",
    creditScore: "",
    existingLoans: "",
    loanType: "",
    loanAmount: ""
  });

  const [showResult, setShowResult] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState(null);

  const loanTypes = [
    { value: "personal", label: "Personal Loan" },
    { value: "home", label: "Home Loan" },
    { value: "car", label: "Car Loan" },
    { value: "education", label: "Education Loan" },
    { value: "business", label: "Business Loan" },
    { value: "gold", label: "Gold Loan" }
  ];

  const employmentTypes = [
    { value: "salaried", label: "Salaried" },
    { value: "self-employed", label: "Self Employed" },
    { value: "business", label: "Business Owner" },
    { value: "professional", label: "Professional" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setShowResult(false);
  };

  const checkEligibility = (e) => {
    e.preventDefault();
    
    // Simple eligibility logic (customize based on your actual criteria)
    const age = parseInt(formData.age);
    const income = parseInt(formData.income);
    const creditScore = parseInt(formData.creditScore);
    const hasExistingLoans = formData.existingLoans === "yes";
    
    let score = 0;
    let messages = [];
    let isEligible = true;

    // Age check
    if (age >= 21 && age <= 60) {
      score += 30;
      messages.push("✓ Age requirement met");
    } else {
      isEligible = false;
      messages.push("✗ Age should be between 21 and 60 years");
    }

    // Income check (minimum ₹15,000 per month)
    if (income >= 15000) {
      score += 30;
      messages.push("✓ Minimum income requirement met");
    } else {
      isEligible = false;
      messages.push("✗ Monthly income should be at least ₹15,000");
    }

    // Credit score check
    if (creditScore >= 650) {
      score += 30;
      messages.push("✓ Credit score requirement met");
    } else if (creditScore >= 600) {
      score += 15;
      messages.push("⚠ Credit score is borderline");
    } else {
      isEligible = false;
      messages.push("✗ Credit score should be at least 650");
    }

    // Existing loans check
    if (!hasExistingLoans) {
      score += 10;
      messages.push("✓ No existing loans");
    } else {
      score += 5;
      messages.push("⚠ Existing loans may affect eligibility");
    }

    // Loan amount check (basic)
    const maxLoanAmount = income * 12 * 3; // Rough calculation
    if (parseInt(formData.loanAmount) <= maxLoanAmount) {
      messages.push("✓ Loan amount within eligible range");
    } else {
      messages.push(`⚠ Maximum eligible amount: ₹${maxLoanAmount.toLocaleString()}`);
    }

    setEligibilityResult({
      isEligible,
      score,
      messages,
      maxAmount: income * 12 * 3,
      interestRate: creditScore >= 750 ? "8.5%" : creditScore >= 650 ? "10.5%" : "12.5%"
    });
    
    setShowResult(true);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score) => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Check Your Eligibility</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Loan Eligibility</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Find out if you qualify for a loan in just a few steps
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-[#0B2A4A] mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[#FDB813]" />
              Enter Your Details
            </h2>

            <form onSubmit={checkEligibility} className="space-y-5">
              {/* Loan Type */}
              <div>
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

              {/* Age */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Your Age <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    max="70"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Monthly Income (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter monthly income"
                  />
                </div>
              </div>

              {/* Employment Type */}
              <div>
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

              {/* Credit Score */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Credit Score <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleChange}
                  required
                  min="300"
                  max="900"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                  placeholder="Enter credit score (300-900)"
                />
                <p className="text-[10px] text-gray-400 mt-1">You can check your credit score on CRIF, CIBIL, or Experian</p>
              </div>

              {/* Existing Loans */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Any Existing Loans? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="existingLoans"
                      value="yes"
                      checked={formData.existingLoans === "yes"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-[#FDB813] focus:ring-[#FDB813]"
                    />
                    <span className="text-sm text-gray-600">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="existingLoans"
                      value="no"
                      checked={formData.existingLoans === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#FDB813] focus:ring-[#FDB813]"
                    />
                    <span className="text-sm text-gray-600">No</span>
                  </label>
                </div>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Required Loan Amount (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FDB813] transition-colors" />
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm transition-all"
                    placeholder="Enter required loan amount"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 mt-6"
              >
                Check Eligibility
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-[#0B2A4A] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FDB813]" />
              Eligibility Results
            </h2>

            {!showResult ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <HelpCircle className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-sm text-center">Fill in your details and click "Check Eligibility" to see results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Eligibility Status */}
                <div className={`p-6 rounded-xl ${eligibilityResult.isEligible ? 'bg-green-50' : 'bg-red-50'} border-2 ${eligibilityResult.isEligible ? 'border-green-200' : 'border-red-200'}`}>
                  <div className="flex items-center gap-3">
                    {eligibilityResult.isEligible ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600" />
                    )}
                    <div>
                      <h3 className={`text-lg font-semibold ${eligibilityResult.isEligible ? 'text-green-700' : 'text-red-700'}`}>
                        {eligibilityResult.isEligible ? 'You are Eligible!' : 'Not Eligible'}
                      </h3>
                      <p className={`text-sm ${eligibilityResult.isEligible ? 'text-green-600' : 'text-red-600'}`}>
                        {eligibilityResult.isEligible 
                          ? 'Congratulations! You meet the basic criteria.'
                          : 'Sorry, you do not meet the eligibility criteria.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Eligibility Score */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Eligibility Score</span>
                    <span className={`text-lg font-bold ${getScoreColor(eligibilityResult.score)}`}>
                      {eligibilityResult.score}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreBg(eligibilityResult.score)} ${getScoreColor(eligibilityResult.score).replace('text', 'bg')}`}
                      style={{ width: `${eligibilityResult.score}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <h4 className="font-medium text-[#0B2A4A] text-sm">Eligibility Details:</h4>
                  <ul className="space-y-2">
                    {eligibilityResult.messages.map((msg, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {msg.startsWith('✓') ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : msg.startsWith('⚠') ? (
                          <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-xs ${
                          msg.startsWith('✓') ? 'text-green-700' : 
                          msg.startsWith('⚠') ? 'text-yellow-700' : 'text-red-700'
                        }`}>
                          {msg}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Loan Offer */}
                {eligibilityResult.isEligible && (
                  <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-5">
                    <h4 className="text-white font-medium text-sm mb-3">Your Loan Offer</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-gray-300 block mb-1">Max Amount</span>
                        <span className="text-lg font-bold text-[#FDB813]">₹{eligibilityResult.maxAmount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-300 block mb-1">Interest Rate</span>
                        <span className="text-lg font-bold text-[#FDB813]">{eligibilityResult.interestRate}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-[#FDB813] text-[#0B2A4A] py-2 rounded-lg text-sm font-medium hover:bg-white transition-all">
                      Apply Now
                    </button>
                  </div>
                )}

                {/* Not Eligible Message */}
                {!eligibilityResult.isEligible && (
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <p className="text-xs text-orange-700">
                      Don't worry! You can still improve your eligibility by:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-orange-600">
                      <li>• Increasing your monthly income</li>
                      <li>• Improving your credit score</li>
                      <li>• Clearing existing loans</li>
                      <li>• Trying a lower loan amount</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-4 h-4 text-[#FDB813]" />
              <span className="text-sm font-medium text-[#0B2A4A]">Interest Rates</span>
            </div>
            <p className="text-xs text-gray-500">Rates start from 8.5% based on your credit score and loan type</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-[#FDB813]" />
              <span className="text-sm font-medium text-[#0B2A4A]">Quick Approval</span>
            </div>
            <p className="text-xs text-gray-500">Get approval in principle within 24 hours of application</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[#FDB813]" />
              <span className="text-sm font-medium text-[#0B2A4A]">Secure Process</span>
            </div>
            <p className="text-xs text-gray-500">Your information is encrypted and never shared with third parties</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-400 mt-6">
          *This is an indicative eligibility check. Final approval subject to verification and bank policies.
        </p>
      </div>
    </div>
  );
};

export default Eligibility;