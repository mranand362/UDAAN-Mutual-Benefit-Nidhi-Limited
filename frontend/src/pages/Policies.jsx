import React, { useState } from "react";
import { 
  FileText, Shield, Scale, Eye, Lock,
  Download, ChevronDown, CheckCircle, ArrowRight,
  AlertCircle, HelpCircle, BookOpen, Award,
  Clock, Users, Landmark, Gavel, TrendingUp,
  PiggyBank, HandHelping, Zap, Globe
} from "lucide-react";

const Policies = () => {
  const [openPolicy, setOpenPolicy] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Policies", icon: <FileText className="w-3 h-3" /> },
    { id: "deposit", label: "Deposit", icon: <PiggyBank className="w-3 h-3" /> },
    { id: "loan", label: "Loan", icon: <HandHelping className="w-3 h-3" /> },
    { id: "legal", label: "Legal", icon: <Gavel className="w-3 h-3" /> },
    { id: "member", label: "Member", icon: <Users className="w-3 h-3" /> }
  ];

  const policies = [
    {
      id: 1,
      icon: <Landmark className="w-5 h-5" />,
      title: "Fixed Deposit Policy",
      summary: "Terms governing fixed deposit schemes with attractive interest rates",
      lastUpdated: "15 Jan 2024",
      version: "v2.3",
      category: "deposit",
      readTime: "4 min",
      content: {
        overview: "This policy outlines the terms and conditions for Fixed Deposit accounts maintained with JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED, ensuring complete transparency and member protection.",
        sections: [
          {
            title: "Eligibility Criteria",
            points: [
              "Any individual above 18 years of age",
              "Joint accounts permitted with up to 3 holders",
              "Minor accounts through guardian",
              "NRI accounts as per FEMA guidelines"
            ]
          },
          {
            title: "Deposit Terms",
            points: [
              "Minimum deposit: ₹5,000",
              "Maximum deposit: ₹50 Lakhs per member",
              "Tenure options: 12, 24, 36, 48, 60 months",
              "Auto-renewal facility available"
            ]
          },
          {
            title: "Interest Rates",
            points: [
              "12 months: 7.5% p.a.",
              "24 months: 8.0% p.a.",
              "36 months: 8.5% p.a.",
              "48 months: 9.0% p.a.",
              "60 months: 9.5% p.a."
            ]
          },
          {
            title: "Premature Withdrawal",
            points: [
              "Allowed after 3 months",
              "Penalty: 1% on applicable rate",
              "No penalty for senior citizens",
              "Loan facility up to 90% available"
            ]
          }
        ],
        additionalInfo: [
          "TDS applicable as per Income Tax Act",
          "Quarterly compounding of interest",
          "Monthly/Quarterly payout options available"
        ]
      }
    },
    {
      id: 2,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Recurring Deposit Policy",
      summary: "Rules for monthly installment deposits to build savings",
      lastUpdated: "15 Jan 2024",
      version: "v2.1",
      category: "deposit",
      readTime: "3 min",
      content: {
        overview: "This policy governs Recurring Deposit accounts designed to help members build savings through regular monthly installments.",
        sections: [
          {
            title: "Eligibility",
            points: [
              "Open to all members",
              "Minimum age: 18 years",
              "Joint accounts permitted"
            ]
          },
          {
            title: "Deposit Terms",
            points: [
              "Minimum monthly installment: ₹500",
              "Maximum: ₹50,000 per month",
              "Tenure: 12 to 60 months",
              "Installment frequency: Monthly"
            ]
          },
          {
            title: "Interest Rates",
            points: [
              "12-24 months: 7.0% p.a.",
              "25-48 months: 7.5% p.a.",
              "49-60 months: 8.0% p.a."
            ]
          },
          {
            title: "Default & Penalty",
            points: [
              "Grace period: 7 days",
              "Late fee: ₹50 per default",
              "Account revival within 3 months",
              "Closure after 4 consecutive defaults"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      icon: <HandHelping className="w-5 h-5" />,
      title: "Loan Against FD Policy",
      summary: "Terms for loans secured by Fixed Deposits",
      lastUpdated: "10 Jan 2024",
      version: "v1.5",
      category: "loan",
      readTime: "3 min",
      content: {
        overview: "Members can avail loans against their Fixed Deposits without breaking the deposit, continuing to earn interest on the FD.",
        sections: [
          {
            title: "Eligibility",
            points: [
              "FD held for at least 3 months",
              "Member in good standing",
              "No existing default"
            ]
          },
          {
            title: "Loan Amount",
            points: [
              "Up to 90% of FD value",
              "Minimum loan: ₹10,000",
              "Maximum: ₹45 Lakhs"
            ]
          },
          {
            title: "Interest Rate",
            points: [
              "FD rate + 2%",
              "Current rate: 9.5% - 11.5%",
              "Fixed for loan tenure"
            ]
          },
          {
            title: "Repayment",
            points: [
              "Tenure: Up to 60 months",
              "EMI or bullet payment option",
              "Prepayment allowed without penalty"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      icon: <Gavel className="w-5 h-5" />,
      title: "Loan Against Property Policy",
      summary: "Guidelines for loans secured by residential/commercial property",
      lastUpdated: "08 Jan 2024",
      version: "v1.2",
      category: "loan",
      readTime: "4 min",
      content: {
        overview: "Members can avail loans by pledging their residential or commercial property as collateral for business expansion, education, or major expenses.",
        sections: [
          {
            title: "Eligibility",
            points: [
              "Property owner with clear title",
              "Member for at least 6 months",
              "Age: 21 to 65 years",
              "Regular income source"
            ]
          },
          {
            title: "Loan Amount",
            points: [
              "Up to 75% of property value",
              "Minimum: ₹5 Lakhs",
              "Maximum: ₹5 Crores"
            ]
          },
          {
            title: "Interest Rate",
            points: [
              "9.5% - 12% p.a.",
              "Fixed or floating options",
              "Based on property type and location"
            ]
          },
          {
            title: "Tenure & Repayment",
            points: [
              "Tenure: Up to 15 years",
              "EMI or step-up payment options",
              "Part-prepayment allowed"
            ]
          }
        ]
      }
    },
    {
      id: 5,
      icon: <Scale className="w-5 h-5" />,
      title: "Personal Loan Policy",
      summary: "Unsecured loans for various personal needs",
      lastUpdated: "05 Jan 2024",
      version: "v2.0",
      category: "loan",
      readTime: "3 min",
      content: {
        overview: "Unsecured personal loans for weddings, travel, medical emergencies, home renovation, and other personal needs.",
        sections: [
          {
            title: "Eligibility",
            points: [
              "Member for at least 6 months",
              "Age: 21 to 60 years",
              "Minimum income: ₹20,000/month",
              "Good credit history"
            ]
          },
          {
            title: "Loan Amount",
            points: [
              "Minimum: ₹50,000",
              "Maximum: ₹10 Lakhs",
              "Based on income and credit score"
            ]
          },
          {
            title: "Interest Rate",
            points: [
              "11% - 18% p.a.",
              "Based on credit profile",
              "Processing fee: 1-2%"
            ]
          },
          {
            title: "Repayment",
            points: [
              "Tenure: 12-60 months",
              "EMI options",
              "Foreclosure charges applicable"
            ]
          }
        ]
      }
    },
    {
      id: 6,
      icon: <Eye className="w-5 h-5" />,
      title: "Privacy Policy",
      summary: "How we collect, use, and protect your personal information",
      lastUpdated: "20 Dec 2023",
      version: "v3.0",
      category: "legal",
      readTime: "5 min",
      content: {
        overview: "This Privacy Policy explains how JAYNIRMALA collects, uses, and protects your personal information in compliance with applicable data protection laws.",
        sections: [
          {
            title: "Information We Collect",
            points: [
              "Personal details (name, address, DOB)",
              "Contact information (email, phone)",
              "KYC documents (PAN, Aadhaar)",
              "Financial information (income, assets)",
              "Transaction history"
            ]
          },
          {
            title: "How We Use Information",
            points: [
              "Account processing and maintenance",
              "Compliance with legal requirements",
              "Customer service and support",
              "Product improvement",
              "Communication with members"
            ]
          },
          {
            title: "Data Protection",
            points: [
              "256-bit SSL encryption",
              "Firewall protection",
              "Regular security audits",
              "Access controls and authentication"
            ]
          },
          {
            title: "Your Rights",
            points: [
              "Access your personal data",
              "Request corrections",
              "Withdraw consent",
              "File complaints"
            ]
          }
        ]
      }
    },
    {
      id: 7,
      icon: <Lock className="w-5 h-5" />,
      title: "Security Policy",
      summary: "Comprehensive measures to ensure your account safety",
      lastUpdated: "18 Dec 2023",
      version: "v2.2",
      category: "legal",
      readTime: "4 min",
      content: {
        overview: "Our Security Policy outlines the comprehensive measures implemented to safeguard member accounts and transactions from unauthorized access and fraud.",
        sections: [
          {
            title: "Account Security",
            points: [
              "Two-factor authentication",
              "OTP verification for transactions",
              "Biometric login option",
              "Automatic logout after inactivity",
              "Device management"
            ]
          },
          {
            title: "Transaction Security",
            points: [
              "End-to-end encryption",
              "Real-time fraud monitoring",
              "Transaction limits",
              "SMS/Email alerts",
              "Whitelisting of beneficiaries"
            ]
          },
          {
            title: "Member Responsibilities",
            points: [
              "Keep credentials confidential",
              "Use strong passwords",
              "Enable 2FA",
              "Report suspicious activity"
            ]
          }
        ]
      }
    },
    {
      id: 8,
      icon: <Users className="w-5 h-5" />,
      title: "Membership Policy",
      summary: "Complete rules and benefits of being a member",
      lastUpdated: "05 Jan 2024",
      version: "v2.0",
      category: "member",
      readTime: "3 min",
      content: {
        overview: "This policy defines the comprehensive terms of membership in JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED, including rights, responsibilities, and benefits.",
        sections: [
          {
            title: "Membership Eligibility",
            points: [
              "Indian citizen above 18 years",
              "Valid KYC documents",
              "Minimum initial deposit: ₹1,000",
              "Not a defaulter of any financial institution"
            ]
          },
          {
            title: "Member Benefits",
            points: [
              "Access to all deposit schemes",
              "Loan eligibility at member rates",
              "Voting rights in general meetings",
              "Share in profits as dividend",
              "Nomination facility"
            ]
          },
          {
            title: "Member Obligations",
            points: [
              "Maintain minimum balance",
              "Update KYC periodically",
              "Inform change of address",
              "Comply with company rules"
            ]
          },
          {
            title: "Termination",
            points: [
              "Voluntary closure with notice",
              "Transfer to nominee on death",
              "Expulsion for misconduct",
              "Automatic after 5 years of inactivity"
            ]
          }
        ]
      }
    },
    {
      id: 9,
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Grievance Redressal Policy",
      summary: "Complete process for addressing member complaints",
      lastUpdated: "12 Jan 2024",
      version: "v1.8",
      category: "member",
      readTime: "2 min",
      content: {
        overview: "This policy outlines the comprehensive mechanism for members to raise and resolve grievances in a timely and transparent manner.",
        sections: [
          {
            title: "Grievance Submission",
            points: [
              "Online complaint form",
              "Email to grievance@jaynirmala.com",
              "Written complaint at branch",
              "Phone: +91 73977 82591"
            ]
          },
          {
            title: "Resolution Timeline",
            points: [
              "Acknowledgment: 24 hours",
              "Initial response: 3 working days",
              "Final resolution: 15 working days",
              "Escalation: 7 days if unsatisfied"
            ]
          },
          {
            title: "Escalation Matrix",
            points: [
              "Level 1: Branch Manager",
              "Level 2: Grievance Officer",
              "Level 3: Managing Director",
              "Level 4: Board of Directors"
            ]
          },
          {
            title: "Contact Details",
            points: [
              "Grievance Officer: Mr. S. Venkatesh",
              "Email: grievance@jaynirmala.com",
              "Phone: +91 73977 82591",
              "Address: No. 362/B, Kamarajar Street, Villupuram - 605602"
            ]
          }
        ]
      }
    },
    {
      id: 10,
      icon: <Award className="w-5 h-5" />,
      title: "Nomination Policy",
      summary: "Guidelines for nomination facility on deposits",
      lastUpdated: "08 Jan 2024",
      version: "v1.3",
      category: "member",
      readTime: "2 min",
      content: {
        overview: "This policy explains the nomination facility available to members for their deposits and accounts, ensuring smooth transfer to nominees.",
        sections: [
          {
            title: "Nomination Rules",
            points: [
              "Available for all deposit accounts",
              "Maximum 2 nominees per account",
              "Nominee must be a family member",
              "Minor nominee requires guardian"
            ]
          },
          {
            title: "Nomination Process",
            points: [
              "Form F filled at branch",
              "Witness signature required",
              "Registration in company records",
              "Acknowledgment provided"
            ]
          },
          {
            title: "Changes & Cancellation",
            points: [
              "Nomination can be changed anytime",
              "New form required for changes",
              "Automatic cancellation on account closure",
              "Revocation possible at any time"
            ]
          }
        ]
      }
    }
  ];

  const filteredPolicies = policies.filter(policy => {
    const matchesCategory = activeCategory === "all" || policy.category === activeCategory;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const togglePolicy = (id) => {
    setOpenPolicy(openPolicy === id ? null : id);
  };

  const stats = [
    { value: policies.length, label: "Active Policies", icon: <FileText className="w-4 h-4" /> },
    { value: categories.length - 1, label: "Categories", icon: <Globe className="w-4 h-4" /> },
    { value: "Jan 2024", label: "Latest Update", icon: <Clock className="w-4 h-4" /> },
    { value: "100%", label: "Compliant", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Legal & Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Policies & Guidelines</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive policies designed to protect your interests and ensure complete transparency in all our operations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-center gap-1 text-[#FDB813] mb-1">
                {stat.icon}
                <span className="text-lg font-bold text-[#0B2A4A]">{stat.value}</span>
              </div>
              <div className="text-[10px] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search policies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent text-sm bg-white"
            />
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#0B2A4A] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-3 text-xs text-gray-500">
          Showing {filteredPolicies.length} of {policies.length} policies
        </div>

        {/* Policies List */}
        <div className="space-y-3 mb-10">
          {filteredPolicies.map((policy) => (
            <div key={policy.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
              {/* Policy Header */}
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => togglePolicy(policy.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813]">
                      {policy.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B2A4A] text-sm">{policy.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{policy.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:block text-right">
                      <span className="text-[10px] text-gray-400 block">{policy.version}</span>
                      <span className="text-[10px] text-gray-400">{policy.readTime} read</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openPolicy === policy.id ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>

              {/* Policy Content */}
              {openPolicy === policy.id && (
                <div className="p-5 border-t border-gray-100 bg-gray-50/50 animate-fadeIn">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-xs text-gray-600 mb-4 bg-white p-3 rounded-lg border border-gray-100">
                      {policy.content.overview}
                    </p>
                    
                    <div className="space-y-4">
                      {policy.content.sections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
                          <h4 className="font-medium text-[#0B2A4A] text-xs uppercase tracking-wider mb-3">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-[#FDB813] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {policy.content.additionalInfo && (
                      <div className="mt-4 bg-[#FDB813]/5 p-3 rounded-lg border border-[#FDB813]/20">
                        <p className="text-[10px] font-medium text-[#0B2A4A] mb-2">Additional Information:</p>
                        <ul className="space-y-1">
                          {policy.content.additionalInfo.map((info, i) => (
                            <li key={i} className="text-[10px] text-gray-600 flex items-start gap-1">
                              <span className="text-[#FDB813]">•</span>
                              {info}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          Last updated: {policy.lastUpdated}
                        </span>
                        <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          Version {policy.version}
                        </span>
                      </div>
                      <button className="text-[#FDB813] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        <Download className="w-3 h-3" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredPolicies.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">No policies match your search criteria</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                className="mt-3 text-[#FDB813] text-xs font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Regulatory Compliance Banner */}
        <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#FDB813]" />
              <div>
                <h3 className="text-white font-semibold text-sm">Regulatory Compliance</h3>
                <p className="text-gray-300 text-xs">All policies comply with Nidhi Rules, 2014 and Companies Act, 2013</p>
              </div>
            </div>
            <button className="bg-[#FDB813] text-[#0B2A4A] px-4 py-2 rounded-lg text-xs font-medium hover:bg-white transition-all whitespace-nowrap">
              View Regulatory Filings
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#FDB813]" />
              <div>
                <h3 className="font-medium text-[#0B2A4A] text-sm">Need clarification?</h3>
                <p className="text-xs text-gray-500">Our compliance team is here to help you understand our policies</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-all">
                Contact Support
              </button>
              <button className="bg-[#FDB813] text-[#0B2A4A] px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#0B2A4A] hover:text-white transition-all flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;