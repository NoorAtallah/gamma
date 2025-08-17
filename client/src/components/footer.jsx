import React, { useState, useEffect } from 'react';
import { Shield, Mail, MapPin, Radio, Globe, Lock, Zap, Eye, Target, Satellite, Users, MessageSquare } from 'lucide-react';

const GammaFooter = () => {
  const [systemTime, setSystemTime] = useState(new Date());
  const [networkStatus, setNetworkStatus] = useState('SECURED');
  const [encryptionLevel, setEncryptionLevel] = useState(100);

  const quickLinks = [
    { name: 'Home', href: '#home', icon: Shield },
    { name: 'About Us', href: '#about', icon: Eye },
    { name: 'Products', href: '#products', icon: Target },

    { name: 'Contact', href: '#contact', icon: Radio }
  ];

  const products = [
    'Gamma SkyEye-X1',
    'Gamma Falcon-R', 
    'Gamma Orion-HS',
    'Gamma Sentinel-4X',
    'Gamma AegisNet'
  ];

  const contactChannels = [
    { type: 'General', email: 'Info@GammaDefence.com', icon: Mail },
    { type: 'Sales', email: 'Sales@GammaDefence.com', icon: Users },
    { type: 'Media', email: 'Media@GammaDefence.com', icon: MessageSquare },
    { type: 'Support', email: 'Support@GammaDefence.com', icon: Radio }
  ];

  // Update system time and status
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemTime(new Date());
      setNetworkStatus(prev => prev === 'SECURED' ? 'ENCRYPTED' : 'SECURED');
      setEncryptionLevel(95 + Math.random() * 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-black border-t-2 border-teal-500">
      
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b4242' fill-opacity='0.6'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='0' cy='0' r='50'/%3E%3Ccircle cx='120' cy='0' r='50'/%3E%3Ccircle cx='0' cy='120' r='50'/%3E%3Ccircle cx='120' cy='120' r='50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated scan line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="p-6 border border-gray-600" style={{ backgroundColor: '#1b4242' }}>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-teal-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">GAMMA</h3>
                  <p className="text-teal-500 font-mono text-sm">DEFENCE SYSTEMS</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                An innovative company in intelligent defense technologies, developing advanced solutions 
                that enhance security through cutting-edge technology and artificial intelligence.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-500" />
                  <span className="text-gray-300 font-mono text-sm">Toronto, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-teal-500" />
                  <span className="text-gray-300 font-mono text-sm">Global Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-green-400" />
                  <span className="text-green-400 font-mono text-sm">Level 5 Security Cleared</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Satellite className="text-teal-500" size={20} />
              NAVIGATION
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-3 border border-gray-600 bg-black/30 hover:bg-black/50 hover:border-teal-500 transition-all duration-300 group"
                >
                  <link.icon size={16} className="text-gray-400 group-hover:text-teal-500 transition-colors" />
                  <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Target className="text-teal-500" size={20} />
              PRODUCTS
            </h4>
            <div className="space-y-3">
              {products.map((product, index) => (
                <div
                  key={product}
                  className="flex items-center gap-3 p-3 border border-gray-600 bg-black/30"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-300 font-mono text-sm">{product}</span>
                  <div className="ml-auto">
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      index < 3 ? 'bg-green-500/20 text-green-400' : 
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {index < 3 ? 'DEV' : 'DEV'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Channels */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Radio className="text-teal-500" size={20} />
              CONTACT CHANNELS
            </h4>
            <div className="space-y-3">
              {contactChannels.map((contact) => (
                <div
                  key={contact.type}
                  className="p-3 border border-gray-600 bg-black/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <contact.icon size={14} className="text-teal-500" />
                    <span className="text-white font-mono font-bold text-xs">{contact.type.toUpperCase()}</span>
                  </div>
                  <p className="text-teal-500 font-mono text-sm">{contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="p-4 border border-gray-600 bg-black/50 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-green-400 font-mono text-xs">SYSTEM STATUS</div>
                <div className="text-white font-mono text-sm">OPERATIONAL</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-blue-400 font-mono text-xs">NETWORK</div>
                <div className="text-white font-mono text-sm">{networkStatus}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <div>
                <div className="text-teal-500 font-mono text-xs">ENCRYPTION</div>
                <div className="text-white font-mono text-sm">{encryptionLevel.toFixed(1)}%</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-yellow-400 font-mono text-xs">SYSTEM TIME</div>
                <div className="text-white font-mono text-sm">{systemTime.toLocaleTimeString()} UTC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-6 border border-red-500/30 bg-red-500/5 mb-8">
          <div className="flex items-start gap-4">
            <Lock className="text-red-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <h5 className="text-red-400 font-mono font-bold text-sm mb-2">SECURITY CLASSIFICATION NOTICE</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                This website contains information about defense technologies and systems. Access to detailed technical 
                specifications requires appropriate security clearance. All communications are monitored and encrypted. 
                Unauthorized access attempts will be logged and investigated.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 font-mono text-sm">
                © 2025 GAMMA DEFENCE SYSTEMS. Powered and secured by {" "}
            <a 
              href="https://www.codelakeenterprise.com/" 
              className="text-blue-500 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Code Lake Enterprise 
            </a>
            {" "}
            Technology Department.
              </p>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-teal-500" />
                <span className="text-teal-500 font-mono text-sm">CLASSIFIED LEVEL 3</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-mono text-xs">
                Designed for authorized defense contractors only
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-xs">SECURE CONNECTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 text-center p-6 border border-teal-500/30 bg-teal-500/5">
          <p className="text-white font-mono text-lg mb-2">
            GAMMA DEFENCE SYSTEMS
          </p>
          <p className="text-teal-500 font-mono text-sm italic">
            "A vision for the future of intelligent defense"
          </p>
        </div>
      </div>

      {/* Bottom scan line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-pulse"></div>
    </footer>
  );
};

export default GammaFooter;