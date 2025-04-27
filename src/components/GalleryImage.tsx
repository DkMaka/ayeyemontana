import  { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage = ({ src, alt, category }: GalleryImageProps) => {
  const [showLightbox, setShowLightbox] = useState(false);
  
  return (
    <>
      <div 
        className="overflow-hidden rounded-lg cursor-pointer group"
        onClick={() => setShowLightbox(true)}
      >
        <div className="relative h-64">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-montana-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category}
            </span>
          </div>
        </div>
      </div>
      
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowLightbox(false)}
          >
            <X size={32} />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;
 