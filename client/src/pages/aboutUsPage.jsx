import React, { useState, useEffect } from 'react';
import { Target, Shield, Cpu, Globe, Radar, Zap, Users, Eye, Crosshair, ArrowRight } from 'lucide-react';

const AboutUsPage = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [missionProgress, setMissionProgress] = useState(0);

  const companyValues = [
    {
      icon: Zap,
      title: "INNOVATION",
      description: "Pushing the boundaries of what's possible in defense technology",
      status: "ACTIVE",
      color: "#14b8a6"
    },
    {
      icon: Target,
      title: "PRECISION", 
      description: "Ensuring reliable, high-performance results in every product",
      status: "OPTIMAL",
      color: "#06d6a0"
    },
    {
      icon: Globe,
      title: "SUSTAINABILITY",
      description: "Developing environmentally friendly and energy-efficient technologies", 
      status: "ENGAGED",
      color: "#4ade80"
    },
    {
      icon: Shield,
      title: "SAFETY",
      description: "Placing the safety of people and communities at the heart of every project",
      status: "PRIORITY",
      color: "#10b981"
    }
  ];

  const missionPoints = [
    "Design and manufacture intelligent, multi-purpose defense systems",
    "Integrate artificial intelligence and real-time data analysis into defense platforms", 
    "Deliver flexible solutions tailored to the needs of military forces, security agencies, and emergency services"
  ];

  const futureGoals = [
    { title: "SMART SURVEILLANCE", description: "Advanced smart surveillance systems", progress: 75 },
    { title: "GROUND & MARITIME", description: "Unmanned ground and maritime vehicles", progress: 60 },
    { title: "ELECTRONIC WARFARE", description: "Electronic warfare and cyber defense systems", progress: 85 },
    { title: "AI SOLUTIONS", description: "Tactical and strategic AI-powered solutions", progress: 90 }
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 100);
      setMissionProgress((prev) => (prev + 0.5) % 100);
      if (scanProgress % 25 === 0) {
        setActiveValue((prev) => (prev + 1) % companyValues.length);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [scanProgress, companyValues.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(27, 66, 66, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27, 66, 66, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-move 25s linear infinite'
            }}
          />
        </div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
            style={{
              top: `${scanProgress}%`,
              transition: 'top 0.1s linear',
              boxShadow: '0 0 15px #14b8a6'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
            <Eye className="text-teal-500" size={20} />
            <span className="text-white font-mono tracking-wider">COMPANY INTELLIGENCE PROFILE</span>
          </div>
          
          <h1 className="text-7xl font-black text-white mb-6 font-mono">
            ABOUT <span className="text-teal-500">GAMMA</span>
          </h1>
          <div className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono">
            INNOVATIVE COMPANY IN THE FIELD OF INTELLIGENT DEFENSE TECHNOLOGIES
          </div>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-teal-500 mb-6 font-mono flex items-center gap-3">
              <Target size={32} />
              MISSION STATEMENT
            </h2>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-gray-600/50">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 animate-pulse"></div>
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            {/* Mission Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                <span>MISSION PROGRESS</span>
                <span>{Math.round(missionProgress)}%</span>
              </div>
              <div className="w-full bg-white/20 h-2">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-green-400 transition-all duration-100"
                  style={{ width: `${missionProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-teal-500 mb-6 font-mono flex items-center gap-3">
              <Eye size={32} />
              STRATEGIC VISION
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-600/50 bg-black/30">
                <p className="text-xl text-white leading-relaxed">
                  To become a <span className="text-teal-500 font-bold">strategic partner</span> in the global defense industry 
                  by providing advanced technologies capable of operating in the most challenging environments, 
                  while maintaining the highest standards of <span className="text-teal-500 font-bold">safety and efficiency</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 border border-gray-600/50">
                  <div className="text-2xl font-bold text-teal-500 mb-1">2025</div>
                  <div className="text-gray-400 font-mono text-sm">FOUNDED</div>
                </div>
                <div className="p-4 border border-gray-600/50">
                  <div className="text-2xl font-bold text-teal-500 mb-1">GLOBAL</div>
                  <div className="text-gray-400 font-mono text-sm">REACH</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-mono">
            CORE <span className="text-teal-500">VALUES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div 
                key={value.title}
                className={`p-6 border transition-all duration-300 ${
                  activeValue === index 
                    ? 'border-teal-500 bg-teal-500/10 scale-105' 
                    : 'border-gray-600/50 bg-black/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <value.icon size={24} style={{ color: value.color }} />
                  <span className="text-white font-mono font-bold">{value.title}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{value.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">{value.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 border border-teal-500/30 bg-black/50 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-teal-500 mb-6 font-mono flex items-center gap-3">
              <Cpu size={32} />
              COMPANY OVERVIEW
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <span className="text-teal-500 font-bold">GAMMA DEFENCE SYSTEMS</span> is an innovative company 
                in the field of intelligent defense technologies, founded with a clear vision: to develop advanced 
                solutions that enhance national and international security by integrating 
                <span className="text-teal-500 font-bold"> cutting-edge technology and artificial intelligence</span>.
              </p>
              
              <p>
                Today, we focus on developing unmanned aerial systems (UAV / RPAS) for surveillance, reconnaissance, 
                communications, and security operations, with plans to expand into all types of 
                <span className="text-teal-500 font-bold"> smart military systems</span> in the future.
              </p>
              
              <div className="p-6 border border-gray-600/50 bg-black/30 mt-6">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">CORE FOCUS AREAS</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Radar size={16} className="text-teal-500" />
                    <span className="text-gray-300">Unmanned Aerial Systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu size={16} className="text-teal-500" />
                    <span className="text-gray-300">AI Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-teal-500" />
                    <span className="text-gray-300">Defense Technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye size={16} className="text-teal-500" />
                    <span className="text-gray-300">Surveillance Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Headquarters Info */}
            <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                <Globe size={20} className="text-teal-500" />
                HEADQUARTERS
              </h3>
              <div className="space-y-2">
                <p className="text-teal-500 font-mono font-bold">GAMMA DEFENCE SYSTEMS</p>
                <p className="text-gray-300">Toronto, Ontario, Canada</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">OPERATIONAL STATUS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">QUICK STATS</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Founded</span>
                  <span className="text-teal-500 font-mono">2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-teal-500 font-mono">UAV/AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-teal-500 font-mono">Toronto, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400 font-mono">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="border border-teal-500/30 bg-black/50 backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold text-teal-500 mb-8 font-mono flex items-center gap-3">
            <ArrowRight size={32} />
            FUTURE EXPANSION GOALS
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            While our roots are in unmanned aerial systems, we aim to expand our portfolio to include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <div key={goal.title} className="p-6 border border-gray-600/50 bg-black/30">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-mono font-bold">{goal.title}</h3>
                  <span className="text-teal-500 font-mono text-sm">{goal.progress}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{goal.description}</p>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-green-400"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 border border-teal-500/50 bg-teal-500/5 text-center">
            <p className="text-xl text-white font-mono">
              <span className="text-teal-500 font-bold">GAMMA DEFENCE SYSTEMS</span> is not just a company — 
              it's a <span className="text-teal-500 font-bold">vision for the future of intelligent defense</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </section>
  );
};

export default AboutUsPage;