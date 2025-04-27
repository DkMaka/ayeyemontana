
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  image: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showButtons?: boolean;
  showArrow?: boolean;
  onArrowClick?: () => void;
  galleryLink?: string;
  bookingRef?: string;
}

const Hero = ({ 
  image, 
  title, 
  subtitle, 
  showButtons = true, 
  showArrow = true,
  onArrowClick,
  galleryLink,
  bookingRef
}: HeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector('.hero-container');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  // Handle arrow click with custom handler or default behavior
  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onArrowClick) {
      // Use custom handler if provided
      onArrowClick();
    } else {
      // Default behavior
      document.getElementById('about')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(bookingRef || 'booking');
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen hero-container">
      {/* Background image with lazy loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${isIntersecting ? image : ''})`,
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 500ms ease-in'
        }}
      >
        {/* Hidden img element to trigger load event */}
        {isIntersecting && (
          <img 
            src={image} 
            alt="" 
            className="hidden" 
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-[#1A2138] bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white container-custom px-4 py-20 sm:py-40">
        <div className="flex flex-col items-center gap-2">
          {title}
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
            {galleryLink ? (
              <Link 
                to={galleryLink}
                className="btn btn-secondary"
                aria-label="Explore gallery"
              >
                Explore Features
              </Link>
            ) : (
              <a 
                href="#features" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                aria-label="Explore features"
              >
                Explore Features
              </a>
            )}
            
          </div>
        )}
      </div>
      
      {showArrow && (
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
          onClick={handleArrowClick}
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </a>
      )}
    </div>
  );
};

export default Hero;
