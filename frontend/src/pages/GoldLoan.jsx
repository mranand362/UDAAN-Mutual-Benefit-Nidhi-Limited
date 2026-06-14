import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet, TrendingUp, Shield, Clock,
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Users, CreditCard, Phone, Globe,
  Download, Zap, Award, Heart, Gem, BadgeCheck
} from "lucide-react";

const GoldLoan = () => {
    const navigate = useNavigate();
  const [loanType, setLoanType] = useState("standard");

  const loanTypes = [
    {
      value: "standard",
      label: "Standard Gold Loan",
      maxLTV: "75%",
      interest: "7.5% p.a.",
      tenure: "6-12 months",
      features: ["Quick disbursal", "No income proof", "Part payment allowed"]
    },
    {
      value: "premium",
      label: "Premium Gold Loan",
      maxLTV: "80%",
      interest: "7.0% p.a.",
      tenure: "12-24 months",
      features: ["Higher loan amount", "Lower interest", "Flexible repayment"]
    },
    {
      value: "shortterm",
      label: "Short-term Loan",
      maxLTV: "70%",
      interest: "8.0% p.a.",
      tenure: "3-6 months",
      features: ["Minimal documentation", "Same-day approval", "No foreclosure charges"]
    },
    {
      value: "bulk",
      label: "Bulk Gold Loan",
      maxLTV: "75%",
      interest: "6.5% p.a.",
      tenure: "12-36 months",
      features: ["For businesses", "Negotiable rates", "Doorstep service"]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Approval",
      desc: "Get loan approved in minutes"
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: "High LTV",
      desc: "Up to 80% of gold value"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Safe Custody",
      desc: "Insured gold storage"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Online Management",
      desc: "Track and repay online"
    }
  ];

  const benefits = [
    "No credit score required",
    "Minimal documentation",
    "Flexible repayment options",
    "Loan against gold jewelry and coins",
    "Interest only on amount utilized",
    "Transparent valuation process"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Gem className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Unlock Your Gold's Value</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Gold Loan</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Get instant funds against your gold with lowest interest rates
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">80%</div>
            <div className="text-xs text-gray-500">Max LTV</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">6.5%</div>
            <div className="text-xs text-gray-500">Interest p.a.</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">10 min</div>
            <div className="text-xs text-gray-500">Approval Time</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">No</div>
            <div className="text-xs text-gray-500">Income Proof</div>
          </div>
        </div>

        {/* Loan Types */}
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Choose Your Loan Type</h2>
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
                  <span className="text-xs text-gray-500">Max LTV</span>
                  <span className="text-sm font-bold text-[#FDB813]">{type.maxLTV}</span>
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
            <h3 className="text-lg font-bold mb-4">Apply for Gold Loan Now</h3>
            <p className="text-sm text-gray-300 mb-4">Get money in your account within hours</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">1</div>
                <span>Visit nearest branch</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">2</div>
                <span>Get gold evaluated</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">3</div>
                <span>Receive loan amount</span>
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

export default GoldLoan;