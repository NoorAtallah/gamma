import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Shield, Radio, Users, Globe, Satellite, MessageSquare, Phone, Clock, Zap } from 'lucide-react';

const ContactUsPage = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0);
  const [encryptionLevel, setEncryptionLevel] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);

  const contactChannels = [
    {
      id: 'general',
      icon: Mail,
      title: 'GENERAL INQUIRIES',
      email: 'Info@GammaDefenceSystems.com',
      description: 'General information and basic inquiries',
      security: 'STANDARD',
      color: '#14b8a6',
      responseTime: '< 4 HRS'
    },
    {
      id: 'sales',
      icon: Users,
      title: 'SALES & PARTNERSHIPS',
      email: 'Sales@GammaDefenceSystems.com',
      description: 'Business partnerships and procurement requests',
      security: 'ELEVATED',
      color: '#06d6a0',
      responseTime: '< 6 HRS'
    },
    {
      id: 'media',
      icon: MessageSquare,
      title: 'MEDIA & PRESS',
      email: 'Media@GammaDefenceSystems.com',
      description: 'Press releases and media communications',
      security: 'STANDARD',
      color: '#4ade80',
      responseTime: '< 8 HRS'
    },
    {
      id: 'support',
      icon: Radio,
      title: 'TECHNICAL SUPPORT',
      email: 'Support@GammaDefenceSystems.com',
      description: 'Technical assistance and system support',
      security: 'CLASSIFIED',
      color: '#10b981',
      responseTime: '< 2 HRS'
    }
  ];

  const communicationGuidelines = [
    "Include organization name and point of contact in all communications",
    "Specify technical requirements and operational parameters when applicable", 
    "Request secure communication channels for classified discussions",
    "Allow 24-48 hours for comprehensive technical assessments"
  ];

  const secureChannels = [
    { name: 'ENCRYPTED FREQUENCY', status: 'ACTIVE', access: 'AUTHORIZED PARTNERS ONLY', level: 'LEVEL-3' },
    { name: 'SECURE COMMS', status: 'STANDBY', access: 'LEVEL 3+ CLEARANCE', level: 'LEVEL-4' },
    { name: 'QUANTUM LINK', status: 'CLASSIFIED', access: 'NEED-TO-KNOW BASIS', level: 'LEVEL-5' }
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(75 + Math.sin(Date.now() / 1000) * 20);
      setEncryptionLevel((prev) => (prev + 1) % 100);
      setScanProgress((prev) => (prev + 0.5) % 100);
      setActiveChannel((prev) => (prev + 1) % contactChannels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [contactChannels.length]);

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
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
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

      {/* Radar sweep background - responsive sizing and positioning */}
      <div className="absolute inset-0">
        <div className="absolute top-4 right-4 sm:top-10 sm:right-10 lg:top-20 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-teal-500/20 rounded-full">
          <div className="absolute inset-2 sm:inset-4 border border-teal-500/15 rounded-full">
            <div className="absolute inset-2 sm:inset-4 border border-teal-500/10 rounded-full">
              <div 
                className="absolute top-1/2 left-1/2 w-1/2 h-px bg-teal-500/50 origin-left animate-spin"
                style={{ transformOrigin: '0 50%', animationDuration: '4s' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        
        {/* Header - responsive text sizes and spacing */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
            <Satellite className="text-teal-500" size={16} />
            <span className="text-white font-mono tracking-wider text-sm sm:text-base">COMMUNICATION PROTOCOLS</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 font-mono leading-tight">
            ESTABLISH <span className="text-teal-500">CONTACT</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            At Gamma Defence Systems, we're committed to supporting our partners, clients, and collaborators 
            with reliable communication channels. Multiple secure contact methods available.
          </p>
        </div>

        {/* Main content grid - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Panel - Headquarters & Status */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            
            {/* HQ Location */}
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MapPin className="text-teal-500" size={20} />
                <h3 className="text-lg sm:text-xl font-bold text-white font-mono">HEADQUARTERS</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-mono text-base sm:text-lg text-teal-500">GAMMA DEFENCE SYSTEMS</p>
                <p className="text-sm sm:text-base">Toronto, Ontario, Canada</p>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs sm:text-sm">OPERATIONAL STATUS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Signal Status */}
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <h4 className="text-white font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Globe className="text-teal-500" size={18} />
                SIGNAL STATUS
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-xs sm:text-sm">SIGNAL STRENGTH</span>
                  <span className="text-green-400 font-mono text-xs sm:text-sm">{Math.round(signalStrength)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-100"
                    style={{ width: `${signalStrength}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 font-mono text-xs sm:text-sm">ENCRYPTION</span>
                  <span className="text-teal-500 font-mono text-xs sm:text-sm">AES-256</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-teal-500 transition-all duration-100"
                    style={{ width: `${encryptionLevel}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <h4 className="text-teal-500 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Clock size={18} />
                RESPONSE PROTOCOLS
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center p-2 sm:p-3 border border-gray-600/50">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">General Inquiries</span>
                  <span className="text-green-400 font-mono text-xs sm:text-sm">&lt; 4 HRS</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 border border-gray-600/50">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">Technical Support</span>
                  <span className="text-yellow-400 font-mono text-xs sm:text-sm">&lt; 2 HRS</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 border border-gray-600/50">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">Emergency Response</span>
                  <span className="text-red-400 font-mono text-xs sm:text-sm">&lt; 1 HR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel - Contact Channels */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 font-mono">
                <Radio className="text-teal-500" size={20} />
                CONTACT CHANNELS
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactChannels.map((channel, index) => (
                  <div 
                    key={channel.id}
                    className={`p-3 sm:p-4 border transition-all duration-300 cursor-pointer ${
                      activeChannel === index 
                        ? 'border-teal-500 bg-teal-500/10 scale-105' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onClick={() => setActiveChannel(index)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <channel.icon size={16} style={{ color: channel.color }} />
                      <span className="text-white font-mono font-bold text-xs sm:text-sm">{channel.title}</span>
                    </div>
                    <p className="text-teal-500 font-mono text-xs sm:text-sm mb-1 break-all">{channel.email}</p>
                    <p className="text-gray-400 text-xs mb-2">{channel.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Shield size={12} className="text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-mono">{channel.security}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-green-400" />
                        <span className="text-green-400 text-xs font-mono">{channel.responseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Guidelines */}
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <h4 className="text-white font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <MessageSquare className="text-teal-500" size={18} />
                COMMUNICATION GUIDELINES
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {communicationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1 sm:mt-2 animate-pulse flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{guideline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Secure Channels & Additional Info */}
          <div className="space-y-4 sm:space-y-6 order-3">
            
            {/* Primary Contact Display */}
            <div className="p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 font-mono">
                <Mail className="text-teal-500" size={20} />
                PRIMARY CHANNELS
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">GENERAL INQUIRIES</span>
                  </div>
                  <p className="text-teal-500 font-mono text-sm sm:text-lg break-all">Info@GammaDefenceSystems.com</p>
                </div>
                
                <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">SALES & PARTNERSHIPS</span>
                  </div>
                  <p className="text-teal-500 font-mono text-sm sm:text-lg break-all">Sales@GammaDefenceSystems.com</p>
                </div>
                
                <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">MEDIA & PRESS</span>
                  </div>
                  <p className="text-teal-500 font-mono text-sm sm:text-lg break-all">Media@GammaDefenceSystems.com</p>
                </div>
                
                <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">TECHNICAL SUPPORT</span>
                  </div>
                  <p className="text-teal-500 font-mono text-sm sm:text-lg break-all">Support@GammaDefenceSystems.com</p>
                </div>
              </div>
            </div>

            {/* Secure Channels Panel */}
            <div className="p-4 sm:p-6 border border-red-500/30 bg-red-500/5">
              <h4 className="text-red-400 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Shield className="text-red-500" size={18} />
                CLASSIFIED CHANNELS
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {secureChannels.map((channel) => (
                  <div key={channel.name} className="p-2 sm:p-3 border border-red-500/20 bg-black/30">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                      <span className="text-red-400 font-mono text-xs sm:text-sm font-bold">{channel.name}</span>
                      <span className={`font-mono text-xs px-2 py-1 rounded self-start ${
                        channel.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                        channel.status === 'STANDBY' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {channel.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mb-1">{channel.access}</p>
                    <div className="flex items-center gap-2">
                      <Zap size={10} className="text-red-400" />
                      <span className="text-red-400 font-mono text-xs">{channel.level}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-red-400 font-mono text-xs mt-3 sm:mt-4 leading-relaxed">
                📡 Encrypted frequency & access keys provided upon request to authorized partners only.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @media (max-width: 640px) {
          .break-all {
            word-break: break-all;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUsPage;