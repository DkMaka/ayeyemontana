import  { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
}

const DestinationCard = ({ image, title, description }: DestinationCardProps) => {
  return (
    <div className="card group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl text-white font-bold">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-gray-700 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-montana-blue font-display font-medium group-hover:text-montana-green"
        >
          Discover more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
 