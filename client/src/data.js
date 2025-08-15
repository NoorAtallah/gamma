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
      id: 'agv', 
      name: 'Autonomous Ground Vehicles (AGV)',
      description: 'Intelligent ground-based platforms for reconnaissance and transport',
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
    },
    {
      id: 'future',
      name: 'Future Innovations',
      description: 'Next-generation platforms currently in development',
      icon: 'Rocket'
    }
  ],

  products: [
    // Unmanned Aerial Systems
    {
      id: 'skyeye-x1',
      categoryId: 'uas',
      name: 'Gamma SkyEye-X1',
      subtitle: 'Tactical UAV Platform',
      description: 'Long-range reconnaissance and communications UAV equipped with day/night vision and AI-powered video analytics.',
      image: img,
      status: 'ACTIVE',
      classification: 'RESTRICTED',
      specifications: {
        'Max Speed': '120 km/h',
        'Range': '50 km',
        'Flight Time': '8 hours',
        'Payload': '5 kg',
        'Ceiling': '6000 m',
        'Camera': '4K Gimbal Stabilized',
        'AI Features': 'Object Recognition, Target Tracking',
        'Communication': 'Encrypted Data Link'
      },
      features: [
        'Advanced AI-powered video analytics',
        'Real-time target identification',
        'Encrypted communication systems',
        'Weather-resistant design',
        'Autonomous flight capabilities'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },
    {
      id: 'falcon-r',
      categoryId: 'uas', 
      name: 'Gamma Falcon-R',
      subtitle: 'Rapid Deployment Drone',
      description: 'Compact rapid-deployment drone ideal for intelligence operations in complex environments.',
      image: img2,
      status: 'ACTIVE',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Max Speed': '80 km/h',
        'Range': '15 km', 
        'Flight Time': '45 minutes',
        'Payload': '1.5 kg',
        'Ceiling': '3000 m',
        'Camera': '1080p Thermal/Optical',
        'Launch Time': '< 2 minutes',
        'Weight': '2.3 kg'
      },
      features: [
        'Rapid deployment capability',
        'Silent operation mode',
        'Thermal imaging system',
        'GPS-denied navigation',
        'Compact folding design'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },
    {
      id: 'orion-hs',
      categoryId: 'uas',
      name: 'Gamma Orion-HS',
      subtitle: 'Heavy-Lift UAV',
      description: 'Heavy-lift UAV designed for aerial resupply and equipment transport in remote areas.',
      image: img3,
      status: 'DEVELOPMENT',
      classification: 'RESTRICTED',
      specifications: {
        'Max Speed': '100 km/h',
        'Range': '80 km',
        'Flight Time': '6 hours',
        'Payload': '25 kg',
        'Ceiling': '5000 m',
        'Cargo Bay': '50L Volume',
        'Navigation': 'AI-Assisted',
        'Landing': 'VTOL Capable'
      },
      features: [
        'Heavy payload capacity',
        'Autonomous cargo delivery',
        'All-weather operation',
        'Precision landing system',
        'Modular payload bay'
      ],
      price: 'Contact for Pricing',
      availability: 'Q3 2025'
    },

    // Autonomous Ground Vehicles
    {
      id: 'sentinel-4x',
      categoryId: 'agv',
      name: 'Gamma Sentinel-4X',
      subtitle: 'Autonomous Reconnaissance Vehicle',
      description: 'Fully autonomous ground vehicle for reconnaissance and equipment transport, featuring radar and thermal vision.',
      image: img4,
      status: 'ACTIVE',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Max Speed': '45 km/h',
        'Range': '120 km',
        'Payload': '150 kg',
        'Battery Life': '12 hours',
        'Sensors': '360° LIDAR, Thermal',
        'Terrain': 'All-Terrain',
        'Communication': 'Mesh Network',
        'Autonomous Level': 'Level 4'
      },
      features: [
        '360-degree situational awareness',
        'Silent electric operation',
        'Advanced obstacle avoidance',
        'Modular sensor platform',
        'Remote operation capability'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },
    {
      id: 'rover-tx',
      categoryId: 'agv',
      name: 'Gamma Rover-TX',
      subtitle: 'Urban Operations Robot',
      description: 'Compact urban operations robot for building entry and close-quarters surveillance.',
      image: img5,
      status: 'ACTIVE',
      classification: 'RESTRICTED',
      specifications: {
        'Max Speed': '15 km/h',
        'Range': '8 km',
        'Payload': '10 kg',
        'Battery Life': '4 hours',
        'Dimensions': '60x40x30 cm',
        'Weight': '25 kg',
        'Cameras': 'HD Night Vision',
        'Mobility': 'Stair Climbing'
      },
      features: [
        'Stair climbing capability',
        'Ultra-quiet operation',
        'HD night vision cameras',
        'Chemical detection sensors',
        'Breach & clear support'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },

    // AI-Powered Defence Systems
    {
      id: 'aegisnet',
      categoryId: 'ai-defense',
      name: 'Gamma AegisNet',
      subtitle: 'AI Command & Control System',
      description: 'Centralized command-and-control system that integrates data from multiple platforms and uses AI for rapid decision-making.',
      image: img6,
      status: 'ACTIVE',
      classification: 'TOP SECRET',
      specifications: {
        'Processing Power': 'Quantum-Enhanced AI',
        'Data Capacity': 'Unlimited Cloud',
        'Response Time': '< 100ms',
        'Concurrent Users': '500+',
        'Integration': 'All Gamma Systems',
        'Security': 'Military-Grade Encryption',
        'Interface': 'AR/VR Compatible',
        'AI Models': 'Custom Neural Networks'
      },
      features: [
        'Real-time threat assessment',
        'Multi-platform integration',
        'Predictive analytics',
        'Automated response protocols',
        'Quantum-secured communications'
      ],
      price: 'Classified',
      availability: 'Authorized Partners Only'
    },
    {
      id: 'vision-360',
      categoryId: 'ai-defense',
      name: 'Gamma Vision-360',
      subtitle: 'Multi-Sensor Awareness System',
      description: 'Multi-sensor 360° situational awareness system for threat detection and target tracking.',
      image: img7,
      status: 'ACTIVE',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Coverage': '360° Full Sphere',
        'Detection Range': '10 km',
        'Tracking Capacity': '200 Targets',
        'Sensor Types': 'Optical, Thermal, Radar',
        'AI Processing': 'Edge Computing',
        'Alert Time': '< 1 second',
        'Weather Ops': 'All-Weather',
        'Power': 'Solar + Battery'
      },
      features: [
        'Simultaneous multi-target tracking',
        'AI-powered threat classification',
        'Weather-independent operation',
        'Real-time alert system',
        'Integration with existing systems'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },

    // Tactical Communication Systems
    {
      id: 'link-secure',
      categoryId: 'communications',
      name: 'Gamma Link-Secure',
      subtitle: 'Encrypted Field Network',
      description: 'Encrypted field communication network connecting teams, vehicles, and UAVs.',
      image: img8,
      status: 'ACTIVE',
      classification: 'RESTRICTED',
      specifications: {
        'Range': '50 km',
        'Network Type': 'Mesh Topology',
        'Encryption': 'AES-256 Quantum',
        'Bandwidth': '100 Mbps',
        'Nodes': 'Up to 1000',
        'Latency': '< 10ms',
        'Power': '72h Battery Life',
        'Environment': 'Ruggedized IP68'
      },
      features: [
        'Self-healing mesh network',
        'Quantum encryption protocols',
        'Voice, data, and video support',
        'Jamming-resistant frequencies',
        'Rapid deployment capability'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },
    {
      id: 'relay-x',
      categoryId: 'communications',
      name: 'Gamma Relay-X',
      subtitle: 'Long-Range Transmission Unit',
      description: 'Long-range transmission units designed for harsh and contested environments.',
      image: img9,
      status: 'ACTIVE',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Range': '200 km',
        'Power Output': '100W',
        'Frequency': 'Multi-Band',
        'Antenna': 'Adaptive Array',
        'Environment': 'Extreme Weather',
        'Setup Time': '< 15 minutes',
        'Encryption': 'Military Standard',
        'Power Source': 'Portable Generator'
      },
      features: [
        'Extended range capability',
        'Anti-jamming technology',
        'Rapid field deployment',
        'Multi-frequency operation',
        'Extreme environment rated'
      ],
      price: 'Contact for Pricing',
      availability: 'Available'
    },

    // Future Innovations
    {
      id: 'stratos',
      categoryId: 'future',
      name: 'Gamma Stratos',
      subtitle: 'High-Altitude Long-Endurance UAV',
      description: 'High-Altitude Long-Endurance (HALE) UAV for persistent border surveillance and communication coverage.',
      image: img10,
      status: 'DEVELOPMENT',
      classification: 'TOP SECRET',
      specifications: {
        'Altitude': '20,000 m',
        'Endurance': '30+ days',
        'Range': 'Global',
        'Payload': '500 kg',
        'Power': 'Solar + Fuel Cell',
        'Communication': 'Satellite Link',
        'Surveillance': 'Multi-Spectrum',
        'Launch': '2026'
      },
      features: [
        'Stratospheric operation altitude',
        'Month-long endurance flights',
        'Global surveillance capability',
        'Solar-powered sustainability',
        'Advanced sensor integration'
      ],
      price: 'Classified',
      availability: 'Development Phase'
    },
    {
      id: 'hydra',
      categoryId: 'future',
      name: 'Gamma Hydra',
      subtitle: 'Autonomous Maritime Drone',
      description: 'Autonomous maritime drones for coastal monitoring, patrol, and search-and-rescue missions.',
      image: img11,
      status: 'CONCEPT',
      classification: 'CONFIDENTIAL',
      specifications: {
        'Range': '500 km',
        'Endurance': '72 hours',
        'Speed': '45 knots',
        'Payload': '200 kg',
        'Sensors': 'Sonar, Radar, Optical',
        'Environment': 'Sea State 6',
        'Power': 'Hybrid Electric',
        'Launch': '2027'
      },
      features: [
        'Autonomous navigation system',
        'Multi-mission capability',
        'Severe weather operation',
        'Underwater detection',
        'Search and rescue equipped'
      ],
      price: 'TBD',
      availability: 'Concept Phase'
    }
  ]
};

export default productsData;