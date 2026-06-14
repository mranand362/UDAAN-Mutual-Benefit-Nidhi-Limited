import React from "react";
import { 
  Target, Eye, Heart, TrendingUp, Shield,
  CheckCircle, ArrowRight, Sparkles, Users,
  Award, HandHelping, Lightbulb, Rocket,
  BarChart3, Globe, Calendar, Zap,
  Star, Compass, Flag, Clock, PiggyBank
} from "lucide-react";

// ===== Reusable Card Components =====
const Card = ({ icon, title, desc, metrics }) => (
  <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all group">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-[#FDB813]/10 rounded-lg flex items-center justify-center text-[#FDB813] group-hover:bg-[#FDB813] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-[#0B2A4A] text-sm mb-1">{title}</h3>
        {desc && <p className="text-xs text-gray-500 mb-2">{desc}</p>}
        {metrics && <p className="text-[10px] text-[#FDB813] font-medium">{metrics}</p>}
      </div>
    </div>
  </div>
);

const ProgressCard = ({ icon, title, target, progress, color }) => (
  <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all">
    <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center text-white mb-3`}>
      {icon}
    </div>
    <h3 className="font-semibold text-[#0B2A4A] text-base mb-1">{title}</h3>
    <p className="text-xs text-gray-500 mb-3">{target}</p>
    <div className="space-y-1">
      <div className="flex justify-between text-[10px]">
        <span className="text-gray-400">Progress</span>
        <span className="font-medium text-[#0B2A4A]">{progress}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color}`} style={{ width: progress }}></div>
      </div>
    </div>
  </div>
);

const MilestoneItem = ({ year, event, achieved }) => (
  <div className="relative flex items-start gap-4 pl-10 md:pl-12">
    <div className={`absolute left-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs font-bold ${
      achieved ? "bg-[#FDB813] text-[#0B2A4A]" : "bg-gray-200 text-gray-500"
    }`}>
      {achieved ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
    </div>
    <div className="flex-1 pb-4">
      <span className="text-sm font-bold text-[#0B2A4A] block">{year}</span>
      <span className="text-xs text-gray-600">{event}</span>
    </div>
  </div>
);

const Mission = () => {

  // ===== Data =====
  const corePrinciples = [
    { icon: <Heart className="w-5 h-5" />, title: "Member-Centric", desc: "Every decision prioritizes member welfare" },
    { icon: <Shield className="w-5 h-5" />, title: "Integrity", desc: "Uncompromising ethical standards" },
    { icon: <Eye className="w-5 h-5" />, title: "Transparency", desc: "Clear, honest communication" },
    { icon: <Target className="w-5 h-5" />, title: "Excellence", desc: "Continuous improvement in service" }
  ];

  const strategicPillars = [
    { icon: <Users className="w-6 h-6" />, title: "Member Growth", target: "10,000+ by 2025", progress: "60%", color: "from-blue-500 to-blue-600" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Deposit Growth", target: "₹100Cr by 2026", progress: "45%", color: "from-green-500 to-green-600" },
    { icon: <Globe className="w-6 h-6" />, title: "Branch Network", target: "10+ Branches by 2027", progress: "30%", color: "from-purple-500 to-purple-600" },
    { icon: <Award className="w-6 h-6" />, title: "Digital Adoption", target: "80% Members by 2025", progress: "55%", color: "from-amber-500 to-amber-600" }
  ];

  const objectives = [
    { icon: <PiggyBank className="w-5 h-5" />, title: "Promote Savings", desc: "Cultivate regular saving habits among members", metrics: "Avg. savings per member: ₹25,000" },
    { icon: <HandHelping className="w-5 h-5" />, title: "Easy Credit Access", desc: "Provide hassle-free loans at competitive rates", metrics: "Loan disbursal: 24-48 hours" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Financial Growth", desc: "Ensure wealth creation for all members", metrics: "Avg. returns: 8.5% p.a." },
    { icon: <Shield className="w-5 h-5" />, title: "Member Protection", desc: "Guarantee safety of member funds", metrics: "100% secure deposits" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Financial Literacy", desc: "Educate members on smart financial practices", metrics: "24 workshops annually" },
    { icon: <Users className="w-5 h-5" />, title: "Community Building", desc: "Foster a strong member community", metrics: "5000+ active members" }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", achieved: true },
    { year: "2013", event: "Nidhi Registration", achieved: true },
    { year: "2015", event: "1000 Members", achieved: true },
    { year: "2018", event: "₹10Cr Deposits", achieved: true },
    { year: "2020", event: "Digital Launch", achieved: true },
    { year: "2023", event: "5000 Members", achieved: true },
    { year: "2025", event: "10000 Members", achieved: false },
    { year: "2027", event: "10 Branches", achieved: false }
  ];

  // ===== Render =====
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Compass className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Our Direction</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Mission & Vision</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Guiding principles that drive our commitment to member welfare and financial excellence
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card 
            icon={<Eye className="w-7 h-7" />} 
            title="Our Vision" 
            desc="To be the most trusted and preferred mutual benefit fund institution in India, recognized for our unwavering commitment to member welfare, financial inclusion, and sustainable growth." 
            metrics="Vision 2030: Pan-India Presence"
          />
          <Card 
            icon={<Target className="w-7 h-7" />} 
            title="Our Mission" 
            desc="To cultivate the habit of thrift and savings among our members, provide easy access to credit, ensure complete transparency in all operations, and foster mutual benefit through member-centric financial solutions."
            metrics="Member First, Always"
          />
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {corePrinciples.map((principle, idx) => (
            <Card key={idx} {...principle} />
          ))}
        </div>

        {/* Strategic Pillars */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B2A4A] text-center mb-6">Strategic Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategicPillars.map((pillar, idx) => (
              <ProgressCard key={idx} {...pillar} />
            ))}
          </div>
        </div>

        {/* Core Objectives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B2A4A] text-center mb-6">Core Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, idx) => (
              <Card key={idx} {...obj} />
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-12">
          <h2 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2">
            <Flag className="w-5 h-5 text-[#FDB813]" />
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-4 md:ml-6"></div>
            <div className="space-y-4">
              {milestones.map((item, idx) => (
                <MilestoneItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Commitments & Future Goals */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FDB813]" />
              Our Commitments
            </h3>
            <div className="space-y-3">
              {[
                "Complete transparency in all dealings",
                "Fair and equitable treatment of all members",
                "Protection of member funds and data",
                "Continuous innovation in member services",
                "Contribution to community development"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-[#0B2A4A] mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-[#FDB813]" />
              Future Goals
            </h3>
            <div className="space-y-3">
              {[
                { label: "Member Base", value: "10,000 by 2025" },
                { label: "Deposit Volume", value: "₹100Cr by 2026" },
                { label: "Branch Network", value: "10 Locations by 2027" },
                { label: "Digital Services", value: "100% Online Access" },
                { label: "Member Satisfaction", value: "95%+ Rating" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <span className="text-xs font-semibold text-[#0B2A4A]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all">
            <span className="text-sm text-gray-600">Join us in our mission to create financial well-being for all members</span>
            <button className="bg-[#FDB813] text-[#0B2A4A] px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#0B2A4A] hover:text-white transition-all flex items-center gap-1">
              Become a Member
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;