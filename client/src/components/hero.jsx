import React, { useState, useEffect } from 'react';
import { Play, Zap, Crosshair, Radar, Signal, Target, ArrowRight, Power } from 'lucide-react';
import { Link } from 'react-router-dom';
const FuturisticDroneHero = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [activeSystem, setActiveSystem] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0, alt: 0 });

  const systems = [
    { name: "NAVIGATION", status: "ONLINE", value: "GPS LOCKED" },
    { name: "CAMERA", status: "ACTIVE", value: "4K/60FPS" },
    { name: "BATTERY", status: "OPTIMAL", value: "98%" },
    { name: "SENSORS", status: "READY", value: "ALL CLEAR" }
  ];

  // Scanning animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 100);
      if (scanProgress % 25 === 0) {
        setActiveSystem((prev) => (prev + 1) % systems.length);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [scanProgress, systems.length]);

  // Coordinate simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates({
        lat: 40.7128 + (Math.random() - 0.5) * 0.001,
        lng: -74.0060 + (Math.random() - 0.5) * 0.001,
        alt: 120 + Math.random() * 20
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(27, 66, 66, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27, 66, 66, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
            style={{
              top: `${scanProgress}%`,
              transition: 'top 0.05s linear',
              boxShadow: '0 0 20px #14b8a6'
            }}
          />
          <div 
            className="h-full w-1 bg-gradient-to-b from-transparent via-teal-500 to-transparent"
            style={{
              left: `${(scanProgress * 1.5) % 100}%`,
              transition: 'left 0.05s linear',
              boxShadow: '0 0 20px #14b8a6'
            }}
          />
        </div>
      </div>

      {/* HUD Interface Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-8 min-h-screen">
        
        {/* Top HUD Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 p-3 sm:p-4 border border-teal-500/30 bg-black/50 backdrop-blur-sm gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-teal-500 font-mono text-xs sm:text-sm">DRONE_SYS_V2.1</span>
            </div>
            <div className="text-white/60 font-mono text-xs">
              {new Date().toLocaleTimeString()} UTC
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <div className="text-teal-500 font-mono text-xs sm:text-sm">
              <span className="hidden md:inline">LAT: {coordinates.lat.toFixed(4)}° | LNG: {coordinates.lng.toFixed(4)}° | ALT: {coordinates.alt.toFixed(1)}m</span>
              <span className="md:hidden">{coordinates.lat.toFixed(2)}°, {coordinates.lng.toFixed(2)}°</span>
            </div>
            <Signal className="text-green-400" size={16} />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Left Panel - Systems Status */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-4 sm:p-6">
              <h3 className="text-teal-500 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Radar size={16} className="sm:hidden" />
                <Radar size={20} className="hidden sm:block" />
                SYSTEM STATUS
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {systems.map((system, index) => (
                  <div 
                    key={system.name}
                    className={`p-2 sm:p-3 border transition-all duration-300 ${
                      activeSystem === index 
                        ? 'border-teal-500 bg-teal-500/10' 
                        : 'border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-mono text-xs sm:text-sm">{system.name}</span>
                      <span className={`text-xs font-mono ${
                        system.status === 'ONLINE' || system.status === 'ACTIVE' || system.status === 'OPTIMAL' || system.status === 'READY'
                          ? 'text-green-400' 
                          : 'text-yellow-400'
                      }`}>
                        {system.status}
                      </span>
                    </div>
                    <div className="text-teal-500 font-mono text-xs mt-1">{system.value}</div>
                  </div>
                ))}
              </div>
              
              {/* Scan Progress */}
              <div className="mt-4 sm:mt-6">
                <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                  <span>ENVIRONMENT SCAN</span>
                  <span>{scanProgress}%</span>
                </div>
                <div className="w-full bg-white/20 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-green-400 transition-all duration-75"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Flight Parameters */}
            <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-4 sm:p-6">
              <h3 className="text-teal-500 font-mono text-base sm:text-lg mb-3 sm:mb-4">FLIGHT PARAMS</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm font-mono">
                <div>
                  <div className="text-white/60">MAX SPEED</div>
                  <div className="text-white">68 MPH</div>
                </div>
                <div>
                  <div className="text-white/60">RANGE</div>
                  <div className="text-white">10 KM</div>
                </div>
                <div>
                  <div className="text-white/60">CEILING</div>
                  <div className="text-white">6000 M</div>
                </div>
                <div>
                  <div className="text-white/60">ENDURANCE</div>
                  <div className="text-white">35 MIN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel - Main Display */}
          <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-8 order-1 lg:order-2 py-8 sm:py-12">
            
            {/* Main Title with HUD styling */}
            <div className="text-center">
              <div className="text-teal-500 font-mono text-xs sm:text-sm mb-2">[ AUTONOMOUS FLIGHT SYSTEM ]</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono">
                <span className="block">DRONE</span>
                <span className="block text-teal-500">X-7 PRO</span>
              </h1>
              <div className="text-white/60 font-mono text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm lg:max-w-md px-4 sm:px-0">
                Next-generation autonomous aerial platform with advanced AI navigation and 4K imaging capabilities
              </div>
            </div>

            {/* Central Drone Visualization */}
            <div className="relative">
              {/* Targeting Reticle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Crosshair size={150} className="sm:hidden text-teal-500/30 animate-spin" style={{ animationDuration: '10s' }} />
                <Crosshair size={200} className="hidden sm:block text-teal-500/30 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              
              {/* Inner Targeting Circle */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 border-2 border-teal-500/50 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 border border-white/30 rounded-full flex items-center justify-center">
                  <Target size={32} className="sm:hidden text-white" />
                  <Target size={48} className="hidden sm:block text-white" />
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-teal-500"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-teal-500"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-teal-500"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-teal-500"></div>
              </div>
              
              {/* Rotating Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute top-0 left-1/2 w-1 h-8 sm:h-12 bg-teal-500 transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-8 sm:h-12 bg-teal-500 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 h-1 w-8 sm:w-12 bg-teal-500 transform -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 h-1 w-8 sm:w-12 bg-teal-500 transform -translate-y-1/2"></div>
              </div>
            </div>

            {/* Action Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none px-4 sm:px-0">
  <Link 
    to="/products"
    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 border-2 border-teal-500 text-teal-500 font-mono font-bold hover:bg-teal-500 hover:text-black transition-all duration-300 text-sm sm:text-base"
    style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)' }}
  >
    DEPLOY DRONE
    <ArrowRight size={16} className="sm:hidden group-hover:translate-x-1 transition-transform" />
    <ArrowRight size={20} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
  </Link>
  
  <Link 
    to="/about"
    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 border border-white/30 text-white font-mono hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-sm sm:text-base"
  >
    <Play size={16} className="sm:hidden" />
    <Play size={20} className="hidden sm:block" />
    VIEW DEMO
  </Link>
</div>
          </div>

          {/* Right Panel - Technical Specs */}
          <div className="space-y-4 sm:space-y-6 order-3">
            
            {/* Radar Display */}
            <div className="border backdrop-blur-sm p-4 sm:p-6" style={{ borderColor: '#14b8a6', backgroundColor: '#1b4242' }}>
              <h3 className="font-mono text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#14b8a6' }}>RADAR SWEEP</h3>
              <div className="relative w-full h-32 sm:h-40">
                <div className="absolute inset-0 border border-green-400/30 rounded-full"></div>
                <div className="absolute inset-3 sm:inset-4 border border-green-400/20 rounded-full"></div>
                <div className="absolute inset-6 sm:inset-8 border border-green-400/20 rounded-full"></div>
                
                {/* Sweep Line */}
                <div 
                  className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-green-400 origin-left animate-spin"
                  style={{ transformOrigin: '0 50%', animationDuration: '3s' }}
                />
                
                {/* Blips */}
                <div className="absolute top-6 sm:top-8 right-8 sm:right-12 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 sm:bottom-12 left-12 sm:left-16 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="border backdrop-blur-sm p-4 sm:p-6" style={{ borderColor: '#14b8a6', backgroundColor: '#1b4242' }}>
              <h3 className="font-mono text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#14b8a6' }}>TECH SPECS</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-white/60">PROCESSOR:</span>
                  <span className="text-white text-right">QUANTUM AI CHIP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">CAMERA:</span>
                  <span className="text-white text-right">4K GIMBAL STAB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">SENSORS:</span>
                  <span className="text-white text-right">360° LIDAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">MATERIAL:</span>
                  <span className="text-white text-right">CARBON FIBER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">WEIGHT:</span>
                  <span className="text-white text-right">899G</span>
                </div>
              </div>
            </div>

            {/* Mission Control */}
            <div className="border backdrop-blur-sm p-4 sm:p-6" style={{ borderColor: '#14b8a6', backgroundColor: '#1b4242' }}>
              <h3 className="font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2" style={{ color: '#14b8a6' }}>
                <Power size={16} className="sm:hidden" />
                <Power size={20} className="hidden sm:block" />
                MISSION CTRL
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full p-2 sm:p-3 border border-green-400/50 text-green-400 font-mono text-xs sm:text-sm hover:bg-green-400/10 transition-colors">
                  LAUNCH SEQUENCE
                </button>
                <button className="w-full p-2 sm:p-3 border border-yellow-400/50 text-yellow-400 font-mono text-xs sm:text-sm hover:bg-yellow-400/10 transition-colors">
                  PATROL MODE
                </button>
                <button className="w-full p-2 sm:p-3 border border-red-400/50 text-red-400 font-mono text-xs sm:text-sm hover:bg-red-400/10 transition-colors">
                  EMERGENCY RTH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default FuturisticDroneHero;