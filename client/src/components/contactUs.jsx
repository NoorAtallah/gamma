import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Shield, Radio, Users, Globe, Satellite, MessageSquare } from 'lucide-react';

const GammaContactSection = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0);
  const [encryptionLevel, setEncryptionLevel] = useState(0);

  const contactChannels = [
    {
      id: 'general',
      icon: Mail,
      title: 'GENERAL INQUIRIES',
      shortTitle: 'GENERAL',
      email: 'Info@GammaDefenceSystems.com',
      description: 'General information and basic inquiries',
      security: 'STANDARD',
      color: '#14b8a6'
    },
    {
      id: 'sales',
      icon: Users,
      title: 'SALES & PARTNERSHIPS',
      shortTitle: 'SALES',
      email: 'Sales@GammaDefenceSystems.com',
      description: 'Business partnerships and procurement requests',
      security: 'ELEVATED',
      color: '#06d6a0'
    },
    {
      id: 'media',
      icon: MessageSquare,
      title: 'MEDIA & PRESS',
      shortTitle: 'MEDIA',
      email: 'Media@GammaDefenceSystems.com',
      description: 'Press releases and media communications',
      security: 'STANDARD',
      color: '#4ade80'
    },
    {
      id: 'support',
      icon: Radio,
      title: 'TECHNICAL SUPPORT',
      shortTitle: 'SUPPORT',
      email: 'Support@GammaDefenceSystems.com',
      description: 'Technical assistance and system support',
      security: 'CLASSIFIED',
      color: '#10b981'
    }
  ];

  const secureChannels = [
    { name: 'ENCRYPTED FREQUENCY', shortName: 'ENCRYPTED', status: 'ACTIVE', access: 'AUTHORIZED PARTNERS ONLY' },
    { name: 'SECURE COMMS', shortName: 'SECURE', status: 'STANDBY', access: 'LEVEL 3+ CLEARANCE' },
    { name: 'QUANTUM LINK', shortName: 'QUANTUM', status: 'CLASSIFIED', access: 'NEED-TO-KNOW BASIS' }
  ];

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(75 + Math.sin(Date.now() / 1000) * 20);
      setEncryptionLevel((prev) => (prev + 1) % 100);
      setActiveChannel((prev) => (prev + 1) % contactChannels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [contactChannels.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Radar sweep background - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 border border-teal-500/20 rounded-full">
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

      {/* Data stream lines - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent sm:block"
            style={{
              top: `${15 + i * 20}%`,
              left: `-20%`,
              width: '140%',
              animation: `dataFlow ${4 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 mb-4 sm:mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Satellite className="text-teal-500" size={16} />
            <span className="text-white font-mono tracking-wider text-sm sm:text-base">COMMUNICATION PROTOCOLS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            ESTABLISH <span className="text-teal-500">CONTACT</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            At Gamma Defence Systems, we're committed to supporting our partners, clients, and collaborators 
            with reliable communication channels. Multiple secure contact methods available.
          </p>
        </div>

        {/* Main Content - Full Width Layout */}
        <div className="space-y-6 sm:space-y-8">
            
          {/* Contact Channels */}
          <div className="p-6 sm:p-8 border border-gray-600 bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Mail className="text-teal-500" size={20} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">COMMUNICATION PROTOCOLS</h3>
            </div>
            
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {contactChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                const isActive = activeChannel === index;
                
                return (
                  <div 
                    key={channel.id} 
                    className={`p-4 sm:p-6 border transition-all duration-300 ${
                      isActive 
                        ? 'border-teal-500 bg-teal-500/10 scale-105' 
                        : 'border-gray-600 bg-black/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className={`p-2 rounded border ${
                        isActive ? 'border-teal-500 bg-teal-500/10' : 'border-gray-600 bg-black/50'
                      }`}>
                        <IconComponent 
                          size={16} 
                          className={isActive ? 'text-teal-500' : 'text-gray-400'} 
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-mono font-bold text-sm sm:text-base ${
                          isActive ? 'text-teal-500' : 'text-white'
                        }`}>
                          <span className="hidden sm:inline">{channel.title}</span>
                          <span className="sm:hidden">{channel.shortTitle}</span>
                        </h4>
                        <div className={`px-2 py-1 text-xs font-mono rounded mt-1 inline-block ${
                          channel.security === 'CLASSIFIED' ? 'bg-red-500/20 text-red-400' :
                          channel.security === 'ELEVATED' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {channel.security}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-700 bg-black/30">
                        <p className="text-teal-500 font-mono text-sm sm:text-lg break-all">
                          {channel.email}
                        </p>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Response Times */}
          <div className="p-4 sm:p-6 border border-teal-500/30 bg-teal-500/5">
            <h4 className="text-teal-500 font-mono text-base sm:text-lg mb-4 sm:mb-6">RESPONSE PROTOCOLS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 border border-gray-600 bg-black/30">
                <div className="text-xl sm:text-2xl font-bold text-white mb-2">&lt; 4 HRS</div>
                <div className="text-gray-400 font-mono text-xs sm:text-sm">General Inquiries</div>
              </div>
              <div className="text-center p-4 border border-gray-600 bg-black/30">
                <div className="text-xl sm:text-2xl font-bold text-white mb-2">&lt; 2 HRS</div>
                <div className="text-gray-400 font-mono text-xs sm:text-sm">Technical Support</div>
              </div>
              <div className="text-center p-4 border border-gray-600 bg-black/30">
                <div className="text-xl sm:text-2xl font-bold text-white mb-2">&lt; 1 HR</div>
                <div className="text-gray-400 font-mono text-xs sm:text-sm">Emergency Response</div>
              </div>
            </div>
          </div>

          {/* Communication Guidelines & Secure Channels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Guidelines */}
            <div className="p-4 sm:p-6 border border-gray-600 bg-black/50">
              <h4 className="text-white font-mono text-base sm:text-lg mb-4 sm:mb-6">COMMUNICATION GUIDELINES</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base">Include organization name and point of contact in all communications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base">Specify technical requirements and operational parameters when applicable</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base">Request secure communication channels for classified discussions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base">Allow 24-48 hours for comprehensive technical assessments</p>
                </div>
              </div>
            </div>

            {/* Secure Channels */}
            <div className="p-4 sm:p-6 border border-red-500/30 bg-red-500/5">
              <h4 className="text-red-400 font-mono text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
                <Shield className="text-red-500" size={16} />
                <span className="hidden sm:inline">CLASSIFIED CHANNELS</span>
                <span className="sm:hidden">CLASSIFIED</span>
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {secureChannels.map((channel) => (
                  <div key={channel.name} className="p-3 border border-red-500/20 bg-black/30">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-red-400 font-mono text-xs sm:text-sm font-bold">
                        <span className="hidden sm:inline">{channel.name}</span>
                        <span className="sm:hidden">{channel.shortName}</span>
                      </span>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        channel.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                        channel.status === 'STANDBY' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {channel.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs">{channel.access}</p>
                  </div>
                ))}
              </div>
              <p className="text-red-400 font-mono text-xs mt-4">
                📡 Encrypted frequency & access keys provided upon request to authorized partners only.
              </p>
            </div>
          </div>

          {/* Bottom Section - HQ and Signal Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* HQ Location */}
            <div className="p-4 sm:p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <MapPin className="text-teal-500" size={20} />
                <h3 className="text-lg sm:text-xl font-bold text-white">HEADQUARTERS</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-mono text-base sm:text-lg">GAMMA DEFENCE SYSTEMS</p>
                <p className="text-sm sm:text-base">Toronto, Ontario, Canada</p>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs sm:text-sm">OPERATIONAL STATUS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Signal Status */}
            <div className="p-4 sm:p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <h4 className="text-white font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Globe className="text-teal-500" size={16} />
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
                
                <div className="flex justify-between items-center mt-3 sm:mt-4">
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
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default GammaContactSection;