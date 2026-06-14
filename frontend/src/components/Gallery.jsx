import React, { useState } from "react";
import { 
  Image, Camera, Video, Sparkles, X,
  ArrowRight, Heart, Download, Maximize2,
  Grid, Layers, ThumbsUp, Share2
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedImages, setLikedImages] = useState([]);

  // Gallery data with AI-generated images
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format",
      title: "Head Office Building",
      category: "office",
      date: "2024",
      description: "Our modern headquarters in Villupuram",
      likes: 45
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format",
      title: "Team Meeting",
      category: "team",
      date: "2024",
      description: "Quarterly planning session with our team",
      likes: 32
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop&auto=format",
      title: "Customer Service Desk",
      category: "service",
      date: "2024",
      description: "Helping members with their financial needs",
      likes: 28
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format",
      title: "Branch Interior",
      category: "office",
      date: "2023",
      description: "Modern and welcoming branch design",
      likes: 56
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1573164713988-9665fc2f7a9c?w=600&h=400&fit=crop&auto=format",
      title: "Staff Training",
      category: "team",
      date: "2024",
      description: "Professional development workshop",
      likes: 23
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop&auto=format",
      title: "Community Event",
      category: "events",
      date: "2023",
      description: "Financial literacy camp for villagers",
      likes: 67
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format",
      title: "Award Ceremony",
      category: "events",
      date: "2024",
      description: "Recognizing outstanding performance",
      likes: 41
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
      title: "Digital Services",
      category: "service",
      date: "2024",
      description: "Online banking demonstration",
      likes: 19
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format",
      title: "Corporate Office",
      category: "office",
      date: "2024",
      description: "Executive wing and boardroom",
      likes: 34
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format",
      title: "Team Building",
      category: "team",
      date: "2023",
      description: "Annual team building activity",
      likes: 52
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&h=400&fit=crop&auto=format",
      title: "Customer Meet",
      category: "events",
      date: "2024",
      description: "Member appreciation event",
      likes: 38
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop&auto=format",
      title: "Service Excellence",
      category: "service",
      date: "2024",
      description: "Dedicated customer support team",
      likes: 27
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", icon: <Grid className="w-4 h-4" /> },
    { id: "office", label: "Office", icon: <Camera className="w-4 h-4" /> },
    { id: "team", label: "Team", icon: <Camera className="w-4 h-4" /> },
    { id: "service", label: "Services", icon: <Camera className="w-4 h-4" /> },
    { id: "events", label: "Events", icon: <Video className="w-4 h-4" /> }
  ];

  const stats = [
    { value: "50+", label: "Photos", icon: <Image className="w-4 h-4" /> },
    { value: "8+", label: "Years", icon: <Layers className="w-4 h-4" /> },
    { value: "5", label: "Categories", icon: <Grid className="w-4 h-4" /> },
    { value: "1000+", label: "Views", icon: <ThumbsUp className="w-4 h-4" /> }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleLike = (id, e) => {
    e.stopPropagation();
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter(imgId => imgId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB813]/10 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-[#FDB813]" />
            <span className="text-[#FDB813] font-medium text-sm">Our Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-3">Moments & Memories</h1>
          <p className="text-base sm:text-lg text-gray-600">
            A glimpse into our journey, team, and the communities we serve
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-[#0B2A4A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-medium text-sm">{item.title}</h3>
                    <p className="text-gray-300 text-xs mt-1">{item.date}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-2 left-2 bg-[#FDB813] text-[#0B2A4A] text-[10px] px-2 py-1 rounded-full font-medium">
                  {item.category}
                </span>

                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(item.id, e)}
                  className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 hover:bg-[#FDB813] transition-colors group/btn"
                >
                  <Heart className={`w-4 h-4 ${
                    likedImages.includes(item.id) 
                      ? "fill-red-500 text-red-500" 
                      : "text-gray-600"
                  } group-hover/btn:text-white`} />
                </button>
              </div>

              {/* Image Info */}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-[#0B2A4A]">{item.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Heart className="w-3 h-3" />
                    <span>{item.likes + (likedImages.includes(item.id) ? 1 : 0)}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-[#FDB813] text-[#0B2A4A] px-8 py-3 rounded-lg font-medium hover:bg-[#0B2A4A] hover:text-white transition-all hover:scale-105 shadow-md inline-flex items-center gap-2">
            Load More Photos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { icon: <Image className="w-4 h-4" />, text: "High Quality", color: "text-blue-600 bg-blue-100" },
            { icon: <Camera className="w-4 h-4" />, text: "Professional", color: "text-green-600 bg-green-100" },
            { icon: <Heart className="w-4 h-4" />, text: "Moments", color: "text-red-600 bg-red-100" },
            { icon: <Share2 className="w-4 h-4" />, text: "Share", color: "text-purple-600 bg-purple-100" }
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-xl p-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-default`}>
              <span>{item.icon}</span>
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-[#0B2A4A] to-[#1a3a5a] rounded-xl p-6 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-white mb-2">Want to See More?</h3>
            <p className="text-sm text-gray-300 mb-4">Visit our office or follow us on social media</p>
            <button className="bg-[#FDB813] text-[#0B2A4A] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-md">
              Follow Us
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-[#FDB813] hover:rotate-90 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium text-lg">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-sm">{selectedImage.description}</p>
                  <p className="text-[#FDB813] text-xs mt-1">{selectedImage.date} • {selectedImage.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(selectedImage.id, e);
                    }}
                    className="bg-white/10 p-2 rounded-full hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all"
                  >
                    <Heart className={`w-5 h-5 ${
                      likedImages.includes(selectedImage.id) ? "fill-red-500 text-red-500" : "text-white"
                    }`} />
                  </button>
                  <button className="bg-white/10 p-2 rounded-full hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all">
                    <Download className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FDB813] hover:text-[#0B2A4A] transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;