import img from './assets/12.png'
import img2 from './assets/11.png'
import img3 from './assets/10.png'
import img4 from './assets/9.png'
import img5 from './assets/8.png'
import img6 from './assets/7.png'
import img7 from './assets/6.png'
import img8 from './assets/5.png'
import img9 from './assets/4.png'
import img10 from './assets/3.png'
import img11 from './assets/2.png'

export const productsData = {
  categories: [
    {
      id: 'uas',
      name: 'Unmanned Aerial Systems (UAS)',
      description: 'Advanced UAV platforms for reconnaissance, surveillance, and tactical operations',
      icon: 'Radar'
    },
    {
      id: 'agmv', 
      name: 'Autonomous Ground & Maritime Vehicles (AGMV)',
      description: 'Intelligent ground-based and maritime platforms for reconnaissance, transport, and operations',
      icon: 'Truck'
    },
    {
      id: 'ai-defense',
      name: 'AI-Powered Defence Systems', 
      description: 'Intelligent command and control systems with advanced AI integration',
      icon: 'Brain'
    },
    {
      id: 'communications',
      name: 'Tactical Communication Systems',
      description: 'Secure field communication networks and transmission systems',
      icon: 'Radio'
    }
  ],

  products: [
    // Unmanned Aerial Systems
    {
      id: 'skyeye-x1',
      categoryId: 'uas',
      name: 'Gamma SkyEye-X1',
      subtitle: 'Tactical UAV Platform',
      description: 'Long-range tactical UAV equipped with HD day/night vision, laser designator and AI-powered video analytics for strategic reconnaissance.',
      image: img,
      status: 'DEV',
      classification: 'RESTRICTED',
      specifications: {
        'Operational Range': '250 km',
        'Endurance': '18 hours',
        'Payload Capacity': '60 kg',
        'Sensors': 'HD Day Cameras, IR Night Vision, Laser Designator',
        'Data Link': 'Encrypted LOS & SATCOM',
        'AI Features': 'Real-time Video Analytics, Automated Target Detection',
        'Max Speed': '120 km/h',
        'Service Ceiling': '8000 m',
        'Communication': 'Dual-band Encrypted'
      },
      features: [
        'Real-time video analytics with target detection',
        'Dual communication systems (LOS & SATCOM)',
        'Laser designation capability',
        'Extended 18-hour endurance',
        'Heavy payload capacity (60kg)',
        'All-weather operation capability'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'falcon-r',
      categoryId: 'uas', 
      name: 'Gamma Falcon-R',
      subtitle: 'Compact Tactical UAV',
      description: 'Man-portable VTOL UAV ideal for urban operations with panoramic vision and anti-jamming protection.',
      image: img2,
      status: 'DEV',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Operational Range': '40 km',
        'Endurance': '4 hours',
        'Weight': '< 15 kg (Man-portable)',
        'Launch System': 'VTOL (Vertical Take-Off and Landing)',
        'Sensors': 'Panoramic Vision, Acoustic Sensors',
        'EW Protection': 'Anti-jamming GNSS',
        'Mission Profile': 'Urban Operations',
        'Setup Time': '< 5 minutes'
      },
      features: [
        'Man-portable design under 15kg',
        'VTOL capability for confined spaces',
        'Panoramic vision system',
        'Acoustic sensors for urban environments',
        'Anti-jamming GNSS protection',
        'Rapid deployment capability'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'orion-hs',
      categoryId: 'uas',
      name: 'Gamma Orion-HS',
      subtitle: 'Heavy-Lift Transport UAV',
      description: 'Heavy-lift UAV designed for resupply missions and transport of light vehicles/equipment with hybrid-electric propulsion.',
      image: img3,
      status: 'DEVELOPMENT',
      classification: 'RESTRICTED',
      specifications: {
        'Payload Capacity': '250–300 kg',
        'Operational Range': '150 km',
        'Endurance': '8 hours (with full payload)',
        'Propulsion': 'Hybrid-electric Twin Rotors',
        'Applications': 'Resupply, Light Vehicle Transport',
        'Max Speed': '100 km/h',
        'Service Ceiling': '5000 m',
        'Landing': 'VTOL Capable'
      },
      features: [
        'Heavy payload capacity up to 300kg',
        'Hybrid-electric propulsion system',
        'Twin rotor configuration',
        'Light vehicle transport capability',
        'Extended range operations',
        'Autonomous cargo delivery'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'stratos',
      categoryId: 'uas',
      name: 'Gamma Stratos 🚀',
      subtitle: 'Stratospheric HALE UAV (Flagship)',
      description: 'Revolutionary stratospheric UAV providing satellite-like persistent operations with 90-day endurance and 1000km communication coverage.',
      image: img10,
      status: 'DEVELOPMENT',
      classification: 'TOP SECRET',
      specifications: {
        'Service Ceiling': '25 km (Stratosphere)',
        'Endurance': '90 continuous days',
        'Payload Capacity': '500 kg',
        'Communication Range': 'Secure coverage up to 1000 km',
        'Power System': 'Solar-powered + High-density Batteries',
        'Mission Profile': 'Persistent ISR, Wide-area Communications',
        'Sensors': 'Radars, EO/IR, Communications Modules',
        'Repositioning': 'Rapid compared to satellites'
      },
      features: [
        'Stratospheric operation at 25km altitude',
        'Unprecedented 90-day continuous endurance',
        'Satellite-like coverage at fraction of cost',
        '1000km secure communication radius',
        'Persistent border surveillance capability',
        'Strategic ISR in contested zones',
        'Solar-powered sustainable operation'
      ],
      price: 'Classified',
      availability: 'Q1 2026'
    },

    // Autonomous Ground & Maritime Vehicles
    {
      id: 'sentinel-4x',
      categoryId: 'agmv',
      name: 'Gamma Sentinel-4X',
      subtitle: 'Autonomous Ground Vehicle',
      description: 'Fully autonomous ground vehicle for long-range reconnaissance with 1-ton payload capacity and multi-sensor suite.',
      image: img4,
      status: 'DEV',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Range': '600 km',
        'Max Speed': '80 km/h',
        'Payload': '1 ton equipment capacity',
        'Sensors': 'Radar, Thermal Cameras, LIDAR',
        'Operation Modes': 'Remote-controlled / Fully Autonomous',
        'Battery Life': '24 hours continuous',
        'Terrain': 'All-Terrain Capable',
        'Communication': 'Mesh Network Compatible'
      },
      features: [
        'Extended 600km operational range',
        'Heavy 1-ton payload capacity',
        'Multi-mode operation (RC/Autonomous)',
        'Comprehensive sensor suite',
        '24-hour continuous operation',
        'All-terrain mobility system'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'rover-tx',
      categoryId: 'agmv',
      name: 'Gamma Rover-TX',
      subtitle: 'Urban Operations Robot',
      description: 'Compact backpack-portable robot designed for building entry, tunnel reconnaissance and ambush detection operations.',
      image: img5,
      status: 'DEV',
      classification: 'RESTRICTED',
      specifications: {
        'Size': 'Compact, Backpack-portable',
        'Operational Range': '5–10 km',
        'Mission Profile': 'Building Entry, Tunnel Reconnaissance',
        'Sensors': 'Panoramic Camera, Directional Microphones',
        'Special Capability': 'Ambush Detection',
        'Weight': '< 25 kg',
        'Battery Life': '6 hours operation',
        'Mobility': 'Stair Climbing, Obstacle Navigation'
      },
      features: [
        'Backpack-portable design',
        'Building entry capabilities',
        'Tunnel reconnaissance missions',
        'Advanced ambush detection',
        'Panoramic camera system',
        'Directional audio sensors',
        'Urban environment optimized'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'hydra',
      categoryId: 'agmv',
      name: 'Gamma Hydra',
      subtitle: 'Autonomous Maritime Drone',
      description: 'Long-endurance maritime drone for coastal monitoring, patrol operations and search-and-rescue missions.',
      image: img11,
      status: 'CONCEPT',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Range': '400 km',
        'Endurance': '72 hours',
        'Mission Profile': 'Coastal Monitoring, Patrol, SAR',
        'Sensors': 'Surface Radar, Sonar, IR Thermal Cameras',
        'Speed': '35 knots',
        'Environment': 'Sea State 6 capable',
        'Power': 'Hybrid Electric',
        'Communication': 'SATCOM + Mesh Network'
      },
      features: [
        '72-hour autonomous endurance',
        'Multi-mission capability',
        'Advanced sonar and radar systems',
        'Search and rescue equipped',
        'Severe weather operation',
        'Coastal surveillance optimization'
      ],
      price: 'TBD',
      availability: 'Q1 2026'
    },
    {
      id: 'leviathan-i',
      categoryId: 'agmv',
      name: 'Gamma Leviathan-I',
      subtitle: 'Autonomous Intelligence Submarine',
      description: 'Covert autonomous submarine for underwater ISR, SIGINT/ELINT operations and special operations force support.',
      image: img9,
      status: 'DEVELOPMENT',
      classification: 'TOP SECRET',
      specifications: {
        'Range': '2000 km',
        'Operational Depth': '500 m',
        'Endurance': '45 days',
        'Mission Profile': 'Covert SIGINT/ELINT, Underwater ISR, SOF Support',
        'Speed': '25 knots submerged',
        'Payload': '300 kg',
        'Power': 'Fuel Cell + Battery Hybrid',
        'Hull': 'Stealth Composite Design'
      },
      features: [
        'Extended 45-day underwater endurance',
        'Covert SIGINT/ELINT capability',
        'Special operations support',
        'Ultra-quiet propulsion system',
        'Deep water operation (500m)',
        '2000km operational range',
        'Stealth composite hull'
      ],
      price: 'Classified',
      availability: 'Q1 2026'
    },

    // AI-Powered Defence Systems
    {
      id: 'aegisnet',
      categoryId: 'ai-defense',
      name: 'Gamma AegisNet',
      subtitle: 'AI Command & Control System',
      description: 'Advanced AI-powered command and control system integrating multi-domain data fusion with predictive modeling and automated decision support.',
      image: img6,
      status: 'DEV',
      classification: 'TOP SECRET',
      specifications: {
        'AI Core': 'Real-time Threat Analysis, Automated Recommendations',
        'Integration': 'UAVs, Ground/Maritime Systems, Radars',
        'Capabilities': 'Multi-domain Fusion, Predictive Modeling',
        'Decision Support': 'Automated Response Protocols',
        'Processing Power': 'Quantum-Enhanced AI',
        'Response Time': '< 100ms',
        'Concurrent Users': '500+',
        'Security': 'Military-Grade Encryption'
      },
      features: [
        'Multi-domain data fusion capability',
        'Real-time threat analysis and assessment',
        'Predictive modeling for threat anticipation',
        'Automated decision support systems',
        'Integration with all Gamma platforms',
        'Quantum-enhanced processing power',
        'Sub-100ms response times'
      ],
      price: 'Classified',
      availability: 'Q1 2026'
    },
    {
      id: 'vision-360',
      categoryId: 'ai-defense',
      name: 'Gamma Vision-360',
      subtitle: '360° Situational Awareness System',
      description: 'Comprehensive 360° situational awareness system with automated target classification and multi-target tracking for weapon system integration.',
      image: img7,
      status: 'DEV',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Coverage': '360° Full Sphere',
        'Sensors': 'Short/Medium-range Radar, EO/IR, LIDAR',
        'AI Features': 'Automated Target Classification, Multi-target Tracking',
        'Integration': 'Weapon System Cueing',
        'Detection Range': '15 km',
        'Tracking Capacity': '200+ Simultaneous Targets',
        'Alert Time': '< 1 second',
        'Weather Independence': 'All-Weather Operation'
      },
      features: [
        'Full 360-degree spherical coverage',
        'Multi-sensor fusion (Radar, EO/IR, LIDAR)',
        'Automated target classification',
        '200+ simultaneous target tracking',
        'Weapon system cueing capability',
        'Sub-second alert generation',
        'Weather-independent operation'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },

    // Tactical Communication Systems
    {
      id: 'link-secure',
      categoryId: 'communications',
      name: 'Gamma Link-Secure',
      subtitle: 'Encrypted Field Network',
      description: 'Self-healing mesh network providing secure field communications with unlimited SATCOM range and anti-jamming protection.',
      image: img8,
      status: 'DEV',
      classification: 'RESTRICTED',
      specifications: {
        'Range': '150 km (Ground), Unlimited via SATCOM',
        'Encryption': 'AES-256 with Anti-jamming Protection',
        'Network Type': 'Self-healing Mesh Connectivity',
        'Bandwidth': '100 Mbps',
        'Nodes': 'Up to 1000 connected devices',
        'Latency': '< 10ms',
        'Power': '72h Battery Life',
        'Environment': 'Ruggedized IP68'
      },
      features: [
        'Self-healing mesh network topology',
        'Extended 150km ground range',
        'Unlimited SATCOM connectivity',
        'AES-256 encryption with anti-jamming',
        'Support for 1000+ network nodes',
        'Ultra-low latency communications',
        '72-hour battery operation'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    },
    {
      id: 'relay-x',
      categoryId: 'communications',
      name: 'Gamma Relay-X',
      subtitle: 'Long-Range Transmission Unit',
      description: 'Extreme-range communication system designed for harsh environments with 500+km range and modular deployment options.',
      image: img9,
      status: 'DEV',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Range': '500+ km',
        'Durability': 'Extreme Climate Resistance',
        'Environment': 'Desert, Polar, Maritime Capable',
        'Deployment': 'Vehicle-mounted or Tower-mounted Modular',
        'Power Output': '100W',
        'Frequency': 'Multi-Band Operation',
        'Setup Time': '< 15 minutes',
        'Encryption': 'Military Standard'
      },
      features: [
        'Extended 500+km communication range',
        'Extreme climate resistance',
        'Multi-environment operation (desert/polar/maritime)',
        'Modular deployment system',
        'Vehicle or tower mounting options',
        'Multi-band frequency operation',
        'Rapid 15-minute setup time'
      ],
      price: 'Contact for Pricing',
      availability: 'Q1 2026'
    }
  ]
};

export default productsData;