import React from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

interface GiftingCardProps {
  title: string;
  imageUrl: string;
  accentColor: string;
  bgLight: string;
}

const GiftingCard: React.FC<GiftingCardProps> = ({ title, imageUrl, bgLight }) => {
  return (
    <div className="relative w-80 h-[450px] group cursor-pointer">
      {/* Main Card */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
        style={{ backgroundColor: bgLight }}
      >
        {/* Icons */}
        <Sparkles className="absolute top-6 right-6 w-6 h-6 text-white opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <Heart className="absolute top-6 left-6 w-5 h-5 text-white opacity-70 transition-transform duration-300 group-hover:scale-110" fill="white" />

        {/* Image */}
        <div className="relative w-full h-4/5 p-6 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
          <div className="text-center transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-4 h-4 text-white/80" />
              <p className="text-white/90 text-xs font-light tracking-widest uppercase">
                Perfect Gifts for
              </p>
            </div>
            <h3 className="text-white text-5xl font-bold tracking-wider uppercase"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.4)' }}>
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Ribbon */}
      {/* <div 
        className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 flex items-center justify-center"
        style={{ backgroundColor: accentColor }}
      >
        <Gift className="w-8 h-8 text-white" />
      </div> */}
    </div>
  );
};

const GiftingCardsDemo = () => {
  const cards = [
    {
      title: 'WIFE',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      accentColor: '#FF6B9D',
      bgLight: '#FFF0F5'
    },
    {
      title: 'HUSBAND',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      accentColor: '#4A90E2',
      bgLight: '#E8F4FD'
    },
    {
      title: 'FRIENDS',
      imageUrl: 'https://media.istockphoto.com/id/1479798765/photo/vertical-group-of-happy-friends-posing-for-a-selfie-on-a-spring-day-as-they-party-together.jpg?s=612x612&w=0&k=20&c=3ch9k6zg71DfVtWzf1Q-TgJXPeQyoflY7fCpiPLmoZs=',
      accentColor: '#E94B8B',
      bgLight: '#FFF5F9'
    },
    {
      title: 'HUSBAND',
      imageUrl: 'https://media.istockphoto.com/id/1362997089/photo/portrait-of-businessman.jpg?s=612x612&w=0&k=20&c=dz4Js-MCUmNzLKjtndPELk0pKQa2X8DMVmwm6xr1HU0=',
      accentColor: '#4A90E2',
      bgLight: '#E8F4FD'
    },
    {
      title: 'Relative',
      imageUrl: 'https://resizing.flixster.com/YaIExsYQFKqdgPOWPtivoNLb9Pc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11103086_k_v9_aa.jpg',
      accentColor: '#6C63FF',
      bgLight: '#F0EFFF'
    },
    {
      title: 'WIFE',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      accentColor: '#FF6B9D',
      bgLight: '#FFF0F5'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
          The Gifting Season
        </h1>
        <p className="text-base text-slate-500 font-light">
          Discover the perfect gift for your loved ones
        </p>
      </header>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <GiftingCard key={index} {...card} />
        ))}
      </div>

    </div>
  );
};

export default GiftingCardsDemo;