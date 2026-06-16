import React, { useState } from "react";
import { 
  IndianRupee, Percent, Calendar, TrendingUp, PieChart,
  BarChart3, Download, RefreshCw, HelpCircle, Sparkles,
  Calculator as CalcIcon, FileText, LineChart, ChevronLeft,
  ChevronRight, Shield, Award, Clock, Wallet
} from "lucide-react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [activeTab, setActiveTab] = useState("emi");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const tenureInMonths = loanTenure * 12;

    if (principal && ratePerMonth && tenureInMonths) {
      const emi =
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths)) /
        (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
      return Math.round(emi);
    }
    return 0;
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;
  const principalPercentage = ((loanAmount / totalAmount) * 100).toFixed(1);
  const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);

  // Generate amortization data
  const generateAmortization = () => {
    const schedule = [];
    let remainingBalance = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    
    for (let year = 1; year <= loanTenure; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      
      for (let month = 1; month <= 12; month++) {
        if (remainingBalance <= 0) break;
        
        const interestForMonth = remainingBalance * monthlyRate;
        const principalForMonth = Math.min(emi - interestForMonth, remainingBalance);
        
        yearlyInterest += interestForMonth;
        yearlyPrincipal += principalForMonth;
        remainingBalance -= principalForMonth;
      }
      
      schedule.push({
        year,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.round(remainingBalance)
      });
    }
    return schedule;
  };

  const amortizationSchedule = generateAmortization();
  const displayedSchedule = loanTenure > 5 ? amortizationSchedule.slice(0, 5) : amortizationSchedule;

  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    }
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0
    }).format(value);
  };

  const formatFullCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0
    }).format(value);
  };

  const handleReset = () => {
    setLoanAmount(500000);
    setInterestRate(10.5);
    setLoanTenure(5);
  };

  const handleExport = () => {
    const data = amortizationSchedule.map(row => 
      `Year ${row.year}: Principal Paid: ₹${row.principal.toLocaleString()}, Interest Paid: ₹${row.interest.toLocaleString()}, Remaining Balance: ₹${row.balance.toLocaleString()}`
    ).join('\n');
    
    const blob = new Blob([`EMI Calculation Summary\n\nLoan Amount: ${formatFullCurrency(loanAmount)}\nInterest Rate: ${interestRate}%\nTenure: ${loanTenure} years\nMonthly EMI: ${formatFullCurrency(emi)}\nTotal Interest: ${formatFullCurrency(totalInterest)}\nTotal Payment: ${formatFullCurrency(totalAmount)}\n\nYearly Breakdown:\n${data}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emi-schedule.txt';
    a.click();
  };

  const handleShare = () => {
    const text = `💰 EMI Calculation Summary\n\nLoan Amount: ${formatFullCurrency(loanAmount)}\nInterest Rate: ${interestRate}%\nTenure: ${loanTenure} years\nMonthly EMI: ${formatFullCurrency(emi)}\nTotal Interest: ${formatFullCurrency(totalInterest)}\nTotal Payment: ${formatFullCurrency(totalAmount)}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'EMI Calculator Results',
        text: text,
      }).catch(console.log);
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <CalcIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-xs sm:text-sm">Financial Calculator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2A4A] mb-2 sm:mb-3">
            EMI <span className="text-[#FDB813]">Calculator</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Plan your loan repayments with precision and clarity
          </p>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden flex gap-2 mb-4">
          <button
            onClick={handleReset}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#FDB813] transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleExport}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#FDB813] transition-all"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#FDB813] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>

        {/* Main Grid - Responsive */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Input Panel - Mobile Optimized */}
          <div className="lg:col-span-5 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB813]" />
                Loan Details
              </h2>
              <button
                onClick={handleReset}
                className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600 hover:text-[#FDB813] transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Loan Amount - Mobile Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1">
                    <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813]" />
                    Loan Amount
                  </label>
                  <span className="text-base sm:text-lg font-semibold text-[#0B2A4A]">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                  style={{ touchAction: "pan-y" }}
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>₹10K</span>
                  <span>₹50L</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Percent className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813]" />
                    Interest Rate
                  </label>
                  <span className="text-base sm:text-lg font-semibold text-[#0B2A4A]">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>5%</span>
                  <span>12.5%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813]" />
                    Loan Tenure
                  </label>
                  <span className="text-base sm:text-lg font-semibold text-[#0B2A4A]">{loanTenure} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Quick Presets - Scrollable on Mobile */}
            <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">Quick Tenure</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[3, 5, 7, 10, 15, 20].map((year) => (
                  <button
                    key={year}
                    onClick={() => setLoanTenure(year)}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-all touch-manipulation ${
                      loanTenure === year
                        ? "bg-[#FDB813] text-[#0B2A4A] shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {year}Y
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats - Mobile */}
            <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-3 gap-2 bg-gradient-to-r from-[#0B2A4A]/5 to-transparent rounded-xl p-3">
              <div className="text-center">
                <Wallet className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813] mx-auto mb-1" />
                <p className="text-[10px] sm:text-xs text-gray-500">Monthly</p>
                <p className="text-[10px] sm:text-xs font-semibold text-[#0B2A4A]">{formatCurrency(emi)}</p>
              </div>
              <div className="text-center">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813] mx-auto mb-1" />
                <p className="text-[10px] sm:text-xs text-gray-500">Total</p>
                <p className="text-[10px] sm:text-xs font-semibold text-[#0B2A4A]">{formatCurrency(totalAmount)}</p>
              </div>
              <div className="text-center">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#FDB813] mx-auto mb-1" />
                <p className="text-[10px] sm:text-xs text-gray-500">Interest</p>
                <p className="text-[10px] sm:text-xs font-semibold text-[#FDB813]">{formatCurrency(totalInterest)}</p>
              </div>
            </div>
          </div>

          {/* Results Panel - Mobile Optimized */}
          <div className="lg:col-span-7 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
            {/* Tabs - Scrollable on Mobile */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                {[
                  { id: "emi", label: "EMI", icon: <CalcIcon className="w-3 h-3 sm:w-4 sm:h-4" /> },
                  { id: "breakdown", label: "Breakdown", icon: <PieChart className="w-3 h-3 sm:w-4 sm:h-4" /> },
                  { id: "schedule", label: "Schedule", icon: <LineChart className="w-3 h-3 sm:w-4 sm:h-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap touch-manipulation ${
                      activeTab === tab.id
                        ? "bg-[#FDB813] text-[#0B2A4A] shadow-md"
                        : "text-gray-500 hover:text-[#0B2A4A] hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden xs:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="hidden lg:flex gap-2">
                <button
                  onClick={handleExport}
                  className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 rounded-lg text-[11px] sm:text-xs text-gray-600 hover:text-[#FDB813] transition-colors"
                >
                  <Download className="w-3 h-3" />
                  Export
                </button>
              </div>
            </div>

            {/* EMI Tab - Mobile Optimized */}
            {activeTab === "emi" && (
              <div className="space-y-4 sm:space-y-6">
                {/* Main EMI Card */}
                <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-4 sm:p-5 md:p-6 text-white">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-medium text-white/80">Monthly EMI</span>
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB813]" />
                  </div>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold break-words">
                    {formatFullCurrency(emi)}
                  </span>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">Fixed for entire tenure</p>
                </div>

                {/* Stats Grid - Responsive */}
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-[10px] sm:text-xs text-gray-500 block mb-1">Principal Amount</span>
                    <span className="text-sm sm:text-base md:text-xl font-bold text-[#0B2A4A] break-words">{formatFullCurrency(loanAmount)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-[10px] sm:text-xs text-gray-500 block mb-1">Total Interest</span>
                    <span className="text-sm sm:text-base md:text-xl font-bold text-[#FDB813] break-words">{formatFullCurrency(totalInterest)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-[10px] sm:text-xs text-gray-500 block mb-1">Total Payment</span>
                    <span className="text-sm sm:text-base md:text-xl font-bold text-[#0B2A4A] break-words">{formatFullCurrency(totalAmount)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Breakdown Tab - Mobile Optimized */}
            {activeTab === "breakdown" && (
              <div className="space-y-4 sm:space-y-6">
                {/* Chart - Responsive */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 py-4 sm:py-6">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#FDB813"
                        strokeWidth="10"
                        strokeDasharray={`${principalPercentage * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2A4A]">{principalPercentage}%</span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FDB813] rounded"></div>
                      <span className="text-xs sm:text-sm text-gray-700">Principal ({principalPercentage}%)</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded"></div>
                      <span className="text-xs sm:text-sm text-gray-700">Interest ({interestPercentage}%)</span>
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB813] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-[#0B2A4A] mb-1 sm:mb-2">Payment Summary</h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        You'll pay <span className="text-[#0B2A4A] font-semibold">{formatFullCurrency(emi)}</span> monthly for {loanTenure} years.
                        Total interest is <span className="text-[#FDB813] font-semibold">{formatFullCurrency(totalInterest)}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule Tab - Mobile Optimized */}
            {activeTab === "schedule" && (
              <div>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-xs sm:text-sm min-w-[400px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 sm:py-3 text-[10px] sm:text-xs font-medium text-gray-500">Year</th>
                        <th className="text-right py-2 sm:py-3 text-[10px] sm:text-xs font-medium text-gray-500">Principal</th>
                        <th className="text-right py-2 sm:py-3 text-[10px] sm:text-xs font-medium text-gray-500">Interest</th>
                        <th className="text-right py-2 sm:py-3 text-[10px] sm:text-xs font-medium text-gray-500">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(loanTenure > 5 ? displayedSchedule : amortizationSchedule).map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-[#0B2A4A]">Year {row.year}</td>
                          <td className="text-right py-1.5 sm:py-2 text-[11px] sm:text-sm text-gray-600">₹{row.principal.toLocaleString()}</td>
                          <td className="text-right py-1.5 sm:py-2 text-[11px] sm:text-sm text-gray-600">₹{row.interest.toLocaleString()}</td>
                          <td className="text-right py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-[#FDB813]">₹{row.balance.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {loanTenure > 5 && (
                  <p className="text-[10px] sm:text-xs text-center text-gray-500 mt-3 sm:mt-4">
                    Showing first 5 years of {loanTenure}. Export for complete schedule.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Grid - Mobile Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
          {[
            { icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Accurate EMI", color: "text-blue-600 bg-blue-50" },
            { icon: <PieChart className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Visual Breakdown", color: "text-green-600 bg-green-50" },
            { icon: <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Yearly Schedule", color: "text-purple-600 bg-purple-50" },
            { icon: <Download className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Export Data", color: "text-amber-600 bg-amber-50" }
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center justify-center gap-1 sm:gap-2 hover:scale-105 transition-transform cursor-default`}>
              <span>{item.icon}</span>
              <span className="text-[10px] sm:text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer - Mobile Optimized */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8 text-[9px] sm:text-xs text-gray-500">
          <HelpCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="text-center">This is an estimate. Actual figures may vary based on lender policies.</span>
        </div>
      </div>

      {/* Add mobile-specific styles */}
      <style >{`
        @media (max-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }
        @media (min-width: 481px) {
          .xs\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
};

export default Calculator;