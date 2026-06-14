import React, { useState } from "react";
import { 
  IndianRupee, Percent, Calendar, TrendingUp, PieChart,
  BarChart3, Download, RefreshCw, HelpCircle, Sparkles,
  Calculator as CalcIcon, FileText, LineChart
} from "lucide-react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [activeTab, setActiveTab] = useState("emi");

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

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0
    }).format(value).replace("₹", "₹ ");
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
    
    const blob = new Blob([`EMI Calculation Summary\n\nLoan Amount: ${formatCurrency(loanAmount)}\nInterest Rate: ${interestRate}%\nTenure: ${loanTenure} years\nMonthly EMI: ${formatCurrency(emi)}\nTotal Interest: ${formatCurrency(totalInterest)}\nTotal Payment: ${formatCurrency(totalAmount)}\n\nYearly Breakdown:\n${data}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emi-schedule.txt';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <CalcIcon className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Financial Calculator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">EMI Calculator</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Plan your loan repayments with precision and clarity
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Input Panel */}
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#0B2A4A] flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#FDB813]" />
                Loan Details
              </h2>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600 hover:text-[#FDB813] transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <IndianRupee className="w-4 h-4 text-[#FDB813]" />
                    Loan Amount
                  </label>
                  <span className="text-lg font-semibold text-[#0B2A4A]">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>₹10K</span>
                  <span>₹50L</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Percent className="w-4 h-4 text-[#FDB813]" />
                    Interest Rate
                  </label>
                  <span className="text-lg font-semibold text-[#0B2A4A]">{interestRate}%</span>
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
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5%</span>
                  <span>12.5%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#FDB813]" />
                    Loan Tenure
                  </label>
                  <span className="text-lg font-semibold text-[#0B2A4A]">{loanTenure} Years</span>
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
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">Quick Tenure</p>
              <div className="flex flex-wrap gap-2">
                {[3, 5, 7, 10, 15, 20].map((year) => (
                  <button
                    key={year}
                    onClick={() => setLoanTenure(year)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      loanTenure === year
                        ? "bg-[#FDB813] text-[#0B2A4A]"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {year}Y
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* Tabs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                {[
                  { id: "emi", label: "EMI", icon: <CalcIcon className="w-4 h-4" /> },
                  { id: "breakdown", label: "Breakdown", icon: <PieChart className="w-4 h-4" /> },
                  { id: "schedule", label: "Schedule", icon: <LineChart className="w-4 h-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-[#FDB813] text-[#0B2A4A]"
                        : "text-gray-500 hover:text-[#0B2A4A] hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs text-gray-600 hover:text-[#FDB813] transition-colors"
              >
                <Download className="w-3 h-3" />
                Export
              </button>
            </div>

            {/* EMI Tab */}
            {activeTab === "emi" && (
              <div className="space-y-6">
                {/* Main EMI Card */}
                <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white/80">Monthly EMI</span>
                    <TrendingUp className="w-5 h-5 text-[#FDB813]" />
                  </div>
                  <span className="text-5xl font-bold">{formatCurrency(emi)}</span>
                  <p className="text-xs text-white/60 mt-2">Fixed for entire tenure</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xs text-gray-500 block mb-1">Principal Amount</span>
                    <span className="text-xl font-bold text-[#0B2A4A]">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xs text-gray-500 block mb-1">Total Interest</span>
                    <span className="text-xl font-bold text-[#FDB813]">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xs text-gray-500 block mb-1">Total Payment</span>
                    <span className="text-xl font-bold text-[#0B2A4A]">{formatCurrency(totalAmount)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Breakdown Tab */}
            {activeTab === "breakdown" && (
              <div className="space-y-6">
                {/* Chart */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="12"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#FDB813"
                        strokeWidth="12"
                        strokeDasharray={`${principalPercentage * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0B2A4A]">{principalPercentage}%</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#FDB813] rounded"></div>
                      <span className="text-sm text-gray-700">Principal ({principalPercentage}%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <span className="text-sm text-gray-700">Interest ({interestPercentage}%)</span>
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#FDB813] mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-[#0B2A4A] mb-2">Payment Summary</h3>
                      <p className="text-sm text-gray-600">
                        You'll pay <span className="text-[#0B2A4A] font-semibold">{formatCurrency(emi)}</span> monthly for {loanTenure} years.
                        Total interest is <span className="text-[#FDB813] font-semibold">{formatCurrency(totalInterest)}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === "schedule" && (
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-xs font-medium text-gray-500">Year</th>
                        <th className="text-right py-3 text-xs font-medium text-gray-500">Principal Paid</th>
                        <th className="text-right py-3 text-xs font-medium text-gray-500">Interest Paid</th>
                        <th className="text-right py-3 text-xs font-medium text-gray-500">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {amortizationSchedule.map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-2 text-sm font-medium text-[#0B2A4A]">Year {row.year}</td>
                          <td className="text-right py-2 text-sm text-gray-600">₹{row.principal.toLocaleString()}</td>
                          <td className="text-right py-2 text-sm text-gray-600">₹{row.interest.toLocaleString()}</td>
                          <td className="text-right py-2 text-sm font-medium text-[#FDB813]">₹{row.balance.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {loanTenure > 5 && (
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Showing all {loanTenure} years. Export for detailed breakdown.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: <TrendingUp className="w-4 h-4" />, text: "Accurate EMI", color: "text-blue-600 bg-blue-100" },
            { icon: <PieChart className="w-4 h-4" />, text: "Visual Breakdown", color: "text-green-600 bg-green-100" },
            { icon: <Calendar className="w-4 h-4" />, text: "Yearly Schedule", color: "text-purple-600 bg-purple-100" },
            { icon: <Download className="w-4 h-4" />, text: "Export Data", color: "text-amber-600 bg-amber-100" }
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-xl p-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-default`}>
              <span>{item.icon}</span>
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-gray-500">
          <HelpCircle className="w-3 h-3" />
          <span>This is an estimate. Actual figures may vary based on lender policies.</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;