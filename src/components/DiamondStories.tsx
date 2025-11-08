import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoCard {
  id: number;
  videoUrl: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  productName: string;
  bgColor: string;
}

const CARDS_DATA: VideoCard[] = [
  {
    id: 1,
    videoUrl: '/images/sun.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    title: 'DATE NIGHT SPARKLE',
    subtitle: 'Evening Diamond Jewellery',
    productName: 'Luxe Diamond Drop Earrings',
    bgColor: ''
  },
  {
    id: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: '/images/pen.jpg',
    title: 'CELEBRATION READY',
    subtitle: 'Festive Diamond Collection',
    productName: 'Royal Diamond Necklace',
    bgColor: ''
  },
  {
    id: 3,
    videoUrl: '/images/sun.mp4',
    thumbnail: 'https://cdn.pixabay.com/photo/2024/01/30/13/40/ai-generated-8542058_1280.jpg',
    title: 'WEEKEND VIBES',
    subtitle: 'Casual Bangle Pieces',
    productName: 'Delicate Diamond Bracelet',
    bgColor: ''
  },
  {
    id: 4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnail: '/images/pen.jpg',
    title: 'BRUNCH WITH THE GIRLS!',
    subtitle: 'Everyday Diamond Jewellery',
    productName: 'Exquisite Vines Diamond Necklace Set',
    bgColor: ''
  },
  {
    id: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/11/20/14/28/fashion-6811980_1280.jpg',
    title: 'OFFICE ELEGANCE',
    subtitle: 'Professional Diamond Collection',
    productName: 'Classic Diamond Solitaire Ring',
    bgColor: ''
  }
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const visibleCards = useMemo(() => {
    const total = CARDS_DATA.length;
    return [
      CARDS_DATA[(currentIndex - 2 + total) % total],
      CARDS_DATA[(currentIndex - 1 + total) % total],
      CARDS_DATA[currentIndex],
      CARDS_DATA[(currentIndex + 1) % total],
      CARDS_DATA[(currentIndex + 2) % total]
    ];
  }, [currentIndex]);

  const handleVideoControl = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    handleVideoControl();
  }, [handleVideoControl, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CARDS_DATA.length);
    setIsPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CARDS_DATA.length) % CARDS_DATA.length);
    setIsPlaying(false);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  }, []);

  const toggleMute = useCallback(() => setIsMuted(prev => !prev), []);
  const togglePlay = useCallback(() => setIsPlaying(prev => !prev), []);
  const openFullscreen = useCallback(() => setIsFullscreen(true), []);
  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  const getCardStyle = (idx: number) => {
    const positions = {
      0: { scale: 'scale-[0.65]', translate: '-translate-x-[85%]', opacity: 'opacity-40', zIndex: 'z-0', blur: 'blur-[1px]' },
      1: { scale: 'scale-[0.8]', translate: '-translate-x-[45%]', opacity: 'opacity-70', zIndex: 'z-10', blur: 'blur-[0.5px]' },
      2: { scale: 'scale-100', translate: 'translate-x-0', opacity: 'opacity-100', zIndex: 'z-30', blur: '' },
      3: { scale: 'scale-[0.8]', translate: 'translate-x-[45%]', opacity: 'opacity-70', zIndex: 'z-10', blur: 'blur-[0.5px]' },
      4: { scale: 'scale-[0.65]', translate: 'translate-x-[85%]', opacity: 'opacity-40', zIndex: 'z-0', blur: 'blur-[1px]' }
    };
    return positions[idx as keyof typeof positions];
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Styling With Diamonds
          </h1>
          <p className="text-base text-slate-500 font-light">
            Trendsetting diamond jewellery suited for every occasion
          </p>
        </header>

        <div className="relative h-[550px] flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            {visibleCards.map((card, idx) => {
              const isCenter = idx === 2;
              const style = getCardStyle(idx);
              const isDark = card.id === 3;

              return (
                <div
                  key={`${card.id}-${idx}`}
                  className={`absolute transition-all duration-500 ease-out ${style.scale} ${style.translate} ${style.opacity} ${style.zIndex} ${style.blur} ${
                    !isCenter && 'cursor-pointer hover:scale-105'
                  }`}
                  style={{ width: '280px' }}
                  onClick={() => !isCenter && goToSlide((currentIndex + idx - 2 + CARDS_DATA.length) % CARDS_DATA.length)}
                >
                  <div className={`relative ${card.bgColor} backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl`}>
                    <div className="relative aspect-[9/16]">
                      {isCenter && isPlaying ? (
                        <video
                          ref={videoRef}
                          className="absolute inset-0 w-full h-full object-cover"
                          src={card.videoUrl}
                          loop
                          muted={isMuted}
                          playsInline
                        />
                      ) : (
                        <img
                          src={card.thumbnail}
                          alt={card.title}
                          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                          loading="lazy"
                        />
                      )}
                      
                      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-gradient-to-t from-black/50 via-transparent to-black/10'}`} />
                      
                      {isCenter && (
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute();
                            }}
                            className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              openFullscreen();
                            }}
                            className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
                            aria-label="Fullscreen"
                          >
                            <Maximize2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className={`text-xl font-bold mb-1 tracking-wide ${isDark ? 'text-white' : 'text-white drop-shadow-lg'}`}>
                          {card.title}
                        </h3>
                        <p className={`text-xs mb-3 ${isDark ? 'text-gray-200' : 'text-white/90 drop-shadow'}`}>
                          {card.subtitle}
                        </p>
                        
                        {isCenter && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePlay();
                            }}
                            className="w-full py-2.5 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
                          >
                            {isPlaying ? 'Pause Video' : 'Play Video'}
                          </button>
                        )}
                        
                        <div className="flex items-center gap-2 mt-3 bg-white/15 backdrop-blur-md rounded-full p-2 pr-4">
                          <div className="w-9 h-9 bg-white/80 rounded-full flex-shrink-0" />
                          <span className="text-xs font-medium text-white drop-shadow">
                            {card.productName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {CARDS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'w-6 bg-slate-700' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 left-4 z-60 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-sm h-full max-h-[80vh] mx-4">
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden">
              <video
                ref={fullscreenVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={CARDS_DATA[currentIndex].videoUrl}
                loop
                muted={isMuted}
                autoPlay
                playsInline
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={toggleMute}
                  className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 tracking-wide text-white drop-shadow-lg">
                  {CARDS_DATA[currentIndex].title}
                </h3>
                <p className="text-sm mb-4 text-white/90 drop-shadow">
                  {CARDS_DATA[currentIndex].subtitle}
                </p>
                
                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full p-3 pr-5">
                  <div className="w-10 h-10 bg-white/80 rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium text-white drop-shadow">
                    {CARDS_DATA[currentIndex].productName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;