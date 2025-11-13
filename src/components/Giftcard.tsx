import React from 'react';

interface GiftingCardProps {
  title: string;
  imageUrl: string;
  accentColor?: string;
  ribbonColor?: string;
}

const GiftingCard: React.FC<GiftingCardProps> = ({
  title,
  imageUrl,
  accentColor = '#D4AF37',
  ribbonColor = '#FFB6C1'
}) => {
  return (
    <div className="relative w-72 h-96 group cursor-pointer">
      {/* Main Card */}
      <div className="relative w-full h-full bg-gradient-to-br from-pink-50 to-beige-100 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        {/* Image Container */}
        <div className="w-full h-full flex items-center justify-center p-6">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-sm font-light tracking-wider mb-1">
            Gifts for
          </p>
          <h3 className="text-white text-4xl font-bold tracking-wide uppercase" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                fontFamily: 'serif'
              }}>
            {title}
          </h3>
        </div>
      </div>

      {/* Decorative Chain/Ribbon */}
      <div 
        className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-90 transition-transform duration-300 group-hover:rotate-12"
        style={{ 
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        {/* Chain texture effect */}
        <div className="absolute inset-0 rounded-full" 
             style={{
               background: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 3px,
                 rgba(255,255,255,0.1) 3px,
                 rgba(255,255,255,0.1) 6px
               )`
             }}
        />
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-8 h-8 bg-white rounded-full shadow-md opacity-80" />
        <div className="w-8 h-8 bg-white rounded-full shadow-md opacity-80" />
      </div>
    </div>
  );
};

// Demo Component
const GiftingCardsDemo = () => {
  const cards = [
    {
      title: 'WIFE',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/06/30/09/20/vietnamese-women-5355708_640.jpg',
      accentColor: '#FFD700',
    },
    {
      title: 'HUSBAND',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      accentColor: '#D4AF37',
    },
    {
      title: 'GIRLFRIEND',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      accentColor: '#FFB6C1',
      ribbonColor: '#FFC0CB'
    },
    {
      title: 'BOYFRIEND',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      accentColor: '#DAA520',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        THE GIFTING EDIT
      </h1>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <GiftingCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            accentColor={card.accentColor}
            ribbonColor={card.ribbonColor}
          />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-800" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};

export default GiftingCardsDemo;