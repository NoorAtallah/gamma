import React, { useState, useEffect } from 'react';
import { Shield, Target, Zap, Globe, Users, Award, ChevronRight, Eye, Brain, Lightbulb } from 'lucide-react';

const GammaAboutSection = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [missionProgress, setMissionProgress] = useState(0);
  const [scanLines, setScanLines] = useState([]);

  const values = [
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Pushing the boundaries of what's possible in defense technology",
      color: "#14b8a6"
    },
    {
      icon: Target,
      title: "PRECISION",
      description: "Ensuring reliable, high-performance results in every product",
      color: "#06d6a0"
    },
    {
      icon: Globe,
      title: "SUSTAINABILITY",
      description: "Developing environmentally friendly and energy-efficient technologies",
      color: "#4ade80"
    },
    {
      icon: Shield,
      title: "SAFETY",
      description: "Placing the safety of people and communities at the heart of every project",
      color: "#10b981"
    }
  ];

  const futureGoals = [
    "Advanced smart surveillance systems",
    "Unmanned ground and maritime vehicles", 
    "Electronic warfare and cyber defense systems",
    "Tactical and strategic AI-powered solutions"
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setMissionProgress(prev => (prev + 1) % 100);
      setActiveValue(prev => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate scan lines
  useEffect(() => {
    const lines = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      position: Math.random() * 100,
      speed: 0.5 + Math.random() * 0.3
    }));
    setScanLines(lines);

    const interval = setInterval(() => {
      setScanLines(prev => prev.map(line => ({
        ...line,
        position: (line.position + line.speed) % 100
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Diagonal scan lines background */}
      <div className="absolute inset-0">
        {scanLines.map(line => (
          <div
            key={line.id}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transform rotate-12"
            style={{
              top: `${line.position}%`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Circuit pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231b4242' fill-opacity='0.6'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Brain className="text-teal-500" size={20} />
            <span className="text-white font-mono tracking-wider">COMPANY PROFILE</span>
          </div>
          
          <h2 className="text-6xl font-black text-white mb-6">
            ABOUT <span className="text-teal-500">GAMMA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            An innovative company in the field of intelligent defense technologies, founded with a clear vision: 
            to develop advanced solutions that enhance national and international security by integrating cutting-edge technology and artificial intelligence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Vision & Mission */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Vision */}
            <div className="p-8 border border-gray-600" style={{ backgroundColor: '#1b4242', clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))' }}>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-teal-500" size={24} />
                <h3 className="text-2xl font-bold text-white">OUR VISION</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a strategic partner in the global defense industry by providing advanced technologies 
                capable of operating in the most challenging environments, while maintaining the highest standards 
                of safety and efficiency.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 border border-gray-600 bg-black/50">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-teal-500" size={24} />
                <h3 className="text-2xl font-bold text-white">OUR MISSION</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border-l-2 border-teal-500 bg-teal-500/5">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-300">Design and manufacture intelligent, multi-purpose defense systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 border-l-2 border-green-500 bg-green-500/5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Integrate artificial intelligence and real-time data analysis into defense platforms</span>
                </div>
                <div className="flex items-center gap-3 p-3 border-l-2 border-blue-500 bg-blue-500/5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Deliver flexible solutions tailored to military forces, security agencies, and emergency services</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                  <span>MISSION PROGRESS</span>
                  <span>{missionProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-100"
                    style={{ width: `${missionProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Panel */}
          <div className="space-y-6">
            <div className="p-6 border border-gray-600 bg-black/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="text-teal-500" size={20} />
                CORE VALUES
              </h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className={`p-4 border transition-all duration-300 cursor-pointer ${
                      activeValue === index 
                        ? 'border-teal-500 bg-teal-500/10' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <value.icon size={20} style={{ color: value.color }} />
                      <span className="text-white font-mono font-bold text-sm">{value.title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Stats */}
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <h4 className="text-white font-mono text-lg mb-4">COMPANY METRICS</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">FOUNDED</span>
                  <span className="text-white font-bold">2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">HEADQUARTERS</span>
                  <span className="text-white font-bold">TORONTO, CA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">FOCUS AREA</span>
                  <span className="text-white font-bold">UAV/RPAS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">STATUS</span>
                  <span className="text-green-400 font-bold">OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-white mb-4">
              FUTURE <span className="text-teal-500">OBJECTIVES</span>
            </h3>
            <p className="text-gray-400 text-lg">
              While our roots are in unmanned aerial systems, we aim to expand our portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureGoals.map((goal, index) => (
              <div 
                key={goal}
                className="group p-6 border border-gray-600 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/30 transition-colors">
                    <Zap size={24} className="text-teal-500" />
                  </div>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 border border-teal-500/30 bg-teal-500/5 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">
              GAMMA DEFENCE SYSTEMS is not just a company —<br />
              <span className="text-teal-500">it's a vision for the future of intelligent defense</span>
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="flex items-center gap-3 px-8 py-4 bg-teal-500 text-black font-bold transition-all duration-300 hover:bg-teal-400 transform hover:scale-105">
                LEARN MORE
                <ChevronRight size={20} />
              </button>
              
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-white font-bold hover:border-teal-500 hover:text-teal-500 transition-all duration-300">
                <Users size={20} />
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GammaAboutSection;