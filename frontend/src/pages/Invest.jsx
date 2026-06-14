import React from "react";
import {
  TrendingUp,
  Calendar,
  PieChart,
  Users,
  CheckCircle,
  ChevronRight,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Reusable Product Card
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300">
      
      {/* Top Gradient Section */}
      <div className={`bg-gradient-to-r ${product.color} p-6 text-white rounded-t-2xl`}>
        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          {product.icon}
        </div>
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-sm opacity-90 mt-1">{product.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between text-sm text-gray-500">
          <div>
            <span>Interest</span>
            <p className="font-semibold text-[#0B2A4A]">{product.interest}</p>
          </div>
          <div className="text-right">
            <span>Min. Amount</span>
            <p className="font-semibold text-[#FDB813]">{product.minAmount}</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-gray-700">
          {product.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FDB813]" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Invest Button */}
        <button
          onClick={() => navigate(product.path)}
          className="w-full bg-[#0B2A4A] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1a3a5a] transition-colors"
        >
          Invest Now
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const Invest = () => {
  const investmentProducts = [
    {
      id: "fixed-deposit",
      title: "Fixed Deposit",
      description: "Guaranteed returns with flexible tenure.",
      interest: "7.5% - 8.0%",
      minAmount: "₹10,000",
      features: [
        "Quarterly interest payout",
        "Loan up to 90%",
        "Tax saver option",
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      path: "/invest/fixed-deposit",
    },
    {
      id: "recurring-deposit",
      title: "Recurring Deposit",
      description: "Build savings with small monthly investments.",
      interest: "7.0% - 7.5%",
      minAmount: "₹500/month",
      features: [
        "Systematic savings",
        "Flexible installments",
        "Loan facility",
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      path: "/invest/recurring-deposit",
    },
    {
      id: "monthly-income",
      title: "Monthly Income Plan",
      description: "Steady monthly payouts for income seekers.",
      interest: "7.5% - 8.5%",
      minAmount: "₹50,000",
      features: [
        "Monthly payouts",
        "Capital protection",
        "Tax benefits",
      ],
      icon: <PieChart className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      path: "/invest/monthly-income-plan",
    },
    {
      id: "senior-citizen",
      title: "Senior Citizen Plan",
      description: "Higher interest rates with added benefits.",
      interest: "8.0% - 8.5%",
      minAmount: "₹15,000",
      features: [
        "Higher rates",
        "Monthly payouts",
        "Free health check-up",
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      path: "/invest/senior-citizen",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#0B2A4A] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-3">
          Invest Smarter, Grow Faster
        </h1>
        <p className="opacity-90 mb-6">
          Explore curated investment products for your financial goals
        </p>
        <button
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
        >
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#0B2A4A] mb-8">
          Our Investment Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDB813] text-[#0B2A4A] text-center py-10">
        <h4 className="text-2xl font-bold mb-2">
          Ready to grow your wealth?
        </h4>
        <div className="mt-4 flex justify-center items-center gap-2 text-sm">
          <Lock className="w-4 h-4" />
          Secure & Encrypted
        </div>
      </footer>
    </div>
  );
};

export default Invest;