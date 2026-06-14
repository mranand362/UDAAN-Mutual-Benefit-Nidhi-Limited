import React, { useEffect, useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Shield,
  CreditCard,
  DollarSign,
  Users,
  Lock,
  FileText,
  Clock,
  Calendar,
  Award,
  Building,
  Globe,
  Smartphone,
  Laptop,
  AlertCircle,
  CheckCircle,
  Star,
  TrendingUp,
  Wallet,
  Home,
  UserCheck,
  BookOpen,
  Download,
  Printer,
  Share2,
  XCircle,
  ExternalLink,
} from "lucide-react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle, color: "gray" },
    { id: "account", name: "Account & Registration", icon: UserCheck, color: "blue" },
    { id: "deposits", name: "Deposits & Savings", icon: DollarSign, color: "green" },
    { id: "loans", name: "Loans & Credit", icon: CreditCard, color: "orange" },
    { id: "transactions", name: "Transactions", icon: TrendingUp, color: "purple" },
    { id: "security", name: "Security & Privacy", icon: Lock, color: "red" },
    { id: "support", name: "Customer Support", icon: MessageCircle, color: "teal" },
  ];

  const faqs = [
    // Account & Registration
    {
      id: "acc1",
      category: "account",
      question: "How do I open an account with UDAAN?",
      answer: "Opening an account with UDAAN is simple. You can visit any of our branches with your KYC documents (PAN card, Aadhaar card, passport-size photographs, and address proof). Alternatively, you can start the process online by clicking on 'Register' and completing the online application. After initial verification, you'll need to visit a branch for biometric authentication.",
      icon: UserCheck,
    },
    {
      id: "acc2",
      category: "account",
      question: "What documents are required for KYC?",
      answer: "For KYC compliance, you need to provide: 1) Valid PAN Card (mandatory), 2) Aadhaar Card, 3) Valid photo ID proof (Voter ID/Passport/Driving License), 4) Recent passport-size photographs (2 copies), 5) Address proof (Utility bill/Bank statement/Rent agreement). For joint accounts, all applicants need to submit documents.",
      icon: FileText,
    },
    {
      id: "acc3",
      category: "account",
      question: "Is there a minimum balance requirement?",
      answer: "Yes, the minimum balance requirement varies by account type. Savings accounts require a minimum balance of ₹1,000. Current accounts require ₹5,000. There is no minimum balance for basic savings accounts, but features may be limited. FD and RD accounts have minimum deposit amounts as per scheme.",
      icon: Wallet,
    },
    {
      id: "acc4",
      category: "account",
      question: "Can NRIs open accounts with UDAAN?",
      answer: "Yes, NRIs can open NRI accounts with additional documentation. You'll need to provide your passport, visa, work permit, overseas address proof, and NRE/NRO account details. The account opening process may take longer due to additional verification requirements.",
      icon: Globe,
    },
    {
      id: "acc5",
      category: "account",
      question: "How do I update my personal information?",
      answer: "You can update your personal information by logging into your account and navigating to Profile Settings. For critical changes like address or contact number, you may need to submit supporting documents. Visit any branch with your ID proof and request for information update.",
      icon: UserCheck,
    },

    // Deposits
    {
      id: "dep1",
      category: "deposits",
      question: "What types of deposit accounts do you offer?",
      answer: "UDAAN offers multiple deposit options: 1) Savings Account - Daily banking with interest, 2) Fixed Deposit (FD) - Lump sum investment for fixed tenure, 3) Recurring Deposit (RD) - Monthly savings plan, 4) Current Account - For business transactions, 5) Senior Citizen Deposit - Higher interest rates for seniors (60+ years).",
      icon: DollarSign,
    },
    {
      id: "dep2",
      category: "deposits",
      question: "What are the current interest rates?",
      answer: "Interest rates vary by deposit type and tenure. Savings accounts offer 4-5% annually. FD rates range from 5.5% to 8% based on tenure (1-10 years). Senior citizens get an additional 0.5% interest. Current interest rates are displayed on our website and at all branches. Rates are subject to change as per RBI guidelines.",
      icon: TrendingUp,
    },
    {
      id: "dep3",
      category: "deposits",
      question: "Can I withdraw my FD before maturity?",
      answer: "Yes, premature withdrawal is allowed but with a penalty. The penalty amount depends on the deposit tenure and the time of withdrawal. For FDs withdrawn within 6 months, interest may be paid at savings rate. After 6 months, you'll receive interest at the applicable rate minus 1-2% penalty. Some schemes have mandatory lock-in periods.",
      icon: Clock,
    },
    {
      id: "dep4",
      category: "deposits",
      question: "How is interest calculated and credited?",
      answer: "Interest is calculated on a daily product basis and credited to your account quarterly (or monthly for some schemes). For FDs, interest can be paid monthly, quarterly, or reinvested (cumulative option). TDS is deducted as per Income Tax rules (10% if PAN is provided, 20% without PAN).",
      icon: Calendar,
    },
    {
      id: "dep5",
      category: "deposits",
      question: "What is the nomination facility?",
      answer: "Nomination facility is available for all accounts. You can nominate one or more persons to receive the account proceeds in case of your unfortunate demise. To add or change a nominee, submit Form DA-1 at any branch with valid ID proof of the nominee.",
      icon: Users,
    },

    // Loans
    {
      id: "loan1",
      category: "loans",
      question: "What types of loans do you provide?",
      answer: "UDAAN provides: 1) Secured Loans - Against FDs, RDs, or property, 2) Gold Loans - Against gold jewelry, 3) Vehicle Loans - For two-wheelers and four-wheelers, 4) Personal Loans - For salaried/self-employed individuals, 5) Business Loans - For small businesses and entrepreneurs.",
      icon: CreditCard,
    },
    {
      id: "loan2",
      category: "loans",
      question: "What is the eligibility criteria for loans?",
      answer: "Eligibility criteria include: 1) Must be a UDAAN member for minimum 6 months, 2) Age between 21-60 years (up to 65 for existing customers), 3) Regular deposit account with satisfactory transaction history, 4) Stable source of income, 5) Credit score evaluation as per policy. Additional criteria apply for specific loan types.",
      icon: UserCheck,
    },
    {
      id: "loan3",
      category: "loans",
      question: "How much loan can I get against my FD?",
      answer: "You can get a loan up to 90% of your FD amount for most deposits. For Senior Citizen FDs, the limit is up to 95%. The interest rate on such loans is typically 1-2% higher than your FD interest rate. The loan can be repaid flexibly or at maturity.",
      icon: Shield,
    },
    {
      id: "loan4",
      category: "loans",
      question: "What is the loan processing time?",
      answer: "Secured loans (against FD/RD) are processed within 24-48 hours. Gold loans can be disbursed within a few hours. Personal and business loans take 5-7 working days for processing, subject to document verification and credit assessment.",
      icon: Clock,
    },
    {
      id: "loan5",
      category: "loans",
      question: "Can I prepay my loan?",
      answer: "Yes, loan prepayment is allowed. Prepayment charges may apply (typically 2-3% of the principal outstanding). Some loans have a lock-in period of 6-12 months during which prepayment is not allowed. Check your loan agreement for specific terms.",
      icon: TrendingUp,
    },

    // Transactions
    {
      id: "txn1",
      category: "transactions",
      question: "What are the transaction limits?",
      answer: "Transaction limits vary by account type: Savings accounts have daily withdrawal limits of ₹50,000 (ATM) and ₹1,00,000 (branch). Current accounts have higher limits. Online transfer limits: IMPS ₹2,00,000, NEFT ₹5,00,000, RTGS ₹10,00,000 per day. These can be increased upon request with valid justification.",
      icon: TrendingUp,
    },
    {
      id: "txn2",
      category: "transactions",
      question: "How long do online transfers take?",
      answer: "IMPS transfers are instant (24x7). NEFT transfers are processed in hourly batches (available 24x7). RTGS is real-time during banking hours (8 AM to 6 PM on weekdays). Cheque clearance takes 2-3 working days as per RBI guidelines.",
      icon: Clock,
    },
    {
      id: "txn3",
      category: "transactions",
      question: "What happens if a transaction fails?",
      answer: "If a transaction fails, the amount is automatically reversed to your account within 5-7 working days. You will receive an SMS/Email notification. For immediate assistance, contact customer support with the transaction reference number.",
      icon: AlertCircle,
    },
    {
      id: "txn4",
      category: "transactions",
      question: "What are the charges for online transfers?",
      answer: "IMPS: ₹5 + GST per transaction. NEFT: ₹2.5 + GST. RTGS: ₹25 + GST. For amounts above certain limits, charges may vary. Check our fee schedule for detailed information. Some accounts have free transaction limits.",
      icon: FileText,
    },

    // Security
    {
      id: "sec1",
      category: "security",
      question: "How secure is online banking with UDAAN?",
      answer: "UDAAN uses industry-standard security measures including 256-bit SSL encryption, multi-factor authentication, regular security audits, and 24/7 transaction monitoring. We never store your password in plain text and all sensitive data is encrypted.",
      icon: Lock,
    },
    {
      id: "sec2",
      category: "security",
      question: "What should I do if I forget my password?",
      answer: "Click on 'Forgot Password' on the login page. You'll receive an OTP on your registered mobile number and email. After verification, you can reset your password. If you're locked out, contact customer support for assistance.",
      icon: HelpCircle,
    },
    {
      id: "sec3",
      category: "security",
      question: "How do I report unauthorized transactions?",
      answer: "Report any unauthorized transactions immediately to our 24/7 customer support at +91 73977 82590. Block your account through mobile app or by calling. We follow RBI guidelines for unauthorized transaction resolution and will revert funds after investigation.",
      icon: AlertCircle,
    },
    {
      id: "sec4",
      category: "security",
      question: "Is my personal information shared with third parties?",
      answer: "We never sell your personal information to third parties. Information is shared only when required by law, with your consent, or for service delivery (e.g., with RBI, MCA, or credit bureaus). Our Privacy Policy details all information sharing practices.",
      icon: Shield,
    },

    // Customer Support
    {
      id: "sup1",
      category: "support",
      question: "How can I contact customer support?",
      answer: "You can reach us through multiple channels: Phone: +91 73977 82590 (24/7), Email: support@udaan.in, Live Chat on our website/app during business hours, or visit any branch from 10 AM to 5 PM (Monday to Saturday).",
      icon: Phone,
    },
    {
      id: "sup2",
      category: "support",
      question: "What are your business hours?",
      answer: "Branches are open Monday to Saturday, 10:00 AM to 5:00 PM. Sunday closed. Online banking and ATM services are available 24/7. Customer support is available 24/7 for emergencies. For non-emergency queries, response time is within 24 hours.",
      icon: Clock,
    },
    {
      id: "sup3",
      category: "support",
      question: "How do I file a complaint?",
      answer: "You can file a complaint through: 1) Customer support phone/email, 2) Branch visit, 3) Online complaint form in mobile app/website, 4) Written letter to any branch. We aim to resolve complaints within 7 working days. For unresolved issues, escalate to Grievance Officer.",
      icon: MessageCircle,
    },
    {
      id: "sup4",
      category: "support",
      question: "What is the Grievance Redressal process?",
      answer: "Step 1: Contact customer support (resolution within 7 days). Step 2: Escalate to Grievance Officer (resolution within 15 days). Step 3: Approach Banking Ombudsman (RBI) if unsatisfied. Step 4: Legal action through arbitration/courts. The complete process is detailed in our Terms of Use.",
      icon: FileText,
    },
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const CategoryButton = ({ category }) => {
    const Icon = category.icon;
    const colorMap = {
      gray: "hover:bg-gray-100 border-gray-200 text-gray-700",
      blue: "hover:bg-blue-50 border-blue-200 text-blue-700",
      green: "hover:bg-green-50 border-green-200 text-green-700",
      orange: "hover:bg-orange-50 border-orange-200 text-orange-700",
      purple: "hover:bg-purple-50 border-purple-200 text-purple-700",
      red: "hover:bg-red-50 border-red-200 text-red-700",
      teal: "hover:bg-teal-50 border-teal-200 text-teal-700",
    };
    
    const activeColorMap = {
      gray: "bg-gray-600 text-white border-gray-600",
      blue: "bg-blue-600 text-white border-blue-600",
      green: "bg-green-600 text-white border-green-600",
      orange: "bg-orange-600 text-white border-orange-600",
      purple: "bg-purple-600 text-white border-purple-600",
      red: "bg-red-600 text-white border-red-600",
      teal: "bg-teal-600 text-white border-teal-600",
    };

    const isActive = activeCategory === category.id;

    return (
      <button
        onClick={() => setActiveCategory(category.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
          isActive ? activeColorMap[category.color] : colorMap[category.color]
        }`}
      >
        <Icon size={16} />
        <span className="text-sm font-medium">{category.name}</span>
      </button>
    );
  };

  const FAQItem = ({ faq, isOpen, onToggle }) => {
    const Icon = faq.icon;
    
    return (
      <div className="border border-gray-200 rounded-xl bg-white overflow-hidden hover:shadow-md transition-shadow">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 rounded-full bg-[#0B2A4A]/10 flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-[#0B2A4A]" />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
              {faq.question}
            </h3>
          </div>
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
          )}
        </button>
        
        {isOpen && (
          <div className="px-4 pb-4 pl-[52px] border-t border-gray-100 bg-gray-50">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-3">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] text-white py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <HelpCircle size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">FAQ</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Find answers to common questions about UDAAN's services, accounts, deposits, loans, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border-0 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#FDB813] outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
<div className="flex flex-wrap justify-center gap-3 py-3">
  {categories.map((category) => (
    <CategoryButton key={category.id} category={category} />
  ))}
</div>

      {/* Main Content */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"}
                {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* FAQ List */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openFaqs[faq.id] || false}
                    onToggle={() => toggleFaq(faq.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No results found</h3>
                <p className="text-gray-600 text-sm">
                  We couldn't find any questions matching "{searchTerm}". Please try different keywords or contact our support team.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-[#FDB813] hover:text-[#fec84d] font-medium"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* Still Have Questions */}
            <div className="mt-12 bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-2xl p-6 sm:p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+917397782590"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#FDB813] text-[#0B2A4A] rounded-lg font-semibold hover:bg-[#fec84d] transition-colors"
                >
                  <Phone size={16} />
                  Call Support
                </a>
                <a
                  href="mailto:support@udaan.in"
                  className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail size={16} />
                  Email Us
                </a>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  <MessageCircle size={16} />
                  Live Chat
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1">📞 24/7 Helpline: +91 73977 82590</span>
                <span>•</span>
                <span className="flex items-center gap-1">✉️ support@udaan.in</span>
                <span>•</span>
                <span className="flex items-center gap-1">🏢 25+ Branches Nationwide</span>
              </div>
            </div>

            {/* Download Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-4">Download FAQ</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors">
                  <Download size={16} />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Printer size={16} />
                  Print
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default FAQ;