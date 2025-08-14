import React, { useState, useEffect } from 'react';
import { Eye, Target, Shield, ChevronRight, Activity, Lock, Zap, Satellite } from 'lucide-react';

const GammaProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  const products = [
    {
      id: "GDS-001",
      name: "SkyEye-X1",
      type: "TACTICAL RECONNAISSANCE",
      description: "Long-range surveillance platform with AI-powered analytics for tactical operations",
      image: Eye,
      specs: {
        range: "50+ KM",
        endurance: "8+ HOURS", 
        payload: "4.5 KG",
        altitude: "8000 M"
      },
      capabilities: [
        "Day/Night Vision Systems",
        "AI Video Analytics", 
        "Real-time Communications",
        "Encrypted Data Transmission"
      ],
      status: "OPERATIONAL",
      color: "#14b8a6"
    },
    {
      id: "GDS-002", 
      name: "Falcon-R",
      type: "RAPID DEPLOYMENT",
      description: "Compact tactical drone optimized for intelligence operations in hostile environments",
      image: Target,
      specs: {
        range: "15 KM",
        endurance: "45 MIN",
        payload: "1.2 KG", 
        altitude: "3000 M"
      },
      capabilities: [
        "Stealth Operations Mode",
        "Urban Warfare Ready",
        "Quick Deployment System",
        "Advanced Threat Detection"
      ],
      status: "ACTIVE",
      color: "#06d6a0"
    },
    {
      id: "GDS-003",
      name: "Orion-HS", 
      type: "HEAVY LIFT TRANSPORT",
      description: "Heavy-duty aerial platform for equipment transport and logistical support missions",
      image: Shield,
      specs: {
        range: "100 KM",
        endurance: "6 HOURS",
        payload: "25 KG",
        altitude: "5000 M" 
      },
      capabilities: [
        "Heavy Payload Capacity",
        "GPS Precision Landing",
        "Autonomous Navigation",
        "All-Weather Operations"
      ],
      status: "STANDBY",
      color: "#4ade80"
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Satellite className="text-teal-400" size={20} />
            <span className="text-white font-mono tracking-wider">GAMMA DEFENCE SYSTEMS</span>
          </div>
          
          <h2 className="text-6xl font-black text-white mb-4">
            TACTICAL <span style={{ color: '#14b8a6' }}>ARSENAL</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced unmanned aerial systems engineered for modern warfare and defense operations
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`px-6 py-3 font-mono text-sm transition-all duration-300 ${
                  activeProduct === index 
                    ? 'text-black border border-teal-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ 
                  backgroundColor: activeProduct === index ? '#14b8a6' : 'transparent'
                }}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Product Visualization */}
          <div className="relative">
            
            {/* Main Product Card */}
            <div 
              className="relative p-8 border-2 border-gray-600 backdrop-blur-sm"
              style={{ 
                backgroundColor: '#1b4242',
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
              }}
            >
              
              {/* Product Header */}
              <div className="text-center mb-8">
                <div className="text-gray-400 font-mono text-sm mb-2">{currentProduct.id}</div>
                <h3 className="text-4xl font-bold text-white mb-2">{currentProduct.name}</h3>
                <div className="text-teal-400 font-mono text-lg tracking-wider">{currentProduct.type}</div>
              </div>

              {/* Central Icon with Animation */}
              <div className="relative flex justify-center mb-8">
                <div className="relative">
                  
                  {/* Pulsing Background */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-teal-400/30"
                    style={{
                      width: '200px',
                      height: '200px',
                      transform: `scale(${1 + Math.sin(pulseAnimation * 0.1) * 0.1})`,
                      background: `radial-gradient(circle, ${currentProduct.color}20 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Inner Ring */}
                  <div className="absolute inset-4 rounded-full border border-gray-500" />
                  
                  {/* Product Icon */}
                  <div className="relative w-48 h-48 rounded-full border-2 border-teal-400 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
                    <currentProduct.image size={80} style={{ color: currentProduct.color }} />
                  </div>
                  
                  {/* Rotating Elements */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-8 bg-teal-400"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45 + dataFlow * 2}deg) translateY(-120px)`,
                        transformOrigin: '1px 120px',
                        opacity: 0.6
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 bg-green-500/10">
                  <Activity size={16} className="text-green-400" />
                  <span className="text-green-400 font-mono text-sm">{currentProduct.status}</span>
                </div>
              </div>
            </div>

            {/* Floating Spec Cards */}
            <div 
              className="absolute -top-6 -right-6 p-4 border border-gray-600 backdrop-blur-sm"
              style={{ backgroundColor: '#1b4242' }}
            >
              <div className="text-teal-400 font-mono text-xs">MAX RANGE</div>
              <div className="text-white font-bold text-lg">{currentProduct.specs.range}</div>
            </div>
            
            <div 
              className="absolute -bottom-6 -left-6 p-4 border border-gray-600 backdrop-blur-sm"
              style={{ backgroundColor: '#1b4242' }}
            >
              <div className="text-teal-400 font-mono text-xs">ENDURANCE</div>
              <div className="text-white font-bold text-lg">{currentProduct.specs.endurance}</div>
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="space-y-8">
            
            {/* Description */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Mission Profile</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{currentProduct.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(currentProduct.specs).map(([key, value]) => (
                <div key={key} className="p-4 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
                  <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">{key}</div>
                  <div className="text-white font-bold text-xl mt-1">{value}</div>
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock size={20} className="text-teal-400" />
                Core Capabilities
              </h4>
              <div className="space-y-3">
                {currentProduct.capabilities.map((capability, index) => (
                  <div key={capability} className="flex items-center gap-3 p-3 border border-gray-600/50" style={{ backgroundColor: '#000000' }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentProduct.color }} />
                    <span className="text-gray-300 font-mono">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button 
                className="flex items-center gap-3 px-8 py-4 text-black font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ 
                  backgroundColor: '#14b8a6',
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
                }}
              >
                REQUEST BRIEFING
                <ChevronRight size={20} />
              </button>
              
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-white font-bold hover:border-teal-400 hover:text-teal-400 transition-all duration-300">
                <Zap size={20} />
                TECHNICAL SPECS
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