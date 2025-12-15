import React, { useState, useRef, useEffect } from 'react';

const ScratchCardPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isScratched, setIsScratched] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (isOpen && !isScratched && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 200;
        canvas.height = 120;

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#ff6b6b');
        gradient.addColorStop(0.5, '#ee5a6f');
        gradient.addColorStop(1, '#c44569');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#ffd93d';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        ctx.moveTo(110, 40);
        ctx.lineTo(95, 60);
        ctx.lineTo(105, 60);
        ctx.lineTo(95, 80);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(45, 35, 15, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(155, 95, 18, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Scratch and Win', canvas.width / 2, 110);
      }
    }
  }, [isOpen, isScratched]);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || isScratched) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const checkScratchPercentage = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) transparent++;
    }

    const percentage = (transparent / (pixels.length / 4)) * 100;

    if (percentage > 60 && !isScratched) {
      setIsScratched(true);
      setShowConfetti(true);
    }
  };

  const handleSubmit = () => {
    if (phoneNumber.length === 10) {
      alert(`Discount code revealed! Your 3% discount code is: SAVE3NOW\nSent to: +91 ${phoneNumber}`);
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 150 }, (_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 1;
            const duration = 2.5 + Math.random() * 2;
            const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4ecdc4', '#a29bfe', '#fd79a8', '#fab1a0', '#74b9ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 8 + Math.random() * 8;
            
            return (
              <div
                key={i}
                className="absolute opacity-0 rounded-full"
                style={{
                  left: `${left}%`,
                  top: '-20px',
                  backgroundColor: color,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `confetti-fall ${duration}s ease-out ${delay}s forwards`,
                }}
              />
            );
          })}
        </div>
      )}
      
      <div className="fixed inset-0 flex items-center justify-center z-40 p-4" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="bg-gray-900 rounded-xl p-4 max-w-xs w-full relative shadow-2xl">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>

          {!isScratched ? (
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Scratch and Win!</h2>
                <p className="text-gray-400 mb-4 text-sm">Scratch the card below to reveal your exclusive discount</p>
              </div>

              <div className="relative inline-block">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg" style={{ width: '200px', height: '120px' }}>
                  3% OFF
                </div>
                <canvas
                  ref={canvasRef}
                  onMouseDown={() => setIsDrawing(true)}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseMove={(e) => isDrawing && scratch(e)}
                  onMouseLeave={() => setIsDrawing(false)}
                  onTouchStart={() => setIsDrawing(true)}
                  onTouchEnd={() => setIsDrawing(false)}
                  onTouchMove={(e) => isDrawing && scratch(e)}
                  className="rounded-xl cursor-pointer shadow-lg relative z-10"
                  style={{ touchAction: 'none', display: 'block' }}
                />
              </div>

              <p className="text-gray-500 text-xs mt-3">Use your mouse or finger to scratch</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4">
                <div className="text-4xl mb-3">🎉</div>
                <h2 className="text-xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
                    Congratulations!
                  </span>
                </h2>
                <p className="text-lg text-white mb-2">
                  You have won <span className="font-bold text-pink-400">3% discount</span>
                </p>
                <p className="text-gray-400 text-sm mb-4">Enter your number to reveal discount code</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 focus-within:border-pink-500 transition-colors">
                  <div className="flex items-center mr-2">
                    <span className="text-lg mr-1">🇮🇳</span>
                    <span className="text-white font-medium text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="Phone Number"
                    className="bg-transparent text-white flex-1 outline-none placeholder-gray-500 text-sm"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={phoneNumber.length !== 10}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  <span>⚡</span>
                  Submit
                  <span>⚡</span>
                </button>

                <p className="text-xs text-gray-500">
                  By submitting this form, you accept our{' '}
                  <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ScratchCardPopup;