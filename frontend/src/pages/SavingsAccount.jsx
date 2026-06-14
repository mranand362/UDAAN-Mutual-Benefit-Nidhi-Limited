import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Wallet, TrendingUp, Shield, Clock, 
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Users, CreditCard, Phone, Globe,
  Download, Zap, Award, Heart
} from "lucide-react";

const SavingsAccount = () => {
    const navigate = useNavigate();
  const [accountType, setAccountType] = useState("basic");

  const accountTypes = [
    {
      value: "basic",
      label: "Basic Savings",
      minBalance: 1000,
      interest: "3.5%",
      features: ["Free ATM card", "Mobile banking", "Passbook facility"]
    },
    {
      value: "premium",
      label: "Premium Savings",
      minBalance: 10000,
      interest: "4.0%",
      features: ["Platinum debit card", "Higher withdrawal limits", "Personal banker"]
    },
    {
      value: "senior",
      label: "Senior Citizen",
      minBalance: 5000,
      interest: "4.5%",
      features: ["Higher interest rate", "Free health check-up", "Priority service"]
    },
    {
      value: "family",
      label: "Family Savings",
      minBalance: 5000,
      interest: "4.0%",
      features: ["Joint accounts", "Family floater benefits", "Child education planner"]
    }
  ];

  const features = [
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Zero Balance",
      desc: "Open account with zero initial deposit"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Free Debit Card",
      desc: "International debit card with zero fees"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Mobile Banking",
      desc: "24/7 access through our app"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Online Transfers",
      desc: "Free IMPS, NEFT, RTGS"
    }
  ];

  const benefits = [
    "No monthly maintenance fee",
    "Free passbook and checkbook",
    "Cash withdrawals at any branch",
    "Nomination facility available",
    "Linked to other deposit schemes",
    "Insurance coverage options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Wallet className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Everyday Banking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Savings Account</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Secure, convenient, and rewarding – your ideal banking partner
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">4.5%</div>
            <div className="text-xs text-gray-500">Interest Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">Zero</div>
            <div className="text-xs text-gray-500">Min Balance*</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">24/7</div>
            <div className="text-xs text-gray-500">Banking</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">Free</div>
            <div className="text-xs text-gray-500">Debit Card</div>
          </div>
        </div>

        {/* Account Types */}
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Choose Your Account Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {accountTypes.map((type) => (
            <label
              key={type.value}
              className={`relative p-5 border-2 rounded-xl cursor-pointer transition-all ${
                accountType === type.value
                  ? 'border-[#FDB813] bg-[#FDB813]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#FDB813]/50 bg-white'
              }`}
            >
              <input
                type="radio"
                name="accountType"
                value={type.value}
                checked={accountType === type.value}
                onChange={(e) => setAccountType(e.target.value)}
                className="absolute opacity-0"
              />
              <div>
                <h3 className="font-bold text-[#0B2A4A] text-base mb-2">{type.label}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Min Balance</span>
                  <span className="text-sm font-bold text-[#FDB813]">₹{type.minBalance}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">Interest</span>
                  <span className="text-sm font-bold text-[#0B2A4A]">{type.interest}</span>
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
              Account Benefits
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
            <h3 className="text-lg font-bold mb-4">Open Your Account Today</h3>
            <p className="text-sm text-gray-300 mb-4">Get started with just a few clicks</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">1</div>
                <span>Fill online application</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">2</div>
                <span>Upload KYC documents</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">3</div>
                <span>Activate in 24 hours</span>
              </div>
            </div>
            <button 
            onClick={() => navigate("/apply-loan")}
            className="w-full mt-6 bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-white transition-all">
              Open Account Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsAccount;