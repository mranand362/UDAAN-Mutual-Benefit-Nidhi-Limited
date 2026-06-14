import React, { useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  AlertCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Scale,
  Gavel,
  UserCheck,
  Lock,
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  Building,
  MessageCircle,
  Bell,
  Download,
  Printer,
  Share2,
  ChevronRight,
  XCircle,
  HelpCircle,
  Eye,
  Globe,
  Server,
  Database,
  Clock,
  ExternalLink,
  Info,
  HeartHandshake,
} from "lucide-react";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 15, 2024";
  const effectiveDate = "January 1, 2025";

  const sections = [
    {
      id: "no-warranty",
      title: "No Warranty",
      icon: AlertTriangle,
      color: "red",
      content: {
        intro: "The information and services provided by UDAAN Mutual Benefit Nidhi Limited are on an 'as is' and 'as available' basis.",
        points: [
          "We do not guarantee that our services will be uninterrupted, timely, secure, or error-free",
          "We make no warranty regarding the accuracy, reliability, or completeness of any information provided",
          "Any reliance you place on such information is strictly at your own risk",
          "We reserve the right to modify, suspend, or discontinue any service at any time without notice",
          "We do not warrant that defects will be corrected or that our servers are free of viruses",
        ],
      },
    },
    {
      id: "accuracy",
      title: "Accuracy of Information",
      icon: Eye,
      color: "blue",
      content: {
        intro: "While we strive to keep information accurate and up-to-date:",
        points: [
          "Information on our website is for general informational purposes only",
          "Interest rates, fees, and charges are subject to change without prior notice",
          "We recommend verifying all information with our branch before making decisions",
          "Historical data may not reflect current policies or practices",
          "We are not responsible for errors or omissions in the information provided",
        ],
      },
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Scale,
      color: "purple",
      content: {
        intro: "To the maximum extent permitted by law, UDAAN shall not be liable for:",
        items: [
          "Any direct, indirect, incidental, special, or consequential damages",
          "Loss of profits, revenue, data, or goodwill",
          "Damages resulting from unauthorized access to your account",
          "Losses due to third-party services or links",
          "Damages caused by events beyond our reasonable control",
        ],
      },
    },
    {
      id: "investment",
      title: "Investment Risks",
      icon: TrendingUp,
      color: "orange",
      content: {
        intro: "All investments and financial decisions involve risks:",
        points: [
          "Past performance does not guarantee future results",
          "Deposit rates are subject to change based on market conditions",
          "Early withdrawal may result in penalty and loss of interest",
          "Loan approval and terms depend on credit assessment",
          "You should consult with financial advisors for investment decisions",
        ],
      },
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      icon: ExternalLink,
      color: "teal",
      content: {
        intro: "Our website may contain links to third-party websites:",
        points: [
          "We do not endorse or control third-party websites",
          "We are not responsible for their content or privacy practices",
          "Accessing third-party links is at your own risk",
          "Third-party terms and policies apply when you leave our site",
          "We recommend reviewing their terms before providing any information",
        ],
      },
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      icon: Globe,
      color: "indigo",
      content: {
        intro: "UDAAN shall not be liable for delays or failures caused by:",
        items: [
          "Natural disasters, earthquakes, floods, or fires",
          "Pandemics, epidemics, or public health emergencies",
          "Government actions, regulations, or legal restrictions",
          "War, terrorism, riots, or civil unrest",
          "Power outages, internet failures, or technical disruptions",
        ],
      },
    },
    {
      id: "no-advice",
      title: "No Financial Advice",
      icon: HelpCircle,
      color: "cyan",
      content: {
        intro: "The information provided does not constitute financial advice:",
        points: [
          "We do not provide personalized investment recommendations",
          "You should consult qualified financial professionals",
          "Tax implications vary based on individual circumstances",
          "We are not responsible for your financial decisions",
          "Terms and conditions of each product apply",
        ],
      },
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: Shield,
      color: "green",
      content: {
        intro: "You agree to indemnify and hold UDAAN harmless from:",
        items: [
          "Any violation of these terms by you",
          "Your use of our services or website",
          "Any claims arising from your account activities",
          "Unauthorized access using your credentials",
          "Any misrepresentation or fraudulent activity",
        ],
      },
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
      color: "yellow",
      content: {
        intro: "These terms shall be governed by and construed in accordance with the laws of India:",
        items: [
          "Subject to exclusive jurisdiction of courts in Villupuram, Tamil Nadu",
          "Compliance with RBI guidelines for Nidhi Companies",
          "Companies Act, 2013 provisions apply",
          "Income Tax Act, 1961 for tax matters",
          "Information Technology Act, 2000 for electronic transactions",
        ],
      },
    },
    {
      id: "no-relationship",
      title: "No Partnership",
      icon: Users,
      color: "pink",
      content: {
        intro: "Your use of our services does not create any:",
        items: [
          "Partnership, joint venture, or employment relationship",
          "Agency or fiduciary relationship",
          "Any rights for third parties",
          "Obligations beyond these terms",
          "Any other legal relationship not explicitly stated",
        ],
      },
    },
    {
      id: "severability",
      title: "Severability",
      icon: FileText,
      color: "gray",
      content: {
        intro: "If any provision of these terms is found to be unenforceable:",
        points: [
          "The remaining provisions will remain in full force and effect",
          "The invalid provision will be modified to reflect the original intent",
          "Any waiver of rights must be in writing",
          "Failure to enforce any right does not waive future enforcement",
          "These terms constitute the entire agreement between parties",
        ],
      },
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      color: "blue",
      content: {
        intro: "If you have any questions about this disclaimer:",
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
            method: "Compliance Officer",
            details: "compliance@udaan.in",
            action: "mailto:compliance@udaan.in",
          },
          {
            method: "Postal Address",
            details: "UDAAN Mutual Benefit Nidhi Limited, No. 362/B, Kamarajar Street, Villupuram - 605602",
            action: null,
          },
        ],
        responseTime: "We aim to respond to all inquiries within 5-7 business days.",
      },
    },
  ];

  const SectionCard = ({ section }) => {
    const colorMap = {
      red: "from-red-600 to-red-700",
      blue: "from-blue-600 to-blue-700",
      purple: "from-purple-600 to-purple-700",
      orange: "from-orange-600 to-orange-700",
      teal: "from-teal-600 to-teal-700",
      indigo: "from-indigo-600 to-indigo-700",
      green: "from-green-600 to-green-700",
      yellow: "from-yellow-600 to-yellow-700",
      cyan: "from-cyan-600 to-cyan-700",
      pink: "from-pink-600 to-pink-700",
      gray: "from-gray-600 to-gray-700",
    };

    const bgColorMap = {
      red: "bg-red-50",
      blue: "bg-blue-50",
      purple: "bg-purple-50",
      orange: "bg-orange-50",
      teal: "bg-teal-50",
      indigo: "bg-indigo-50",
      green: "bg-green-50",
      yellow: "bg-yellow-50",
      cyan: "bg-cyan-50",
      pink: "bg-pink-50",
      gray: "bg-gray-50",
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
            {section.id === "no-warranty" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "accuracy" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Eye size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "liability" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.content.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <Scale size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "investment" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <TrendingUp size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "third-party" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ExternalLink size={18} className="text-teal-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "force-majeure" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.content.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <Globe size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "no-advice" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <HelpCircle size={18} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "indemnification" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.content.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <Shield size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "governing-law" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.content.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl">
                      <Gavel size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "no-relationship" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.content.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl">
                      <Users size={16} className="text-pink-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.id === "severability" && (
              <div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{section.content.intro}</p>
                <div className="space-y-3">
                  {section.content.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FileText size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
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
                      {contact.method === "Compliance Officer" && <Shield size={16} className="text-gray-600 flex-shrink-0" />}
                      {contact.method === "Postal Address" && <MapPin size={16} className="text-gray-600 flex-shrink-0" />}
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
              <AlertCircle size={14} className="text-[#FDB813]" />
              <span className="text-xs sm:text-sm font-medium">Legal Disclaimer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Disclaimer</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Please read this disclaimer carefully. By using our services, you acknowledge and agree to the terms stated below.
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
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm text-gray-600 hover:text-[#0B2A4A] hover:bg-gray-50 rounded-lg whitespace-nowrap transition-colors"
              >
                <section.icon size={12} className="sm:w-4 sm:h-4" />
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Important Notice */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 text-sm sm:text-base mb-1">Important Legal Notice</h3>
                  <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                    This disclaimer governs your use of UDAAN Mutual Benefit Nidhi Limited's website, mobile application, 
                    and services. By accessing or using our services, you agree to be bound by this disclaimer. 
                    If you do not agree with any part of this disclaimer, please do not use our services.
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
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <div className="text-center">
                <Shield size={40} className="mx-auto text-gray-600 mb-3" />
                <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2">Acknowledgment of Disclaimer</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  By continuing to use UDAAN's services, you acknowledge that you have read, understood, 
                  and agree to be bound by this Disclaimer, our Terms of Use, Privacy Policy, and all applicable laws.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-[#0B2A4A] text-white rounded-lg hover:bg-[#1a3a5a] transition-colors text-sm sm:text-base">
                    <Download size={16} />
                    Download Disclaimer
                  </button>
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    <Printer size={16} />
                    Print
                  </button>
                  <button className="flex items-center gap-2 px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    <Share2 size={16} />
                    Share
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
      `}</style>
    </>
  );
};

export default Disclaimer;