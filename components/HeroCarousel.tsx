import React, { useState, useEffect } from 'react';

const IMAGES = [
  "https://picsum.photos/id/10/1600/900", // Nature/forest
  "https://picsum.photos/id/160/1600/900", // Technology/Learning
  "https://picsum.photos/id/20/1600/900", // Tools/Creation
  "https://picsum.photos/id/56/1600/900", // Lights/Warmth
];

interface HeroProps {
  title: string;
  subtitle: string;
}

const HeroCarousel: React.FC<HeroProps> = ({ title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {/* Images */}
      {IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light drop-shadow-md animate-fade-in-up delay-150">
          {subtitle}
        </p>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;