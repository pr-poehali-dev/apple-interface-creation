import { useEffect, useRef, useState } from 'react';

interface AppleFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  darkMode?: boolean;
}

const AppleFeature = ({
  title,
  description,
  imageUrl,
  reverse = false,
  darkMode = false
}: AppleFeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-apple-dark text-white' : 'bg-white text-apple-dark'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${reverse ? 'md:grid-cols-[55%_45%]' : 'md:grid-cols-[45%_55%]'} gap-8 md:gap-12 items-center`}>
          <div className={`${reverse ? 'md:order-2' : ''} space-y-6`}>
            <h2 
              className={`text-3xl md:text-4xl font-semibold leading-tight opacity-0 ${isVisible ? `animate-${reverse ? 'slide-right' : 'slide-left'}` : ''}`}
            >
              {title}
            </h2>
            <p 
              className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} opacity-0 ${isVisible ? `animate-${reverse ? 'slide-right' : 'slide-left'} stagger-1` : ''}`}
            >
              {description}
            </p>
          </div>
          
          <div 
            className={`${reverse ? 'md:order-1' : ''} overflow-hidden opacity-0 ${isVisible ? 'animate-scale-up' : ''}`}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleFeature;
