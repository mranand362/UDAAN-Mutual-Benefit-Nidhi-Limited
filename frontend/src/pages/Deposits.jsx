import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Landmark, TrendingUp, Shield, Clock, 
  CheckCircle, ArrowRight, Sparkles, IndianRupee,
  Calendar, Percent, PiggyBank, Award
} from "lucide-react";

const Deposits = () => {
  const navigate = useNavigate();
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const depositProducts = [
    {
      id: 1,
      icon: <Landmark className="w-5 h-5" />,
      title: "Fixed Deposit",
      tagline: "Guaranteed returns on your savings",
      description: "Invest a lump sum amount for a fixed tenure and earn guaranteed returns at attractive interest rates.",
      features: [
        "Interest rates up to 9.5% p.a.",
        "Flexible tenure from 12 to 60 months",
        "Loan facility up to 90% of deposit",
        "Quarterly interest payout option"
      ],
      interest: "7.5% - 9.5%",
      minAmount: "₹5,000",
      tenure: "12-60 months",
      payout: "Monthly/Quarterly",
      type: "fixed",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Recurring Deposit",
      tagline: "Build savings with small monthly installments",
      description: "Save regularly with monthly deposits and earn attractive returns on maturity.",
      features: [
        "Interest rates up to 8.5% p.a.",
        "Monthly installments as low as ₹500",
        "Flexible tenure from 12 to 60 months",
        "Partial withdrawal allowed"
      ],
      interest: "7.0% - 8.5%",
      minAmount: "₹500/month",
      tenure: "12-60 months",
      payout: "On maturity",
      type: "recurring",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <PiggyBank className="w-5 h-5" />,
      title: "Daily Deposit",
      tagline: "Save daily, grow consistently",
      description: "Start investing in tiny portions daily and watch your savings grow over time.",
      features: [
        "Interest rates up to 7.5% p.a.",
        "Daily deposits as low as ₹100",
        "Flexible withdrawal options",
        "Ideal for small savers"
      ],
      interest: "6.5% - 7.5%",
      minAmount: "₹100/day",
      tenure: "Flexible",
      payout: "On maturity",
      type: "daily",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: <Award className="w-5 h-5" />,
      title: "Cumulative Deposit",
      tagline: "Compound your wealth",
      description: "Interest is compounded quarterly and paid along with principal at maturity for maximum returns.",
      features: [
        "Higher effective returns through compounding",
        "Interest rates up to 9.25% p.a.",
        "Ideal for long-term goals",
        "Loan facility available"
      ],
      interest: "8.0% - 9.25%",
      minAmount: "₹10,000",
      tenure: "12-60 months",
      payout: "At maturity",
      type: "cumulative",
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 5,
      icon: <Calendar className="w-5 h-5" />,
      title: "Non-Cumulative Deposit",
      tagline: "Regular income from your savings",
      description: "Choose monthly, quarterly, half-yearly, or annual interest payouts for regular income.",
      features: [
        "Regular interest payouts",
        "Interest rates up to 9% p.a.",
        "Ideal for retired persons",
        "Flexible payout options"
      ],
      interest: "7.75% - 9%",
      minAmount: "₹10,000",
      tenure: "12-60 months",
      payout: "Monthly/Quarterly",
      type: "non-cumulative",
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      icon: <Percent className="w-5 h-5" />,
      title: "Tax Saver Deposit",
      tagline: "Save tax while you save",
      description: "Lock-in period of 5 years with tax benefits under Section 80C of Income Tax Act.",
      features: [
        "Tax deduction up to ₹1.5 lakhs",
        "Interest rates up to 8.5% p.a.",
        "5 year lock-in period",
        "Loan facility available"
      ],
      interest: "7.5% - 8.5%",
      minAmount: "₹5,000",
      tenure: "5 years fixed",
      payout: "At maturity",
      type: "tax-saver",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const stats = [
    { value: "9.5%", label: "Highest Interest", icon: <TrendingUp className="w-4 h-4" /> },
    { value: "6+", label: "Deposit Types", icon: <Landmark className="w-4 h-4" /> },
    { value: "₹500", label: "Min Monthly", icon: <IndianRupee className="w-4 h-4" /> },
    { value: "100%", label: "Secure", icon: <Shield className="w-4 h-4" /> }
  ];

  const filters = [
    { id: "all", label: "All Deposits" },
    { id: "fixed", label: "Fixed" },
    { id: "recurring", label: "Recurring" },
    { id: "daily", label: "Daily" },
    { id: "tax-saver", label: "Tax Saver" }
  ];

  const filteredDeposits = activeFilter === "all" 
    ? depositProducts 
    : depositProducts.filter(d => d.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <PiggyBank className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Savings Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Deposit Schemes</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Choose from a wide range of deposit options tailored to your savings goals
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-[#0B2A4A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Deposit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDeposits.map((deposit) => (
            <div
              key={deposit.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedDeposit(deposit)}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${deposit.color} p-4 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {deposit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{deposit.title}</h3>
                    <p className="text-xs text-white/80 mt-0.5">{deposit.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Interest Rate</span>
                    <span className="font-medium text-[#0B2A4A]">{deposit.interest}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Min Amount</span>
                    <span className="font-medium text-[#0B2A4A]">{deposit.minAmount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs px-2 py-1 bg-[#FDB813]/10 text-[#FDB813] rounded-full">
                    {deposit.type}
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
            { icon: <Shield className="w-4 h-4" />, text: "100% Secure", color: "text-blue-600 bg-blue-100" },
            { icon: <TrendingUp className="w-4 h-4" />, text: "High Returns", color: "text-green-600 bg-green-100" },
            { icon: <Clock className="w-4 h-4" />, text: "Flexible Tenure", color: "text-purple-600 bg-purple-100" },
            { icon: <IndianRupee className="w-4 h-4" />, text: "Low Minimum", color: "text-amber-600 bg-amber-100" }
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
            <h3 className="text-lg font-semibold text-white mb-2">Ready to Start Saving?</h3>
            <p className="text-sm text-gray-300 mb-4">Open a deposit account today and grow your wealth</p>
            <button 
            onClick={() => navigate("/openaccount")}
            className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md">
              Open an Account
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDeposit && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedDeposit(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedDeposit.color} p-5 sticky top-0`}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white backdrop-blur-sm">
                  {selectedDeposit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base">{selectedDeposit.title}</h3>
                  <p className="text-white/80 text-xs mt-1">{selectedDeposit.tagline}</p>
                </div>
                <button 
                  onClick={() => setSelectedDeposit(null)}
                  className="text-white/50 hover:text-white hover:rotate-90 transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">{selectedDeposit.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Interest Rate</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedDeposit.interest}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Min Amount</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedDeposit.minAmount}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Tenure</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedDeposit.tenure}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xs text-gray-500 block mb-1">Payout</span>
                  <span className="font-medium text-[#0B2A4A]">{selectedDeposit.payout}</span>
                </div>
              </div>

              <h4 className="font-medium text-[#0B2A4A] text-sm mb-3">Key Features</h4>
              <ul className="space-y-2 mb-5">
                {selectedDeposit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm group">
                    <CheckCircle className="w-4 h-4 text-[#FDB813] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600 text-xs group-hover:text-[#0B2A4A] transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
              onClick={() => navigate("/apply-now")}
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

export default Deposits;
