import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Target, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';

const FuturisticDroneHero = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  // Simplified scanning animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Coordinate simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates({
        lat: 40.7128 + (Math.random() - 0.5) * 0.001,
        lng: -74.0060 + (Math.random() - 0.5) * 0.001
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      
      {/* Simplified Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 30s linear infinite'
          }}
        />
      </div>
      
      {/* Single Scanning Line */}
      <div className="absolute inset-0 hidden sm:block">
        <div 
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-60"
          style={{
            top: `${scanProgress}%`,
            transition: 'top 0.1s linear',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean HUD Header */}
        <div className="flex justify-between items-center mb-12 sm:mb-16 p-4 border border-teal-500/20 bg-black/30 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-teal-500 font-mono text-sm">GAMMA DEFENCE SYSTEMS</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-teal-400">
            <span>{coordinates.lat.toFixed(4)}°</span>
            <span>{coordinates.lng.toFixed(4)}°</span>
            <Signal size={14} className="text-green-400" />
          </div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500/30 bg-teal-500/5">
              <Target size={16} className="text-teal-500" />
              <span className="text-white font-mono text-sm">NEXT-GEN DEFENSE TECHNOLOGY</span>
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 font-mono leading-tight">
                THE FUTURE OF
                <span className="block text-teal-500">DEFENSE</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                Advanced autonomous systems powered by AI. From unmanned aerial platforms to 
                ground-based defense solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                to="/products"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-teal-500 text-teal-500 font-mono font-bold hover:bg-teal-500 hover:text-black transition-all duration-300"
              >
                EXPLORE SYSTEMS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-mono hover:border-teal-500 hover:text-teal-500 transition-all duration-300"
              >
                <Play size={20} />
                WATCH DEMO
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">50+</div>
                <div className="text-gray-400 text-sm font-mono">ACTIVE SYSTEMS</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">12</div>
                <div className="text-gray-400 text-sm font-mono">COUNTRIES</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">24/7</div>
                <div className="text-gray-400 text-sm font-mono">SUPPORT</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="flex justify-center lg:justify-center lg:pr-12">
            <div className="relative">
              
              {/* Main Circle with Target */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 border border-teal-500/30 rounded-full flex items-center justify-center">
                
                {/* Inner Circles */}
                <div className="absolute inset-8 border border-teal-500/20 rounded-full"></div>
                <div className="absolute inset-16 border border-teal-500/15 rounded-full"></div>
                
                {/* Center Target */}
                <div className="w-24 h-24 border-2 border-white/50 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <Target size={32} className="text-teal-500" />
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-teal-500"></div>
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-teal-500"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-teal-500"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-teal-500"></div>
                
                {/* Rotating Radar Sweep */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
                  <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-teal-500 to-transparent transform -translate-x-1/2"></div>
                </div>
                
                {/* Pulsing Dots */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Scan Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48">
                <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                  <span>SCAN PROGRESS</span>
                  <span>{scanProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-green-400 transition-all duration-100"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default FuturisticDroneHero;