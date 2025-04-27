import { Star } from 'lucide-react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

// Error Boundary Component
class TestimonialErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Testimonial Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full border border-red-300">
          <p className="text-red-500">Error displaying testimonial</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Testimonial = ({ 
  content, 
  author, 
  role, 
  avatar, 
  rating = 5 
}: TestimonialProps) => {
  // Safely handle and normalize rating
  const safeRating = (() => {
    const num = Number(rating);
    if (isNaN(num)) return 5; // Default if not a number
    return Math.min(Math.max(num, 0), 5); // Clamp between 0-5
  })();

  // Calculate star display
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="mb-4">
        <svg className="w-8 h-8 text-montana-secondary opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>
      
      <p className="text-gray-700 mb-6">{content}</p>
      
      {/* Star Rating Display */}
      <div className="flex mb-4" aria-label={`Rating: ${safeRating} out of 5`}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-5 h-5 fill-current text-yellow-400" />
        ))}
        
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            <Star className="w-5 h-5 fill-current text-gray-300" />
            <Star className="w-5 h-5 fill-current text-yellow-400 absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }} />
          </div>
        )}
        
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-5 h-5 fill-current text-gray-300" />
        ))}
      </div>
      
      {/* Author Info */}
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={`${author}'s avatar`}
            className="w-12 h-12 rounded-full mr-4 object-cover"
            width={48}
            height={48}
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-montana-primary text-white flex items-center justify-center mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Export with Error Boundary
export default function SafeTestimonial(props: TestimonialProps) {
  return (
    <TestimonialErrorBoundary>
      <Testimonial {...props} />
    </TestimonialErrorBoundary>
  );
}