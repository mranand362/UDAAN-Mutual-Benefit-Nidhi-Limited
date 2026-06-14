
import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

// Replace with your actual team images
import team1 from "../assets/images/member1.png";
import team2 from "../assets/images/member2.png";
import team3 from "../assets/images/member3.png";
import team4 from "../assets/images/member4.png";


const Team = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Managing Director",
      image: team1,
      social: {
        linkedin: "https://linkedin.com/in/rajesh",
        twitter: "https://twitter.com/rajesh",
        email: "mailto:rajesh@jaynirmala.com"
      }
    },
    {
      name: "Aman Sharma",
      role: "Chief Financial Officer",
      image: team2,
      social: {
        linkedin: "https://linkedin.com/in/priya",
        twitter: "https://twitter.com/priya",
        email: "mailto:priya@jaynirmala.com"
      }
    },
    {
      name: "Amit Patel",
      role: "Operations Head",
      image: team3,
      social: {
        linkedin: "https://linkedin.com/in/amit",
        twitter: "https://twitter.com/amit",
        email: "mailto:amit@jaynirmala.com"
      }
    },
    {
      name: "Ayushi Singh",
      role: "Operations Head",
      image: team4,
      social: {
        linkedin: "https://linkedin.com/in/amit",
        twitter: "https://twitter.com/amit",
        email: "mailto:amit@jaynirmala.com"
      }
    },
    
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-[#FDB813]/10 text-[#FDB813] font-semibold text-sm rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A4A] mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Experienced professionals dedicated to your financial well-being
          </p>
          <div className="w-20 h-1 bg-[#FDB813] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Team Grid - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay with social icons on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B2A4A] hover:bg-[#FDB813] hover:text-white transition-colors"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B2A4A] hover:bg-[#FDB813] hover:text-white transition-colors"
                  >
                    <FaTwitter size={16} />
                  </a>
                  <a
                    href={member.social.email}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B2A4A] hover:bg-[#FDB813] hover:text-white transition-colors"
                  >
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0B2A4A] mb-1">{member.name}</h3>
                <p className="text-[#FDB813] font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional bottom note */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Our leadership team brings decades of combined experience in finance.</p>
        </div>
      </div>
    </section>
  );
};

export default Team;