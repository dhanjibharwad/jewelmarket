import { useRef, useState, useEffect, useCallback, memo, useMemo } from 'react';

interface Card {
  id: number;
  title: string;
  image: string;
  rotation: string;
}

const SCROLL_SPEED = 0.8;
const DUPLICATE_COUNT = 3;
const CARD_OVERLAP = -120;

const CARDS: readonly Card[] = [
  { id: 1, title: 'DAILY WEAR', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80', rotation: '-rotate-6' },
  { id: 2, title: 'OFFICE WEAR', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80', rotation: 'rotate-0' },
  { id: 3, title: 'PARTY WEAR', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80', rotation: 'rotate-6' },
  { id: 4, title: 'WEDDING COLLECTION', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80', rotation: '-rotate-5' },
  { id: 5, title: 'BRIDAL COLLECTION', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80', rotation: 'rotate-5' }
] as const;

const CardItem = memo(({ card, index, isFirst }: { card: Card; index: number; isFirst: boolean }) => (
  <div
    className={`relative flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 ${index === 1 ? 'z-30' : 'z-10'}`}
    style={{ marginLeft: isFirst ? '0' : `${CARD_OVERLAP}px` }}
  >
    <div 
      className={`relative w-[340px] md:w-[420px] h-[480px] md:h-[600px] bg-white shadow-2xl ${card.rotation} transition-all duration-500 group-hover:rotate-0 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]`}
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(0,0,0,0.08)' }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 md:p-8 pointer-events-none">
        <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-center">
          {card.title}
        </h3>
      </div>
    </div>
  </div>
), (prevProps, nextProps) => 
  prevProps.card.id === nextProps.card.id && 
  prevProps.index === nextProps.index
);

CardItem.displayName = 'CardItem';

const JewelryCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Memoize duplicated cards
  const duplicatedCards = useMemo(() => 
    Array.from({ length: DUPLICATE_COUNT }, () => CARDS).flat(),
    []
  );

  // Optimized animation loop
  const animate = useCallback((timestamp: number) => {
    if (!scrollRef.current || isPaused || isDraggingRef.current) {
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
      return;
    }

    const deltaTime = lastTimestampRef.current ? timestamp - lastTimestampRef.current : 16;
    lastTimestampRef.current = timestamp;

    scrollPositionRef.current += SCROLL_SPEED * (deltaTime / 16);

    const cardSetWidth = scrollRef.current.scrollWidth / DUPLICATE_COUNT;
    
    if (scrollPositionRef.current >= cardSetWidth) {
      scrollPositionRef.current %= cardSetWidth;
    }
    
    scrollRef.current.scrollLeft = scrollPositionRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  // Handlers
  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);

  // Visibility optimization
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
        lastTimestampRef.current = 0;
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Animation initialization
  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, isPaused]);

  // Drag functionality with passive listeners
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleStart = (clientX: number) => {
      isDraggingRef.current = true;
      startXRef.current = clientX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMove = (clientX: number) => {
      if (!isDraggingRef.current) return;
      const x = clientX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      const newScrollLeft = scrollLeftRef.current - walk;
      container.scrollLeft = Math.max(0, newScrollLeft);
      scrollPositionRef.current = container.scrollLeft;
    };

    const handleEnd = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
    };

    const onMouseDown = (e: MouseEvent) => handleStart(e.pageX);
    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        e.stopPropagation();
        handleMove(e.pageX);
      }
    };
    const onMouseUp = handleEnd;
    const onMouseLeave = handleEnd;

    const onTouchStart = (e: TouchEvent) => {
      handleStart(e.touches[0].clientX);
      setIsPaused(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      handleEnd();
      setIsPaused(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden">

      <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Fashion lovers
          </h1>
          <p className="text-base text-slate-500 font-light">
           jewellery suited for every occasion
          </p>
        </header>

      <div
        ref={scrollRef}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        className="flex items-center overflow-x-hidden overflow-y-hidden scrollbar-hide px-8 md:px-16 cursor-grab active:cursor-grabbing select-none will-change-scroll"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'none'
        }}
      >
        {duplicatedCards.map((card, idx) => (
          <CardItem 
            key={`card-${card.id}-${idx}`} 
            card={card} 
            index={idx % CARDS.length} 
            isFirst={idx === 0}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .will-change-scroll { will-change: scroll-position; }
      `}</style>
    </div>
  );
};

export default JewelryCards;