import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  FileText,
  Cookie,
  AlertTriangle,
  CheckCircle,
  Download,
  Printer,
  Share2,
  Globe,
  Server,
  CreditCard,
  Fingerprint,
  Smartphone,
  Laptop,
  Building,
  Award,
  Calendar,
  MessageCircle,
  Bell,
  Settings,
  UserCheck,
  BarChart3,
  TrendingUp,
  DollarSign,
  Home,
  Info,
  HeartHandshake,
  Menu,
  X,
} from "lucide-react";

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 15, 2024";
  const effectiveDate = "January 1, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      color: "blue",
      content: {
        intro: "At UDAAN Mutual Benefit Nidhi Limited, we collect various types of information to provide and improve our services:",
        categories: [
          {
            title: "Personal Identification Information",
            items: [
              "Full name and date of birth",
              "PAN card number and Aadhaar number",
              "Voter ID / Passport / Driving License",
              "Residential and permanent addresses",
              "Contact numbers (Mobile & Landline)",
              "Email address",
              "Occupation and employment details",
              "Annual income and financial information",
            ],
          },
          {
            title: "Banking & Financial Information",
            items: [
              "Bank account numbers and IFSC codes",
              "Nominee details",
              "Investment preferences and risk profile",
              "Transaction history and patterns",
              "Deposit and loan account details",
              "Credit history and repayment records",
            ],
          },
          {
            title: "Technical Information",
            items: [
              "IP address and device information",
              "Browser type and version",
              "Operating system",
              "Login timestamps and session duration",
              "Pages visited and interaction data",
              "Cookies and similar tracking technologies",
            ],
          },
          {
            title: "Biometric & KYC Information",
            items: [
              "Photograph and signature",
              "Fingerprint (where applicable for authentication)",
              "Voice recording for customer support (with consent)",
              "Video KYC recordings",
            ],
          },
        ],
      },
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: TrendingUp,
      color: "green",
      content: {
        intro: "Your information is used for the following legitimate business purposes:",
        purposes: [
          {
            title: "Core Banking Services",
            description: "Processing deposits, loans, interest calculations, and account management.",
            items: [
              "Opening and maintaining deposit accounts",
              "Processing loan applications and disbursements",
              "Calculating and crediting interest",
              "Managing nominee and beneficiary details",
              "Generating account statements and passbooks",
            ],
          },
          {
            title: "Regulatory Compliance",
            description: "Meeting legal and regulatory requirements set by RBI, MCA, and other authorities.",
            items: [
              "KYC verification and ongoing due diligence",
              "Anti-money laundering (AML) checks",
              "Tax reporting (TDS, Form 16A, etc.)",
              "Responding to regulatory inquiries",
              "Audit and compliance reviews",
            ],
          },
          {
            title: "Customer Service",
            description: "Providing support and improving your experience.",
            items: [
              "Responding to queries and complaints",
              "Sending important account notifications",
              "Providing transaction alerts and OTPs",
              "Conducting customer satisfaction surveys",
              "Offering personalized assistance",
            ],
          },
          {
            title: "Service Improvement",
            description: "Enhancing our products and platform.",
            items: [
              "Analyzing usage patterns and preferences",
              "Developing new features and services",
              "Improving security measures",
              "Optimizing user experience",
              "Conducting market research",
            ],
          },
        ],
      },
    },
    {
      id: "sharing",
      title: "Information Sharing & Disclosure",
      icon: Users,
      color: "purple",
      content: {
        intro: "We value your privacy and limit information sharing to specific, necessary circumstances:",
        scenarios: [
          {
            title: "With Your Consent",
            description: "We share information when you explicitly authorize us to do so.",
            allowed: true,
          },
          {
            title: "Service Providers",
            description: "Third parties who assist in operations (e.g., IT services, auditors, legal advisors).",
            allowed: true,
          },
          {
            title: "Regulatory Authorities",
            description: "RBI, MCA, Income Tax Department, and other statutory bodies.",
            allowed: true,
          },
          {
            title: "Credit Information Companies",
            description: "CIBIL, Experian, Equifax, and other credit bureaus.",
            allowed: true,
          },
          {
            title: "Marketing Partners",
            description: "Sharing for promotional purposes.",
            allowed: false,
          },
          {
            title: "Unauthorized Third Parties",
            description: "Selling or renting personal data.",
            allowed: false,
          },
        ],
        note: "We never sell your personal information to third parties for marketing purposes.",
      },
    },
    {
      id: "security",
      title: "Data Security Measures",
      icon: Lock,
      color: "red",
      content: {
        intro: "We implement industry-standard security measures to protect your information:",
        measures: [
          {
            category: "Technical Security",
            items: [
              "256-bit SSL/TLS encryption for all data transmission",
              "Multi-factor authentication (MFA) for account access",
              "Regular security audits and penetration testing",
              "Intrusion detection and prevention systems",
              "Secure data centers with 24/7 monitoring",
              "Automated backup and disaster recovery",
            ],
          },
          {
            category: "Organizational Security",
            items: [
              "Strict access controls and role-based permissions",
              "Regular employee security training",
              "Confidentiality agreements for all staff",
              "Vendor security assessments",
              "Incident response and breach notification procedures",
              "Data retention and disposal policies",
            ],
          },
          {
            category: "Customer Responsibilities",
            items: [
              "Keep your login credentials confidential",
              "Use strong, unique passwords",
              "Enable MFA for your account",
              "Logout after each session",
              "Report suspicious activity immediately",
              "Keep your contact information updated",
            ],
          },
        ],
      },
    },
    {
      id: "retention",
      title: "Data Retention Policy",
      icon: Clock,
      color: "orange",
      content: {
        intro: "We retain your personal information as long as necessary for business and legal purposes:",
        retentionPeriods: [
          {
            period: "Active Accounts",
            duration: "Entire duration of your relationship + 10 years",
            reason: "For account maintenance, regulatory compliance, and potential disputes",
          },
          {
            period: "Transaction Records",
            duration: "10 years from transaction date",
            reason: "Income tax and regulatory requirements",
          },
          {
            period: "KYC Documents",
            duration: "10 years after account closure",
            reason: "RBI guidelines and anti-money laundering laws",
          },
          {
            period: "Customer Communication",
            duration: "5 years",
            reason: "Customer service and dispute resolution",
          },
          {
            period: "Website Logs",
            duration: "12 months",
            reason: "Security monitoring and performance analysis",
          },
        ],
      },
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      icon: Cookie,
      color: "teal",
      content: {
        intro: "We use cookies and similar technologies to enhance your browsing experience:",
        cookieTypes: [
          {
            type: "Essential Cookies",
            purpose: "Required for basic site functionality",
            examples: "Session management, security tokens, load balancing",
            expiry: "Session",
          },
          {
            type: "Preference Cookies",
            purpose: "Remember your settings and preferences",
            examples: "Language selection, theme preference, saved login",
            expiry: "12 months",
          },
          {
            type: "Analytics Cookies",
            purpose: "Understand how visitors use our site",
            examples: "Page views, click tracking, navigation paths",
            expiry: "24 months",
            canDisable: true,
          },
          {
            type: "Security Cookies",
            purpose: "Protect against fraud and unauthorized access",
            examples: "CSRF tokens, rate limiting, bot detection",
            expiry: "Session",
          },
        ],
        control: "You can manage cookie preferences through your browser settings. Disabling essential cookies may affect site functionality.",
      },
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: UserCheck,
      color: "indigo",
      content: {
        intro: "Under applicable privacy laws, you have the following rights regarding your personal information:",
        rights: [
          {
            right: "Right to Access",
            description: "Request a copy of all personal information we hold about you.",
            timeframe: "Within 30 days",
          },
          {
            right: "Right to Rectification",
            description: "Correct inaccurate or incomplete information.",
            timeframe: "Within 15 days",
          },
          {
            right: "Right to Erasure",
            description: "Request deletion of your data (subject to legal retention requirements).",
            timeframe: "Within 45 days",
          },
          {
            right: "Right to Restrict Processing",
            description: "Limit how we use your information.",
            timeframe: "Within 21 days",
          },
          {
            right: "Right to Data Portability",
            description: "Receive your data in a structured, machine-readable format.",
            timeframe: "Within 30 days",
          },
          {
            right: "Right to Object",
            description: "Object to certain types of processing (e.g., direct marketing).",
            timeframe: "Within 15 days",
          },
          {
            right: "Right to Withdraw Consent",
            description: "Withdraw previously given consent at any time.",
            timeframe: "Immediate effect",
          },
          {
            right: "Right to Lodge Complaint",
            description: "File a complaint with the relevant data protection authority.",
            timeframe: "As per regulatory guidelines",
          },
        ],
      },
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: HeartHandshake,
      color: "pink",
      content: {
        statement: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
        verification: "We may require age verification for certain services and may request guardian consent where applicable.",
      },
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      icon: Bell,
      color: "yellow",
      content: {
        statement: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
        notification: "Material changes will be notified via:",
        methods: [
          "Email notification to registered users",
          "Website announcement banner",
          "SMS alert for critical changes",
          "Updated policy publication date",
        ],
        recommendation: "We encourage you to review this policy periodically for any updates.",
      },
    },
    {
      id: "grievance",
      title: "Grievance Redressal",
      icon: MessageCircle,
      color: "cyan",
      content: {
        intro: "If you have any concerns or complaints regarding your privacy, please contact our Grievance Officer:",
        officer: {
          name: "Mr. R. Senthil Kumar",
          position: "Compliance Officer & Grievance Redressal Officer",
          email: "grievance@udaan.in",
          phone: "+91 73977 82590",
          address: "No. 362/B, Kamarajar Street, Villupuram - 605602, Tamil Nadu, India",
          timing: "Monday to Saturday, 10:00 AM to 5:00 PM",
          escalation: "If not satisfied with resolution, you may escalate to the Banking Ombudsman or Ministry of Corporate Affairs.",
        },
      },
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      color: "gray",
      content: {
        intro: "For any questions about this Privacy Policy or our privacy practices:",
        methods: [
          {
            method: "Email",
            details: "privacy@udaan.in",
            action: "mailto:privacy@udaan.in",
          },
          {
            method: "Customer Support",
            details: "support@udaan.in | +91 73977 82590",
            action: null,
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
        responseTime: "We typically respond to privacy-related inquiries within 7 business days.",
      },
    },
  ];

  const SectionCard = ({ section }) => {
    const colorMap = {
      blue: "from-blue-600 to-blue-700",
      green: "from-green-600 to-green-700",
      purple: "from-purple-600 to-purple-700",
      red: "from-red-600 to-red-700",
      orange: "from-orange-600 to-orange-700",
      teal: "from-teal-600 to-teal-700",
      indigo: "from-indigo-600 to-indigo-700",
      pink: "from-pink-600 to-pink-700",
      yellow: "from-yellow-600 to-yellow-700",
      cyan: "from-cyan-600 to-cyan-700",
      gray: "from-gray-600 to-gray-700",
    };

    const bgColorMap = {
      blue: "bg-blue-50",
      green: "bg-green-50",
      purple: "bg-purple-50",
      red: "bg-red-50",
      orange: "bg-orange-50",
      teal: "bg-teal-50",
      indigo: "bg-indigo-50",
      pink: "bg-pink-50",
      yellow: "bg-yellow-50",
      cyan: "bg-cyan-50",
      gray: "bg-gray-50",
    };

    const Icon = section.icon;

    return (
      <div id={section.id} className="scroll-mt-24">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Section Header - Fixed for mobile */}
          <div className={`bg-gradient-to-r ${colorMap[section.color]} px-3 sm:px-6 py-3 sm:py-4`}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-sm sm:text-xl font-bold text-white leading-tight">
                  {section.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="p-3 sm:p-6">
            {section.id === "information-collection" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {section.content.categories.map((category, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-3 sm:p-4`}>
                      <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-base">
                        <div className="w-1 h-4 sm:w-1.5 sm:h-5 bg-blue-600 rounded-full"></div>
                        <span className="leading-tight">{category.title}</span>
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-[11px] sm:text-sm text-gray-600 flex items-start gap-1.5 sm:gap-2">
                            <ChevronRight size={10} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "usage" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {section.content.purposes.map((purpose, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-base">{purpose.title}</h3>
                      <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">{purpose.description}</p>
                      <ul className="space-y-1">
                        {purpose.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-[10px] sm:text-xs text-gray-600 flex items-start gap-1.5 sm:gap-2">
                            <CheckCircle size={10} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "sharing" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
                  {section.content.scenarios.map((scenario, idx) => (
                    <div
                      key={idx}
                      className={`p-3 sm:p-4 rounded-xl border-2 ${
                        scenario.allowed
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-base">{scenario.title}</h3>
                        {scenario.allowed ? (
                          <CheckCircle size={16} className="text-green-600" />
                        ) : (
                          <AlertTriangle size={16} className="text-red-600" />
                        )}
                      </div>
                      <p className="text-[11px] sm:text-sm text-gray-600">{scenario.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Shield size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] sm:text-sm text-gray-700 leading-relaxed">{section.content.note}</p>
                  </div>
                </div>
              </div>
            )}

            {section.id === "security" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="space-y-3 sm:space-y-6">
                  {section.content.measures.map((measure, idx) => (
                    <div key={idx} className={`${bgColorMap[section.color]} rounded-xl p-3 sm:p-5`}>
                      <h3 className="font-semibold text-gray-800 mb-2 sm:mb-4 text-xs sm:text-base">{measure.category}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {measure.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2 text-[11px] sm:text-sm text-gray-600">
                            <Shield size={12} className="text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "retention" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[450px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Data Category</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Retention Period</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {section.content.retentionPeriods.map((period, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-700 font-medium">{period.period}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-600">{period.duration}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-500">{period.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {section.id === "cookies" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="overflow-x-auto mb-3 sm:mb-6">
                  <table className="w-full min-w-[400px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Cookie Type</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Purpose</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-sm font-semibold text-gray-700">Expiry</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {section.content.cookieTypes.map((cookie, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-medium text-gray-700">{cookie.type}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-600">
                            {cookie.purpose}
                            {cookie.canDisable && (
                              <span className="ml-1 text-[8px] sm:text-xs text-orange-600">(Can disable)</span>
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm text-gray-500">{cookie.expiry}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
                  <p className="text-[11px] sm:text-sm text-gray-700 leading-relaxed">{section.content.control}</p>
                </div>
              </div>
            )}

            {section.id === "user-rights" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {section.content.rights.map((right, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-base">{right.right}</h3>
                        <span className="text-[10px] sm:text-xs bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-gray-600 self-start sm:self-auto">
                          {right.timeframe}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed">{right.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "children-privacy" && (
              <div>
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-3 sm:p-5">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <HeartHandshake size={18} className="text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-700 mb-2 sm:mb-3 text-xs sm:text-base leading-relaxed">{section.content.statement}</p>
                      <p className="text-[11px] sm:text-sm text-gray-600">{section.content.verification}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {section.id === "policy-updates" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-base">{section.content.statement}</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-5 mb-3 sm:mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2 text-xs sm:text-base">Notification Methods:</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {section.content.methods.map((method, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-600">
                        <Bell size={12} className="text-yellow-600 flex-shrink-0" />
                        <span className="leading-relaxed">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[11px] sm:text-sm text-gray-500 italic">{section.content.recommendation}</p>
              </div>
            )}

            {section.id === "grievance" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 sm:p-6 border border-cyan-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-[11px] sm:text-sm text-gray-500">Grievance Officer</p>
                      <p className="font-semibold text-gray-800 text-sm sm:text-lg break-words">{section.content.officer.name}</p>
                      <p className="text-[11px] sm:text-sm text-gray-600">{section.content.officer.position}</p>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-2 text-[11px] sm:text-sm break-all">
                        <Mail size={12} className="text-cyan-600 flex-shrink-0" />
                        <a href={`mailto:${section.content.officer.email}`} className="text-gray-700 hover:text-cyan-600 break-all">
                          {section.content.officer.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] sm:text-sm">
                        <Phone size={12} className="text-cyan-600 flex-shrink-0" />
                        <span className="text-gray-700">{section.content.officer.phone}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[11px] sm:text-sm">
                        <MapPin size={12} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 break-words leading-relaxed">{section.content.officer.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] sm:text-sm">
                        <Clock size={12} className="text-cyan-600 flex-shrink-0" />
                        <span className="text-gray-700">{section.content.officer.timing}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-cyan-200">
                    <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed">{section.content.officer.escalation}</p>
                  </div>
                </div>
              </div>
            )}

            {section.id === "contact" && (
              <div>
                <p className="text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base">{section.content.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
                  {section.content.methods.map((method, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
                      {method.method === "Email" && <Mail size={16} className="text-gray-600 flex-shrink-0" />}
                      {method.method === "Customer Support" && <Phone size={16} className="text-gray-600 flex-shrink-0" />}
                      {method.method === "Postal Address" && <MapPin size={16} className="text-gray-600 flex-shrink-0" />}
                      {method.method === "Registered Office" && <Building size={16} className="text-gray-600 flex-shrink-0" />}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-base">{method.method}</h3>
                        {method.action ? (
                          <a href={method.action} className="text-[11px] sm:text-sm text-blue-600 hover:underline break-all">
                            {method.details}
                          </a>
                        ) : (
                          <p className="text-[11px] sm:text-sm text-gray-600 break-words leading-relaxed">{method.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-100 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-[11px] sm:text-sm text-gray-600">{section.content.responseTime}</p>
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
              <Shield size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 break-words">Privacy Policy</h1>
            <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2">
              Protecting your personal information and maintaining your trust is our highest priority.
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

      {/* Quick Navigation - Responsive */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap justify-center gap-2 py-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm text-gray-600 hover:text-[#0B2A4A] hover:bg-gray-50 rounded-lg whitespace-nowrap transition-colors"
              >
                <section.icon size={12} className="sm:w-4 sm:h-4" />
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-6 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B2A4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-[#0B2A4A]" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2">Commitment to Privacy</h2>
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                    UDAAN Mutual Benefit Nidhi Limited is committed to protecting the privacy and security 
                    of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you use our services, website, and mobile applications. 
                    We comply with the applicable provisions of the Companies Act, 2013, RBI guidelines for Nidhi 
                    Companies, and the Information Technology (Reasonable Security Practices and Procedures and 
                    Sensitive Personal Data or Information) Rules, 2011.
                  </p>
                </div>
              </div>
            </div>

            {/* All Sections */}
            <div className="space-y-4 sm:space-y-8">
              {sections.map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>

            {/* Download Section */}
            <div className="mt-6 sm:mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-lg">Download Privacy Policy</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors text-xs sm:text-base">
                  <Download size={14} />
                  Download PDF
                </button>
                <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-base">
                  <Printer size={14} />
                  Print
                </button>
                <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-base">
                  <Share2 size={14} />
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

export default PrivacyPolicy;