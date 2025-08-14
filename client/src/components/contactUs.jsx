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
      email: 'Info@GammaDefence.com',
      description: 'General information and basic inquiries',
      security: 'STANDARD',
      color: '#14b8a6'
    },
    {
      id: 'sales',
      icon: Users,
      title: 'SALES & PARTNERSHIPS',
      email: 'Sales@GammaDefence.com',
      description: 'Business partnerships and procurement requests',
      security: 'ELEVATED',
      color: '#06d6a0'
    },
    {
      id: 'media',
      icon: MessageSquare,
      title: 'MEDIA & PRESS',
      email: 'Media@GammaDefence.com',
      description: 'Press releases and media communications',
      security: 'STANDARD',
      color: '#4ade80'
    },
    {
      id: 'support',
      icon: Radio,
      title: 'TECHNICAL SUPPORT',
      email: 'Support@GammaDefence.com',
      description: 'Technical assistance and system support',
      security: 'CLASSIFIED',
      color: '#10b981'
    }
  ];

  const secureChannels = [
    { name: 'ENCRYPTED FREQUENCY', status: 'ACTIVE', access: 'AUTHORIZED PARTNERS ONLY' },
    { name: 'SECURE COMMS', status: 'STANDBY', access: 'LEVEL 3+ CLEARANCE' },
    { name: 'QUANTUM LINK', status: 'CLASSIFIED', access: 'NEED-TO-KNOW BASIS' }
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
      
      {/* Radar sweep background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 border border-teal-500/20 rounded-full">
          <div className="absolute inset-4 border border-teal-500/15 rounded-full">
            <div className="absolute inset-4 border border-teal-500/10 rounded-full">
              <div 
                className="absolute top-1/2 left-1/2 w-1/2 h-px bg-teal-500/50 origin-left animate-spin"
                style={{ transformOrigin: '0 50%', animationDuration: '4s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data stream lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            style={{
              top: `${15 + i * 12}%`,
              left: `-20%`,
              width: '140%',
              animation: `dataFlow ${4 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
            <Satellite className="text-teal-500" size={20} />
            <span className="text-white font-mono tracking-wider">COMMUNICATION PROTOCOLS</span>
          </div>
          
          <h2 className="text-6xl font-black text-white mb-6">
            ESTABLISH <span className="text-teal-500">CONTACT</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Gamma Defence Systems, we're committed to supporting our partners, clients, and collaborators 
            with reliable communication channels. Multiple secure contact methods available.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Panel - Headquarters & Status */}
          <div className="space-y-6">
            
            {/* HQ Location */}
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-teal-500" size={24} />
                <h3 className="text-xl font-bold text-white">HEADQUARTERS</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-mono text-lg">GAMMA DEFENCE SYSTEMS</p>
                <p>Toronto, Ontario, Canada</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">OPERATIONAL STATUS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Signal Status */}
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <h4 className="text-white font-mono text-lg mb-4 flex items-center gap-2">
                <Globe className="text-teal-500" size={18} />
                SIGNAL STATUS
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">SIGNAL STRENGTH</span>
                  <span className="text-green-400 font-mono text-sm">{Math.round(signalStrength)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-100"
                    style={{ width: `${signalStrength}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 font-mono text-sm">ENCRYPTION</span>
                  <span className="text-teal-500 font-mono text-sm">AES-256</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-full bg-teal-500 transition-all duration-100"
                    style={{ width: `${encryptionLevel}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Communication Channels */}
            <div className="p-6 border border-gray-600 bg-black/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Radio className="text-teal-500" size={20} />
                CONTACT CHANNELS
              </h3>
              
              <div className="space-y-4">
                {contactChannels.map((channel, index) => (
                  <div 
                    key={channel.id}
                    className={`p-4 border transition-all duration-300 cursor-pointer ${
                      activeChannel === index 
                        ? 'border-teal-500 bg-teal-500/10' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onClick={() => setActiveChannel(index)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <channel.icon size={18} style={{ color: channel.color }} />
                      <span className="text-white font-mono font-bold text-sm">{channel.title}</span>
                    </div>
                    <p className="text-teal-500 font-mono text-sm mb-1">{channel.email}</p>
                    <p className="text-gray-400 text-xs">{channel.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Shield size={12} className="text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-mono">{channel.security}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Information Display */}
          <div className="lg:col-span-2">
            <div className="p-8 border border-gray-600 bg-black/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-teal-500" size={24} />
                <h3 className="text-2xl font-bold text-white">COMMUNICATION PROTOCOLS</h3>
              </div>
              
              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="text-teal-500" size={20} />
                    PRIMARY CHANNELS
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-600 bg-black/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white font-mono font-bold text-sm">GENERAL INQUIRIES</span>
                      </div>
                      <p className="text-teal-500 font-mono text-lg">Info@GammaDefence.com</p>
                      <p className="text-gray-400 text-sm mt-1">General information and basic inquiries</p>
                    </div>
                    
                    <div className="p-4 border border-gray-600 bg-black/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-white font-mono font-bold text-sm">SALES & PARTNERSHIPS</span>
                      </div>
                      <p className="text-teal-500 font-mono text-lg">Sales@GammaDefence.com</p>
                      <p className="text-gray-400 text-sm mt-1">Business partnerships and procurement requests</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <MessageSquare className="text-teal-500" size={20} />
                    SPECIALIZED CHANNELS
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-600 bg-black/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white font-mono font-bold text-sm">MEDIA & PRESS</span>
                      </div>
                      <p className="text-teal-500 font-mono text-lg">Media@GammaDefence.com</p>
                      <p className="text-gray-400 text-sm mt-1">Press releases and media communications</p>
                    </div>
                    
                    <div className="p-4 border border-gray-600 bg-black/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-white font-mono font-bold text-sm">TECHNICAL SUPPORT</span>
                      </div>
                      <p className="text-teal-500 font-mono text-lg">Support@GammaDefence.com</p>
                      <p className="text-gray-400 text-sm mt-1">Technical assistance and system support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="p-6 border border-teal-500/30 bg-teal-500/5 mb-8">
                <h4 className="text-teal-500 font-mono text-lg mb-4">RESPONSE PROTOCOLS</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">&lt; 4 HRS</div>
                    <div className="text-gray-400 font-mono text-sm">General Inquiries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">&lt; 2 HRS</div>
                    <div className="text-gray-400 font-mono text-sm">Technical Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">&lt; 1 HR</div>
                    <div className="text-gray-400 font-mono text-sm">Emergency Response</div>
                  </div>
                </div>
              </div>

              {/* Contact Instructions */}
              <div className="p-6 border border-gray-600 bg-black/50">
                <h4 className="text-white font-mono text-lg mb-4">COMMUNICATION GUIDELINES</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p>Include organization name and point of contact in all communications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p>Specify technical requirements and operational parameters when applicable</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p>Request secure communication channels for classified discussions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p>Allow 24-48 hours for comprehensive technical assessments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secure Channels Panel */}
            <div className="mt-8 p-6 border border-red-500/30 bg-red-500/5">
              <h4 className="text-red-400 font-mono text-lg mb-4 flex items-center gap-2">
                <Shield className="text-red-500" size={18} />
                CLASSIFIED COMMUNICATION CHANNELS
              </h4>
              <div className="space-y-3">
                {secureChannels.map((channel) => (
                  <div key={channel.name} className="flex justify-between items-center p-3 border border-red-500/20 bg-black/30">
                    <div>
                      <span className="text-red-400 font-mono text-sm font-bold">{channel.name}</span>
                      <p className="text-gray-400 text-xs">{channel.access}</p>
                    </div>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${
                      channel.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                      channel.status === 'STANDBY' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {channel.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-red-400 font-mono text-xs mt-4">
                📡 Encrypted frequency & access keys provided upon request to authorized partners only.
              </p>
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