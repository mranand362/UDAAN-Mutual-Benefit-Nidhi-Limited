import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet, TrendingUp, Shield, Clock,
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Users, CreditCard, Phone, Globe,
  Download, Zap, Award, Heart, Calendar, PieChart
} from "lucide-react";

const MonthlyIncomePlan = () => {
    const navigate = useNavigate();
  const [planType, setPlanType] = useState("basic");

  const planTypes = [
    {
      value: "basic",
      label: "Basic Plan",
      minInvestment: 50000,
      monthlyPayout: "₹ 1,500",
      tenure: "1-3 years",
      features: ["Fixed monthly income", "Auto credit", "Withdrawal facility"]
    },
    {
      value: "premium",
      label: "Premium Plan",
      minInvestment: 200000,
      monthlyPayout: "₹ 6,500",
      tenure: "3-5 years",
      features: ["Higher returns", "Tax benefits", "Loan facility"]
    },
    {
      value: "senior",
      label: "Senior Citizen Plan",
      minInvestment: 100000,
      monthlyPayout: "₹ 3,200",
      tenure: "2-5 years",
      features: ["Higher interest rate", "Quarterly payouts", "Free health check-up"]
    },
    {
      value: "family",
      label: "Family Floater",
      minInvestment: 150000,
      monthlyPayout: "₹ 4,800",
      tenure: "3-6 years",
      features: ["Joint ownership", "Nomination", "Child education bonus"]
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Regular Income",
      desc: "Monthly payouts credited to your account"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Attractive Returns",
      desc: "Up to 8% interest per annum"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Capital Protection",
      desc: "Principal amount fully secured"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Flexible Tenure",
      desc: "Choose from 1 to 6 years"
    }
  ];

  const benefits = [
    "Guaranteed fixed income every month",
    "Option to reinvest or withdraw payouts",
    "Loan available against the plan",
    "Tax benefits under Section 80C",
    "Nomination facility available",
    "Premature withdrawal allowed (with conditions)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <PieChart className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Steady Income</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Monthly Income Plan</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Earn a fixed monthly income while your capital stays safe
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">8%</div>
            <div className="text-xs text-gray-500">Max Interest</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">₹50k</div>
            <div className="text-xs text-gray-500">Min Investment</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">6 Yrs</div>
            <div className="text-xs text-gray-500">Max Tenure</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-2xl font-bold text-[#FDB813]">₹1,500</div>
            <div className="text-xs text-gray-500">Monthly Payout*</div>
          </div>
        </div>

        {/* Plan Types */}
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {planTypes.map((type) => (
            <label
              key={type.value}
              className={`relative p-5 border-2 rounded-xl cursor-pointer transition-all ${
                planType === type.value
                  ? 'border-[#FDB813] bg-[#FDB813]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#FDB813]/50 bg-white'
              }`}
            >
              <input
                type="radio"
                name="planType"
                value={type.value}
                checked={planType === type.value}
                onChange={(e) => setPlanType(e.target.value)}
                className="absolute opacity-0"
              />
              <div>
                <h3 className="font-bold text-[#0B2A4A] text-base mb-2">{type.label}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Min Investment</span>
                  <span className="text-sm font-bold text-[#FDB813]">{type.minInvestment}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Monthly Payout</span>
                  <span className="text-sm font-bold text-[#0B2A4A]">{type.monthlyPayout}</span>
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
              Plan Benefits
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
            <h3 className="text-lg font-bold mb-4">Start Your Monthly Income Plan Today</h3>
            <p className="text-sm text-gray-300 mb-4">Secure your future with regular payouts</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">1</div>
                <span>Choose your plan</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">2</div>
                <span>Make investment</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center text-[#FDB813]">3</div>
                <span>Start receiving monthly income</span>
              </div>
            </div>
            <button 
           onClick={() => navigate("/Invest")}
            className="w-full mt-6 bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-white transition-all">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyIncomePlan;