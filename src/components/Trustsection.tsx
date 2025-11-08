import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header Text bg-[#f5f5f0]*/}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gray-600 italic text-lg">
          ✦ Trust us to be part of your precious moments and to deliver jewellery that you'll cherish forever. ✦
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tanishq Exchange */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c9a961] to-[#b8935a] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-serif text-2xl">T</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-[#c9a961] text-xs font-semibold">Jewel</span>
              </div>
            </div>
          </div>
          <h3 className="text-gray-800 font-semibold text-lg mt-4">Jewel</h3>
          <h3 className="text-gray-800 font-semibold text-lg">Exchange</h3>
        </div>

        {/* The Purity Guarantee */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Triangle background */}
                <path
                  d="M50 10 L90 80 L10 80 Z"
                  fill="url(#goldGradient)"
                  stroke="#8b7355"
                  strokeWidth="2"
                />
                {/* Circle in center */}
                <circle cx="50" cy="55" r="12" fill="#8b7355" />
                <circle cx="50" cy="55" r="8" fill="white" />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c9a961" />
                    <stop offset="100%" stopColor="#b8935a" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#8b7355] text-white text-[8px] px-2 py-0.5 rounded">
                BIS HALLMARKED
              </div>
            </div>
          </div>
          <h3 className="text-gray-800 font-semibold text-lg mt-4">The Purity</h3>
          <h3 className="text-gray-800 font-semibold text-lg">Guarantee</h3>
        </div>

        {/* Complete Transparency and Trust */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Diamond/gem shape */}
                <path
                  d="M50 20 L70 40 L60 75 L40 75 L30 40 Z"
                  fill="url(#goldGradient2)"
                  stroke="#8b7355"
                  strokeWidth="2"
                />
                {/* Inner details */}
                <path
                  d="M50 20 L50 75 M30 40 L70 40 M40 75 L60 75"
                  stroke="#8b7355"
                  strokeWidth="1"
                  fill="none"
                />
                <defs>
                  <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c9a961" />
                    <stop offset="100%" stopColor="#b8935a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h3 className="text-gray-800 font-semibold text-lg mt-4">Complete Transparency</h3>
          <h3 className="text-gray-800 font-semibold text-lg">and Trust</h3>
        </div>

        {/* Lifetime Maintenance */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Shield shape */}
                <path
                  d="M50 15 L75 25 L75 50 Q75 75 50 85 Q25 75 25 50 L25 25 Z"
                  fill="url(#goldGradient3)"
                  stroke="#8b7355"
                  strokeWidth="2"
                />
                {/* T letter in shield */}
                <text
                  x="50"
                  y="58"
                  fontSize="32"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontWeight="bold"
                >
                  T
                </text>
                <defs>
                  <linearGradient id="goldGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c9a961" />
                    <stop offset="100%" stopColor="#b8935a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h3 className="text-gray-800 font-semibold text-lg mt-4">Lifetime</h3>
          <h3 className="text-gray-800 font-semibold text-lg">Maintenance</h3>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;