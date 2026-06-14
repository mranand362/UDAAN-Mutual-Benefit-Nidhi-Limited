import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet, TrendingUp, Shield, Clock,
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Users, CreditCard, Phone, Globe,
  Download, Zap, Award, Heart, Home, Building
} from "lucide-react";

const PropertyLoan = () => {
     const navigate = useNavigate();
  const [loanType, setLoanType] = useState("home");

  const loanTypes = [
    {
      value: "home",
      label: "Home Loan",
      maxAmount: "₹ 5 Cr",
      interest: "8.5% p.a.",
      tenure: "30 years",
      features: ["Tax benefits", "Low EMIs", "Flexible repayment"]
    },
    {
      value: "plot",
      label: "Plot Purchase",
      maxAmount: "₹ 2 Cr",
      interest: "9.0% p.a.",
      tenure: "15 years",
      features: ["For land purchase", "Construction linked", "Easy documentation"]
    },
    {
      value: "construction",
      label: "Home Construction",
      maxAmount: "₹ 3 Cr",
      interest: "8.75% p.a.",
      tenure: "20 years",
      features: ["Stage-wise disbursement", "Technical valuation", "Subsidy eligible"]
    },
    {
      value: "renovation",
      label: "Renovation Loan",
      maxAmount: "₹ 50 L",
      interest: "9.5% p.a.",
      tenure: "7 years",
      features: ["No collateral", "Quick approval", "For repairs/upgrades"]
    }
  ];

  const features = [
    {
      icon: <Home className="w-5 h-5" />,
      title: "High Loan Amount",
      desc: "Up to 90% of property value"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Attractive Rates",
      desc: "Starting from 8.5% p.a."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Long Tenure",
      desc: "Repay up to 30 years"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Tax Benefits",
      desc: "Save on principal & interest"
    }
  ];

  const benefits = [
    "Top-up loan facility available",
    "Balance transfer option",
    "Pre-EMI interest payment",
    "Step-up EMI option",
    "Joint ownership allowed",
    "No prepayment charges for floating rate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Building className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Own Your Dream Home</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Property Loan</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Make your dream of owning a home a reality with our affordable loans
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">₹5 Cr</div>
            <div className="text-xs text-gray-500">Max Loan</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">8.5%</div>
            <div className="text-xs text-gray-500">Interest p.a.</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">30 Yrs</div>
            <div className="text-xs text-gray-500">Max Tenure</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">90%</div>
            <div className="text-xs text-gray-500">of Property Value</div>
          </div>
        </div>

        {/* Loan Types */}
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Choose Loan Purpose</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {loanTypes.map((type) => (
            <label
              key={type.value}
              className={`relative p-5 border-2 rounded-xl cursor-pointer transition-all ${
                loanType === type.value
                  ? 'border-[#FDB813] bg-[#FDB813]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#FDB813]/50 bg-white'
              }`}
            >
              <input
                type="radio"
                name="loanType"
                value={type.value}
                checked={loanType === type.value}
                onChange={(e) => setLoanType(e.target.value)}
                className="absolute opacity-0"
              />
              <div>
                <h3 className="font-bold text-[#0B2A4A] text-base mb-2">{type.label}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Max Amount</span>
                  <span className="text-sm font-bold text-[#FDB813]">{type.maxAmount}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Interest</span>
                  <span className="text-sm font-bold text-[#0B2A4A]">{type.interest}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">Tenure</span>
                  <span className="text-sm font-bold text-[#0B2A4A]">{type.tenure}</span>
                </div>
                <ul className="space-y-1">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1 text-[10px] text-gray-500">
                      <CheckCircle className="w-3 h-3 text-[#FDB813] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813] mb-3 group-hover:bg-[#FDB813] group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-[#0B2A4A] text-base mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits & CTA */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FDB813]" />
              Loan Benefits
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Apply for Property Loan</h3>
            <p className="text-sm text-gray-300 mb-4">Get pre-approved in minutes</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">1</div>
                <span>Check eligibility</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">2</div>
                <span>Upload documents</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">3</div>
                <span>Get loan sanctioned</span>
              </div>
            </div>
            <button 
            onClick={() => navigate("/apply")}
            className="w-full mt-6 bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-white transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLoan;