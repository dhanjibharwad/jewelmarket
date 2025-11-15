import { useRef, useState, useEffect, useCallback, memo, useMemo } from 'react';

// Interface for the card data
interface Card {
  id: number;
  title: string;
  image: string;
  rotation: string;
}

// --- Constants ---
const SCROLL_SPEED = 0.8;
const DUPLICATE_COUNT = 3;
const CARD_OVERLAP = -120; // Overlap in pixels

// Readonly array for immutable card data
const CARDS: readonly Card[] = [
  { id: 1, title: 'DAILY WEAR', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80', rotation: '-rotate-6' },
  { id: 2, title: 'OFFICE WEAR', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80', rotation: 'rotate-0' },
  { id: 3, title: 'PARTY WEAR', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80', rotation: 'rotate-6' },
  { id: 4, title: 'WEDDING COLLECTION', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80', rotation: '-rotate-5' },
  { id: 5, title: 'BRIDAL COLLECTION', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80', rotation: 'rotate-5' }
] as const;

// --- Card Item Component ---
// Memoized to prevent unnecessary re-renders
const CardItem = memo(({ card, index, isFirst }: { card: Card; index: number; isFirst: boolean }) => (
  <div
    className={`relative flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 ${index === 1 ? 'z-30' : 'z-10'}`}
    style={{ marginLeft: isFirst ? '0' : `${CARD_OVERLAP}px` }}
  >
    {/* --- CHANGES ---
      - Removed all shadow classes (shadow-2xl, group-hover:shadow-[...])
      - Removed bg-white
      - Removed inline boxShadow style
      - Added rounded-lg and overflow-hidden to maintain a clean card shape
    */}
    <div
      className={`relative w-[340px] md:w-[420px] h-[480px] md:h-[600px] ${card.rotation} transition-all duration-500 group-hover:rotate-0 rounded-lg overflow-hidden`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        draggable="false"
        onError={(e) => {
          // Fallback in case an image fails to load
          (e.target as HTMLImageElement).src = `https://placehold.co/420x600/efefef/333?text=${card.title.replace(' ', '+')}`;
        }}
      />
      {/* This gradient remains as it's part of the text overlay, not a "reflection" */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 md:p-8 pointer-events-none">
        <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-center">
          {card.title}
        </h3>
      </div>
    </div>
  </div>
), (prevProps, nextProps) =>
  // Custom comparison for memo
  prevProps.card.id === nextProps.card.id &&
  prevProps.index === nextProps.index
);

CardItem.displayName = 'CardItem';

// --- Main Carousel Component ---
const JewelryCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Memoize the duplicated card array for performance
  const duplicatedCards = useMemo(() =>
    Array.from({ length: DUPLICATE_COUNT }, () => CARDS).flat(),
    []
  );

  // Optimized animation loop using requestAnimationFrame
  const animate = useCallback((timestamp: number) => {
    if (!scrollRef.current) return;

    if (isPaused || isDraggingRef.current) {
      // If paused or dragging, stop the animation loop but request a new frame
      // to check again, unless it's fully paused.
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
      lastTimestampRef.current = 0; // Reset timestamp
      return;
    }

    const deltaTime = lastTimestampRef.current ? timestamp - lastTimestampRef.current : 16.67;
    lastTimestampRef.current = timestamp;

    scrollPositionRef.current += SCROLL_SPEED * (deltaTime / 16.67);

    const cardSetWidth = scrollRef.current.scrollWidth / DUPLICATE_COUNT;
    
    // Loop the scroll position
    if (scrollPositionRef.current >= cardSetWidth) {
      scrollPositionRef.current %= cardSetWidth;
    }
    
    scrollRef.current.scrollLeft = scrollPositionRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]); // Dependency on isPaused to restart the loop

  // Handlers for pausing/resuming animation
  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);

  // Effect to pause animation if tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        handlePause();
      } else {
        handleResume();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [handlePause, handleResume]);

  // Effect to start/stop the animation loop
  useEffect(() => {
    if (!isPaused) {
      lastTimestampRef.current = 0; // Reset timestamp on resume
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, isPaused]);

  // --- IMPROVED DRAG FUNCTIONALITY ---
  // This effect now uses document-level listeners during the drag
  // for a smoother, more robust drag-to-scroll experience.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // --- Reusable Drag Handlers ---
    const onDragStart = (clientX: number) => {
      isDraggingRef.current = true;
      startXRef.current = clientX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      container.style.cursor = 'grabbing';
      // We set scrollPositionRef here to sync auto-scroll with drag position
      scrollPositionRef.current = container.scrollLeft;
    };

    const onDragMove = (clientX: number) => {
      if (!isDraggingRef.current) return;
      const x = clientX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
      const newScrollLeft = scrollLeftRef.current - walk;
      container.scrollLeft = newScrollLeft;
      scrollPositionRef.current = newScrollLeft; // Keep ref in sync
    };

    const onDragEnd = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
    };

    // --- Mouse Events ---
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault(); // Prevents text selection during drag
      onDragStart(e.pageX);
      document.addEventListener('mousemove', onDocumentMouseMove);
      document.addEventListener('mouseup', onDocumentMouseUp);
    };

    const onDocumentMouseMove = (e: MouseEvent) => {
      onDragMove(e.pageX);
    };

    const onDocumentMouseUp = () => {
      onDragEnd();
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);
    };

    // --- Touch Events ---
    const onTouchStart = (e: TouchEvent) => {
      onDragStart(e.touches[0].clientX);
      setIsPaused(true); // Pause auto-scroll on touch
      document.addEventListener('touchmove', onDocumentTouchMove, { passive: false });
      document.addEventListener('touchend', onDocumentTouchEnd, { passive: true });
    };

    const onDocumentTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevents page scroll while dragging
      onDragMove(e.touches[0].clientX);
    };

    const onDocumentTouchEnd = () => {
      onDragEnd();
      setIsPaused(false); // Resume auto-scroll on release
      document.removeEventListener('touchmove', onDocumentTouchMove);
      document.removeEventListener('touchend', onDocumentTouchEnd);
    };

    // --- Add Listeners ---
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('touchstart', onTouchStart, { passive: true });

    // --- Cleanup ---
    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('touchstart', onTouchStart);
      // Failsafe cleanup for document listeners
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);
      document.removeEventListener('touchmove', onDocumentTouchMove);
      document.removeEventListener('touchend', onDocumentTouchEnd);
    };
  }, []); // Empty dependency array as all refs and setters are stable

  return (
    // Added a light gray background to the main container
    <div className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden bg-white">

      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
          Fashion Lovers
        </h1>
        <p className="text-base text-slate-500 font-light">
          Jewellery suited for every occasion
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

      {/* Embedded style tag for scrollbar hiding (cross-browser) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .will-change-scroll { will-change: scroll-position; }
      `}</style>
    </div>
  );
};

export default JewelryCards;