import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// ✅ Import images (update paths if needed)
import monthlyIncomeImg from "../assets/images/monthly-income-plan.png";
import savingsAccountImg from "../assets/images/saving-account.png";
import goldLoanImg from "../assets/images/gold-loan.png";
import loanAgainstDepositImg from "../assets/images/loan-against-deposit.png";
import propertyLoanImg from "../assets/images/property-loan.png";
import loanAgainstPolicyImg from "../assets/images/loan-against-policy.png";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Monthly Income Plan",
      description:
        "Suitable for investors who want to earn a regular fixed income at a certain interest rate every month.",
      image: monthlyIncomeImg,
      path: "/apply/monthly-income-plan", // unique path
    },
    {
      title: "Savings Account",
      description:
        "Save your hard-earned money with us and earn attractive interest on your savings securely.",
      image: savingsAccountImg,
      path: "/apply/savings-account",
    },
    {
      title: "Gold Loan",
      description:
        "Apply for a gold loan and get quick credit disbursed to your account within minutes.",
      image: goldLoanImg,
      path: "/apply/gold-loan",
    },
    {
      title: "Loan Against Deposit",
      description:
        "Get instant funds by availing a loan against your fixed or recurring deposits.",
      image: loanAgainstDepositImg,
      path: "/apply/loan-against-deposit",
    },
    {
      title: "Property Loan",
      description:
        "Fulfill your dream of owning property with our flexible and affordable loan solutions.",
      image: propertyLoanImg,
      path: "/apply/property-loan",
    },
    {
      title: "Loan Against Policy",
      description:
        "Unlock the value of your insurance policy by availing a quick and hassle-free loan.",
      image: loanAgainstPolicyImg,
      path: "/apply/loan-against-policy",
    },
  ];

  return (
    <section className="py-20 bg-[#f3f3f3]">
      <div className="container mx-auto px-4">

        {/* ===== Section Header ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mb-4 relative inline-block">
            Our Services
            <span className="block w-20 h-1 bg-[#FDB813] mx-auto mt-3 rounded-full"></span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            We offer the following deposit and loan schemes to our members.
          </p>
        </div>

        {/* ===== Services Grid ===== */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />

                {/* Curved Shape */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white group-hover:bg-[#0B2A4A] transition-all duration-500 rounded-t-[100%] h-20"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white group-hover:bg-[#0B2A4A] transition-all duration-500 px-6 pb-10 pt-6 rounded-b-3xl shadow-md">
                
                <h3 className="text-2xl font-bold text-[#6B3E12] group-hover:text-white mb-4 transition-all duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed mb-6 transition-all duration-500">
                  {service.description}
                </p>

                {/* Button - now navigates to service-specific path */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => navigate(service.path)}
                    className="w-14 h-14 bg-[#FDB813] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;