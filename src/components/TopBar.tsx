import { useState,} from 'react';

const TopBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  const messages = [
    {
      icon: '🚚',
      text: 'Wholesale B2B Shipping Enabled above INR 5k for India / International Orders'
    },
    {
      icon: '🎉',
      text: 'Festive Season Special - Massive Rate Reductions Just for You! Don\'t Miss Out!'
    },
    {
      icon: '💸',
      text: 'Flat 3% Off On Your First Purchase - Use Code:',
      highlight: 'WELCOME'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 overflow-hidden relative">
      <div 
        className={`flex ${isPaused ? '' : 'animate-marquee'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First set of messages */}
        <div className="flex flex-shrink-0">
          {messages.map((msg, idx) => (
            <div key={`msg-1-${idx}`} className="flex items-center mx-8 text-sm font-medium">
              <span className="mr-2">{msg.icon}</span>
              <span>{msg.text}</span>
              {msg.highlight && (
                <span className="ml-1 px-2 py-0.5 bg-white text-pink-600 rounded font-bold text-xs">
                  {msg.highlight}
                </span>
              )}
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex flex-shrink-0">
          {messages.map((msg, idx) => (
            <div key={`msg-2-${idx}`} className="flex items-center mx-8 text-sm font-medium">
              <span className="mr-2">{msg.icon}</span>
              <span>{msg.text}</span>
              {msg.highlight && (
                <span className="ml-1 px-2 py-0.5 bg-white text-pink-600 rounded font-bold text-xs">
                  {msg.highlight}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TopBar;