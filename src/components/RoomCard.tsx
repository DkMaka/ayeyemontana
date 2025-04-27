import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface RoomCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  rating: number;
}

const RoomCard = ({ image, title, price, description, features, rating }: RoomCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={`room-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="relative h-64 overflow-hidden">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        
        {/* Main image */}
        <img 
          src={image}
          alt={`${title} room`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          width={400}
          height={256}
        />
        
        {/* Price badge */}
        <div className="absolute top-0 right-0 bg-montana-accent text-white px-4 py-2 text-sm font-bold">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 
            id={`room-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl font-bold"
          >
            {title}
          </h3>
          <div className="flex items-center text-montana-secondary" aria-label={`Rating: ${rating} out of 5`}>
            <Star className="w-5 h-5 fill-current" aria-hidden="true" />
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Room Features:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-montana-secondary mr-2" aria-hidden="true"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href="#booking" 
          className="inline-flex items-center text-montana-secondary font-display font-medium group-hover:text-montana-primary focus:outline-none focus:ring-2 focus:ring-montana-secondary focus:ring-offset-2 rounded px-2 py-1"
          aria-label={`Book ${title}`}
        >
          Book Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default RoomCard;