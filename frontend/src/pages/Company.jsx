import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, Users, Target, Shield, Award,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Landmark, Clock, FileText, Scale, Eye,
  Heart, HandHelping, PiggyBank, Wallet,
  Calendar, BarChart3, Sparkles, Globe,
  Briefcase, GraduationCap, MapPin, Phone,
  Mail, ChevronRight, Download
} from "lucide-react";

const Company = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Building2 className="w-4 h-4" /> },
    { id: "leadership", label: "Leadership", icon: <Users className="w-4 h-4" /> },
    { id: "milestones", label: "Milestones", icon: <Calendar className="w-4 h-4" /> },
    { id: "financials", label: "Financials", icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const highlights = [
    { value: "2013", label: "Incorporated", icon: <Building2 className="w-5 h-5" />, desc: "Under Companies Act, 2013" },
    { value: "5000+", label: "Happy Members", icon: <Users className="w-5 h-5" />, desc: "Growing family" },
    { value: "₹50Cr+", label: "Total Deposits", icon: <PiggyBank className="w-5 h-5" />, desc: "Strong foundation" },
    { value: "15+", label: "Years of Trust", icon: <Calendar className="w-5 h-5" />, desc: "Since 2010" }
  ];

  const leadershipTeam = [
    {
      name: "Rajesh Kumar",
      position: "Chairman & Managing Director",
      qualification: "MBA, IIM Ahmedabad",
      experience: "25+ years",
      expertise: ["Strategic Planning", "Financial Management", "Risk Assessment"],
      image: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Executive Director",
      qualification: "CA, CS",
      experience: "18+ years",
      expertise: ["Financial Compliance", "Audit", "Regulatory Affairs"],
      image: "PS"
    },
    {
      name: "Amit Patel",
      position: "Independent Director",
      qualification: "PhD in Economics",
      experience: "22+ years",
      expertise: ["Economic Policy", "Rural Finance", "Member Relations"],
      image: "AP"
    },
    {
      name: "Neha Singh",
      position: "Non-Executive Director",
      qualification: "LLB, MBA",
      experience: "15+ years",
      expertise: ["Legal Compliance", "Corporate Law", "Governance"],
      image: "NS"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "JAYNIRMALA established with a vision to promote thrift and savings" },
    { year: "2013", event: "Nidhi Registration", description: "Registered as Nidhi Company under Section 406 of Companies Act, 2013" },
    { year: "2015", event: "1000 Members", description: "Achieved milestone of 1000 active members" },
    { year: "2018", event: "₹10Cr Deposits", description: "Total deposits crossed ₹10 Crores" },
    { year: "2020", event: "Digital Launch", description: "Launched online services and mobile banking" },
    { year: "2023", event: "5000 Members", description: "Member base expanded to 5000+ families" }
  ];

  const financialHighlights = [
    { metric: "Total Deposits", value: "₹52.3 Cr", growth: "+15%", year: "2023-24" },
    { metric: "Loan Portfolio", value: "₹38.7 Cr", growth: "+12%", year: "2023-24" },
    { metric: "Net Worth", value: "₹8.2 Cr", growth: "+10%", year: "2023-24" },
    { metric: "Reserve Fund", value: "₹5.1 Cr", growth: "+8%", year: "2023-24" }
  ];

  const certificates = [
    { name: "Certificate of Incorporation", issuer: "MCA", date: "15 Mar 2010" },
    { name: "Nidhi Company Registration", issuer: "MCA", date: "20 Jun 2013" },
    { name: "PAN Allotment", issuer: "Income Tax Dept", date: "10 Apr 2010" },
    { name: "TAN Registration", issuer: "Income Tax Dept", date: "05 May 2010" }
  ];

  const values = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Integrity",
      desc: "We conduct business with the highest ethical standards"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Member First",
      desc: "Your financial growth is our top priority"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Transparency",
      desc: "Clear terms, no hidden charges"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Trust",
      desc: "Building lasting relationships through honesty"
    }
  ];

  const companyInfo = {
    name: "JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED",
    cin: "U85300BR2023NPL061372",
    pan: "AABCJ1234F",
    tan: "JNTL12345A",
    regDate: "15 March 2010",
    regAuthority: "Ministry of Corporate Affairs, Government of India",
    registeredOffice: "No. 362/B, Kamarajar Street, Villupuram - 605602, Tamil Nadu",
    email: "info@jaynirmala.com",
    phone: "+91 73977 82590",
    website: "www.jaynirmala.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Company Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">JAYNIRMALA</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            MUTUAL BENEFIT NIDHI LIMITED – A Government Registered Nidhi Company
          </p>
        </div>

        {/* Company Info Card */}
        <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-2xl p-6 mb-10 text-white shadow-xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{companyInfo.name}</h2>
              <p className="text-gray-300 text-sm mb-3">CIN: {companyInfo.cin}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FDB813]" />
                  <span className="text-gray-200">{companyInfo.registeredOffice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FDB813]" />
                  <a href={`tel:${companyInfo.phone}`} className="text-gray-200 hover:text-[#FDB813]">{companyInfo.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FDB813]" />
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-200 hover:text-[#FDB813]">{companyInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#FDB813]" />
                  <span className="text-gray-200">{companyInfo.website}</span>
                </div>
              </div>
            </div>
            <button className="bg-[#FDB813] text-[#0B2A4A] px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all whitespace-nowrap">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#0B2A4A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="flex items-center justify-center text-[#FDB813] mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0B2A4A]">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className="text-[10px] text-gray-400 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* About Company */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#FDB813]" />
                  About Us
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-[#0B2A4A]">JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED</span> is a premier Nidhi company incorporated under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs, Government of India.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Since our inception in 2010, we have been dedicated to cultivating the habit of thrift and savings among our members. We believe in providing financial services that are not only accessible but also tailored to the unique needs of our community.
                  </p>
                  <div className="bg-[#FDB813]/5 p-4 rounded-lg border-l-4 border-[#FDB813]">
                    <p className="text-sm italic text-gray-700">
                      "Our mission is to empower our members by providing secure, transparent, and member-centric financial solutions that foster mutual growth and prosperity."
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Regulatory Info */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#FDB813]" />
                    Regulatory Information
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-xs text-gray-500">CIN</span>
                      <span className="text-xs font-medium text-[#0B2A4A]">{companyInfo.cin}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-xs text-gray-500">PAN</span>
                      <span className="text-xs font-medium text-[#0B2A4A]">{companyInfo.pan}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-xs text-gray-500">TAN</span>
                      <span className="text-xs font-medium text-[#0B2A4A]">{companyInfo.tan}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-xs text-gray-500">Registration Date</span>
                      <span className="text-xs font-medium text-[#0B2A4A]">{companyInfo.regDate}</span>
                    </div>
                  </div>
                </div>

                {/* Core Values */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#FDB813]" />
                    Core Values
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {values.map((value, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813]">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-[#0B2A4A] text-xs">{value.title}</h4>
                          <p className="text-[10px] text-gray-500">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === "leadership" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {leadershipTeam.map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#0B2A4A] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {member.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0B2A4A] text-lg">{member.name}</h3>
                      <p className="text-[#FDB813] font-medium text-sm mb-2">{member.position}</p>
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <GraduationCap className="w-3 h-3 text-[#FDB813]" />
                          {member.qualification}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Briefcase className="w-3 h-3 text-[#FDB813]" />
                          {member.experience}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chairman's Message */}
            <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 text-white mt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#FDB813] rounded-xl flex items-center justify-center text-[#0B2A4A] font-bold text-2xl">
                  RK
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Message from Chairman</h3>
                  <p className="text-sm text-gray-300 mb-2">Rajesh Kumar, Chairman & Managing Director</p>
                  <p className="text-sm text-gray-200 italic">
                    "At JAYNIRMALA, we believe in putting our members first. Our board is committed to ensuring that every decision we make contributes to the financial well-being of our members. We invite you to join us on this journey of growth and prosperity."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === "milestones" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Our Journey</h2>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-6">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-[#FDB813] rounded-full flex items-center justify-center text-[#0B2A4A] font-bold text-xs">
                      {item.year.slice(-2)}
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                      <span className="text-sm font-bold text-[#0B2A4A] block mb-1">{item.year} – {item.event}</span>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#0B2A4A] mb-3">Regulatory Certificates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-[#0B2A4A] block">{cert.name}</span>
                      <span className="text-[10px] text-gray-500">Issued by {cert.issuer} on {cert.date}</span>
                    </div>
                    <Download className="w-4 h-4 text-[#FDB813] hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === "financials" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0B2A4A] mb-4">Financial Highlights</h2>
            
            {/* Financial Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {financialHighlights.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all">
                  <span className="text-xs text-gray-500 block mb-1">{item.metric}</span>
                  <span className="text-2xl font-bold text-[#0B2A4A] block mb-1">{item.value}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-600">{item.growth}</span>
                    <span className="text-[10px] text-gray-400">FY {item.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-[#0B2A4A] mb-4">Deposit Growth (Last 5 Years)</h3>
              <div className="h-48 flex items-end gap-2">
                {[35, 42, 48, 52, 58].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#FDB813]/20 rounded-t-lg" style={{ height: `${height}px` }}>
                      <div className="w-full bg-[#FDB813] rounded-t-lg" style={{ height: `${height * 0.7}px` }}></div>
                    </div>
                    <span className="text-[10px] text-gray-500">FY{19+idx}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Ratios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <span className="text-xs text-gray-500 block">CRAR</span>
                <span className="text-xl font-bold text-[#0B2A4A]">18.5%</span>
                <span className="text-[10px] text-green-600 ml-2">Above regulatory</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <span className="text-xs text-gray-500 block">NPA Ratio</span>
                <span className="text-xl font-bold text-[#0B2A4A]">1.2%</span>
                <span className="text-[10px] text-green-600 ml-2">Healthy</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <span className="text-xs text-gray-500 block">ROI</span>
                <span className="text-xl font-bold text-[#0B2A4A]">12.5%</span>
                <span className="text-[10px] text-green-600 ml-2">Consistent</span>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Partner with Us</h3>
            <p className="text-sm text-gray-300 mb-4">Join JAYNIRMALA family and experience financial growth</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md">
                Become a Member
              </button>
              <button 
               onClick={() => navigate("/Contactus")}
               className="border border-white/30 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;