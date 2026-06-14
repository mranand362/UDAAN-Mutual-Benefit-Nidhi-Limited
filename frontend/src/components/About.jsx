import React from "react";
import { FaUsers, FaBolt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";
import about4 from "../assets/images/about4.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2A4A] mb-2">ABOUT US</h2>
          <div className="w-16 h-1 bg-[#FDB813] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Images - Simple Grid */}
          <div className="grid grid-cols-2 gap-3">
            <img src={about1} alt="about" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={about2} alt="about" className="w-full h-48 object-cover rounded-lg shadow-md mt-6" />
            <img src={about3} alt="about" className="w-full h-48 object-cover rounded-lg shadow-md -mt-6" />
            <img src={about4} alt="about" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B2A4A] mb-4">
              UDAAN MUTUAL BENEFIT NIDHI LIMITED
            </h3>
            
            <p className="text-gray-600 mb-4">
              UDAAN Nidhi Limited caters to the diverse financial needs of its members. 
              We are a Nidhi company incorporated under the Companies Act 2013 & regulated 
              by Ministry of Corporate Affairs, Government of India.
            </p>

            {/* SAVE Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-[#FDB813] font-bold">SAVE</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* Features */}
            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#FDB813]" />
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-[#FDB813]" />
                <span className="font-medium">Fast Service</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              We are a company run by professionals with rich experience in financial services industry. 
              The main objective is to cultivate the habit of thrift and savings among its members.
            </p>

            {/* Internal Navigation Button */}
            <button
              onClick={() => navigate("/aboutus")}
              className="flex items-center gap-2 bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-semibold hover:bg-[#0B2A4A] hover:text-white transition-colors"
            >
              Learn More
              <FaArrowRight className="text-sm" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;