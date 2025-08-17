import React, { useState, useEffect } from 'react';
import { Eye, Target, Shield, ChevronRight, Activity, Lock, Zap, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images from your data file
import img from '../assets/12.png' // SkyEye-X1
import img10 from '../assets/3.png' // Stratos
import img4 from '../assets/9.png' // Sentinel-4X
import img6 from '../assets/7.png' // AegisNet

const GammaProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  const products = [
    {
      id: "GDS-001",
      name: "SkyEye-X1",
      type: "TACTICAL RECONNAISSANCE",
      description: "Long-range tactical UAV equipped with HD day/night vision, laser designator and AI-powered video analytics for strategic reconnaissance",
      image: img,
      imageIcon: Eye,
      specs: {
        range: "250 KM",
        endurance: "18 HOURS", 
        payload: "60 KG",
        altitude: "8000 M"
      },
      capabilities: [
        "Real-time video analytics with target detection",
        "Dual communication systems (LOS & SATCOM)", 
        "Laser designation capability",
        "Extended 18-hour endurance"
      ],
      status: "OPERATIONAL",
      color: "#14b8a6"
    },
    {
      id: "GDS-002", 
      name: "Stratos 🚀",
      type: "STRATOSPHERIC HALE UAV (FLAGSHIP)",
      description: "Revolutionary stratospheric UAV providing satellite-like persistent operations with 90-day endurance and 1000km communication coverage",
      image: img10,
      imageIcon: Target,
      specs: {
        altitude: "25,000 M",
        endurance: "90 DAYS",
        coverage: "1000 KM", 
        payload: "500 KG"
      },
      capabilities: [
        "Stratospheric operation at 25km altitude",
        "Unprecedented 90-day continuous endurance",
        "Satellite-like coverage at fraction of cost",
        "1000km secure communication radius"
      ],
      status: "DEVELOPMENT",
      color: "#06d6a0"
    },
    {
      id: "GDS-003",
      name: "Sentinel-4X", 
      type: "AUTONOMOUS RECONNAISSANCE",
      description: "Fully autonomous ground vehicle for long-range reconnaissance with 1-ton payload capacity and multi-sensor suite",
      image: img4,
      imageIcon: Shield,
      specs: {
        speed: "80 KM/H",
        range: "600 KM",
        payload: "1000 KG",
        battery: "24 HOURS" 
      },
      capabilities: [
        "Extended 600km operational range",
        "Heavy 1-ton payload capacity",
        "Multi-mode operation (RC/Autonomous)",
        "Comprehensive sensor suite"
      ],
      status: "ACTIVE",
      color: "#4ade80"
    },
    {
      id: "GDS-004",
      name: "AegisNet", 
      type: "AI COMMAND & CONTROL",
      description: "Advanced AI-powered command and control system integrating multi-domain data fusion with predictive modeling and automated decision support",
      image: img6,
      imageIcon: Eye,
      specs: {
        processing: "QUANTUM AI",
        response: "< 100MS",
        users: "500+",
        fusion: "MULTI-DOMAIN" 
      },
      capabilities: [
        "Multi-domain data fusion capability",
        "Real-time threat analysis and assessment",
        "Predictive modeling for threat anticipation",
        "Quantum-enhanced processing power"
      ],
      status: "ACTIVE",
      color: "#8b5cf6"
    }
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => (prev + 1) % 100);
      setDataFlow(prev => (prev + 2) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[activeProduct];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4242' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 15s ease-in-out infinite'
          }}
        />
      </div>

      {/* Flowing Data Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: `${(dataFlow + i * 20) % 120 - 20}%`,
              width: '30%',
              animation: `flow ${3 + i}s linear infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 mb-4 sm:mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Satellite className="text-teal-400" size={16} />
            <span className="text-white font-mono tracking-wider text-sm sm:text-base">GAMMA DEFENCE SYSTEMS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            TACTICAL <span style={{ color: '#14b8a6' }}>ARSENAL</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Advanced defense systems engineered for modern warfare and tactical operations
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row gap-2 p-2 border border-gray-600 w-full sm:w-auto" style={{ backgroundColor: '#1b4242' }}>
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm transition-all duration-300 ${
                  activeProduct === index 
                    ? 'text-black border border-teal-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ 
                  backgroundColor: activeProduct === index ? '#14b8a6' : 'transparent'
                }}
              >
                <span className="hidden sm:inline">{product.name}</span>
                <span className="sm:hidden">{product.name.split('-')[0] || product.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left: Product Image Only */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative">
              {/* Pulsing Background */}
              <div 
                className="absolute inset-0"
                style={{
                  width: '400px',
                  height: '300px',
                  transform: `scale(${1 + Math.sin(pulseAnimation * 0.1) * 0.05})`,
                  background: `radial-gradient(ellipse, ${currentProduct.color}15 0%, transparent 70%)`
                }}
              />
              
              {/* Product Image - Direct Display */}
              <img 
                src={currentProduct.image} 
                alt={currentProduct.name}
                className="w-80 h-60 sm:w-96 sm:h-72 lg:w-[400px] lg:h-80 object-contain relative z-10"
                style={{ 
                  filter: `drop-shadow(0 0 20px ${currentProduct.color}80) drop-shadow(0 0 40px ${currentProduct.color}40)`
                }}
              />
              
              {/* Special Flagship Badge for Stratos */}
              {currentProduct.name.includes('🚀') && (
                <div className="absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xs rounded-full border-2 border-yellow-400 shadow-lg">
                  FLAGSHIP
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 px-4 sm:px-0">
            
            {/* Product Type Badge */}
            <div className="inline-block px-4 py-2 border border-gray-600 text-gray-300 font-mono text-xs tracking-wider" style={{ backgroundColor: '#1b4242' }}>
              {currentProduct.type}
            </div>
            
            {/* Description */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Mission Profile</h4>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{currentProduct.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {Object.entries(currentProduct.specs).map(([key, value]) => (
                <div key={key} className="p-3 sm:p-4 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
                  <div className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wider">{key}</div>
                  <div className="text-white font-bold text-sm sm:text-xl mt-1">{value}</div>
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Lock size={16} className="sm:hidden text-teal-400" />
                <Lock size={20} className="hidden sm:block text-teal-400" />
                Core Capabilities
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {currentProduct.capabilities.map((capability, index) => (
                  <div key={capability} className="flex items-center gap-3 p-2 sm:p-3 border border-gray-600/50" style={{ backgroundColor: '#000000' }}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: currentProduct.color }} />
                    <span className="text-gray-300 font-mono text-sm sm:text-base">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-teal-400" />
                <span className="text-gray-400 font-mono text-sm">STATUS:</span>
                <span 
                  className="px-3 py-1 font-bold text-xs rounded-full"
                  style={{ 
                    backgroundColor: currentProduct.status === 'OPERATIONAL' ? '#10b981' : 
                                   currentProduct.status === 'ACTIVE' ? '#06d6a0' : '#f59e0b',
                    color: '#000000'
                  }}
                >
                  {currentProduct.status}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button 
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-black font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
                style={{ 
                  backgroundColor: '#14b8a6',
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
                }}
              >
                REQUEST BRIEFING
                <ChevronRight size={16} className="sm:hidden" />
                <ChevronRight size={20} className="hidden sm:block" />
              </button>
              
              <button 
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white font-bold hover:border-teal-400 hover:text-teal-400 transition-all duration-300 text-sm sm:text-base"
              >
                <Zap size={16} className="sm:hidden" />
                <Zap size={20} className="hidden sm:block" />
                <span className="hidden sm:inline">TECHNICAL SPECS</span>
                <span className="sm:hidden">SPECS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default GammaProductsSection;