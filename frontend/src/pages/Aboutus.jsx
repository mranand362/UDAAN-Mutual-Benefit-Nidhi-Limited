import React from 'react';
import { 
  Users, Clock, Shield, Award, Target, 
  TrendingUp, CheckCircle, ArrowRight,
  Building2, Briefcase, Gem, Star,
  Calendar, Heart, ThumbsUp, Zap
} from 'lucide-react';

const About = () => {
  // Company highlights
  const highlights = [
    { 
      icon: <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />,
      value: "2013",
      label: "Incorporated",
      desc: "Under Companies Act, Govt of India"
    },
    { 
      icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
      value: "5000+",
      label: "Members",
      desc: "Growing family of satisfied members"
    },
    { 
      icon: <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />,
      value: "₹50Cr+",
      label: "Deposits",
      desc: "Strong financial foundation"
    },
    { 
      icon: <Shield className="w-4 sm:w-5 h-4 sm:h-5" />,
      value: "100%",
      label: "Secure",
      desc: "Government regulated Nidhi company"
    }
  ];

  // Features
  const features = [
    {
      icon: <Briefcase className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Expert Team",
      desc: "Run by experienced financial professionals",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Zap className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Fast Service",
      desc: "Quick processing with minimal docs",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Heart className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Member Focus",
      desc: "Your financial growth is our priority",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Gem className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Integrity",
      desc: "Transparent operations always",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  // Stats
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "5000+", label: "Happy Members" },
    { value: "₹50Cr+", label: "Total Deposits" },
    { value: "24/7", label: "Member Support" }
  ];

  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FDB813]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#0B2A4A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 bg-[#FDB813]/10 text-[#FDB813] font-semibold text-xs sm:text-sm rounded-full mb-3">
            About Company
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2A4A] mb-2 sm:mb-3">
            UDAAN MUTUAL BENEFIT NIDHI LIMITED
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Mutual Benefit Nidhi Limited - Your trusted partner in financial growth since 2010
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#FDB813] mx-auto rounded-full mt-3 sm:mt-4" />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2A4A]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-12">
          
          {/* Left Column - About Text */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2A4A]">
              Catering to diverse financial needs of our members
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              JAYNIRMALA Mutual Benefit Nidhi Limited is a <span className="font-semibold text-[#0B2A4A]">Nidhi company</span> incorporated 
              under the Companies Act 2013 & regulated by Ministry of Corporate Affairs, Government of India.
            </p>

            <div className="bg-gradient-to-r from-[#FDB813]/10 to-transparent p-4 sm:p-5 rounded-xl border-l-4 border-[#FDB813]">
              <p className="text-sm sm:text-base text-gray-700 italic">
                "The main objective is to cultivate the habit of thrift and savings among members & 
                receiving deposits from, and lending to, members only, for their mutual benefit."
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We are a company run by professionals with rich experience in financial services industry. 
              Our team brings decades of combined expertise in banking, investments, and member services.
            </p>

            {/* Team Highlights - Mobile Only */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm text-gray-600">15+ Years Exp</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm text-gray-600">Certified Team</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm text-gray-600">Member First</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm text-gray-600">Ethical</span>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-3 sm:p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-all group border border-gray-100"
              >
                <div className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 ${feature.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-xs sm:text-sm md:text-base text-[#0B2A4A] mb-1">{feature.title}</h4>
                <p className="text-[10px] sm:text-xs text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all"
            >
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#FDB813]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-[#FDB813] transition-colors">
                <div className="text-[#FDB813] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold text-[#0B2A4A]">{item.value}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{item.label}</div>
              <div className="text-[10px] sm:text-xs text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10">
          <h4 className="font-bold text-[#0B2A4A] mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#FDB813]" />
            Our Core Values
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#FDB813]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gem className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDB813]" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Integrity</h5>
                <p className="text-xs sm:text-sm text-gray-500">Transparent operations</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#FDB813]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDB813]" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Excellence</h5>
                <p className="text-xs sm:text-sm text-gray-500">Best financial solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#FDB813]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDB813]" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Member Focus</h5>
                <p className="text-xs sm:text-sm text-gray-500">Your growth is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;