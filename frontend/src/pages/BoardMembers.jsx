import React from "react";
import { 
  Users, Linkedin, Mail, Phone, Award,
  Briefcase, GraduationCap, Star, MapPin
} from "lucide-react";

// Import images (replace with your actual images)
import director1 from "../assets/images/member1.png";
import director2 from "../assets/images/member2.png";
import director3 from "../assets/images/member4.png";
import director4 from "../assets/images/member3.png";

const BoardMembers = () => {
  const members = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Chairman & Managing Director",
      qualification: "MBA, IIM Ahmedabad",
      experience: "25+ years in Banking & Finance",
      description: "Leading financial expert with extensive experience in mutual benefit funds and cooperative banking.",
      image: director1,
      linkedin: "#",
      email: "rajesh@udaan.com",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Aman Sharma",
      position: "Executive Director",
      qualification: "CA, CS",
      experience: "18+ years in Financial Management",
      description: "Chartered Accountant with expertise in financial planning, risk management, and regulatory compliance.",
      image: director2,
      linkedin: "#",
      email: "aman@udaan.com",
      phone: "+91 98765 43211"
    },
    {
      id: 3,
      name: " Ayushi Singh",
      position: "Independent Director",
      qualification: "PhD in Economics",
      experience: "22+ years in Economic Policy",
      description: "Renowned economist with deep understanding of rural finance and member-based financial institutions.",
      image: director3,
      linkedin: "#",
      email: "ayushi@udaan.com",
      phone: "+91 98765 43212"
    },
    {
      id: 4,
      name: "Amit Patel",
      position: "Non-Executive Director",
      qualification: "LLB, MBA",
      experience: "15+ years in Legal & Compliance",
      description: "Legal expert specializing in corporate law, Nidhi regulations, and member protection frameworks.",
      image: director4,
      linkedin: "#",
      email: "amit@udaan.com",
      phone: "+91 98765 43213"
    }
  ];

  const stats = [
    { value: "4", label: "Board Members", icon: <Users className="w-4 h-4" /> },
    { value: "80+", label: "Combined Experience", icon: <Briefcase className="w-4 h-4" /> },
    { value: "25+", label: "Years of Trust", icon: <Star className="w-4 h-4" /> },
    { value: "100%", label: "Commitment", icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Our Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Board of Directors</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Meet the experienced professionals guiding our organization
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center gap-1 text-[#FDB813] mb-1">
                {stat.icon}
                <span className="text-2xl font-bold text-[#0B2A4A]">{stat.value}</span>
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="sm:w-2/3 p-5">
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-1">{member.name}</h3>
                  <p className="text-[#FDB813] font-medium text-sm mb-3">{member.position}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{member.qualification}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{member.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{member.description}</p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a href={member.linkedin} className="text-gray-400 hover:text-[#FDB813] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#FDB813] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-[#FDB813] transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message from Chairman */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0B2A4A] flex items-center justify-center text-white font-bold text-xl">
              RK
            </div>
            <div>
              <h3 className="font-bold text-[#0B2A4A] text-lg">Message from Chairman</h3>
              <p className="text-xs text-gray-500 mb-2">Rajesh Kumar, Chairman & Managing Director</p>
              <p className="text-sm text-gray-600 italic">
                "At UDAAN, we believe in putting our members first. Our board is committed to ensuring that every decision we make contributes to the financial well-being of our members. We invite you to join us on this journey of growth and prosperity."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Connect with Our Leadership</h3>
            <p className="text-sm text-gray-300 mb-4">Reach out to our board members for inquiries</p>
            <button className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md">
              Contact Board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;