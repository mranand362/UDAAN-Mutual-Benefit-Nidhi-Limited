import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";

import slide1 from "../assets/images/home-page.png";
import slide2 from "../assets/images/customer-satisfaction.jpg";
import slide3 from "../assets/images/doorstep-service.jpg";
import slide4 from "../assets/images/saving-account.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const slides = [
    {
      id: 1,
      image: slide1,
      badge: "CHILD SECURITY",
      title: "Secure Your Child's Future",
      highlight: "Secure the financial future of your children with us",
      description:
        "Plan ahead and ensure your children have a safe and prosperous financial future. Trusted solutions for education and growth.",
      stats: [
        { value: "5000+", label: "Happy Members", icon: <Star className="w-3 h-3" /> },
        { value: "₹50Cr+", label: "Total Deposits", icon: <TrendingUp className="w-3 h-3" /> },
        { value: "15+", label: "Years of Trust", icon: <Shield className="w-3 h-3" /> },
      ],
      cta: "Open an Account",
      ctaLink: "/account",
      secondaryCta: "Learn More",
      secondaryLink: "/about",
    },
    {
      id: 2,
      image: slide2,
      badge: "CUSTOMER FIRST",
      title: "Customer Satisfaction",
      highlight: "Customer Satisfaction",
      description:
        "Our top priority is your satisfaction. Enjoy personalized attention and seamless service with every interaction.",
      stats: [
        { value: "9.5%", label: "Interest Rate", icon: <Star className="w-3 h-3" /> },
        { value: "Flexible", label: "Tenure Options", icon: <TrendingUp className="w-3 h-3" /> },
        { value: "AAA", label: "Rating", icon: <Shield className="w-3 h-3" /> },
      ],
      cta: "View Rates",
      ctaLink: "/deposits",
      secondaryCta: "Calculate",
      secondaryLink: "/calculator",
    },
    {
      id: 3,
      image: slide3,
      badge: "DOORSTEP SERVICES",
      title: "Easy & Convenient",
      highlight: "Doorstep Services",
      description:
        "Experience our hassle-free services at your doorstep. Saving, depositing, and planning has never been easier.",
      stats: [
        { value: "10.5%", label: "Interest Rate", icon: <Star className="w-3 h-3" /> },
        { value: "24hrs", label: "Approval", icon: <TrendingUp className="w-3 h-3" /> },
        { value: "Minimal", label: "Documentation", icon: <Shield className="w-3 h-3" /> },
      ],
      cta: "Apply Now",
      ctaLink: "/apply",
      secondaryCta: "Check Eligibility",
      secondaryLink: "/eligibility",
    },
    {
      id: 4,
      image: slide4,
      badge: "TRUSTED & RELIABLE",
      title: "Our Commitment",
      highlight: "We are truthful and trustworthy, that’s why we are best",
      description:
        "Our commitment is to honesty, transparency, and best returns. Experience top-notch service and reliable financial solutions.",
      stats: [
        { value: "100%", label: "Transparency", icon: <Star className="w-3 h-3" /> },
        { value: "24/7", label: "Support", icon: <TrendingUp className="w-3 h-3" /> },
        { value: "Govt.", label: "Regulated", icon: <Shield className="w-3 h-3" /> },
      ],
      cta: "Know More",
      ctaLink: "/about",
      secondaryCta: "Contact Us",
      secondaryLink: "/contactus",
    },
  ];

  // Preload images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  // Auto play slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Touch handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const diff = touchStart - touchEnd;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[85vh] md:min-h-[90vh] lg:h-screen overflow-hidden bg-[#0B2A4A]">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: `scale(${index === currentSlide ? 1.05 : 1})`,
              transition: "transform 1s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A]/90 via-[#0B2A4A]/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-0">
        <div className="flex items-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:h-screen">
          <div className="w-full lg:w-3/5 xl:w-2/3">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 block"
                    : "opacity-0 -translate-x-8 hidden"
                }`}
              >
             
                {/* Title - Responsive sizing */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  {slide.title}
                </h1>

                {/* Highlight */}
                <p className="text-sm sm:text-base md:text-lg text-[#FDB813] mb-2 sm:mb-3 font-medium">
                  {slide.highlight}
                </p>

                {/* Description - Hidden on very small screens, shown on larger */}
                <p className="hidden sm:block text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-lg leading-relaxed">
                  {slide.description}
                </p>

                {/* Stats - Responsive grid */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10">
                  {slide.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-1 bg-white/5 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <span className="text-[#FDB813]">{stat.icon}</span>
                      <span className="text-white text-xs sm:text-sm font-bold">{stat.value}</span>
                      <span className="text-gray-300 text-[10px] sm:text-xs">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3 relative z-20">
                  <Link to={slide.ctaLink}>
                    <button className="bg-[#FDB813] text-[#0B2A4A] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                      {slide.cta}
                    </button>
                  </Link>
                  <Link to={slide.secondaryLink}>
                    <button className="border border-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all duration-300">
                      {slide.secondaryCta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/30 backdrop-blur-sm text-white rounded-full items-center justify-center hover:bg-black/50 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/30 backdrop-blur-sm text-white rounded-full items-center justify-center hover:bg-black/50 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>

      {/* Mobile Quick Contact - Floating action bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0B2A4A]/95 backdrop-blur-md border-t border-white/10 py-1 px-4 z-30 shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <a 
            href="tel:+917397782590" 
            className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-[#FDB813]/10 flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
              <Phone className="w-4 h-4 text-[#FDB813]" />
            </div>
            <span className="text-[10px] text-white/70">Call</span>
          </a>
          <a 
            href="mailto:info@jaynirmala.com" 
            className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-[#FDB813]/10 flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
              <Mail className="w-4 h-4 text-[#FDB813]" />
            </div>
            <span className="text-[10px] text-white/70">Email</span>
          </a>
          <a 
            href="#" 
            className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-[#FDB813]/10 flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
              <MapPin className="w-4 h-4 text-[#FDB813]" />
            </div>
            <span className="text-[10px] text-white/70">Branch</span>
          </a>
        </div>
      </div>

      {/* Touch Handlers for Swipe */}
      <div
        className="absolute inset-0 lg:hidden z-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Loading Indicator */}
      {!imagesLoaded[currentSlide] && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B2A4A] z-50">
          <div className="w-8 h-8 border-3 border-[#FDB813] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default Hero;