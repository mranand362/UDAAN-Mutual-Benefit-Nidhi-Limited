import React from "react";
import { 
  FaStar, FaUsers, FaHeadset, FaShieldAlt, 
  FaHandshake, FaRegCheckCircle, FaQuoteRight ,FaSearchDollar 
} from "react-icons/fa";

const Why = () => {
  const reasons = [
    {
      icon: <FaStar className="text-2xl" />,
      title: "Easy to Understand, Easy to Trust",
      description: "We use simple language and clear steps — no confusing jargon or hidden details. You always know what you're signing up for."
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Experienced Team",
      description: "Our team has strong experience in mutual benefit funds and financial services. We focus on helping you make smart financial choices."
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Customer-First Service",
      description: "You matter most. We listen to your goals and offer support that is tailored to you, not one-size-fits-all."
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Transparent and Honest",
      description: "We believe in transparency — clear pricing, clear policies, and honest advice you can rely on."
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trusted by Clients",
      description: "People choose us because we are dependable, friendly, and focused on their financial well-being."
    },
    {
    icon: <FaSearchDollar  className="text-2xl" />,
    title: "Secure Returns",
    description: "We prioritize the safety of your investments and aim to deliver consistent, reliable returns with minimal risk."
  },
    
    
  ];

  const stats = [
    { value: "5000+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Transparency" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB813] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2A4A] rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#FDB813]/10 text-[#FDB813] font-semibold text-sm rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2A4A] mb-4">
            WHY UDAAN?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At  Udaan Mutual Benefit Fund Limited, we are committed to helping you 
            with honest, trusted, and personalized financial support.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#0B2A4A] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#FDB813]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDB813] transition-colors">
                  <div className="text-[#FDB813] group-hover:text-white transition-colors">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-2 flex items-center gap-2">
                    <FaRegCheckCircle className="text-[#FDB813] text-lg" />
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial / Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full">
            <FaQuoteRight className="text-[#FDB813]" />
            <span className="text-gray-600">Trusted by over 5,000 members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;