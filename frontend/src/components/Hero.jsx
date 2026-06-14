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
    <section className="relative w-full h-screen overflow-hidden bg-[#0B2A4A]">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="w-full lg:w-3/5">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 block"
                    : "opacity-0 -translate-x-8 hidden"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-[#FDB813] rounded-full mr-2"></span>
                  <span className="text-[#FDB813] text-xs font-medium tracking-wider">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {slide.title}
                </h1>

                {/* Highlight */}
                <p className="text-base sm:text-lg text-[#FDB813] mb-3">{slide.highlight}</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-200 mb-6 max-w-lg">
                  {slide.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {slide.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className="text-[#FDB813]">{stat.icon}</span>
                      <span className="text-white text-sm font-medium">{stat.value}</span>
                      <span className="text-gray-300 text-xs ml-0.5">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 relative z-20">
                  <Link to={slide.ctaLink}>
                    <button className="bg-[#FDB813] text-[#0B2A4A] px-6 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors">
                      {slide.cta}
                    </button>
                  </Link>
                  <Link to={slide.secondaryLink}>
                    <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
                      {slide.secondaryCta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full items-center justify-center hover:bg-black/50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full items-center justify-center hover:bg-black/50 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(idx);
            }}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentSlide ? "w-6 bg-[#FDB813]" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Mobile Quick Contact */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#0B2A4A]/90 backdrop-blur-sm border-t border-white/10 py-2 px-4 z-20">
        <div className="flex justify-around items-center">
          <a href="tel:+917397782590" className="flex flex-col items-center">
            <Phone className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[10px] text-white/80">Call</span>
          </a>
          <a href="mailto:info@jaynirmala.com" className="flex flex-col items-center">
            <Mail className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[10px] text-white/80">Email</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <MapPin className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[10px] text-white/80">Location</span>
          </a>
        </div>
      </div>

      {/* Touch Handlers */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Loading Indicator */}
      {!imagesLoaded[currentSlide] && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B2A4A] z-50">
          <div className="w-8 h-8 border-2 border-[#FDB813] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};

export default Hero;