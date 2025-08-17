import React, { useState, useEffect } from 'react';
import { Radar, Truck, Brain, Radio, Rocket, Shield, Eye, Zap, Target, ArrowRight, Info, X } from 'lucide-react';
import { productsData } from '../data';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('uas');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  const iconMap = {
    Radar: Radar,
    Truck: Truck,
    Brain: Brain,
    Radio: Radio,
    Rocket: Rocket
  };

  const filteredProducts = productsData.products.filter(
    product => product.categoryId === selectedCategory
  );

  const currentCategory = productsData.categories.find(
    cat => cat.id === selectedCategory
  );

  // Animation effects
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev + 1) % 100);
      if (scanProgress % 20 === 0) {
        setActiveProduct((prev) => (prev + 1) % filteredProducts.length);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [scanProgress, filteredProducts.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return '#10b981';
      case 'DEVELOPMENT': return '#f59e0b';
      case 'CONCEPT': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'TOP SECRET': return '#dc2626';
      case 'CONFIDENTIAL': return '#ea580c';
      case 'RESTRICTED': return '#d97706';
      default: return '#6b7280';
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Animated Grid Background - Simplified for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(27, 66, 66, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27, 66, 66, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
        
        {/* Scanning Lines - Hidden on mobile for performance */}
        <div className="absolute inset-0 hidden sm:block">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 mb-3 sm:mb-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
            <Target className="text-teal-500" size={16} />
            <span className="text-white font-mono tracking-wider text-xs sm:text-sm">DEFENSE SYSTEMS CATALOG</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-6 font-mono leading-tight">
            OUR <span className="text-teal-500">PRODUCTS</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Advanced defense technologies designed for modern warfare and security operations. 
            Each system integrates cutting-edge AI and battlefield-proven engineering.
          </p>
        </div>

        {/* Category Navigation - Now displays 4 categories in 2x2 grid on mobile, 1x4 on larger screens */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-mono">PRODUCT CATEGORIES</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {productsData.categories.map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 sm:p-6 border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-teal-500 bg-teal-500/10 scale-105'
                      : 'border-gray-600 hover:border-gray-500 bg-black/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <IconComponent 
                      size={32} 
                      className={`sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${selectedCategory === category.id ? 'text-teal-500' : 'text-gray-400'}`} 
                    />
                    <div className="text-center">
                      <h3 className={`font-mono font-bold text-sm sm:text-base lg:text-lg ${
                        selectedCategory === category.id ? 'text-teal-500' : 'text-white'
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-tight">{category.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Header */}
        {currentCategory && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 border border-teal-500/30 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              {React.createElement(iconMap[currentCategory.icon], { 
                size: 24, 
                className: "text-teal-500 sm:w-8 sm:h-8" 
              })}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-mono">{currentCategory.name}</h2>
                <p className="text-gray-400 text-sm sm:text-base">{currentCategory.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`border transition-all duration-300 cursor-pointer ${
                activeProduct === index 
                  ? 'border-teal-500 bg-teal-500/5 scale-105' 
                  : 'border-gray-600 hover:border-gray-500 bg-black/30'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <div 
                    className="px-2 sm:px-3 py-1 font-mono text-xs font-bold rounded"
                    style={{ 
                      backgroundColor: `${getStatusColor(product.status)}20`,
                      color: getStatusColor(product.status),
                      border: `1px solid ${getStatusColor(product.status)}`
                    }}
                  >
                    {product.status}
                  </div>
                </div>

                {/* Classification Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <div 
                    className="px-2 sm:px-3 py-1 font-mono text-xs font-bold rounded flex items-center gap-1"
                    style={{ 
                      backgroundColor: `${getClassificationColor(product.classification)}20`,
                      color: getClassificationColor(product.classification),
                      border: `1px solid ${getClassificationColor(product.classification)}`
                    }}
                  >
                    <Shield size={10} className="sm:w-3 sm:h-3" />
                    <span className="hidden sm:inline">{product.classification}</span>
                    <span className="sm:hidden">{product.classification.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Product Title Overlay */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">{product.name}</h3>
                  <p className="text-teal-500 font-mono text-xs sm:text-sm">{product.subtitle}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-3 sm:mb-4">
                  {product.description}
                </p>

                {/* Key Specs Preview */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-400 font-mono">{key}:</span>
                      <span className="text-teal-500 font-mono">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="flex-1 px-3 sm:px-4 py-2 border border-teal-500 text-teal-500 font-mono text-xs sm:text-sm font-bold hover:bg-teal-500 hover:text-black transition-all duration-300"
                  >
                    <span className="hidden sm:inline">VIEW DETAILS</span>
                    <span className="sm:hidden">DETAILS</span>
                  </button>
                  <button className="px-3 sm:px-4 py-2 border border-gray-600 text-gray-400 font-mono text-sm hover:border-gray-500 hover:text-gray-300 transition-all duration-300">
                    <Info size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Availability */}
                <div className="mt-3 sm:mt-4 flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-mono">AVAILABILITY:</span>
                  <span className={`font-mono font-bold ${
                    product.availability === 'Available' ? 'text-green-400' :
                    product.availability.includes('2025') || product.availability.includes('2026') || product.availability.includes('2027') ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {product.availability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30 bg-black/90 backdrop-blur-sm">
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-black/90 p-4 sm:p-6 border-b border-gray-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">{selectedProduct.name}</h2>
                    <p className="text-teal-500 font-mono text-base sm:text-lg">{selectedProduct.subtitle}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Product Image */}
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-48 sm:h-64 object-cover border border-gray-600"
                  />
                  
                  {/* Features */}
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono mb-3 sm:mb-4">KEY FEATURES</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono mb-3 sm:mb-4">DESCRIPTION</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedProduct.description}</p>
                  </div>

                  {/* Technical Specifications */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono mb-3 sm:mb-4">SPECIFICATIONS</h3>
                    <div className="space-y-1 sm:space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-2 sm:p-3 border border-gray-600/50">
                          <span className="text-gray-400 font-mono text-xs sm:text-sm">{key}:</span>
                          <span className="text-teal-500 font-mono text-xs sm:text-sm font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status and Pricing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                      <h4 className="text-white font-mono font-bold mb-2 text-sm sm:text-base">STATUS</h4>
                      <div 
                        className="px-2 sm:px-3 py-1 font-mono text-xs sm:text-sm font-bold rounded text-center"
                        style={{ 
                          backgroundColor: `${getStatusColor(selectedProduct.status)}20`,
                          color: getStatusColor(selectedProduct.status),
                          border: `1px solid ${getStatusColor(selectedProduct.status)}`
                        }}
                      >
                        {selectedProduct.status}
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4 border border-gray-600/50 bg-black/30">
                      <h4 className="text-white font-mono font-bold mb-2 text-sm sm:text-base">PRICING</h4>
                      <div className="text-teal-500 font-mono text-xs sm:text-sm font-bold text-center">
                        {selectedProduct.price}
                      </div>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="mt-4 sm:mt-6">
                    <Link 
                      to="/contact"
                      className="w-full p-3 sm:p-4 border border-teal-500 text-teal-500 font-mono font-bold hover:bg-teal-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      REQUEST INFORMATION
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-20 p-4 sm:p-6 lg:p-8 border border-teal-500/30 bg-black/50 backdrop-blur-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-mono">
            CUSTOM <span className="text-teal-500">SOLUTIONS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
            Need specialized defense technology tailored to your specific requirements? 
            Our engineering team can develop custom solutions for unique operational challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-6 sm:px-8 py-3 border border-teal-500 text-teal-500 font-mono font-bold hover:bg-teal-500 hover:text-black transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center"
            >
              DISCUSS REQUIREMENTS
            </Link>

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

export default ProductsPage;