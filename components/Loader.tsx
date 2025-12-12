import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Ground (immediate)
    // Stage 1: Walls up
    setTimeout(() => setStage(1), 300);
    // Stage 2: Roof drops
    setTimeout(() => setStage(2), 1000);
    // Stage 3: Windows/Door appear
    setTimeout(() => setStage(3), 1800);
    // Stage 4: Text + Finish
    setTimeout(() => setStage(4), 2500);
    
    // Complete
    const timer = setTimeout(() => onComplete(), 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-champagne">
      <div className="relative w-64 h-64 mb-8 flex items-end justify-center">
        
        {/* Container for the house to ensure alignment */}
        <div className="relative w-40 h-40">
          
          {/* Ground Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-champagne/30 rounded-full transition-all duration-1000" style={{ width: stage >= 0 ? '100%' : '0%' }}></div>

          {/* House Body (Walls) */}
          <div 
            className="absolute bottom-1 left-4 right-4 h-24 border-2 border-champagne bg-champagne/5 transition-all duration-1000 ease-out origin-bottom"
            style={{ 
              transform: stage >= 1 ? 'scaleY(1)' : 'scaleY(0)',
              opacity: stage >= 1 ? 1 : 0 
            }}
          >
            {/* Door */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-14 border-t-2 border-l-2 border-r-2 border-champagne transition-all duration-700 delay-300"
              style={{ opacity: stage >= 3 ? 1 : 0 }}
            ></div>
            
            {/* Windows */}
            <div className="absolute top-4 left-3 w-6 h-6 border border-champagne transition-all duration-700 delay-500" style={{ opacity: stage >= 3 ? 1 : 0 }}></div>
            <div className="absolute top-4 right-3 w-6 h-6 border border-champagne transition-all duration-700 delay-700" style={{ opacity: stage >= 3 ? 1 : 0 }}></div>
          </div>

          {/* Roof */}
          <div 
            className="absolute bottom-[100px] left-0 right-0 h-16 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)"
            style={{ 
              transform: stage >= 2 ? 'translateY(0)' : 'translateY(-40px)',
              opacity: stage >= 2 ? 1 : 0
            }}
          >
            <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,50 L50,0 L100,50" fill="none" stroke="#d4af37" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              {/* Internal Roof Lines for detail */}
              <path d="M50,10 L50,50" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 2" style={{ opacity: stage >= 3 ? 0.5 : 0, transition: 'opacity 1s' }} />
            </svg>
          </div>

        </div>
      </div>
      
      <div className={`text-center transition-all duration-1000 transform ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-4xl font-serif tracking-[0.2em] uppercase text-white">Bliff</h1>
        <p className="text-sm font-sans tracking-[0.5em] text-champagne mt-2 uppercase">Real Estate</p>
        <div className="mt-6 flex justify-center gap-2">
           <div className="w-2 h-2 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '0s' }}></div>
           <div className="w-2 h-2 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '0.2s' }}></div>
           <div className="w-2 h-2 rounded-full bg-champagne animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
