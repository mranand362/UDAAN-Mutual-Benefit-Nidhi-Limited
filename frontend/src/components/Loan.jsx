import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Landmark, Home, FileText, Coins, 
  Briefcase, Car, GraduationCap, Building2,
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Calendar, Percent, Clock, Shield, Zap
} from "lucide-react";

const Loan = () => {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const loanProducts = [
    {
      id: 1,
      icon: <Landmark className="w-5 h-5" />,
      title: "Loan Against Fixed Deposit",
      tagline: "Unlock your FD value without breaking it",
      description: "A secured loan where your fixed deposit (FD) acts as collateral. Instead of breaking your FD, get a loan based on most of that FD value — usually 75–90% of the FD amount.",
      features: [
        "Interest rate: FD rate + 1-2%",
        "Continue earning interest on FD",
        "Loan up to 90% of FD value",
        "Ideal for short-term needs"
      ],
      interest: "8.5% - 10.5%",
      amount: "₹50 Lakhs",
      tenure: "1-5 years",
      processing: "24 hours",
      type: "secured",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Home className="w-5 h-5" />,
      title: "Loan Against Property",
      tagline: "Unlock the value of your property",
      description: "Pledge your residential or commercial property as security. Get funds for business expansion, education, or major expenses.",
      features: [
        "Up to 75% of property value",
        "Long repayment tenure up to 15 years",
        "Competitive interest rates",
        "Both residential & commercial property accepted"
      ],
      interest: "9.5% - 12%",
      amount: "₹5 Crores",
      tenure: "5-15 years",
      processing: "3-5 days",
      type: "secured",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <FileText className="w-5 h-5" />,
      title: "Loan Against Policy",
      tagline: "Get funds without surrendering your policy",
      description: "Use your life insurance policy's cash value as security. Access funds while keeping your insurance coverage intact.",
      features: [
        "Up to 90% of surrender value",
        "Keep insurance coverage active",
        "Simple documentation",
        "Competitive interest rates"
      ],
      interest: "10% - 12%",
      amount: "₹25 Lakhs",
      tenure: "1-5 years",
      processing: "2 days",
      type: "secured",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: <Coins className="w-5 h-5" />,
      title: "Gold Loan",
      tagline: "Instant cash against your gold",
      description: "Borrow money by pledging gold jewellery or coins as collateral. Get funds quickly at attractive interest rates.",
      features: [
        "Up to 90% of gold value",
        "Same day approval",
        "No income proof required",
        "Flexible repayment options"
      ],
      interest: "7.5% - 10%",
      amount: "₹1 Crore",
      tenure: "3 months - 3 years",
      processing: "2 hours",
      type: "secured",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      icon: <Briefcase className="w-5 h-5" />,
      title: "Personal Loan",
      tagline: "Fund your dreams, no collateral needed",
      description: "Unsecured loan for weddings, travel, medical emergencies, home renovation, and more.",
      features: [
        "No collateral required",
        "Minimal documentation",
        "Flexible tenure options",
        "Quick online approval"
      ],
      interest: "11% - 18%",
      amount: "₹25 Lakhs",
      tenure: "1-5 years",
      processing: "24 hours",
      type: "unsecured",
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      icon: <Car className="w-5 h-5" />,
      title: "Vehicle Loan",
      tagline: "Drive your dream car today",
      description: "Finance your new or used car, bike, or commercial vehicle with easy EMI options.",
      features: [
        "Up to 100% on-road funding",
        "Flexible tenure up to 7 years",
        "Both new & used vehicles",
        "Quick approval process"
      ],
      interest: "8% - 13%",
      amount: "₹1 Crore",
      tenure: "1-7 years",
      processing: "2 days",
      type: "secured",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 7,
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Education Loan",
      tagline: "Invest in your future",
      description: "Fund your education in India or abroad with specialized loan schemes for students.",
      features: [
        "Covers tuition, living costs, travel",
        "Moratorium period available",
        "No collateral up to ₹7.5 Lakhs",
        "Tax benefits under Section 80E"
      ],
      interest: "8% - 12%",
      amount: "₹1.5 Crores",
      tenure: "5-15 years",
      processing: "3-5 days",
      type: "unsecured",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 8,
      icon: <Building2 className="w-5 h-5" />,
      title: "Business Loan",
      tagline: "Fuel your business growth",
      description: "Unsecured funding for business expansion, working capital, or equipment purchase.",
      features: [
        "Up to ₹50 Lakhs without collateral",
        "Flexible repayment options",
        "Minimal documentation",
        "Fast disbursal"
      ],
      interest: "10% - 15%",
      amount: "₹50 Lakhs",
      tenure: "1-5 years",
      processing: "2-3 days",
      type: "unsecured",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { value: "8+", label: "Loan Products", icon: <Landmark className="w-4 h-4" /> },
    { value: "90%", label: "Max Funding", icon: <Percent className="w-4 h-4" /> },
    { value: "2hrs", label: "Fast Approval", icon: <Clock className="w-4 h-4" /> },
    { value: "7.5%", label: "Starting Rate", icon: <IndianRupee className="w-4 h-4" /> }
  ];

  const filters = [
    { id: "all", label: "All Loans" },
    { id: "secured", label: "Secured Loans" },
    { id: "unsecured", label: "Unsecured Loans" }
  ];

  const filteredLoans = activeFilter === "all" 
    ? loanProducts 
    : loanProducts.filter(loan => loan.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Financial Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Loan Products</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Choose from a wide range of loans tailored to your needs
          </p>
        </div>

        {/* Stats Grid */}
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-[#0B2A4A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedLoan(loan)}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${loan.color} p-4 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {loan.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm line-clamp-2">{loan.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-3 line-clamp-2 group-hover:text-[#0B2A4A] transition-colors">
                  {loan.tagline}
                </p>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Interest</span>
                    <span className="font-medium text-[#0B2A4A]">{loan.interest}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Max Amount</span>
                    <span className="font-medium text-[#0B2A4A]">{loan.amount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    loan.type === "secured" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {loan.type === "secured" ? "Secured" : "Unsecured"}
                  </span>
                  <span className="text-[#FDB813] text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { icon: <Shield className="w-4 h-4" />, text: "Secure Loans", color: "text-blue-600 bg-blue-100" },
            { icon: <Zap className="w-4 h-4" />, text: "Quick Approval", color: "text-yellow-600 bg-yellow-100" },
            { icon: <Percent className="w-4 h-4" />, text: "Low Interest", color: "text-green-600 bg-green-100" },
            { icon: <IndianRupee className="w-4 h-4" />, text: "Flexible Amount", color: "text-purple-600 bg-purple-100" }
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-xl p-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-default`}>
              <span>{item.icon}</span>
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help Choosing?</h3>
            <p className="text-sm text-gray-300 mb-4">Our experts are here to guide you</p>
            <button
  onClick={() => navigate("/talk-expert")}
  className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md"
>
  Talk to an Expert
</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedLoan && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedLoan(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedLoan.color} p-5 sticky top-0`}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white backdrop-blur-sm">
                  {selectedLoan.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base">{selectedLoan.title}</h3>
                  <p className="text-white/80 text-xs mt-1">{selectedLoan.tagline}</p>
                </div>
                <button 
                  onClick={() => setSelectedLoan(null)}
                  className="text-white/50 hover:text-white hover:rotate-90 transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">{selectedLoan.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Interest Rate</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedLoan.interest}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Max Amount</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedLoan.amount}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Tenure</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedLoan.tenure}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Processing</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedLoan.processing}</span>
                </div>
              </div>

              <h4 className="font-medium text-[#0B2A4A] text-sm mb-3">Key Features</h4>
              <ul className="space-y-2 mb-5">
                {selectedLoan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm group">
                    <CheckCircle className="w-4 h-4 text-[#FDB813] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600 text-xs group-hover:text-[#0B2A4A] transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

               <button
                            onClick={() => navigate("/apply")}
                             className="w-full bg-[#FDB813] text-[#0B2A4A] py-3 rounded-lg font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md">
                              Apply Now
                              <ArrowRight className="w-4 h-4" />
                            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loan;