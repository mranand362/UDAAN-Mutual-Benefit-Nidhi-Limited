import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Scale,
  Gavel,
  AlertCircle,
  UserCheck,
  Lock,
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  Building,
  Globe,
  Server,
  Database,
  Smartphone,
  Laptop,
  MessageCircle,
  Bell,
  Home,
  Info,
  HeartHandshake,
  Download,
  Printer,
  Share2,
  ChevronRight,
  XCircle,
  HelpCircle,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Star,
} from "lucide-react";

const TermsOfUse = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 15, 2024";
  const effectiveDate = "January 1, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: CheckCircle,
      color: "green",
      content: {
        intro: "By accessing or using the UDAAN Mutual Benefit Nidhi Limited website, mobile application, or any of our services, you agree to be bound by these Terms of Use.",
        points: [
          "These terms constitute a legally binding agreement between you and UDAAN Mutual Benefit Nidhi Limited",
          "If you do not agree with any part of these terms, you must not use our services",
          "We reserve the right to modify these terms at any time without prior notice",
          "Continued use of our services after changes constitutes acceptance of the modified terms",
          "It is your responsibility to review these terms periodically for updates",
        ],
      },
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      icon: UserCheck,
      color: "blue",
      content: {
        intro: "To use our services, you must meet the following eligibility requirements:",
        requirements: [
          {
            title: "Age Requirement",
            items: [
              "Must be at least 18 years of age",
              "Must have legal capacity to enter into contracts",
              "Senior citizens (60+ years) may have additional benefits",
            ],
          },
          {
            title: "Residency Status",
            items: [
              "Indian citizen or resident as per RBI guidelines",
              "Valid Indian address proof required",
              "NRI accounts available with additional documentation",
            ],
          },
          {
            title: "Documentation",
            items: [
              "Valid PAN card mandatory",
              "Aadhaar card for KYC compliance",
              "Valid photo ID proof (Voter ID/Passport/Driving License)",
              "Recent passport-sized photographs",
              "Address proof (Utility bill/Bank statement/Rent agreement)",
            ],
          },
          {
            title: "Account Types",
            items: [
              "Individual accounts for single person",
              "Joint accounts for two or more persons",
              "Minor accounts with guardian consent",
              "Corporate accounts for businesses/trusts",
              "NRI accounts for non-resident Indians",
            ],
          },
        ],
      },
    },
    {
      id: "account",
      title: "Account Registration & Security",
      icon: Lock,
      color: "purple",
      content: {
        intro: "You are responsible for maintaining the confidentiality of your account credentials:",
        responsibilities: [
          {
            title: "Account Creation",
            items: [
              "Provide accurate, current, and complete information",
              "Update your information promptly when changes occur",
              "One account per individual (no duplicate accounts)",
              "Verification through OTP and KYC process required",
            ],
          },
          {
            title: "Security Obligations",
            items: [
              "Keep your login credentials confidential",
              "Do not share OTPs, passwords, or PINs with anyone",
              "Use strong, unique passwords for your account",
              "Enable multi-factor authentication for enhanced security",
              "Logout after each session, especially on shared devices",
            ],
          },
          {
            title: "Unauthorized Access",
            items: [
              "Report any suspected unauthorized access immediately",
              "Change password immediately if compromise is suspected",
              "UDAAN is not liable for losses due to compromised credentials",
              "Monitor account activity regularly for suspicious transactions",
              "Enable SMS/Email alerts for all account activities",
            ],
          },
        ],
      },
    },
    {
      id: "deposits",
      title: "Deposit Terms & Conditions",
      icon: DollarSign,
      color: "teal",
      content: {
        intro: "Terms governing deposit accounts maintained with UDAAN:",
        terms: [
          {
            title: "Types of Deposits",
            items: [
              "Recurring Deposits (RD) - Monthly installment based",
              "Fixed Deposits (FD) - Lump sum for fixed tenure",
              "Savings Accounts - Daily banking with interest",
              "Current Accounts - For business transactions",
              "Senior Citizen Deposits - Higher interest rates",
            ],
          },
          {
            title: "Interest Rates",
            items: [
              "Interest rates are subject to change based on RBI guidelines",
              "Current rates are displayed on our website and branches",
              "Interest is calculated on daily product basis",
              "Interest is credited quarterly/monthly as per scheme",
              "TDS applicable as per Income Tax rules",
            ],
          },
          {
            title: "Premature Withdrawal",
            items: [
              "Premature withdrawal allowed with penalty",
              "Penalty rates vary by deposit type and tenure",
              "Minimum lock-in period applicable for certain schemes",
              "Partial withdrawal allowed for some accounts",
              "Documentation required for large withdrawals",
            ],
          },
          {
            title: "Nomination",
            items: [
              "Nomination facility available for all accounts",
              "Nominee details must be provided at account opening",
              "Nominee changes require written application",
              "Succession certificate may be required in case of death",
              "Joint accounts have survivorship clause",
            ],
          },
        ],
      },
    },
    {
      id: "loans",
      title: "Loan Terms & Conditions",
      icon: CreditCard,
      color: "orange",
      content: {
        intro: "Terms governing loan facilities provided by UDAAN:",
        terms: [
          {
            title: "Loan Eligibility",
            items: [
              "Must be a member of UDAAN for minimum 6 months",
              "Regular deposit account with satisfactory transaction history",
              "Age between 21-60 years (up to 65 for existing customers)",
              "Stable source of income required",
              "Credit score evaluation as per policy",
            ],
          },
          {
            title: "Loan Types",
            items: [
              "Secured Loans - Against FDs/RDs/Property",
              "Unsecured Loans - Personal loans (limited amount)",
              "Gold Loans - Against gold jewelry",
              "Vehicle Loans - For two/four wheelers",
              "Business Loans - For self-employed individuals",
            ],
          },
          {
            title: "Interest & Charges",
            items: [
              "Interest rates vary by loan type and tenure",
              "Processing fees applicable as per schedule",
              "Prepayment charges may apply",
              "Late payment penalties as per policy",
              "Documentation charges and stamp duty applicable",
            ],
          },
          {
            title: "Repayment Terms",
            items: [
              "EMI due on fixed date each month",
              "Auto-debit facility available",
              "Grace period for payment (3-5 days)",
              "Default consequences as per RBI guidelines",
              "Loan settlement options available",
            ],
          },
        ],
      },
    },
    {
      id: "transactions",
      title: "Transaction Policies",
      icon: TrendingUp,
      color: "indigo",
      content: {
        intro: "Policies governing all financial transactions:",
        policies: [
          {
            title: "Transaction Limits",
            items: [
              "Daily transaction limits based on account type",
              "Monthly withdrawal limits for certain accounts",
              "Maximum deposit limits as per Income Tax rules",
              "Cash transaction reporting as per RBI guidelines",
              "International transaction limits for NRI accounts",
            ],
          },
          {
            title: "Processing Times",
            items: [
              "Online transfers processed within 24 hours",
              "Cheque clearance as per RBI timeline (2-3 days)",
              "RTGS/NEFT available during banking hours",
              "IMPS available 24x7 for instant transfers",
              "Branch transactions during working hours only",
            ],
          },
          {
            title: "Failed Transactions",
            items: [
              "Auto-reversal within 5-7 working days",
              "Dispute resolution within 15 days",
              "Chargeback facility for unauthorized transactions",
              "Transaction tracking through reference number",
              "Customer support available for failed transactions",
            ],
          },
          {
            title: "Fees & Charges",
            items: [
              "Service charges as per schedule of fees",
              "ATM withdrawal charges beyond free limits",
              "Cheque book issuance fees applicable",
              "Statement charges for additional copies",
              "IMPS/NEFT/RTGS charges as per RBI guidelines",
            ],
          },
        ],
      },
    },
    {
      id: "fees",
      title: "Fees & Charges Schedule",
      icon: AlertCircle,
      color: "red",
      content: {
        intro: "Standard fees and charges applicable for various services:",
        feeTable: [
          { service: "Account Opening", amount: "₹0 (Free)", frequency: "One-time" },
          { service: "Annual Maintenance Charge", amount: "₹100 + GST", frequency: "Yearly" },
          { service: "Cheque Book (10 leaves)", amount: "₹50 + GST", frequency: "Per book" },
          { service: "ATM Card Issuance", amount: "₹100 + GST", frequency: "One-time" },
          { service: "ATM Card Annual Fee", amount: "₹50 + GST", frequency: "Yearly" },
          { service: "Statement Copy", amount: "₹10 per page", frequency: "Per request" },
          { service: "IMPS Transfer", amount: "₹5 + GST", frequency: "Per transaction" },
          { service: "NEFT Transfer", amount: "₹2.5 + GST", frequency: "Per transaction" },
          { service: "RTGS Transfer", amount: "₹25 + GST", frequency: "Per transaction" },
          { service: "Loan Processing Fee", amount: "1% of loan amount", frequency: "One-time" },
          { service: "Loan Prepayment Charges", amount: "2% of principal", frequency: "Per prepayment" },
          { service: "Late Payment Penalty", amount: "2% per month", frequency: "On overdue amount" },
          { service: "Cheque Bounce Charges", amount: "₹500 + GST", frequency: "Per bounce" },
          { service: "Account Closure (within 1 year)", amount: "₹500 + GST", frequency: "One-time" },
          { service: "Nominee Registration", amount: "₹50 + GST", frequency: "Per nomination" },
          { service: "Address Change", amount: "₹25 + GST", frequency: "Per request" },
        ],
        note: "All charges are subject to change with prior notice. GST as applicable.",
      },
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      icon: Shield,
      color: "cyan",
      content: {
        intro: "Your privacy is important to us. We protect your data as follows:",
        protections: [
          {
            title: "Data Collection",
            items: [
              "We collect only necessary information for service delivery",
              "KYC documents stored securely as per RBI guidelines",
              "Transaction data retained for statutory periods",
              "Biometric data (if collected) stored with encryption",
              "Voice recordings for customer service (with consent)",
            ],
          },
          {
            title: "Data Usage",
            items: [
              "Information used only for legitimate business purposes",
              "No selling of personal data to third parties",
              "Sharing only as required by law or with consent",
              "Data used for credit assessment and risk management",
              "Analytics for service improvement (anonymized)",
            ],
          },
          {
            title: "Data Security",
            items: [
              "256-bit SSL encryption for all online transactions",
              "Regular security audits and penetration testing",
              "Multi-layered firewall protection",
              "Strict access controls and monitoring",
              "Data backup and disaster recovery systems",
            ],
          },
        ],
      },
    },
    {
      id: "conduct",
      title: "Prohibited Conduct",
      icon: Gavel,
      color: "red",
      content: {
        intro: "The following activities are strictly prohibited:",
        prohibitedActivities: [
          {
            category: "Fraudulent Activities",
            items: [
              "Providing false or misleading information",
              "Identity theft or impersonation",
              "Creating multiple fake accounts",
              "Money laundering or terrorist financing",
              "Knowingly depositing counterfeit currency",
            ],
          },
          {
            category: "System Abuse",
            items: [
              "Attempting to hack or breach security systems",
              "Introducing malware or viruses",
              "Overloading systems with excessive requests",
              "Reverse engineering our applications",
              "Bypassing access controls or authentication",
            ],
          },
          {
            category: "Transaction Violations",
            items: [
              "Chargeback fraud or friendly fraud",
              "Structuring transactions to avoid reporting",
              "Using accounts for illegal gambling",
              "Circumventing transaction limits",
              "Unauthorized use of third-party accounts",
            ],
          },
          {
            category: "Content Violations",
            items: [
              "Posting defamatory or abusive content",
              "Sharing inappropriate or offensive material",
              "Harassing customer support staff",
              "Misrepresenting association with UDAAN",
              "Violating intellectual property rights",
            ],
          },
        ],
      },
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Scale,
      color: "yellow",
      content: {
        intro: "UDAAN's liability is limited as follows:",
        limitations: [
          {
            title: "Financial Liability",
            items: [
              "Maximum liability limited to deposit amount in account",
              "No liability for indirect or consequential damages",
              "Liability for unauthorized transactions as per RBI guidelines",
              "Compensation limited to actual financial loss incurred",
              "No liability for market fluctuations or investment losses",
            ],
          },
          {
            title: "Service Availability",
            items: [
              "No guarantee of uninterrupted service",
              "Scheduled maintenance may cause temporary downtime",
              "Force majeure events exempt from liability",
              "Third-party service failures not our responsibility",
              "Internet connectivity issues beyond our control",
            ],
          },
          {
            title: "User Responsibility",
            items: [
              "Responsibility for safeguarding login credentials",
              "Verification of transaction details before confirmation",
              "Reporting issues within reasonable timeframe",
              "Compliance with all applicable laws and regulations",
              "Accuracy of information provided to us",
            ],
          },
        ],
      },
    },
    {
      id: "termination",
      title: "Account Termination",
      icon: XCircle,
      color: "orange",
      content: {
        intro: "We may terminate or suspend your account under the following circumstances:",
        scenarios: [
          {
            title: "By Customer",
            items: [
              "Voluntary account closure with written request",
              "Settlement of all dues and liabilities required",
              "Return of unused cheque books and ATM cards",
              "Notice period may apply for certain accounts",
              "Early closure charges may be applicable",
            ],
          },
          {
            title: "By UDAAN",
            items: [
              "Violation of terms or policies",
              "Suspicious or fraudulent activity",
              "Inactive account for extended period (2+ years)",
              "Failure to complete KYC within specified time",
              "Legal or regulatory requirements",
            ],
          },
          {
            title: "Effects of Termination",
            items: [
              "Outstanding loans become due immediately",
              "Deposits settled per scheme terms",
              "Lien on deposits for outstanding dues",
              "Reporting to credit bureaus if applicable",
              "Right to pursue legal action for violations",
            ],
          },
        ],
      },
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      icon: MessageCircle,
      color: "purple",
      content: {
        intro: "Any disputes arising from these terms shall be resolved as follows:",
        process: [
          {
            step: "Step 1: Customer Support",
            description: "Contact our customer support team to resolve the issue",
            timeframe: "7 business days",
          },
          {
            step: "Step 2: Grievance Officer",
            description: "Escalate to Grievance Officer if not satisfied",
            timeframe: "15 business days",
          },
          {
            step: "Step 3: Banking Ombudsman",
            description: "File complaint with Banking Ombudsman (RBI)",
            timeframe: "30 business days",
          },
          {
            step: "Step 4: Legal Action",
            description: "Arbitration or court proceedings as per law",
            timeframe: "As per court schedule",
          },
        ],
        jurisdiction: "All disputes shall be subject to the exclusive jurisdiction of courts in Villupuram, Tamil Nadu.",
        arbitration: "Disputes shall be resolved through arbitration as per the Arbitration and Conciliation Act, 1996.",
      },
    },
    {
      id: "amendments",
      title: "Amendments to Terms",
      icon: Bell,
      color: "teal",
      content: {
        intro: "We reserve the right to modify these terms at any time:",
        amendmentProcess: [
          "Notice provided 30 days before major changes",
          "Email notification to registered email address",
          "SMS alert for critical updates",
          "Website announcement and banner notification",
          "Branch notice board display",
        ],
        customerAction: "Continued use of services after changes constitutes acceptance of modified terms.",
        reviewRecommendation: "We recommend reviewing these terms periodically for updates.",
      },
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: Mail,
      color: "gray",
      content: {
        intro: "For questions or concerns about these Terms of Use:",
        contacts: [
          {
            method: "Email",
            details: "legal@udaan.in",
            action: "mailto:legal@udaan.in",
          },
          {
            method: "Customer Support",
            details: "support@udaan.in | +91 73977 82590",
            action: null,
          },
          {
            method: "Grievance Officer",
            details: "grievance@udaan.in",
            action: "mailto:grievance@udaan.in",
          },
          {
            method: "Postal Address",
            details: "UDAAN Mutual Benefit Nidhi Limited, No. 362/B, Kamarajar Street, Villupuram - 605602",
            action: null,
          },
          {
            method: "Registered Office",
            details: "Corporate Registry: Chennai - 600001 (By appointment only)",
            action: null,
          },
        ],
        responseTime: "We aim to respond to all inquiries within 5-7 business days.",
      },
    },
  ];

  const SectionCard = ({ section }) => {
    const colorMap = {
      green: "from-green-600 to-green-700",
      blue: "from-blue-600 to-blue-700",
      purple: "from-purple-600 to-purple-700",
      teal: "from-teal-600 to-teal-700",
      orange: "from-orange-600 to-orange-700",
      indigo: "from-indigo-600 to-indigo-700",
      red: "from-red-600 to-red-700",
      yellow: "from-yellow-600 to-yellow-700",
      cyan: "from-cyan-600 to-cyan-700",
      gray: "from-gray-600 to-gray-700",
      pink: "from-pink-600 to-pink-700",
    };

    const bgColorMap = {
      green: "bg-green-50",
      blue: "bg-blue-50",
      purple: "bg-purple-50",
      teal: "bg-teal-50",
      orange: "bg-orange-50",
      indigo: "bg-indigo-50",
      red: "bg-red-50",
      yellow: "bg-yellow-50",
      cyan: "bg-cyan-50",
      gray: "bg-gray-50",
      pink: "bg-pink-50",
    };

    const Icon = section.icon;

    return (
      <div id={section.id} className="scroll-mt-24">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Section Header */}
          <div className={`bg-gradient-to-r ${colorMap[section.color]} px-4 sm:px-6 py-3 sm:py-4`}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">{section.title}</h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="p-4 sm:p-6">
            {section.id === "acceptance" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "eligibility" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.requirements.map((req, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">{req.title}</h3>
                      <ul className="space-y-2">
                        {req.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <ChevronRight size={12} className="text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "account" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-6">
                  {section.content.responsibilities.map((resp, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">{resp.title}</h3>
                      <ul className="space-y-2">
                        {resp.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <Lock size={12} className="text-purple-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "deposits" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.terms.map((term, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{term.title}</h3>
                      <ul className="space-y-2">
                        {term.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <DollarSign size={12} className="text-teal-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "loans" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.terms.map((term, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{term.title}</h3>
                      <ul className="space-y-2">
                        {term.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CreditCard size={12} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "transactions" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.policies.map((policy, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{policy.title}</h3>
                      <ul className="space-y-2">
                        {policy.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <TrendingUp size={12} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "fees" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full min-w-[500px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Service</th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Amount</th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {section.content.feeTable.map((fee, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700">{fee.service}</td>
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-800">{fee.amount}</td>
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500">{fee.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-600">{section.content.note}</p>
                </div>
              </div>
            )}

            {section.id === "privacy" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-4">
                  {section.content.protections.map((protection, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">{protection.title}</h3>
                      <ul className="space-y-2">
                        {protection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <Shield size={12} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "conduct" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.prohibitedActivities.map((activity, idx) => (
                    <div key={idx} className="border border-red-200 bg-red-50 rounded-xl p-4">
                      <h3 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">{activity.category}</h3>
                      <ul className="space-y-2">
                        {activity.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <XCircle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "liability" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-4">
                  {section.content.limitations.map((limit, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">{limit.title}</h3>
                      <ul className="space-y-2">
                        {limit.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <Scale size={12} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "termination" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {section.content.scenarios.map((scenario, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">{scenario.title}</h3>
                      <ul className="space-y-2">
                        {scenario.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <XCircle size={12} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "dispute" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3 mb-6">
                  {section.content.process.map((step, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{step.step}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {step.timeframe}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-gray-700"><strong>Jurisdiction:</strong> {section.content.jurisdiction}</p>
                  <p className="text-sm text-gray-700"><strong>Arbitration:</strong> {section.content.arbitration}</p>
                </div>
              </div>
            )}

            {section.id === "amendments" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Notification Methods:</h3>
                  <ul className="space-y-2">
                    {section.content.amendmentProcess.map((method, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <Bell size={12} className="text-teal-600" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-2">{section.content.customerAction}</p>
                <p className="text-xs text-gray-500 italic">{section.content.reviewRecommendation}</p>
              </div>
            )}

            {section.id === "contact" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {section.content.contacts.map((contact, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
                      {contact.method === "Email" && <Mail size={16} className="text-gray-600 flex-shrink-0" />}
                      {contact.method === "Customer Support" && <Phone size={16} className="text-gray-600 flex-shrink-0" />}
                      {contact.method === "Grievance Officer" && <MessageCircle size={16} className="text-gray-600 flex-shrink-0" />}
                      {contact.method === "Postal Address" && <MapPin size={16} className="text-gray-600 flex-shrink-0" />}
                      {contact.method === "Registered Office" && <Building size={16} className="text-gray-600 flex-shrink-0" />}
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{contact.method}</h3>
                        {contact.action ? (
                          <a href={contact.action} className="text-xs sm:text-sm text-blue-600 hover:underline break-all">
                            {contact.details}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-gray-600 break-words">{contact.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-100 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-xs sm:text-sm text-gray-600">{section.content.responseTime}</p>
                </div>
              </div>
            )}
          </div>
        </div>
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
              <Gavel size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Terms of Use</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Please read these terms carefully before using our services. By using UDAAN, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar size={12} className="text-[#FDB813]" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FileText size={12} className="text-[#FDB813]" />
                <span>Effective: {effectiveDate}</span>
              </div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Award size={12} className="text-[#FDB813]" />
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-[#0B2A4A] hover:bg-gray-50 rounded-lg whitespace-nowrap transition-colors"
              >
                <section.icon size={12} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-[#0B2A4A]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Welcome to UDAAN</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    These Terms of Use govern your access to and use of the services provided by 
                    UDAAN Mutual Benefit Nidhi Limited. By registering for an account or using our 
                    services, you acknowledge that you have read, understood, and agree to be bound 
                    by these terms, our Privacy Policy, and any other policies referenced herein.
                  </p>
                </div>
              </div>
            </div>

            {/* All Sections */}
            <div className="space-y-6 sm:space-y-8">
              {sections.map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>

            {/* Acknowledgment Section */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-lg border border-green-100 p-4 sm:p-6">
              <div className="text-center">
                <CheckCircle size={40} className="mx-auto text-green-600 mb-3" />
                <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2">Acknowledgment of Terms</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  By continuing to use UDAAN's services, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms of Use, our Privacy Policy, and all applicable laws.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors text-sm sm:text-base">
                    <Download size={16} />
                    Download Terms
                  </button>
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    <Printer size={16} />
                    Print
                  </button>
                </div>
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
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </>
  );
};

export default TermsOfUse;