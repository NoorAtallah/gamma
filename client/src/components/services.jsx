import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Radio, Truck, Radar, Satellite, Zap, Lock, Eye, Settings, Globe, Target } from 'lucide-react';

const GammaServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [scanIntensity, setScanIntensity] = useState(0);
  const [systemLoad, setSystemLoad] = useState([]);

  const serviceCategories = [
    {
      id: 'uas',
      title: 'UNMANNED AERIAL SYSTEMS',
      icon: Satellite,
      color: '#14b8a6',
      description: 'Advanced UAV platforms for surveillance, reconnaissance, and tactical operations',
      services: [
        'Long-range reconnaissance missions',
        'Real-time intelligence gathering',
        'Tactical communication relay',
        'Autonomous patrol operations'
      ]
    },
    {
      id: 'agv',
      title: 'AUTONOMOUS GROUND VEHICLES',
      icon: Truck,
      color: '#06d6a0',
      description: 'Unmanned ground systems for reconnaissance and logistics support',
      services: [
        'Equipment transport operations',
        'Reconnaissance in hostile terrain',
        'Perimeter security patrol',
        'Supply line maintenance'
      ]
    },
    {
      id: 'ai-defense',
      title: 'AI-POWERED DEFENCE SYSTEMS',
      icon: Cpu,
      color: '#4ade80',
      description: 'Intelligent command and control systems with real-time decision making',
      services: [
        'Centralized command integration',
        'Multi-platform data fusion',
        'Automated threat assessment',
        'Strategic planning assistance'
      ]
    },
    {
      id: 'comms',
      title: 'TACTICAL COMMUNICATION',
      icon: Radio,
      color: '#10b981',
      description: 'Secure field communication networks for mission-critical operations',
      services: [
        'Encrypted field networks',
        'Long-range transmission',
        'Multi-team coordination',
        'Emergency communication backup'
      ]
    }
  ];

  const innovationProjects = [
    {
      name: 'GAMMA STRATOS',
      type: 'HIGH-ALTITUDE SURVEILLANCE',
      status: 'IN DEVELOPMENT',
      progress: 75,
      icon: Eye
    },
    {
      name: 'GAMMA HYDRA',
      type: 'MARITIME OPERATIONS',
      status: 'PROTOTYPE PHASE',
      progress: 45,
      icon: Globe
    },
    {
      name: 'QUANTUM SECURE LINK',
      type: 'NEXT-GEN ENCRYPTION',
      status: 'RESEARCH PHASE',
      progress: 25,
      icon: Lock
    }
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setScanIntensity(prev => (prev + 2) % 100);
      setActiveService(prev => (prev + 1) % serviceCategories.length);
      setSystemLoad(prev => 
        Array.from({ length: 8 }, () => Math.random() * 100)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [serviceCategories.length]);

  // Initialize system load
  useEffect(() => {
    setSystemLoad(Array.from({ length: 8 }, () => Math.random() * 100));
  }, []);

  const currentService = serviceCategories[activeService];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Tech mesh background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4242' fill-opacity='0.5'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'techFloat 20s linear infinite'
          }}
        />
      </div>

      {/* Scanning grid overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-2 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30"
          style={{
            top: `${scanIntensity}%`,
            transition: 'top 0.1s linear',
            filter: 'blur(1px)',
            boxShadow: '0 0 30px #14b8a6'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Settings className="text-teal-500" size={20} />
            <span className="text-white font-mono tracking-wider">OPERATIONAL CAPABILITIES</span>
          </div>
          
          <h2 className="text-6xl font-black text-white mb-6">
            OUR <span className="text-teal-500">PRODUCTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive defense solutions integrating cutting-edge technology and artificial intelligence 
            for modern security challenges across air, land, and cyber domains.
          </p>
        </div>

        {/* Service Categories Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-6 py-4 border font-mono font-bold transition-all duration-300 ${
                  activeService === index 
                    ? 'text-black border-teal-500' 
                    : 'text-white border-gray-600 hover:border-gray-500'
                }`}
                style={{ 
                  backgroundColor: activeService === index ? service.color : 'transparent',
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
                }}
              >
                <service.icon size={20} />
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          
          {/* Left Panel - System Monitor */}
          <div className="space-y-6">
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <h3 className="text-white font-mono text-lg mb-4 flex items-center gap-2">
                <Radar className="text-teal-500" size={20} />
                SYSTEM MONITOR
              </h3>
              
              <div className="space-y-4">
                {systemLoad.map((load, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-gray-400">NODE_{index + 1}</span>
                      <span className="text-white">{Math.round(load)}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          load > 80 ? 'bg-red-500' : 
                          load > 60 ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`}
                        style={{ width: `${load}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 border border-green-500/30 bg-green-500/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">ALL SYSTEMS OPERATIONAL</span>
                </div>
              </div>
            </div>

            {/* Service Stats */}
            <div className="p-6 border border-gray-600 bg-black/50">
              <h4 className="text-white font-mono text-lg mb-4">SERVICE METRICS</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">DEPLOYMENT READY</span>
                  <span className="text-green-400 font-mono text-sm">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">ACTIVE MISSIONS</span>
                  <span className="text-yellow-400 font-mono text-sm">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">RESPONSE TIME</span>
                  <span className="text-teal-500 font-mono text-sm">REAL-TIME</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">SUCCESS RATE</span>
                  <span className="text-green-400 font-mono text-sm">99.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel - Active Service Display */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              className="p-8 border backdrop-blur-sm"
              style={{ 
                backgroundColor: '#1b4242',
                borderColor: currentService.color,
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
              }}
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <currentService.icon size={32} style={{ color: currentService.color }} />
                  <h3 className="text-3xl font-bold text-white">{currentService.title}</h3>
                </div>
                <p className="text-gray-300 text-lg">{currentService.description}</p>
              </div>

              {/* Service Visualization */}
              <div className="relative flex justify-center mb-8">
                <div className="relative">
                  {/* Central hub */}
                  <div 
                    className="w-32 h-32 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
                    style={{ 
                      borderColor: currentService.color,
                      backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                  >
                    <currentService.icon size={48} style={{ color: currentService.color }} />
                  </div>
                  
                  {/* Orbiting service indicators */}
                  {currentService.services.map((_, index) => (
                    <div
                      key={index}
                      className="absolute w-4 h-4 rounded-full border-2"
                      style={{
                        borderColor: currentService.color,
                        backgroundColor: currentService.color,
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${index * 90}deg) translateX(80px) rotate(-${index * 90}deg)`,
                        transformOrigin: '-80px 0',
                        animation: `orbit ${8 + index}s linear infinite`
                      }}
                    />
                  ))}
                  
                  {/* Connection lines */}
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="absolute w-16 h-px"
                      style={{
                        backgroundColor: currentService.color,
                        opacity: 0.3,
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${index * 90}deg)`,
                        transformOrigin: '0 0'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Service List */}
              <div className="grid md:grid-cols-2 gap-4">
                {currentService.services.map((service, index) => (
                  <div 
                    key={service}
                    className="flex items-center gap-3 p-3 border border-gray-600 bg-black/30"
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentService.color }}
                    />
                    <span className="text-gray-300 font-mono text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Innovation Projects */}
          <div className="space-y-6">
            <div className="p-6 border border-gray-600 bg-black/50">
              <h3 className="text-white font-mono text-lg mb-6 flex items-center gap-2">
                <Zap className="text-teal-500" size={20} />
                FUTURE INNOVATIONS
              </h3>
              
              <div className="space-y-4">
                {innovationProjects.map((project, index) => (
                  <div key={project.name} className="p-4 border border-gray-600/50 bg-black/30">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon size={16} className="text-teal-500" />
                      <span className="text-white font-mono font-bold text-sm">{project.name}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{project.type}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 font-mono text-xs">{project.status}</span>
                      <span className="text-teal-500 font-mono text-xs">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1">
                      <div 
                        className="h-full bg-teal-500 transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Control */}
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <h4 className="text-white font-mono text-lg mb-4 flex items-center gap-2">
                <Target className="text-teal-500" size={18} />
                MISSION STATUS
              </h4>
              <div className="space-y-3">
                <button className="w-full p-3 border border-green-500/50 text-green-400 font-mono text-sm hover:bg-green-500/10 transition-colors">
                  SYSTEMS NOMINAL
                </button>
                <button className="w-full p-3 border border-blue-500/50 text-blue-400 font-mono text-sm hover:bg-blue-500/10 transition-colors">
                  DEPLOY READY
                </button>
                <button className="w-full p-3 border border-yellow-500/50 text-yellow-400 font-mono text-sm hover:bg-yellow-500/10 transition-colors">
                  STANDBY MODE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <div 
              key={category.id}
              className="group p-6 border border-gray-600 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setActiveService(index)}
              style={{ 
                borderColor: activeService === index ? category.color : 'rgb(75 85 99)',
                backgroundColor: activeService === index ? `${category.color}10` : 'rgba(0,0,0,0.3)'
              }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon size={28} style={{ color: category.color }} />
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-2">{category.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes techFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default GammaServicesSection;