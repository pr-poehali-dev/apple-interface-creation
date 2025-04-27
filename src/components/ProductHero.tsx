import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  darkMode?: boolean;
}

const ProductHero = ({ 
  title, 
  subtitle, 
  imageUrl, 
  darkMode = false 
}: ProductHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative w-full overflow-hidden ${darkMode ? 'bg-apple-dark text-white' : 'bg-white text-apple-dark'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
        <div className="text-center space-y-4 z-10 relative">
          <h1 
            className={`text-5xl md:text-6xl font-bold tracking-tight opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            {title}
          </h1>
          <p 
            className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            {subtitle}
          </p>
          <div 
            className={`pt-6 flex justify-center space-x-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.5s' }}
          >
            <Button 
              variant="ghost" 
              className={`text-apple-blue hover:text-apple-blue/90 transition-all duration-300 group rounded-full`}
            >
              Узнать больше 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost"
              className={`text-apple-blue hover:text-apple-blue/90 transition-all duration-300 group rounded-full`}
            >
              Купить 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      <div 
        className={`absolute w-full bottom-0 left-0 right-0 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
        style={{ animationDelay: '0.7s' }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full max-w-5xl mx-auto object-contain animate-float"
        />
      </div>
    </section>
  );
};

export default ProductHero;
